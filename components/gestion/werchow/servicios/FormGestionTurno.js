import React from 'react'

const FormGestionTurno = ({
    medicos,
    medicoRef,
    diaRef,
    turnoRef,
    errores,
    buscarListadoTurnos
}) => {
    return (
        <div className='container border border-dark list mt-4 p-4'>

            <h2>
                <strong>
                    <u>
                        Gestion de Turnos Medicos
                    </u>
                </strong>
            </h2>

            <div className='border border-dark p-4 mt-4'>

                <div className='row'>

                    {medicos ? (
                        <div className="col-md-4">
                            <label>
                                Doctor:
                            </label>

                            <select className="custom-select" ref={medicoRef}>
                                <option value="no" >Selecciona una opcion</option>
                                {medicos.map((m, index) => (
                                    <option key={index} value={m.COD_PRES}>{m.NOMBRE}</option>
                                ))}
                            </select>
                        </div>
                    ) : (
                        <div className="col-md-4 alert alert-info  border border-dark text-center text-uppercase">
                            No hay medicos registrados
                        </div>
                    )}



                    <div className="col-md-3">
                        <label>
                            Dia:
                        </label>

                        <input
                            type='date'
                            className='form-control'
                            ref={diaRef}
                        />
                    </div>

                    <div className="col-md-3">
                        <label>
                            Turno:
                        </label>

                        <select className="custom-select" ref={turnoRef}>
                            <option value="no" >Selecciona una opcion</option>
                            <option value="mañana" >Mañana</option>
                            <option value="tarde" >Tarde</option>

                        </select>
                    </div>

                    <div className="col-md-2 mt-2">
                        <button
                            className='btn btn-info mt-4'
                            onClick={buscarListadoTurnos}
                        >
                            Buscar
                        </button>
                    </div>

                    {errores ? (
                        <div className='col-md-12 mt-4 border border-dark text-center text-uppercase alert alert-danger'>
                            {errores}
                        </div>
                    ) : null}

                </div>



            </div>





        </div>
    )
}

export default FormGestionTurno