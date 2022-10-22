import moment from 'moment'
import React from 'react'

const FormRegistroBeneficio = ({
    socio,
    errores,
    dniRef,
    buscarSocio,
    empresa,
    montoRef,
    montoFinal,
    calcMontoFinal,
    descuentoRef,
    registrarDescuento,
    moro
}) => {


    return (
        <div className='container border border-dark listcw p-4 mt-4'>

            <div className="col-md-12 d-flex justify-content-center">

                <img src="/img/logocw2.png" className="clublogo" />

            </div>


            <div className='border border-dark mt-4 p-4 list'>

                <h3 className="mb-4">
                    <strong>
                        <u>Registro de Beneficios</u>
                    </strong>
                </h3>



                {empresa ? (
                    <div className='row'>
                        <div className='col-md-6'>
                            <label>
                                <u>
                                    Beneficio para:
                                </u>
                            </label>

                            <input type={"text"} className="form-control" value={empresa.comercio} />

                        </div>


                        <div className='col-md-4'>
                            <label>
                                <u>
                                    Ingresa el DNI:
                                </u>
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
                                        <u>
                                            Afiliado:
                                        </u>
                                    </label>

                                    <input type={"text"} className="form-control" value={`${socio.APELLIDOS}, ${socio.NOMBRES}`} />

                                </div>

                                <div className='col-md-4'>
                                    <label>
                                        <u>
                                            Es:
                                        </u>
                                    </label>

                                    {
                                        socio.perfil === "T" ? (
                                            <input type={"text"} className="form-control" value={"Titular"} />

                                        ) : socio.perfil === "A" || !socio.perfil ? (
                                            <input type={"text"} className="form-control" value={"Adherente"} />

                                        ) : null
                                    }


                                </div>

                                <div className='col-md-4 mt-4'>
                                    <label>
                                        <u>
                                            Fecha de Alta:
                                        </u>
                                    </label>

                                    <input type={"text"} className="form-control" value={moment(socio.ALTA).format(`DD/MM/YYYY`)} />


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



                                            <div className='row mt-4'>

                                                <div className='col-md-4 mt-4'>
                                                    <label>
                                                        <u>
                                                            Monto de la compra:
                                                        </u>
                                                    </label>

                                                    <input type={"number"} className="form-control" ref={montoRef} onChange={calcMontoFinal} defaultValue={0} />


                                                </div>

                                                <div className='col-md-4 mt-4'>
                                                    <label>
                                                        <u>
                                                            Descuento (%):
                                                        </u>
                                                    </label>

                                                    <input type={"text"} className="form-control" value={`${empresa.descuento}`} ref={descuentoRef} />


                                                </div>

                                                <div className='col-md-4 mt-4'>
                                                    <label>
                                                        <u>
                                                            Monto Final:
                                                        </u>
                                                    </label>

                                                    <input type={"number"} className="form-control" value={montoFinal} />


                                                </div>
                                            </div>


                                        ) : null
                            }



                            {
                                moro === true ? null
                                    : moro === false ? (
                                        <div className='row mt-5 d-flex justify-content-center'>
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


        </div>
    )
}

export default FormRegistroBeneficio