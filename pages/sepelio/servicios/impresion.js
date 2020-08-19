import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import ImpresionSolicitudServicio from "../../../components/sepelio/servicios/ImpresionSolicitudServicio";
import ConformidadServicio from "../../../components/sepelio/servicios/ConformidadServicio";

const impresion = () => {
  const [servicio, guardarServicio] = useState(null);

  let token = jsCookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      const id = router.query.id;

      traerSolicitud(id);
    }
  }, []);

  const traerSolicitud = async (id) => {
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        const servicio = res.data;
        guardarServicio(servicio);
        console.log(servicio);
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
      <div>
        <div id="solicitud" className="print-solserv">
          <ImpresionSolicitudServicio servicio={servicio} />
          <br />
          <br />
          <br />
          <ConformidadServicio />
        </div>

        <div className="container alert alert-primary mt-4">
          <div className="mt-4 p-4 border">
            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="row d-flex justify-content-center">
              <button className="btn btn-primary" onClick={imprimir}>
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default impresion;
