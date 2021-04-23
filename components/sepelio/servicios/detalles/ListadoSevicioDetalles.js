import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import Link from "next/link";
import moment from "moment";


const ListadoServicioDetalles = ({
  listado,
  datatoggle,
  datatarget,
  getRow,
  eliminarGasto
}) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <div className="list border border-dark ">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Servicios",
              columns: [
                {
                  Header: "Detalle",
                  id: "detalle",
                  accessor: (d) => d.detalle,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["detalle"] }),
                  filterAll: true,
                  width: 180
                },

                {
                  Header: "Lugar",
                  id: "lugar",
                  accessor: (d) => d.lugar,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["lugar"],
                    }),
                  filterAll: true,

                },
                {
                  Header: "Monto",
                  id: "monto",
                  accessor: (d) => d.monto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["monto"],
                    }),
                  filterAll: true,
                  width: 80
                },
                {
                  Header: "Auto",
                  id: "patente",
                  accessor: (d) => d.patente,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["patente"],
                    }),
                  filterAll: true,

                },
                {
                  Header: "Fecha",
                  id: "fecha",
                  accessor: (d) => moment(d.fecha).utcOffset("+000").locale('es').format('llll'),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fecha"] }),
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
                {
                  Header: "Observacion",
                  id: "observacion",
                  accessor: (d) => d.observacion,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["observacion"],
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

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      EN PROCESO

                      {/* <button
                        className="btn btn-sm btn-warning border mr-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-toggle={datatoggle}
                        data-target={datatarget}
                        title="Editar Gasto"
                        onClick={() => getRow(row.original)}
                      >
                        <i
                          className="fa fa-pencil-square-o"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger mr-1"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Eliminar Gasto"
                        onClick={() => eliminarGasto(row.original.idgastos)}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button> */}
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

export default ListadoServicioDetalles;
