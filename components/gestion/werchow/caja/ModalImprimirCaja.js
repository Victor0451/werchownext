import React from 'react'
import moment from 'moment'

const ModalImprimirCaja = ({
    ingresos,
    egresos,
    calcTotal,
    imprimir,
    fec
}) => {
    return (

        <div
            className="modal fade"
            id="modalImprimirCaja"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            <u>Imprimir Caja</u>
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div id="caja" className="border border-dark p-4 ">
                            <div className='container border border-dark p-4 mt-4'>

                                <h2>
                                    <strong>
                                        <u>
                                            Caja Otero
                                        </u>: {
                                            fec ? (moment(fec).format('DD/MM/YYYY')) : null
                                        }
                                    </strong>
                                </h2>

                                <div className='row mt-4 border border-dark p-4'>

                                    <div className='col-md-6 border border-dark'>
                                        {!ingresos ? (
                                            <div className='mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase'>
                                                No hay ingresos registados
                                            </div>
                                        ) : (

                                            <>
                                                <h4>
                                                    <strong>
                                                        <u>
                                                            Ingresos
                                                        </u>
                                                    </strong>
                                                </h4>

                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">DETALLE</th>
                                                            <th scope="col">IMPORTE</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            ingresos.map((i, index) => (
                                                                <tr key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{i.DETALLE}</td>
                                                                    <td>{i.IMPORTE}</td>

                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                                <div className='mt-4 mb-4 alert alert-success border border-dark text-center text-uppercase'>
                                                    Total Ingresos: ${calcTotal(ingresos)}
                                                </div>
                                            </>
                                        )}


                                    </div>

                                    <div className='col-md-6 border border-dark'>
                                        {!egresos ? (
                                            <div className='mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase'>
                                                No hay egresos registados
                                            </div>
                                        ) : (

                                            <>
                                                <h4>
                                                    <strong>
                                                        <u>
                                                            Egresos
                                                        </u>
                                                    </strong>
                                                </h4>

                                                <table className="table">
                                                    <thead className="thead-dark">
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">DETALLE</th>
                                                            <th scope="col">IMPORTE</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {
                                                            egresos.map((e, index) => (
                                                                <tr key={index}>
                                                                    <th scope="row">{index + 1}</th>
                                                                    <td>{e.DETALLE}</td>
                                                                    <td>{e.IMPORTE}</td>

                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                                <div className='mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase'>
                                                    Total Egresos: ${calcTotal(egresos)}
                                                </div>
                                            </>
                                        )}

                                    </div>

                                    <div className='col-md-12'>
                                        <div className='mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase'>
                                            Valores a Depositar: ${calcTotal(ingresos) - calcTotal(egresos)}
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className=" list mt-4 border border-dark p-4">
                            <h3>
                                <strong>
                                    <u>Opciones</u>
                                </strong>
                            </h3>
                            <div className="row border border-dark p-4 mt-4">
                                <div className="col-md-12 d-flex justify-content-center">
                                    <button
                                        className=" btn btn-primary "
                                        onClick={imprimir}
                                    >
                                        Imprimir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"

                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default ModalImprimirCaja
