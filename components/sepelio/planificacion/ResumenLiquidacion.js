import React from 'react'
import Spinner from '../../layout/Spinner'

const ResumenLiquidacion = ({ liqfinal }) => {

    if (!liqfinal) return <Spinner />

    const totalGuardias = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += arr[i].liquidacion
        }

        return total
    }

    return (

        <div className="container mt-4 border border-dark alert alert-primary p-4" >

            <h2>
                <strong>
                    <u>
                        Liquidacion personal de sepelio periodo: 03/2021
        </u>
                </strong>
            </h2>

            <table class="table table-sm list border border-dark">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Operador</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Mes</th>
                    </tr>
                </thead>
                <tbody>

                    {liqfinal.map((lt, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{lt.operador}</td>
                            <td>{lt.liquidacion}</td>
                            <td>{lt.mes_planificacion}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div className="mb-4 alert alert-success border border-dark text-center text-uppercase">
                Liquidacion Total de Guardias: ${totalGuardias(liqfinal)}
            </div>

        </div>


    )
}

export default ResumenLiquidacion
