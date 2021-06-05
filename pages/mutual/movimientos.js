import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import MovimientosMensuales from "../../components/mutual/MovimientosMensuales";
import ListadoMovimientos from "../../components/mutual/ListadoMovimientos";
import ExportarPadron from "../../components/mutual/ExportarPadron";
import {ip} from '../../config/config'

const movimientos = () => {
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [altas, guardarAltas] = useState(null);
  const [bajas, guardarBajas] = useState(null);

  const [error, guardarError] = useState(null);
  const [flag, guardarFlag] = useState(true);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const traerPeriodo = () => {
    guardarAltas(null);
    guardarBajas(null);

    guardarFlag(true);

    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;

    if (desde === "" || hasta === "") {
      guardarError(`Los campos "DESDE" y "HASTA" no pueden estar vacios`);
    } else if (hasta < desde) {
      guardarError(`El campo "HASTA" debe ser mayor al campo "DESDE"`);
    } else {
      guardarFlag(false);
      // guardarDesde(desde);
      // guardarHasta(hasta);

      altasMutual(desde, hasta);
      bajasMutual(desde, hasta);

      console.log(altas);
    }
  };

  const altasMutual = async (desde, hasta) => {
    await axios
      .get(
        `${ip}api/werchow/movimientosmutual/altasmensuales`,
        {
          params: {
            desde: desde,
            hasta: hasta,
          },
        }
      )
      .then((res) => {
        guardarAltas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const bajasMutual = async (desde, hasta) => {
    await axios
      .get(
        `${ip}api/werchow/movimientosmutual/bajasmensuales`,
        {
          params: {
            desde: desde,
            hasta: hasta,
          },
        }
      )
      .then((res) => {
        guardarBajas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <MovimientosMensuales
        desdeRef={desdeRef}
        hastaRef={hastaRef}
        error={error}
        traerPeriodo={traerPeriodo}
        altas={altas}
        bajas={bajas}
      />

      {flag === false ? (
        <div className="mb-4 container d-flex justify-content-end">
          <ExportarPadron altas={altas} bajas={bajas} />
        </div>
      ) : null}

      {altas ? (
        <>
          <ListadoMovimientos listado={altas} />
        </>
      ) : flag === true ? null : (
        <div className="container alert alert-info text-center text-uppercase">
          No se registraron altas
        </div>
      )}

      {bajas ? (
        <>
          <ListadoMovimientos listado={bajas} />
        </>
      ) : flag === true ? null : (
        <div className="container alert alert-info text-center text-uppercase">
          No se registraron bajas
        </div>
      )}
    </Layout>
  );
};

export default movimientos;
