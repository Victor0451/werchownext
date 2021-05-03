import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";
import moment from 'moment'

const FormLiquidarServicio = ({ servicio, liqop, total, user, aprobarGasto, regLiqGasto, ataud, parcela }) => {

  return (
    <div>
      <div className="container border border-dark alert alert-primary p-4">
        {servicio ? (
          <>
            <h2>
              <strong>
                <u>Servicio N° {servicio.idservicio} - Extinto</u>: {servicio.apellido},{" "}
                {servicio.nombre}
              </strong>
            </h2>

            <div className="mt-4 border border-dark p-4">
              <div className="border border-dark p-4">
                <h4>
                  <strong>
                    <u>
                      Detalles del servicio
                  </u>
                  </strong>
                </h4>

                <div className="mt-4 row">

                  <div className=" col-md-4">
                    <label>
                      <u>
                        Fecha Recepcion
                    </u>
                      <input type="text" className="mt-2 form-control" value={moment(servicio.fecha_recepcion).format('DD/MM/YYYY HH:mm:ss')} />
                    </label>
                  </div>

                  <div className=" col-md-4">
                    <label>
                      <u>
                        Motivo Fallecimiento
                    </u>
                      <input type="text" className="mt-2 form-control" value={servicio.motivo} />
                    </label>
                  </div>

                  <div className=" col-md-4">
                    <label>
                      <u>
                        Tipo de Sevicio
    </u>
                      <input type="text" className="mt-2 form-control" value={servicio.tipo_servicio} />
                    </label>
                  </div>

                  <div className="mt-4 col-md-4">
                    <label>
                      <u>
                        Lugar de Fallecimiento
    </u>
                      <input type="text" className="mt-2 form-control" value={servicio.lugar_fallecimiento} />
                    </label>
                  </div>

                  <div className="mt-4 col-md-4">
                    <label>
                      <u>
                        Velatorio
    </u>
                      <input type="text" className="mt-2 form-control" value={servicio.casa_mortuaria} />
                    </label>
                  </div>
                  <div className="mt-4 col-md-4">
                    <label>
                      <u>
                        Fecha de inhumacion
    </u>
                      <input type="text" className="mt-2 form-control" value={moment(servicio.fecha_inhumacion).format('DD/MM/YYYY')} />
                    </label>
                  </div>
                  <div className="mt-4 col-md-4">
                    <label>
                      <u>
                        Cementerio
    </u>
                      <input type="text" className="mt-2 form-control" value={servicio.cementerio} />
                    </label>
                  </div>
                </div>
              </div>

              {ataud ? (
                <div className="mt-4 border border-dark p-4">
                  <h4>
                    <strong>
                      <u>
                        Detalles del ataud
                  </u>
                    </strong>
                  </h4>
                  <div className="row">
                    <div className="mt-4 col-md-4">
                      <label>
                        <u>
                          Ataud
                        </u>
                        <input type="text" className="mt-2 form-control" value={ataud.nombre} />
                      </label>
                    </div>

                    <div className="mt-4 col-md-4">
                      <label>
                        <u>
                          Tipo
                        </u>
                        <input type="text" className="mt-2 form-control" value={ataud.tipo} />
                      </label>
                    </div>

                    <div className="mt-4 col-md-4">
                      <label>
                        <u>
                          Uso
                        </u>
                        <input type="text" className="mt-2 form-control" value={ataud.uso} />
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" mt-4 col-md-12 alert alert-info border border-dark text-center text-uppercase">
                  Este servicio no tiene ataud designado
                </div>
              )}

              {parcela ? (
                <div className="mt-4 border border-dark p-4">
                  <h4>
                    <strong>
                      <u>
                        Detalles de la Parcela
                </u>
                    </strong>
                  </h4>
                  <div className="row">
                    <div className="col-md-4">
                      <label>
                        <u>
                          Parcela
                        </u>
                        <input type="text" className="mt-2 form-control" value={parcela.parcela} />
                      </label>
                    </div>

                    <div className="col-md-4">
                      <label>
                        <u>
                          Manzana
                        </u>
                        <input type="text" className="mt-2 form-control" value={parcela.mza} />
                      </label>
                    </div>

                    <div className="col-md-4">
                      <label>
                        <u>
                          Lote
                        </u>
                        <input type="text" className="mt-2 form-control" value={parcela.lote} />
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                <div className=" mt-4 col-md-12 alert alert-info border border-dark text-center text-uppercase">
                  Este servicio no tiene parcela designada
                </div>
              )}


            </div>

          </>
        ) : null}
      </div>

      <hr className="mt-4 mb-4" />

      {/* <table className="table table-sm">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table> */}


      {liqop ? (
        <div className=" border border-dark alert alert-primary mt-4 p-4">
          <h4>
            <strong>
              <u>Liquidacion del personal</u>
            </strong>
          </h4>

          <div className="list mt-4 border border-dark ">
            <ReactTable
              data={liqop}
              filterable
              defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
              columns={[
                {
                  Header: "Liquidacion Por Operador",
                  columns: [
                    {
                      Header: "#",
                      filterAll: false,
                      width: 30,
                      Cell: (row) => <div>{row.index + 1}</div>,
                    },
                    {
                      Header: "Operador",
                      id: "operador",
                      accessor: (d) => d.operador,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["operador"] }),
                      filterAll: true,
                      width: 100,
                    },
                    {
                      Header: "Tarea",
                      id: "tipo_gasto",
                      accessor: (d) => d.tipo_gasto,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["tipo_gasto"] }),
                      filterAll: true,
                      width: 150,
                    },
                    {
                      Header: "Inicio",
                      id: "inicio",
                      accessor: (d) => moment(d.inicio).utcOffset("+000").locale('es').format('llll'),
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["inicio"] }),
                      filterAll: true,
                      width: 230,
                    },
                    {
                      Header: "Fin",
                      id: "fin",
                      accessor: (d) => moment(d.fin).utcOffset("+000").locale('es').format('llll'),
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, {
                          keys: ["fin"],
                        }),
                      filterAll: true,
                      width: 230,
                    },
                    {
                      Header: "Liquidacion",
                      id: "liquidacion",
                      accessor: (d) => d.liquidacion,
                      filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, {
                          keys: ["liquidacion"],
                        }),
                      filterAll: true,
                      width: 100,
                    },

                    {
                      Header: "Aprobado",

                      Cell: (row) => (
                        <>
                          {row.original.aprobado === 0 ? (

                            <div>
                              Rechazado por {row.original.operadorap}: {moment(row.original.fecha_aprobacion).format('DD/MM/YYYY HH:mm:ss')}
                            </div>

                          ) : row.original.aprobado === 1 ? (

                            <div>
                              Aprobado por {row.original.operadorap}: {moment(row.original.fecha_aprobacion).format('DD/MM/YYYY HH:mm:ss')}
                            </div>

                          ) : row.original.aprobado == null ?
                            (
                              <div>
                                Esperando Aprobacion
                              </div>
                            ) : null}
                        </>
                      ),
                    },
                    {
                      Header: "Acciones",
                      width: 100,
                      Cell: (row) => (
                        <>
                          {user === 'joaquini' || user === 'isantiago' || user === 'jmorales' || user === 'emoreno' || user === 'jcmorales' ? (
                            <>
                              {
                                row.original.aprobado === 1 ? (
                                  <div>
                                    Aprobado
                                  </div>
                                ) : row.original.aprobado === null ? (
                                  <>
                                    <button
                                      href=""
                                      className="btn btn-success btn-sm mr-1"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Aprobar"
                                      onClick={() => aprobarGasto(row.original.idgastos, 1, user, servicio.idservicio)}
                                    >
                                      <i className="fa fa-check" aria-hidden="true"></i>
                                    </button>

                                    <button
                                      href=""
                                      className="btn btn-danger btn-sm mr-1"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Rechazar"
                                      onClick={() => aprobarGasto(row.original.idgastos, 0, user, servicio.idservicio)}
                                    >
                                      <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                  </>
                                ) : null

                              }

                            </>


                          ) : user === 'rquispe' || user === 'nquintana' || user === 'vlongo' ? (
                            <>
                              {row.original.liquidado == 0 ? (

                                row.original.aprobado == 1 ? (
                                  <button
                                    href=""
                                    className="btn btn-info btn-sm mr-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Liquidar"
                                    onClick={() => regLiqGasto(row.original.idgastos, user, servicio.idservicio)}
                                  >
                                    <i className="fa fa-check" aria-hidden="true"></i>   Liquidar
                                  </button>
                                ) : row.original.aprobado == 0 ? (
                                  <div>
                                    Rechazado
                                  </div>
                                ) : (
                                  <div>
                                    ...
                                  </div>
                                )

                              ) : row.original.liquidado == 1 ? (

                                <div>
                                  Liquidado por {row.original.operadorliq}: {moment(row.original.fecha_liquidacion).format('DD/MM/YYYY HH:mm:ss')}
                                </div>



                              ) : null}
                            </>
                          ) : (<div>Sin Acciones</div>)}

                        </>
                      ),
                    },





                  ],
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>


          <div className="mt-4 alert alert-info text-center text-uppercase border border-dark ">
            Total Liquidacion del personal: {total(liqop)}
          </div>
        </div>
      ) : null
      }

      <hr className="mt-4 mb-4" />
    </div >
  );
};

export default FormLiquidarServicio;
