import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";

const ListadoCajasGeneradas = ({
  listado,
  traerMovimientos,
  traerListadoControl,
}) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container list border border-dark mt-4 p-4">
      <h2>
        <strong>
          <u>Listado de Cajas Generadas</u>
        </strong>
      </h2>

      <div className="border border-dark p-1 mt-4">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Cajas",
              columns: [
                {
                  Header: "#",
                  filterAll: false,
                  width: 50,
                  Cell: (row) => <div>{row.index + 1}</div>,
                },
                {
                  Header: "Fecha Caja",
                  id: "FECHA",
                  accessor: (d) => moment(d.FECHA).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                  filterAll: true,
                },
                {
                  Header: "Ingresos",
                  id: "Ingresos",
                  filterAll: true,

                  Cell: (row) => (
                    <div>
                      {row.original.INGRESOS === null ? (
                        <>0</>
                      ) : (
                        <>{row.original.INGRESOS}</>
                      )}
                    </div>
                  ),
                },

                {
                  Header: "Egresos",
                  id: "Egresos",
                  filterAll: true,

                  Cell: (row) => (
                    <div>
                      {row.original.EGRESOS === null ? (
                        <>0</>
                      ) : (
                        <>{row.original.EGRESOS}</>
                      )}
                    </div>
                  ),
                },

                {
                  Header: "Valores a Depositar",
                  id: "Valores a Depositar",
                  filterAll: true,

                  Cell: (row) => (
                    <div>
                      {row.original.VAL_DEPOSIT === null ? (
                        <>0</>
                      ) : (
                        <>{row.original.VAL_DEPOSIT}</>
                      )}
                    </div>
                  ),
                },

                {
                  Header: "OPERADOR",
                  id: "OPERADOR",
                  accessor: (d) => d.OPERADOR,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["OPERADOR"] }),
                  filterAll: true,
                },

                {
                  Header: "Acciones",
                  id: "acciones",
                  filterAll: true,

                  Cell: (row) => (
                    <div>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          traerMovimientos(row.original.FECHA);
                          traerListadoControl(
                            row.original.FECHA,
                            row.original.OPERADOR
                          );
                        }}
                        data-toggle="modal"
                        data-target="#modalImprimirCaja"
                      >
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>{" "}
                        Imprimir
                      </button>
                    </div>
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

export default ListadoCajasGeneradas;
