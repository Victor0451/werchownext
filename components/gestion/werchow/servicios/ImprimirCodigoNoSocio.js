import React from 'react'

const ImprimirCodigoNoSocio = ({
    registro,
    imprimir
}) => {
    return (
        <div className='containerImp border border-dark list p-4 mt-4 mb-4 col-md-6'>



            <div className='borderImp p-4 mt-4 ' id='orden'>

                <div className="col-md-12 d-flex justify-content-center">

                    <img src="/img/logo.png" className="werchowlogo" />

                </div>

                <h4 className='mt-4'>
                    <strong>
                        <u>
                            Codigo Generado
                        </u>
                    </strong>
                </h4>

                <div className='row'>

                    <div className='col-md-8 mt-4'>

                        <label>
                            <u>
                                Apellido y Nombre
                            </u>
                        </label>

                        <input type="text" className="form-control" defaultValue={registro.nosocio} />

                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                DNI
                            </u>
                        </label>

                        <input type="number" className="form-control" defaultValue={registro.dni} />

                    </div>

                    <div className='col-md-4 mt-4'>

                        <label>
                            <u>
                                Codigo
                            </u>
                        </label>

                        <input type="number" className="form-control" defaultValue={registro.codigo} />

                    </div>

                </div>

            </div>

            <div className='col-md-12 mt-4 d-flex justify-content-end'>

                <button className='btn btn-success'
                    onClick={imprimir}
                >
                    Descargar
                </button>

            </div>

        </div>
    )
}

export default ImprimirCodigoNoSocio