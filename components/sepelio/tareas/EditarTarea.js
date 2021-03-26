import React from 'react'
import moment from 'moment'

const EditarTarea = ({ inicioRef, finRef, siRef, noRef, tareaRef, task, error, operadorsep , opRef}) => {
    return (
        <div className="container mt-4 border border-dark alert alert-primary p-4">

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
                            <label className="form-check-label" for="si">
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
                            <label className="form-check-label" for="no">
                                No
                        </label>
                        </div>
                    </div>

                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Operador: </u>
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
                </div>
            </div>
        </div>
    )
}

export default EditarTarea
