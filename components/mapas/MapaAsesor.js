import React from "react";
import moment from "moment";

const MapaAsesor = ({ mapa }) => {
  if (mapa.length === 0)
    return (
      <div className="mt-4 container alert alert-warning text-center text-uppercase">
        No se registran ventas de este asesor en el año seleccionado
      </div>
    );

  const totalVentas = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i].ventas;
    }
    return total;
  };

  const totalMonto = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i].monto;
    }
    return total;
  };

  return (
    <div className="container border border-dark alert alert-primary p-4">
      <h2>
        <strong>
          <u>Mapeo de ventas por mes</u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <div className="row">
          <h4 className="col-md-6">
            <strong>
              <u>Asesor</u>:{mapa[0].asesor}
            </strong>
          </h4>
          <h4 className="col-md-6 d-flex justify-content-end">
            <strong>
              <u>Fecha de Ingreso</u>:
              {moment(mapa[0].anti).format("DD/MM/YYYY")}
            </strong>
          </h4>
        </div>

        <div className="mt-4">
          <table class="table table-sm list">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">MES</th>
                <th scope="col">VENTAS</th>
                <th scope="col">INGRESOS</th>
              </tr>
            </thead>
            <tbody>
              {mapa.map((mapa, index) => (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{mapa.mes}</td>
                  <td>{mapa.ventas}</td>
                  <td>$ {mapa.monto}</td>
                </tr>
              ))}
              <tr className="alert alert-info">
                <td colSpan="2" className="text-center ">
                  TOTAL
                </td>
                <td>{totalVentas(mapa)}</td>
                <td>$ {totalMonto(mapa)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MapaAsesor;
