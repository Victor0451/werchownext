import React from "react";
import moment from "moment";

const MapaRec = ({ mapa, mapaM, desde, hasta, ano }) => {
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

  const mesNombre = (mes) => {
    let month = "";

    if (mes === 1) {
      month = "ENERO";
    } else if (mes === 2) {
      month = "FEBRERO";
    } else if (mes === 3) {
      month = "MARZO";
    } else if (mes === 4) {
      month = "ABRIL";
    } else if (mes === 5) {
      month = "MAYO";
    } else if (mes === 6) {
      month = "JUNIO";
    } else if (mes === 7) {
      month = "JULIO";
    } else if (mes === 8) {
      month = "AGOSTO";
    } else if (mes === 9) {
      month = "SEPTIEMBRE";
    } else if (mes === 10) {
      month = "OCTUBRE";
    } else if (mes === 11) {
      month = "NOVIEMBRE";
    } else if (mes === 12) {
      month = "DICIEMBRE";
    }
    return month;
  };

  return (
    <div className="container border border-dark alert alert-primary p-4">
      {ano ? (
        <h2>
          <strong>
            <u>
              Mapeo Recuperadora {mapa[0].rec}, año {ano}
            </u>
          </strong>
        </h2>
      ) : (
        <h2>
          <strong>
            <u>Mapeo Recuperador {mapa[0].rec}, periodo</u>:{" "}
            {moment(desde).format("DD/MM/YYYY")} -{" "}
            {moment(hasta).format("DD/MM/YYYY")}
          </strong>
        </h2>
      )}

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

        {mapa ? (
          mapa.length !== 0 ? (
            <div className="mt-4 border border-dark p-4">
              <h4 className="mb-4">
                <strong>
                  <u>Empresa</u>: Werchow
                </strong>
              </h4>

              <table className="table table-sm list">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ACCION</th>
                    {mapa[0].mes ? <th scope="col">MES</th> : null}
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">INGRESOS</th>
                    <th scope="col">EMPRESA</th>
                  </tr>
                </thead>
                <tbody>
                  {mapa.map((mapa, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{mapa.accion}</td>
                      {mapa.mes ? <td>{mesNombre(mapa.mes)}</td> : null}
                      <td>{mapa.cantidad}</td>
                      <td>$ {mapa.monto}</td>
                      {mapa.empresa === "W" ? <td>WERCHOW</td> : null}
                    </tr>
                  ))}
                  <tr className="alert alert-info">
                    <td colSpan="2" className="text-center ">
                      TOTAL
                    </td>
                    <td></td>
                    <td>{totalVentas(mapa)}</td>
                    <td>$ {totalMonto(mapa)}</td>
                    {mapa[0].mes ? <td></td> : null}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="border border-dark p-4">
              <h4 className="mb-4">
                <strong>
                  <u>Empresa</u>: Werchow
                </strong>
              </h4>
              <div className="alert alert-warning text-center text-uppercase">
                No se registran acciones
              </div>
            </div>
          )
        ) : null}

        {mapaM ? (
          mapaM.length !== 0 ? (
            <div className="mt-4 border border-dark p-4">
              <h4 className="mb-4">
                <strong>
                  <u>Empresa</u>: Mutual
                </strong>
              </h4>
              <table className="table table-sm list">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">ACCION</th>
                    {mapaM[0].mes ? <th scope="col">MES</th> : null}
                    <th scope="col">CANTIDAD</th>
                    <th scope="col">INGRESOS</th>
                    <th scope="col">EMPRESA</th>
                  </tr>
                </thead>
                <tbody>
                  {mapaM.map((mapa, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{mapa.accion}</td>
                      {mapa.mes ? <td>{mesNombre(mapa.mes)}</td> : null}
                      <td>{mapa.cantidad}</td>
                      <td>$ {mapa.monto}</td>
                      {mapa.empresa === "M" ? <td>MUTUAL</td> : null}
                    </tr>
                  ))}
                  <tr className="alert alert-info">
                    <td colSpan="2" className="text-center ">
                      TOTAL
                    </td>
                    <td></td>
                    <td>{totalVentas(mapaM)}</td>
                    <td>$ {totalMonto(mapaM)}</td>
                    {mapaM[0].mes ? <td></td> : null}
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="border border-dark p-4">
              <h4 className="mt-4 mb-4">
                <strong>
                  <u>Empresa</u>: Mutual
                </strong>
              </h4>
              <div className="alert alert-warning text-center text-uppercase">
                No se registran acciones
              </div>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default MapaRec;
