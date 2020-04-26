import React from "react";
import { meses, anos } from "../../array/array";
import MesSelect from "react-select";
import AnoSelect from "react-select";

const Resumen = ({ buscarNumeros, handleChange }) => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-4 ">
        <strong>
          <u>Seleccione El Periodo De La Cobranza</u>
        </strong>
      </h2>
      <div className=" d-flex justify-content-beetwen border border-dark p-2">
        <div className="col-md-4 mt-4">
          <MesSelect
            options={meses}
            placeholder={"Eliga un Mes"}
            onChange={(value) => handleChange(value, "mes")}
          />
        </div>
        <div className="col-md-4 mt-4">
          <AnoSelect
            options={anos}
            placeholder={"Eliga el Año"}
            onChange={(value) => handleChange(value, "ano")}
          />
        </div>
        <div className="col-md-4 mt-4">
          <a
            className="btn btn-block btn-primary"
            onClick={buscarNumeros}
            href="#"
          >
            Buscar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
