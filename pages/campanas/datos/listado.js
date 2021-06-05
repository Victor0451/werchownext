import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from "toastr";
import moment from "moment";
import JsCookie from "js-cookie";
import Router from "next/router";
import ListadoDatos from "../../../components/campañas/datos/ListadoDatos";
import { ip } from '../../../config/config'

const listado = () => {
  let token = JsCookie.get("token");
  let usuario = JsCookie.get("usuario");

  const [datos, guardarDatos] = useState(null);

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (usuario) {
      let user = JSON.parse(usuario);

      mostrarDatosOperador(user.usuario);
    }
  }, []);

  const mostrarDatosOperador = async (user) => {
    axios
      .get(`${ip}api/sgi/datos/datosop/${user}`)
      .then((res) => {
        guardarDatos(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <ListadoDatos datos={datos} />
    </Layout>
  );
};

export default listado;
