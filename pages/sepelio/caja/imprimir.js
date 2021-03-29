import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import Router, { useRouter } from "next/router";

import toastr from "toastr";
import ImprimirCaja from "../../../components/sepelio/caja/ImprimirCaja";
import { ip } from '../../../config/config'

const imprimir = () => {
  const [caja, guardarCaja] = useState(null);
  const [gastos, guardarGastos] = useState(null);
  const [ingresos, guardarIngresos] = useState(null);

  let router = useRouter();
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let id = router.query.id;
      infoCaja(id);
      listGastos(id);
      listIngresos(id);
    }
  }, []);

  const infoCaja = async (id) => {
    await axios
      .get(`${ip}api/sepelio/cajasepelio/caja/${id}`)
      .then((res) => {
        guardarCaja(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listGastos = async (id) => {
    await axios
      .get(
        `${ip}api/sepelio/cajasepelio/listadogastos/${id}`
      )
      .then((res) => {
        guardarGastos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listIngresos = async (id) => {
    await axios
      .get(
        `${ip}api/sepelio/cajasepelio/listadoingresos/${id}`
      )
      .then((res) => {
        guardarIngresos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imprimir = (div) => {
    let contenido = document.getElementById(`${div}`).innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace("/sepelio/caja/listado");
  };

  return (
    <Layout>
      <div>
        <div id="caja">
          <ImprimirCaja caja={caja} gastos={gastos} ingresos={ingresos} />
        </div>
        <div className="container alert alert-primary border border-dark p-4">
          <h2 className="mb-4">
            <strong>
              <u>Opciones</u>
            </strong>
          </h2>

          <div className="d-flex justify-content-center border border-dark p-4">
            <button
              className="btn btn-primary  "
              onClick={() => imprimir("caja")}
            >
              Imprimir Pagos
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default imprimir;
