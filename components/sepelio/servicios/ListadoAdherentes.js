import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import Link from "next/link";

const ListadoAdherentes = ({ listado, selAdh }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <h2 className="mb-4 col-md-6">
        <strong>
          <u>Listado De Adherentes</u>
        </strong>
      </h2>

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
                  Header: "Apellido",
                  id: "APELLIDOS",
                  accessor: (d) => d.APELLIDOS,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                  filterAll: true,
                },
                {
                  Header: "Nombre",
                  id: "NOMBRES",
                  accessor: (d) => d.NOMBRES,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NOMBRES"] }),
                  filterAll: true,
                },
                {
                  Header: "DNI",
                  id: "NRO_DOC",
                  accessor: (d) => d.NRO_DOC,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                  filterAll: true,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      {row.original.BAJA === null ? (
                        <button
                          className="btn btn-sm btn-primary mr-1"
                          title="Seleccionar"
                          onClick={() => selAdh(row)}
                          data-dismiss="modal"
                        >
                          Seleccionar
                        </button>
                      ) : (
                        <div>DE BAJA</div>
                      )}
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

export default ListadoAdherentes;
