import React from 'react'
import ListadoOrdenesSinRendir from './ListadoOrdenesSinRendir'

const NuevaCaja = ({
    listado,
    traerOrdenesPorDia,
    flag

}) => {
    return (
        <div className='container border border-dark mt-4 p-4 list'>

            <h2>
                <strong>
                    <u> Generar Caja </u>: Consultorios Otero
                </strong>
            </h2>

            {
                flag === true ? (
                    <div className="mt-4 mb-4 alert alert-warning border border-dark text-center text-uppercase">
                        Ya se genero una caja con la fecha de hoy
                    </div>

                ) : null
            }

            <div className='mt-4 border border-dark p-4'>

                <h4>
                    <strong>
                        <u>Ordenes Sin Rendir</u>
                    </strong>
                </h4>

                <ListadoOrdenesSinRendir
                    listado={listado}
                    traerOrdenesPorDia={traerOrdenesPorDia}

                />

            </div>

        </div>
    )
}

export default NuevaCaja
