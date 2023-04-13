import React from 'react'

const FormRegGremios = ({
    registrarNoSocio,
    noSocioRef,
    dniRef,
    mailRef,
    telefonoRef,
    obraSocRef,
    errores,
    Router,
    g
}) => {
    return (
        <div className='list container border border-dark p-4 mt-4 mb-4'>

            <div className="col-md-12 d-flex justify-content-center">

                <img src="/img/logo.png" className="werchowlogo" />

            </div>



            <div className='border border-dark mt-4 mb-4 p-4'>
                <h4>
                    <strong>
                        <u>
                            Complete los datos para participar del sorteo
                        </u>
                    </strong>
                </h4>

                <div className='row'>

                    <div className='col-md-8 mt-4'>

                        <label>
                            <u>
                                Apellido y Nombre
                            </u>
                        </label>

                        <input type="text" className="form-control" ref={noSocioRef} />

                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                DNI
                            </u>
                        </label>

                        <input type="number" className="form-control" ref={dniRef} />

                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Celular
                            </u>
                        </label>

                        <input type="text" className="form-control" ref={telefonoRef} defaultValue="388-15" />

                    </div>


                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Mail
                            </u>
                        </label>

                        <input type="mail" className="form-control" ref={mailRef} placeholder="Ej: usuario@mail.com" />

                    </div>


                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Obra Social
                            </u>
                        </label>

                        <input type="text" className="form-control" ref={obraSocRef} />

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

                    <div className='col-md-12 mt-4 d-flex justify-content-between'>

                        <button className='btn btn-secondary '
                            onClick={() => Router.push({
                                pathname: '/movil/infogremios',
                                query: {
                                    f: 0,
                                    g: g
                                }

                            })}
                        >
                            Mas Info
                        </button>

                        <button className='btn btn-primary '
                            onClick={registrarNoSocio}
                        >
                            Registrar
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormRegGremios