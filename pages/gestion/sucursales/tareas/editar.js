import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import ListadoTareas from "../../../../components/gestion/sucursales/tareas/ListadoTareas";
import { confirmAlert } from 'react-confirm-alert'
import { ip } from '../../../../config/config'
import { registrarHistoria } from '../../../../utils/funciones'


const editar = () => {

    const [error, guardarError] = useState(null)

    let inicioRef = React.createRef()
    let finRef = React.createRef()
    let siRef = React.createRef()
    let noRef = React.createRef()
    let tareaRef = React.createRef()
    let priorityRef = React.createRef()
    let sucursalRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [events, guardarEvents] = useState(null)
    const [task, guardarTask] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);

                traerEventos(userData.usuario);


            }

        }
    }, []);



    const traerEventos = async (id) => {
        await axios
            .get(`${ip}api/sgi/tareas/traertareasop/${id}`)
            .then((res) => {
                guardarEvents(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerTarea = async (row) => {
        guardarTask(null)
        guardarTask(row)

    };

    const editarTarea = async () => {

        const taskedit = {
            title: `${tareaRef.current.value} - ${user}`,
            allDay: "",
            start: moment(inicioRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
            end: moment(finRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
            priority: priorityRef.current.value,
            sucursal: sucursalRef.current.value
        }

        if (siRef.current.checked === true && noRef.current.checked === false) {
            taskedit.allDay = 1
        } else if (siRef.current.checked === false && noRef.current.checked === true) {
            taskedit.allDay = 0
        }


        if (inicioRef.current.value === "") {
            taskedit.start = moment(task.start).format('YYYY-MM-DD HH:mm:ss')
        }

        if (finRef.current.value === "") {
            taskedit.end = moment(task.end).format('YYYY-MM-DD HH:mm:ss')
        }

        if (taskedit.allDay === "") {
            taskedit.allDay = task.allDay
        }

        if (taskedit.priority === "no") {
            taskedit.priority = task.priority
        }

        if (taskedit.sucursal === "no") {
            taskedit.sucursal = task.sucursal
        }


        await axios
            .put(` ${ip}api/sgi/tareas/editartarea/${task.idevents}`, taskedit)
            .then((res) => {
                console.log(res.data)
                if (res.status === 200) {
                    toastr.success("La tarea se edito con exito", "ATENCION")

                    setTimeout(() => {

                        traerEventos(user)

                        guardarTask(null)

                        let accion = `Se edito la tarea ID: ${task.idevents} del personal administrativo: ${user}. `

                        registrarHistoria(accion, user)
                    }, 500);

                }
            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error", "ATENCION")
            });
    }

    const eliminarTarea = async (id) => {

        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro que quieres eliminar la tarea?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {
                        axios
                            .delete(` ${ip}api/sgi/tareas/eliminartarea/${id}`,)
                            .then((res) => {

                                if (res.status === 200)
                                    toastr.success("La tarea se elimino con exito", "Atencion")
                                setTimeout(() => {
                                    traerEventos()
                                }, 500);
                            })
                            .catch((error) => {
                                toastr.error("Ocurrio un error", "Atencion")
                                console.log(error);
                            });
                    }
                },
                {
                    label: 'No',

                }
            ]
        });


    }



    return (
        <Layout>
            <ListadoTareas
                listado={events}
                traerTarea={traerTarea}
                inicioRef={inicioRef}
                finRef={finRef}
                siRef={siRef}
                noRef={noRef}
                tareaRef={tareaRef}
                sucursalRef={sucursalRef}
                priorityRef={priorityRef}
                task={task}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
                error={error}
            />
        </Layout>
    )
}

export default editar