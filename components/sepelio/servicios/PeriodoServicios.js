import React from "react";

const PeriodoServicios = ({
  desdeRef,
  hastaRef,
  buscarServicios,
  todoLosServicios,
  error,
}) => {
  return (
    <div className="container mt-4 border border-dark list p-4">
      <h2 className="mb-4">
        <strong>
          <u>Listados de servicios por periodo</u>
        </strong>
      </h2>

      <div className="border border-dark p-4">
        <h4 className="mt-2 mb-2">
          <strong>
            <u>Elija un periodo</u>
          </strong>
        </h4>
        <div className="row">
          <div className="col-md-4">
            <label>
              <strong>
                <u>Desde</u>
              </strong>
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Desde"
              name="desde"
              ref={desdeRef}
            />
          </div>
          <div className="col-md-4">
            <label>
              <strong>
                <u>Hasta</u>
              </strong>
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="Hasta"
              name="hasta"
              ref={hastaRef}
            />
          </div>

          <div className="col-md-4">
            <button
              className="mt-4 btn btn-block btn-primary"
              onClick={buscarServicios}
            >
              Buscar
            </button>
          </div>

          {error && (
            <div className="mt-4 form-group alert alert-danger col-md-12 text-center text-uppercase">
              {error}
            </div>
          )}
        </div>

        <hr className="border border-dark mt-4" />

        <div className="row mt-4">
          <div className="col-md-12">
            <button
              className="btn btn-block btn-primary"
              onClick={todoLosServicios}
            >
              Ver Todos Los Servicios Cargados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodoServicios;
