import React from 'react'
import moment from 'moment'

const TablaLiquidacion = ({
    liquidacion,
    calcTotal,
    desde,
    hasta
}) => {
    return (
        <div className='container border border-dark p-4 mt-4 list '>

            <h2>
                <strong>
                    <u>
                        Liquidacion
                    </u>: Mendez, Mara
                </strong>
            </h2>

            <h4 className='mt-4'>
                <strong>
                    <u>
                        Periodo
                    </u>: {moment(desde).format('DD/MM/YYYY')} - {moment(hasta).format('DD/MM/YYYY')}
                </strong>
            </h4>

            <table className="table borderImp mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FECHA</th>
                        <th scope="col">CONTRATO</th>
                        <th scope="col">50%</th>
                        <th scope="col">100%</th>
                        <th scope="col">75%</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        liquidacion.map((l, index) => (
                            <>
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{moment(l.FECHA).format('DD/MM/YYYY')}</td>
                                    <td>{l.CONTRATO}</td>
                                    <td>{l.VSIST}</td>
                                    <td>{l.VNOM}</td>
                                    <td>{l.VLIQ}</td>
                                </tr>

                            </>
                        ))}

                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='bg-secondary text-white'>TOTAL</td>
                        <td className='bg-secondary text-white' >${calcTotal(liquidacion)}</td>
                    </tr>

                </tbody>
            </table>

        </div >
    )
}

export default TablaLiquidacion