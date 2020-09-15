import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import NuevoAtaud from "../../../components/sepelio/ataudes/NuevoAtaud";
import moment from "moment";
import toastr from 'toastr'

// Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarAltaAtaud from "../../../validacion/validarAltaAtaud";

const STATE_INICIAL = {
  nombre: "",
  tipo: "",
  medidas: "",
  uso: "",
  fabricante: "",
  stock: "",
};

const nuevo = () => {
  const [userData, guardarUsuario] = useState({});

  let token = jsCookie.get("token");

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

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaAtaud, nuevoAtaud);

  const { nombre, tipo, medidas, uso, fabricante, stock } = valores;

  async function nuevoAtaud() {
    const ataud = {
      nombre: nombre,
      tipo: tipo,
      medidas: medidas,
      uso: uso,
      fabricante: fabricante,
      stock: stock,
      fecha_alta: moment().format("YYYY-MM-DD"),
      operador: userData.usuario,
      estado: 1
    };


    await axios
      .post("http://190.231.32.232:5002/api/sepelio/ataudes/nuevo", ataud)
      .then((res) => {
        if(res.status === 200){
          toastr.success("Ataud Registrado","ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout>
      <NuevoAtaud
        usuario={userData.usuario}
        errores={errores}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        nombre={nombre}
        tipo={tipo}
        medidas={medidas}
        uso={uso}
        fabricante={fabricante}
        stock={stock}
      />
    </Layout>
  );
};

export default nuevo;
