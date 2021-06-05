import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";

const Adherentes = ({ adhs }) => {
  if (!adhs)
    return (
      <div className="alert alert-danger text-center text-uppercase">
        El socio no posee adherentes
      </div>
    );

  return (
    <div className="container mt-4 border border-dark alert alert-primary">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>Adherentes</u>
        </strong>
      </h2>
      <div className="border border-dark p-2 list">
        <ReactTable
          data={adhs}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Padron",
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
                  Header: "Nacimiento",
                  id: "NACIMIENTO",
                  accessor: (d) => moment(d.NACIMIENTO).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NACIMIENTO"] }),
                  filterAll: true,
                },
                {
                  Header: "Alta",
                  id: "ALTA",
                  accessor: (d) => moment(d.ALTA).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ALTA"] }),
                  filterAll: true,
                },
                {
                  Header: "Estado",

                  Cell: (row) => (
                    <div>
                      {row.original.EDAD === 999 && row.original.BAJA ? (
                        <div>
                          FALLECIDO -{" "}
                          {moment(row.original.BAJA).format("DD/MM/YYYY")}
                        </div>
                      ) : row.original.EDAD !== 999 && row.original.BAJA ? (
                        <div>
                          BAJA -{" "}
                          {moment(row.original.BAJA).format("DD/MM/YYYY")}
                        </div>
                      ) : !row.original.BAJA ? (
                        <div>ACTIVO</div>
                      ) : null}
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

export default Adherentes;
