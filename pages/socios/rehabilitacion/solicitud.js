import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Layout from "../../../components/layout/Layout";
import Rehabilitacion from "../../../components/socios/rehabilitacion/Rehabilitacion";
import jsCookie from "js-cookie";
import axios from "axios";
import toastr from "toastr";
import Solicitud from "../../../components/socios/rehabilitacion/Solicitud";

const solicitud = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>



      <Solicitud />
    </Layout>
  );
};

export default solicitud;
