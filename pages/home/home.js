import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import BuscarSocio from "../../components/buscar/BuscarSocio";
import Noticias from "../../components/noticias/Noticias";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from '../../config/config'

// Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarBuscarSocio from "../../validacion/validarBuscarSocio";
import Router from "next/router";
import AccesosRapidos from "../../components/home/AccesosRapidos";

const STATE_INICIAL = {
  socio: "",
  dni: "",
  apellido: "",
};

const home = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const [error, guardarError] = useState(false);

  const [socioRes, guardarSocio] = useState(null);
  const [socioGest, guardarGestion] = useState(null);
  const [listSocio, guardarListSocio] = useState(null);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarBuscarSocio, buscarSocio);

  const { socio, dni, apellido } = valores;

  async function buscarSocio() {
    try {
      //Req body

      guardarSocio(null);
      guardarGestion(null);
      guardarListSocio(null);

      if (socio) {
        await axios
          .get(
            `${ip}api/sgi/campanas/buscarcaso/${socio}`
          )

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
            `${ip}api/sgi/campanas/buscargestioncaso/${socio}`
          )

          .then((res) => {
            const socioGest = res.data;
            guardarGestion(socioGest);
          });
      } else if (dni) {
        await axios
          .get(
            `${ip}api/sgi/campanas/buscarcasodni/${dni}`
          )

          .then((res) => {
            if (res.data === null) {
              guardarSindato("El socio no esta en campaña");
            } else {
              const socioRes = res.data;
              console.log(socioRes);
              guardarSocio(socioRes);

              axios
                .get(
                  `${ip}api/sgi/campanas/buscargestioncaso/${socioRes.contrato}`
                )

                .then((res) => {
                  const socioGest = res.data;
                  guardarGestion(socioGest);
                });
            }
          });
      } else if (apellido) {
        await axios
          .get(
            `${ip}api/sgi/campanas/buscarcasoapellido/${apellido}`
          )

          .then((res) => {
            if (res.data === null) {
              guardarSindato("El socio no esta en campaña");
            } else {
              const listSocios = res.data;
              guardarListSocio(listSocios);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div>
        <Noticias />
        <AccesosRapidos />
        <BuscarSocio
          socio={socio}
          dni={dni}
          apellido={apellido}
          errores={errores}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
          error={error}
          socioGest={socioGest}
          socioRes={socioRes}
          listSocio={listSocio}
        />
      </div>
    </Layout>
  );
};

export default home;
