import React from "react";

const BuscarCumple = ({ fn, fnM, fechaRef, error }) => {
  return (
    <div className="container ">
      <form className=" border border-dark alert alert-primary p-4">
        <h3 className="mb-4">
          <strong>
            <u>Seleccione una fecha</u>
          </strong>
        </h3>

        <div className="row d-flex justify-content-center">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Fecha: </u>
              </strong>
            </label>
            <input
              type="date"
              className="form-control"
              placeholder="DNI"
              name="contrato"
              ref={fechaRef}
            />
            {error && (
              <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                {error}
              </div>
            )}
          </div>
          <div className="form-group col-md-4">
            <button className="btn btn-primary btn-block mt-4" onClick={fn}>
              Werchow
            </button>
          </div>
          <div className="form-group col-md-4">
            <button className="btn btn-primary btn-block mt-4" onClick={fnM}>
              Mutual
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuscarCumple;
