import React from "react";
import OperadorSelect from "react-select";
import { operadorescamp } from "../../array/array";

import DatosCampana from "./DatosCampana";

const Resultados = ({
  handleChange,
  obtenerEstadistica,
  llamin,
  compago,
  nopaga,
  cuotadia,
  notificacion,
  carteraroja,
  sociofallecido,
  casosabiertos,
  casoscerrados,
  casosconaccion,
  casossinaccion,
  operador,
}) => {
  return (
    <div className="container ">
      <h1 className="mt-4 mb-4">
        <strong>
          <u>Estadisticas de campañas Werchow</u>
        </strong>
      </h1>
      <div className="row mt-4 mb-4 border border-dark p-2">
        <div className="form-group col-md-6 mt-4">
          <OperadorSelect
            options={operadorescamp}
            placeholder={"Operador"}
            onChange={(value) => handleChange(value, "operador")}
          />
        </div>
        <div className="form-group col-md-3 mt-4">
          <button
            className="btn btn-primary btn-block"
            onClick={() => obtenerEstadistica("werchow")}
          >
            Werchow
          </button>
        </div>
        <div className="form-group col-md-3 mt-4">
          <button
            className="btn btn-primary btn-block"
            onClick={() => obtenerEstadistica("mutual")}
          >
            Mutual
          </button>
        </div>
      </div>

      {llamin === null ? null : (
        <DatosCampana
          obtenerEstadistica={obtenerEstadistica}
          handleChange={handleChange}
          llamin={llamin}
          compago={compago}
          nopaga={nopaga}
          cuotadia={cuotadia}
          notificacion={notificacion}
          carteraroja={carteraroja}
          sociofallecido={sociofallecido}
          casosabiertos={casosabiertos}
          casoscerrados={casoscerrados}
          casosconaccion={casosconaccion}
          casossinaccion={casossinaccion}
          operador={operador}
        />
      )}
    </div>
  );
};

export default Resultados;
