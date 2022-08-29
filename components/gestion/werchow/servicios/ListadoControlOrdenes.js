import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';
import ExportarListadoControl from './ExportarListadoControl';


const ListadoControlOrdenes = ({
    listado,
    rango,
    imprimir
}) => {

    return (
        <div>

            <div
                id="list"
                className='container list border border-dark mt-4 p-4'>

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
                                    Header: "Hora",
                                    id: "HORA",
                                    accessor: (d) => d.HORA,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["HORA"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "N° Orden",
                                    id: "ORDEN",
                                    accessor: (d) => d.ORDEN,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["ORDEN"] }),
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
                                    Header: "HC",
                                    id: "CONTRATO",
                                    accessor: (d) => d.CONTRATO,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Plan",
                                    id: "PLAN",
                                    accessor: (d) => d.PLAN,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["PLAN"] }),
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
                            ],
                        },

                    ]}
                    defaultPageSize={15}
                    className="-striped -highlight"
                />
            </div>


            <div className='border border-dark mt-4 mb-4 container list p-4'>

                <h2>
                    <u>
                        Opciones
                    </u>
                </h2>

                <div className="row mt-4 n border border-dark p-4 d-flex justify-content-center">


                    <ExportarListadoControl
                        listado={listado}
                        rango={rango}
                    />

                    <button
                        className='ml-1 btn btn-primary'
                        onClick={imprimir}
                    >
                        Imprimir
                    </button>

                    <a
                        href='/gestion/werchow/servicios/control'
                        className='ml-1 btn btn-danger'
                    >
                        Cancelar
                    </a>


                </div>

            </div>

        </div>
    )
}

export default ListadoControlOrdenes