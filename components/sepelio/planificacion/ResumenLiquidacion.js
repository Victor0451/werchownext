import React from 'react'
import Spinner from '../../layout/Spinner'

const ResumenLiquidacion = ({ resumenG, resumenT, mes, ano }) => {

    if (!resumenG) return <Spinner />

    const totalGuardias = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += arr[i].liquidacion
        }

        return total
    }

    return (

        <div className="container mt-4 border border-dark list p-4" >

            <h3>
                <strong>
                    <u>
                        Liquidacion personal de sepelio periodo: {mes}/{ano}
                    </u>
                </strong>
            </h3>


            <h4 className="mt-4">
                <strong>
                    <u>
                        GUARDIAS
        </u>
                </strong>
            </h4>

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

                    {resumenG.map((lt, index) => (
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
                Liquidacion Total de Guardias: ${totalGuardias(resumenG)}
            </div>


            {
                !resumenT ? (
                    <Spinner />
                ) : (
                    <>
                        <h4 className="mt-4">
                            <strong>
                                <u>
                                    Tareas Adicionales
        </u>
                            </strong>
                        </h4>

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

                                {resumenT.map((lt, index) => (
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
                            Liquidacion Total de Tareas Adicionales: ${totalGuardias(resumenT)}
                        </div>


                    </>

                )
            }


        </div>


    )
}

export default ResumenLiquidacion
