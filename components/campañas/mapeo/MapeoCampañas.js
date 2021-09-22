import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const MapeoCampañas = ({ casos, getTrProps, traerAccionesReg }) => {
  return (
    <div className="container mt-4 border border-dark alert alert-primary">
      <h2 className="mb-4">
        <strong>
          <u>Casos Asignados</u>: {casos.length}
        </strong>
      </h2>

      <div className="list border border-dark">
        <ReactTable
          getTrProps={getTrProps}
          data={casos}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Cartera",
              columns: [
                {
                  Header: "Contrato",
                  id: "contrato",
                  accessor: (d) => d.contrato,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["contrato"] }),
                  filterAll: true,
                  width: 80,
                },
                {
                  Header: "Apellido",
                  id: "apellido",
                  accessor: (d) => d.apellido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido"] }),
                  filterAll: true,
                },
                {
                  Header: "Nombre",
                  id: "nombre",
                  accessor: (d) => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                },

                {
                  Header: "Calle",
                  id: "calle",
                  accessor: (d) => d.calle,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["calle"] }),
                  filterAll: true,
                },
                {
                  Header: "N°",
                  id: "nro_calle",
                  accessor: (d) => d.nro_calle,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nro_calle"] }),
                  filterAll: true,
                  width: 50,
                },
                {
                  Header: "Barrio",
                  id: "barrio",
                  accessor: (d) => d.barrio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["barrio"] }),
                  filterAll: true,
                },
                {
                  Header: "Localidad",
                  id: "localidad",
                  accessor: (d) => d.localidad,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["localidad"] }),
                  filterAll: true,
                },
                {
                  Header: "Cuota",
                  id: "cuota",
                  accessor: (d) => d.cuota,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["cuota"] }),
                  filterAll: true,
                  width: 60,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      {row.original.accion === null ? (
                        <div>No se reg. acciones</div>
                      ) : (
                        <button
                          className="btn btn-sm btn-primary"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => traerAccionesReg(row.original.idcaso)}
                        >
                          Ver Acciones
                        </button>
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

export default MapeoCampañas;
