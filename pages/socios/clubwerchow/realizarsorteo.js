import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import GenerarGanadores from "../../../components/socios/clubwerchow/GenerarGanadores";

const realizarsorteo = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);



  return (
    <Layout>
      <GenerarGanadores />
    </Layout>
  );
};

export default realizarsorteo;
