import React, { useState } from 'react'
import Spinner from '../../../components/layout/Spinner'


const FormComprobanteBeneficio = ({
    beneficio,


}) => {

    if (!beneficio) return <Spinner />


    return (

        
            <div className='container border border-dark mt-4 p-4 listcw' id="comprobante" >

                <div className="col-md-12 d-flex justify-content-center">

                    <img src="/img/logocw2.png" className="clublogo" />

                </div>

                <div className='border border-dark mt-4 p-4 list'>
                    <h3 className="mb-4">
                        <strong>
                            <u>Comprobante del Beneficio</u>
                        </strong>
                    </h3>
                    <div className='row mt-5'>

                        <div className='col-md-3 mt-4'>
                            <label>
                                <u>
                                    Socio N°
                                </u>
                            </label>

                            <input type={"text"} className="form-control" value={beneficio.socio} />

                        </div>

                        <div className='col-md-3 mt-4'>
                            <label>
                                <u>
                                    DNI del Beneficiario:
                                </u>
                            </label>

                            <input type={"text"} className="form-control" value={beneficio.dni} />

                        </div>

                        <div className='col-md-6 mt-4'>
                            <label>
                                <u>
                                    Beneficio para:
                                </u>
                            </label>

                            <input type={"text"} className="form-control" value={beneficio.nombre} />

                        </div>

                        <div className='col-md-4 mt-4'>
                            <label>
                                <u>
                                    Monto de la compra:
                                </u>
                            </label>

                            <input type={"number"} className="form-control" value={beneficio.monto_compra} />


                        </div>

                        <div className='col-md-4 mt-4'>
                            <label>
                                <u>
                                    Descuento (%):
                                </u>
                            </label>

                            <input type={"text"} className="form-control" value={beneficio.beneficio} />


                        </div>

                        <div className='col-md-4 mt-4'>
                            <label>
                                <u>
                                    Monto Final:
                                </u>
                            </label>

                            <input type={"number"} className="form-control" value={beneficio.monto_final} />


                        </div>

                        <div className='col-md-12 mt-4'>
                            <label>
                                <u>
                                    Transaccion N°:
                                </u>
                            </label>

                            <input type={"text"} className="form-control" value={beneficio.n_trans} />


                        </div>
                    </div>
                </div>

            </div>
       

    )
}

export default FormComprobanteBeneficio