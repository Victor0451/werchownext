import moment from "moment-timezone";
import React from 'react'
import Spinner from '../../../layout/Spinner'

const ModalCalendarioVisita = ({ detVisi }) => {

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Detalles de la Visita</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4">

                        {!detVisi ? (<Spinner />) :

                            (
                                <div className="row list border border-dark p-4">

                                    <div className="col-md-4">
                                        <label>
                                            <strong>
                                                <u>
                                                    Fecha
                                                </u>
                                            </strong>
                                        </label>
                                        <input className="form-control" readOnly value={moment(detVisi.start).format('DD/MM/YYYY')} />
                                    </div>

                                    <div className="col-md-4">
                                        <label>
                                            <strong>
                                                <u>
                                                    Visita N°:
                                                </u>
                                            </strong>
                                        </label>
                                        <input className="form-control" readOnly value={detVisi.nvisita} />
                                    </div>

                                    {
                                        detVisi.pago === 0 ? (
                                            <div className="col-md-4 alert alert-info border border-dark text-center text-uppercase">
                                                El socio ya finalizo el pago del kit, por ende el monto a cobrar sera el acordado por el DR/A en concepto de consulta.
                                            </div>
                                        ) : (
                                            <div className="col-md-4">
                                                <label>
                                                    <strong>
                                                        <u>
                                                            A pagar:
                                                        </u>
                                                    </strong>
                                                </label>
                                                <input className="form-control" readOnly value={detVisi.pago} />
                                            </div>
                                        )
                                    }


                                    <div className="mt-3 col-md-12">
                                        <label>
                                            <strong>
                                                <u>
                                                    Detalle
                                                </u>
                                            </strong>
                                        </label>

                                        <textarea rows="10" className="form-control text-dark" readOnly value={detVisi.title} />
                                    </div>

                                </div>

                            )}


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCalendarioVisita
