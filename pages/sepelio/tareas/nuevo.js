import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import NuevaTarea from "../../../components/sepelio/tareas/NuevaTarea";
import toastr from "toastr";
import Router from "next/router";

const nuevo = () => {

    let tareaRef = React.createRef()
    let siRef = React.createRef()
    let noRef = React.createRef()
    let inicioRef = React.createRef()
    let finRef = React.createRef()

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");

        }
    }, []);


    const nuevaTarea = async () => {
        const task = {
            title: tareaRef.current.value,
            allDay: "",
            start: moment(inicioRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
            end: moment(finRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
        }

        if (siRef.current.checked === true && noRef.current.checked === false) {
            task.allDay = 1
        } else if (siRef.current.checked === false && noRef.current.checked === true) {
            task.allDay = 0

        }

        await axios
            .post(` http://190.231.32.232:5002/api/sepelio/tareas/nuevatarea`, task)
            .then((res) => {

                if (res.status === 200)
                    toastr.success("La tarea se registro con exito", "Atencion")

                setTimeout(() => {
                    Router.reload()
                }, 500);
            })
            .catch((error) => {
                toastr.error("Ocurrio un error", "Atencion")
                console.log(error);
            });
    }

    return (
        <Layout>
            <NuevaTarea
                tareaRef={tareaRef}
                siRef={siRef}
                noRef={noRef}
                inicioRef={inicioRef}
                finRef={finRef}
                nuevaTarea={nuevaTarea}
            />
        </Layout>
    )
}

export default nuevo
