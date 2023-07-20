import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../../config/config";
import toastr from "toastr";
import moment from "moment";
import ListadoAccionesPrestamos from "../../../components/gestion/historial/ListadoAccionesPrestamos";

const historialprestamos = () => {

    const [user, guardarUsuario] = useState(null);
    const [listado, guardarListado] = useState([]);

    const traerHistorial = async () => {

        await axios.get(`${ip}api/sgi/historialacciones/traerhistorialprestamos`)
            .then(res => {
                console.log(res.data)
                guardarListado(res.data)

            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")

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

            traerHistorial()
        }
    }, []);

    return (
        <Layout>

            <ListadoAccionesPrestamos
                listado={listado}
            />

        </Layout>
    )
}

export default historialprestamos