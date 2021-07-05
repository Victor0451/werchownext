import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from "toastr";
import FormVentaSinServicio from "../../../components/sepelio/ataudes/FormVentaSinServicio";
import { ip } from "../../../config/config";
import ListadoVentasSinServicio from "../../../components/sepelio/ataudes/ListadoVentasSinServicio";

const listadoventassinservicio = () => {
  const [usuario, guardarUsuario] = useState(null);
  const [ventas, guardarVentas] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }

      traerVentasSinServ();
    }
  }, []);

  const traerVentasSinServ = async () => {
    await axios
      .get(`${ip}api/sepelio/ataudventa/ventas`)
      .then((res) => {
        guardarVentas(res.data);
      })
      .catch((error) => {
        toastr.error(
          "Ocurrio un error al traer las ventas de ataudes sin servicio",
          "ATENCION"
        );
        console.log(error);
      });
  };

  return (
    <Layout>
      <ListadoVentasSinServicio listado={ventas} />
    </Layout>
  );
};

export default listadoventassinservicio;
