import React, { useRef } from "react";
import OperadorSelect from "react-select";
import ReactToPrint from "react-to-print";

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
  let componentRef = useRef();

  return (
    <div className="container list p-4 border border-dark mt-4 ">
      <div className="mt-4 border border-dark  p-4">
        <h2 className="mt-4 mb-4">
          <strong>
            <u>Estadisticas de campañas Werchow</u>
          </strong>
        </h2>
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
      </div>
      {llamin === null ? null : (
        <>
          <hr className=" mt-4 mb-4" />
          <div className="print-estadistica" ref={componentRef}>
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
            <hr className="mt-4 mb-4" />
            <div className=" border border-dark p-4">
              <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
              <div className="row d-flex justify-content-center">
                <ReactToPrint
                  trigger={() => (
                    <a href="#" className="btn btn-primary">
                      imprimir{" "}
                    </a>
                  )}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Resultados;
