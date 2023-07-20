import React from 'react'
import FormNuevoMensaje from './FormNuevoMensaje'

const ModalNuevoMensaje = ({
    guardarDescrip,
    registrarMsg,
    errores,
    destinatarioRef,
    asuntoRef,
    operadores,
    codmail,
    agregarDestino,
    destino,
    eliminarDestino,
    cajas,
    url,
    urlRef,
    agregarURL,
    eliminarURL,
}) => {
    return (
        <div className="modal fade" id="nuevomsj" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Redactar Mensaje</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4">

                        <FormNuevoMensaje
                            guardarDescrip={guardarDescrip}
                            registrarMsg={registrarMsg}
                            errores={errores}
                            destinatarioRef={destinatarioRef}
                            asuntoRef={asuntoRef}
                            operadores={operadores}
                            codmail={codmail}
                            agregarDestino={agregarDestino}
                            destino={destino}
                            eliminarDestino={eliminarDestino}
                            cajas={cajas}
                            url={url}
                            urlRef={urlRef}
                            agregarURL={agregarURL}
                            eliminarURL={eliminarURL}
                        />

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNuevoMensaje