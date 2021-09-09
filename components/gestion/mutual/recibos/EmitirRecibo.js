import React from "react";
import Spinner from "../../../layout/Spinner";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import FormGenerarPago from "./FormGenerarPago";

const EmitirRecibo = ({
  ficha,
  pagos,
  nupagos,
  mesRef,
  anoRef,
  importeRef,
  preCargarPago,
  eliminarPagoPrecargado,
  totalPagosPrecargados,
  cuofija,
  registrarPago,
}) => {
  if (!ficha) return <Spinner />;

  return (
    <div className="container mt-4 border border-dark p-4 alert alert-primary">
      <div className="row">
        <div className="col-md-8">
          <h4>
            <strong>
              <u>Emitir Recibo Afiliado</u>: {ficha.CONTRATO} -{" "}
              {ficha.APELLIDOS}, {ficha.NOMBRES}
            </strong>
          </h4>
        </div>
        <div className="col-md-4">
          <a
            className="btn btn-block btn-danger"
            href="/gestion/mutual/cobranza/emisionrecibo"
          >
            Cancelar
          </a>
        </div>
      </div>
      <div className="border border-dark mt-4 p-4">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-4 text-center">
              <strong>
                <u>Historial de Pagos</u>
              </strong>
            </h4>

            {pagos ? (
              <div className="list">
                <ReactTable
                  data={pagos}
                  filterable
                  defaultFilterMethod={(filter, row) =>
                    row[filter.id] === filter.value
                  }
                  columns={[
                    {
                      Header: "Pagos",
                      columns: [
                        {
                          Header: "Mes",
                          id: "MES",
                          accessor: (d) => d.MES,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["MES"],
                            }),
                          filterAll: true,
                          width: 50,
                        },
                        {
                          Header: "Año",
                          id: "ANO",
                          accessor: (d) => d.ANO,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["ANO"],
                            }),
                          filterAll: true,
                        },
                        {
                          Header: "Importe",
                          id: "IMPORTE",
                          accessor: (d) => d.IMPORTE,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["IMPORTE"],
                            }),
                          filterAll: true,
                          width: 80,
                        },
                        {
                          Header: "Serie",
                          id: "SERIE",
                          accessor: (d) => d.SERIE,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["SERIE"],
                            }),
                          filterAll: true,
                          width: 50,
                        },
                        {
                          Header: "Recibo",
                          id: "NRO_RECIBO",
                          accessor: (d) => d.NRO_RECIBO,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["NRO_RECIBO"],
                            }),
                          filterAll: true,
                        },
                        {
                          Header: "Fecha",
                          id: "DIA_PAG",
                          accessor: (d) => d.DIA_PAG,
                          filterMethod: (filter, rows) =>
                            matchSorter(rows, filter.value, {
                              keys: ["DIA_PAG"],
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
            ) : null}
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <button
                className="btn btn-primary btn-block btn-sm"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Generar Pago
              </button>
            </div>

            <div className="list">
              <ReactTable
                data={nupagos}
                filterable
                defaultFilterMethod={(filter, row) =>
                  row[filter.id] === filter.value
                }
                columns={[
                  {
                    Header: "Pagos",
                    columns: [
                      {
                        Header: "Mes",
                        id: "MES",
                        accessor: (d) => d.MES,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["MES"],
                          }),
                        filterAll: true,
                        width: 50,
                      },
                      {
                        Header: "Año",
                        id: "ANO",
                        accessor: (d) => d.ANO,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["ANO"],
                          }),
                        filterAll: true,
                      },
                      {
                        Header: "Importe",
                        id: "IMPORTE",
                        accessor: (d) => d.IMPORTE,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["IMPORTE"],
                          }),
                        filterAll: true,
                        width: 80,
                      },
                      {
                        Header: "Fecha",
                        id: "FECHA",
                        accessor: (d) => d.FECHA,
                        filterMethod: (filter, rows) =>
                          matchSorter(rows, filter.value, {
                            keys: ["FECHA"],
                          }),
                        filterAll: true,
                      },
                      {
                        Header: "Acciones",
                        id: "acciones",
                        filterAll: true,
                        width: 100,
                        Cell: (row) => (
                          <div>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => eliminarPagoPrecargado(row.index)}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </div>
                        ),
                      },
                    ],
                  },
                ]}
                defaultPageSize={5}
                className="-striped -highlight"
              />
            </div>
            <div className="col-md-12">
              <div className="mt-4 alert alert-info border border-dark text-center text-uppercase">
                Total a Pagar: $ {totalPagosPrecargados(nupagos)}
              </div>

              <div className="col-md-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={registrarPago}
                >
                  Registrar Pagos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL GENERAR PAGO */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content border border-dark ">
            <div className="modal-header alert alert-primary">
              <h4 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Generar Pago</u>
                </strong>
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <FormGenerarPago
                mesRef={mesRef}
                anoRef={anoRef}
                importeRef={importeRef}
                preCargarPago={preCargarPago}
                cuofija={cuofija}
              />
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
    </div>
  );
};

export default EmitirRecibo;