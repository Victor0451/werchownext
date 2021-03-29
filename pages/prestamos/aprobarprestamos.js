import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import TablaPrestamosPendientes from "../../components/prestamos/TablaPrestamosPrendientes";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from '../../config/config'

const aprobarprestamos = () => {
  const [prestamospen, guardarPrestamosPen] = useState(null);

  const [capitalprest, guardarCapitalprest] = useState(null);
  const [intereses, guardarIntereses] = useState(null);
  const [cuotas, guardarCuotas] = useState(null);
  const [capconint, guardarCapconint] = useState(null);
  const [cantprest, guardarCantprest] = useState(null);

  const prestamosPendientes = async () => {
    await axios
      .get(
        `${ip}api/sgi/prestamos/listadoprestamospendientes`
      )
      .then((res) => {
        if (res.data.length !== 0) {
          const prestamospen = res.data;
          guardarPrestamosPen(prestamospen);

          resumenArray(prestamospen);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   AMRADO DEL RESUMEN DEL LISTADO DE PRESTAMOS BUSCADO
  const resumenArray = (listado) => {
    let capitalprest = 0;

    let intereses = 0;

    let cuotas = 0;

    let cantprest = listado.length;

    let capconint = 0;

    for (let i = 0; i < listado.length; i++) {
      capitalprest += parseInt(listado[i].ptm_prestamo);
      intereses += listado[i].ptm_valcuota;
      cuotas += listado[i].ptm_cuotas;
      capconint += listado[i].ptm_valcuota * listado[i].ptm_cuotas;
    }

    guardarCantprest(cantprest);
    guardarIntereses(intereses);
    guardarCuotas(cuotas);
    guardarCapconint(capconint);
    guardarCapitalprest(capitalprest);
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      prestamosPendientes();
    }
  }, []);

  return (
    <Layout>
      <>
        {prestamospen ? (
          <TablaPrestamosPendientes
            data={prestamospen}
            capitalprest={capitalprest}
            cuotas={cuotas}
            intereses={intereses}
            cantprest={cantprest}
            capconint={capconint}
          />
        ) : (
          <>
            <div className="container">
              <hr className="mt-4 mb-4" />
              <div className=" mt-4 alert alert-primary text-center text-uppercase">
                <strong> No hay prestamos pendientes de aprobacion</strong>
              </div>
              <hr className="mt-4 mb-4" />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default aprobarprestamos;
