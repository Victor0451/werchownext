import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import ListadoNovell from "../../../components/ventas/ventaplan/novell/ListadoNovell";
import { ip } from '../../../config/config'

const listadonovell = () => {
  const [listado, guardarListado] = useState(null);
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      taerListadoNovell();
    }
  }, []);

  const taerListadoNovell = async () => {
    await axios
      .get(`${ip}api/sgi/socios/listadonovell`)
      .then((res) => {
        console.log(res);
        guardarListado(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      {" "}
      <ListadoNovell listado={listado} />{" "}
    </Layout>
  );
};

export default listadonovell;
