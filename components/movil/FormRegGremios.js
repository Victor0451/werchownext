import React from 'react'

const FormRegGremios = ({
    registrarNoSocio,
    noSocioRef,
    dniRef,
    mailRef,
    telefonoRef,
    obraSocRef,
    otraOSRef,
    errores,
    Router,
    g,
    handleChange,
    otroCamp
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

                        <select
                            className="custom-select"
                            defaultValue={"no"}
                            ref={obraSocRef}
                            onChange={handleChange}
                        >
                            <option value="no">
                                Elige una Opcion
                            </option>

                            <option value="ISJ">ISJ</option>
                            <option value="OSDE">OSDE</option>
                            <option value="PAMI">PAMI</option>
                            <option value="IOSFA">IOSFA</option>
                            <option value="AYE">A Y E ( agua y energía)</option>
                            <option value="SANCOR">SANCOR</option>
                            <option value="SWISS MEDICAL">SWISS MEDICAL</option>
                            <option value="BRAMED">BRAMED</option>
                            <option value="OSPE">OSPE</option>
                            <option value="OSPEDYC">OSPEDYC</option>
                            <option value="OSAM">OSAM</option>
                            <option value="OSECAC">OSECAC </option>
                            <option value="SALUD JUJUY">SALUD JUJUY</option>
                            <option value="PODER JUDICIAL">PODER JUDICIAL</option>
                            <option value="OTRA">OTRA</option>
                            <option value="NO TENGO">NO TENGO</option>

                        </select>

                        {
                            otroCamp === true ? (

                                <input type="text" className="form-control mt-4" placeholder='Ingresa tu obra social' ref={otraOSRef} />

                            ) : null
                        }

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