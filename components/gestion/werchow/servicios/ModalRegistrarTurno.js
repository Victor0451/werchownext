import React from 'react'

const ModalRegistrarTurno = ({
    horaRef,
    pacienteRef,
    obraSocRef,
    telefonoRef,
    registrarTurno,
    errores,
    usaWerchow,

}) => {
    return (
        <div
            className="modal fade"
            id="modalRegistro"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog  modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Turno
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
                    <div className="modal-body p-4">

                        <div className='row'>

                            <div className="col-md-4">

                                <label>
                                    Hora:
                                </label>

                                <input
                                    type="time"
                                    className="form-control"
                                    ref={horaRef}
                                />

                            </div>

                            <div className="col-md-4">

                                <label>
                                    Paciente:
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    ref={pacienteRef}
                                />

                            </div>

                            <div className="col-md-4 ">
                                <label>
                                    <strong>
                                        <u>Tiene Werchow o San Valentin</u>
                                    </strong>
                                </label>
                                <br />
                                <div className="form-check ">
                                    <input
                                        className="form-check-input "
                                        type="radio"
                                        id="covid"
                                        name="motivo"
                                        value="option1"
                                        onClick={() => usaWerchow("si")}
                                    />
                                    <label className="form-check-label" for="covid">
                                        Si
                                    </label>
                                </div>

                                <div className="form-check ">
                                    <input
                                        className="form-check-input "
                                        type="radio"
                                        id="otro"
                                        name="motivo"
                                        value="option1"
                                        onClick={() => usaWerchow("no")}
                                        defaultChecked={true}
                                    />
                                    <label className="form-check-label" for="otro">
                                        No
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-4 mt-4">

                                <label>
                                    Obra Social:
                                </label>

                                <input
                                    id="obrasoc"
                                    type="text"
                                    className="form-control"
                                    ref={obraSocRef}
                                />

                            </div>

                            <div className="col-md-4 mt-4">

                                <label>
                                    Telefono:
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    ref={telefonoRef}
                                />

                            </div>

                        </div>

                        {errores ? (
                            <div className='col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-danger'>
                                {errores}
                            </div>
                        ) : null}


                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            // data-dismiss="modal"
                            onClick={registrarTurno}
                        >
                            Registrar
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Cancelar
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRegistrarTurno