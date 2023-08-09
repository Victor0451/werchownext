import React, { useState, useEffect } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Link from "next/link";
import moment from "moment";
import ModalHistorial from "./ModalHistorial";

const Stock = ({ parcelas, historialParcelas, historial }) => {
  if (!parcelas)
    return (
      <div className="container mt-4 alert alert-danger p-4 border border-dark">
        No Hay Stock De Parcelas
      </div>
    );

  return (
    <div className="container border border-dark list mt-4 p-4">
      <div className="row mt-4 mb-4 border border-dark p-4">
        <div className="col-md-8">
          <h4 className="">
            <strong>
              <u>Total de parcelas Disponibles:</u> {parcelas.length}
            </strong>
          </h4>
        </div>

        <div className="col-md-4">
          <a
            href="/sepelio/parcelas/nuevo"
            className="btn btn-info btn-block btn-sm"
          >
            Nueva Parcela
          </a>
        </div>
      </div>

      <div className="list border border-dark ">
        <ReactTable
          data={parcelas}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Parcelas",
              columns: [
                {
                  Header: "#",
                  filterAll: false,
                  width: 50,
                  Cell: (row) => <div>{row.index}</div>,
                },
                {
                  Header: "Cementerio",
                  id: "cementerio",
                  accessor: (d) => d.cementerio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["cementerio"] }),
                  filterAll: true,
                },
                {
                  Header: "Parcela",
                  id: "parcela",
                  accessor: (d) => d.parcela,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["parcela"] }),
                  filterAll: true,
                  width: 80,
                },
                {
                  Header: "Manzana",
                  id: "mza",
                  accessor: (d) => d.mza,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["mza"] }),
                  filterAll: true,
                  width: 80,
                },
                {
                  Header: "Lote",
                  id: "lote",
                  accessor: (d) => d.lote,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["lote"] }),
                  filterAll: true,
                  width: 80,
                },
                {
                  Header: "Asignada",
                  width: 80,
                  Cell: (row) => (
                    <>
                      {row.original.asignada == 1 ? (
                        <div>SI</div>
                      ) : row.original.asignada == 0 ? (
                        <div>NO</div>
                      ) : null}
                    </>
                  ),
                },
                {
                  Header: "Servicio",
                  id: "idservicio",
                  accessor: (d) => d.idservicio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["idservicio"] }),
                  filterAll: true,
                  width: 80,
                },
                {
                  Header: "DNI Extinto",
                  id: "dni_extinto",
                  accessor: (d) => d.dni_extinto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni_extinto"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Ficha",
                  id: "ficha",
                  accessor: (d) => d.ficha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ficha"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => moment(d.fecha).format("DD/MM/YYYY"),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Lugares",
                  id: "lugares",
                  accessor: (d) => d.lugares,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["lugares"] }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Acciones",
                  filterAll: false,
                  width: 80,
                  Cell: (row) => (
                    <div>
                      {" "}
                      <Link
                        href={{
                          pathname: "/sepelio/parcelas/asignarlugar",
                          query: {
                            idparcela: row.original.idparcela,
                          },
                        }}
                      >
                        <button className="btn btn-primary btn-sm">
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                      </Link>
                      <button
                        className="btn btn-warning btn-sm ml-1"
                        onClick={() =>
                          historialParcelas(row.original.idparcela)
                        }
                        data-toggle="modal"
                        data-target="#ModalHistorial"
                      >
                        <i className="fa fa-history" aria-hidden="true"></i>
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
      <ModalHistorial historial={historial} />
    </div>
  );
};

export default Stock;
