import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';

const ListadoAcciones = ({
    listado
}) => {

    if (listado.length === 0) return <div className='container border border-dark alert alert-info text-center text-uppercase mt-4 mb-4'>No hay acciones registradas</div>

    return (
        <div className='container list mt-4 border border-dark p-4'>

            <h2 >
                <strong>
                    <u>
                        Historial de acciones
                    </u>
                </strong>
            </h2>

            <div
                id="list"
                className='border border-dark mt-4 p-1 mt-4'>

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Historial de Acciones",
                            columns: [

                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => moment(d.fecha).format('DD/MM/YYYY HH:mm:ss'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,
                                    width: 200
                                },
                                {
                                    Header: "Operador",
                                    id: "operador",
                                    accessor: (d) => d.operador,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["operador"] }),
                                    filterAll: true,
                                    width: 80



                                },
                                {
                                    Header: "Accion",
                                    id: "accion",
                                    accessor: (d) => d.accion,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["accion"] }),
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

export default ListadoAcciones