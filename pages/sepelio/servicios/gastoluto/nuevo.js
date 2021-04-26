import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from '../../../../config/config'
import moment from 'moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import FormGastoLuto from "../../../../components/sepelio/servicios/gastoluto/FormGastoLuto";

const nuevo = () => {

    const [servicio, guardarServicio] = useState(null);
    const [ataud, guardarAtaud] = useState(null)
    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)


    let token = jsCookie.get("token");
    let router = useRouter();

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else if (token) {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

            const id = router.query.id;
            const idservicio = router.query.idservicio;

            traerSolicitud(id);

            if (servicio) {
                traerAtaud(servicio.idataud)
            }



        }
    }, []);


    const traerSolicitud = async (id) => {
        await axios
            .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
            .then((res) => {
                const servicio = res.data;
                guardarServicio(servicio);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const traerAtaud = async (idataud) => {
        await axios
            .get(`${ip}api/sepelio/ataudes/ataud/${idataud}`)
            .then((res) => {
                guardarAtaud(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Layout>
            <FormGastoLuto servicio={servicio} ataud={ataud} />
        </Layout>
    )
}

export default nuevo
