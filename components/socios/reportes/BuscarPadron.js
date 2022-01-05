import React from "react";
import { estadocartera, meses, cartera } from "../../../array/array";
import CarteraMorosa from "./CarteraMorosa";
import CarteraSinTelefono from "./CarteraSinTelefono";

const BuscarPadron = ({
  handleChange,
  errores,
  nomoro,
  desdeRef,
  hastaRef,
  buscarCartera,
  buscarCarteram,
  errorrango,
  listZona,
  anos,
  buscarCarteraSinTel,
  buscarCarteraSinTelM
}) => {
  return (
    <div className="container border border-dark mt-4 p-4 list">

      <CarteraMorosa
        errores={errores}
        nomoro={nomoro}
        desdeRef={desdeRef}
        hastaRef={hastaRef}
        buscarCartera={buscarCartera}
        buscarCarteram={buscarCarteram}
        errorrango={errorrango}
        meses={meses}
        estadocartera={estadocartera}
        listZona={listZona}
        anos={anos}
        handleChange={handleChange}

      />

      <hr className="border border-dark" />

      <CarteraSinTelefono
        cartera={cartera}
        handleChange={handleChange}
        listZona={listZona}
        buscarCarteraSinTel={buscarCarteraSinTel}
        buscarCarteraSinTelM={buscarCarteraSinTelM}
      />

    </div>
  );
};

export default BuscarPadron;
