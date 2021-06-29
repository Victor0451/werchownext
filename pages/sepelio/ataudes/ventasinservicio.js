import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from "toastr";
import FormVentaSinServicio from "../../../components/sepelio/ataudes/FormVentaSinServicio";
import { ip } from "../../../config/config";

const ventasinservicio = () => {
  const [ataud, guardarStock] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const selcasofrm = (row) => {
    guardarStock(row.original);
  };

  return (
    <Layout>
      <FormVentaSinServicio selcasofrm={selcasofrm} ataud={ataud} />
    </Layout>
  );
};

export default ventasinservicio;
