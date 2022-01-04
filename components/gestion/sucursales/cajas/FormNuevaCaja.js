import moment from 'moment'
import React, { useState } from 'react'

const FormNuevaCaja = ({
    user,
    handlerArchivos,
    uploadArchivos,
    error,
    entradaRef,
    salidaRef,
    valoresDepositarRef,
    fechaCajaRef,
    sucursalRef,
}) => {


    return (
        <div className="container border border-dark list mt-4 p-4">

            <div className="row">
                <div className="col-md-6">
                    <h2>
                        <strong>
                            <u>
                                Registrar Caja
                            </u>
                        </strong>
                    </h2>
                </div>

                <div className="col-md-6 d-flex justify-content-end">
                    <a className="btn btn-info btn-sm" href="/gestion/sucursales/caja/listado">
                        Listado Cajas Registradas
                    </a>
                </div>
            </div>

            <div className="mt-4 border border-dark p-4">
                <div className="row">

                    <div className="col-md-2 mt-4">
                        <label>
                            <u>
                                Usuario
                            </u>
                        </label>
                        <input type="text" className="form-control" value={user} readOnly />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Fecha
                            </u>
                        </label>
                        <input type="text" className="form-control" value={moment().format('DD/MM/YYYY HH:mm:ss')} readOnly />
                    </div>

                    <div className="col-md-4 mt-4 ">
                        <label>
                            <u>
                                Total Entradas
                            </u>
                        </label>
                        <input type="number" className="form-control" placeholder="Total Entradas" ref={entradaRef} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Total Salidas
                            </u>
                        </label>
                        <input type="number" className="form-control" placeholder="Total Salidas" ref={salidaRef} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Valores a Depositar
                            </u>
                        </label>
                        <input type="number" className="form-control" placeholder="Valores a Depositar" ref={valoresDepositarRef} />
                    </div>

                    <div className="col-md-4 mt-4">
                        <label>
                            <u>
                                Fecha Caja
                            </u>
                        </label>
                        <input type="datetime-local" className="form-control" ref={fechaCajaRef} />
                    </div>

                    <div className="mt-4 form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Sucursal: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={sucursalRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            <option value="Casa Central">
                                Casa Central
                            </option>
                            <option value="Palpala">
                                Palpala
                            </option>
                            <option value="Perico">
                                Perico
                            </option>
                            <option value="El Carmen">
                                El Carmen
                            </option>
                            <option value="San Pedro">
                                San Pedro
                            </option>
                        </select>
                    </div>


                    <div className="mt-4 form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Subir Archivo: </u>
                            </strong>
                        </label>
                        <input
                            type="file"
                            id="fil"
                            accept=".png, .jpg, .jpeg"
                            className="form-control"
                            name="file"
                            onChange={handlerArchivos}
                        />

                        {error && (
                            <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-4 row border border-dark p-4">
                <div className=" col-md-6">
                    <button className="btn btn-primary btn-block" onClick={uploadArchivos}>
                        Registrar
                    </button>

                </div>

                <div className="  col-md-6">
                    <a className="btn btn-danger btn-block" href="/gestion/sucursales/caja/listado">
                        Cancelar
                    </a>

                </div>
            </div>

        </div>
    )
}

export default FormNuevaCaja
