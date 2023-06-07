import moment from 'moment'
import React from 'react'

export const FormSolicitudEst = ({
    ficha,
    ncert
}) => {
    return (

        <div className=''>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

            <div className='row p-4'>

                <div className='col-md-12 d-flex justify-content-end mt-2'>
                    San Salvador de Jujuy {moment().format('ll')}
                </div>

                <div className='col-md-12 mt-4'>
                    <p>
                        <font size="4">
                            <strong>
                                A: {ficha.APELLIDOS}, {ficha.NOMBRES}
                            </strong>
                        </font>
                    </p>
                </div>

                <div className='col-md-12 '>
                    <p>
                        <font size="4">
                            <strong>
                                DNI: {ficha.NRO_DOC}
                            </strong>
                        </font>
                    </p>
                </div>

                <div className='col-md-12 '>
                    <p>
                        <font size="3">
                            <strong>
                                Certificado N°: {ncert}
                            </strong>
                        </font>
                    </p>
                </div>

                <div className='col-md-12 text-center mt-4'>
                    <p>
                        <font size="4">
                            Por medio de la presente se extiende una constancia de cobertura de sepelio,
                            la cual al momento de la fecha se encuentra al dia con las cuotas mensuales.
                            Este documento fue solicitado para ser presentado ante las autoridades de{" "}
                            <strong>
                                LA POLICIA DE LA PROVINCIA
                            </strong>
                        </font>
                    </p>
                </div>
            </div>

        </div>

    )
}
