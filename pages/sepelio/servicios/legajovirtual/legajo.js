import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import LegajoServicio from "../../../../components/sepelio/legajovirtual/LegajoServicio";
import { ip } from "../../../../config/config";

const legajo = () => {
  const [archivos, guardarArchivos] = useState(null);
  const [servicio, guardarServicio] = useState(null);
  const [ataud, guardarAtaud] = useState(null);

  let token = jsCookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerAchivos(router.query.id);
      traerServicio(router.query.id);
    }
  }, []);

  const traerServicio = async (id) => {
    await axios
      .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        guardarServicio(res.data);
        traerAtaud(res.data.idataud);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAchivos = async (id) => {
    await axios
      .get(`${ip}api/archivos/legajovirtualservicios/listaarchivos/${id}`)
      .then((res) => {
        let archivos = res.data;
        guardarArchivos(archivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAtaud = async (idataud) => {
    await axios
      .get(`${ip}api/sepelio/ataudes/ataud/${idataud}`)
      .then((res) => {
        guardarAtaud(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <LegajoServicio
        archivos={archivos}
        id={router.query.id}
        servicio={servicio}
        ataud={ataud}
      />
    </Layout>
  );
};

export default legajo;
