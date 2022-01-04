import React from "react";
import { meses, anos, sucursales } from "../../array/array";
import MesSelect from "react-select";
import AnoSelect from "react-select";
import SucursalSelect from "react-select";


const ResumenSucursales = ({ buscarNumeros, buscarNumerosMutual, handleChange }) => {
  return (
    <div className="container mt-4 list border border-dark p-4">
      <h2 className=" mb-4 ">
        <strong>
          <u>Seleccione El Periodo y Sucursal </u>
        </strong>
      </h2>
      <div className=" row border border-dark p-2">
        <div className="col-md-4 mt-4">
          <SucursalSelect
            options={sucursales}
            placeholder={"Eliga una Sucursal"}
            onChange={(value) => handleChange(value, "sucursal")}
          />
        </div>
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
        <div className="col-md-6 mt-4">
          <a
            className="btn btn-block btn-primary"
            onClick={buscarNumeros}
            href="#"
          >
            Werchow
          </a>
        </div>
        <div className="col-md-6 mt-4">
          <a
            className="btn btn-block btn-primary"
            onClick={buscarNumerosMutual}
            href="#"
          >
            Mutual
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumenSucursales;
