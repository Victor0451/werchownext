import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import FormMapa from "../../components/mapas/FormMapa";
import MapaAsesor from "../../components/mapas/MapaAsesor";

const mapaasesor = () => {
  let asesorRef = React.createRef();
  let anoRef = React.createRef();

  const [listado, guardarAsesores] = useState(null);
  const [error, guardarError] = useState(null);
  const [mapa, guardarMapa] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      asesores();
    }
  }, []);

  const asesores = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/mapa/asesores`)
      .then((res) => {
        guardarAsesores(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarMapa = async () => {
    let ase = asesorRef.current.value;
    let ano = anoRef.current.value;

    if (ase === "" || ano === "") {
      guardarError("Debes seleccioanr un asesor y/o un año");
    } else {
      await axios
        .get(`http://190.231.32.232:5002/api/sgi/mapa/mapaasesor`, {
          params: {
            asesor: ase,
            ano: ano,
          },
        })
        .then((res) => {
          guardarMapa(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Layout>
      <FormMapa
        listado={listado}
        asesorRef={asesorRef}
        anoRef={anoRef}
        consultarMapa={consultarMapa}
      />

      {mapa ? <MapaAsesor mapa={mapa} /> : null}
    </Layout>
  );
};

export default mapaasesor;
