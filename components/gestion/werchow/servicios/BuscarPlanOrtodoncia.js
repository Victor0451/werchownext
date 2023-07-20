import React from 'react'

const BuscarPlanOrtodoncia = ({
    traerPlan,
    socioRef,
    errores
}) => {
    return (

        <div className='container border border-dark p-4 mt-4 list'>

            <h2>
                <u>
                    Buscar Plan de Ortodoncia
                </u>
            </h2>

            <div className='row border border-dark p-4 mt-4 d-flex justify-content-center' >


                <div className='col-md-6'>

                    <label>
                        <u>
                            Ingresa N° Socio o DNI
                        </u>
                    </label>

                    <input type={"text"} className="form-control" ref={socioRef} />

                </div>

                <div className='col-md-4'>

                    <button
                        className='btn btn-primary btn-block mt-4'
                        onClick={traerPlan}
                    >
                        Buscar Plan
                    </button>

                </div>

                {errores ? (
                    <div className='col-md-12 mt-4 mb-4 border border-dark alert alert-danger text-center text-uppercase'>
                        {errores}
                    </div>
                ) : null}

            </div>


        </div>



    )
}

export default BuscarPlanOrtodoncia