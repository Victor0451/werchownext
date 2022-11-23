import React, { useState, useEffect } from "react";
import toastr from "toastr";
import { ip } from "../../../config/config";
import { confirmAlert } from "react-confirm-alert";
import { registrarHistoria } from "../../../utils/funciones";
import Layout from "../../../components/layout/Layout";
import ListadoPreciosAtaud from "../../../components/sepelio/ataudes/ListadoPreciosAtaud";
import axios from "axios";
import jsCookie from "js-cookie"

const ListadoPrecios = () => {

    const [user, guardarUsuario] = useState(null);
    const [listado, guardarListado] = useState(null)

    const traerListadoPrecios = async () => {

        await axios.get(`${ip}api/sepelio/ataudes/traerprecios`)
            .then(res => {

                guardarListado(res.data)

            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al traer el listado de precios", "ATENCION")

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

            traerListadoPrecios()
        }
    }, []);

    return (
        <Layout>
            <ListadoPreciosAtaud
                listado={listado}
            />
        </Layout>
    )
}

export default ListadoPrecios