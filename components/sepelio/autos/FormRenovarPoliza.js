import React from 'react'
import Spinner from '../../layout/Spinner'
import moment from 'moment'

const FormRenovarPoliza = ({ row, nuevaPolRef, nuevoVencimientoRef, nuevaEmpresaRef, errores }) => {

    if (!row) return <Spinner />

    return (
        <div className="container mt-4 border border-dark list">

            <h2>
                <strong>
                    <u>
                        Renovar Poliza
                    </u>
                </strong>
            </h2>


            {errores ? (
                <div className="alert alert-danger mt-4 mb-4 border border-dark text-center text-uppercase">
                    {errores}
                </div>
            ) : null}

            <div className="border border-dark mt-4 p-4">
                <div className="row">


                    <div className="col-md-4">
                        <label>
                            <u>
                                Auto - Patente
                            </u>
                        </label>
                        <input type="text" className="form-control" defaultValue={`${row.auto} - ${row.patente}`} readOnly />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Empresa Aseguradora
                            </u>
                        </label>
                        <input type="text" className="form-control" defaultValue={row.empresa} readOnly />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Poliza Actual
                            </u>
                        </label>
                        <input type="text" className="form-control" defaultValue={row.nro_poliza} readOnly />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Vencimiento Actual
                            </u>
                        </label>
                        <input type="text" className="form-control" defaultValue={moment(row.vencimiento).format('DD/MM/YYYY')} readOnly />
                    </div>


                </div>

                <hr className="mt-4 mb-4 border border-dark" />

                <div className="row">

                    <div className="col-md-4">
                        <label>
                            <u>
                                Empresa
                            </u>
                        </label>
                        <input type="text" className="form-control" ref={nuevaEmpresaRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Nueva Poliza
                            </u>
                        </label>
                        <input type="number" className="form-control" ref={nuevaPolRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Vencimiento
                            </u>
                        </label>
                        <input type="date" className="form-control" ref={nuevoVencimientoRef} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FormRenovarPoliza
