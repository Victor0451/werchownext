import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import Link from "next/link";
import Spinner from "../../layout/Spinner";

const ListadoCajaGastos = ({
  gastos,
  dataToggle,
  dataTarget,
  caja,
  acGast,
  totCaja,
  regGasto,
  eliminarGastos,
}) => {
  console.log(gastos);

  return (
    <div className="container mt-4 border border-dark alert alert-primary">
      {/* //   {gastos.map((mapa, index) => (
    //     <div>{index}</div>
    //   ))} */}

      {caja.estado === 1 ? (
        <div className="mt-4  alert alert-success col-md-12 d-flex justify-content-between border border-dark p-2">
          <div className="col-md-5 mt-2">
            <strong>CAJA ABIERTA</strong>
          </div>
          <div className="col-md-5">
            <button className="btn btn-success btn-block" onClick={regGasto}>
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

      <div className="row mt-4">
        <div className="col-md-6">
          <h3 className="mt-4 mb-4">
            <strong>
              <u>Listado Gastos</u>
            </strong>
          </h3>
        </div>
        <div className="col-md-6 mt-3 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            data-toggle={dataToggle}
            data-target={dataTarget}
          >
            Registrar Gasto
          </button>
        </div>
      </div>

      <div className=" mt-4 border border-dark list">
        <ReactTable
          data={gastos}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado de Cajas",
              columns: [
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => moment(d.fecha).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true,
                  width: 200,
                },
                {
                  Header: "Empresa",
                  id: "empresa",
                  accessor: (d) => d.empresa,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["empresa"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Concepto",
                  id: "concepto",
                  accessor: (d) => d.concepto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["concepto"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Tipo Factura",
                  id: "tipofactura",
                  accessor: (d) => d.tipofactura,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["tipofactura"] }),
                  filterAll: true,
                },

                {
                  Header: "Medio de Pago",
                  id: "mediopago",
                  accessor: (d) => d.mediopago,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mediopago"] }),
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
                        <i
                          className="fa fa-pencil-square"
                          aria-hidden="true"
                        ></i>{" "}
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
