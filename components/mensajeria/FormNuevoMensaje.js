import React from 'react'
import FroalaEditor from '../layout/FroalaEditor'
import FormSubirArchivo from './FormSubirArchivo'



const FormNuevoMensaje = ({
    guardarDescrip,
    registrarMsg,
    errores,
    destinatarioRef,
    asuntoRef,
    operadores,
    codmail
}) => {



    return (
        <div className='container border border-dark p-4 mt-4 list'>

            <h2>
                <strong>
                    <u>
                        Nuevo Mensaje
                    </u>
                </strong>
            </h2>

            <div className='border border-dark p-4 mt-4'>

                <div className="row">

                    {operadores ? (
                        <div className="col-md-4">
                            <label>Destinatario</label>
                            <select className="custom-select" ref={destinatarioRef}>
                                <option value="no" selected>
                                    Selecciona el destinatario
                                </option>

                                {operadores.map((o, index) => (
                                    <option key={index} value={o.usuario}>{o.usuario}</option>
                                ))}

                            </select>
                        </div>
                    ) : (<div className="col-md-4 alert alert-info border border-dark text-center text-uppercase">
                        Cargando Operadores...
                    </div>)}


                    <div className="col-md-8">
                        <label>Asunto</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fecha"
                            ref={asuntoRef}
                            placeholder="Asunto"
                        />
                    </div>

                    <div className="col-md-12 mt-4">
                        <FroalaEditor
                            guardarDescrip={guardarDescrip}
                        />
                    </div>


                    <div className="col-md-12 mt-4">

                        <FormSubirArchivo codmail={codmail} />
                        <FormSubirArchivo codmail={codmail} />
                        <FormSubirArchivo codmail={codmail} />
                        <FormSubirArchivo codmail={codmail} />
                        <FormSubirArchivo codmail={codmail} />
                    </div>


                </div>


                {errores && (
                    <div className="mt-4 border border-dark alert alert-danger text-center text-uppercase">
                        {errores}
                    </div>
                )}

                <div className="row mt-4 p-4 d-flex justify-content-end">
                    <button onClick={registrarMsg} className="btn btn-primary mr-1">
                        Enviar
                    </button>
                    <button className="btn btn-danger">
                        Cancelar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default FormNuevoMensaje