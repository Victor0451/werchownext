import React from 'react'
import ReactToPrint from 'react-to-print'
import Notificacion2 from './Notificacion2'

const ModalNotificaciones = ({ casos, userData }) => {
    let componentRef = React.createRef();



    return (
        <div
            className={`modal fade bd-example-modal-xl-todo`}
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content p-2">
                    <div className="jumbotron">
                        <div className="mt-4 p-4 border">
                            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
                            <div className="row d-flex justify-content-center">
                                <ReactToPrint
                                    trigger={() => (
                                        <a href="#" className="btn btn-primary">
                                            imprimir{" "}
                                        </a>
                                    )}
                                    content={() => componentRef}
                                />

                                <a
                                    href="#"
                                    className="btn btn-secondary ml-1"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Cerrar
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="todo" ref={(el) => (componentRef = el)}>
                        {casos.map((caso) => (
                            <>
                                <Notificacion2 caso={caso} userData={userData} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNotificaciones
