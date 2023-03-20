import React from 'react'
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

const ListadoCampanasTemp = ({
    user,
    listado,
    rowSave,
    listadoTrab
}) => {

    return (
        <div className='container border border-dark mt-4 p-4 list'>

            <h2>
                <strong>
                    <u>
                        Campañas Temporales
                    </u>: {user}
                </strong>
            </h2>


            <div className='alert alert-info mt-4 mb-4 text-center text-uppercase border border-dark'>
                LISTADO DE CAMPAÑAS TEMPORALES PARA OPERADORES DE CAJA Y/O SEPELIO
            </div>


            <div className="accordion mt-4" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Casos Asignados
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">

                            <div className='border border-dark p-4 m-4'>

                                <ReactTable
                                    data={listado}
                                    filterable
                                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                    columns={[
                                        {
                                            Header: "Cartera",
                                            columns: [
                                                {
                                                    Header: "Contrato",
                                                    id: "CONTRATO",
                                                    accessor: (d) => d.CONTRATO,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                                                    filterAll: true,
                                                    width: 100
                                                },
                                                {
                                                    Header: "Edad",
                                                    id: "EDAD",
                                                    accessor: (d) => d.EDAD,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["EDAD"] }),
                                                    filterAll: true,
                                                    width: 50
                                                },
                                                {
                                                    Header: "Socio",
                                                    id: "APELLIDOS",
                                                    accessor: (d) => `${d.APELLIDOS}, ${d.NOMBRES}`,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                                                    filterAll: true,
                                                    width: 200
                                                },


                                                {
                                                    Header: "Telefono",
                                                    id: "TELEFONO",
                                                    accessor: (d) => d.TELEFONO,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["TELEFONO"] }),
                                                    filterAll: true,
                                                },

                                                {
                                                    Header: "Movil",
                                                    id: "MOVIL",
                                                    accessor: (d) => d.MOVIL,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["MOVIL"] }),
                                                    filterAll: true,
                                                },

                                                {
                                                    Header: "Cuota",
                                                    id: "IMPORTE",
                                                    accessor: (d) => d.IMPORTE,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                                                    filterAll: true,
                                                },
                                                {
                                                    Header: "Mes",
                                                    id: "MES",
                                                    accessor: (d) => d.MES,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["MES"] }),
                                                    filterAll: true,
                                                    width: 50
                                                },
                                                {
                                                    Header: "Año",
                                                    id: "ANO",
                                                    accessor: (d) => d.ANO,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["ANO"] }),
                                                    filterAll: true,
                                                    width: 50

                                                },
                                                {
                                                    Header: "Acciones",

                                                    Cell: (row) => (
                                                        <div>
                                                            <button
                                                                href={"#"}
                                                                className="btn btn-primary btn-sm mr-1"
                                                                data-toggle="modal"
                                                                data-target={`#modalAccionesTemp`}
                                                                onClick={() => { rowSave(row.original) }}
                                                            >
                                                                <i className="fa fa-book" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    ),
                                                },
                                            ],
                                        },
                                    ]}
                                    defaultPageSize={30}
                                    className="-striped -highlight"
                                />

                            </div>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Casos Trabajados
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className='border border-dark p-4 m-4'>

                                <ReactTable
                                    data={listadoTrab}
                                    filterable
                                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                    columns={[
                                        {
                                            Header: "Cartera",
                                            columns: [
                                                {
                                                    Header: "Contrato",
                                                    id: "CONTRATO",
                                                    accessor: (d) => d.CONTRATO,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["CONTRATO"] }),
                                                    filterAll: true,
                                                    width: 100
                                                },
                                                {
                                                    Header: "Edad",
                                                    id: "EDAD",
                                                    accessor: (d) => d.EDAD,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["EDAD"] }),
                                                    filterAll: true,
                                                    width: 50
                                                },
                                                {
                                                    Header: "Socio",
                                                    id: "APELLIDOS",
                                                    accessor: (d) => `${d.APELLIDOS}, ${d.NOMBRES}`,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["APELLIDOS"] }),
                                                    filterAll: true,
                                                    width: 200
                                                },


                                                {
                                                    Header: "Telefono",
                                                    id: "TELEFONO",
                                                    accessor: (d) => d.TELEFONO,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["TELEFONO"] }),
                                                    filterAll: true,
                                                },

                                                {
                                                    Header: "Movil",
                                                    id: "MOVIL",
                                                    accessor: (d) => d.MOVIL,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["MOVIL"] }),
                                                    filterAll: true,
                                                },

                                                {
                                                    Header: "Cuota",
                                                    id: "IMPORTE",
                                                    accessor: (d) => d.IMPORTE,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["IMPORTE"] }),
                                                    filterAll: true,
                                                },
                                                {
                                                    Header: "Mes",
                                                    id: "MES",
                                                    accessor: (d) => d.MES,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["MES"] }),
                                                    filterAll: true,
                                                    width: 50
                                                },
                                                {
                                                    Header: "Año",
                                                    id: "ANO",
                                                    accessor: (d) => d.ANO,
                                                    filterMethod: (filter, rows) =>
                                                        matchSorter(rows, filter.value, { keys: ["ANO"] }),
                                                    filterAll: true,
                                                    width: 50

                                                },
                                                {
                                                    Header: "Acciones",

                                                    Cell: (row) => (
                                                        <div>
                                                            <button
                                                                href={"#"}
                                                                className="btn btn-primary btn-sm mr-1"
                                                                data-toggle="modal"
                                                                data-target={`#modalAccionesTemp`}
                                                                onClick={() => { rowSave(row.original) }}
                                                            >
                                                                <i className="fa fa-book" aria-hidden="true"></i>
                                                            </button>
                                                        </div>
                                                    ),
                                                },
                                            ],
                                        },
                                    ]}
                                    defaultPageSize={30}
                                    className="-striped -highlight"
                                />

                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default ListadoCampanasTemp