import React from "react";

const InformePrestamos = ({ desdeRef, hastaRef, buscarPrestamos, error }) => {
  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <h2 className=" mb-4">
        <strong>
          <u>Reportes de Sub. Cont. Familiar</u>
        </strong>
      </h2>

      <div className="border border-dark p-2 mt-4 mb-4">
        <h3 className="mt-4 mb-4">
          <u>Elija el Periodo</u>
        </h3>
        <div className="row mb-4">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Desde: </u>
              </strong>
            </label>
            <input type="date" className="form-control" ref={desdeRef} />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Hasta: </u>
              </strong>
            </label>
            <input type="date" className="form-control" ref={hastaRef} />
          </div>

          <div className="form-group col-md-4">
            <button
              className="btn btn-primary btn-block mt-4"
              onClick={buscarPrestamos}
            >
              Buscar
            </button>
          </div>
        </div>
        {error && (
          <div className="mt-2 col-md-12 alert alert-danger text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default InformePrestamos;
