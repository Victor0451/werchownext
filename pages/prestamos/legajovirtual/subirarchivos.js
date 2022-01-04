import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import FormSubirArchivo from "../../../components/prestamos/legajovirtual/FormSubirArchivo";

const subirarchivos = () => {
  const [user, guardarUsuario] = useState({});

  let token = jsCookie.get("token");

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
      }
    }
  }, []);

  return (
    <Layout>
      <FormSubirArchivo contrato={router.query.ficha} user={user} />
    </Layout>
  );
};

export default subirarchivos;
