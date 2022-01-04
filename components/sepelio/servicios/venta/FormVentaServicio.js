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
    error
}) => {
    return (
        <div className="mt-4 container border border-dark list p-4">
            <h2>
                <strong>
                    <u>
                        Carga de Servicios Vendidos
                    </u>
                </strong>
            </h2>

            <div className="mt-4 border border-dark p-4">
                <div className="row">

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

                    <div className="mt-4 col-md-4">
                        <label>
                            Monto Servicio
                        </label>

                        <input type="number" className="form-control" ref={motnoRef} />
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
