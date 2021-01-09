import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import FormMapaRec from "../../components/mapas/FormMapaRec";
import MapaRec from "../../components/mapas/MapaRec";

const maparec = () => {
  let recRef = React.createRef();
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [desde, guadarDesde] = useState(null);
  const [hasta, guardarHasta] = useState(null);
  const [mapa, guardarMapa] = useState(null);
  const [mapaM, guardarMapaM] = useState(null);
  const [recup, guardarRecup] = useState(null);
  const [error, guardarError] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      recuperadores();
    }
  }, []);

  const recuperadores = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/mapa/recuperadores`)
      .then((res) => {
        guardarRecup(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarMapa = async () => {
    guardarError(null);

    let rec = recRef.current.value;
    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;

    if (desde === "" || hasta === "") {
      guardarError("Debes elegir un rango de fechas");
    } else if (desde > hasta) {
      guardarError(`El campo "DESDE" no puede ser mayor al campo "HASTA" `);
    } else if (rec === "no") {
      guardarError("Debes elegir un recuperador");
    } else {
      guadarDesde(desde);
      guardarHasta(hasta);

      await axios
        .get(`http://190.231.32.232:5002/api/sgi/mapa/maparec`, {
          params: {
            rec: rec,
            desde: desde,
            hasta: hasta,
            emp: "W",
          },
        })
        .then((res) => {
          guardarMapa(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get(`http://190.231.32.232:5002/api/sgi/mapa/maparec`, {
          params: {
            rec: rec,
            desde: desde,
            hasta: hasta,
            emp: "M",
          },
        })
        .then((res) => {
          guardarMapaM(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Layout>
      <FormMapaRec
        listado={recup}
        recRef={recRef}
        desdeRef={desdeRef}
        hastaRef={hastaRef}
        consultarMapa={consultarMapa}
        error={error}
      />

      {mapa ? (
        <MapaRec mapa={mapa} mapaM={mapaM} desde={desde} hasta={hasta} />
      ) : null}
    </Layout>
  );
};

export default maparec;
