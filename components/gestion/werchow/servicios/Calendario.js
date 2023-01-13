import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import ModalCalendarioVisita from './ModalCalendarioVisita';


const Calendario = ({
    eventSelected,
    visitas,
    detVisi,
}) => {

    const localizer = momentLocalizer(moment);

    return (

        <div className='mt-4 mb-4'>
            <div className="collapse width" id="collapseWidthExample">
                <div className="card card-body" >
                    <Calendar
                        selectable={true}
                        onSelectEvent={eventSelected}
                        style={{ height: "80vh" }}
                        localizer={localizer}
                        events={visitas}
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
                        defaultView="month"
                    />
                </div>
            </div>

            <ModalCalendarioVisita
                detVisi={detVisi}
            />

        </div>


    )
}

export default Calendario