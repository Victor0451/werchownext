import React from 'react'
import Spinner from '../layout/Spinner'

const FormConsultas = ({
    consultaRef,
    generarConsulta,
    enviarConsulta,
    consul,
    espe
}) => {
    return (
        <div className='container border border-dark mt-4 list p-4'>

            <h2>
                <strong>
                    Generar consultas
                </strong>
            </h2>


            <div className='border border-dark mt-4 p-4'>

                <div className='row'>

                    <div className='col-md-12'>

                        <label>
                            Ingresa la consulta
                        </label>

                        <textarea rows={10} className="form-control" ref={consultaRef} />

                    </div>

                    <div className='col-md-12 d-flex justify-content-end'>

                        <button className='btn btn-primary mt-4' onClick={enviarConsulta}>
                            Enviar
                        </button>

                    </div>

                    <div className='col-md-12 mt-4'>
                        <hr className='' />
                    </div>


                    {
                        espe === true ? (

                            <Spinner />

                        ) : espe === false ? (

                            <div className='col-md-12 mt-4'>

                                <label>
                                    Respuesta
                                </label>

                                <textarea rows={10} className="form-control" value={consul} />

                            </div>

                        ) : null
                    }

                    <div className='col-md-12 d-flex justify-content-end'>

                        <button className='btn btn-primary mt-4' onClick={generarConsulta}>
                            Generar
                        </button>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default FormConsultas