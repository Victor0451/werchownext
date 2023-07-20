import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from 'toastr'
import { ip } from '../../../config/config'
import ListadoHojaRuta from "../../../components/sepelio/autos/ListadoHojaRuta";

const listadohojaruta = () => {

    const [listhojaruta, guardarListHojaRuta] = useState(null)

    let token = jsCookie.get("token");

    const traerHojasRutas = async () => {
        await axios.get(`${ip}api/sepelio/autos/listadohojasruta`)
            .then(res => {
                guardarListHojaRuta(res.data)
                toastr.success("Listado generado con exito", "ATENCION")
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el listado", "ATENCION")
            })

    }

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerHojasRutas()
        }
    }, []);



    return (
        <Layout>
            <ListadoHojaRuta listhojaruta={listhojaruta} />
        </Layout>
    )
}

export default listadohojaruta
