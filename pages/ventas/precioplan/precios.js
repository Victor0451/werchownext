import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import Router from "next/router";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";
import Planes from '../../../components/ventas/precioplan/Planes'
import { ip } from '../../../config/config'

const precios = () => {

    const [planes, guardarPlanes] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerPlanes()
        }
    }, []);

    const traerPlanes = async () => {

        axios.get(`${ip}api/ventas/planes/consultaplanes`)
            .then(res => {
                guardarPlanes(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <Layout>
            <Planes planes={planes} />
        </Layout>
    )
}

export default precios
