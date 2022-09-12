import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';
import ExportarListadoUsosPorPrestador from './ExportarListadoUsosPorPrestador';


const ListadoControlUsosPorPrestador = ({
    listado,
    rango,
    imprimir,
    titulo,
    calcTotales

}) => {

    return (
        <div className='container list mt-4 border border-dark p-4'>

            <h3>
                <u>
                    {titulo}
                </u>
            </h3>

            <div
                id="list"
                className='border border-dark mt-4 p-4'>

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Practicas",
                            columns: [

                                {
                                    Header: "Sucursal",
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["SUC"] }),
                                    filterAll: true,
                                    width: 120,
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
                                    Header: "Prestador",
                                    id: "NOMBRE",
                                    accessor: (d) => d.NOMBRE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["NOMBRE"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Cant. Usos",
                                    id: "USOS",
                                    accessor: (d) => d.USOS,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["USOS"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Importe",
                                    id: "IMPORTE",
                                    accessor: (d) => d.IMPORTE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                                    filterAll: true,

                                }

                            ],
                        },

                    ]}
                    defaultPageSize={15}
                    className="-striped -highlight"
                />

                <div className='alert alert-info mt-4 mb-4 border border-dark text-uppercase text-center'>
                    <strong>
                        Resumen: Ordenes = {calcTotales(listado, "USOS")} ||   Valor = ${calcTotales(listado, "IMPORTE")}
                    </strong>
                </div>

            </div>




            <div className='border border-dark mt-4 mb-4 container list p-4'>

                <h2>
                    <u>
                        Opciones
                    </u>
                </h2>

                <div className="row mt-4 n border border-dark p-4 d-flex justify-content-center">


                    <ExportarListadoUsosPorPrestador
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

export default ListadoControlUsosPorPrestador