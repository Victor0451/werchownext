import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import NuevaTarea from "../../../../components/gestion/sucursales/tareas/NuevaTarea";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import { registrarHistoria } from '../../../../utils/funciones'


const nuevo = () => {

    const [error, guardarError] = useState(null)
    const [user, guardarUsuario] = useState(null)


    let tareaRef = React.createRef()
    let siRef = React.createRef()
    let noRef = React.createRef()
    let inicioRef = React.createRef()
    let finRef = React.createRef()
    let prioridadRef = React.createRef()
    let sucursalRef = React.createRef()


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
        }
    }, []);


    const nuevaTarea = async () => {

        guardarError(null)

        const task = {
            title: `${tareaRef.current.value} - ${user}`,
            allDay: "",
            start: moment(inicioRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
            end: moment(finRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
            priority: prioridadRef.current.value,
            sucursal: sucursalRef.current.value,
            operador: user,
            leido: 0
        }

        if (siRef.current.checked === true && noRef.current.checked === false) {
            task.allDay = 1
        } else if (siRef.current.checked === false && noRef.current.checked === true) {
            task.allDay = 0
        }


        if (tareaRef.current.value === "") {
            guardarError('Debes ingresar una tarea')
        } else if (inicioRef.current.value === "" || finRef.current.value === "") {
            guardarError('Debes Seleccionar una fecha de inicio y fin')
        } else if (finRef.current.value <= inicioRef.current.value) {
            guardarError('La fecha de inicio de la tarea no puede ser mayor a la de finalizacion ')
        } else if (prioridadRef.current.value === "" || prioridadRef.current.value === "no") {
            guardarError('Debes Seleccionar la prioridad de la tarea')
        } else if (sucursalRef.current.value === "" || sucursalRef.current.value === "no") {
            guardarError('Debes Seleccionar la sucursal')
        } else {

            await axios
                .post(` ${ip}api/sgi/tareas/nuevatarea`, task)
                .then((res) => {

                    if (res.status === 200)
                        toastr.success("La tarea se registro con exito", "Atencion")

                    mandarMail(task)

                    let accion = `Se registro la programacion de una tarea ID: ${res.data.idevents} correspondiente al personal administrativo: ${user}`

                    registrarHistoria(accion, user)

                    setTimeout(() => {
                        Router.reload()
                    }, 1000);
                })
                .catch((error) => {
                    toastr.error("Ocurrio un error", "Atencion")
                    console.log(error);
                });
        }
    }

    const mandarMail = (array) => {
        fetch("/api/mail/sgi/mailtareas", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(array),
        })
            .then((res) => {
                if (res.status === 200) {
                    toastr.info(
                        "Se envio un email con la notificacion de la novedad",
                        "ATENCION"
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Layout>
            <NuevaTarea
                tareaRef={tareaRef}
                siRef={siRef}
                noRef={noRef}
                inicioRef={inicioRef}
                finRef={finRef}
                prioridadRef={prioridadRef}
                sucursalRef={sucursalRef}
                nuevaTarea={nuevaTarea}
                error={error}
            />
        </Layout>
    )
}

export default nuevo
