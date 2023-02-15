import React from 'react'

const FormReportes = () => {
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

                <div className='col-md-4'>
                    <label>
                        <u>
                            Tipo de orden
                        </u>
                    </label>

                    <select className='form-control' defaultValue={"no"}>
                        <option value={"no"}>Selecciona una opcion...</option>
                    </select>

                </div>

                <div className='col-md-3'>
                    <label>
                        <u>
                            Desde
                        </u>
                    </label>

                    <input type={"date"} className="form-control" />

                </div>

                <div className='col-md-3'>
                    <label>
                        <u>
                            Hasta
                        </u>
                    </label>

                    <input type={"date"} className="form-control" />

                </div>

                <div className='col-md-2'>
                    
                    <button className='btn btn-primary btn-block mt-4'>
                        Generar
                    </button>
                    
                </div>


            </div>


        </div>
    )
}

export default FormReportes