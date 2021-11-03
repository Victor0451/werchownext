import React from 'react'

const FormRegistroNovedades = ({
    autos,
    patenteRef,
    novedadRef,
    regNovedad,
    errores
}) => {

    return (
        <div className="container border border-dark alert alert-primary mt-4">

            <h2>
                <strong>
                    <u>
                        Registro de Novedades
                    </u>
                </strong>
            </h2>

            {errores ? (
                <div className="alert alert-danger border border-dark text-center text-uppercase mt-4 container">{errores}</div>
            ) : null}

            <div className="mt-4 row border border-dark p-4">

                <div className="col-md-6">
                    {autos ? (
                        <div className="input-group mb-3">

                            <select className="custom-select" ref={patenteRef}>
                                <option value="no" >Selecciona el auto...</option>

                                {autos.map((a, index) => (
                                    <option key={index} value={a.patente}>{a.patente} - {a.auto}</option>

                                ))}



                            </select>
                        </div>
                    ) : (<div className="alert alert-info mt-4 border border-dark text-center text-uppercase">No hay autos registrados o activos</div>)}
                </div>

                <div className="col-md-3">
                    <button className="btn btn-primary btn-block" onClick={regNovedad}>
                        Registrar
                    </button>
                </div>

                <div className="col-md-3">
                    <a href="/" className="btn btn-danger btn-block">
                        Cancelar
                    </a>
                </div>

                <div className="col-md-12">

                    <textarea rows="4" className="form-control" ref={novedadRef} />

                </div>

            </div>

        </div>
    )
}

export default FormRegistroNovedades
