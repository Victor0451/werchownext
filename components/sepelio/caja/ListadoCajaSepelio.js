import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import Link from "next/link";
import moment from "moment";

// Import React Table
import ReactTable from "react-table";

const ListadoCajaSepelio = ({ cajas }) => {
  const selcaso = (row) => {
    if (ataud) {
      guardarAtaud(null);
    } else {
      guardarAtaud(row.original);
    }
  };

  if (!cajas)
    return (
      <div className="container mt-4 alert alert-danger p-4 border border-dark">
        No Hay Cajas Registradas
      </div>
    );
  return (
    <div className="container mt-4 border border-dark list">
      <h4 className="mt-4 mb-4">
        <strong>
          <u>Cajas De Sepelio</u>
        </strong>
      </h4>
      <div className=" mt-4 border border-dark list">
        <ReactTable
          data={cajas}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado de Cajas",
              columns: [
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) =>
                    moment(d.fecha).format("DD/MM/YYYY HH:mm:ss"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Motno",
                  id: "monto",
                  accessor: (d) => d.monto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["monto"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Empresa",
                  id: "empresa",
                  accessor: (d) => d.empresa,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["empresa"] }),
                  filterAll: true,
                },

                {
                  Header: "Concepto",
                  id: "concepto",
                  accessor: (d) => d.concepto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["concepto"] }),
                  filterAll: true,
                },

                {
                  Header: "Gastos",
                  id: "gastos",
                  accessor: (d) => d.gastos,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["gastos"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Total Caja",
                  id: "totalcaja",
                  accessor: (d) => d.totalcaja,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["totalcaja"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Estado",
                  id: "estado",
                  accessor: (d) => d.estado,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["estado"] }),
                  filterAll: true,

                  Cell: (row) => (
                    <div>
                      {row.original.estado === 1 ? (
                        <div>Abierta</div>
                      ) : row.original.estado === 0 ? (
                        <div>Cerrada</div>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <>
                      {row.original.estado === 1 ? (
                        <>
                          <Link
                            href={{
                              pathname: "/sepelio/caja/ingresoscaja",
                              query: {
                                id: row.original.idcaja,
                              },
                            }}
                          >
                            <button
                              href=""
                              className="btn btn-success btn-sm mr-1"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Cargar Ingresos"
                            >
                              <i
                                className="fa fa-arrow-up"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </Link>
                          <Link
                            href={{
                              pathname: "/sepelio/caja/gastoscaja",
                              query: {
                                id: row.original.idcaja,
                              },
                            }}
                          >
                            <button
                              href=""
                              className="btn btn-warning btn-sm mr-1"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Cargar Gastos"
                            >
                              <i
                                className="fa fa-arrow-down"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </Link>
                        </>
                      ) : (
                        <Link
                          href={{
                            pathname: "/sepelio/caja/imprimir",
                            query: {
                              id: row.original.idcaja,
                            },
                          }}
                        >
                          <button
                            className="btn btn-sm btn-primary mr-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Imprimir Solicitud"
                          >
                            <i className="fa fa-print" aria-hidden="true"></i>
                          </button>
                        </Link>
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
    </div>
  );
};

export default ListadoCajaSepelio;
