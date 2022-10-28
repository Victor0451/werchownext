import React from 'react'
import ListadoDetalle from './ListadoDetalle'
import Spinner from '../../../layout/Spinner'
import moment from 'moment'

const ModalImpresion = ({
    listDetalle,
    orde,
    imprimir
}) => {

    if (!orde) return <Spinner />

    return (
        <div className="modal fade" id="ModalImpresion" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Orden de Pago: {orde.norden}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" id='imp'>


                        <div className='border border-dark p-4 mt-4' >

                            <h2>
                                <strong>
                                    <u>
                                        Orden de Pago: {orde.norden}
                                    </u>
                                </strong>
                            </h2>

                            <div className='row mt-5'>


                                <div className='col-md-2'>
                                    <label>
                                        <u>
                                            N° Orden
                                        </u>
                                    </label>

                                    <input type={"text"} className='form-control' value={orde.norden} />

                                </div>

                                <div className='col-md-2'>
                                    <label>
                                        <u>
                                            Orden Tipo
                                        </u>
                                    </label>

                                    <input type={"text"} className='form-control' value={orde.tipo_orden} />

                                </div>

                                <div className='col-md-3'>
                                    <label>
                                        <u>
                                            Fecha
                                        </u>
                                    </label>

                                    <input type={"text"} className='form-control' value={orde.fecha} />

                                </div>

                                <div className='col-md-4'>
                                    <label>
                                        <u>
                                            Proveedor
                                        </u>
                                    </label>

                                    <input type={"text"} className='form-control' value={orde.nombre} />

                                </div>


                                <div className='col-md-3 mt-4'>
                                    <label>
                                        <u>
                                            CUIT/CUIL
                                        </u>
                                    </label>

                                    <input type={"text"} className='form-control' value={orde.cuit_cuil} />

                                </div>

                                <div className='col-md-3 mt-4'>
                                    <label>
                                        <u>
                                            N° Factura
                                        </u>
                                    </label>

                                    <input type={"text"} className='form-control' value={orde.nfactura} />

                                </div>

                                <div className='col-md-3 mt-4'>
                                    <label>
                                        <u>
                                            Importe
                                        </u>
                                    </label>

                                    <input type={"number"} className='form-control' value={orde.total} />

                                </div>


                                <div className='col-md-3 mt-4'>
                                    <label>
                                        <u>
                                            Generada por:
                                        </u>
                                    </label>

                                    <input type={"text"} className='form-control' value={orde.operador_carga} />
                                </div>


                                {orde.autorizado === 1 ? (

                                    <>
                                        <div className='col-md-3 mt-4'>
                                            <label>
                                                <u>
                                                    Autorizada por:
                                                </u>
                                            </label>

                                            <input type={"text"} className='form-control' value={orde.operador_autorizacion} />
                                        </div>


                                        <div className='col-md-3 mt-4'>
                                            <label>
                                                <u>
                                                    Fecha de Autorizacion:
                                                </u>
                                            </label>

                                            <input type={"text"} className='form-control' value={moment(orde.fecha_autorizacion).format('DD/MM/YYYY')} />
                                        </div>
                                    </>
                                ) : orde.autorizado === 0 ? (

                                    <div className='col-md-12 mt-4'>
                                        <div className='alert alert-info mt-4 mb-4 border border-dark text-center text-uppercase'>
                                            Esta orden esta pendiente de autorizacion, por ende no tiene validez para realizar el pago.
                                        </div>
                                    </div>

                                ) : null}


                                <div className='col-md-12 mt-4'>
                                    <label>
                                        <u>
                                            Observacion
                                        </u>
                                    </label>

                                    <textarea rows={5} className='form-control' value={orde.observacion} />

                                </div>

                            </div>


                        </div>

                        {listDetalle.length > 0 ? (
                            <ListadoDetalle listado={listDetalle} />
                        ) : null}

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={imprimir}>Imprimir</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalImpresion