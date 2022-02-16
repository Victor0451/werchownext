import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import ImpresionSolicitudServicio from "../../../components/sepelio/servicios/ImpresionSolicitudServicio";
import ConformidadServicio from "../../../components/sepelio/servicios/ConformidadServicio";
import { ip } from '../../../config/config'

const impresion = () => {
  const [servicio, guardarServicio] = useState(null);
  const [idparcela, guardarIdParcela] = useState(null);
  const [ataud, guardarAtaud] = useState(null);

  let token = jsCookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      const id = router.query.id;

      traerSolicitud(id);
      putParcela();
    }
  }, []);

  const traerSolicitud = async (id) => {
    await axios
      .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        const servicio = res.data;
        guardarServicio(servicio);

        if (res.data) {
          traerAtaud(res.data.idataud);
          traerIdparcela(router.query.id, servicio.idservicio);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerIdparcela = async (id, idservicio) => {
    await axios
      .get(`${ip}api/sepelio/parcelas/traerid/${id}`)
      .then((res) => {
        if (res.data.idparcela) {
          guardarIdParcela(res.data.idparcela);
          putId(idservicio, res.data.idparcela);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAtaud = async (idataud) => {
    await axios
      .get(`${ip}api/sepelio/ataudes/ataud/${idataud}`)
      .then((res) => {
        guardarAtaud(res.data);
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

  const putId = async (idservicio, idparcela) => {
    const ides = {
      idparcela: idparcela,
      idservicio: idservicio,
    };

    await axios
      .put(`${ip}api/sepelio/parcelas/putid`, ides)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .put(`${ip}api/sepelio/parcelas/putidserv`, ides)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const putParcela = async () => {
    const parcelaAsig = {
      dni_extinto: router.query.dni_extinto,
      ficha: router.query.ficha,
      fecha: router.query.fecha,
      asignada: router.query.asignada,
    };

    await axios
      .put(
        `${ip}api/sepelio/parcelas/asignarparcela/${router.query.idparcela}`,
        parcelaAsig
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div>
        <div id="solicitud" className="print-solserv">
          <ImpresionSolicitudServicio servicio={servicio} ataud={ataud} />
          <br />

          <ConformidadServicio />
        </div>

        <div className="container list border border-dark alert alert-primary mt-4">
          <div className=" border border-dark p-4 border">
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
