import React from 'react'
import LegajoArchivos from './LegajoArchivos'

const ModalLeerMensaje = ({
    msj,
    archivos,

}) => {

    if (!msj) return null

    return (
        <div className="modal fade" id="leermsj" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Mensaje</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4">


                        <div className='border border-dark p-4'>

                            <div className='row'>

                                <div className='col-md-4'>

                                    <label>Envia:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={msj.envia}
                                        readOnly
                                    />

                                </div>

                                <div className='col-md-8'>

                                    <label>Asunto:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={msj.asunto}
                                        readOnly
                                    />

                                </div>

                                <div className='col-md-12 mt-4'>

                                    <label>Mensaje:</label>
                                    <textarea
                                        rows={5}
                                        className="form-control"
                                        value={msj.descrip}
                                        readOnly
                                    />

                                </div>

                            </div>


                            {msj.url_caja ? (
                                <div className='mt-4'>

                                    <h4>
                                        <strong>
                                            <u>
                                                Caja adjuntada
                                            </u>
                                        </strong>
                                    </h4>

                                    <div className='col-md-12 mt-4'>

                                        <a href={`${msj.url_caja}`} target="_blank">
                                            <strong >Este enlace te lleva a la caja adjuntada.</strong>
                                        </a>

                                    </div>

                                </div>
                            ) : null}


                            <LegajoArchivos
                                archivos={archivos}

                            />

                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLeerMensaje