import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import { ip } from '../../../config/config'
import ModalEvento from "../../../components/sepelio/tareas/ModalEvento";
import Spinner from "../../../components/layout/Spinner";

const calendario = () => {

    const [events, guardarEvents] = useState([]);
    const [evento, guardarEvento] = useState(null);


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
            .get(` ${ip}api/sepelio/tareas/traertareas`)
            .then((res) => {
                let evs = res.data;

                let arr = [];

                for (let i = 0; i < evs.length; i++) {
                    let evarr = {
                        title: evs[i].title,
                        allDay: evs[i].allDay,
                        start: new Date(evs[i].start),
                        end: new Date(evs[i].end),
                        priority: evs[i].priority
                    };

                    if (evarr.allDay === 1) {
                        evarr.allDay = true;
                    } else if (evarr.allDay === 0) {
                        evarr.allDay = false;
                    }

                    arr.push(evarr);

                    guardarEvents(arr);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const localizer = momentLocalizer(moment);

    const slotSelected = (slotInfo) => {


    }

    const eventSelected = (eventInfo) => {
        guardarEvento(eventInfo)

        let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
        myModal.show()

    }

    return (
        <Layout>
            <div className="container mt-4 border border-dark p-4 list">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="">
                            <strong>
                                <u>Planificacion de tareas de sepelio</u>
                            </strong>
                        </h3>
                    </div>
                    <div className="col-md-4">
                        <a href="/sepelio/tareas/nuevo" className="btn btn-sm btn-block btn-primary">
                            Crear Nueva Tarea
                        </a>
                    </div>
                </div>


                <div className="mt-4 border border-dark">

                    {events.length !== 0 ? (
                        <Calendar
                            selectable={true}
                            onSelectSlot={slotSelected}
                            onSelectEvent={eventSelected}
                            style={{ height: "80vh" }}
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            messages={{
                                next: "Sig",
                                previous: "Ant",
                                today: "Hoy",
                                month: "Mes",
                                week: "Semana",
                                day: "Día",
                            }}
                            defaultView="week"
                            eventPropGetter={events => ({
                                style: {
                                    backgroundColor: events.priority === 1 ? "#3FD503"
                                        : events.priority === 2 ? "#E6F82F"
                                            : events.priority === 3 ? "#F82F2F"
                                                : null,
                                    color: 'black'
                                }
                            })}
                        />
                    ) : <div className="mt-4 mb-4">
                        <Spinner />
                    </div>
                    }

                </div>
            </div>

            <ModalEvento evento={evento} />
        </Layout>
    )
}

export default calendario
