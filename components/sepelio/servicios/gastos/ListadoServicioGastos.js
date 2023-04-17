import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";
import Link from "next/link";
import moment from "moment";


const ListadoServicioGastos = ({
  listado,
  datatoggle,
  datatarget,
  getRow,
  eliminarGasto
}) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark list mt-4 p-4">
      <div className="border border-dark p-4">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Servicios",
              columns: [
                {
                  Header: "Inicio",
                  id: "inicio",
                  accessor: (d) => moment(d.inicio).utcOffset("+000").locale('es').format('llll'),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["inicio"] }),
                  filterAll: true,

                },
                {
                  Header: "Fin",
                  id: "fin",
                  accessor: (d) => moment(d.fin).utcOffset("+000").locale('es').format('llll'),
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["fin"] }),
                  filterAll: true,

                },
                {
                  Header: "Gasto",
                  id: "tipo_gasto",
                  accessor: (d) => d.tipo_gasto,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["tipo_gasto"],
                    }),
                  filterAll: true,
                  width: 150,
                },
                // {
                //   Header: "Importe",
                //   id: "importe",
                //   accessor: (d) => d.importe,
                //   filterMethod: (filter, rows) =>
                //     matchSorter(rows, filter.value, {
                //       keys: ["importe"],
                //     }),
                //   filterAll: true,
                //   width: 100,
                // },

                {
                  Header: "Observacion",
                  id: "observaciones",
                  accessor: (d) => d.observaciones,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["observaciones"],
                    }),
                  filterAll: true,
                  width: 300,
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
                  width: 100,
                },

                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>

                      <button
                        className="btn btn-sm btn-warning border mr-1"
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
                      </button>
                    </div>
                  ),
                },
              ],
            },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </div>


    </div>
  );
};

export default ListadoServicioGastos;
