import React from "react";
import moment from "moment";

const MapaRec = ({ mapa, mapaM, desde, hasta }) => {
  const totalVentas = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i].cantidad;
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
          <u>Mapeo Recuperadores periodo</u>:{" "}
          {moment(desde).format("DD/MM/YYYY")} -{" "}
          {moment(hasta).format("DD/MM/YYYY")}
        </strong>
      </h2>
      <div className="mt-4 border border-dark p-4">
        <div className="row">
          <h4 className="col-md-6">
            <strong>
              <u>Asesor</u>: {mapa[0].rec}
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
                <th scope="col">ACCION</th>
                <th scope="col">CANTIDAD</th>
                <th scope="col">INGRESOS</th>
                <th scope="col">EMPRESA</th>
              </tr>
            </thead>
            <tbody>
              {mapa.map((mapa, index) => (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{mapa.accion}</td>
                  <td>{mapa.cantidad}</td>
                  <td>$ {mapa.monto}</td>
                  {mapa.empresa === "W" ? <td>WERCHOW</td> : null}
                </tr>
              ))}
              <tr className="alert alert-info">
                <td colSpan="2" className="text-center ">
                  TOTAL
                </td>
                <td>{totalVentas(mapa)}</td>
                <td>$ {totalMonto(mapa)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {mapaM ? (
          <div className="mt-4">
            <table class="table table-sm list">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ACCION</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">INGRESOS</th>
                  <th scope="col">EMPRESA</th>
                </tr>
              </thead>
              <tbody>
                {mapaM.map((mapa, index) => (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{mapa.accion}</td>
                    <td>{mapa.cantidad}</td>
                    <td>$ {mapa.monto}</td>
                    {mapa.empresa === "M" ? <td>MUTUAL</td> : null}
                  </tr>
                ))}
                <tr className="alert alert-info">
                  <td colSpan="2" className="text-center ">
                    TOTAL
                  </td>
                  <td>{totalVentas(mapaM)}</td>
                  <td>$ {totalMonto(mapaM)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MapaRec;
