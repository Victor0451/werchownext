import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner"

import moment from "moment";


const ListadoServicios = ({ listado, traerGastos, datatoggle, datatarget }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <h2>
        <strong>
          <u>Costos totales por servicio</u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-2">

        <h4 className=" mb-4">
          <strong>
            <u>Servicios Aptos para generar informe:</u> {listado.length}
          </strong>
        </h4>
        <div className="list mt-4 border border-dark ">
          <ReactTable
            data={listado}
            filterable
            defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
            columns={[
              {
                Header: "Listado De Servicios",
                columns: [
                  {
                    Header: "#",
                    id: "#",
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
                    Header: "Causa de Muerte",
                    id: "motivo",
                    accessor: (d) => d.motivo,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["motivo"],
                      }),
                    filterAll: true,
                    width: 200,
                  },
                  {
                    Header: "Servicio",
                    id: "tipo_servicio",
                    accessor: (d) => d.tipo_servicio,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["tipo_servicio"],
                      }),
                    filterAll: true,
                    width: 100,
                  },

                  {
                    Header: "Fallecimiento",
                    id: "fecha_fallecimiento",
                    accessor: (d) => d.fecha_fallecimiento,
                    filterMethod: (filter, rows) =>
                      matchSorter(rows, filter.value, {
                        keys: ["fecha_fallecimiento"],
                      }),
                    filterAll: true,
                    width: 105,
                  },
                  {
                    Header: "Sin Aprobar",
                    id: "Sin Aprobar",
                    filterAll: true,
                    Cell: (row) => (
                      <>
                        {row.original.gastos_cargados === 0 ?
                          (<div className="alert alert-success alert-sm text-center">
                            {row.original.gastos_cargados}
                          </div>) : (
                            <div className="alert alert-danger text-center">
                              {row.original.gastos_cargados}
                            </div>
                          )}

                      </>
                    ),
                  },
                  {
                    Header: "Acciones",
                    id: "Acciones",
                    filterAll: true,
                    Cell: (row) => (
                      <div>

                        <button
                          className="btn btn-sm btn-info btn-sm mr-1"
                          data-placement="top"
                          title="Ver Costo"
                          data-toggle={datatoggle}
                          data-target={datatarget}
                          onClick={() =>
                            traerGastos(row)
                          }
                        >
                          <i className="fa fa-eye" aria-hidden="true"> Ver Costo </i>
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
    </div>
  );
};

export default ListadoServicios;
