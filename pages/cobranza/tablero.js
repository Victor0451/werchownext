import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../config/config'
import { registrarHistoria } from "../../utils/funciones";
import FormTablero from '../../components/cobranza/FormTablero'
import ModalEvent from "../../components/cobranza/ModalEvent";
import { v4 as uuidv4 } from 'uuid';

const Tablero = () => {

    let titleRef = React.createRef()
    let priorityRef = React.createRef()
    let userRef = React.createRef()
    let detailRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [events, saveEvents] = useState([])
    const [eventSelected, saveEventSelected] = useState([])
    const [edit, saveEdit] = useState(false)
    const [delet, saveDelete] = useState(false)

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

            getEvents()

        }
    }, []);





    // FUNCIONES CALENDARIO

    const handleDateSelect = (selectInfo) => {

        let title = prompt('Ingresa la efectividad')
        let holiday = prompt('Identifica si el dia es: 1 para "NORMAL", 2 para "FERIADO"')
        let detail = prompt('Puedes ingresar si es necesario, una descripcion mas detallada')

        let calendarApi = selectInfo.view.calendar

        calendarApi.unselect()

        if (title != null) {

            let ev = {
                id: uuidv4(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
                user: user,
                holiday,
                detail
            }

            console.log(ev)

            saveEvents([...events, ev])

            postEvent(ev)

        } else {
            toastr.warning("No registraste el evento", "ATENCION")
        }

    }

    const editEnable = () => {
        if (edit === true) {
            saveEdit(false)
            toastr.info("Modo edicion desactivado", "ATENCION")
        } else if (edit === false) {
            saveEdit(true)
            toastr.info("Modo edicion activado", "ATENCION")
        }
    }

    const deleteEnable = () => {
        if (delet === true) {
            saveDelete(false)
            toastr.info("Modo eliminacion desactivado", "ATENCION")
        } else if (delet === false) {
            saveDelete(true)
            toastr.info("Modo eliminacion activado", "ATENCION")
        }
    }

    const selEvent = (eventInfo) => {

        if (edit === true && delet === false) {

            let evE = {
                id: eventInfo.event.id,
                title: eventInfo.event.title,
                start: eventInfo.event.start,
                end: eventInfo.event.end,
                allDay: eventInfo.event.allDay,

            }

            putEvent(evE)

        } else if (edit === false && delet === false) {

            saveEventSelected(eventInfo.event)

            let myModal = new bootstrap.Modal(document.getElementById('modalVista'))
            myModal.show()

        } else if (edit === false && delet === true) {

            deleteEvents(eventInfo.event.id)

        }
    }

    // --------------------------------------

    // APIS

    const postEvent = async (data) => {
        await axios.post(`${ip}api/sgi/tablero/nuevo`, data)
            .then(res => {

                if (res.status === 200) {
                    toastr.success("El evento se registro correctamente", "ATENCION")

                    getEvents()
                }

            })
            .catch(error => {
                console.log(error)

                toastr.danger("Ocurrio un error al registrar el evento", "ATENCION")
            })
    }

    const getEvents = async () => {

        await axios.get(`${ip}api/sgi/tablero/traertablero`)
            .then(res => {


                saveEvents(res.data)

            })
            .catch(error => {
                console.log(error)

                toastr.danger("Ocurrio un error al cargar los eventos", "ATENCION")
            })
    }

    const putEvent = async (data) => {
        
        await axios.put(`${ip}api/sgi/tablero/editar/${data.id}`, data)
            .then(res => {

                if (res.status === 200) {

                    toastr.success("El evento se actualizo correctamente", "ATENCION")

                    getEvents()

                }

            })
            .catch(error => {
                console.log(error)

                toastr.danger("Ocurrio un error al registrar el evento", "ATENCION")
            })
    }

    const deleteEvents = async (id) => {

        await axios.delete(`${ip}api/sgi/tablero/eliminar/${id}`)
            .then(res => {

                if (res.status === 200) {

                    toastr.success("Evento eliminado correctamente", "ATENCION")

                    getEvents()
                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al eliminar el evento", "ATENCION")
            })

    }

    // --------------------------------------



    return (
        <Layout>
            <FormTablero
                events={events}
                edit={edit}
                handleDateSelect={handleDateSelect}
                selEvent={selEvent}
                editEnable={editEnable}
                priorityRef={priorityRef}
                userRef={userRef}
                detailRef={detailRef}
                delet={delet}
                deleteEnable={deleteEnable}
            />

            <ModalEvent
                evento={eventSelected}
            />
        </Layout>
    )
}

export default Tablero