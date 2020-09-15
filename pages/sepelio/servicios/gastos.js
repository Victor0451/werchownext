import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import FormGastos from "../../../components/sepelio/servicios/FormGastosServ";
import FormGastosServ from "../../../components/sepelio/servicios/FormGastosServ";

const gastos = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <FormGastosServ />
    </Layout>
  );
};

export default gastos;
