import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import LoginUsuario from "../components/auth/LoginUsuario";
import axios from "axios";
import Router from "next/router";
import jsCookie from "js-cookie";

// Validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSession from "../validacion/validarIniciarSession";

const STATE_INICIAL = {
  usuario: "",
  contrasena: "",
};

const Login = () => {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarIniciarSession, iniciarSession);

  const { usuario, contrasena } = valores;

  async function iniciarSession() {
    try {
      //headers
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //Req body

      const body = JSON.stringify({ usuario, contrasena });

      await axios
        .post("http://190.231.32.232:5002/api/sgi/auth/auth", body, config)
        .then((res) => {
          const usuario = res.data.user;

          jsCookie.set("token", res.data.token);
          jsCookie.set("usuario", usuario);
          
        });

      Router.push("/home/home");
    } catch (error) {
      console.log(error.response.data, error.response.status, "LOGIN_FAIL");
      guardarError(error.response.data.msg);
    }
  }

  let token = jsCookie.get("token");

  if (token) {
    Router.push("/home/home");
  }

  return (
    <Layout>
      <LoginUsuario
        usuario={usuario}
        contrasena={contrasena}
        errores={errores}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        error={error}
      />
    </Layout>
  );
};

export default Login;
