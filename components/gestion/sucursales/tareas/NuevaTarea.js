import React from 'react'

const NuevaTarea = ({
    inicioRef,
    finRef,
    siRef,
    noRef,
    tareaRef,
    nuevaTarea,
    prioridadRef,
    sucursalRef,
    error }) => {
    return (
        <div className="container mt-4 border border-dark list p-4">


            <div className="row">
                <div className="col-md-8">
                    <h3 className="">
                        <strong>
                            <u> Planificar Tarea Surcursales</u>
                        </strong>
                    </h3>
                </div>
                <div className="col-md-4">
                    <a href="/gestion/sucursales/tareas/calendario" className="btn btn-sm btn-block btn-primary">
                        Ver Tareas Programadas
                    </a>
                </div>
            </div>

            {error ? (<div className="mt-4 mb-4 border border-dark alert alert-danger text-center text-uppercase">{error}</div>) : null}

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
                                <u> Prioridad: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={prioridadRef}
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



                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Sucursal: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={sucursalRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            <option value="Casa Central">
                                Casa Central
                            </option>
                            <option value="Palpala">
                                Palpala
                            </option>
                            <option value="Perico">
                                Perico
                            </option>
                            <option value="El Carmen">
                                El Carmen
                            </option>
                            <option value="San Pedro">
                                San Pedro
                            </option>
                        </select>
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
