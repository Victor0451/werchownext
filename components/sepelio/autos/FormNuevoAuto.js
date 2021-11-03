import React from 'react'

const FormNuevoAuto = ({

    patenteRef,
    autoRef,
    kilometrosRef,
    responsableRef,
    motorRef,
    chasisRef,
    modeloRef,
    empresaRef,
    nroPolizaRef,
    vencimientoRef,
    coberturaRef,
    errores,
    registrarAuto

}) => {
    return (
        <div className="container mt-4 border border-dark alert alert-primary ">

            <h2>
                <strong>
                    <u>
                        Nuevo Auto
                    </u>
                </strong>
            </h2>


            {errores ? (<div className="alert alert-danger border border-dark text-center text-uppercase mt-4 mb-4">
                {errores}
            </div>) : null}

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
                        <input type="text" className="form-control" placeholder="Patente" ref={patenteRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Marca y Modelo
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Marca y Modelo" ref={autoRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Kilometraje
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Kilometraje" ref={kilometrosRef} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Nro Serie del Motor
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Nro Serie del Motor" ref={motorRef} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Nro Serie del Chasis
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Nro Serie del Chasis" ref={chasisRef} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Modelo (Año de fabricacion)
                            </u>
                        </label>
                        <input type="number" className="form-control" placeholder="Modelo (Año de fabricacion)" ref={modeloRef} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Responable
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Responable" ref={responsableRef} />
                    </div>

                </div>

            </div>


            <hr className="mt-4 mb-4 border border-dark" />



            <div className="mt-4 border border-dark p-4 ">

                <h4>
                    <strong>
                        <u>
                            Poliza de Seguro
                        </u>
                    </strong>
                </h4>

                <div className="row">

                    <div className="col-md-4">
                        <label>
                            <u>
                                Empresa
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Empresa" ref={empresaRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Nro Poliza
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Nro Poliza" ref={nroPolizaRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Vencimiento
                            </u>
                        </label>
                        <input type="date" className="form-control" placeholder="Vencimiento" ref={vencimientoRef} />
                    </div>
                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Cobertura
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Cobertura" ref={coberturaRef} />
                    </div>
                </div>
            </div>

            <div className="mt-4  border border-dark p-4">
                <div className="row">
                    <div className="col-md-6">
                        <a href="/sepelio/autos/listado" className="btn btn-danger btn-block">Cancelar</a>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary btn-block" onClick={registrarAuto}>Registrar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormNuevoAuto
