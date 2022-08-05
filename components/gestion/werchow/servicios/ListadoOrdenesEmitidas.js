import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";

const ListadoOrdenesEmitidas = ({
    listado,
    generarImpresion,
    anularOrdenes
}) => {


    if (!listado) return <Spinner />;

    return (

        <div className="container list border border-dark mt-4 p-4">

            <h2 className="mb-4">
                <strong>
                    <u>
                        Listado de ordenes emitidas
                    </u>
                </strong>
            </h2>

            <div>
                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Practicas",
                            columns: [

                                {
                                    Header: "Fecha",
                                    id: "FECHA",
                                    accessor: (d) => moment(d.FECHA).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Orden",
                                    id: "ORDEN",
                                    accessor: (d) => d.ORDEN,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Socio",
                                    id: "CONTRATO",
                                    accessor: (d) => d.CONTRATO,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "DNI",
                                    id: "NRO_DOC",
                                    accessor: (d) => d.NRO_DOC,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["NRO_DOC"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Servicio",
                                    id: "SERVICIO",
                                    accessor: (d) => d.SERVICIO,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["SERVICIO"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Importe",
                                    id: "IMPORTE",
                                    accessor: (d) => d.IMPORTE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                                    filterAll: true,


                                },

                                {
                                    Header: "Acciones",
                                    id: "acciones",
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div>
                                            {row.original.SERVICIO === 'ORDE' ? (
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        generarImpresion(row.original.iduso, row.original.NRO_DOC)
                                                    }
                                                    }
                                                >
                                                    Imprimir
                                                </button>
                                            ) : row.original.SERVICIO === 'FARMA' ? (
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        generarImpresion(row.original.iduso, row.original.NRO_DOC, row.original.ORDEN, 'F')
                                                    }
                                                    }
                                                >
                                                    Imprimir
                                                </button>
                                            ) : row.original.SERVICIO === 'ENFE' ? (
                                                <button
                                                    className="btn btn-primary btn-sm"
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        generarImpresion(row.original.iduso, row.original.NRO_DOC, row.original.ORDEN, 'E')
                                                    }
                                                    }
                                                >
                                                    Imprimir
                                                </button>
                                            ) : (

                                                <>

                                                    <button
                                                        className="btn btn-primary btn-sm"
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            generarImpresion(row.original.iduso, row.original.NRO_DOC, row.original.ORDEN)
                                                        }
                                                        }
                                                    >
                                                        Imprimir
                                                    </button>



                                                </>
                                            )}

                                            <button
                                                className="btn btn-danger btn-sm ml-1"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    anularOrdenes(row.original.ORDEN, row.original.SERVICIO)
                                                }
                                                }
                                            >
                                                Anular
                                            </button>

                                        </div>
                                    ),
                                },
                            ],
                        },

                    ]
                    }

                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        </div>

    )
}

export default ListadoOrdenesEmitidas