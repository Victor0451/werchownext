import React from "react";
import Spinner from "../../layout/Spinner";
import moment from "moment";

const ImprimirCaja = ({ caja, gastos, ingresos }) => {
  if (!caja) return <Spinner />;

  const totalGastos = (array) => {
    let total = 0;

    if (array) {
      for (let i = 0; i < array.length; i++) {
        total += array[i].total;
      }
      return total.toFixed(2);
    }
  };

  const totalFinal = (array, monto) => {
    let total = 0;

    if (array) {
      for (let i = 0; i < array.length; i++) {
        total += array[i].total;
      }

      let final = monto - total
      return final.toFixed(2);
    }
  };

  const calcmontocaja = (array) => {
    if (array) {
      let totaling = 0;
      for (let i = 0; i < array.length; i++) {
        totaling += array[i].monto;
      }
      let total = caja.monto - totaling;

      return total;
    } else {
      let total = caja.monto;
      return total;
    }
  };

  return (
    <div className="container mt-4 border border-dark list p-4">
      <div className="row">
        <div className="col-md-6">
          <h2>
            <strong>
              <u>Caja de sepelio N</u>: {caja.idcaja}
            </strong>
          </h2>

          <h4 className="mt-4">
            <strong>
              <u>Habilitacion</u>:{" "}
              {moment(caja.fecha).format("DD/MM/YYYY HH:mm")}
            </strong>
          </h4>
          <h4 className="mt-2">
            <strong>
              <u>Cierre</u>: {moment(caja.cierre).format("DD/MM/YYYY HH:mm")}
            </strong>
          </h4>
        </div>

        <div className="col-md-6 d-flex justify-content-end">
          <img src="/img/logo.png" className="werchowlogo" />
        </div>
      </div>
      <div className=" mt-4 border border-dark p-4">
        <div className="row">
          <div className="col-md-6">
            <table className=" table table-sm list border border-dark">
              <thead className="thead-dark">
                <th scope="col">#</th>
                <th scope="col">Ingresos</th>
                <th scope="col">Monto</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{caja.concepto}</td>
                  <td>{calcmontocaja(ingresos)}</td>
                </tr>
                {ingresos
                  ? ingresos.map((ingreso, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 2}</th>
                      <td>{ingreso.concepto}</td>
                      <td>{ingreso.monto}</td>
                    </tr>
                  ))
                  : null}
              </tbody>
            </table>
          </div>
          <div className="col-md-6">
            <table className="table table-sm list border border-dark">
              <thead className="thead-dark">
                <th scope="col">#</th>
                <th scope="col">Egresos</th>
                <th scope="col">Monto</th>
              </thead>
              <tbody>
                {gastos
                  ? gastos.map((gasto, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{gasto.concepto}</td>
                      <td>{gasto.total}</td>
                    </tr>
                  ))
                  : null}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row alert alert-info text-center text-uppercase border border-dark">
          <div className="col-md-6 ">Total Ingresos: {caja.monto}</div>
          <div className="col-md-6  ">Total Egresos: {totalGastos(gastos)}</div>
        </div>

        <div className=" alert alert-success text-center text-uppercase border border-dark">
          Saldo Restante: {totalFinal(gastos, caja.monto)}
        </div>
      </div>
    </div>
  );
};

export default ImprimirCaja;
