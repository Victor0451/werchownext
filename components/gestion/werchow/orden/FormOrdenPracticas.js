import React from 'react'
import moment from 'moment'
import Router from 'next/router'

const FormOrdenPractica = ({
    medicos,
    medicoPracRef,
    cuitPracRef,
    fechaPagPracRef,
    norden,
    buscarOrdenes,
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

                {medicos ? (
                    <div className="col-md-4">
                        <label>
                            Doctor:
                        </label>

                        <select className="custom-select" ref={medicoPracRef}>
                            <option value="no" >Selecciona una opcion</option>
                            {medicos.map((m, index) => (
                                <option key={index} value={`${m.COD_PRES}-${m.NOMBRE}`}>{m.NOMBRE}</option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="col-md-4 alert alert-info  border border-dark text-center text-uppercase">
                        No hay medicos registrados
                    </div>
                )}

                <div className='col-md-3'>
                    <label>
                        <u>
                            CUIT/CUIL
                        </u>
                    </label>

                    <input type={"text"} className='form-control' ref={cuitPracRef} />

                </div>

                <div className='col-md-3 mt-4'>
                    <label>
                        <u>
                            Fecha a Pagar
                        </u>
                    </label>

                    <input type={"date"} className='form-control' ref={fechaPagPracRef} />

                </div>

            </div>





            <div className='row d-flex justify-content-end'>
                <div className='col-md-3 '>
                    <label>

                    </label>
                    <button className='btn btn-primary btn-block mt-2' onClick={() => buscarOrdenes("practica")}>
                        buscar
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

export default FormOrdenPractica