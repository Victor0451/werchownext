import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import ImpresionNovell from "../../../components/ventas/ventaplan/novell/ImpresionNovell";
import CondicionesNovel from "../../../components/ventas/ventaplan/novell/CondicionesNovell";
import { ip } from '../../../config/config'

const imprimirnovell = () => {
  const [novell, guardarNovell] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      if (Router.query.id) {
        let id = Router.query.id;
        console.log(id);
        traerNovell(id);
      }
    }
  }, []);

  const traerNovell = async (id) => {
    await axios
      .get(`${ip}api/sgi/socios/traernovell/${id}`)
      .then((res) => {
        guardarNovell(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("solicitud").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;
  };

  return (
    <Layout>
      <div id="solicitud">
        <ImpresionNovell novell={novell} />
        <br />
        <br />


        <CondicionesNovel novell={novell} />
      </div>

      <div className="container list border border-dark mt-4 p-4">

        <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
        <div className="row d-flex justify-content-center">
          <button className="btn btn-primary" onClick={imprimir}>
            Imprimir
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default imprimirnovell;
