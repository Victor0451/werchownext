import moment from 'moment'
import React from 'react'

const FromRespuesta = ({ operador, respuestaRef }) => {
    return (
        <div className="container mt-4 border border-dark list p-4">
            <h2>
                <strong>
                    <u>
                        Cargar Respuesta
                    </u>
                </strong>
            </h2>

            <div className=" row mt-4 border border-dark p-4">

                <div className="col-md-4">
                    <label>
                        <strong>
                            <u>
                                Operador
        </u>
                        </strong>
                    </label>
                    <input type="text" className="form-control" value={operador} />
                </div>

                <div className="col-md-4">
                    <label>
                        <strong>
                            <u>
                                Fecha
        </u>
                        </strong>
                    </label>
                    <input type="text" className="form-control" defaultValue={moment().format('DD/MM/YYYY')} />
                </div>

                <div className="mt-4 col-md-12">
                    <label>
                        <strong>
                            <u>
                                Respuesta
        </u>
                        </strong>
                    </label>

                    <textarea rows="3" className="form-control" ref={respuestaRef} />
                </div>
            </div>

        </div>
    )
}

export default FromRespuesta

