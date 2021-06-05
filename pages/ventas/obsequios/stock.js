import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from 'toastr'
import jsCookie from "js-cookie";
import Router from "next/router";
import { ip } from '../../../config/config'
import FormNuevoStock from "../../../components/ventas/obsequios/FormNuevoStock";
import moment from "moment";
import Stock from "../../../components/ventas/obsequios/Stock";

const stock = () => {

    const [stock, guardarStock] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else if (token) {
            traerStock()

        }

    }, []);

    const traerStock = async () => {
        await axios.get(`${ip}api/ventas/obsequios/stock`)
            .then(res => {
                guardarStock(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer el stock", "ATENCION")
                console.log(error)
            })
    }

    return (
        <Layout>
            <Stock stock={stock} />
        </Layout>
    )
}

export default stock

