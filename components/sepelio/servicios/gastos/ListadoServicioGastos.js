import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";
import Link from "next/link";
import moment from "moment";

const ListadoServicioGastos = ({ listado }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <div className="list border border-dark ">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Servicios",
              columns: [
                {
                  Header: "Fecha",
                  id: "fecha_gasto",
                  accessor: (d) => d.fecha_gasto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha_gasto"] }),
                  filterAll: true,
                  width: 110,
                },
                {
                  Header: "Hs Inicio",
                  id: "hs_inicio",
                  accessor: (d) => d.hs_inicio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["hs_inicio"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Hs Fin",
                  id: "hs_fin",
                  accessor: (d) => d.hs_fin,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["hs_fin"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Gasto",
                  id: "tipo_gasto",
                  accessor: (d) => d.tipo_gasto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["tipo_gasto"],
                    }),
                  filterAll: true,
                  width: 150,
                },
                // {
                //   Header: "Importe",
                //   id: "importe",
                //   accessor: (d) => d.importe,
                //   filterMethod: (filter, rows) =>
                //     matchSorter(rows, filter.value, {
                //       keys: ["importe"],
                //     }),
                //   filterAll: true,
                //   width: 100,
                // },

                {
                  Header: "Observacion",
                  id: "observaciones",
                  accessor: (d) => d.observaciones,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["observaciones"],
                    }),
                  filterAll: true,
                  width: 300,
                },

                {
                  Header: "Operador",
                  id: "operador",
                  accessor: (d) => d.operador,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["operador"],
                    }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <Link
                        href={{
                          pathname: "/sepelio/servicios/editar",
                          query: {
                            id: row.original.dni,
                          },
                        }}
                      >
                        <button
                          className="btn btn-sm btn-warning border mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Editar Gasto"
                        >
                          <i
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </Link>

                      <Link
                        href={{
                          pathname: "/sepelio/servicios/impresion",
                          query: {
                            id: row.original.dni,
                          },
                        }}
                      >
                        <button
                          className="btn btn-sm btn-danger mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Eliminar Gasto"
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </Link>
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

export default ListadoServicioGastos;
