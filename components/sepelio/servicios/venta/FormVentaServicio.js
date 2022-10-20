import React from 'react'
import ServicioSelect from 'react-select'

const FormVentaServicio = ({
    servicios,
    handleChange,
    user,
    operadorsep,
    apellidoRef,
    nombreRef,
    dniRef,
    motnoRef,
    opRef,
    parentescoRef,
    registrarVentas,
    fechaventaRef,
    efectivoRef,
    planRef,
    cuoMenRef,
    motnoFinalRef,
    error,
    planCuotas,
    calcFinanciacion,
    errorFin,
    cuoFinal,
    montoFinal,
}) => {
    return (
        <div className="mt-4 container border border-dark list p-4">
            <h2>
                <strong>
                    <u>
                        Venta del Servicio
                    </u>
                </strong>
            </h2>

            <div className="mt-4 border border-dark p-4">

                <h4>
                    <strong>
                        <u>
                            Datos
                        </u>
                    </strong>
                </h4>

                <div className="row mt-4">

                    <div className="col-md-4">
                        <label>
                            Fecha de Venta
                        </label>

                        <input type="date" className="form-control" ref={fechaventaRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            Apellido Solicitante
                        </label>

                        <input type="text" className="form-control" ref={apellidoRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            Nombre Solicitante
                        </label>

                        <input type="text" className="form-control" ref={nombreRef} />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            DNI Solicitante
                        </label>

                        <input type="number" className="form-control" ref={dniRef} defaultValue="0" />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            Parentesco
                        </label>

                        <input type="text" className="form-control" ref={parentescoRef} />
                    </div>

                    <div className="mt-4 form-group col-md-4 ">
                        <label>
                            <strong>
                                {" "}
                                <u>Servicio: </u>
                            </strong>
                        </label>
                        <ServicioSelect
                            options={servicios}
                            placeholder={"Servicio"}
                            onChange={(value) => handleChange(value, "servicio")}
                        />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            Operador
                        </label>

                        <input type="text" className="form-control" value={user} />
                    </div>


                    <div className="mt-4 col-md-4">
                        <label>
                            <strong>
                                {" "}
                                Operador Venta
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={opRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            {operadorsep
                                ? operadorsep.map((operador, index) => (
                                    <option key={index} value={operador.value}>
                                        {operador.label}
                                    </option>
                                ))
                                : null}
                        </select>
                    </div>
                </div>

            </div>


            <div className="mt-4 border border-dark p-4">

                <h4>
                    <strong>
                        <u>
                            Pago
                        </u>
                    </strong>
                </h4>


                <div className='row mt-4'>
                    <div className="mt-4 col-md-4">
                        <label>
                            Monto Servicio
                        </label>

                        <input type="number" className="form-control" ref={motnoRef} defaultValue={0} />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            Efectivo
                        </label>

                        <input type="number" className="form-control" ref={efectivoRef} defaultValue={0} />
                    </div>


                    <div className="mt-4 col-md-4">
                        <label>
                            Plan Cuotas
                        </label>

                        <select
                            className="custom-select"
                            name="operador"
                            ref={planRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            {planCuotas
                                ? planCuotas.map((p, index) => (
                                    <option key={index} value={`${p.plan_cuota}-${p.interes}`}>
                                        {p.plan_cuota} - {p.tarjeta}
                                    </option>
                                ))
                                : null}
                        </select>

                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            Cuota Mensual
                        </label>

                        <input type="number" className="form-control" ref={cuoMenRef} defaultValue={cuoFinal} />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            Monto Final
                        </label>

                        <input type="number" className="form-control" ref={motnoFinalRef} defaultValue={montoFinal} />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>

                        </label>

                        <button className='btn btn-primary mt-2 btn-block' onClick={calcFinanciacion}>
                            Calcular
                        </button>
                    </div>

                    <div className="mt-4 col-md-12">

                        {errorFin ? (
                            <div className="mt-4 alert alert-danger border border-dark text-center text-uppercase">
                                {errorFin}
                            </div>
                        ) : null}

                    </div>

                </div>




            </div>

            {error ? (
                <div className="mt-4 alert alert-danger border border-dark text-center text-uppercase">
                    {error}
                </div>
            ) : null}


            <div className="mt-4 border border-dark p-4">
                <div className="row ">

                    <div className="col-md-6">
                        <a href="/" className="btn btn-danger btn-block btn-sm">Cancelar</a>
                    </div>

                    <div className="col-md-6">
                        <button className="btn btn-primary btn-block btn-sm" onClick={registrarVentas}>Registra</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FormVentaServicio
