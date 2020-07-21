import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import FormSubirArchivo from "../../../components/socios/legajoVirtual/FormSubirArchivo";

const subirarchivo = () => {
  let token = jsCookie.get("token");
  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <FormSubirArchivo />
    </Layout>
  );
};

export default subirarchivo;
