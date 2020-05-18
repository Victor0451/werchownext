import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import BuscarSocio from "../../components/buscar/BuscarSocio";
import RedirectToLogin from "../../components/auth/RedirectToLogin";
import Noticias from "../../components/noticias/Noticias";
import jsCookie from "js-cookie";
import axios from "axios";

// Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarBuscarSocio from "../../validacion/validarBuscarSocio";
import Router from "next/router";

const STATE_INICIAL = {
  socio: "",
};

const home = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const [error, guardarError] = useState(false);
  const [sindato, guardarSindato] = useState(null);
  const [socioRes, guardarSocio] = useState(null);
  const [socioGest, guardarGestion] = useState(null);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarBuscarSocio, buscarSocio);

  const { socio } = valores;

  async function buscarSocio() {
    try {
      //Req body

      await axios
        .get(`http://190.231.32.232:5002/api/sgi/campanas/buscarcaso/${socio}`)

        .then((res) => {
          if (res.data === null) {
            guardarSindato("El socio no esta en campaña");
          } else {
            const socioRes = res.data;
            guardarSocio(socioRes);
          }
        });

      await axios
        .get(
          `http://190.231.32.232:5002/api/sgi/campanas/buscargestioncaso/${socio}`
        )

        .then((res) => {
          const socioGest = res.data;
          guardarGestion(socioGest);
        });
    } catch (error) {
      console.log(error.response.data, error.response.status);
      guardarError(error.response.data.msg);
    }
  }

  return (
    <Layout>
      <div>
        <Noticias />
        <BuscarSocio
          socio={socio}
          errores={errores}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
          error={error}
          socioGest={socioGest}
          socioRes={socioRes}
        />

        {sindato === null ? null : (
          <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
            <strong>{sindato}</strong>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default home;
