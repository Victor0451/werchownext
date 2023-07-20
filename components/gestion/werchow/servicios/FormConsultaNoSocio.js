import React from 'react'

const FormConsultaNoSocio = ({
    nosocio,
    sucursales,
    espec,
    medicos,
    traerMedicosPorSuc,
    especialidadRef,
    sucursalRef,
    medicoRef,
    traerDetalleMedSelec,
    detalleMed,
    registrarOrdenUsos
}) => {
    return (
        <div className='container border border-dark p-4 mt-4 mb-4 list'>


            <div className="row border border-dark list p-4">

                {!sucursales ? (
                    <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Cargando Sucursales...</div>
                ) :
                    (
                        <div className="col-md-4">
                            <label>
                                Sucursal:
                            </label>

                            <select className="custom-select" ref={sucursalRef}>
                                <option value="no" >Selecciona una opcion</option>
                                {sucursales.map((s, index) => (
                                    <option key={index} value={s.codigo}>{s.sucursal}</option>
                                ))}
                            </select>
                        </div>
                    )}

                {!espec ? (
                    <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Selecciona una Sucursal Para Traer las Especialidades</div>
                ) :
                    (
                        <div className="col-md-4">
                            <label>
                                Especialidades:
                            </label>

                            <select className="custom-select" ref={especialidadRef} onChange={() => traerMedicosPorSuc('C')}>
                                <option selected value="no">Selecciona una opcion</option>
                                {espec.map((s, index) => (
                                    <option key={index} value={s.ESPECIAL}>{s.NOMBRE}</option>
                                ))}
                            </select>
                        </div>
                    )}

                {!medicos ? (
                    <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Selecciona una Especialidad Para Traer Medicos</div>
                ) :
                    (
                        <div className="col-md-4">
                            <label>
                                Medicos:
                            </label>
                            <select className="custom-select" ref={medicoRef} onChange={() => traerDetalleMedSelec('C')}>
                                <option selected value="no">Selecciona una opcion</option>
                                {medicos.map((s, index) => (
                                    <option key={index} value={s.COD_PRES}>{s.NOMBRE}</option>
                                ))}
                            </select>
                        </div>
                    )}

            </div>


            {nosocio ? (

                <>
                    <hr className="mt-4 mb-4" />

                    <div className="border border-dark p-4 mt-4">

                        <h4>
                            <u>Detalle Paciente</u>
                        </h4>

                        <div className="row border border-dark p-4 mt-4">

                            <div className="col-md-8">
                                <label>
                                    <u>
                                        Paciente
                                    </u>
                                </label>
                                <input type="text" className="form-control" value={nosocio.nosocio} />
                            </div>

                            <div className="col-md-4">
                                <label>
                                    <u>
                                        DNI
                                    </u>
                                </label>
                                <input type="text" className="form-control" value={nosocio.dni} />
                            </div>

                            <div className="col-md-4 mt-4">
                                <label>
                                    <u>
                                        Telefono
                                    </u>
                                </label>
                                <input type="text" className="form-control" value={nosocio.telefono} />
                            </div>
                        </div>
                    </div>
                </>
            ) : null}


            {detalleMed ? (

                <>
                    <hr className="mt-4 mb-4" />

                    <div className="border border-dark p-4">

                        <h4>
                            <u>Detalle del Medico</u>
                        </h4>

                        <div className="row border border-dark p-4 mt-4">

                            <div className="col-md-4">
                                <label>
                                    <u>
                                        Dr
                                    </u>
                                </label>
                                <input type="text" className="form-control" value={detalleMed.NOMBRE} />
                            </div>

                            <div className="col-md-8">
                                <label>
                                    <u>
                                        Horarios
                                    </u>
                                </label>
                                <input type="text" className="form-control" value={`${detalleMed.HORARIO1} - ${detalleMed.HORARIO2}`} />
                            </div>

                            <div className="col-md-4 mt-4">
                                <label>
                                    <u>
                                        Telefono
                                    </u>
                                </label>
                                <input type="text" className="form-control" value={detalleMed.TELEFONOS} />
                            </div>

                            <div className="col-md-8 mt-4">
                                <label>
                                    <u>
                                        Direccion
                                    </u>
                                </label>
                                <input type="text" className="form-control" value={detalleMed.DIRECCION} />
                            </div>

                        </div>
                    </div>

                    <div className="col-md-12 d-flex justify-content-end mt-4">
                        <div className="mt-4 alert alert-info text-center text-uppercase border border-dark">
                            <u>Coseguro</u>:
                            {
                                detalleMed.CON_PAGA < 1500 ? (
                                    <>
                                        ${detalleMed.CON_PAGA}
                                    </>
                                ) : detalleMed.CON_PAGA >= 1500 ? (
                                    <>
                                        $1500
                                    </>
                                ) : null
                            }

                        </div>
                    </div>
                </>
            ) : null}

            <div className="row p-4 mt-4">
                <div className="col-md-12 d-flex justify-content-end">
                    <button type="button" className="btn btn-primary" onClick={() => registrarOrdenUsos()}>
                        Generar Orden
                    </button>
                    <a
                        className="ml-1 btn btn-danger "
                        href="/gestion/werchow/servicios/emision"
                    >
                        Cancelar
                    </a>

                </div>
            </div>
        </div>
    )
}

export default FormConsultaNoSocio