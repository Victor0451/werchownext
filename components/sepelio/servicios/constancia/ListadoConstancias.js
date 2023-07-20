import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";

const ListadoConstancias = ({ listado }) => {

    console.log(listado)

    if (listado.length === 0) return <div className="alert alert-info border border-dark text-center text-uppercase container mt-4 mb-4">
        Este servicio no posee constancias de afiliacion emitidas
    </div>

    return (
        <div className="container border border-dark list p-4 mt-4">

            <h4>
                <strong>
                    <u>
                        Constancias emitidas y Registradas en este serivicio
                    </u>
                </strong>
            </h4>

            <div className="mt-4 list border border-dark ">
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
                                    width: 50,
                                    Cell: (row) => <div>{row.index + 1}</div>,
                                },
                                {
                                    Header: "Apellido Solicitante",
                                    id: "apellido_soli",
                                    accessor: (d) => d.apellido_soli,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["apellido_soli"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Nombre Solicitante",
                                    id: "nombre_soli",
                                    accessor: (d) => d.nombre_soli,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nombre_soli"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "DNI Solicitante",
                                    id: "dni_soli",
                                    accessor: (d) => d.dni_soli,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["dni_soli"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => d.fecha,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["fecha"],
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
                            ],
                        },
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                />
            </div>

        </div>
    )
}

export default ListadoConstancias
