import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import FormLiquidarServicio from "../../../../components/sepelio/servicios/liquidacion/FormLiquidarServicio";

const liquidacion = () => {
  let token = jsCookie.get("token");

  const traerSolicitud = async (id) => {
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        const servicio = res.data;
        guardarServicio(servicio);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerGastos = async (id) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/sepelio/serviciogastos/listadogastos/${id}`
      )
      .then((res) => {
        if (res.data) {
          guardarGastos(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calcularGastos = (array) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += parseFloat(array[i].importe);
    }

    return total;
  };
  
  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);



  return (
    <Layout>
      <FormLiquidarServicio />
    </Layout>
  );
};

export default liquidacion;
