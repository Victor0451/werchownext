import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import ListadoCajas from "../../../../components/gestion/sucursales/cajas/ListadoCajas";


const listado = () => {

    const [cajas, guardarCajas] = useState(null)
    const [row, guardarRow] = useState([])
    const [user, guardarUsuario] = useState(null)

    const traerCajas = async (id, p) => {

        await axios.get(`${ip}api/sgi/cajasucursales/traercajasop/${id}`,
            {
                params: {
                    perfil: p
                }
            }
        )
            .then(res => {

                guardarCajas(res.data)
                toastr.success("se genero el listado con exito", "ATENCION")
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
                traerCajas(userData.usuario, userData.perfil)
            }


        }
    }, []);

    return (
        <Layout>
            <ListadoCajas
                cajas={cajas}

            />

        </Layout>
    )
}

export default listado

