import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import CampanaActivas from "../../components/campañas/CampanasActivas";
import Router from "next/router";


const cerrar_campana = () => {
  const [campanas, guardarCampanas] = useState(null);

  const campanasActivas = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanas/campanasasignadas`)
      .then((res) => {
        let campanas = res.data[0];
        guardarCampanas(campanas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      campanasActivas();
    }
  }, []);

  return (
    <Layout>
      <>
        {campanas === null ? (
          <div className="alert alert-info border text-center text-dark">
            No hay campañas activas
          </div>
        ) : (
          <CampanaActivas campanas={campanas} />
        )}
      </>
    </Layout>
  );
};

export default cerrar_campana;
