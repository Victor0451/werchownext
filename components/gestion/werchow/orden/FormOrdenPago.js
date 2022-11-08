import React from 'react'
import FormOrdenContable from './FormOrdenContable'
import FormOrdenMedica from './FormOrdenMedica'
import FormOrdenPractica from './FormOrdenPracticas'

const FormOrdenPago = ({
    medicos,
    medicoRef,
    cuitRef,
    fechaPagRef,
    medicoPracRef,
    fechaPagPracRef,
    cuitPracRef,
    cuitContRef,
    provContRef,
    nfacturaContRef,
    observacionContRef,
    tipoFacturaContRef,
    fechaPagoContRef,
    totalContRef,
    norden,
    buscarOrdenes,
    generarOrdenPago,
    errores,
    tipoFac,
    guardarFlag
}) => {
    return (
        <div className='container mt-4 border border-dark p-4 list'>

            <h2>
                <strong>
                    <u>
                        Orden de Pago
                    </u>
                </strong>
            </h2>


            {errores ? (
                <div className='alert alert-danger mt-4 mb-4 border border-dark text-center text-uppercase'>
                    {errores}
                </div>
            ) : null}

            <div className="mt-4 accordion" id="accordionExample">

                {/* CONTABLES */}
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                                <strong>
                                    Orden de pago contable.
                                </strong>
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">


                            <div className='alert alert-info border border-dark text-center text-uppercase mt-4 mb-4'>
                                Generacion de ordenes de pago para todo lo que sea contable. (Pago de facturas, sueldos, etc...)
                            </div>

                            <FormOrdenContable
                                cuitContRef={cuitContRef}
                                provContRef={provContRef}
                                nfacturaContRef={nfacturaContRef}
                                observacionContRef={observacionContRef}
                                totalContRef={totalContRef}
                                norden={norden}
                                generarOrdenPago={generarOrdenPago}
                                tipoFacturaContRef={tipoFacturaContRef}
                                fechaPagoContRef={fechaPagoContRef}
                                tipoFac={tipoFac}
                            />

                        </div>
                    </div>
                </div>


                {/* MEDICAS */}
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => { guardarFlag("medica") }}>
                                <strong>
                                    Orden de pago para consultas medicas.
                                </strong>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">

                            <div className='alert alert-info border border-dark text-center text-uppercase mt-4 mb-4'>
                                Selecciona un prestador medico para visualizar sus ordenes y poder punterlas con las ordenes fisicas presentadas.
                            </div>

                            <FormOrdenMedica
                                medicos={medicos}
                                medicoRef={medicoRef}
                                cuitRef={cuitRef}
                                fechaPagRef={fechaPagRef}
                                norden={norden}
                                buscarOrdenes={buscarOrdenes}
                            />

                        </div>
                    </div>
                </div>


                {/* SEPELIO */}
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                            <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" onClick={() => { guardarFlag("practica") }}>
                                <strong>
                                    Orden de pago para practicas medicas.
                                </strong>
                            </button>
                        </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">

                            <div className='alert alert-info border border-dark text-center text-uppercase mt-4 mb-4'>
                                Selecciona un prestador medico para visualizar sus practicas y poder punterlas con las practicas fisicas presentadas.
                            </div>

                            <FormOrdenPractica
                                medicos={medicos}
                                medicoPracRef={medicoPracRef}
                                cuitPracRef={cuitPracRef}
                                buscarOrdenes={buscarOrdenes}
                                fechaPagPracRef={fechaPagPracRef}
                                norden={norden}
                            />


                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default FormOrdenPago