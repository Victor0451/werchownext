import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../../config/config";
import toastr from "toastr";
import moment from "moment";
import FormDatos from "../../../components/gestion/mesaentrada/FormDatos";

const datos = () => {
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let dniRef = React.createRef();
  let parentezcoRef = React.createRef();
  let telefonoRef = React.createRef();
  let motivoRef = React.createRef();
  let operadoratencionRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [listado, guardarListado] = useState(null);

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

      traerDatos();
    }
  }, []);

  const regDatos = async () => {
    const dato = {
      apellido: apellidoRef.current.value,
      nombre: nombreRef.current.value,
      dni: dniRef.current.value,
      parentezco: parentezcoRef.current.value,
      telefono: telefonoRef.current.value,
      motivo: motivoRef.current.value,
      operador: user,
      fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
      operadoratencion: operadoratencionRef.current.value,
    };

    await axios
      .post(`${ip}api/sgi/datos/altadatomesaentrada`, dato)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Se registro el dato correctamente", "ATENCION");

          traerDatos();
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al registrar el dato", "ATENCION");
      });
  };

  const traerDatos = async () => {
    await axios
      .get(`${ip}api/sgi/datos/tarerdatosatencion`)
      .then((res) => {
        guardarListado(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr("Ocurrio un error al traer los datos", "ATENCION");
      });
  };

  return (
    <Layout>
      <FormDatos
        apellidoRef={apellidoRef}
        nombreRef={nombreRef}
        dniRef={dniRef}
        parentezcoRef={parentezcoRef}
        telefonoRef={telefonoRef}
        motivoRef={motivoRef}
        operadoratencionRef={operadoratencionRef}
        regDatos={regDatos}
        listado={listado}
      />
    </Layout>
  );
};

export default datos;
