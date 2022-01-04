import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const ListadoVisitantes = ({
  listado,
  datatarget,
  datatoggle,
  eliminarVisitante,
}) => {
  if (listado.length === 0)
    return (
      <div className="container list alert alert-info border border-dark mt-4 text-center text-uppercase">
        --- Este Servicio no posee visitantes registrados --- {""}
        <button
          className="btn btn-primary btn-sm"
          data-toggle={datatoggle}
          data-target={datatarget}
        >
          Cargar Visitante
        </button>
      </div>
    );

  return (
    <div className="container mt-4 border border-dark ">
      <div className="row">
        <div className="col-md-10">
          <h2 className="mt-4">
            <u>Listado de visitantes cargados</u>
          </h2>
        </div>
        <div className="col-md-2">
          <button
            className="mt-4 btn btn-info btn-sm"
            data-toggle={datatoggle}
            data-target={datatarget}
          >
            Cargar Visitante
          </button>
        </div>
      </div>

      <div className="mt-4 list border border-dark ">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Visitantes",
              columns: [
                {
                  Header: "#",
                  filterAll: false,
                  width: 20,
                  Cell: (row) => <div>{row.index + 1}</div>,
                },
                {
                  Header: "Apellido",
                  id: "apellido",
                  accessor: (d) => d.apellido,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido"] }),
                  filterAll: true,
                  width: 110,
                },
                {
                  Header: "Nombre",
                  id: "nombre",
                  accessor: (d) => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "DNI",
                  id: "dni",
                  accessor: (d) => d.dni,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni"] }),
                  filterAll: true,
                  width: 85,
                },
                {
                  Header: "Telefono",
                  id: "telefono",
                  accessor: (d) => d.telefono,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["telefono"],
                    }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Parentezco",
                  id: "parentezco",
                  accessor: (d) => d.parentezco,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["parentezco"],
                    }),
                  filterAll: true,
                  width: 150,
                },

                {
                  Header: "Temperatura",
                  id: "temperatura",
                  accessor: (d) => d.temperatura,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["temperatura"],
                    }),
                  filterAll: true,
                  width: 105,
                },

                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => d.fecha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha"],
                    }),
                  filterAll: true,
                  width: 105,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <button
                        className="btn btn-danger btn-sm "
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Eliminar Visitante"
                        onClick={() =>
                          eliminarVisitante(row.original.idvisitante)
                        }
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
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

export default ListadoVisitantes;
