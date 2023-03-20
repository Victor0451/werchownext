import moment from 'moment'
import React from 'react'

const ModalAccionesTemp = ({
    caso,
    regDevolucion,
    observacionRef
}) => {

    return (
        <div
            className={`modal fade`}
            id="modalAccionesTemp"
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Rergistar Devolucion</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div className='border border-dark p-4'>

                            <h4>
                                <strong>
                                    <u>
                                        Informacion del caso
                                    </u>
                                </strong>

                            </h4>

                            <div className='row mt-4'>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Legajo: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.CONTRATO}
                                        //ref={contratoRef}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Apellido: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.APELLIDOS}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Nombre: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.NOMBRES}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Telefono: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.TELEFONO}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Celular: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.MOVIL}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Domicilio: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.CALLE}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> N°: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.NRO_CALLE}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Barrio: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.BARRIO}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Localidad: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={caso.LOCALIDAD}
                                        readOnly
                                    />
                                </div>

                            </div>

                        </div>

                        <div className='border border-dark p-4 mt-4'>

                            <h4>
                                <strong>
                                    <u>
                                        Devolucion
                                    </u>
                                </strong>

                            </h4>

                            <div className='row mt-4'>


                                <div className="form-group col-md-4">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Fecha: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={moment().format('DD/MM/YYYY')}
                                        readOnly
                                    />
                                </div>



                                <div className="form-group col-md-8">

                                    {caso.estado === 0 ? (

                                        <label>
                                            <strong>
                                                {" "}
                                                <u> Devolucion: </u> {caso.observacion}
                                            </strong>
                                        </label>

                                    ) : caso.estado === 1 ? (

                                        <label>
                                            <strong>
                                                {" "}
                                                <u> Devolucion: </u>
                                            </strong>
                                        </label>

                                    ) : null}


                                    <textarea
                                        rows={5}
                                        className="form-control"
                                        ref={observacionRef}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => regDevolucion(caso.idcaso)}>Registrar</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAccionesTemp
