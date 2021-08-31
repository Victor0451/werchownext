import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import axios from "axios";
import { ip } from "../../../config/config";
import HistorialActualizaciones from "./HistorialActualizaciones";

// Import React Table
import ReactTable from "react-table";

const Stock = ({ selcaso, selcasofrm, fl, traerHistorial, historial }) => {
  const [ataudes, guardarAtaudes] = useState(null);

  const mostrarAtaudes = async () => {
    await axios
      .get(`${ip}api/sepelio/ataudes/cantidad`, {
        params: {
          flag: fl,
        },
      })
      .then((res) => {
        let ataudes = res.data;
        guardarAtaudes(ataudes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    mostrarAtaudes();
  }, []);

  if (!ataudes)
    return (
      <div className="container mt-4 alert alert-danger p-4 border border-dark">
        No Hay Stock De Ataudes
      </div>
    );

  const calcularTotal = (arr) => {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += arr[i].stock;
    }
    return total;
  };

  return (
    <div className="container mt-4 border border-dark alert alert-primary">
      <div className="row">
        <div className="col-md-8">
          <h3 className="mt-4 mb-4">
            <strong>
              <u>Stock de Ataudes</u>{" "}
              {fl === 1 ? (
                <>- Cantidad Actual {calcularTotal(ataudes)} Ataudes</>
              ) : null}
            </strong>
          </h3>
        </div>
        <div className="col-md-2">
          <a
            className="mt-4 btn btn-sm btn-info "
            href="/sepelio/ataudes/nuevo"
          >
            Ingresar Nuevo Ataud
          </a>
        </div>
        <div className="col-md-2">
          <a
            className="mt-4 btn btn-sm btn-warning text-dark"
            href="/sepelio/ataudes/actualizarstock"
          >
            Actualizar Stock
          </a>
        </div>
      </div>

      <div className=" mt-4 border border-dark list">
        <ReactTable
          data={ataudes}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "STOCK DE ATAUDES",
              columns: [
                {
                  Header: "Codigo",
                  id: "codigo",
                  accessor: (d) => d.codigo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["codigo"] }),
                  filterAll: true,
                  width: 90,
                },
                {
                  Header: "Ataud",
                  id: "nombre",
                  accessor: (d) => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                  width: 300,
                },
                {
                  Header: "Tipo",
                  id: "tipo",
                  accessor: (d) => d.tipo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["tipo"] }),
                  filterAll: true,
                  width: 90,
                },
                {
                  Header: "Medidas",
                  id: "medidas",
                  accessor: (d) => d.medidas,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["medidas"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Uso",
                  id: "uso",
                  accessor: (d) => d.uso,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["uso"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Fabricante",
                  id: "fabricante",
                  accessor: (d) => d.fabricante,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fabricante"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Stock",
                  id: "stock",
                  accessor: (d) => d.stock,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["stock"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Estado",
                  id: "estado",
                  accessor: (d) => d.estado,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["estado"] }),
                  filterAll: true,
                  width: 100,
                  Cell: (row) => (
                    <div>
                      {row.original.estado === 1 ? (
                        <div>Activo</div>
                      ) : row.original.estado === 0 ? (
                        <div>De Baja</div>
                      ) : null}
                    </div>
                  ),
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      {selcasofrm ? (
                        <button
                          type="button"
                          className="btn btn-primary btn-sm mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Actualizar Stock"
                          onClick={() => selcasofrm(row)}
                          data-dismiss="modal"
                        >
                          <i
                            className="fa fa-pencil-square"
                            aria-hidden="true"
                          ></i>
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn btn-warning btn-sm mr-1"
                            data-toggle="tooltip"
                            data-toggle="modal"
                            data-target="#historial"
                            data-placement="top"
                            title="Historial"
                            onClick={() => traerHistorial(row.original.idataud)}
                          >
                            <i className="fa fa-history" aria-hidden="true"></i>
                          </button>
                        </>
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
      <div
        className="modal fade"
        id="historial"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Historial
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
              <div className="border border-dark alert alert-info p-2 text-center text-uppercase">
                Este es el historial de actualizaciones en el stock del ataud
                seleccionado
              </div>

              <HistorialActualizaciones historial={historial} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
