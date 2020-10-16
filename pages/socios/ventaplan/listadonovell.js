import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import ListadoNovell from "../../../components/socios/ventaplan/novell/ListadoNovell";

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
      .get(`http://192.168.1.102:5002/api/sgi/socios/listadonovell`)
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
