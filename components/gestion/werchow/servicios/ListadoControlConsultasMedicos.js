import React from 'react'
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from 'moment';
import ExportarListadoConsultasMedicos from './ExportarListadoConsultasMedicos';


const ListadoControlConsultasMedicos = ({
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
                            Header: "Servicios Medicas",
                            columns: [

                                {
                                    Header: "Sucursal",
                                    id: "SUC",
                                    accessor: (d) => d.SUC,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["SUC"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Fecha",
                                    id: "FECHA",
                                    accessor: (d) => d.FECHA,
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
                                    Header: "Medico",
                                    id: "NOMBRE",
                                    accessor: (d) => d.NOMBRE,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["NOMBRE"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Valor Consulta",
                                    id: "VALOR",
                                    accessor: (d) => d.VALOR,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["VALOR"] }),
                                    filterAll: true,

                                },


                                {
                                    Header: "Coseguro",
                                    id: "COSEGURO",
                                    accessor: (d) => d.COSEGURO,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["COSEGURO"] }),
                                    filterAll: true,

                                },

                                {
                                    Header: "Werchow",
                                    id: "WERCHOW",
                                    accessor: (d) => d.WERCHOW,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["WERCHOW"] }),
                                    filterAll: true,
                                },
                            ],
                        },

                    ]}
                    defaultPageSize={15}
                    className="-striped -highlight"
                />

                <div className='alert alert-info mt-4 mb-4 border border-dark text-uppercase text-center'>
                    <strong>
                        Resumen: Ordenes = {listado.length} ||   Valor = ${calcTotales(listado, "VALOR")}   ||   Coseguro = ${calcTotales(listado, "COSEGURO")}   ||   Werchow = ${calcTotales(listado, "WERCHOW")}
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


                    <ExportarListadoConsultasMedicos
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

export default ListadoControlConsultasMedicos