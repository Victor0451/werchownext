import moment from 'moment'
import React from 'react'
import Spinner from '../../../layout/Spinner'


const ImpReciboPlan = ({
    planSocio

}) => {

    if (!planSocio) return <Spinner />

    return (
        <div  className=' p-4 borderImp list'>

            <div className='mt-4 borderImp p-4 row'>

                <div className='row  col-md-8'>
                    <div className='col-md-12'>
                        <strong>
                            <u>Beneficiario</u>: {planSocio.socio}
                        </strong>
                    </div>

                    <div className=' col-md-12'>
                        <strong>
                            <u>N° Socio</u>: {planSocio.contrato}
                        </strong>
                    </div>
                    <div className='col-md-12'>
                        <strong>
                            <u>Fecha</u>: {moment(planSocio.fecha).format('DD/MM/YYYY')}
                        </strong>
                    </div>

                    <div className='col-md-12'>
                        <strong>
                            <u>Dr/a</u>: {planSocio.prestador_nombre}
                        </strong>
                    </div>

                </div>

                <div className='row col-md-4'>
                    <div className='col-md-12'>
                        <strong>
                            <u>plan</u>: Activacion kit ortodincia
                        </strong>
                    </div>

                    <div className='col-md-12'>
                        <strong>
                            <u>Total</u>: ${planSocio.total}
                        </strong>
                    </div>

                    <div className='col-md-12'>
                        <strong>
                            <u>Pago Inicial</u>: ${planSocio.pagado}
                        </strong>
                    </div>

                    <div className='col-md-12'>
                        <strong>
                            <u>Saldo</u>: ${planSocio.saldo}
                        </strong>
                    </div>
                </div>

            </div>

            <br />

            <div className=" mt-4">
                <div className="row d-flex justify-content-between p-2">
                    <div className="col-4 text-center mt-4">
                        <br />
                        <p>-----------------------------</p>
                        <label>Firma del Afiliado</label>
                    </div>
                    <div className="col-4 text-center mt-4">
                        <br />
                        <p>-----------------------------</p>
                        <label>Aclaracion</label>
                    </div>



                </div>
            </div>

        </div >
    )
}

export default ImpReciboPlan
