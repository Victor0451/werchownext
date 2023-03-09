import moment from 'moment'
import React from 'react'

const ModalBuscarOrden = ({
    orden,
    buscarOrden,
    ordFabianRef,
    ordOteroRef,
    levantarOrden,
    impLiqRef,
    modifImporte
}) => {



    return (
        <div className="modal fade" id="ModalBuscarOrden" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Buscar Orden Medica</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-4">

                        <div className='row border border-dark p-4'>

                            <div className='col-md-6'>

                                <div className='col-md-8'>

                                    <label>
                                        <u>
                                            Ingresar N° de Orden (Otero)
                                        </u>
                                    </label>

                                    <input type={"text"} className="form-control" ref={ordOteroRef} placeholder="Ej: O-1520" />

                                </div>

                                <div className='col-md-6 mt-2'>

                                    <button
                                        className='btn btn-primary'
                                        onClick={() => { buscarOrden('O') }}
                                    >
                                        Buscar
                                    </button>

                                </div>

                            </div>

                            <div className='col-md-6'>

                                <div className='col-md-8'>

                                    <label>
                                        <u>
                                            Ingresar N° de Orden (Fabian)
                                        </u>
                                    </label>

                                    <input type={"text"} className="form-control" ref={ordFabianRef} placeholder="Ej: 000000215230" />

                                </div>

                                <div className='col-md-6 mt-2'>

                                    <button
                                        className='btn btn-primary'
                                        onClick={() => { buscarOrden('F') }}
                                    >
                                        Buscar
                                    </button>

                                </div>

                            </div>

                        </div>




                        {orden.length > 0 ? (

                            <div className='border border-dark mt-4 p-4'>

                                <h4>
                                    <u>
                                        Detalle Orden
                                    </u>
                                </h4>

                                <table className="table table-responsive mt-4">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Orden</th>
                                            <th scope="col">HC</th>
                                            <th scope="col">DNI</th>
                                            <th scope="col">Prestador</th>
                                            <th scope="col">Servicio</th>
                                            <th scope="col">Importe</th>
                                            <th scope="col">Anulado</th>
                                            <th scope="col">Liquidado</th>
                                            <th scope="col">N° Orden Pago</th>
                                            <th scope="col">Fecha Orden Pago</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            orden.map((o, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{moment(o.FECHA).format('DD/MM/YYYY')}</td>
                                                    <td>{o.ORDEN}</td>
                                                    <td>{o.CONTRATO}</td>
                                                    <td>{o.NRO_DOC}</td>
                                                    <td>{o.PRESTADO}</td>
                                                    <td>{o.SERVICIO}</td>
                                                    <td className='input-group input-group-sm'>
                                                        <input
                                                            type={"number"}
                                                            className="form-control"
                                                            defaultValue={o.IMP_LIQ}
                                                            ref={impLiqRef}
                                                        />

                                                    </td>
                                                    <td>
                                                        {
                                                            !o.ANULADO || o.ANULADO === 'FALSO' ?
                                                                (<>No</>) :
                                                                (<>Si</>)
                                                        }
                                                    </td>
                                                    <td>{
                                                        !o.CONTROL ?
                                                            (<>No</>) :
                                                            (<>Si</>)
                                                    }
                                                    </td>
                                                    <td>
                                                        {
                                                            !o.NORDEN ?
                                                                (<>No Registra</>) :
                                                                (<>{o.NORDEN}</>)
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            !o.FECHA_CONTROL ?
                                                                (<>No Registra</>) :
                                                                (<>{moment(o.FECHA_CONTROL).format('DD/MM/YYYY')}</>)
                                                        }
                                                    </td>

                                                    <td>
                                                        {!o.CONTROL ? (
                                                            <>
                                                                <button className='btn btn-success btn-sm'>
                                                                    <i className="fa fa-check" aria-hidden="true" onClick={() => levantarOrden(o.SUC, o.ORDEN)}></i>
                                                                </button>
                                                                <button className='btn btn-warning btn-sm ml-1' onClick={() => modifImporte(o.SUC, o.ORDEN)}>
                                                                    <i className="fa fa-pencil" aria-hidden="true" ></i>
                                                                </button>
                                                            </>
                                                        ) : null}


                                                    </td>

                                                </tr>
                                            ))
                                        }


                                    </tbody>
                                </table>

                            </div>

                        ) : null}


                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBuscarOrden