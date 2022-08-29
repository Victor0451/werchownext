import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";
import ExpotarTurnos from "./ExportarTurnos";

const ListadoTurnosRegistrados = ({
    listado,
    estadoTurno,

}) => {

    return (
        <div className="container list mt-4 border border-dark  p-4">


            {
                listado.length === 0 ? (
                    <div className='col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-info'>
                        No hay turnos registrados, {""}
                        <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#modalRegistro"
                        >
                            Registar Turno

                        </button>
                    </div>
                ) : (

                    <div className="border border-dark mt-4 p-4 mb-4 ">

                        <div className="row">

                            <div className="col-md-4">

                                <label>
                                    Doctor:
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={listado[0].doctor}
                                />

                            </div>

                            <div className="col-md-4">

                                <label>
                                    Turno:
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={listado[0].turno}
                                />

                            </div>

                            <div className="col-md-4 mt-2">

                                <button
                                    className="btn btn-info mt-4"
                                    data-toggle="modal"
                                    data-target="#modalRegistro"
                                >

                                    Registar Turno

                                </button>

                            </div>

                        </div>

                    </div>
                )
            }

            <div className="border border-dark p-2">

                <div className="mt-4 mb-4 d-flex justify-content-end">
                    <ExpotarTurnos
                        listado={listado}
                    />
                </div>

                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Turnos",
                            columns: [

                                {
                                    Header: "Fecha",
                                    id: "fecha",
                                    accessor: (d) => moment(d.fecha).format('DD/MM/YYYY'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                    filterAll: true,
                                    width: 150
                                },
                                {
                                    Header: "Hora",
                                    id: "hora",
                                    accessor: (d) => d.hora,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["hora"] }),
                                    filterAll: true,
                                    width: 150
                                },

                                {
                                    Header: "Paciente",
                                    id: "paciente",
                                    accessor: (d) => d.paciente,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["paciente"] }),
                                    filterAll: true,
                                    width: 300

                                },
                                {
                                    Header: "Telefono",
                                    id: "telefono",
                                    accessor: (d) => d.telefono,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["telefono"] }),
                                    filterAll: true,
                                    width: 100

                                },

                                {
                                    Header: "Obra Social",
                                    id: "obra_soc",
                                    accessor: (d) => d.obra_soc,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["obra_soc"] }),
                                    filterAll: true,
                                    width: 100

                                },

                                {
                                    Header: "Estado",
                                    id: "estadp",
                                    filterAll: true,
                                    width: 100,
                                    Cell: (row) => (
                                        <>
                                            {row.original.estado === 0 ?
                                                (
                                                    <div>
                                                        Registrado
                                                    </div>
                                                ) : row.original.estado === 1 ?
                                                    (
                                                        <div>
                                                            Atendido
                                                        </div>
                                                    ) : row.original.estado === 2 ?
                                                        (
                                                            <div>
                                                                Cancelado
                                                            </div>
                                                        ) : null
                                            }
                                        </>
                                    ),
                                },

                                {
                                    Header: "Acciones",
                                    id: "acciones",
                                    filterAll: true,
                                    width: 100,
                                    Cell: (row) => (
                                        <div>
                                            <button
                                                className="btn btn-success btn-sm"
                                                onClick={() => { estadoTurno("si", row.original.idturno) }}
                                            >
                                                <i
                                                    className="fa fa-check"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>

                                            <button
                                                className="ml-1 btn btn-danger btn-sm"
                                                onClick={() => { estadoTurno("no", row.original.idturno) }}
                                            >
                                                <i
                                                    className="fa fa-times"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </div>
                                    ),
                                },
                            ],
                        },

                    ]
                    }

                    defaultPageSize={10}
                    className="-striped -highlight"
                />

            </div>
        </div>
    )
}

export default ListadoTurnosRegistrados