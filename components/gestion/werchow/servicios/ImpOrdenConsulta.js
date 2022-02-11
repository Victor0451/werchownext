import moment from 'moment'
import React from 'react'
import Spinner from '../../../layout/Spinner'


const ImpOrdenConsulta = ({
    socio,
    orden,
    medico,
    practicas,
    farmacia,
    calcularTotalPracticas,
    flag

}) => {



    if (!socio) return <Spinner />

    console.log(farmacia)

    return (
        <div className=' p-4 borderImp list'>

            <div className="row">
                <div className="col-md-8">
                    <h2 className="mt-4 mb-4">
                        <strong>
                            <u>Subsidio Medico</u>
                        </strong>
                    </h2>
                </div>
                <div className="mt-4 col-md-4 d-flex justify-content-end">
                    <img src="/img/logo.png" className="werchowlogo" />
                </div>
            </div>

            <div className='mt-4 borderImp p-4 row'>

                <div className='row  col-md-8'>
                    <div className='col-md-12'>
                        <strong>
                            <u>Beneficiario</u>: {socio.APELLIDOS}, {socio.NOMBRES}
                        </strong>
                    </div>

                    <div className='mt-2 col-md-12'>
                        <strong>
                            <u>N° Socio</u>: {socio.CONTRATO}
                        </strong>
                    </div>

                    <div className='mt-2 col-md-12'>
                        <strong>
                            <u>Edad</u>: {moment().diff(socio.NACIMIENTO, 'years')}
                        </strong>
                    </div>

                </div>

                <div className='row col-md-4'>
                    <div className='col-md-12'>
                        <strong>
                            <u>Fecha</u>: {moment(orden.FECHA).format('DD/MM/YYYY')}
                        </strong>
                    </div>

                    <div className='mt-2 col-md-12'>
                        <strong>
                            <u>N° Orden</u>: {orden.ORDEN}
                        </strong>
                    </div>

                    {practicas ? (
                        <div className='mt-2 col-md-12'>
                            <strong>
                                <u>Coseguro</u>: $ {calcularTotalPracticas(practicas)}
                            </strong>
                        </div>
                    ) : (
                        <div className='mt-2 col-md-12'>
                            <strong>
                                <u>Coseguro</u>: $ {orden.IMPORTE}
                            </strong>
                        </div>
                    )}



                    <div className='mt-2 col-md-12'>
                        <strong>
                            <u>SIN ARANCEL DIFERENCIAL</u>
                        </strong>
                    </div>
                </div>
            </div>


            {flag && flag === 'F' ? (
                <>
                    <div className="mt-4 d-flex justify-content-between text-center border-bottom  border-dark descr">

                        <div className="col-4">
                            <strong>DNI Beneficiario</strong>
                        </div>
                        <div className="col-4">
                            <strong>Descuento de:</strong>
                        </div>
                        <div className="col-4">
                            <strong>Prestador</strong>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between border-bottom text-center descr">
                        <div className="col-4 ">{socio.NRO_DOC}</div>
                        {farmacia ? (
                            <div className="col-4"> {farmacia[0].MODO} - HASTA DOS (2) MEDICAMENTOS</div>
                        ) : null}

                        <div className="col-4">FARMACIAS ADHERIDAS</div>


                    </div>
                </>
            ) : (

                <>
                    <h4 className="mt-4 mb-4">
                        <strong>
                            <u>Prestador</u>
                        </strong>
                    </h4>


                    <div className="d-flex justify-content-between text-center border-bottom  border-dark descr">

                        <div className="col-1">
                            <strong>DNI Beneficiario</strong>
                        </div>
                        <div className="col-1">
                            <strong>Prestador</strong>
                        </div>
                        <div className="col-4">
                            <strong>Direccion</strong>
                        </div>
                        <div className="col-2">
                            <strong>Telefonos</strong>
                        </div>
                        <div className="col-4">
                            <strong>Atencion</strong>
                        </div>
                    </div>

                    {!medico ? null
                        : (

                            <div className="d-flex justify-content-between border-bottom text-center descr">
                                <div className="col-1 ">{orden.NRO_DOC}</div>
                                <div className="col-1">{medico.NOMBRE}</div>
                                <div className="col-4">{medico.DIRECCION}</div>
                                <div className="col-2">{medico.TELEFONOS}</div>
                                <div className="col-5">{medico.HORARIO1} - {medico.HORARIO2}</div>
                            </div>

                        )}


                    {practicas ? (

                        <>
                            <h4 className="mt-4 mb-4">
                                <strong>
                                    <u>Listado De Practicas</u>
                                </strong>
                            </h4>

                            <div className="d-flex justify-content-between text-center border-bottom  border-dark descr ">
                                <div className="col-1">
                                    {" "}
                                    <strong>#</strong>
                                </div>
                                <div className="col-2">
                                    {" "}
                                    <strong>Codigo</strong>
                                </div>
                                <div className="col-6">
                                    <strong>Descripcion</strong>
                                </div>
                                <div className="col-2">
                                    <strong>Importe</strong>
                                </div>
                                <div className="col-1">
                                    <strong>Cantidad</strong>
                                </div>
                            </div>

                            {practicas.map((p, index) => (
                                <div className="d-flex justify-content-between border-bottom text-center descr">
                                    <div className="col-1" key={index}>{index + 1}</div>
                                    <div className="col-2 descr">{p.COD_PRAC}</div>
                                    <div className="col-6">{p.DESCRIP}</div>
                                    <div className="col-2">$ {p.IMPORTE}</div>
                                    <div className="col-1">{p.CANT_PRA}</div>
                                </div>
                            ))}

                            <div className=' mt-4 border border-dark alert alert-info text-center text-uppercase'>
                                $ {calcularTotalPracticas(practicas)}
                            </div>

                        </>
                    ) : null}
                </>

            )}




            <div className='row mt-4 col-md-4'>
                <div className='col-md-12'>
                    <strong>
                        <u>Fecha de Atencion</u>:
                    </strong>
                </div>

                <div className='mt-2 col-md-12'>
                    <strong>
                        <u>Fecha de Vencimiento</u>: {moment(orden.FECHA).add(1, 'M').format('DD/MM/YYYY')}
                    </strong>
                </div>
            </div>
            <br />

            <div className=" mt-4">
                <div className="row d-flex justify-content-between p-2">
                    <div className="col-4 text-center mt-4">
                        <br />
                        <p>-----------------------------</p>
                        <label>Firma del Afiliado</label>
                    </div>
                    <div className="col-4 text-center mt-4">
                        <br />
                        <p>-----------------------------</p>
                        <label>Aclaracion</label>
                    </div>

                    {flag && flag === 'F' ? (
                        <div className="col-4 text-center mt-4">
                            <br />
                            <p>-----------------------------</p>
                            <label>Firma/Sello de la Farmacia</label>
                        </div>
                    ) : (
                        <div className="col-4 text-center mt-4">
                            <br />
                            <p>-----------------------------</p>
                            <label>Firma/Sello del Medico</label>
                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}

export default ImpOrdenConsulta
