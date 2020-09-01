import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import ListadoServicios from "../../../components/sepelio/servicios/ListadoServicio";
import jsCookie from "js-cookie";
import axios from "axios";

const listado = () => {
  const [listado, guardarListado] = useState(null);

  let token = jsCookie.get("token");

  const listadosServicios = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/servicio/listadoservicios`)

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
      <ListadoServicios listado={listado} />{" "}
    </Layout>
  );
};

export default listado;
