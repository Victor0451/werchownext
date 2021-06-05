import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import Router, { useRouter } from "next/router";
import ListadoCajaSepelio from "../../../components/sepelio/caja/ListadoCajaSepelio";
import toastr from "toastr";
import {ip} from '../../../config/config'

const listado = () => {
  const [cajas, guardarCajas] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      listadoCaja();
    }
  }, []);

  const listadoCaja = async () => {
    await axios
      .get(`${ip}api/sepelio/cajasepelio/listadocajas`)
      .then((res) => {
        guardarCajas(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <ListadoCajaSepelio cajas={cajas} />
    </Layout>
  );
};
export default listado;
