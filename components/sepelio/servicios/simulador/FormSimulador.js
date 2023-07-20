import React from 'react'

const FormSimulador = ({
    kmRef,
    naftaRef,
    simularTraslado,
    valTras
}) => {
    return (
        <div className='container mt-4 border border-dark p-4 list'>

            <h2>
                <strong>
                    <u>
                        Simulador Valor de Traslado
                    </u>
                </strong>
            </h2>


            <div className='mt-4 border border-dark p-4'>

                <div className='row'>

                    <div className='col-md-4'>
                        <label>
                            <u>
                                Km
                            </u>
                        </label>

                        <input className='form-control' type={"number"} ref={kmRef} />
                    </div>

                    <div className='col-md-4'>
                        <label>
                            <u>
                                Valor Nafta
                            </u>
                        </label>

                        <input className='form-control' type={"number"} ref={naftaRef} />
                    </div>

                    <div className='col-md-4'>
                        <button className='btn btn-primary btn-block mt-4' onClick={simularTraslado}>
                            Simular
                        </button>
                    </div>

                </div>


                {
                    valTras > 0 ? (

                        <div className='mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase'>
                            El valor del traslado para este caso es de: ${valTras}
                        </div>

                    ) : null

                }

            </div>


        </div>
    )
}

export default FormSimulador