import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import IngresarGastos from "../../../components/sepelio/servicios/IngresarGastos";

const gastos = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <IngresarGastos />
    </Layout>
  );
};

export default gastos;
