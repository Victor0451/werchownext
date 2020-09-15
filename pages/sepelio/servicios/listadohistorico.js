import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import ListadoServiciosHistorico from "../../../components/sepelio/servicios/ListadoServicioHistorico";

const listadohistorico = () => {
  const [listado, guardarListado] = useState(null);

  let token = jsCookie.get("token");

  const listadosServicios = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/servicio/servhistoricos`)

      .then((res) => {
        const listado = res.data;
        guardarListado(listado);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      listadosServicios();
    }
  }, []);

  return (
    <Layout>
      <ListadoServiciosHistorico listado={listado} />{" "}
    </Layout>
  );
};

export default listadohistorico;
