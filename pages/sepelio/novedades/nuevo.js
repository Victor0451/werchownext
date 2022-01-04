import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from "toastr";
import { ip } from "../../../config/config";
import FormNovedades from "../../../components/sepelio/novedades/FormNovedades";
import { registrarHistoria } from '../../../utils/funciones'

const nuevo = () => {
  let descripcionRef = React.createRef();

  const [userData, guardarUsuario] = useState(null);
  const [errores, guardarErrores] = useState(null);

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
    }
  }, []);

  const registrarNovedad = async () => {
    guardarErrores(null);

    let nov = {
      novedad: descripcionRef.current.value,
      operador: userData,
      fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    if (nov.novedad === "") {
      guardarErrores("debes ingresar la novedad");
    } else {
      await axios
        .post(`${ip}api/sepelio/novedades/nuevanovedad`, nov)
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Se registro con exito la novedad", "ATENCION");

            let accion = `Se registro novedad en sepelio`

            registrarHistoria(accion, userData)

          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al registrar la novedad", "ATENCION");
        });
    }
  };

  return (
    <Layout>
      <FormNovedades
        userData={userData}
        descripcionRef={descripcionRef}
        registrarNovedad={registrarNovedad}
        errores={errores}
      />
    </Layout>
  );
};

export default nuevo;
