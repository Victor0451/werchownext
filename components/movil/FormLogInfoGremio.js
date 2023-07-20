import React from 'react'

const FormLogInfoGremio = ({
    verificarSocio,
    dniRef,
    errores,
    info,
    g
}) => {
    return (
        <div className='container mt-4 mb-4 list border border-dark p-4'>

            <h2>
                <strong>
                    <u>
                        Ingresa tu DNI
                    </u>
                </strong>
            </h2>

            <div className='mt-4 border border-dark p-4'>

                <div className='row'>

                    <div className='col-md-6'>

                        <label>
                            <u>
                                Ingresa tu DNI
                            </u>
                        </label>

                        <input className='form-control' type={"text"} ref={dniRef} />
                    </div>

                    <div className='col-md-6'>
                        <button className='mt-4 btn btn-primary' onClick={verificarSocio}>
                            Verificar
                        </button>
                    </div>

                    {
                        errores ? (

                            <div className='col-md-12 border border-dark mt-4 mb-4 alert alert-danger text-center text-uppercase' >
                                {
                                    errores
                                }
                            </div>

                        ) : null
                    }

                    {
                        info ? (

                            <div className='col-md-12 border border-dark mt-4 mb-4 alert alert-primary text-center text-uppercase' >
                                {
                                    info
                                }

                                <a className='btn btn-success mt-2' href={`/movil/reggremios?f=${g}`}>
                                    Registrarme
                                </a>
                            </div>

                        ) : null
                    }

                </div>

            </div>

        </div>
    )
}

export default FormLogInfoGremio