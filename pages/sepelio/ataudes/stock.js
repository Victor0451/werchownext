import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import Stock from "../../../components/sepelio/ataudes/Stock";
import moment from "moment";
import toastr from "toastr";

const stock = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <Stock />
    </Layout>
  );
};

export default stock;
