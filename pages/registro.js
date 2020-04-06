import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import RegistrarUsuario from "../components/auth/RegistrarUsuario";
import axios from "axios";
import Router from "next/router";

// Validaciones
import useValidacion from "../hooks/useValidacion";
import validarRegistro from "../validacion/validarRegistro";

const STATE_INICIAL = {
  usuario: "",
  contrasena: "",
  nombre: "",
  apellido: "",
};

const Registro = () => {
  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarRegistro, crearRegistro);

  const { nombre, apellido, usuario, contrasena } = valores;

  async function crearRegistro() {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //Req body

      const body = JSON.stringify({
        usuario,
        contrasena,
        nombre,
        apellido,
        perfil: 1,
        estado: 1,
      });

      await axios.post(
        "http://190.231.32.232:5002/api/sgi/operador/postoperador",
        body,
        config
      );
      console.log("Usuario creado exitosamente");
      Router.push("/");
    } catch (error) {
      console.log(error.response.data, error.response.status, "REGISTER_FAIL");
      guardarError(error.response.data.msg);
    }
  }

  return (
    <Layout>
      <RegistrarUsuario
        nombre={nombre}
        apellido={apellido}
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

export default Registro;
