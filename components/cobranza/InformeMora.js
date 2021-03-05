import React from 'react'
import Spinner from '../layout/Spinner'

const InformeMora = ({ mora, moracob, moratjt }) => {


    const efecMora = (ini, actual) => {

        if (ini > actual) {
            let cobrado = ini - actual

            let mora = ini

            let efec = (cobrado / mora) * 100

            return efec.toFixed(2)
        } else if (ini < actual) {
            let cobrado = actual

            let mora = ini

            let efec = (cobrado / mora) * 100

            return efec.toFixed(2)
        }



    }

    return (
        <div className="mt-4 container border border-dark alert alert-primary">
            <h2><strong><u>Informe de Mora</u></strong></h2>


            {!mora ? (<Spinner />) : (
                <div className="mt-4 border border-dark p-4">
                    <h4 className="mb-4"><strong><u>Mora Oficina</u></strong></h4>

                    <div className="row">
                        <div className="col-md-12">

                            <table className="table table-sm border border-dark list">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Zona</th>
                                        <th scope="col">Desc</th>
                                        <th scope="col">Fichas</th>
                                        <th scope="col">Mora</th>
                                        <th scope="col">Fichas Cobradas</th>
                                        <th scope="col">Mora Cobradas</th>
                                        <th scope="col">Efectividad de Mora</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {mora.map((m, index) => (
                                        <tr key={index}>
                                            <th scope="row" >{m.zona}</th>
                                            <td>{m.descr}</td>
                                            <td>{m.fichasinicial}</td>
                                            <td>{m.morainicial}</td>



                                            {!m.fichasactual ? (<td> {m.fichasinicial} </td>)
                                                : m.fichasinicial == m.fichasactual ?
                                                    (<td>{m.fichasinicial}</td>)
                                                    : m.fichasinicial > m.fichasactual ? (
                                                        <td>{m.fichasinicial - m.fichasactual}</td>
                                                    ) : m.fichasinicial < m.fichasactual ?
                                                            (<td>{m.fichasactual}</td>)
                                                            : <td></td>
                                            }

                                            {!m.morasactual ? (<td> {m.morainicial} </td>)
                                                : m.morasinicial == m.morasactual ?
                                                    (<td>{m.morasinicial}</td>)
                                                    : m.morasinicial > m.morasactual ? (
                                                        <td>{m.morasinicial - m.morasactual}</td>
                                                    ) : m.morasinicial < m.morasactual ?
                                                            (<td>{m.morasactual}</td>)
                                                            : <td></td>
                                            }


                                            {!m.moraactual ? (<td>100 %</td>)
                                                : m.morainicial == m.moraactual ?
                                                    (<td>0 %</td>)
                                                    : m.morainicial > m.moraactual ? (
                                                        <td>{efecMora(m.morainicial, m.moraactual)}%</td>
                                                    ) : <td></td>
                                            }

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {!moracob ? (<Spinner />) : (
                <div className="mt-4 border border-dark p-4">
                    <h4 className="mb-4"><strong><u>Mora Cobrador</u></strong></h4>

                    <div className="row">
                        <div className="col-md-12">

                            <table className="table table-sm border border-dark list">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Zona</th>
                                        <th scope="col">Desc</th>
                                        <th scope="col">Fichas</th>
                                        <th scope="col">Mora</th>
                                        <th scope="col">Fichas Cobradas</th>
                                        <th scope="col">Mora Cobradas</th>
                                        <th scope="col">Efectividad de Mora</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {moracob.map((m, index) => (
                                        <tr key={index}>
                                            <th scope="row" >{m.zona}</th>
                                            <td>{m.descr}</td>
                                            <td>{m.fichasinicial}</td>
                                            <td>{m.morainicial}</td>



                                            {!m.fichasactual ? (<td> {m.fichasinicial} </td>)
                                                : m.fichasinicial == m.fichasactual ?
                                                    (<td>{m.fichasinicial}</td>)
                                                    : m.fichasinicial > m.fichasactual ? (
                                                        <td>{m.fichasinicial - m.fichasactual}</td>
                                                    ) : m.fichasinicial < m.fichasactual ?
                                                            (<td>{m.fichasactual}</td>)
                                                            : <td></td>
                                            }

                                            {!m.morasactual ? (<td> {m.morainicial} </td>)
                                                : m.morasinicial == m.morasactual ?
                                                    (<td>{m.morasinicial}</td>)
                                                    : m.morasinicial > m.morasactual ? (
                                                        <td>{m.morasinicial - m.morasactual}</td>
                                                    ) : m.morasinicial < m.morasactual ?
                                                            (<td>{m.morasactual}</td>)
                                                            : <td></td>
                                            }


                                            {!m.moraactual ? (<td>100 %</td>)
                                                : m.morainicial == m.moraactual ?
                                                    (<td>0 %</td>)
                                                    : m.morainicial > m.moraactual ? (
                                                        <td>{efecMora(m.morainicial, m.moraactual)}%</td>
                                                    ) : <td></td>
                                            }

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}


            {!moratjt ? (<Spinner />) : (
                <div className="mt-4 border border-dark p-4">
                    <h4 className="mb-4"><strong><u>Mora Tarjetas</u></strong></h4>

                    <div className="row">
                        <div className="col-md-12">

                            <table className="table table-sm border border-dark list">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Grupo</th>
                                        <th scope="col">Desc</th>
                                        <th scope="col">Fichas</th>
                                        <th scope="col">Mora</th>
                                        <th scope="col">Fichas Cobradas</th>
                                        <th scope="col">Mora Cobradas</th>
                                        <th scope="col">Efectividad de Mora</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {moratjt.map((m, index) => (
                                        <tr key={index}>
                                            <th scope="row" >{m.grupo}</th>
                                            <td>{m.descr}</td>
                                            <td>{m.fichasinicial}</td>
                                            <td>{m.morainicial}</td>



                                            {!m.fichasactual ? (<td> {m.fichasinicial} </td>)
                                                : m.fichasinicial == m.fichasactual ?
                                                    (<td>{m.fichasinicial}</td>)
                                                    : m.fichasinicial > m.fichasactual ? (
                                                        <td>{m.fichasinicial - m.fichasactual}</td>
                                                    ) : m.fichasinicial < m.fichasactual ?
                                                            (<td>{m.fichasactual}</td>)
                                                            : <td></td>
                                            }

                                            {!m.morasactual ? (<td> {m.morainicial} </td>)
                                                : m.morasinicial == m.morasactual ?
                                                    (<td>{m.morasinicial}</td>)
                                                    : m.morasinicial > m.morasactual ? (
                                                        <td>{m.morasinicial - m.morasactual}</td>
                                                    ) : m.morasinicial < m.morasactual ?
                                                            (<td>{m.morasactual}</td>)
                                                            : <td></td>
                                            }


                                            {!m.moraactual ? (<td>100 %</td>)
                                                : m.morainicial == m.moraactual ?
                                                    (<td>0 %</td>)
                                                    : m.morainicial > m.moraactual ? (
                                                        <td>{efecMora(m.morainicial, m.moraactual)}%</td>
                                                    ) : <td></td>
                                            }

                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default InformeMora
