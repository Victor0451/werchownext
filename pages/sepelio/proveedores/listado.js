import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import moment from "moment";
import axios from "axios";
import { ip } from '../../../config/config'
import toastr from 'toastr'
import ListadoProveedores from "../../../components/sepelio/proveedores/ListadoProveedores";


const listado = () => {

    const [provs, guardarProvs] = useState(null)

    let token = JsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerProveedores()
        }
    }, []);

    const traerProveedores = async () => {
        await axios.get(`${ip}api/sepelio/proveedores/traerprov`)
            .then(res => {
                guardarProvs(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los proveedores", "ATENCION")
                console.log(error)
            })
    }

    const eliminarProv = async (id) => {
        await axios.delete(`${ip}api/sepelio/proveedores/eliminarprov/${id}`)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("El proveedor se elimino con exito", "ATENCION")
                }

                setTimeout(() => {
                    traerProveedores()
                }, 300);
            })
            .catch(error => {
                toastr.error("Ocurrio un error al eliminar el proveedor", "ATENCION")
                console.log(error)
            })
    }

    return (
        <Layout>
            <ListadoProveedores provs={provs} eliminarProv={eliminarProv} />
        </Layout>
    )
}

export default listado
