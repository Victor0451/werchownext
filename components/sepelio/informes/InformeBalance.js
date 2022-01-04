import React from 'react'

const InformeBalance = ({ mes, ano, gastos, cajas, ventas }) => {

    const totalCant = (arr) => {
        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += arr[i].cant
        }

        return total
    }

    const totalMonto = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += arr[i].monto
        }

        return total.toFixed(2)
    }

    const totalMonto2 = (arr1, arr2) => {

        let arrF = arr1.concat(arr2)

        let total = 0

        for (let i = 0; i < arrF.length; i++) {
            total += arrF[i].monto
        }

        return total.toFixed(2)
    }

    return (
        <div className="container border border-dark list">

            <h2 className="text-center">
                <strong>
                    <u>
                        Balance Sepelio periodo {mes}-{ano}
                    </u>
                </strong>
            </h2>


            <div className="mt-4 row border border-dark list">

                <div className="mt-4 col-md-6">
                    <table class="table table-sm list border border-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Ingreso</th>
                                <th scope="col">Operador</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Motno</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ventas ? (
                                    <>
                                        {ventas.map((v, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td class="table-success">{v.tipo}</td>
                                                <td class="table-success">{v.operador}</td>
                                                <td class="table-success">{v.cant}</td>
                                                <td class="table-success">{v.monto}</td>
                                            </tr>
                                        ))}
                                        <tr className="border border-dark">
                                            <th scope="row"></th>
                                            <td class="table-primary"></td>
                                            <td class="table-primary" ><strong>TOTAL</strong></td>
                                            <td class="table-primary" > <strong>{totalCant(ventas)}</strong></td>
                                            <td class="table-primary" ><strong>{totalMonto(ventas)}</strong></td>
                                        </tr>
                                    </>
                                ) : !ventas || ventas === [] ? (<div>
                                    No hay ventas registradas en este periodo
                                </div>) : null
                            }


                        </tbody>
                    </table>
                </div>

                <div className="mt-4 col-md-6">
                    <table class="table table-sm list border border-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Egreso</th>
                                <th scope="col">Operador</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Motno</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                cajas ? (
                                    <>
                                        {cajas.map((c, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td class="table-danger">{c.tipo}</td>
                                                <td class="table-danger" >{c.operador}</td>
                                                <td class="table-danger" >{c.cant}</td>
                                                <td class="table-danger" >{c.monto}</td>
                                            </tr>
                                        ))}
                                        <tr className="border border-dark">
                                            <th scope="row"></th>
                                            <td class="table-primary"></td>
                                            <td class="table-primary" ><strong>TOTAL</strong></td>
                                            <td class="table-primary" > <strong>{totalCant(cajas)}</strong></td>
                                            <td class="table-primary" ><strong>{totalMonto(cajas)}</strong></td>
                                        </tr>
                                    </>
                                ) : !cajas || cajas === [] ? (<div>
                                    No hay cajas registradas en este periodo
                                </div>) : null
                            }

                            {
                                gastos ? (
                                    <>
                                        {gastos.map((g, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td class="table-danger" >{g.tipo}</td>
                                                <td class="table-danger" >{g.operador}</td>
                                                <td class="table-danger" >{g.cant}</td>
                                                <td class="table-danger" >{g.monto}</td>
                                            </tr>
                                        ))}
                                        <tr className="border border-dark">
                                            <th scope="row"></th>
                                            <td class="table-primary"></td>
                                            <td class="table-primary" ><strong>TOTAL</strong></td>
                                            <td class="table-primary" > <strong>{totalCant(gastos)}</strong></td>
                                            <td class="table-primary" ><strong>{totalMonto(gastos)}</strong></td>
                                        </tr>
                                    </>
                                ) : !gastos || gastos === [] ? (<div>
                                    No hay gastos registradas en este periodo
                                </div>) : null
                            }
                        </tbody>
                    </table>
                </div>

                <div className="col-md-6">
                    {ventas ? (
                        <div className="border border-dark alert alert-success text-center text-uppercase">
                            Ingresos Totales =  {totalMonto(ventas)}
                        </div>
                    ) : (<div>...</div>)}


                </div>

                <div className="col-md-6">
                    {gastos && cajas ? (
                        <div className="border border-dark alert alert-danger text-center text-uppercase">
                            Egresos Totales =  { totalMonto2(cajas, gastos)}
                        </div>
                    ) : (<div>...</div>)}

                </div>
            </div>

        </div>
    )
}

export default InformeBalance
