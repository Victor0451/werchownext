import React from 'react'
import FormAcciones from './FormAcciones'
import moment from 'moment'

const ModalAcciones = ({ modal,
    gestion,
    caso,
    accion,
    fechaaccionRef,
    fechaaccionnuevaRef,
    obsRef,
    nuevaaccionRef,
    contratoRef,
    idcasoRef,
    handleChange,
    obtenerDatos,
}) => {
    let inicio = moment(caso.alta).format('YYYY-MM-DD')

    let anti = moment().diff(inicio, 'years')

    return (
        <div
            className={`modal fade bd-example-modal-${modal}`}
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            Registrar Accion
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

                        {
                            anti > 3 ? (
                                <div className=' alert alert-info mt-4 mb-4 border border-dark text-center text-uppercase'>
                                    La antigüedad del socio en la empresa es de: {anti} años,
                                    se habilito para estos casos consideraciones en las negociaciones
                                </div>
                            ) : null
                        }


                        <FormAcciones
                            gestion={gestion}
                            caso={caso}
                            accion={accion}
                            fechaaccionRef={fechaaccionRef}
                            fechaaccionnuevaRef={fechaaccionnuevaRef}
                            obsRef={obsRef}
                            nuevaaccionRef={nuevaaccionRef}
                            contratoRef={contratoRef}
                            idcasoRef={idcasoRef}
                            handleChange={handleChange}
                            obtenerDatos={obtenerDatos}
                        />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={obtenerDatos}
                            data-dismiss="modal"
                        >
                            Registrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAcciones

