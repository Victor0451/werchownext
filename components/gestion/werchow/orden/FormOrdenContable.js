import React from 'react'
import moment from 'moment'
import Router from 'next/router'

const FormOrdenContable = ({
    norden,
    cuitContRef,
    provContRef,
    nfacturaContRef,
    observacionContRef,
    totalContRef,
    generarOrdenPago,
    tipoFacturaContRef,
    fechaPagoContRef,
    tipoFac
}) => {


    return (
        <div className=' border border-dark p-4 mt-4'>

            <div className='row'>


                <div className='col-md-2'>
                    <label>
                        <u>
                            N° Orden
                        </u>
                    </label>

                    <input type={"text"} className='form-control' defaultValue={norden} readOnly />

                </div>

                <div className='col-md-3'>
                    <label>
                        <u>
                            Fecha
                        </u>
                    </label>

                    <input type={"text"} className='form-control' defaultValue={moment().format('DD/MM/YYYY')} readOnly />

                </div>

                <div className='col-md-4'>
                    <label>
                        <u>
                            Proveedor
                        </u>
                    </label>

                    <input type={"text"} className='form-control' ref={provContRef} />

                </div>


                <div className='col-md-3'>
                    <label>
                        <u>
                            CUIT/CUIL
                        </u>
                    </label>

                    <input type={"text"} className='form-control' ref={cuitContRef} />

                </div>

                <div className='col-md-3 mt-4'>
                    <label>
                        <u>
                            N° Factura
                        </u>
                    </label>

                    <input type={"text"} className='form-control' ref={nfacturaContRef} />

                </div>

                {tipoFac ? (
                    <div className="col-md-4 mt-4">
                        <label>
                            Tipo Factura:
                        </label>

                        <select className="custom-select" ref={tipoFacturaContRef}>
                            <option value="no" >Selecciona una opcion</option>
                            {tipoFac.map((m, index) => (
                                <option key={index} value={m.value}>{m.label}</option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="col-md-4 alert alert-info  border border-dark text-center text-uppercase">
                        No hay facturas registrados
                    </div>
                )}

                <div className='col-md-3 mt-4'>
                    <label>
                        <u>
                            Importe
                        </u>
                    </label>

                    <input type={"number"} className='form-control' ref={totalContRef} />

                </div>

                <div className='col-md-3 mt-4'>
                    <label>
                        <u>
                            Fecha a Pagar
                        </u>
                    </label>

                    <input type={"date"} className='form-control' ref={fechaPagoContRef} />

                </div>

                <div className='col-md-12 mt-4'>
                    <label>
                        <u>
                            Observacion
                        </u>
                    </label>

                    <textarea rows={5} className='form-control' ref={observacionContRef} />

                </div>

            </div>

            <div className='row d-flex justify-content-end'>
                <div className='col-md-3 '>
                    <label>

                    </label>
                    <button className='btn btn-primary btn-block mt-2' onClick={() => generarOrdenPago("contable")}>
                        Generar Orden
                    </button>
                </div>

                <div className='col-md-3 '>
                    <label>

                    </label>
                    <button className='btn btn-danger btn-block mt-2' onClick={() => { Router.reload() }}>
                        Cancelar
                    </button>
                </div>
            </div>

        </div>
    )
}

export default FormOrdenContable