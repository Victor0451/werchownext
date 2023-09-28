import React from "react";
import moment from "moment";
import { meses, anos } from "../../array/array";
const FormProgreso = ({
  asignado,
  trabajado,
  porcenTab,
  recup,
  recRef,
  anoRef,
  mesRef,
  progCasos,
  mes,
  ano,
  show,
}) => {
  return (
    <div className="container list p-4 mt-4 mb-4 border border-dark">
      <h2>
        <strong>
          <u>Progreso en el trabajo de campañas</u>
        </strong>
      </h2>

      <div className="border border-dark p-4 mt-4 row">
        <div className="col-md-3">
          <label>
            <strong>
              <u>Recuperadoras</u>
            </strong>
          </label>
          <select className="custom-select" ref={recRef}>
            <option defaultValue="no">Selecciona un Recuperador</option>
            {recup ? (
              <>
                {recup.map((rec, index) => (
                  <option key={index} value={rec.label}>
                    {rec.label}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Mes</u>
            </strong>
          </label>
          <select className="custom-select" ref={mesRef}>
            <option defaultValue="no">Selecciona un Mes</option>
            {meses ? (
              <>
                {meses.map((rec, index) => (
                  <option key={index} value={rec.value}>
                    {rec.label}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Año</u>
            </strong>
          </label>
          <select className="custom-select" ref={anoRef}>
            <option defaultValue="no">Selecciona un Año</option>
            {anos ? (
              <>
                {anos.map((rec, index) => (
                  <option key={index} value={rec.label}>
                    {rec.label}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>
        <div className="col-md-3">
          <button
            onClick={progCasos}
            className="btn btn-primary btn-block mt-4"
          >
            Buscar Progreso
          </button>
        </div>
      </div>

      {show === true ? (
        <div className="mt-4 alert alert-info text-center  border border-dark mt-4 mb-4">
          <h4 className="alert-heading">Estadistica General de Campañas</h4>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total de Casos Asignados:
              <span className="badge badge-primary badge-pill">{asignado}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total de Casos Trabajados:
              <span className="badge badge-primary badge-pill">
                {trabajado}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Progreso de Trabajo:
              <span className="badge badge-primary badge-pill">
                {porcenTab(asignado, trabajado)}%
              </span>
            </li>
          </ul>
          <hr />
          <p className="mb-0">
            Estadistica sobre el trabajo realizado en los casos de campañas
            pertenecientes al periodo: {mes}/{ano}.
          </p>
          <p className="mb-0">
            El progreso de trabajo, cuenta para la liquidacion del bono.
          </p>
        </div>
      ) : show === false ? null : null}
    </div>
  );
};

export default FormProgreso;
