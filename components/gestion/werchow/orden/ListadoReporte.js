import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';

const ListadoReporte = ({
    listado,
    calcTotal
}) => {
    return (

        <div className='container list mt-4 border border-dark p-2'>

            <h2>
                <u>
                    <strong>
                        Resultado
                    </strong>
                </u>
            </h2>


            <div className='mt-4 mb-4 border border-dark alert alert-info text-uppercase text-center'>

                <u>Cant. de ordenes</u>: {listado.length}  || <u>Total</u>: ${calcTotal(listado)}

            </div>

            <div
                id="list"
                className='border border-dark mt-4 p-1'>

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Reporte",
                            columns: [

                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => moment(d.fecha).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,
                                    width: 100

                                },

                                {
                                    Header: "Proveedor",
                                    id: "nombre",
                                    accessor: (d) => d.nombre,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nombre"] }),
                                    filterAll: true,



                                },



                                {
                                    Header: "Cantidad",
                                    id: "cant",
                                    accessor: (d) => d.cant,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["cant"] }),
                                    filterAll: true,
                                    width: 100

                                },

                                {
                                    Header: "Total",
                                    id: "total",
                                    accessor: (d) => d.total,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["total"] }),
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

export default ListadoReporte