import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import Link from "next/link";
import moment from "moment";

const ListadoServicios = ({ listado, desde, hasta }) => {
  if (!listado) return <Spinner />;

  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <h2>
        <strong>
          <u>Listado De Servicios:</u> desde:{" "}
          {moment(desde).format("DD/MM/YYYY")} hasta:{" "}
          {moment(hasta).format("DD/MM/YYYY")}
        </strong>
      </h2>

      <div className="row mt-4 mb-4 border border-dark p-4">
        <div className="col-md-6">
          <h4 className="">
            <strong>
              <u>Total de servicios:</u> {listado.length}
            </strong>
          </h4>
        </div>
        <div className="col-md-6">
          <a
            href="/sepelio/servicios/listado"
            className="btn btn-sm btn-block btn-danger"
          >
            Seleccionar otro periodo
          </a>
        </div>
      </div>

      <div className="list border border-dark ">
        <ReactTable
          data={listado}
          filterable
          defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
          columns={[
            {
              Header: "Listado De Servicios",
              columns: [
                // {
                //   Header: "ID",
                //   id: "idservicio",
                //   accessor: (d) => d.idservicio,
                //   filterMethod: (filter, rows) =>
                //     matchSorter(rows, filter.value, { keys: ["idservicio"] }),
                //   filterAll: true,
                //   width: 30,
                // },
                {
                  Header: "#",
                  filterAll: false,
                  width: 20,
                  Cell: (row) => <div>{row.index}</div>,
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
                  width: 150,
                },

                {
                  Header: "Fecha de Fallecimiento",
                  id: "fecha_fallecimiento",
                  accessor: (d) => d.fecha_fallecimiento,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, {
                      keys: ["fecha_fallecimiento"],
                    }),
                  filterAll: true,
                  width: 105,
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
                            className="fa fa-pencil-square-o"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </Link>
                      <Link
                        href={{
                          pathname: "/sepelio/servicios/legajovirtual/legajo",
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
                          pathname:
                            "/sepelio/servicios/legajovirtual/subirarchivos",
                          query: {
                            id: row.original.dni,
                          },
                        }}
                      >
                        <button
                          className="btn btn-sm btn-success mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Subir Archivos"
                        >
                          <i className="fa fa-upload" aria-hidden="true"></i>
                        </button>
                      </Link>
                      <Link
                        href={{
                          pathname: "/sepelio/servicios/gastos/gastos",
                          query: {
                            id: row.original.dni,
                            idservicio: row.original.idservicio,
                          },
                        }}
                      >
                        <button
                          className="btn btn-sm btn-info mr-1"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Cargar Gastos"
                        >
                          <i className="fa fa-money" aria-hidden="true"></i>
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
