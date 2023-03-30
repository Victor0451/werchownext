import moment from 'moment'
import React from 'react'

export const FormPrestamoEmpleados = ({
    user,
    empleados,
    capPrest,
    calculoPrestamo,
    cuoprest,
    capadev,
    flag,
    capital,
    cuotas,
    empleadoRef,
    capitalRef,
    cuotasRef,
    errores,
    MesI,
    MesF,
    registrarPrestamo

}) => {
    return (
        <div className='list container border border-dark p-4 mt-4 mb-4'>

            <h2>
                <strong>
                    <u>
                        Subsidio de Contencion Familiar Para Empleados
                    </u>
                </strong>
            </h2>


            <div className='border border-dark mt-4 p-4'>

                <div className='row'>

                    <div className='col-md-3'>

                        {empleados.length === 0 ? (

                            <div className='alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase'>
                                No hay Empleados Registrados
                            </div>

                        ) : (
                            <>
                                <label>
                                    <u>
                                        Empleado
                                    </u>
                                </label>

                                <select className="custom-select mt-2" defaultValue={"no"} ref={empleadoRef}>
                                    <option value="no" >Selecciona una opcion</option>
                                    {empleados.map((m, index) => (
                                        <option key={index} value={m.value}>{m.label}</option>
                                    ))}
                                </select>
                            </>

                        )}

                    </div>

                    <div className='col-md-3'>

                        {capPrest.length === 0 ? (

                            <div className='alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase'>
                                No hay Capitales Registrados
                            </div>

                        ) : (
                            <>
                                <label>
                                    <u>
                                        Capital
                                    </u>
                                </label>

                                <select className="custom-select mt-2" ref={capitalRef} defaultValue={"no"} >
                                    <option value="no" >Selecciona una opcion</option>
                                    {capPrest.map((m, index) => (
                                        <option key={index} value={m.value}>{m.label}</option>
                                    ))}
                                </select>
                            </>

                        )}

                    </div>

                    <div className='col-md-3'>

                        <label>
                            <u>
                                Plan de Cuotas
                            </u>
                        </label>

                        <select className="custom-select mt-2" ref={cuotasRef} defaultValue={"no"} >
                            <option value="no" >Selecciona una opcion</option>

                            <option value={3}>3</option>
                            <option value={6}>6</option>
                            <option value={10}>10</option>
                            <option value={12}>12</option>
                            <option value={18}>18</option>

                        </select>

                    </div>

                    <div className='col-md-3'>

                        <button className='btn btn-primary btn-block mt-4'
                            onClick={calculoPrestamo}

                        >
                            Calcular Subsidio
                        </button>

                    </div>

                </div>

                {errores ? (
                    <div className='alert alert-danger mt-4 text-center text-uppercase border border-dark'>
                        {errores}
                    </div>

                ) : null}



            </div>


            {

                flag === true ? (
                    <div className='border border-dark mt-4 p-4'>

                        <h4>
                            <strong>
                                <u>
                                    Confeccion del Subsidio
                                </u>
                            </strong>
                        </h4>


                        <div className='row'>

                            <div className=" mb-4 p-4">
                                <div className="row d-flex  border border-dark p-4">

                                    <div className="form-group col-md-3">
                                        <label>
                                            <strong>
                                                {" "}
                                                <u> Cuota Mensual: </u>
                                            </strong>
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            value={cuoprest}
                                            readOnly

                                        />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label>
                                            <strong>
                                                {" "}
                                                <u> Capital A Devolver: </u>
                                            </strong>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={capadev}
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label>
                                            <strong>
                                                {" "}
                                                <u> Inicia en: </u>
                                            </strong>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={MesI}
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-group col-md-3">
                                        <label>
                                            <strong>
                                                {" "}
                                                <u> Termina en: </u>
                                            </strong>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={MesF}
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-group col-md-12 d-flex justify-content-end">
                                        <button className='btn btn-success mt-4'
                                            onClick={registrarPrestamo}
                                        >
                                            Confirmar
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                ) : flag === false ? (

                    <div className='alert alert-info text-center text-uppercase mt-4 mb-4 border border-dark'>
                        Subsidos de contencion familiar unicamente para empleados de Werchow registrados en el sistema
                    </div>

                ) : null

            }



        </div>
    )
}
