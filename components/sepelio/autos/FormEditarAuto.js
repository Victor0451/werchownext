import moment from 'moment'
import React from 'react'
import Spinner from '../../layout/Spinner'

const FormEditarAuto = ({
    autoRef,
    kilometrosRef,
    responsableRef,
    motorRef,
    chasisRef,
    modeloRef,
    errores,
    editarAuto,
    auto,
    operadorsep
}) => {

    if (!auto) return <Spinner />

    return (
        <div className="container mt-4 border border-dark alert alert-primary ">

            <h2>
                <strong>
                    <u>
                        Editar Datos del Auto
                    </u>
                </strong>
            </h2>


            <div className="mt-4 border border-dark p-4">

                <h4>
                    <strong>
                        <u>
                            Datos del Vehiculo
                        </u>
                    </strong>
                </h4>

                <div className="row">

                    <div className="col-md-4">
                        <label>
                            <u>
                                Patente
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Patente" value={auto.patente} readOnly />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Marca y Modelo
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Marca y Modelo" ref={autoRef} defaultValue={auto.auto} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Kilometraje
                            </u>: {auto.kilometros}
                        </label>
                        <input type="text" className="form-control" placeholder="Kilometraje" ref={kilometrosRef} defaultValue={auto.kilometros} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Nro Serie del Motor
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Nro Serie del Motor" ref={motorRef} defaultValue={auto.motor} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Nro Serie del Chasis
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Nro Serie del Chasis" ref={chasisRef} defaultValue={auto.motor} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Modelo (Año de fabricacion)
                            </u>
                        </label>
                        <input type="number" className="form-control" placeholder="Modelo (Año de fabricacion)" ref={modeloRef} defaultValue={auto.modelo} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Responable
                            </u>: {auto.responsable}
                        </label>

                        <select
                            className="custom-select"
                            name="operador"
                            ref={responsableRef}
                        >
                            <option selected value="no" > Elige una Opcion </option>
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

            <div className="mt-4  border border-dark p-4">

                {errores ? (<div className="alert alert-danger border border-dark text-center text-uppercase mt-4 mb-4">
                    {errores}
                </div>) : null}

                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-primary btn-block" onClick={editarAuto}>Editar</button>
                    </div>

                    <div className="col-md-6">
                        <a href="/sepelio/autos/listado" className="btn btn-danger btn-block">Cancelar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormEditarAuto
