import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from "toastr";
import moment from "moment";
import JsCookie from "js-cookie";
import Router from "next/router";
import AltaDatos from "../../../components/campañas/datos/AltaDatos";
import useValidacion from "../../../hooks/useValidacion";
import validarAltaDatos from "../../../validacion/validarAltaDatos";
import { ip } from '../../../config/config'

const STATE_INICIAL = {
  apellido: "",
  nombre: "",
  edad: "",
  telefono: "",
  celular: "",
  cobertura: "",
  grupofamiliar: "",
  observacion: "",
  domicilio: "",
};

const nuevo = () => {
  let operadorRef = React.createRef();

  let token = JsCookie.get("token");
  let usuario = JsCookie.get("usuario");

  const [user, guardarUser] = useState(null);

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (usuario) {
      let user = JSON.parse(usuario);
      guardarUser(user.usuario);
    }
  }, []);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaDatos, altaDato);

  const {
    apellido,
    nombre,
    edad,
    telefono,
    celular,
    cobertura,
    grupofamiliar,
    observacion,
    domicilio,
  } = valores;

  async function altaDato() {
    const dato = {
      fecha: moment().format("YYYY-MM-DD"),
      operador: operadorRef.current.value,
      apellido: apellido,
      nombre: nombre,
      edad: edad,
      telefono: telefono,
      celular: celular,
      cobertura: cobertura,
      domicilio: domicilio,
      grupofamiliar: grupofamiliar,
      observacion: observacion,
    };

    if (edad === "") {
      dato.edad = 0;
      if (telefono === "") {
        dato.telefono = 0;
      }
      if (celular === "") {
        dato.celular = 0;
      }
    }

    axios
      .post(`${ip}api/sgi/datos/altadato`, dato)
      .then((res) => {
        if ((res.status = 200)) {
          toastr.success("Dato cargado correctamente", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout>
      <AltaDatos
        user={user}
        errores={errores}
        apellido={apellido}
        nombre={nombre}
        edad={edad}
        telefono={telefono}
        celular={celular}
        cobertura={cobertura}
        grupofamiliar={grupofamiliar}
        observacion={observacion}
        domicilio={domicilio}
        operadorRef={operadorRef}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default nuevo;
