import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GestionCaso from "../../../components/campañas/GestionCaso";
import Layout from "../../../components/layout/Layout";
import jsCookies from "js-cookie";
import axios from "axios";
import { ip } from '../../../config/config'

const campana = (porps) => {
  const [campanaOp, guardarCampana] = useState({});
  const [campanaOpTrab, guardarCampanaTrab] = useState({});
  const [campanaOpNoti, guardarCampanaNoti] = useState({});

  const [userData, guardarUsuario] = useState(null);

  const router = useRouter();

  const {
    query: { empresa, operador, camp },
  } = router;


  const nuevosCasos = async () => {


    await axios
      .get(`${ip}api/sgi/campanas/campanaoperador`, {
        params: {
          empresa: empresa,
          operador: operador,
          campana: camp,
        },
      })
      .then((res) => {
        const campanaOp = res.data[0];
        guardarCampana(campanaOp);
      });
  };

  const casosTrabajados = async () => {


    await axios
      .get(`${ip}api/sgi/campanas/campanaoperadortrab`, {
        params: {
          empresa: empresa,
          operador: operador,
          campana: camp,
        },
      })
      .then((res) => {
        const campanaOpTrab = res.data[0];
        guardarCampanaTrab(campanaOpTrab);
      });
  };

  const casosNotificados = async () => {


    await axios
      .get(`${ip}api/sgi/campanas/campanaoperadornoti`, {
        params: {
          empresa: empresa,
          operador: operador,
          campana: camp,
        },
      })
      .then((res) => {
        const campanaOpNoti = res.data[0];
        guardarCampanaNoti(campanaOpNoti);
      });
  };

  let usuario = jsCookies.get("usuario");


  useEffect(() => {


    if (camp) {
      nuevosCasos();
      casosTrabajados();
      casosNotificados();
      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }
    } else {
      console.log("error");
    }
  }, []);


  return (
    <Layout>
      <GestionCaso
        campanaOp={campanaOp}
        campanaOpTrab={campanaOpTrab}
        campanaOpNoti={campanaOpNoti}
        operador={operador}
        camp={camp}
        empresa={empresa}
        nuevosCasos={nuevosCasos}
        casosNotificados={casosNotificados}
        casosTrabajados={casosTrabajados}
        userData={userData}
      />
    </Layout>
  );
};

export default campana;
