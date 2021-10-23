import React from "react";
import moment from "moment";
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const ModalAccionesReg = ({ acciones }) => {
  if (acciones && acciones.length === 0)
    return (
      // <div className="container alert alert-info border border-dark text-center text-uppercase">
      //   No se registran acciones
      // </div>
      null
    );

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Acciones Registradas
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
            <div className="list border border-dark">
              <ReactTable
                data={acciones}
                filterable
                defaultFilterMethod={(filter, row) =>
                  row[filter.id] === filter.value
                }
                columns={[
                  {
                    Header: "Acciones Registradas",
                    columns: [
                      {
                        Header: "Contrato",
                        id: "contrato",
                        accessor: (d) => d.contrato,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["contrato"],
                          }),
                        filterAll: true,
                        width: 80,
                      },

                      {
                        Header: "Accion",
                        id: "accion",
                        filterAll: true,
                        width: 300,
                        Cell: (row) => (
                          <div>
                            {row.original.accion < 7
                              ? "LLAMADA NO RESPONDIA"
                              : row.original.accion === 7
                              ? "COMPROMISO DE PAGO"
                              : row.original.accion === 8
                              ? "NO PAGA"
                              : row.original.accion === 9
                              ? "CUOTA AL DIA"
                              : row.original.accion === 10
                              ? "NOTIFICAR (ALEJANDRA)"
                              : row.original.accion === 11
                              ? "SE ENVIA COBRADOR"
                              : row.original.accion === 12
                              ? "PASA POR OFICINA"
                              : row.original.accion === 13
                              ? "CARTERA ROJA"
                              : row.original.accion === 14
                              ? "SOCIO FALLECIDO"
                              : row.original.accion === 14
                              ? "RECORDATORIO DE PAGO"
                              : row.original.accion === 15
                              ? "COMP. PAGO EFECTIVO"
                              : row.original.accion === 16
                              ? "DEBITO"
                              : row.original.accion === 17
                              ? "CREDITO"
                              : row.original.accion === 18
                              ? "COMP. PAGO NO EFECTIVO"
                              : row.original.accion === 19
                              ? "SOCIO FALLECIDO"
                              : null}
                          </div>
                        ),
                      },
                      {
                        Header: "Fecha",
                        id: "fechaaccion",
                        accessor: (d) =>
                          moment(d.fechaaccion).format("DD/MM/YYYY"),
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["fechaaccion"],
                          }),
                        filterAll: true,
                        width: 100,
                      },

                      {
                        Header: "Nueva Accion",
                        id: "nueva accion",
                        filterAll: true,
                        width: 300,
                        Cell: (row) => (
                          <div>
                            {row.original.nuevaaccion < 7
                              ? "LLAMADA NO RESPONDIA"
                              : row.original.nuevaaccion === 7
                              ? "COMPROMISO DE PAGO"
                              : row.original.nuevaaccion === 8
                              ? "NO PAGA"
                              : row.original.nuevaaccion === 9
                              ? "CUOTA AL DIA"
                              : row.original.nuevaaccion === 10
                              ? "NOTIFICAR (ALEJANDRA)"
                              : row.original.nuevaaccion === 11
                              ? "SE ENVIA COBRADOR"
                              : row.original.nuevaaccion === 12
                              ? "PASA POR OFICINA"
                              : row.original.nuevaaccion === 13
                              ? "CARTERA ROJA"
                              : row.original.nuevaaccion === 14
                              ? "SOCIO FALLECIDO"
                              : row.original.nuevaaccion === 14
                              ? "RECORDATORIO DE PAGO"
                              : row.original.nuevaaccion === 15
                              ? "COMP. PAGO EFECTIVO"
                              : row.original.nuevaaccion === 16
                              ? "DEBITO"
                              : row.original.nuevaaccion === 17
                              ? "CREDITO"
                              : row.original.nuevaaccion === 18
                              ? "COMP. PAGO NO EFECTIVO"
                              : row.original.nuevaaccion === 19
                              ? "SOCIO FALLECIDO"
                              : null}
                          </div>
                        ),
                      },
                      {
                        Header: "Fecha Nueva Accion",
                        id: "fechanuevaaccion",
                        accessor: (d) =>
                          moment(d.fechanuevaaccion).format("DD/MM/YYYY"),
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["fechanuevaaccion"],
                          }),
                        filterAll: true,
                        width: 100,
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

export default ModalAccionesReg;
