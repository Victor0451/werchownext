import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import CampanaActivas from "../../components/campañas/CampanasActivas";
import Router from "next/router";
import { ip } from "../../config/config";
import toastr from "toastr";

const cerrar_campana = () => {
  const [campanas, guardarCampanas] = useState(null);

  const campanasActivas = async () => {
    await axios
      .get(`${ip}api/sgi/campanas/campanasasignadas`)
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

  const cerrarCamp = async (idcampana) => {
    axios
      .put(`${ip}api/sgi/campanas/cerrarcamps/${idcampana}`)

      .then((res) => {
        let status = res.statusText;
        if (status === "OK") {
          toastr.success("Se cerror con exito la campaña", "Atencion");
          setTimeout(() => {
            campanasActivas();
          }, 300);
        } else if (status === "Bad Request" || status === "Not Found")
          toastr.error("Ocurrio un error, no se cerro la campaa", "Atencion");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <>
        {campanas === null ? (
          <div className="alert alert-info border text-center text-dark">
            No hay campañas activas
          </div>
        ) : (
          <CampanaActivas campanas={campanas} cerrarCamp={cerrarCamp} />
        )}
      </>
    </Layout>
  );
};

export default cerrar_campana;
