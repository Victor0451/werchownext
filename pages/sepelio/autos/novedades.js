import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from 'toastr'
import { ip } from '../../../config/config'
import FormRegistroNovedades from "../../../components/sepelio/autos/FormRegistroNovedades";


const novedades = () => {

    let patenteRef = React.createRef()
    let novedadRef = React.createRef()


    const [autos, guardarAutos] = useState(null)
    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)


    const traerAutos = async () => {
        await axios.get(`${ip}api/sepelio/autos/traerautos`)
            .then(res => {
                guardarAutos(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los autos", "ATENCION")
                console.log(error)
            })
    }


    const regNovedad = async () => {
        guardarErrores(null)

        const nov = {
            novedad: novedadRef.current.value,
            patente: patenteRef.current.value,
            operador: user,
            fecha: moment().format('YYYY-MM-DD')
        }


        if (nov.patente === "no") {
            guardarErrores("Debes seleccionar un auto")
        } else if (nov.novedad === "") {
            guardarErrores("Debes ingresar una novedad")
        } else {

            await axios.post(`${ip}api/sepelio/autos/registrarnovedades`, nov)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("La novedad se registro con exito", "ATENCION")
                    }
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al registrar la novedad", "ATENCION")
                    console.log(error)
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

            traerAutos()
        }
    }, []);

    return (
        <Layout>
            <FormRegistroNovedades
                autos={autos}
                patenteRef={patenteRef}
                novedadRef={novedadRef}
                regNovedad={regNovedad}
                errores={errores}
            />
        </Layout>
    )
}

export default novedades
