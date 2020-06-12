import React from "react";

const Rehabilitacion = ({ buscarTitular, contratoRef, errores, nomoro }) => {
  return (
    <div className="container">
      <form
        className="mt-4 border border-dark p-4 alert alert-primary"
        onSubmit={buscarTitular}
      >
        <h2 className=" mb-4">
          <strong>
            <u>Ingrese N° de Ficha</u>
          </strong>
        </h2>
        <div className="row mb-4">
          <div className="form-group col-md-6">
            <label>
              <strong>
                {" "}
                <u> N° de Ficha: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ficha"
              name="contrato"
              ref={contratoRef}
            />
          </div>
          <div className="form-group col-md-6 mt-4">
            <button type="submit" className="btn btn-block btn-primary">
              Buscar
            </button>
          </div>
          {errores && (
            <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
              {errores}
            </div>
          )}
          {nomoro && (
            <div className="mt-2 form-group alert alert-warning col-md-12 text-center text-uppercase">
              {nomoro}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Rehabilitacion;
