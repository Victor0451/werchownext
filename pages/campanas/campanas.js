import React, { useEffect, useState } from "react";
import GestionCampanas from "../../components/campañas/GestionCampanas";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import toastr from "toastr";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../config/config";
import moment from "moment/moment";

function campanas() {
  const [asignado, guardarAsignado] = useState(0);
  const [trabajado, guardarTrabajado] = useState(0);
  const [user, guardarUsuario] = useState(null);

  const progCasos = async (us) => {
    if (us) {
      await axios
        .get(`${ip}api/sgi/campanas/casosaignados`, {
          params: {
            op: us.usuario,
            mes: moment().format("MM"),
            ano: moment().format("YYYY"),
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarAsignado(res.data[0].asig);
          } else if (res.data.length === 0) {
            toastr.info("No hay casos asignados aun", "ATENCION");
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer la estadistica de casos trabajados"
          );
        });

      await axios
        .get(`${ip}api/sgi/campanas/casostrabajados`, {
          params: {
            op: us.usuario,
            mes: moment().format("MM"),
            ano: moment().format("YYYY"),
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarTrabajado(res.data[0].trab);
          } else if (res.data.length === 0) {
            toastr.info("No hay casos asignados aun", "ATENCION");
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer la estadistica de casos trabajados"
          );
        });
    }
  };
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
        progCasos(userData);
      }
    }
  }, []);

  return (
    <div>
      <Layout>
        <GestionCampanas asignado={asignado} trabajado={trabajado} />
      </Layout>
    </div>
  );
}

export default campanas;
