import React, { useState } from "react";
import moment from "moment";
import { meses } from '../../../../array/array'

const FormGenerarPago = ({
  mesRef,
  anoRef,
  importeRef,
  cuofija,
  preCargarPago,
  cuoInt,
  cuo,

}) => {


  return (
    <div className="container mt-4 border border-dark list p-4">
      <div className="row d-flex justify-content-center">

        <div className="col-md-3">
          <label>Mes</label>
          <select className="custom-select" ref={mesRef} onChange={cuoInt}>
            <option defaultValue="no">Selecciona un Mes</option>
            {meses.map((m, index) => (
              <option key={index} defaultValue={m.value}>{m.value}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <label>Año</label>
          <input className="form-control" defaultValue={moment().format("YYYY")} type="number" ref={anoRef} onChange={cuoInt} />
        </div>

        {cuofija ? (
          <div className="col-md-3">
            <label>Importe</label>
            <input
              className="form-control"
              type="number"
              ref={importeRef}
              value={cuo}

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
