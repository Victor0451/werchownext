import React from "react";
import moment from "moment";

const FormGenerarPago = ({
  mesRef,
  anoRef,
  importeRef,
  cuofija,
  preCargarPago,
  
}) => {
  const cuoInt = () => {
    let fecha = moment().format("DD");

    if (fecha > 15) {
      let cuoint = cuofija.IMPORTE + cuofija.IMPORTE * 0.1;
      return cuoint;
    } else if (fecha <= 15) {
      return cuofija.IMPORTE;
    }
  };

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

        {cuofija ? (
          <div className="col-md-3">
            <label>Importe</label>
            <input
              className="form-control"
              type="number"
              value={cuoInt()}
              ref={importeRef}
              readOnly
            />
          </div>
        ) : null}

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
