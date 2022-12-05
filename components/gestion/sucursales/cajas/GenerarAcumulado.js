import React from 'react'
import ListadoMovimientos from './ListadoMovimientos'

const GenerarAcumulado = ({
    suc,
    mes,
    ano,
    acumuladoI,
    acumuladoE,
    totales

}) => {
    return (
        <div className='container list border border-dark mt-4 p-4'>
            <h3 className="modal-title" id="exampleModalLabel">
                <u>
                    Acumulado:
                </u>
            </h3>

            <div className='mt-4 border border-dark p-4'>

                <div className='row'>

                    <div className='col-md-12'>
                        <h4 className='mb-4'>
                            <u>
                                Saldo Caja:
                            </u>
                        </h4>

                        <div className='alert alert-info text-center text-uppercase border border-dark mt-4 mb-4'>
                            Saldo: $  {totales(acumuladoI, "I") - totales(acumuladoE, "E")}
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <h4 className='mb-4'>
                            <u>
                                Ingresos
                            </u>
                        </h4>

                        <div className='alert alert-info text-center text-uppercase border border-dark mt-4 mb-4'>
                            Total Ingresos: $  {totales(acumuladoI, "I")}
                        </div>

                        <ListadoMovimientos
                            listado={acumuladoI}
                            f={'list'}
                        />                     

                    </div>

                    <div className='col-md-6'>

                        <h4 className='mb-4'>
                            <u>
                                Egresos
                            </u>
                        </h4>

                        <div className='alert alert-info text-center text-uppercase border border-dark mt-4 mb-4'>
                            Total Egresos: $ {totales(acumuladoE, "E")}
                        </div>

                        <ListadoMovimientos
                            listado={acumuladoE}
                            f={'list'}
                        />


                    </div>

                </div>

            </div>
        </div>
    )
}

export default GenerarAcumulado