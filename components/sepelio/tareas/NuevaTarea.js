import React from 'react'

const NuevaTarea = ({ inicioRef, finRef, siRef, noRef, tareaRef, nuevaTarea }) => {
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
                        <textarea rows="3" className="form-control" ref={tareaRef} />
                    </div>

                    <div className="mt-4 col-md-5">
                        <label>
                            <u>
                                Inicio
                            </u>
                        </label>
                        <input type="datetime-local" className="form-control" ref={inicioRef} />
                    </div>
                    <div className="mt-4 col-md-5">
                        <label>
                            <u>
                                Fin
                            </u>
                        </label>
                        <input type="datetime-local" className="form-control" ref={finRef} />
                    </div>

                    <div className="col-md-2 mt-4 mb-4">
                        <label>
                            <strong>
                                <u>Todo El Dia</u>
                            </strong>
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
                </div>


                <div className="mt-4 row border border-dark p-4">
                    <div className=" col-md-6">
                        <button className="btn btn-primary btn-block" onClick={nuevaTarea}>
                            Registrar
                        </button>

                    </div>

                    <div className="  col-md-6">
                        <a className="btn btn-danger btn-block" href="/sepelio/tareas/calendario">
                            Cancelar
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevaTarea
