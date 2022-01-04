import React from "react";
import { meses, anos } from "../../array/array";
import MesSelect from "react-select";
import AnoSelect from "react-select";

const Resumen = ({ buscarNumeros, buscarNumerosMutual, handleChange, titulo, flag }) => {
  return (
    <div className="container mt-4 list border border-dark p-4">
      <h2 className=" mb-4 ">
        <strong>
          <u>Seleccione El Periodo De La {titulo}</u>
        </strong>
      </h2>
      <div className=" row border border-dark p-2">
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

        {flag == 'R' ? (
          <div className="col-md-4 mt-4">
            <a
              className="btn btn-block btn-primary"
              onClick={buscarNumeros}
              href="#"
            >
              Werchow
          </a>
          </div>
        ) : flag == 'E' ? (
          <>
            <div className="col-md-2 mt-4">
              <a
                className="btn btn-block btn-primary"
                onClick={buscarNumeros}
                href="#"
              >
                Werchow
          </a>
            </div>
            <div className="col-md-2 mt-4">
              <a
                className="btn btn-block btn-primary"
                onClick={buscarNumerosMutual}
                href="#"
              >
                Mutual
          </a>
            </div>
          </>
        ) : null}


      </div>
    </div>
  );
};

export default Resumen;
