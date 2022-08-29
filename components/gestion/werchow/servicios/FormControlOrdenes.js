import React from 'react'

const FormControlOrdenes = ({
    traerListado,
    desdeRef,
    hastaRef,
    errores,

}) => {
    return (
        <div className='container border border-dark mt-4 p-4 list'>

            <h2>
                <strong>
                    <u>
                        Control de Ordenes
                    </u>
                </strong>
            </h2>


            <div className='border border-dark mt-4 mb-4 p-4'>

                <div className='row'>

                    <div className='col-md-4'>

                        <label>
                            Desde
                        </label>

                        <input
                            className='form-control'
                            type='date'
                            ref={desdeRef}
                        />

                    </div>

                    <div className='col-md-4'>

                        <label>
                            Hasta
                        </label>

                        <input
                            className='form-control'
                            type='date'
                            ref={hastaRef}
                        />

                    </div>


                    {errores ? (
                        <div className='border border-dark alert alert-danger text-center text-uppercase mt-4 mb-4'>
                            {errores}
                        </div>
                    )
                        : null}

                    <div className='col-md-4 mt-2'>

                        <button
                            className='btn btn-primary mt-4'
                            onClick={traerListado}
                        >
                            Buscar
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FormControlOrdenes