import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import EstadoCartera from "../components/campañas/EstadoCartera";
import AsignarCampana from "../components/campañas/AsignarCampana";
import axios from "axios";

const estadosocio = () => {
  const [campana, guardarCampana] = useState({});
  const [empresa, guardarEmpresa] = useState({});
  const [array, guardarArray] = useState({});

  const [perico, guardarPerico] = useState({});
  const [palpala, guardarPalpala] = useState({});
  const [sanPedro, guardarSanPedro] = useState({});
  const [CasaCentralMG, guardarCCMG] = useState({});
  const [CasaCentralGG, guardarCCGG] = useState({});

  const segmentacion = (array) => {
    let perico = array.filter((at) => {
      return at.SUCURSAL === "R";
    });

    let palpala = array.filter((at) => {
      return at.SUCURSAL === "L";
    });

    let sanPedro = array.filter((at) => {
      return at.SUCURSAL === "P";
    });

    let CasaCentral = array.filter((at) => {
      return at.SUCURSAL === "W";
    });

    let CCmitad = Math.floor(CasaCentral.length / 2);

    let CasaCentralGG = CasaCentral.slice(0, CCmitad);

    let CasaCentralMG = CasaCentral.slice(CCmitad, CasaCentral.length);

    guardarPerico(perico);
    guardarPalpala(palpala);
    guardarSanPedro(sanPedro);
    guardarCCMG(CasaCentralMG);
    guardarCCGG(CasaCentralGG);
  };

  const buscarAT = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanas/atW`)
      .then((res) => {
        const array = res.data[0];
        guardarArray(array);
        segmentacion(array);

        const campana = "Atrasados";
        guardarCampana(campana);

        const empresa = "W";
        guardarEmpresa(empresa);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarATM = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanasM/atM`)
      .then((res) => {
        const array = res.data[0];
        segmentacion(array);
        guardarArray(array);

        let campana = "Atrasados";
        guardarCampana(campana);

        let empresa = "M";
        guardarEmpresa(empresa);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <EstadoCartera buscarAT={buscarAT} buscarATM={buscarATM} />

      {Object.values(array).length > 0 ? (
        <AsignarCampana
          CasaCentralMG={CasaCentralMG}
          CasaCentralGG={CasaCentralGG}
          perico={perico}
          palpala={palpala}
          sanPedro={sanPedro}
          empresa={JSON.stringify(empresa)}
          campana={JSON.stringify(campana)}
        />
      ) : null}
    </Layout>
  );
};

export default estadosocio;
