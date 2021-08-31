import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import Stock from "../../../components/sepelio/ataudes/Stock";
import moment from "moment";
import toastr from "toastr";
import { ip } from "../../../config/config";

const stock = () => {
  const [historial, guardarHistorial] = useState([]);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const traerHistorial = async (id) => {
    await axios
      .get(`${ip}api/sepelio/ataudes/historial/${id}`)
      .then((res) => {
        guardarHistorial(res.data);
      })
      .catch((error) => {
        toastr.error(
          "Ocurrio un error al traer el historial del ataud",
          "ATENCION"
        );
        console.log(error);
      });
  };

  return (
    <Layout>
      <Stock fl={1} historial={historial} traerHistorial={traerHistorial} />
    </Layout>
  );
};

export default stock;
