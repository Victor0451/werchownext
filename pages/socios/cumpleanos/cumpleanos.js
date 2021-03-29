import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import ListadoCumpleanos from "../../../components/socios/cumpleanos/ListadoCumpleanos";
import BuscarCumple from "../../../components/socios/cumpleanos/BuscarCumple";
import { ip } from '../../../config/config'

const cumpleanos = () => {
  let fechaRef = React.createRef();

  const [cumples, guardarCumples] = useState(null);
  const [fecha, guardarFecha] = useState(null);

  const [error, guardarError] = useState(null);

  let token = jsCookie.get("token");

  const listCumple = async (e) => {
    e.preventDefault();

    let fecha = fechaRef.current.value;

    if (fecha === "") {
      guardarError("Debe ingresar una fecha");
    } else {
      guardarFecha(fecha);

      await axios
        .get(`${ip}api/sgi/socios/listcumple`, {
          params: {
            fecha: fecha,
          },
        })
        .then((res) => {
          guardarCumples(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const listCumpleM = async (e) => {
    e.preventDefault();

    let fecha = fechaRef.current.value;

    if (fecha === "") {
      guardarError("Debe ingresar una fecha");
    } else {
      guardarFecha(fecha);

      await axios
        .get(`${ip}api/sgi/socios/listcumpleM`, {
          params: {
            fecha: fecha,
          },
        })
        .then((res) => {
          guardarCumples(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <div className="container mt-4">
        <div className="alert alert-primary border border-dark p-4">
          <h2 className="mb-4">
            <strong>
              <u>Buscar Cumpleaños</u>
            </strong>
          </h2>

          <hr className="mt-4 mb-4" />
          <BuscarCumple
            fn={listCumple}
            fnM={listCumpleM}
            fechaRef={fechaRef}
            error={error}
          />
        </div>
        <hr className="mt-4 mb-4" />

        {!cumples ? null : <ListadoCumpleanos data={cumples} fecha={fecha} />}
      </div>
    </Layout>
  );
};

export default cumpleanos;
