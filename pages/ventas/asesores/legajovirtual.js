import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from 'toastr'
import jsCookie from "js-cookie";
import Router from "next/router";
import ListadoAsesores from "../../../components/ventas/asesores/ListadoAsesores";
import { ip } from '../../../config/config'

const legajovirtual = () => {

    const [asesores, guardarAsesores] = useState(null)
    const [detalle, guardarDetalle] = useState(null)
    const [titulo, guardarTitulo] = useState(null)
    const [archivos, guardarArchivos] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerAsesores()
        }
    }, []);

    const traerAsesores = () => {
        axios.get(`${ip}api/ventas/asesores/asesoresactivos`)
            .then(res => {
                guardarAsesores(res.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }

    const traerDetalle = (id, apellido, nombre) => {
        guardarDetalle(null)

        let asesor = `${apellido}, ${nombre}`

        guardarTitulo(asesor)

        axios.get(`${ip}api/ventas/asesores/detalleasesor/${id}`)
            .then(res => {
                guardarDetalle(res.data[0])
                traerArchivos(id)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const traerArchivos = async (id) => {
        await axios
            .get(
                `${ip}api/archivos/legajovirtualasesores/listaarchivos/${id}`
            )
            .then((res) => {
                let archivos = res.data;
                guardarArchivos(archivos);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const eliminarArchivos = async (id) => {
        console.log(id);
        await axios
            .delete(
                `${ip}api/archivos/legajovirtualasesores/eliminararchivos/${id}`
            )
            .then((res) => {
                if (res.status === 200) {
                    toastr.success("El archivo se elimino", "ATENCION");
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <Layout>
            <ListadoAsesores asesores={asesores} detalle={detalle} traerDetalle={traerDetalle} titulo={titulo} archivos={archivos} eliminarArchivos={eliminarArchivos} />
        </Layout>
    )
}

export default legajovirtual
