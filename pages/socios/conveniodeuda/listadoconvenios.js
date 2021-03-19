import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import ListadoConvenios from "../../../components/socios/conveniodeuda/ListadoConvenios";

const listadoconvenios = () => {

    const [listado, guardarListado] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");

        } else {
            traerListado()
        }

    }, []);

    const traerListado = async () => {
        axios.get(`http://190.231.32.232:5002/api/sgi/socios/traerconvenios`)
            .then(res => {
                guardarListado(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Layout>
            <ListadoConvenios listado={listado} />
        </Layout>
    )
}

export default listadoconvenios
