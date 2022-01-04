import React, { useState, useEffect } from "react";
import matchSorter from "match-sorter";
import Link from "next/link";
import moment from "moment";

// Import React Table
import ReactTable from "react-table";

const ListadoCajaSepelio = ({ turnos, datatoggle, datatarget, getId }) => {

    if (!turnos)
        return (
            <div className="container mt-4 alert alert-danger p-4 border border-dark">
                No Hay Turnos Registrados
            </div>
        );
    return (
        <div className="container mt-4 border border-dark list">

            <div className="row">
                <div className="col-md-6">
                    <h4 className="mt-4 mb-4">
                        <strong>
                            <u>Turnos Registrados</u>
                        </strong>
                    </h4>
                </div>
                <div className="col-md-6">
                    <a href='/socios/turnobajas/turno' className="mt-4 btn btn-block btn-primary btn-sm">Registrar Turno</a>
                </div>
            </div>


            <div className=" mt-4 border border-dark list">
                <ReactTable
                    data={turnos}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Turnos Registrados",
                            columns: [
                                {
                                    Header: "Fecha",
                                    id: "fecha_pedido",
                                    accessor: (d) =>
                                        moment(d.fecha_pedido).format("DD/MM/YYYY"),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha_pedido"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Turno",
                                    id: "fecha_turno",
                                    accessor: (d) => moment(d.fecha_turno).format("DD/MM/YYYY"),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha_turno"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Apellido",
                                    id: "apellido",
                                    accessor: (d) => d.apellido,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["apellido"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "Nombre",
                                    id: "nombre",
                                    accessor: (d) => d.nombre,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nombre"] }),
                                    filterAll: true,
                                },

                                {
                                    Header: "DNI",
                                    id: "dni",
                                    accessor: (d) => d.dni,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["dni"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Estado",
                                    id: "estado",
                                    accessor: (d) => d.estado,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["estado"] }),
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div>
                                            {row.original.estado === 1 ? (
                                                <div>Atendido</div>
                                            ) : row.original.estado === 0 ? (
                                                <div>Sin atender</div>
                                            ) : null}
                                        </div>
                                    ),
                                },

                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <>
                                            {row.original.estado === 0 ? (
                                                <>
                                                    <button
                                                        href=""
                                                        className="btn btn-success btn-sm mr-1"
                                                        data-toggle="tooltip"
                                                        data-toggle={datatoggle}
                                                        data-target={datatarget}
                                                        data-placement="top"
                                                        title="Atender Turno"
                                                        onClick={getId(row.original.idturno)}
                                                    >
                                                        <i className="fa fa-check" aria-hidden="true"></i>
                                                    </button>
                                                </>
                                            ) : (
                                                <Link
                                                // href={{
                                                //     pathname: "/sepelio/caja/imprimir",
                                                //     query: {
                                                //         id: row.original.idcaja,
                                                //     },
                                                // }}
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
                                            )}
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

export default ListadoCajaSepelio;
