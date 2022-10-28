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
    generarOrdenPago
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

                <div className='col-md-3 mt-4'>
                    <label>
                        <u>
                            Importe
                        </u>
                    </label>

                    <input type={"number"} className='form-control' ref={totalContRef} />

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