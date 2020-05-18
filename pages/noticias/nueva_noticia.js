import React, { useState, useEffect } from "react";
import NuevaNoticia from "../../components/noticias/NuevaNoticia";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";

// Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarNoticia from "../../validacion/validarNoticia";

const STATE_INICIAL = {
  noticia: "",
};

const nueva_noticia = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const operadorRef = React.createRef();
  const fechaRef = React.createRef();

  const [error, guardarError] = useState(false);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarNoticia, nuevanoticia);

  const { noticia } = valores;

  async function nuevanoticia() {
    try {
      const noti = {
        operador: operadorRef.current.value,
        fecha: moment(fechaRef).format("YYYY-MM-DD HH:mm:ss"),
        noticia,
      };

      await axios
        .post(`http://190.231.32.232:5002/api/sgi/noticia/nuevanoticia`, noti)
        .then((res) => {
          toastr.success("La Noticia se registro con exito", "ATENCION");
        });
    } catch (error) {
      console.log(error.response.data, error.response.status, "LOGIN_FAIL");
      guardarError(error.response.data.msg);
    }
  }

  let today = moment().format("DD/MM/YYYY HH:mm:ss");
  let usuario = jsCookie.get("usuario");
  return (
    <Layout>
      {!token ? null : (
        <div>
          <NuevaNoticia
            errores={errores}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            error={error}
            noticia={noticia}
            operadorRef={operadorRef}
            fechaRef={fechaRef}
            today={today}
            usuario={usuario}
          />
        </div>
      )}
    </Layout>
  );
};

export default nueva_noticia;
