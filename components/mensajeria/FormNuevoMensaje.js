import React from 'react'
import FroalaEditor from '../layout/FroalaEditor'
import DestinatarioBadge from './DestinatarioBadge'
import FormSubirArchivo from './FormSubirArchivo'



const FormNuevoMensaje = ({
    guardarDescrip,
    registrarMsg,
    errores,
    destinatarioRef,
    asuntoRef,
    operadores,
    codmail,
    agregarDestino,
    destino,
    eliminarDestino
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

                <div className='alert alert-info border border-dark mb-4 text-center text-uppercase'>
                    Puedes elegir varios destinatarios para enviar el mail.
                    En caso de equivocarte o eliminar un destinatario seleccionado, haz click en la "X" al lado de su nombre
                </div>

                <div className="row mt-4">

                    {operadores ? (
                        <>
                            <div className="col-md-4">
                                <label>
                                    <u>
                                        Elegir Destinatario
                                    </u>
                                </label>
                                <select className="custom-select" ref={destinatarioRef}>
                                    <option value="no" selected>
                                        Selecciona el destinatario
                                    </option>

                                    {operadores.map((o, index) => (
                                        <option key={index} value={o.usuario}  >{o.usuario}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="col-md-4 mt-4">
                                <label>

                                </label>
                                <button className=' btn btn-info' onClick={agregarDestino}>
                                    Agregar Destinatario
                                </button>
                            </div>
                        </>
                    ) : (<div className="col-md-4 alert alert-info border border-dark text-center text-uppercase">
                        Cargando Operadores...
                    </div>)}


                    <div className="col-md-12 mt-4">

                        <label>
                            <u>
                                Destinatarios:
                            </u>
                        </label>


                        {
                            destino.length > 0 ? (

                                <div className='row'>
                                    {
                                        destino.map((d, index) => (
                                            <DestinatarioBadge
                                                dest={d}
                                                index={index}
                                                eliminarDestino={eliminarDestino}
                                            />
                                        ))
                                    }
                                </div>

                            ) : null
                        }


                    </div>

                    <div className="col-md-8 mt-4">
                        <label>
                            <u>
                                Asunto
                            </u>
                        </label>
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
                </div>
            </div>

        </div >
    )
}

export default FormNuevoMensaje