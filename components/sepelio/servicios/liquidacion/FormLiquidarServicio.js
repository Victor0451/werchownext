import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";
import moment from 'moment'

const FormLiquidarServicio = ({ servicio, liqop, total, user, aprobarGasto, regLiqGasto }) => {

  return (
    <div>
      <div className="container border border-dark alert alert-primary p-4">
        {servicio ? (
          <h2>
            <strong>
              <u>Servicio N°: {servicio.idservicio}</u>: {servicio.apellido},{" "}
              {servicio.nombre}
            </strong>
          </h2>
        ) : null}
      </div>

      <hr className="mt-4 mb-4" />

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
                                      onClick={() => aprobarGasto(row.original.idgastos, 1, user)}
                                    >
                                      <i className="fa fa-check" aria-hidden="true"></i>
                                    </button>

                                    <button
                                      href=""
                                      className="btn btn-danger btn-sm mr-1"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      title="Rechazar"
                                      onClick={() => aprobarGasto(row.original.idgastos, 0, user)}
                                    >
                                      <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                  </>
                                ) : null

                              }

                            </>


                          ) : (
                            <>
                              {row.original.liquidado == 0 ? (

                                row.original.aprobado == 1 ? (
                                  <button
                                    href=""
                                    className="btn btn-info btn-sm mr-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Liquidar"
                                    onClick={() => regLiqGasto(row.original.idgastos, user)}
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
                          )}

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
