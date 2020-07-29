import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import LegajoArchivos from "../../../components/prestamos/legajovirtual/LegajoArchivos";

const legajo = () => {
  const [archivos, guardarArchivos] = useState(null);

  let token = jsCookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerAchivos(router.query.id);
    }
  }, []);

  const traerAchivos = async (id) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/archivos/legajovirtualprestamos/listaarchivos/${id}`
      )
      .then((res) => {
        let archivos = res.data;
        guardarArchivos(archivos);
        console.log(archivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <LegajoArchivos archivos={archivos} id={router.query.id} />
    </Layout>
  );
};

export default legajo;
