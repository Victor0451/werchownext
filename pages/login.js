import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import LoginUsuario from "../components/auth/LoginUsuario";
import axios from "axios";
import Router from "next/router";

// Validaciones
import useValidacion from "../hooks/useValidacion";
import useAutenticacion from "../hooks/useAutenticacion";
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
          sessionStorage.setItem("usuario", res.data.user.usuario);
          sessionStorage.setItem("token", res.data.token);
        });

      Router.push("/");
    } catch (error) {
      //console.log(error.response.data, error.response.status, "LOGIN_FAIL");
    }
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
