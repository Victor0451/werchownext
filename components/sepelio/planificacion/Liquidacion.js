import React from 'react'
import Spinner from '../../layout/Spinner'
import moment from 'moment'

const Liquidacion = ({ liqguardias, liqtarad }) => {

    if (!liqguardias) return <Spinner />


    const totalGuardias = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += arr[i].liquidacion
        }

        return total
    }


    return (
        <div className="container mt-4 border border-dark alert alert-primary p-4">

            <h4 className="mb-4">
                <strong>
                    <u>
                        Liquidacion de guardias
        </u>
                </strong>
            </h4>

            <table class="table table-sm list border border-dark">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID Guardia</th>
                        <th scope="col">Operador</th>
                        <th scope="col">Inicio</th>
                        <th scope="col">Fin</th>
                        <th scope="col">Horas</th>
                        <th scope="col">Liquidacion</th>
                    </tr>
                </thead>
                <tbody>

                    {liqguardias.map((l, index) => (
                        <tr key={index}>
                            <th scope="row">{l.idturno}</th>
                            <td>{l.operador}</td>
                            <td>{moment(l.inicio).utcOffset("+000").format('DD/MM/YYYY HH:mm:ss')}</td>
                            <td>{moment(l.fin).utcOffset("+000").format('DD/MM/YYYY HH:mm:ss')}</td>
                            <td>{l.horas}</td>
                            <td>{l.liquidacion}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

            <div className="mb-4 alert alert-success border border-dark text-center text-uppercase">
                Liquidacion Total de Guardias: ${totalGuardias(liqguardias)}
            </div>


            <h4 className="mt-4 mb-4">
                <strong>
                    <u>
                        Liquidacion de Tareas Adicionales en turnos de guardia
        </u>
                </strong>
            </h4>


            <table class="table table-sm list border border-dark">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID Guardia</th>
                        <th scope="col">Operador</th>
                        <th scope="col">Inicio</th>
                        <th scope="col">Fin</th>
                        <th scope="col">Horas</th>
                        <th scope="col">Liquidacion</th>
                    </tr>
                </thead>
                <tbody>

                    {liqtarad.map((lt, index) => (
                        <tr key={index}>
                            <th scope="row">{lt.idturno}</th>
                            <td>{lt.operador}</td>
                            <td>{moment(lt.inicio).utcOffset("+000").format('DD/MM/YYYY HH:mm:ss')}</td>
                            <td>{moment(lt.fin).utcOffset("+000").format('DD/MM/YYYY HH:mm:ss')}</td>
                            <td>{lt.horas}</td>
                            <td>{lt.liquidacion}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Liquidacion
