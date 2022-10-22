import React, { useState } from 'react'
import Spinner from '../../../components/layout/Spinner'


const FormComprobanteBeneficio = ({
    beneficio,


}) => {

    if (!beneficio) return <Spinner />


    return (


        <div className='container border border-dark mt-4 p-4 listcw'  >

            <div className="col-md-12 d-flex justify-content-center">

                <img src="/img/logocw2.png" className="clublogo" />

            </div>

            <div className='border border-dark mt-4 p-4 list'>
                <h4 className="">
                    <strong>
                        <u>Comprobante del Beneficio</u>
                    </strong>
                </h4>
                <div className='row '>

                    <div className='col-md-4 mt-4'>
                        <label>
                            <strong>
                                <u>
                                    Monto de la compra:
                                </u>
                            </strong>
                        </label>

                        {""} ${beneficio.monto_compra}

                    </div>

                    <div className='col-md-4 mt-4'>
                        <label>
                            <strong>
                                <u>
                                    Descuento Sugerido:
                                </u>
                            </strong>
                        </label>

                        {" "} ${beneficio.monto_compra - beneficio.monto_final}

                    </div>

                    <div className='col-md-12 mt-4'>
                        <label>
                            <strong>
                                <u>
                                    Transaccion N°:
                                </u>
                            </strong>
                        </label>

                        {""} {beneficio.n_trans}

                    </div>

                    <div className='col-md-3 mt-4'>
                        <label>
                            <strong>
                                <u>
                                    Socio N°:
                                </u>
                            </strong>
                        </label>

                        {""} {beneficio.socio}

                    </div>

                    <div className='col-md-3 mt-4'>
                        <label>
                            <strong>
                                <u>
                                    Beneficiario:
                                </u>
                            </strong>
                        </label>

                        {""} {beneficio.dni}

                    </div>

                    <div className='col-md-3 mt-4'>
                        <label>
                            <strong>
                                <u>
                                    Apellido y Nombre:
                                </u>
                            </strong>
                        </label>

                        {""} {beneficio.ape_nom}

                    </div>

                    <div className='col-md-6 mt-4'>
                        <label>
                            <strong>
                                <u>
                                    Beneficio para:
                                </u>
                            </strong>
                        </label>

                        {""} {beneficio.nombre}

                    </div>


                </div>
            </div>

        </div>


    )
}

export default FormComprobanteBeneficio