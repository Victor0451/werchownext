import React from "react";
import ReactTable from "react-table";
import matchSorter from "match-sorter";
import Spinner from "../../../layout/Spinner";
import moment from "moment";
import EditarTareas from './EditarTarea'

const ListadoTareas = ({
    listado,
    traerTarea,
    inicioRef,
    finRef,
    siRef,
    noRef,
    tareaRef,
    task,
    editarTarea,
    eliminarTarea,
    error,
    priorityRef,
    sucursalRef

}) => {
    if (!listado) return <Spinner />;

    return (
        <div className="container border border-dark list mt-4 p-4">

            <h2>
                <strong>
                    <u>
                        Listado Tareas
                    </u>
                </strong>
            </h2>

            <div className="list border border-dark ">
                <ReactTable
                    data={listado}
                    filterable
                    defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
                    columns={[
                        {
                            Header: "Listado De Servicios",
                            columns: [
                                {
                                    Header: "#",
                                    filterAll: false,
                                    width: 50,
                                    Cell: (row) => <div>{row.index + 1}</div>,
                                },
                                {
                                    Header: "Tarea",
                                    id: "title",
                                    accessor: (d) => d.title,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["title"] }),
                                    filterAll: true,
                                    width: 400,

                                },
                                {
                                    Header: "Todo el Dia",
                                    width: 100,
                                    Cell: (row) => (
                                        <div>
                                            {row.original.allDay == 1 ? (<div>Si</div>)
                                                : row.original.allDay == 0 ? (<div>No</div>) : null
                                            }
                                        </div>
                                    ),
                                },

                                {
                                    Header: "Inicio",
                                    id: "start",
                                    accessor: (d) => moment(d.start).utcOffset("+000").format('YYYY-MM-DD HH:mm:ss'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["start"] }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Fin",
                                    id: "end",
                                    accessor: (d) => moment(d.end).utcOffset("+000").format('YYYY-MM-DD HH:mm:ss'),
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, {
                                            keys: ["end"],
                                        }),
                                    filterAll: true,

                                },
                                {
                                    Header: "Prioridad",
                                    width: 100,
                                    Cell: (row) => (
                                        <div>
                                            {row.original.priority == 1 ? (<div>Normal</div>)
                                                : row.original.priority == 2 ? (<div>Importante</div>)
                                                    : row.original.priority == 3 ? (<div>Urgente</div>)
                                                        : null
                                            }
                                        </div>
                                    ),
                                },
                                {
                                    Header: "Acciones",

                                    Cell: (row) => (
                                        <div>
                                            <button
                                                className="btn btn-sm btn-warning border mr-1"
                                                data-toggle="modal"
                                                data-placement="top"
                                                title="Editar"
                                                data-target="#staticBackdrop"

                                                onClick={() => traerTarea(row.original)}
                                            >
                                                <i
                                                    className="fa fa-pencil-square-o"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>

                                            <button
                                                className="btn btn-sm btn-danger border mr-1"
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Eliminar"
                                                onClick={() => eliminarTarea(row.original.idevents)}
                                            >
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    ),
                                },
                            ],
                        },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>



            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Editar Tarea</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            {
                                task ? (
                                    <EditarTareas
                                        inicioRef={inicioRef}
                                        finRef={finRef}
                                        siRef={siRef}
                                        noRef={noRef}
                                        tareaRef={tareaRef}
                                        priorityRef={priorityRef}
                                        task={task}
                                        sucursalRef={sucursalRef}
                                        error={error}
                                    />
                                ) : (<Spinner />)
                            }

                        </div>
                        <div className="modal-footer">

                            <button className="btn btn-primary" data-dismiss="modal" onClick={editarTarea} >Editar</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ListadoTareas;
