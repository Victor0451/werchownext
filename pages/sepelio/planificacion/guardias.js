import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import moment from "moment";
import axios from "axios";
import PlanificacionGuardias from "../../../components/sepelio/planificacion/PlanificacionGuardias";
import ListadoServicios from "../../../components/sepelio/servicios/ListadoServicio";
import ListadoPlanificacion from "../../../components/sepelio/planificacion/ListadoPlanificacion";
import { ip } from '../../../config/config'

const guardias = () => {
  let lugarRef = React.createRef();
  let fechaRef = React.createRef();
  let hsInicioRef = React.createRef();
  let hsFinRef = React.createRef();
  let operadorRef = React.createRef();

  const [plani, guardarPlani] = useState(null);
  const [error, guardarError] = useState(null);

  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      listPlani();
    }
  }, []);

  const listPlani = async () => {
    await axios
      .get(`${ip}api/sepelio/planificacion/listadoplani`)
      .then((res) => {
        guardarPlani(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registroPlanificacion = async (e) => {
    e.preventDefault();

    const error = {
      lugar: null,
      fecha: null,
      hs_inicio: null,
      hs_fin: null,
      operador: null,
    };

    if (
      lugarRef.current.value === "no" ||
      fechaRef.current.value === "" ||
      hsInicioRef.current.value === "" ||
      hsFinRef.current.value === "" ||
      operadorRef.current.value === "no"
    ) {
      error.lugar = "Debes elegir una opcion";
      error.fecha = "Debes Elegir una fecha";
      error.hs_inicio = "Debes Elegir una hora de inicio";
      error.hs_fin = "Debes Elegir una hora de inicio";
      error.operador = "Debes Elegir un operador";
    } else {
      guardarError(null);

      const planificacion = {
        lugar: lugarRef.current.value,
        fecha: fechaRef.current.value,
        hs_inicio: hsInicioRef.current.value,
        hs_fin: hsFinRef.current.value,
        operador: operadorRef.current.value,
        mes_planificacion: moment().locale("es-es").format("MMMM"),
      };

      console.log(planificacion);

      await axios
        .post(
          `${ip}api/sepelio/planificacion/nuevaplani`,
          planificacion
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    guardarError(error);
  };

  return (
    <Layout>
      <PlanificacionGuardias
        registroPlanificacion={registroPlanificacion}
        lugarRef={lugarRef}
        fechaRef={fechaRef}
        hsInicioRef={hsInicioRef}
        hsFinRef={hsFinRef}
        operadorRef={operadorRef}
        error={error}
      />

      <hr className="container mt-4 mb-4" />

      <ListadoPlanificacion
        plani={plani}
        mes={moment().locale("es-es").format("MMMM")}
      />
    </Layout>
  );
};

export default guardias;
