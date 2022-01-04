import React, { useState } from 'react'
import Spinner from '../../layout/Spinner'
import axios from 'axios'

const Planes = ({ planes }) => {

    if (!planes) return <Spinner />

    const [detalle, guardarDetalle] = useState(null)
    const [titulo, guardarTitulo] = useState(null)


    const traerDetalle = async (id, plan) => {
        guardarTitulo(null)

        axios.get(`http://192.168.1.102:5002/api/ventas/planes/detalleplan/${id}`)
            .then(res => { guardarDetalle(res.data) })
            .catch(error => { console.log(error) })

        guardarTitulo(plan)

    }


    return (
        <div className="mt-4 container border border-dark list p-4">

            <h2><strong><u>
                Planes Vigentes
                </u></strong></h2>

            <table className=" mt-4 table table-sm list border border-dark">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Plan</th>
                        <th scope="col">Finalidad</th>
                        <th scope="col">Codigo</th>
                        <th scope="col">Detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {planes.map((p, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{p.plan}</td>
                            <td>{p.tipo_plan}</td>
                            <td>{p.codigo}</td>
                            <td><button className="btn btn-sm btn-info"
                                data-toggle="modal"
                                data-target="#staticBackdrop"
                                onClick={() => traerDetalle(p.id_plan, p.plan)}
                            >Ver</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* MODAL */}

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><u>Detalles del Plan</u>: {titulo}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {!detalle ? (<Spinner />) :
                                (
                                    <table className=" mt-4 table table-sm list border border-dark">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Detalle</th>
                                                <th scope="col">Cuota</th>
                                                <th scope="col">Sub. Extraordinario</th>
                                                <th scope="col">Vigencia</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {detalle.map((d, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{d.detalle}</td>
                                                    <td>{d.cuota}</td>
                                                    {
                                                        d.sub_ext == 1 ? (
                                                            <td>Si</td>
                                                        ) : d.sub_ext == 0 ? (
                                                            <td>No</td>
                                                        ) : null
                                                    }
                                                    <td>{d.vigencia}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )
                            }

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Planes
