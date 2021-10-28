import React from 'react'
import Spinner from '../../../layout/Spinner'

const FormConstanciaAfiliacion = ({
    servicio,
    nombreRef,
    apellidoRef,
    dniRef,
    lugarRef,
    regConstancia,
    errores
}) => {

    if (!servicio) return <Spinner />

    return (
        <div className="container mt-4 border border-dark alert alert-primary p-4">

            <h2 className="mt-4 mb-4">
                <strong>
                    <u>
                        Generar Constancia de Afiliacion
                    </u>: {servicio.idservicio} - {servicio.apellido}, {servicio.nombre}
                </strong>
            </h2>


            {errores ? (
                <div className="alert alert-danger text-center text-uppercase border border-dark">
                    {errores}
                </div>
            ) : null}


            <div className="row border border-dark p-4">
                <div className="mt-4  col-md-4">
                    <label>
                        <u>
                            Apellido Solicitante :
                        </u>
                    </label>
                    <input type="text" className="form-control" ref={apellidoRef} />
                </div>

                <div className="mt-4  col-md-4">
                    <label>
                        <u>
                            Nombre Solicitante :
                        </u>
                    </label>
                    <input type="text" className="form-control" ref={nombreRef} />
                </div>

                <div className="mt-4  col-md-4">
                    <label>
                        <u>
                            DNI Solicitante :
                        </u>
                    </label>
                    <input type="number" className="form-control" ref={dniRef} />
                </div>

                <div className="mt-4  col-md-6">
                    <label>
                        <u>
                            Lugar a Presentar:
                        </u>
                    </label>
                    <textarea rows="3" className="form-control" ref={lugarRef} />
                </div>

                <div className="mt-3  col-md-6">
                    <button className="mt-5 btn btn-primary mr-1" onClick={regConstancia}>Generar Constancia</button>
                    <a href="/sepelio/servicios/listado" className="mt-5 btn btn-danger text-white">Cancelar</a>
                </div>





            </div>

        </div>
    )
}

export default FormConstanciaAfiliacion
