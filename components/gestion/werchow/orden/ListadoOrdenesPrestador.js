import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';


const ListadoOrdenesPrestador = ({
    listado,
    checkOrden,
    totales

}) => {

    return (
        <div className='container list mt-4 border border-dark p-2'>

            <div className='alert alert-info border border-dark mt-4 mb-4'>
                Ord. sin check:  <strong>{totales(listado, "cant")}</strong>    ||  Total: $<strong>{totales(listado, "li")}</strong>
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
                            Header: "Ordenes",
                            columns: [

                                {
                                    Header: "✓",
                                    id: "✓",
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["SUC"] }),
                                    filterAll: true,
                                    width: 20,
                                    Cell: (row) => (
                                        <div>
                                            <input id="check" type="checkbox" onClick={() => {
                                                checkOrden(row.original)

                                            }} />
                                        </div>
                                    ),
                                },

                                {
                                    Header: "Sucursal",
                                    id: "SUC",
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["SUC"] }),
                                    filterAll: true,
                                    width: 80,
                                    Cell: (row) => (
                                        <div>
                                            {
                                                row.original.SUC === 'O' ?
                                                    (<div>Otero</div>) :
                                                    row.original.SUC === 'W' ?
                                                        (<div>Casa Central</div>) :
                                                        row.original.SUC === 'R' ?
                                                            (<div>Perico</div>) :
                                                            row.original.SUC === 'L' ?
                                                                (<div>Palpala</div>) :
                                                                row.original.SUC === 'P' ?
                                                                    (<div>San Pedro</div>) :
                                                                    row.original.SUC === 'C' ?
                                                                        (<div>El Carmen</div>) :
                                                                        null

                                            }
                                        </div>
                                    ),
                                },

                                {
                                    Header: "Fecha",
                                    id: "FECHA",
                                    accessor: (d) => moment(d.FECHA).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["FECHA"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Servicio",
                                    id: "SERVICIO",
                                    accessor: (d) => d.SERVICIO,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["SERVICIO"] }),
                                    filterAll: true,
                                    width: 70

                                },

                                {
                                    Header: "N° Orden",
                                    id: "ORDEN",
                                    accessor: (d) => d.ORDEN,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
                                    filterAll: true,
                                    width: 90

                                },

                                // {
                                //     Header: "Valor Consulta",
                                //     id: "VALOR",
                                //     accessor: (d) => d.VALOR,
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, { keys: ["VALOR"] }),
                                //     filterAll: true,

                                // },


                                // {
                                //     Header: "Coseguro",
                                //     id: "COSEGURO",
                                //     accessor: (d) => d.COSEGURO,
                                //     filterMethod: (filter, rows) =>
                                //         matchSorter(rows, filter.value, { keys: ["COSEGURO"] }),
                                //     filterAll: true,

                                // },

                                {
                                    Header: "Importe",
                                    id: "LIQUIDAR",
                                    accessor: (d) => d.LIQUIDAR,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["LIQUIDAR"] }),
                                    filterAll: true,
                                },

                            ],
                        },

                    ]}
                    defaultPageSize={15}
                    className="-striped -highlight"
                />



            </div>

        </div>
    )
}

export default ListadoOrdenesPrestador