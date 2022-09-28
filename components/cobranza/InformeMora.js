import React from 'react'
import Spinner from '../layout/Spinner'

const InformeMora = ({ mora, moracob, moratjt, calcularTotal }) => {


    const efecMora = (ini, actual) => {

        if (ini > actual) {
            let cobrado = parseInt(ini) - parseInt(actual)

            let mora = ini

            let efec = (cobrado / mora) * 100

            return efec.toFixed(2)
        } else if (ini < actual) {
            let cobrado = parseInt(actual)

            let mora = parseInt(ini)

            let efec = (cobrado / mora) * 100

            return efec.toFixed(2)
        }

    }

    return (
        <div className="mt-4 container border border-dark list p-4">
            <h2><strong><u>Informe de Mora</u></strong></h2>


            {!mora ? (<Spinner />) : (
                <div className="list mt-4 border border-dark p-4 list">
                    <h4 className="mb-4"><strong><u>Mora Tarjetas</u></strong></h4>

                    <div className="row ">
                        <div className="col-md-12">

                            <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                                <div className="col-1">
                                    {" "}
                                    <strong>ZONA</strong>
                                </div>
                                <div className="col-3">
                                    {" "}
                                    <strong>COBRADOR</strong>
                                </div>
                                <div className="col-2">
                                    <strong>A COBRAR</strong>
                                </div>
                                <div className="col-1">
                                    <strong>FICHAS</strong>
                                </div>
                                <div className="col-2">
                                    <strong>COBRADO</strong>
                                </div>
                                <div className="col-1">
                                    <strong>FICHAS</strong>
                                </div>

                                <div className="col-2">
                                    <strong>EFECT</strong>
                                </div>
                            </div>


                            {mora.map((m, index) => (

                                <div className="d-flex justify-content-between border-bottom text-center">
                                    <div className="col-1" key={index}>{m.zona}</div>
                                    <div className="col-3 descr">{m.descr}</div>
                                    <div className="col-2">$ {m.morainicial}</div>
                                    <div className="col-1">{m.fichasinicial}</div>



                                    {!m.moraactual ? (<div className="col-2">$ {m.morainicial}</div>)
                                        : m.morainicial == m.moraactual ?
                                            (<div className="col-2">$ {m.morainicial}</div>)
                                            : m.morainicial > m.moraactual ? (
                                                <div className="col-2">$ {m.morainicial - m.moraactual}</div>

                                            ) : m.morainicial < m.moraactual ?
                                                (<div className="col-2">{m.moraactual}</div>)
                                                : <div className="col-2"></div>
                                    }


                                    {!m.fichasactual ? (<div className="col-1">{m.fichasinicial}</div>)
                                        : m.fichasinicial == m.fichasactual ?
                                            (<div className="col-1">{m.fichasinicial}</div>)
                                            : m.fichasinicial > m.fichasactual ? (
                                                <div className="col-1">{m.fichasinicial - m.fichasactual}</div>

                                            ) : m.fichasinicial < m.fichasactual ?
                                                (<div className="col-1">{m.fichasactual}</div>)
                                                : <div className="col-1"></div>
                                    }

                                    {!m.moraactual ? (<div className="col-2">100 %</div>)
                                        : m.morainicial == m.moraactual ?
                                            (<div className="col-2">0 %</div>)
                                            : m.morainicial > m.moraactual || m.morainicial < m.moraactual ? (
                                                <div className="col-2">{efecMora(m.morainicial, m.moraactual)}%</div>
                                            ) : <div className="col-2"></div>
                                    }

                                </div>

                            ))}


                            {/* <div className="d-flex justify-content-between text-center border-bottom border-top border-dark  ">
                                <div className="col-4">
                                    {" "}
                                    <strong>TOTAL</strong>
                                </div>

                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(mora, 'morainicial')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(mora, 'fichasinicial')}
                                    </strong>
                                </div>
                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(mora, 'moraactual')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(mora, 'fichasactual')}
                                    </strong>
                                </div>

                                <div className="col-2">
                                    <strong>
                                        {calcularEfectividad(cobrador)}% 
                                    </strong>
                    </div>
                    </div>
                     */}



                        </div>
                    </div >
                </div >
            )
            }

            {
                !moracob ? (<Spinner />) : (
                    <div className="mt-4 border border-dark p-4 list">
                        <h4 className="mb-4"><strong><u>Mora Tarjetas</u></strong></h4>

                        <div className="row ">
                            <div className="col-md-12">

                                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                                    <div className="col-1">
                                        {" "}
                                        <strong>ZONA</strong>
                                    </div>
                                    <div className="col-3">
                                        {" "}
                                        <strong>COBRADOR</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>A COBRAR</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>COBRADO</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>

                                    <div className="col-2">
                                        <strong>EFECT</strong>
                                    </div>
                                </div>


                                {moracob.map((m, index) => (

                                    <div className="d-flex justify-content-between border-bottom text-center">
                                        <div className="col-1" key={index}>{m.zona}</div>
                                        <div className="col-3 descr">{m.descr}</div>
                                        <div className="col-2">$ {m.morainicial}</div>
                                        <div className="col-1">{m.fichasinicial}</div>



                                        {!m.moraactual ? (<div className="col-2">$ {m.morainicial}</div>)
                                            : m.morainicial == m.moraactual ?
                                                (<div className="col-2">$ {m.morainicial}</div>)
                                                : m.morainicial > m.moraactual ? (
                                                    <div className="col-2">$ {m.morainicial - m.moraactual}</div>

                                                ) : m.morainicial < m.moraactual ?
                                                    (<div className="col-2">{m.moraactual}</div>)
                                                    : <div className="col-2"></div>
                                        }


                                        {!m.fichasactual ? (<div className="col-1">{m.fichasinicial}</div>)
                                            : m.fichasinicial == m.fichasactual ?
                                                (<div className="col-1">{m.fichasinicial}</div>)
                                                : m.fichasinicial > m.fichasactual ? (
                                                    <div className="col-1">{m.fichasinicial - m.fichasactual}</div>

                                                ) : m.fichasinicial < m.fichasactual ?
                                                    (<div className="col-1">{m.fichasactual}</div>)
                                                    : <div className="col-1"></div>
                                        }

                                        {!m.moraactual ? (<div className="col-2">100 %</div>)
                                            : m.morainicial == m.moraactual ?
                                                (<div className="col-2">0 %</div>)
                                                : m.morainicial > m.moraactual || m.morainicial < m.moraactual ? (
                                                    <div className="col-2">{efecMora(m.morainicial, m.moraactual)}%</div>
                                                ) : <div className="col-2"></div>
                                        }

                                    </div>

                                ))}


                                {/* <div className="d-flex justify-content-between text-center border-bottom border-top border-dark  ">
                                <div className="col-3">
                                    {" "}
                                    <strong>TOTAL</strong>
                                </div>

                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(cobrador, 'total')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(cobrador, 'fichas')}
                                    </strong>
                                </div>
                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(cobrador, 'cobrado')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(cobrador, 'fichascob')}
                                    </strong>
                                </div>
                                <div className="col-2">
                                    <strong>$ {calcularTotal(cobrador, 'adelantado')}</strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularEfectividad(cobrador)}%
                            </strong>
                                </div>
                            </div> */}


                            </div>
                        </div>
                    </div>
                )
            }


            {
                !moratjt ? (<Spinner />) : (
                    <div className="mt-4 border border-dark p-4 list">
                        <h4 className="mb-4"><strong><u>Mora Tarjetas</u></strong></h4>

                        <div className="row ">
                            <div className="col-md-12">

                                <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
                                    <div className="col-1">
                                        {" "}
                                        <strong>ZONA</strong>
                                    </div>
                                    <div className="col-3">
                                        {" "}
                                        <strong>COBRADOR</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>A COBRAR</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>
                                    <div className="col-2">
                                        <strong>COBRADO</strong>
                                    </div>
                                    <div className="col-1">
                                        <strong>FICHAS</strong>
                                    </div>

                                    <div className="col-2">
                                        <strong>EFECT</strong>
                                    </div>
                                </div>


                                {moratjt.map((m, index) => (

                                    <div className="d-flex justify-content-between border-bottom text-center">
                                        <div className="col-1" key={index}>{m.zona}</div>
                                        <div className="col-3 descr">{m.descr}</div>
                                        <div className="col-2">$ {m.morainicial}</div>
                                        <div className="col-1">{m.fichasinicial}</div>



                                        {!m.moraactual ? (<div className="col-2">$ {m.morainicial}</div>)
                                            : m.morainicial == m.moraactual ?
                                                (<div className="col-2">$ {m.morainicial}</div>)
                                                : m.morainicial > m.moraactual ? (
                                                    <div className="col-2">$ {m.morainicial - m.moraactual}</div>

                                                ) : m.morainicial < m.moraactual ?
                                                    (<div className="col-2">{m.moraactual}</div>)
                                                    : <div className="col-2"></div>
                                        }


                                        {!m.fichasactual ? (<div className="col-1">{m.fichainicial}</div>)
                                            : m.fichasinicial == m.fichasactual ?
                                                (<div className="col-1">{m.fichainicial}</div>)
                                                : m.fichasinicial > m.fichasactual ? (
                                                    <div className="col-1">{m.fichasinicial - m.fichasactual}</div>

                                                ) : m.fichasinicial < m.fichasactual ?
                                                    (<div className="col-1">{m.fichasactual}</div>)
                                                    : <div className="col-1"></div>
                                        }

                                        {!m.moraactual ? (<div className="col-2">100 %</div>)
                                            : m.morainicial == m.moraactual ?
                                                (<div className="col-2">0 %</div>)
                                                : m.morainicial > m.moraactual || m.morainicial < m.moraactual ? (
                                                    <div className="col-2">{efecMora(parseInt(m.morainicial), parseInt(m.moraactual))}%</div>
                                                ) : <div className="col-2"></div>
                                        }

                                    </div>

                                ))}


                                {/* <div className="d-flex justify-content-between text-center border-bottom border-top border-dark  ">
                                <div className="col-3">
                                    {" "}
                                    <strong>TOTAL</strong>
                                </div>

                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(cobrador, 'total')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(cobrador, 'fichas')}
                                    </strong>
                                </div>
                                <div className="col-2">
                                    <strong>
                                        $ {calcularTotal(cobrador, 'cobrado')}
                                    </strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularTotal(cobrador, 'fichascob')}
                                    </strong>
                                </div>
                                <div className="col-2">
                                    <strong>$ {calcularTotal(cobrador, 'adelantado')}</strong>
                                </div>
                                <div className="col-1">
                                    <strong>
                                        {calcularEfectividad(cobrador)}%
                            </strong>
                                </div>
                            </div> */}


                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    )
}

export default InformeMora
