import React, { useState } from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../../components/layout/Spinner";

import moment from "moment";

const ListadoGastoLuto = ({ listado, eliminarGasto }) => {


    if (!listado)
        return <Spinner />
    if (listado.length === 0) {
        return <div className="container mt-4 alert alert-warning border border-dark text-center text-uppercase">No hay gastos de luto cargados</div>
    }

    return (

        <div className="container border border-dark alert alert-primary mt-4 p-4">

            <div className="row">

                <div className="col-md-8">
                    <h2 className=" mb-4">
                        <strong>
                            <u>Gastos de Luto Cargados:</u> {listado.length}
                        </strong>
                    </h2>
                </div>

                <div className="col-md-4">
                    <a href="/sepelio/servicios/listado" className="btn btn-block btn-info">Cargar Gasto de Luto</a>
                </div>
            </div>


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
                                    Header: "Servicio",
                                    id: "idservicio",
                                    accessor: (d) => d.idservicio,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["idservicio"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "HC",
                                    id: "contrato",
                                    accessor: (d) => d.contrato,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["contrato"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Extinto",
                                    id: "extinto",
                                    accessor: (d) => d.extinto,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["extinto"] }),
                                    filterAll: true,
                                    width: 200
                                },

                                {
                                    Header: "Importe",
                                    id: "gasto_luto",
                                    accessor: (d) => d.gasto_luto,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["gasto_luto"] }),
                                    filterAll: true,
                                    width: 80
                                },

                                {
                                    Header: "Apellido Beneficiario",
                                    id: "apellido_ben",
                                    accessor: (d) => d.apellido_ben,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["apellido_ben"],
                                        }),
                                    filterAll: true,
                                    width: 150
                                },

                                {
                                    Header: "Nombre Beneficiario",
                                    id: "nombre_ben",
                                    accessor: (d) => d.nombre_ben,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["nombre_ben"],
                                        }),
                                    filterAll: true,
                                    width: 150
                                },

                                {
                                    Header: "Telefono",
                                    id: "telefono_ben",
                                    accessor: (d) => d.telefono_ben,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["telefono_ben"],
                                        }),
                                    filterAll: true,
                                    width: 150
                                },

                                {
                                    Header: "Acciones",
                                    width: 100,
                                    Cell: (row) => (

                                        <>
                                            <button
                                                href=""
                                                className="btn btn-danger btn-sm mr-1"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Eliminar"
                                                onClick={() => eliminarGasto(row.original.idgastoluto)}
                                            >
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                            </button>


                                        </>





                                    ),
                                }





                            ],
                        },


                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        </div>
    )
}

export default ListadoGastoLuto
