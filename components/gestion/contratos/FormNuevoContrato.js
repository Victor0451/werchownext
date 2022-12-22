import React from 'react'

const FormNuevoContrato = ({
    locadores,
    apeNomL1Ref,
    dniL1Ref,
    domL1Ref,
    apeNomL2Ref,
    dniL2Ref,
    domL2Ref,
    montoRef,
    fechaIniRef,
    duracionRef,
    locadorRef,
    localRef,
    ufRef,
    generarContrato,
    errores

}) => {
    return (
        <div className='container mt-4 border border-dark p-4 list'>

            <h2>
                <strong>
                    <u>
                        Generar Contrato
                    </u>
                </strong>
            </h2>

            <div className='border border-dark mt-4 p-4'>

                <h4>
                    <u>
                        Primer Locatario
                    </u>
                </h4>

                <div className='row '>


                    <div className='col-md-6 mt-4'>

                        <label>
                            <u>
                                Apellido y Nombre
                            </u>
                        </label>

                        <input className='form-control' type={"text"} ref={apeNomL1Ref} />
                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                DNI
                            </u>
                        </label>

                        <input className='form-control' type={"number"} ref={dniL1Ref} />
                    </div>

                    <div className='col-md-8 mt-4'>

                        <label>
                            <u>
                                Domicilio
                            </u>
                        </label>

                        <input className='form-control' type={"text"} ref={domL1Ref} />
                    </div>

                </div>

                <hr className='border border-dark mt-5' />

                <h4 className='mt-5'>
                    <u>
                        Segundo Locatario
                    </u>
                </h4>

                <div className='row '>


                    <div className='col-md-6 mt-4'>

                        <label>
                            <u>
                                Apellido y Nombre
                            </u>
                        </label>

                        <input className='form-control' type={"text"} ref={apeNomL2Ref} />
                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                DNI
                            </u>
                        </label>

                        <input className='form-control' type={"number"} ref={dniL2Ref} />
                    </div>

                    <div className='col-md-8 mt-4'>

                        <label>
                            <u>
                                Domicilio
                            </u>
                        </label>

                        <input className='form-control' type={"text"} ref={domL2Ref} />
                    </div>

                </div>

                <hr className='border border-dark mt-5' />

                <h4 className='mt-5'>
                    <u>
                        Detalles
                    </u>
                </h4>

                <div className='row'>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Monto mensual
                            </u>
                        </label>

                        <input className='form-control' type={"number"} ref={montoRef} />
                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Fecha Inicio
                            </u>
                        </label>

                        <input className='form-control' type={"date"} ref={fechaIniRef} />
                    </div>


                    {!locadores ? (
                        <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Cargando locadores...</div>
                    ) :
                        (
                            <div className="col-md-4 mt-4">
                                <label>
                                    Locador:
                                </label>

                                <select className="custom-select" ref={locadorRef}>
                                    <option value="no" >Selecciona una opcion</option>
                                    {locadores.map((s, index) => (
                                        <option key={index} value={s.value}>{s.label}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Duracion (años)
                            </u>
                        </label>

                        <input className='form-control' type={"number"} ref={duracionRef} />
                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Local (Ej: OFICINA 1 || LOCAL 2)
                            </u>
                        </label>

                        <input className='form-control' type={"text"} ref={localRef} />

                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Unidad Funcional
                            </u>
                        </label>

                        <input className='form-control' type={"text"} ref={ufRef} />
                    </div>

                </div>


                {
                    errores ? (
                        <div className='alert alert-danger border border-dark mt-4 mb-4 text-center text-uppercase'>
                            {errores}
                        </div>
                    ) : null
                }


                <div className='row justify-content-end mt-5'>

                    <button className='btn btn-primary' onClick={generarContrato} >
                        Generar Contrato
                    </button>

                    <a href='/' className='btn btn-danger ml-1 '>
                        Cancelar
                    </a>

                </div>

            </div>

        </div>
    )
}

export default FormNuevoContrato