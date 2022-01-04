import React, { useState } from 'react'

const FormConvenioDeuda = ({
    ficha,
    saldoRef,
    deudaRef,
    cuotaRef,
    vencimiento1Ref,
    vencimiento2Ref,
    importe1Ref,
    importe2Ref,
    bonificacionRef,

}) => {

    const [saldo, guardarSaldo] = useState(null)

    const calcSaldo = () => {
        let deuda = deudaRef.current.value
        let bonif = bonificacionRef.current.value

        let saldo = deuda - bonif

        guardarSaldo(saldo)
    }


    return (
        <div className="mt-4 p-4 container border border-dark list">

            <h2>
                <strong>
                    <u>
                        Convenio de Reconocimiento de Deuda
                  </u>
                </strong>
            </h2>

            <div className="border border-dark p-4">

                <div className="border border-dark list p-4 mb-4">
                    <h4 className=""><strong><u>Datos del Socio</u></strong></h4>

                    <div className="row mt-4 mb-4">
                        <div className="col-md-3">
                            <h6>
                                <strong>
                                    <u>
                                        N° Socio
                                </u>: {ficha.CONTRATO}
                                </strong>
                            </h6>
                        </div>

                        <div className="col-md-5">
                            <h6>
                                <strong>
                                    <u>
                                        Apellido y Nombre
                                </u>: {ficha.APELLIDOS}, {ficha.NOMBRES}
                                </strong>
                            </h6>
                        </div>


                        <div className="col-md-4">
                            <h6>
                                <strong>
                                    <u>
                                        Telefono
                                </u>: {ficha.TELEFONO} / {ficha.MOVIL}
                                </strong>
                            </h6>
                        </div>

                    </div>
                </div>


                <div className="border border-dark p-4 list">
                    <h4 className=""><strong><u>Deuda Total</u></strong></h4>

                    <div className="row mt-4">

                        <div className="col-md-4">
                            <label>
                                <strong>
                                    <u>
                                        Deuda
                                </u>:
                            </strong>
                            </label>
                            <input type="text" className="form-control border border-dark" ref={deudaRef} />
                        </div>

                        <div className="col-md-4">
                            <label>
                                <strong>
                                    <u>
                                        Bonificacion
                                </u>:
                            </strong>
                            </label>
                            <input type="text" className="form-control border border-dark" ref={bonificacionRef} onChange={calcSaldo} />

                        </div>

                        <div className="col-md-4">
                            <label>
                                <strong>
                                    <u>
                                        Saldo a Pagar
                                </u>:
                            </strong>
                            </label>
                            <input type="text" className="form-control border border-dark" ref={saldoRef} defaultValue={saldo} />

                        </div>
                    </div>
                </div>


                <div className="mt-4 border border-dark p-4 list">
                    <h4 className=""><strong><u>Financiamiento de Deuda</u></strong></h4>

                    <div className="row mt-4">
                        <div className="col-md-3">
                            <label>
                                <strong>
                                    <u>
                                        Saldo Financiado en
                                </u>:
                            </strong>
                            </label>
                            <input type="number" className="form-control border border-dark" placeholder="Cuotas" ref={cuotaRef} />
                        </div>

                        <div className="col-md-4">
                            <label>
                                <strong>
                                    <u>
                                        1° Vencimiento
                                </u>:
                            </strong>
                            </label>
                            <input type="date" className="form-control border border-dark" placeholder="Cuotas" ref={vencimiento1Ref} />
                        </div>
                        <div className="col-md-4">

                            <label>
                                <strong>
                                    <u>
                                        Monto
                                </u>:
                            </strong>
                            </label>
                            <input type="number" className="form-control border border-dark" placeholder="Monto" ref={importe1Ref} />
                        </div>

                        <div className="col-md-3 mt-2">
                        </div>

                        <div className="col-md-4 mt-2">
                            <label>
                                <strong>
                                    <u>
                                        2° Vencimiento
                                </u>:
                            </strong>
                            </label>
                            <input type="date" className="form-control border border-dark" placeholder="Cuotas" ref={vencimiento2Ref} />
                        </div>
                        <div className="col-md-4 mt-2">
                            <label>
                                <strong>
                                    <u>
                                        Monto
                                </u>:
                            </strong>
                            </label>
                            <input type="number" className="form-control border border-dark" placeholder="Monto" ref={importe2Ref} />
                        </div>
                    </div>
                </div>


                <div className="mt-4 border border-dark p-4 list">
                    <h6>
                        <strong>
                            (Con esto queda por sentado que para la fecha mencionada habré cubierto todo el adeudo pendiente por dicho concepto.
                            En caso de no realizarlo de tal manera, me hare responsable de afrontar un periodo de carencia de 15 días, en lo que se refiere al servicio de sepelio)
                        </strong>
                    </h6>

                </div>


                <div className="mt-4 border border-dark p-4 list d-flex justify-content-beetwen">
                    <br />
                    <br />
                    <br />
                    <div className="col-md-6 mt-2 text-center">
                        <div className="mt-4">
                            -------------------------
                        </div>
                        <label >
                            <strong>
                                Firma del Afiliado
                            </strong>
                        </label>
                    </div>

                    <div className="col-md-6 mt-2 text-center">
                        <div className="mt-4">
                            ------------------------------------------
                        </div>
                        <label >
                            <strong>
                                Por Werchow Servicios Sociales S.R.L
                            </strong>
                        </label>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default FormConvenioDeuda
