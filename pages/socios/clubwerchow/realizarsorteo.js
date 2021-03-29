import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import GenerarGanadores from "../../../components/socios/clubwerchow/GenerarGanadores";
import { ip } from '../../../config/config'

const realizarsorteo = () => {
  const [padron, guardarPadron] = useState(null);
  const [socio, guardarSocio] = useState([]);
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      padronParticipante();
    }
  }, []);

  const padronParticipante = async () => {
    await axios
      .get(`${ip}api/clubwerchow/socios/participantes`)
      .then((res) => {
        guardarPadron(res.data);

        setTimeout(() => {
          crearList(res.data);
        }, 100);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const crearList = (array) => {
    let soc = [];

    for (let i = 0; i < array.length; i++) {
      soc.push(array[i].participante);
    }
    guardarSocio(soc);
  };

  return (
    <Layout>
      {" "}
      <GenerarGanadores socio={socio} />{" "}
    </Layout>
  );
};

export default realizarsorteo;
