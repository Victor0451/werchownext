import React from "react";

const MovimientosMensuales = ({ desdeRef, hastaRef, error, traerPeriodo }) => {
  return (
    <div className="container mt-4 list border border-dark p-4">
      <h2 className=" mb-4 ">
        <strong>
          <u>Movimientos Mutual</u>: Seleccione El Periodo
        </strong>
      </h2>
      <div className="row  border border-dark p-2">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Desde</u>
            </strong>
          </label>
          <input type="date" className="form-control" ref={desdeRef} />
        </div>
        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Hasta</u>
            </strong>
          </label>
          <input type="date" className="form-control" ref={hastaRef} />
        </div>
        <div className="col-md-4 mt-1 ">
          <button
            className="mt-4 btn btn-block btn-primary"
            onClick={traerPeriodo}
            href="#"
          >
            Buscar
          </button>
        </div>
      </div>
      {error ? (
        <div className="alert alert-danger text-center text-uppercase m-4">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default MovimientosMensuales;
