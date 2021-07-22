import React from "react";

const FormGenerarPago = ({ mesRef, anoRef, cuofija, preCargarPago }) => {
  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <label>Mes</label>
          <input className="form-control" type="number" ref={mesRef} />
        </div>
        <div className="col-md-3">
          <label>Año</label>
          <input className="form-control" type="number" ref={anoRef} />
        </div>
        <div className="col-md-3">
          <label>Importe</label>
          <input className="form-control" type="number" value={cuofija} />
        </div>
        <div className="col-md-3">
          <button
            className="mt-4 btn btn-primary btn-block"
            onClick={preCargarPago}
          >
            PreCargar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormGenerarPago;
