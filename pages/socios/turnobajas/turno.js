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


    const [empresa, guardarEmpresa] = useState(null);
    const [ficha, guardarFicha] = useState(null);
    const [errores, guardarErrores] = useState(null);
    const [operador, guardarUsuario] = useState(null)

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
        }
    }, []);


    const buscarTitular = async (e) => {
        e.preventDefault();

        guardarFicha(null);
        guardarErrores(null);

        if (dniRef.current.value !== "") {
            let dni = dniRef.current.value;

            await axios
                .get(
                    `${ip}api/sgi/turnobajas/consultarficha/${dni}`
                )
                .then((res) => {

                    if (res.data === null) {
                        const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                        guardarErrores(errores);
                    } else {
                        guardarFicha(res.data)
                        guardarEmpresa('W')
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toastr.error(
                        "Ocurrio un error",
                        "ATENCION"
                    );

                });
        } else if (dniRef.current.value === "") {
            const errores = "Debes Ingresar Un Numero De DNI";
            guardarErrores(errores);
        }
    };

    const buscarTitularM = async (e) => {
        e.preventDefault();

        guardarFicha(null);
        guardarErrores(null);

        if (dniRef.current.value !== "") {
            let dni = dniRef.current.value;

            await axios
                .get(
                    `${ip}api/sgi/turnobajas/consultarficham/${dni}`
                )
                .then((res) => {

                    if (res.data === null) {
                        const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                        guardarErrores(errores);
                    } else {
                        guardarFicha(res.data)
                        guardarEmpresa('M')
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toastr.error(
                        "Ocurrio un error",
                        "ATENCION"
                    );

                });
        } else if (dniRef.current.value === "") {
            const errores = "Debes Ingresar Un Numero De DNI";
            guardarErrores(errores);
        }
    };

    const registrarTurno = async () => {


        await axios.get(`${ip}api/sgi/turnobajas/registroexistente/${ficha.NRO_DOC}`)
            .then(res => {
                if (!res.data) {
                    postTurno()
                } else {
                    toastr.warning("El socio ya solicito un turno", "ATENCION")
                }
            })
    }

    const postTurno = async () => {
        const turno = {
            contrato: ficha.CONTRATO,
            apellido: ficha.APELLIDOS,
            nombre: ficha.NOMBRES,
            dni: ficha.NRO_DOC,
            telefono: telefonoRef.current.value,
            movil: movilRef.current.value,
            fecha_pedido: moment().format('YYYY-MM-DD HH:mm:ss'),
            fecha_turno: moment().add('days', 3).format('YYYY-MM-DD HH:mm:ss'),
            operador: operador,
            motivo: motivoRef.current.value,
            empresa: empresa,
            estado: 0,
            respuesta: '',
            operador_atencion: ''
        }

        await axios.post(`${ip}api/sgi/turnobajas/registrarturno`, turno)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("Se registro el turno con exito", "ATENCION")
                }
            }).catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error", "ATENCION")
            })
    }

    return (
        <Layout>
            <FormTurno dniRef={dniRef} telefonoRef={telefonoRef} movilRef={movilRef} motivoRef={motivoRef} buscarTitular={buscarTitular} buscarTitularM={buscarTitularM} errores={errores} ficha={ficha} registrarTurno={registrarTurno} />
        </Layout>
    )
}

export default turno

