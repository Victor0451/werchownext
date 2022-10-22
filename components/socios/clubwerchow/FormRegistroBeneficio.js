import moment from 'moment'
import React from 'react'

const FormRegistroBeneficio = ({
    socio,
    errores,
    dniRef,
    buscarSocio,
    empresa,
    montoRef,
    registrarDescuento,
    moro
}) => {


    return (
        <div className='container border border-dark listcw p-4 mt-4'>

            <div className="col-md-12 d-flex justify-content-center">

                <img src="/img/logocw2.png" className="clublogo" />

            </div>


            <div className='border border-dark mt-4 p-4 list'>

                <h5 className="mb-4">
                    <strong className='text-uppercase'>
                        Registro de Beneficios
                    </strong>
                </h5>



                {empresa ? (
                    <div className='row'>
                        <div className='col-md-6'>
                            <label>

                                Beneficio para: {""} <strong className='text-uppercase'> {empresa.comercio}</strong>

                            </label>

                            {/* <input type={"text"} className="form-control" value={empresa.comercio} /> */}

                        </div>


                        <div className='col-md-4'>
                            <label>

                                Ingresa el DNI: {" "}

                            </label>

                            <input
                                type={"text"}
                                className="form-control"
                                ref={dniRef}
                            />

                        </div>


                        <div className='col-md-2'>

                            <label>
                            </label>

                            <button
                                className='mt-4 btn btn-primary'
                                onClick={() => buscarSocio()}
                            >
                                Buscar
                            </button>

                        </div>
                    </div>
                ) : null}



                {errores ? (
                    <div className='mt-4 mb-4 alert alert-danger text-center text-uppercase border border-dark'>
                        {errores}
                    </div>

                ) : null}


                {

                    socio ? (
                        <>

                            <div className='row mt-4'>

                                <div className='col-md-6'>
                                    <label>

                                        Afiliado: {" "} <strong>{`${socio.APELLIDOS}, ${socio.NOMBRES}`}</strong>

                                    </label>

                                    {/* <input type={"text"} className="form-control" value={`${socio.APELLIDOS}, ${socio.NOMBRES}`} /> */}

                                </div>

                            </div>

                            {

                                moro === true ?

                                    (
                                        <div className='mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase'>
                                            Tu ficha registra deuda y esta en estado de mora. No podras acceder a los beneficios del Club Werchow,
                                            acercate a tu sucursal mas cercana y regulariza tu situacion. Gracias!
                                        </div>

                                    ) : moro === false ?
                                        (



                                            <div className='row '>

                                                <div className='col-md-4'>
                                                    <label>

                                                        Monto de la compra:

                                                    </label>

                                                    <input type={"number"} className="form-control" ref={montoRef} defaultValue={0} />


                                                </div>
                                            </div>


                                        ) : null
                            }



                            {
                                moro === true ? null
                                    : moro === false ? (
                                        <div className='row  d-flex justify-content-center'>
                                            <div className='col-md-4'>
                                                <button className='btn btn-primary btn-block mt-4' onClick={registrarDescuento}>
                                                    Registrar
                                                </button>
                                            </div>
                                            <div className='col-md-4'>
                                                <button className='btn btn-danger btn-block mt-4'>
                                                    Cancelar
                                                </button>
                                            </div>
                                        </div>
                                    ) : null
                            }


                        </>
                    ) : null

                }


            </div>


        </div >
    )
}

export default FormRegistroBeneficio