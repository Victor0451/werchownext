import React from 'react'

const ModalIngresos = ({
    errores,
    descripcionIRef,
    cantidadIRef,
    importeIRef,
    regIngreso

}) => {
    return (

        <div
            className="modal fade"
            id="modalIngresos"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            <u>Gestion de Ingresos</u>
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
                        <div className="border border-dark p-4 ">
                            <div className='container border border-dark p-4 mt-4'>

                                <h2>
                                    <strong>
                                        <u>
                                            Registrar Egresos
                                        </u>
                                    </strong>
                                </h2>

                                <div className='row mt-4 border border-dark p-4'>

                                    <div className='col-md-12'>

                                        <label>
                                            Descripcion
                                        </label>

                                        <textarea className='form-control' rows={3} placeholder='Descripcion' ref={descripcionIRef} />

                                    </div>

                                    <div className='col-md-4 mt-4'>

                                        <label>
                                            Cantidad
                                        </label>

                                        <input type='number' defaultValue={1} className='form-control' ref={cantidadIRef} />

                                    </div>

                                    <div className='col-md-4 mt-4'>

                                        <label>
                                            Importe
                                        </label>

                                        <input type='number' className='form-control' ref={importeIRef} />

                                    </div>

                                    <div className='col-md-4 mt-4'>

                                        <button
                                            className='btn btn-primary btn-block mt-4'
                                            onClick={regIngreso}
                                            data-dismiss="modal"

                                        >
                                            Registrar Ingreso
                                        </button>

                                    </div>

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
        </div>


    )
}

export default ModalIngresos
