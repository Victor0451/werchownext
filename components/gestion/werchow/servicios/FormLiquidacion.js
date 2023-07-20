import React from 'react'

const FormLiquidacion = ({
    desdeRef,
    hastaRef,
    medicoRef,
    calcularLiquidacion,
    errores,
}) => {
    return (
        <div className='container border border-dark p-4 mt-4 list'>

            <h2>
                <strong>
                    <u>
                        Liquidacion De Medicos
                    </u>
                </strong>
            </h2>

            <div className="row mt-4 border border-dark p-4">

                <div className="mt-4 col-md-4">
                    <label>
                        <u>Medico</u>
                    </label>

                    <select className="custom-select" ref={medicoRef} >
                        <option value="no">Seleccionar Medico...</option>
                        <option value="C_BIO">Mendez, Mara</option>
                    </select>
                </div>

                <div className="mt-4 col-md-4">
                    <label>
                        <u>Desde</u>
                    </label>
                    <input type="date" className="form-control" ref={desdeRef} />
                </div>

                <div className="mt-4 col-md-4">
                    <label>
                        <u>Hasta</u>
                    </label>
                    <input type="date" className="form-control" ref={hastaRef} />
                </div>

                <div className="mt-4 col-md-4">
                    <button className='btn btn-info btn-block mt-4' onClick={calcularLiquidacion}>
                        Generar
                    </button>
                </div>

                <div className="mt-4 col-md-8">

                    {errores ? (

                        <div className="mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase" >
                            {errores}
                        </div>

                    ) : null}

                </div>


            </div>

        </div >
    )
}

export default FormLiquidacion