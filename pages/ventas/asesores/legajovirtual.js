import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import ListadoAsesores from "../../../components/ventas/asesores/ListadoAsesores";

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
        axios.get(`http://192.168.1.102:5002/api/ventas/asesores/asesoresactivos`)
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

        axios.get(`http://192.168.1.102:5002/api/ventas/asesores/detalleasesor/${id}`)
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
                `http://190.231.32.232:5002/api/archivos/legajovirtualasesores/listaarchivos/${id}`
            )
            .then((res) => {
                let archivos = res.data;
                guardarArchivos(archivos);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <Layout>
            <ListadoAsesores asesores={asesores} detalle={detalle} traerDetalle={traerDetalle} titulo={titulo} archivos={archivos} />
        </Layout>
    )
}

export default legajovirtual
