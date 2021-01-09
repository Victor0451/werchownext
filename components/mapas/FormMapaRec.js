import React from "react";

const FormMapaRec = ({
  listado,
  recRef,
  desdeRef,
  hastaRef,
  consultarMapa,
  error,
}) => {
  return (
    <div className="container mt-4 alert alert-primary border border-dark p-4">
      <h2 className=" mb-4 ">
        <strong>
          <u>Mapeo Acciones Recuperadoras por mes</u>
        </strong>
      </h2>
      <div className="row  border border-dark p-2">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Recuperadoras</u>
            </strong>
          </label>
          <select className="custom-select" ref={recRef}>
            <option value="no" selected>
              Selecciona un asesor
            </option>
            {listado ? (
              <>
                {listado.map((rec) => (
                  <option value={rec.value}>{rec.label}</option>
                ))}
              </>
            ) : null}
          </select>
        </div>
        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Desde</u>
            </strong>
          </label>
          <input className="form-control" type="date" ref={desdeRef} />
        </div>

        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Hasta</u>
            </strong>
          </label>
          <input className="form-control" type="date" ref={hastaRef} />
        </div>

        <div className="col-md-12 mt-1 ">
          <button
            className="mt-4 btn btn-block btn-primary"
            onClick={consultarMapa}
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

export default FormMapaRec;
