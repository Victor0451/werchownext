import React from 'react'
import moment from 'moment'

const EditarTarea = ({ inicioRef, finRef, siRef, noRef, tareaRef, task, priorityRef, error, operadorsep, opRef }) => {
    return (
        <div className="container mt-4 border border-dark list p-4">

            <div className="row">
                <div className="col-md-8">
                    <h3 className="">
                        <strong>
                            <u> Planificar Tarea</u>
                        </strong>
                    </h3>
                </div>
                <div className="col-md-4">
                    <a href="/sepelio/tareas/calendario" className="btn btn-sm btn-block btn-primary">
                        Ver Tareas Programadas
                    </a>
                </div>
            </div>

            <div className="mt-4 border border-dark p-4 ">
                <div className="mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase">
                    Cuando eliges al operador este se concatena con la tarea descripta en el campo tareas, por lo tanto debes borrar el operador anterior y poner el nuevo
                </div>

                <div className="row border border-dark p-4">
                    <div className="col-md-12">
                        <label>
                            <u>
                                Tarea
                        </u>
                        </label>
                        <textarea rows="3" className="form-control" ref={tareaRef} defaultValue={task.title} />
                    </div>

                    <div className="mt-4 col-md-5">
                        <label>
                            <u>
                                Inicio </u>:{moment(task.start).format('DD/MM/YYYY HH:mm:ss')}

                        </label>
                        <input type="datetime-local" className="form-control" ref={inicioRef} />
                    </div>
                    <div className="mt-4 col-md-5">
                        <label>
                            <u>
                                Fin </u>: {moment(task.end).format('DD/MM/YYYY HH:mm:ss')}

                        </label>
                        <input type="datetime-local" className="form-control" ref={finRef} />
                    </div>

                    <div className="col-md-2 mt-4 mb-4">
                        <label >
                            {task.allDay == 1 ? (<><u>Todo El Dia:</u> Si</>) : (<><u>Todo El Dia:</u> No</>)}
                        </label>
                        <br />
                        <div className="form-check ">
                            <input
                                className="form-check-input "
                                type="radio"
                                id="covid"
                                name="motivo"
                                value="option1"
                                ref={siRef}
                            />
                            <label className="form-check-label" htmlFor="si">
                                Si
                        </label>
                        </div>
                        <div className="form-check ">
                            <input
                                className="form-check-input "
                                type="radio"
                                id="covid"
                                name="motivo"
                                value="option1"
                                defaultChecked={true}
                                ref={noRef}
                            />
                            <label className="form-check-label" htmlFor="no">
                                No
                        </label>
                        </div>
                    </div>

                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Operador</u>:
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={opRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            {operadorsep
                                ? operadorsep.map((operador, index) => (
                                    <option key={index} value={operador.value}>
                                        {operador.label}
                                    </option>
                                ))
                                : null}
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Prioridad </u>: {task.priority === 1 ? (<>Normal</>) : task.priority === 2 ? (<>Importante</>) : task.priority === 3 ? (<>Urgente</>) : null}
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={priorityRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>

                            <option value="1">
                                Normal
                                    </option>
                            <option value="2">
                                Importante
                                    </option>
                            <option value="3">
                                Urgente
                                    </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarTarea
