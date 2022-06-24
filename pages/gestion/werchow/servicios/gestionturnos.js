import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import { registrarHistoria } from '../../../../utils/funciones'
import FormGestionTurno from "../../../../components/gestion/werchow/servicios/FormGestionTurno";
import ListadoTurnosRegistrados from "../../../../components/gestion/werchow/servicios/ListadoTurnosRegistrados";
import ModalRegistrarTurno from "../../../../components/gestion/werchow/servicios/ModalRegistrarTurno";

const GestionTurnos = () => {

    let medicoRef = React.createRef()
    let diaRef = React.createRef()
    let turnoRef = React.createRef()
    let horaRef = React.createRef()
    let pacienteRef = React.createRef()
    let obraSocRef = React.createRef()
    let telefonoRef = React.createRef()




    const [user, guardarUsuario] = useState(null);
    const [medicos, guardarMedicos] = useState(null);
    const [listado, guardarListado] = useState([]);
    const [errores, guardarErrores] = useState(null);
    const [errores2, guardarErrores2] = useState(null);
    const [flag, guardarFlag] = useState(false);




    const traerMedicos = async (f) => {

        await axios.get(`${ip}api/sgi/servicios/traermedicos`)
            .then(res => {
                guardarMedicos(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
            })

    }

    const buscarListadoTurnos = async () => {

        guardarErrores(null)

        if (medicoRef.current.value === "no") {

            guardarErrores("Debes seleccionar un medico")

        } else if (diaRef.current.value === "") {

            guardarErrores("Debes seleccionar un dia")

        } else if (turnoRef.current.value === "no") {

            guardarErrores("Debes seleccionar un turno")

        } else {

            guardarFlag(true)

            await axios.get(`${ip}api/sgi/servicios/buscarturnos`, {
                params: {
                    medico: medicoRef.current.value,
                    dia: diaRef.current.value,
                    turno: turnoRef.current.value
                }
            })
                .then(res => {

                    guardarListado(res.data)

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
                })

        }
    }

    const registrarTurno = async () => {

        guardarErrores2(null)

        let turnoReg = {
            turno: turnoRef.current.value,
            fecha: moment(diaRef.current.value).format('YYYY-MM-DD'),
            hora: horaRef.current.value,
            doctor: medicoRef.current.value,
            paciente: pacienteRef.current.value,
            obra_soc: obraSocRef.current.value,
            telefono: telefonoRef.current.value,
            operador: user,
            estado: 0
        }

        if (horaRef.current.value === "") {

            guardarErrores2("Debes ingresar una hora")

        } else if (pacienteRef.current.value === "") {

            guardarErrores2("Debes ingresar el apellido y nombre del paciente")

        } else {

            await axios.post(`${ip}api/sgi/servicios/regturno`, turnoReg)
                .then(res => {

                    if (res.status === 200) {

                        toastr.success("Se registro el turno correctamente", "ATENCION")

                        let accion = `Se registro turno del paciente: ${turnoReg.paciente}, para el DR/DRA: ${turnoReg.doctor} para el dia: ${turnoReg.fecha} - ${turnoReg.hora}`

                        registrarHistoria(accion, user)

                        buscarListadoTurnos()

                    }

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al registrar el turno", "ATENCION")
                })

        }


    }

    const usaWerchow = (flag) => {

        if (flag === "si") {
            setTimeout(() => {
                document.getElementById("obrasoc").value = "WERCHOW";
                document.getElementById("obrasoc").readOnly = true;
            }, 200);
        } else if (flag === "no") {
            setTimeout(() => {
                document.getElementById("obrasoc").readOnly = false;
                document.getElementById("obrasoc").value = "";
            }, 200);
        }
    };

    const estadoTurno = async (flag, id) => {

        if (flag === "si") {

            await axios.put(`${ip}api/sgi/servicios/updateestadoturno/${id}`, {
                params: {
                    estado: 1
                }
            })
                .then(res => {

                    if (res.status === 200) {
                        toastr.success("El estado del turno se cambio con exito", "ATENCION")

                        buscarListadoTurnos()
                    }

                })
                .catch(error => {
                    console.log(error)

                    toastr.error("Ocurrio un error al cambiar el estado del turno", "ATENCION")
                })

        } else if (flag === "no") {


            await axios.put(`${ip}api/sgi/servicios/updateestadoturno/${id}`, {
                params: {
                    estado: 2
                }
            })
                .then(res => {

                    if (res.status === 200) {
                        toastr.success("El estado del turno se cambio con exito", "ATENCION")

                        buscarListadoTurnos()

                    }

                })
                .catch(error => {
                    console.log(error)

                    toastr.error("Ocurrio un error al cambiar el estado del turno", "ATENCION")
                })

        }

    }

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

            traerMedicos()


        }
    }, []);

    return (
        <Layout>
            <FormGestionTurno
                medicos={medicos}
                medicoRef={medicoRef}
                diaRef={diaRef}
                turnoRef={turnoRef}
                errores={errores}
                buscarListadoTurnos={buscarListadoTurnos}
            />

            {flag === true ? (
                <ListadoTurnosRegistrados
                    listado={listado}
                    estadoTurno={estadoTurno}
                />
            ) : flag === false ? null
                : null}


            <ModalRegistrarTurno
                horaRef={horaRef}
                pacienteRef={pacienteRef}
                obraSocRef={obraSocRef}
                telefonoRef={telefonoRef}
                registrarTurno={registrarTurno}
                errores={errores2}
                usaWerchow={usaWerchow}

            />

        </Layout>
    )
}

export default GestionTurnos