import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../components/layout/Spinner";
import Link from "next/link";
import moment from "moment";

const ListadoTareas = ({ listado }) => {
    if (!listado) return <Spinner />;

    return (
        <div className="container border border-dark alert alert-primary mt-4 p-4">

            <h2>
                <strong>
                    <u>
                        Listado Tareas
                    </u>
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
                                    Header: "#",
                                    filterAll: false,
                                    width: 20,
                                    Cell: (row) => <div>{row.index + 1}</div>,
                                },
                                {
                                    Header: "Tarea",
                                    id: "title",
                                    accessor: (d) => d.title,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["title"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>
                                            {row.original.allDay == 1 ? (<div>Si</div>)
                                                : row.original.allDay == 0 ? (<div>No</div>) : null
                                            }
                                        </div>
                                    ),
                                },

                                {
                                    Header: "Inicio",
                                    id: "start",
                                    accessor: (d) => d.start,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["start"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Fin",
                                    id: "end",
                                    accessor: (d) => d.end,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["end"],
                                        }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>


                                            <Link
                                                href={{
                                                    pathname: "/sepelio/servicios/editar",
                                                    query: {
                                                        id: row.original.dni,
                                                    },
                                                }}
                                            >
                                                <button
                                                    className="btn btn-sm btn-warning border mr-1"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Editar"
                                                >
                                                    <i
                                                        className="fa fa-pencil-square-o"
                                                        aria-hidden="true"
                                                    ></i>
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
                                                    className="btn btn-sm btn-danger border mr-1"
                                                    data-toggle="tooltip"
                                                    data-placement="top"
                                                    title="Eliminar"
                                                >
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
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

export default ListadoTareas;
