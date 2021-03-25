import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import NuevaTarea from "../../../components/sepelio/tareas/NuevaTarea";
import toastr from "toastr";
import Router from "next/router";
import ListadoTareas from "../../../components/sepelio/tareas/ListadoTareas";

const editar = () => {


    const [events, guardarEvents] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerEventos();
        }
    }, []);



    const traerEventos = async () => {
        await axios
            .get(` http://190.231.32.232:5002/api/sepelio/tareas/traertareas`)
            .then((res) => {
                guardarEvents(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Layout>

            <ListadoTareas listado={events} />

        </Layout>
    )
}

export default editar