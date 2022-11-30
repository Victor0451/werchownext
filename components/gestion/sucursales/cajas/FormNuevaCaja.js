import moment from 'moment'
import React, { useState } from 'react'
import ListadoMovimientos from './ListadoMovimientos'

const FormNuevaCaja = ({
    user,
    error,
    conceptoRef,
    fechaMovRef,
    importeRef,
    tipoMovRef,
    sucursalRef,
    precargaMovim,
    ingreso,
    egreso,
    totales,
    errores,
    postCaja,
    eliminarPrecarga
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

                    <div className='mt-4 form-group col-md-4'>

                        <label>
                            <strong>
                                {" "}
                                <u> Fecha Movimiento: </u>
                            </strong>
                        </label>

                        <input type={"date"} className="form-control" ref={fechaMovRef} />

                    </div>

                    <div className='mt-4 form-group col-md-8'>

                        <label>
                            <strong>
                                {" "}
                                <u> Concepto: </u>
                            </strong>
                        </label>

                        <input type={"text"} className="form-control" ref={conceptoRef} />

                    </div>

                    <div className='mt-4 form-group col-md-4'>

                        <label>
                            <strong>
                                {" "}
                                <u> Tipo Movimiento: </u>
                            </strong>
                        </label>

                        <select
                            className="custom-select"
                            ref={tipoMovRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            <option value="I">
                                Ingreso
                            </option>
                            <option value="E">
                                Egreso
                            </option>
                        </select>
                    </div>

                    <div className='mt-4 form-group col-md-4'>

                        <label>
                            <strong>
                                {" "}
                                <u> Importe: </u>
                            </strong>
                        </label>

                        <input type={"number"} className="form-control" ref={importeRef} />

                    </div>


                    <div className='mt-4 form-group col-md-4'>

                        <label>

                        </label>

                        <button className='btn btn-primary btn-block' onClick={precargaMovim}>Pre Cargar</button>

                    </div>

                    <div className='mt-4 form-group col-md-12'>

                        {errores ? (

                            <div className='mt-4 mb-4 alert alert-danger text-center text-uppercase border border-dark'>
                                {errores}
                            </div>

                        ) : null}

                    </div>

                </div>

            </div>

            <div className='mt-4 border border-dark p-4'>

                <div className='row'>

                    <div className='col-md-12'>
                        <h4 className='mb-4'>
                            <u>
                                Saldo Caja:
                            </u>
                        </h4>

                        <div className='alert alert-info text-center text-uppercase border border-dark mt-4 mb-4'>
                            Saldo: $  {totales(ingreso, "I") - totales(egreso, "E")}
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <h4 className='mb-4'>
                            <u>
                                Ingresos
                            </u>
                        </h4>

                        <div className='alert alert-info text-center text-uppercase border border-dark mt-4 mb-4'>
                            Total Ingresos: $  {totales(ingreso, "I")}
                        </div>

                        <ListadoMovimientos
                            listado={ingreso}
                            eliminarPrecarga={eliminarPrecarga}
                        />
                    </div>

                    <div className='col-md-6'>

                        <h4 className='mb-4'>
                            <u>
                                Egresos
                            </u>
                        </h4>

                        <div className='alert alert-info text-center text-uppercase border border-dark mt-4 mb-4'>
                            Total Egresos: $ {totales(egreso, "E")}
                        </div>

                        <ListadoMovimientos
                            listado={egreso}
                            eliminarPrecarga={eliminarPrecarga}
                        />
                    </div>

                </div>

            </div>

            <div className="mt-4 row border border-dark p-4">
                <div className=" col-md-6">
                    <button className="btn btn-primary btn-block" onClick={postCaja}>
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
