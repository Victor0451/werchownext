import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import GenerarGanadores from "../../../components/socios/clubwerchow/GenerarGanadores";
import { ip } from "../../../config/config";

const realizarsorteo = () => {
  const [padron, guardarPadron] = useState(null);
  const [ganadores, guardarGanadores] = useState(null);
  const [socio, guardarSocio] = useState([]);
  const [sociog, guardarSocioG] = useState([]);
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      padronParticipante();
      padronGanadores();
    }
  }, []);

  const padronParticipante = async () => {
    await axios
      .get(`${ip}api/clubwerchow/socios/participantes`)
      .then((res) => {
        guardarPadron(res.data);

        setTimeout(() => {
          crearList(res.data, "p");
        }, 100);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const padronGanadores = async () => {
    await axios
      .get(`${ip}api/clubwerchow/socios/ganadores`)
      .then((res) => {
        guardarGanadores(res.data);
        setTimeout(() => {
          crearList(res.data, "g");
        }, 100);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarGanador = async (id) => {
    await axios
      .delete(`${ip}api/clubwerchow/socios/eliminarganador/${id}`)
      .then((res) => {
        console.log("eliminado");
      })
      .catch((error) => {
        console.log(error);
      });
    padronGanadores();
  };

  const crearList = (array, f) => {
    let soc = [];

    if (f === "p") {
      for (let i = 0; i < array.length; i++) {
        soc.push(`${array[i].participante} - ${array[i].dni}`);
      }
      guardarSocio(soc);
      console.log(soc);
    } else if (f === "g") {
      for (let i = 0; i < array.length; i++) {
        soc.push(array[i].ganador);
      }
      guardarSocioG(soc);
    }
  };

  return (
    <Layout>
      {" "}
      <GenerarGanadores
        socio={socio}
        sociog={sociog}
        eliminarGanador={eliminarGanador}
        padronGanadores={padronGanadores}
      />{" "}
    </Layout>
  );
};

export default realizarsorteo;
