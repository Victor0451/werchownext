import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from '../../layout/Spinner';
import Link from 'next/link'

const ListadoConvenios = ({ listado }) => {

    if (!listado) return <Spinner />
    return (
        <div className="mt-4 container list border border-dark p-4">

            <h2>
                <strong><u>
                    Listado de Convenios de Deuda
        </u></strong>
            </h2>

            <div className="border border-dark p-2 list">
                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Convenios",
                            columns: [

                                {
                                    Header: "Contrato",
                                    id: "contrato",
                                    accessor: (d) => d.contrato,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["contrato"] }),
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
                                    Header: "Deuda",
                                    id: "deuda",
                                    accessor: (d) => d.deuda,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["deuda"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => d.fecha,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>


                                            <Link
                                                href={{
                                                    pathname: "/socios/conveniodeuda/imprimirconvenio",
                                                    query: {
                                                        id: row.original.contrato,
                                                    },
                                                }}
                                            >
                                                <button
                                                    className="btn  btn-primary"
                                                >
                                                    Imprimir
                                                </button>
                                            </Link>{" "}

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

    )
}

export default ListadoConvenios
