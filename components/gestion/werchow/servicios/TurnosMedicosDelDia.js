import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import moment from "moment";
import ExpotarTurnos from "./ExportarTurnos";

const TurnosMedicosDelDia = ({
    listTurno
}) => {

    return (
        <div className=' col-md-12 mt-4 mb-4'>
            <div className="collapse width" id="collapseTurnosMedicos">
                <div className="card card-body" >
                    <div className="border border-dark p-2">

                        {
                            listTurno.length === 0 ? (
                                <div className='col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-info'>
                                    No hay turnos registrados para hoy.
                                </div>
                            ) : (

                                <div className="">
                                    <div className="mt-4 mb-4 d-flex justify-content-end">
                                        <ExpotarTurnos
                                            listado={listTurno}
                                        />
                                    </div>

                                    <ReactTable
                                        data={listTurno}
                                        filterable
                                        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                                        columns={[
                                            {
                                                Header: "Turnos",
                                                columns: [

                                                    {
                                                        Header: "Turno",
                                                        id: "turno",
                                                        accessor: (d) => d.turno,
                                                        filterMethod: (filter, rows) =>
                                                            matchSorter(rows, filter.value, { keys: ["turno"] }),
                                                        filterAll: true,
                                                        width: 150
                                                    },
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
                            )

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TurnosMedicosDelDia