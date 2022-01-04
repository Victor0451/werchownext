import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";


const ListadoCajaGastos = ({
  gastos,
  dataToggle,
  dataTarget,
  dataToggle1,
  dataTarget1,
  caja,
  acGast,
  totCaja,
  regGasto,
  cerrarCaja,
  eliminarGastos,
}) => {
  return (
    <div className="container mt-4 border border-dark list">
      {caja.estado === 1 ? (
        <div className="mt-4  alert alert-success col-md-12 d-flex justify-content-between border border-dark p-2">
          <div className="col-md-5 mt-2">
            <strong>CAJA ABIERTA</strong>
          </div>
          <div className="col-md-5">
            <button className="btn btn-success btn-block" onClick={cerrarCaja}>
              {" "}
              Cerrar Caja
            </button>
          </div>
        </div>
      ) : caja.estado === 0 ? (
        <div className="mt-4  alert alert-success text-center">
          <strong>CAJA CERRADA</strong>
        </div>
      ) : null}

      <div className="row  border border-dark p-2">
        <div className="col-md-12">
          <h3 className="mt-4 mb-4">
            <strong>
              <u>Detalle de Gastos</u>
            </strong>{" "}
          </h3>
        </div>
        <div className="col-md-6">
          <h3 className="mt-4 mb-4 alert alert-info">
            <strong>
              <u>Monto Habilitado</u>: $ {caja.monto}
            </strong>{" "}
          </h3>
        </div>
        <div className="col-md-6">
          {!acGast ? (
            <h3 className="mt-4 mb-4 alert alert-warning">
              <strong>
                <u>Gastos</u>: $ 0
              </strong>{" "}
            </h3>
          ) : (
            <h3 className="mt-4 mb-4 alert alert-warning">
              <strong>
                <u>Gastos</u>: $ {acGast}
              </strong>{" "}
            </h3>
          )}
        </div>
        <div className="col-md-12 text-center">
          {!totCaja ? (
            <h3 className="mt-4 mb-4 alert alert-success">
              <strong>
                <u>Saldo Restante</u>: $ {caja.totalcaja}
              </strong>{" "}
            </h3>
          ) : totCaja <= 500 ? (
            <h3 className="mt-4 mb-4 alert alert-danger">
              <strong>
                <u>Saldo Restante</u>: $ {totCaja} - ATENCION!, el saldo
                disponible esta por terminarse.
              </strong>{" "}
            </h3>
          ) : (
            <h3 className="mt-4 mb-4 alert alert-success">
              <strong>
                <u>Saldo Restante</u>: $ {totCaja}
              </strong>{" "}
            </h3>
          )}
        </div>
      </div>

      <div className="row mt-4 border border-dark p-2">
        <div className="col-md-4">
          <h3 className="mt-4 mb-4">
            <strong>
              <u>Listado Gastos</u>
            </strong>
          </h3>
        </div>
        <div className="col-md-8 mt-4 d-flex justify-content-end">
          <div>
            <button
              type="button"
              className="btn btn-info btn-sm mr-1"
              data-toggle={dataToggle1}
              data-target={dataTarget1}
            >
              Ver Gastos Cargados
          </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-sm mr-1"
              data-toggle={dataToggle}
              data-target={dataTarget}
            >
              Generar Gasto
          </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-warning btn-sm mr-1"
              onClick={regGasto}
            >
              Guardar Gastos
          </button>
          </div>
          <div>
            <a className="btn btn-danger btn-sm mr-1" href="/sepelio/caja/listado">
              Cancelar
          </a>
          </div>

        </div>
      </div>

      <div className=" mt-4 border border-dark list">
        <ReactTable
          data={gastos}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado de Gastos",
              columns: [
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => moment(d.fecha).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true,
                  width: 150,
                },
                {
                  Header: "Empresa",
                  id: "empresa",
                  accessor: (d) => d.empresa,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["empresa"] }),
                  filterAll: true,
                  width: 150,
                },
                {
                  Header: "Concepto",
                  id: "concepto",
                  accessor: (d) => d.concepto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["concepto"] }),
                  filterAll: true,
                  width: 200,
                },

                {
                  Header: "Pto Venta",
                  id: "ptoventa",
                  accessor: (d) => d.ptoventa,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ptoventa"] }),
                  filterAll: true,
                  width: 80,
                },

                {
                  Header: "N° Factura",
                  id: "nfactura",
                  accessor: (d) => d.nfactura,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nfactura"] }),
                  filterAll: true,
                },

                {
                  Header: "Total",
                  id: "total",
                  accessor: (d) => d.total,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["total"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Operador",
                  id: "operadortramite",
                  accessor: (d) => d.operadortramite,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["operadortramite"],
                    }),
                  filterAll: true,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <>
                      <button
                        className="btn btn-danger btn-sm mr-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Eliminar Gastos"
                        onClick={() => eliminarGastos(row.index)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
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
    </div>
  );
};

export default ListadoCajaGastos;
