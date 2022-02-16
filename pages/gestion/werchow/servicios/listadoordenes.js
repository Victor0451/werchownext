import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { ip } from "../../../../config/config";
import ListadoOrdenesEmitidas from '../../../../components/gestion/werchow/servicios/ListadoOrdenesEmitidas';


const listadoordenes = () => {

  const [user, guardarUsuario] = useState(null);
  const [listado, guardarListado] = useState(null);



  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }

      traerOrdenesEmitidas()

    }
  }, []);

  const traerOrdenesEmitidas = async () => {

    await axios.get(`${ip}api/sgi/servicios/traerordenesemitidas`)
      .then(res => {
        guardarListado(res.data)
        toastr.success("Se trajeron las ordenes con exito", "ATENCION")
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer las ordenes", "ATENCION")
      })

  }

  const push = (url, p1, p2, p3, flag) => {

    if (p3) {

      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2,
          orden: p3,
          flag: flag
        },
      });

    } else {

      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2
        },

      });
    }



  };

  const generarImpresion = (iduso, doc, orden) => {
    push('/gestion/werchow/servicios/orden', iduso, doc, orden)
  }

  return (
    <Layout>

      <ListadoOrdenesEmitidas
        listado={listado}
        generarImpresion={generarImpresion}
      />

    </Layout>
  )
}

export default listadoordenes

