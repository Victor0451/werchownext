import React, { useState, useEffect } from "react";
import Recibo from "../../../../components/gestion/mutual/recibos/Recibo";
import Layout from "../../../../components/layout/Layout";
import Router, { useRouter } from 'next/router'
import axios from "axios";
import jsCookie from 'js-cookie'
import toastr from "toastr";
import { ip } from "../../../../config/config";

const recibo = () => {

  const [datos, guardarDatos] = useState(null)

  let token = jsCookie.get("token");
  let router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      traerDatos()
    }
  }, []);

  const traerDatos = async () => {
    const rec = router.query.rec;
    const contrato = router.query.contrato;
    const fecha = router.query.fecha;

    await axios.get(`${ip}api/werchow/pagos/traerdatosrecibo`, {
      params: {
        rec: rec,
        contrato: contrato,
        fecha: fecha,
      },
    })
      .then(res => {
        guardarDatos(res.data)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer los datos del recibo", "ATENCION")
      })
  }


  return (

    <Layout>
      <Recibo datos={datos} />
    </Layout>
  );
};

export default recibo;
