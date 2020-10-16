import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import Link from "next/link";

const ListadoNovell = ({ listado }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container mt-4">
      <ReactTable
        data={listado}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Listado Novell",
            columns: [
              {
                Header: "Servicio",
                id: "servicio",
                accessor: (d) => d.servicio,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["servicio"] }),
                filterAll: true,
              },
              {
                Header: "Fecha",
                id: "fecha_recepcion",
                accessor: (d) => d.fecha_recepcion,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, {
                    keys: ["fecha_recepcion"],
                  }),
                filterAll: true,
              },
              {
                Header: "Apellido Solicitante",
                id: "apellido_sol",
                accessor: (d) => d.apellido_sol,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["apellido_sol"] }),
                filterAll: true,
              },

              {
                Header: "Apellido Beneficiario",
                id: "apellido_ben",
                accessor: (d) => d.apellido_ben,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["apellido_ben"] }),
                filterAll: true,
              },

              {
                Header: "Acciones",

                Cell: (row) => (
                  <div>
                    <Link
                      href={{
                        pathname: "/socios/ventaplan/imprimirnovell",
                        query: {
                          id: row.original.idnovell,
                        },
                      }}
                    >
                      <button
                        className="btn btn-primary btn-sm mr-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Imprimir Caratula"
                      >
                        <i className="fa fa-print" aria-hidden="true"></i>
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
  );
};

export default ListadoNovell;
