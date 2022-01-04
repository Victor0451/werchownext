import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import FormEditarServicio from "../../../components/sepelio/servicios/FormEditarServicio";
import { ip } from "../../../config/config";

const editar = () => {
  const [servicio, guardarServicio] = useState(null);
  const [usuario, guardarUsuario] = useState(null);


  let token = jsCookie.get("token");
  let router = useRouter();

  const traerServicio = async (id) => {
    await axios
      .get(` ${ip}api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        guardarServicio(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }

      traerServicio(router.query.id);
    }
  }, []);

  return (
    <Layout>
      <FormEditarServicio servicio={servicio} usuario={usuario} />
    </Layout>
  );
};

export default editar;
