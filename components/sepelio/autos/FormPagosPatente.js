import React from 'react'
import Spinner from '../../layout/Spinner'
import moment from 'moment'
import ListadoPagoPatente from './ListadoPagosPatente'

const FormPagosPatente = ({
    row,
    pagos,
    regPagPatente,
    mesRef,
    anoRef,
    importeRef,
    codPagoRef,
    fechaRef,
    errores,
    eliminarPago
}) => {

    if (!row) return <Spinner />

    return (
        <div className="container mt-4 mb-4 border border-dark alert alert-primary">

            <div className="row">

                <div className="col-md-12 text-center">
                    <h2>
                        <strong>
                            <u>
                                Registrar Pagos de Patente
                    </u>
                        </strong>
                    </h2>
                </div>
            </div>




            <div className="mt-4 border border-dark p-4">

                <div className="row">


                    <div className="col-md-4">
                        <label>
                            <u>
                                Auto - Patente
                                </u>
                        </label>
                        <input type="text" className="form-control" value={`${row.auto} - ${row.patente}`} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Empresa Aseguradora
                                </u>
                        </label>
                        <input type="text" className="form-control" value={row.empresa} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Poliza Actual
                                </u>
                        </label>
                        <input type="text" className="form-control" value={row.nro_poliza} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Vencimiento Actual
                                </u>
                        </label>
                        <input type="text" className="form-control" value={moment(row.vencimiento).format('DD/MM/YYYY')} />
                    </div>
                </div>

                {/* 
                    */}


                <hr className="mt-4 mb-4 border border-dark" />

                <ListadoPagoPatente pagos={pagos} datatarget='#pagopat' datatoggle="modal" eliminarPago={eliminarPago} />

            </div>

            {/* MODAL FORM PAGO PATENTE */}
            <div className="modal fade" id="pagopat" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registrar Pagos de Patente</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="border border-dark p-4 alert alert-primary" >

                                {errores ? (
                                    <div className="mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase">
                                        {errores}
                                    </div>
                                ) : null}

                                <div className="row ">
                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                Mes
                                </u>
                                        </label>
                                        <input type="number" className="form-control" ref={mesRef} />
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                Año
                                </u>
                                        </label>
                                        <input type="number" className="form-control" ref={anoRef} />
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                Importe
                                </u>
                                        </label>
                                        <input type="number" className="form-control" ref={importeRef} />
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                Fecha
                                </u>
                                        </label>
                                        <input type="date" className="form-control" ref={fechaRef} />
                                    </div>

                                    <div className="col-md-4 mt-4">
                                        <label>
                                            <u>
                                                N° Factura o Referencia de Pago
                                </u>
                                        </label>
                                        <input type="text" className="form-control" ref={codPagoRef} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={() => regPagPatente()}>Registrar Pago</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------ */}


        </div>
    )
}

export default FormPagosPatente
