import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import ConsultaVentas from "../../components/ventas/ConsultaVentas";
import ListadoVentas from "../../components/ventas/ListadoVentas";
import ExportarVentas from "../../components/ventas/ExportarVentas";
import axios from "axios";
import Spinner from "../../components/layout/Spinner";
import jsCookie from "js-cookie";
import Router from "next/router";
import { ip } from '../../config/config'

const consulta = () => {
  const [mes, guardarMes] = useState(null);
  const [ano, guardarAno] = useState(null);

  const [ventas, guardarVentas] = useState(null);
  const [ventasase, guardarVentasAse] = useState(null);
  const [ventaspago, guardarVentasPago] = useState(null);
  const [ventaslocalidad, guardarVentasLocalidad] = useState(null);

  const [errores, guardarErrores] = useState(null);
  const [spinner, guardarSpinner] = useState(null);

  const handleChange = (value, flag) => {
    if (flag === "mes") {
      const mes = value.value;
      guardarMes(mes);
    } else if (flag === "ano") {
      const ano = value.value;
      guardarAno(ano);
    }
  };

  const buscarVentas = async () => {
    guardarVentas(null);
    guardarVentasAse(null);
    guardarVentasPago(null);
    guardarSpinner(false);

    if (mes === null || ano === null) {
      guardarErrores("Debe ingresar un mes y un año");
    } else {
      guardarSpinner(true);
      await axios
        .get(`${ip}api/ventas/consultas/consultaventas`, {
          params: {
            mes: mes,
            ano: ano,
          },
        })
        .then((res) => {
          guardarSpinner(false);
          const ventas = res.data[0];
          guardarVentas(ventas);

          buscarVentasXAse();
          buscarVentasXMedPago();
          buscarVentasXLocalidad();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const buscarVentasXAse = async () => {
    await axios
      .get(
        `${ip}api/ventas/consultas/consultaventasporasesor`,
        {
          params: {
            mes: mes,
            ano: ano,
          },
        }
      )
      .then((res) => {
        guardarVentasAse(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarVentasXMedPago = async () => {
    await axios
      .get(
        `${ip}api/ventas/consultas/consultaventasmediopago`,
        {
          params: {
            mes: mes,
            ano: ano,
          },
        }
      )
      .then((res) => {
        guardarVentasPago(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarVentasXLocalidad = async () => {
    await axios
      .get(
        `${ip}api/ventas/consultas/consultaventaslocalidad`,
        {
          params: {
            mes: mes,
            ano: ano,
          },
        }
      )
      .then((res) => {
        guardarVentasLocalidad(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      if (Router.query.id) {
        let id = Router.query.id;
        console.log(id);
        traerNovell(id);
      }
    }
  }, []);

  return (
    <Layout>
      <ConsultaVentas
        handleChange={handleChange}
        errores={errores}
        ventas={ventas}
        buscarVentas={buscarVentas}
      />
      {spinner === false && ventas !== null ? (
        <>
          <ListadoVentas
            ventas={ventas}
            mes={mes}
            ano={ano}
            ventasase={ventasase}
            ventaspago={ventaspago}
            ventaslocalidad={ventaslocalidad}
          />

          <div className="container border border-dark list mt-4 p-4">

            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="row d-flex justify-content-center">
              <ExportarVentas padron={ventas} />
            </div>

          </div>
        </>
      ) : spinner === true ? (
        <Spinner />
      ) : null}
    </Layout>
  );
};

export default consulta;
