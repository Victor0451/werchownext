import React from 'react'
import Spinner from './Spinner'
import moment from 'moment'

const ModalNovedades = ({ novedades }) => {
    if (!novedades) return <Spinner />
    return (
        <div className="modal fade" id="novedades" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Novedades del Sistema</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div className='border border-dark mt-4 p-4'>
                            <table className="table borderImp table-responsive">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Novedades</th>
                                        <th scope="col">Operador</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        novedades.map((n, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{moment(n.fecha).format('DD/MM/YYYY HH:mm')}</td>
                                                <td>{n.novedad}</td>
                                                <td>{n.operador}</td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNovedades