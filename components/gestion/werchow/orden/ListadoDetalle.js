import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';

const ListadoDetalle = ({
    listado
}) => {
    return (

        <div className='container list mt-4 border border-dark p-2'>

            <div
                id="list"
                className='border border-dark mt-4 p-1'>

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Detalle Orden de Pago",
                            columns: [
                                {
                                    Header: "Sucursal",
                                    id: "sucursal",
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["sucursal"] }),
                                    filterAll: true,

                                    Cell: (row) => (
                                        <div>
                                            {
                                                row.original.sucursal === 'O' ?
                                                    (<div>Otero</div>) :
                                                    row.original.sucursal === 'W' ?
                                                        (<div>Casa Central</div>) :
                                                        row.original.sucursal === 'R' ?
                                                            (<div>Perico</div>) :
                                                            row.original.sucursal === 'L' ?
                                                                (<div>Palpala</div>) :
                                                                row.original.sucursal === 'P' ?
                                                                    (<div>San Pedro</div>) :
                                                                    row.original.sucursal === 'C' ?
                                                                        (<div>El Carmen</div>) :
                                                                        null

                                            }
                                        </div>
                                    ),
                                },
                                {
                                    Header: "N° Consulta",
                                    id: "nconsulta",
                                    accessor: (d) => d.nconsulta,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nconsulta"] }),
                                    filterAll: true,


                                },
                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => moment(d.fecha).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Importe",
                                    id: "importe",
                                    accessor: (d) => d.importe,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["importe"] }),
                                    filterAll: true,


                                },

                                {
                                    Header: "Operador",
                                    id: "operador_carga",
                                    accessor: (d) => d.operador_carga,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["operador_carga"] }),
                                    filterAll: true,


                                },
                            ],
                        },

                    ]}
                    defaultPageSize={15}
                    className="-striped -highlight"
                />



            </div>

        </div >
    )
}

export default ListadoDetalle