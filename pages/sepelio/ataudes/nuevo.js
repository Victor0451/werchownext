import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import NuevoAtaud from "../../../components/sepelio/ataudes/NuevoAtaud";
import moment from "moment";
import toastr from "toastr";
import { ip } from "../../../config/config";
import { registrarHistoria } from '../../../utils/funciones'

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
  const [fabri, guardarFabricantes] = useState(null);

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

      traerFabricante();
    }
  }, []);

  const traerFabricante = async () => {
    await axios
      .get(`${ip}api/sepelio/ataudes/traerfabricantes`)
      .then((res) => {
        guardarFabricantes(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer los roles", "ATENCION");
      });
  };

  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarAltaAtaud, nuevoAtaud);

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
      estado: 1,
    };

    await axios
      .post(`${ip}api/sepelio/ataudes/nuevo`, ataud)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Ataud Registrado", "ATENCION");

          let accion = `Se registro un nuevo ataud ${ataud.nombre}, tipo ${ataud.tipo}, uso ${ataud.uso}, stock ${ataud.stock}`

          registrarHistoria(accion, userData.usuario)

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
        fabri={fabri}
      />
    </Layout>
  );
};

export default nuevo;
