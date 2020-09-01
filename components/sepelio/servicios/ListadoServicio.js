import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import Link from "next/link";

const ListadoServicios = ({ listado }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <h2 className="mb-4">
        <strong>
          <u>Listado De Servicios</u>
        </strong>
      </h2>
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
                  Header: "ID",
                  id: "idservicio",
                  accessor: (d) => d.idservicio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["idservicio"] }),
                  filterAll: true,
                  width: 30,
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
                  Header: "Causa de Muerte",
                  id: "motivo",
                  accessor: (d) => d.motivo,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["motivo"],
                    }),
                  filterAll: true,
                  width: 250,
                },
                {
                  Header: "Tipo Servicio",
                  id: "tipo_servicio",
                  accessor: (d) => d.tipo_servicio,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["tipo_servicio"],
                    }),
                  filterAll: true,
                  width: 250,
                },

                // {
                //   Header: "Estado",
                //   id: "estado",
                //   accessor: (d) => d.estado,
                //   filterMethod: (filter, rows) =>
                //     matchSorter(rows, filter.value, { keys: ["estado"] }),
                //   filterAll: true,
                //   width: 100,
                //   Cell: (row) => (
                //     <div>
                //       {row.original.estado === 1 ? (
                //         <div>Aprobado</div>
                //       ) : row.original.estado === 0 ? (
                //         <div>Cancelado</div>
                //       ) : null}
                //     </div>
                //   ),
                // },
                {
                  Header: "Acciones",

                  Cell: (row) => (
                    <div>
                      <Link
                        href={{
                          pathname: "/sepelio/servicios/impresion",
                          query: {
                            id: row.original.dni,
                          },
                        }}
                      >
                        <button
                          className="btn btn-sm btn-primary mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Imprimir Solicitud"
                        >
                          <i className="fa fa-print" aria-hidden="true"></i>
                        </button>
                      </Link>

                      <Link
                        href={{
                          pathname: "/sepelio/servicios/editar",
                          query: {
                            id: row.original.dni,
                          },
                        }}
                      >
                        <button
                          className="btn btn-sm btn-secondary border mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Editar Servicio"
                        >
                          <i
                            class="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </Link>
                      <Link
                        href={{
                          pathname: "/prestamos/legajovirtual/legajo",
                          query: {
                            id: `${row.original.dni}`,
                            codigo: `${row.original.idservicio}-${row.original.dni}`,
                          },
                        }}
                      >
                        <button
                          className="btn btn-warning btn-sm mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Legajo Virtual"
                        >
                          <i
                            className="fa fa-folder-open"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </Link>
                      <Link
                        href={{
                          pathname: "/sepelio/servicios/impresion",
                          query: {
                            id: row.original.dni,
                          },
                        }}
                      >
                        <button
                          className="btn btn-sm btn-info mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Cargar Gastos"
                        >
                          <i class="fa fa-money" aria-hidden="true"></i>
                        </button>
                      </Link>
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

export default ListadoServicios;
