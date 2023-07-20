import React from 'react'

const Notificaciones = ({
    msj,
    prest,
    orde

}) => {
    return (
        <div className='container border border-dark mt-4 mb-4 p-4 list'>

            <h3>
                <u>
                    Notificaciones
                </u>
            </h3>



            <div className=' mt-4'>

                <div className='d-flex justify-content-center'>

                    <div className='col-md-4'>
                        <a href='/gestion/werchow/orden/autorizacionordenes' className="btn btn-sm btn-primary btn-block">
                            Ordenes de Pago Pendientes

                            {orde > 0 ? (

                                <div>
                                    <span className="badge badge-danger">{orde}</span>
                                </div>
                            ) : null}

                        </a>
                    </div>

                    <div className='col-md-4'>
                        <a href='/prestamos/aprobarprestamos' className="btn btn-sm btn-primary btn-block">
                            Sub. Cont. Fliar Pendientes

                            {prest > 0 ? (
                                <div>
                                    <span className="badge badge-danger">{prest}</span>
                                </div>
                            ) : null}

                        </a>
                    </div>

                    <div className='col-md-4'>
                        <a href='/mensajeria/nuevo' className="btn btn-sm btn-primary btn-block">
                            Mails No Leidos

                            {msj > 0 ? (
                                <div>
                                    <span className="badge badge-danger">{msj}</span>
                                </div>

                            ) : null}

                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Notificaciones