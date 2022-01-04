import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import axios from "axios";

// Import React Table
import ReactTable from "react-table";
import FromActualizarStock from "./FromActualizarStock";
import { ip } from "../../../config/config";
import HistorialActualizaciones from "./HistorialActualizaciones";

const StockAgotado = ({
  nuevoStockRef,
  observacionRef,
  updateStock,
  idataudRef,
  stockFinal,
  sf,
  nRemitoRef,
  fechaRec,
  traerHistorial,
  historial,
}) => {
  const [ataudes, guardarAtaudes] = useState(null);
  const [ataud, guardarAtaud] = useState(null);

  const mostrarAtaudes = async () => {
    await axios
      .get(`${ip}api/sepelio/ataudes/stockagotado`)
      .then((res) => {
        let ataudes = res.data;
        guardarAtaudes(ataudes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selcaso = (row) => {
    if (ataud) {
      guardarAtaud(null);
    } else {
      guardarAtaud(row.original);
    }
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
  return (
    <div className="container mt-4 border border-dark list">
      <h4 className="mt-4 mb-4">
        <strong>
          <u>Stock de Ataudes Agotados</u>
        </strong>
      </h4>
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
                  Header: "Ataud",
                  id: "nombre",
                  accessor: (d) => d.nombre,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre"] }),
                  filterAll: true,
                  width: 350,
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
                    <>
                      <button
                        type="button"
                        className="btn btn-info btn-sm mr-1"
                        data-toggle="tooltip"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-placement="top"
                        title="Actualizar Stock"
                        onClick={() => selcaso(row)}
                      >
                        <i
                          className="fa fa-pencil-square"
                          aria-hidden="true"
                        ></i>{" "}
                      </button>
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
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Actualizar Stock
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
                En esta parte solo puedes actualizar el stock y agregar una
                observacion si es necesario. Ahora solo debes digitrar el numero
                de stock ingresante y el stock final se calculara
                automaticamente.
              </div>

              <FromActualizarStock
                ataud={ataud}
                nuevoStockRef={nuevoStockRef}
                observacionRef={observacionRef}
                updateStock={updateStock}
                idataudRef={idataudRef}
                stockFinal={stockFinal}
                sf={sf}
                nRemitoRef={nRemitoRef}
                fechaRec={fechaRec}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateStock}
                data-dismiss="modal"
              >
                Actualizar Stock
              </button>
            </div>
          </div>
        </div>
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

export default StockAgotado;
