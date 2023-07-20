import React from 'react'
import ListadoMensajes from './ListadoMensajes'
import ListadoMensajesEnviados from './ListadoMensajesEnviados'

const CentroDeMensajeria = ({
    mensajes,
    guardarMensaje,
    msjLeido,
    traerAchivos,
    mensajesEnv,
}) => {
    return (
        <div className='container list border border-dark mt-4 p-4'>

            <h2 className='mb-4'>
                <u>
                    Centro de Mensajeria Interna
                </u>
            </h2>

            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>
                                    Bandeja de Entrada
                                </strong>
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">

                            {mensajes ? (
                                <ListadoMensajes
                                    mensajes={mensajes}
                                    guardarMensaje={guardarMensaje}
                                    msjLeido={msjLeido}
                                    traerAchivos={traerAchivos}
                                />
                            ) : (<div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4 container">
                                No tienes mensajes en tu bandeja de entrada
                            </div>)}

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>
                                    Mail Enviados
                                </strong>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">

                            {mensajesEnv ? (
                                <ListadoMensajesEnviados
                                    mensajesEnv={mensajesEnv}
                                    guardarMensaje={guardarMensaje}
                                    msjLeido={msjLeido}
                                    traerAchivos={traerAchivos}
                                />
                            ) : (<div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4 container">
                                No tienes mensajes en tu casilla de enviados
                            </div>)}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CentroDeMensajeria