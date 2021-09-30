import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";

const ListadoDatos = ({ listado }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              <strong>
                <u>Listado de Datos Cargados</u>
              </strong>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {!listado ? (
              <Spinner />
            ) : listado.length === 0 ? (
              <div className="container mt-4 alert alert-info border border-dark text-center text-uppercase">
                No se registraron datos
              </div>
            ) : (
              <div className="container mt-4 border border-dark p-4 alert alert-primary">
                <div className="list">
                  <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      row[filter.id] === filter.value
                    }
                    columns={[
                      {
                        Header: "Datos",
                        columns: [
                          {
                            Header: "Apellido",
                            id: "apellido",
                            accessor: (d) => d.apellido,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["apellido"],
                              }),
                            filterAll: true,
                          },
                          {
                            Header: "Nombre",
                            id: "nombre",
                            accessor: (d) => d.nombre,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["nombre"],
                              }),
                            filterAll: true,
                          },
                          {
                            Header: "DNI",
                            id: "dni",
                            accessor: (d) => d.dni,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["dni"],
                              }),
                            filterAll: true,
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
                          },
                          {
                            Header: "Motivo",
                            id: "motivo",
                            accessor: (d) => d.motivo,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["motivo"],
                              }),
                            filterAll: true,
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
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoDatos;
