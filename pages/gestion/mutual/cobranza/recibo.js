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
  const imprimir = () => {
    let contenido = document.getElementById("recibo").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload();
  };

  return (

    <Layout>

      <div id="recibo">
        <Recibo datos={datos} />
      </div>
      <div className=" container list mt-4 border border-dark p-4">
        <h3>
          <strong>
            <u>Opciones</u>
          </strong>
        </h3>
        <div className="row border border-dark p-4 mt-4">
          <div className="col-md-12 d-flex justify-content-center">
            <button
              className=" btn btn-primary "
              onClick={imprimir}
            >
              Imprimir
            </button>
          </div>
        </div>
      </div>


    </Layout>
  );
};

export default recibo;
