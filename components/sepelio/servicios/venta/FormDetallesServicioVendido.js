import React from 'react'
import ImpresionSolicitudServicio from '../ImpresionSolicitudServicio'
import moment from 'moment'
import Spinner from '../../../layout/Spinner'

const FormDetallesServicioVendido = ({ detalleServicio, detalleVenta, detalleAtaud }) => {
    if (!detalleVenta) return <Spinner />

    console.log(detalleServicio)
    return (
        <div className="mt-4 container alert alert-primary border border-dark p-4">

            <div className="">
                <h3>
                    <strong>
                        <u>
                            Detalles Venta
        </u>
                    </strong>
                </h3>
                <div className="row mt-4 border border-dark p-4">
                    <div className="col-md-4">
                        <label>
                            Fecha de Venta
                        </label>
                        <input className="form-control" value={moment(detalleVenta.fecha_venta).utcOffset("+000").locale('es').format('llll')} />
                    </div>

                    <div className="col-md-3">
                        <label>
                            Vendedor
                        </label>
                        <input className="form-control" value={detalleVenta.operador_venta} />
                    </div>

                    <div className=" col-md-4">
                        <label>
                            Solicitante
                        </label>
                        <input className="form-control" value={`${detalleVenta.apellido_sol}, ${detalleVenta.nombre_sol}`} />
                    </div>

                    <div className="mt-4 col-md-3">
                        <label>
                            DNI
                        </label>
                        <input className="form-control" value={detalleVenta.dni_sol} />
                    </div>

                    <div className="mt-4 col-md-2">
                        <label>
                            Monto
                        </label>
                        <input className="form-control" value={detalleVenta.monto} />
                    </div>

                </div>



                <ImpresionSolicitudServicio servicio={detalleServicio} ataud={detalleAtaud} />

            </div>


        </div>
    )
}

export default FormDetallesServicioVendido
