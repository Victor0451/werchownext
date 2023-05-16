import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import Spinner from "../../../components/layout/Spinner";
import jsCookie from "js-cookie";
import Router from "next/router";
import { ip } from '../../../config/config'
import FormTurno from "../../../components/socios/turnobajas/FormTurno";
import moment from "moment";
import toastr from "toastr";

const turno = () => {

    const dniRef = React.createRef()
    const movilRef = React.createRef()
    const telefonoRef = React.createRef()
    const motivoRef = React.createRef()
    const detalleRef = React.createRef()


    const [empresa, guardarEmpresa] = useState(null);
    const [ficha, guardarSocio] = useState(null);
    const [errores, guardarErrores] = useState(null);
    const [operador, guardarUsuario] = useState(null)
    const [motivos, guardarMotivos] = useState([])


    const traerSocio = async () => {


        const dni = dniRef.current.value

        if (dni === "") {

            guardarErrores("Debes ingresar el DNI del solicitante")

        } else {
            await axios
                .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
                .then((res) => {

                    if (res.data[0][0]) {

                        guardarSocio(res.data[0][0])

                    } else if (!res.data[0][0]) {

                        axios
                            .get(`${ip}api/werchow/maestro/titulardnim/${dni}`)
                            .then(resM => {

                                if (resM.data[0][0]) {

                                    guardarSocio(resM.data[0][0])

                                } else if (!resM.data[0][0]) {

                                    axios
                                        .get(`${ip}api/werchow/maestro/adherente/${dni}`)
                                        .then(resA => {

                                            if (resA.data[0][0]) {

                                                guardarSocio(resA.data[0][0])

                                            } else if (!resA.data[0][0]) {

                                                axios
                                                    .get(`${ip}api/werchow/maestro/adherentem/${dni}`)
                                                    .then(resAM => {

                                                        if (resAM.data[0][0]) {

                                                            guardarSocio(resAM.data[0][0])

                                                        } else if (!resAM.data[0][0]) {

                                                            axios.get(`${ip}api/sgi/servicios/traeradhprovidni/${dni}`)
                                                                .then(resAP => {

                                                                    if (resAP.data.length > 0) {

                                                                        guardarSocio(resAP.data[0])

                                                                    } else {

                                                                        toastr.warning("No se encuentra el beneficiario", "ATENCION")

                                                                    }

                                                                }).catch(error => {
                                                                    console.log(error)
                                                                    toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                                                })

                                                        }
                                                    })
                                                    .catch(error => {
                                                        console.log(error)
                                                        toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                                    })

                                            }
                                        })
                                        .catch(error => {
                                            console.log(error)
                                            toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                        })
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                            })



                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                })
        }



    }

    const registrarTurno = async () => {

        guardarErrores(null)

        const turno = {
            contrato: ficha.CONTRATO,
            apellido: ficha.APELLIDOS,
            nombre: ficha.NOMBRES,
            dni: ficha.NRO_DOC,
            telefono: telefonoRef.current.value,
            movil: movilRef.current.value,
            fecha_pedido: moment().format('YYYY-MM-DD HH:mm:ss'),
            fecha_turno: moment().add(2, 'days').format('YYYY-MM-DD HH:mm:ss'),
            operador: operador,
            motivo: motivoRef.current.value,
            estado: 0,
            respuesta: '',
            operador_atencion: '',
            detalle: detalleRef.current.value,
            empresa: ficha.EMPRESA
        }


        if (turno.motivo === "no") {

            guardarErrores("Debes ingresar un motivo de atencion")

        } else if (turno.motivo === "10" && turno.detalle === "") {

            guardarErrores("Elegiste 'OTRO (DETALLE)' como opcion, por favor detalla el motivo de atencion")

        } else {
            console.log(turno)
            await axios.post(`${ip}api/sgi/turnobajas/registrarturno`, turno)
                .then(res => {

                    if (res.status === 200) {
                        toastr.success("Se registro el turno con exito", "ATENCION")

                        setTimeout(() => {
                            Router.reload()

                        }, 1000);
                    }
                }).catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error", "ATENCION")
                })

        }


    }

    const traerMotivos = async () => {

        await axios.get(`${ip}api/sgi/turnobajas/motivosatencion`)
            .then(res => {

                guardarMotivos(res.data[0])
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error", "ATENCION")
            })


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

            traerMotivos()
        }
    }, []);

    return (
        <Layout>
            <FormTurno
                dniRef={dniRef}
                telefonoRef={telefonoRef}
                movilRef={movilRef}
                motivoRef={motivoRef}
                traerSocio={traerSocio}
                errores={errores}
                ficha={ficha}
                registrarTurno={registrarTurno}
                motivos={motivos}
                detalleRef={detalleRef}
            />
        </Layout>
    )
}

export default turno

