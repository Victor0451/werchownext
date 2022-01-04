import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import Spinner from "../../layout/Spinner";
import ReactTable from "react-table";

const ListadoVentasSinServicio = ({ listado, eliminarVentaSinServ }) => {
  if (!listado) return <Spinner />;
  return (
    <div className="mt-4 container borde border-dark list p-4">
      <div className="row">
        <div className="col-md-6">
          <h2>
            <strong>
              <u>Listado de Ventas</u>
            </strong>
          </h2>
        </div>

        <div className="col-md-6">
          <a
            className="btn btn-info btn-block btn-sm"
            href="/sepelio/ataudes/ventasinservicio"
          >
            Realizar una venta
          </a>
        </div>
      </div>

      <div className="mt-4 border border-dark list p-4">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "LISTADO DE VENTAS",
              columns: [
                {
                  Header: "Ataud",
                  id: "ataud",
                  accessor: (d) => d.ataud,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["ataud"] }),
                  filterAll: true,
                  width: 350,
                },
                {
                  Header: "Apellido Fallecido",
                  id: "apellido_fall",
                  accessor: (d) => d.apellido_fall,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["apellido_fall"],
                    }),
                  filterAll: true,
                  width: 100,
                },
                {
                  Header: "Nombre Fallecido",
                  id: "nombre_fall",
                  accessor: (d) => d.nombre_fall,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre_fall"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "DNI Fallecido",
                  id: "dni_fall",
                  accessor: (d) => d.dni_fall,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni_fall"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Apellido Solicitante",
                  id: "apellido_sol",
                  accessor: (d) => d.apellido_sol,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["apellido_sol"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Nombre Solicitante",
                  id: "nombre_sol",
                  accessor: (d) => d.nombre_sol,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["nombre_sol"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "DNI Solicitante",
                  id: "dni_sol",
                  accessor: (d) => d.dni_sol,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["dni_sol"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => d.fecha,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Operador",
                  id: "operador",
                  accessor: (d) => d.operador,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["operador"] }),
                  filterAll: true,
                  width: 100,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mr-1"
                        data-toggle="tooltip modal"
                        data-placement="top"
                        title="Dar de Baja"
                        onClick={() => eliminarVentaSinServ(row.original)}
                      >
                        <i className="fa fa-times" aria-hidden="true"></i>
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

export default ListadoVentasSinServicio;
