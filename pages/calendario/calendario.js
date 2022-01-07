import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import { ip } from "../../config/config";
import Spinner from "../../components/layout/Spinner";

const calendario = () => {
  const [events, guardarEvents] = useState([]);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerEventos();

      // prepEvs();
    }
  }, []);

  const traerEventos = async () => {
    axios
      .get(` ${ip}api/sgi/eventos/traereventos`)
      .then((res) => {
        let evs = res.data;

        let arr = [];

        for (let i = 0; i < evs.length; i++) {
          let evarr = {
            title: evs[i].title,
            allDay: evs[i].allDay,
            start: new Date(evs[i].start),
            end: new Date(evs[i].end),
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

  return (
    <Layout>
      <div className="container list mt-4 border border-dark p-4 alert alert-dark">
        <h1 className="">
          <strong>
            <u> Calendario de dias Festivos</u>
          </strong>
        </h1>

        {!events ? (<Spinner />)
          : (
            <div className="mt-4 border border-dark list">
              <Calendar
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
              />
            </div>
          )}


      </div>
    </Layout>
  );
};

export default calendario;
