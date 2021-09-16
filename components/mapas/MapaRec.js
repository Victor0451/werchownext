import React from "react";
import moment from "moment";

const MapaRec = ({ mapa, mapaM, desde, hasta, ano, mora, moraM }) => {
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
      total += parseFloat(array[i].monto);
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

  const efectividadMora = (mora, liq) => {
    let mor = 0;
    let rec = 0;

    for (let i = 0; i < mora.length; i++) {
      mor += parseFloat(mora[i].monto);
    }

    for (let i = 0; i < liq.length; i++) {
      rec += parseFloat(liq[i].monto);
    }

    let efec = (rec * 100) / mor;

    return efec.toFixed(2);
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
            <>
              <div className="mt-4 border border-dark p-4">
                <h4 className="mb-4">
                  <strong>
                    <u>Empresa</u>: Werchow
                  </strong>
                </h4>
                <div className="row">
                  {mora ? (
                    mora.length !== 0 ? (
                      <div className="col-md-6">
                        <h6 className="mb-4">
                          <strong>
                            <u>Mora asignada en campaña</u>
                          </strong>
                        </h6>
                        <table className="table table-sm list">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">ACCION</th>
                              <th scope="col">CASOS</th>
                              <th scope="col">MORA</th>
                              <th scope="col">EMPRESA</th>
                            </tr>
                          </thead>
                          <tbody>
                            {mora.map((mora, index) => (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{mora.descripcion}</td>
                                <td>{mora.cantidad}</td>
                                <td>$ {mora.monto}</td>
                                {mora.empresa === "werchow" ? (
                                  <td>WERCHOW</td>
                                ) : null}
                              </tr>
                            ))}
                            <tr className="alert alert-info border border-dark text-center text-uppercase">
                              <td colSpan="2" className="text-center ">
                                TOTAL
                              </td>

                              <td>{totalVentas(mora)}</td>
                              <td>$ {totalMonto(mora)}</td>
                              {mora[0].mes ? <td></td> : null}
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="border border-dark p-4">
                        <div className="alert alert-warning text-center text-uppercase">
                          No se registran acciones
                        </div>
                      </div>
                    )
                  ) : null}

                  <div className="col-md-6">
                    <h6 className="mb-4">
                      <strong>
                        <u>Liquidacion (Mora recuperada)</u>
                      </strong>
                    </h6>
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
                        <tr className="alert alert-info border border-dark text-center text-uppercase">
                          <td colSpan="2" className="text-center ">
                            TOTAL
                          </td>

                          <td>{totalVentas(mapa)}</td>
                          <td>$ {totalMonto(mapa)}</td>
                          <td></td>
                          {mapa[0].mes ? <td></td> : null}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 alert alert-info border border-dark text-center text-uppercase">
                  Efectividad de mora {efectividadMora(mora, mapa)} %
                </div>
              </div>
            </>
          ) : (
            <div className="border border-dark p-4">
              <div className="alert alert-warning text-center text-uppercase">
                No se registran acciones
              </div>
            </div>
          )
        ) : null}

        {mapaM ? (
          mapaM.length !== 0 ? (
            <>
              <div className="mt-4 border border-dark p-4">
                <h4 className="mb-4">
                  <strong>
                    <u>Empresa</u>: Mutual San Valentin
                  </strong>
                </h4>
                <div className="row">
                  {moraM ? (
                    moraM.length !== 0 ? (
                      <div className="col-md-6">
                        <h6 className="mb-4">
                          <strong>
                            <u>Mora asignada en campaña</u>
                          </strong>
                        </h6>
                        <table className="table table-sm list">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">ACCION</th>
                              <th scope="col">CASOS</th>
                              <th scope="col">MORA</th>
                              <th scope="col">EMPRESA</th>
                            </tr>
                          </thead>
                          <tbody>
                            {moraM.map((moraM, index) => (
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{moraM.descripcion}</td>
                                <td>{moraM.cantidad}</td>
                                <td>$ {moraM.monto}</td>
                                {moraM.empresa === "mutual" ? (
                                  <td>MUTUAL</td>
                                ) : null}
                              </tr>
                            ))}
                            <tr className="alert alert-info border border-dark text-center text-uppercase">
                              <td colSpan="2" className="text-center ">
                                TOTAL
                              </td>

                              <td>{totalVentas(moraM)}</td>
                              <td>$ {totalMonto(moraM)}</td>
                              <td></td>
                              {moraM[0].mes ? <td></td> : null}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="border border-dark p-4">
                        <div className="alert alert-warning text-center text-uppercase">
                          No se registran acciones
                        </div>
                      </div>
                    )
                  ) : null}

                  <div className="col-md-6">
                    <h6 className="mb-4">
                      <strong>
                        <u>Liquidacion (Mora recuperada)</u>
                      </strong>
                    </h6>
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
                        {mapaM.map((mapaM, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{mapaM.accion}</td>
                            {mapaM.mes ? <td>{mesNombre(mapaM.mes)}</td> : null}
                            <td>{mapaM.cantidad}</td>
                            <td>$ {mapaM.monto}</td>
                            {mapaM.empresa === "M" ? <td>MUTUAL</td> : null}
                          </tr>
                        ))}
                        <tr className="alert alert-info border border-dark text-center text-uppercase">
                          <td colSpan="2" className="text-center ">
                            TOTAL
                          </td>

                          <td>{totalVentas(mapaM)}</td>
                          <td>$ {totalMonto(mapaM)}</td>
                          <td></td>
                          {mapaM[0].mes ? <td></td> : null}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 alert alert-info border border-dark text-center text-uppercase">
                  Efectividad de mora {efectividadMora(moraM, mapaM)} %
                </div>
              </div>
            </>
          ) : (
            <div className="border border-dark p-4">
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
