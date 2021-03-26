import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import ListadoTareas from "../../../components/sepelio/tareas/ListadoTareas";
import { confirmAlert } from 'react-confirm-alert'


const editar = () => {

    const [operadorsep, guardarOperadorSep] = useState(null)
    const [error, guardarError] = useState(null)

    let inicioRef = React.createRef()
    let finRef = React.createRef()
    let siRef = React.createRef()
    let noRef = React.createRef()
    let tareaRef = React.createRef()
    let opRef = React.createRef()

    const [events, guardarEvents] = useState(null)
    const [task, guardarTask] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerEventos();
            traerOperador()
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

    const traerTarea = async (id) => {
        guardarTask(null)
        await axios
            .get(` http://190.231.32.232:5002/api/sepelio/tareas/traertarea/${id}`)
            .then((res) => {
                guardarTask(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const editarTarea = async () => {

        const taskedit = {
            title: `${tareaRef.current.value} - ${opRef.current.value}`,
            allDay: "",
            start: moment(inicioRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
            end: moment(finRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
        }

        if (siRef.current.checked === true && noRef.current.checked === false) {
            task.allDay = 1
        } else if (siRef.current.checked === false && noRef.current.checked === true) {
            task.allDay = 0
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

        await axios
            .put(` http://190.231.32.232:5002/api/sepelio/tareas/editartarea/${task.idevents}`, taskedit)
            .then((res) => {
                if (res.status === 200) {
                    toastr.success("La tarea se edito con exito", "ATENCION")

                    setTimeout(() => {
                        Router.reload()
                    }, 1000);

                }
            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error", "ATENCION")
            });


    }

    const eliminarTarea = (id) => {

        confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro que quieres eliminar la tarea?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {
                        deleteTask(id)
                    }
                },
                {
                    label: 'No',

                }
            ]
        });


    }

    const deleteTask = async (id) => {
        await axios
            .delete(` http://190.231.32.232:5002/api/sepelio/tareas/eliminartarea/${id}`,)
            .then((res) => {

                if (res.status === 200)
                    toastr.success("La tarea se elimino con exito", "Atencion")
                setTimeout(() => {
                    Router.reload()
                }, 1000);
            })
            .catch((error) => {
                toastr.error("Ocurrio un error", "Atencion")
                console.log(error);
            });
    }

    const traerOperador = async () => {
        await axios
            .get(
                `http://190.231.32.232:5002/api/sepelio/serviciogastos/operadoressep`
            )
            .then((res) => {
                guardarOperadorSep(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };



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
                opRef={opRef}
                task={task}
                editarTarea={editarTarea}
                eliminarTarea={eliminarTarea}
                operadorsep={operadorsep}
                error={error}
            />
        </Layout>
    )
}

export default editar