import React from "react";
import matchSorter from "match-sorter";
import moment from "moment";

// Import React Table
import ReactTable from "react-table";
import Spinner from "../../layout/Spinner";

const ListadoCumpleanos = ({ data, fecha }) => {
  if (!data) return <Spinner />;

  return (
    <div className="mt-4 container p-4 border border-dark list">
      <h5 className=" mb-4">
        <strong>
          <u>Socios que cumplen años el {moment(fecha).format('DD/MM/YYYY')}</u>: {data.length}
        </strong>
      </h5>
      <div className="border border-dark mt-4 list">
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado Cumpleañeros",
              columns: [
                {
                  Header: "Contrato",
                  id: "CONTRATO",
                  accessor: (d) => d.CONTRATO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                  filterAll: true,
                  Cell: (row) => (
                    <div>
                      <a href="#" className="text-reset">
                        {row.original.CONTRATO}
                      </a>
                    </div>
                  ),
                },

                {
                  Header: "Apellido",
                  id: "APELLIDOS",
                  accessor: (d) => d.APELLIDOS,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["APELLIDOS"],
                    }),
                  filterAll: true,
                },
                {
                  Header: "Nombre",
                  id: "NOMBRES",
                  accessor: (d) => d.NOMBRES,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["NOMBRES"] }),
                  filterAll: true,
                  width: 150,
                },
                {
                  Header: "Fecha Nac",
                  id: "NACIMIENTO",
                  accessor: (d) => d.NACIMIENTO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["NACIMIENTO"],
                    }),
                  filterAll: true,
                },
                {
                  Header: "Edad",
                  id: "EDAD",
                  accessor: (d) => d.EDAD,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["EDAD"] }),
                  filterAll: true,
                  width: 70,
                },
                {
                  Header: "Antiguedad",
                  id: "ANTI",
                  accessor: (d) => d.ANTI,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ANTI"] }),
                  filterAll: true,
                  width: 90,
                },

                {
                  Header: "Grupo",
                  id: "GRUPO",
                  accessor: (d) => d.GRUPO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["GRUPO"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Descrip",
                  id: "DESCRIP",
                  accessor: (d) => d.DESCRIP,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["DESCRIP"] }),
                  filterAll: true,
                },

                {
                  Header: "Telefono",
                  id: "TELEFONO",
                  accessor: (d) => d.TELEFONO,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["TELEFONO"] }),
                  filterAll: true,
                },

                {
                  Header: "Celular",
                  id: "MOVIL",
                  accessor: (d) => d.MOVIL,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["MOVIL"] }),
                  filterAll: true,
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

export default ListadoCumpleanos;
