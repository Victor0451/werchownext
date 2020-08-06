import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import NuevoAtaud from "../../../components/sepelio/ataudes/NuevoAtaud";

const nuevo = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <NuevoAtaud />
    </Layout>
  );
};

export default nuevo;
