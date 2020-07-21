import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import ListadoSolicitudes from "../../../components/socios/clubwerchow/ListadoSolicitudes";

const solicitudes = () => {
  const [listsolicitudes, guardarListSolicitudes] = useState(null);

  let token = jsCookie.get("token");

  const traerSolic = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/clubwerchow/socios/solicitudes`)
      .then((res) => {
        let listsolicitudes = res.data;
        guardarListSolicitudes(listsolicitudes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerSolic();
    }
  }, []);
  return (
    <Layout>
      <ListadoSolicitudes listsolicitudes={listsolicitudes} />
    </Layout>
  );
};

export default solicitudes;
