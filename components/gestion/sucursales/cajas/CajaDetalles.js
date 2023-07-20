import React from 'react'
import ListadoMovimientos from './ListadoMovimientos'

const CajaDetalles = ({
    ingreso,
    egreso,
    totales,

}) => {

    return (
        <div className='container list border border-dark mt-4 p-4'>
            <h3 className="modal-title" id="exampleModalLabel">
                {
                    ingreso.length > 0 ? (
                        <strong>
                            <u>
                                Caja N°
                            </u>: {ingreso[0].idcaja}, {ingreso[0].sucursal} - {ingreso[0].operador_carga}
                        </strong>
                    ) : null
                }
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
                            Saldo: $  {totales(ingreso, "I") - totales(egreso, "E")}
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <h4 className='mb-4'>
                            <u>
                                Ingresos
                            </u>
                        </h4>

                        <div className='alert alert-info text-center text-uppercase border border-dark mt-4 mb-4'>
                            Total Ingresos: $  {totales(ingreso, "I")}
                        </div>

                        <ListadoMovimientos
                            listado={ingreso}
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
                            Total Egresos: $ {totales(egreso, "E")}
                        </div>

                        <ListadoMovimientos
                            listado={egreso}
                            f={'list'}
                        />


                    </div>

                </div>

            </div>
        </div>
    )
}

export default CajaDetalles