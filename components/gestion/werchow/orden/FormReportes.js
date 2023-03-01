import React from 'react'

const FormReportes = ({
    desdeRef,
    hastaRef,
    ordenRef,
    autorizadaRef,
    tarerRedumenOrdenesAutorizadas,
    errores
}) => {
    return (
        <div className='mt-4 container border border-dark p-4 list'>


            <h2>
                <strong>
                    <u>
                        Reportes sobre ordenes de pagos
                    </u>
                </strong>
            </h2>


            <div className='row mt-4 border border-dark p-4'>

                <h4>
                    <u>
                        <strong>
                            Cantidad de ordenes por dia, segun tipo de orden
                        </strong>
                    </u>
                </h4>

                <div className='row mt-4'>

                    <div className='col-md-3'>
                        <label>
                            <u>
                                Tipo Orden
                            </u>
                        </label>

                        <select className="form-control" defaultValue={"no"} ref={ordenRef}>

                            <option value={"no"}>Eligue una opcion...</option>
                            <option value={"Contable"}>Contable</option>
                            <option value={"Ordenes Medica"}>Consultas Medicas</option>
                            <option value={"Practicas Medica"}>Practicas Medicas</option>

                        </select>

                    </div>

                    <div className='col-md-3'>
                        <label>
                            <u>
                                Desde
                            </u>
                        </label>

                        <input type={"date"} className="form-control" ref={desdeRef} />

                    </div>

                    <div className='col-md-3'>
                        <label>
                            <u>
                                Hasta
                            </u>
                        </label>

                        <input type={"date"} className="form-control" ref={hastaRef} />

                    </div>

                    <div className='col-md-3'>
                        <label>
                            <u>
                                Autorizadas?
                            </u>
                        </label>

                        <select className="form-control" defaultValue={"no"} ref={autorizadaRef} >

                            <option value={"no"}>Eligue una opcion...</option>
                            <option value={1}>Si</option>
                            <option value={0}>No</option>

                        </select>

                    </div>

                    <div className='col-md-2'>

                        <button className='btn btn-primary btn-block mt-4' onClick={tarerRedumenOrdenesAutorizadas}>
                            Generar
                        </button>

                    </div>


                    {
                        errores ? (
                            <div className='mt-4 mb-4 col-md-12 alert alert-danger border border-dark text-center text-uppercase'>
                                {errores}
                            </div>
                        ) : null
                    }


                </div>


            </div>

        </div>
    )
}

export default FormReportes