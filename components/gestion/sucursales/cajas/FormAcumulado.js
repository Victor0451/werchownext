import React from 'react'
import { meses2 } from '../../../../array/array'

const FormAcumulado = ({
    sucursalRef,
    mesRef,
    anoRef,
    empresaRef,
    generarAcumulado,
    perfil,
    user,
    errores
}) => {
    return (
        <div className='container border border-dark mt-4 p-4 list'>

            <h2>
                <u>
                    Generar Acumulado
                </u>
            </h2>


            <div className='border border-dark p-4 mt-4'>

                <div className='row'>

                    <div className="mt-4 form-group col-md-3">

                        <label>
                            <strong>
                                {" "}
                                <u> Empresa: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={empresaRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            <option selected value="W"> Werchow </option>
                            <option selected value="M"> Mutual </option>



                        </select>
                    </div>

                    <div className="mt-4 form-group col-md-3">

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
                            {
                                perfil === 1 || perfil === 3 ? (
                                    <>
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
                                    </>
                                ) : perfil === 2 && user === 'sjuarez' ? (

                                    <option value="San Pedro">
                                        San Pedro
                                    </option>

                                ) : perfil === 2 && user === 'vgorosito' ? (

                                    <option value="Perico">
                                        Perico
                                    </option>
                                ) : perfil === 2 && user === 'mcarriso' ? (

                                    <option value="Palpala">
                                        Palpala
                                    </option>

                                ) : null
                            }


                        </select>
                    </div>

                    <div className="mt-4 form-group col-md-3">
                        <label>
                            <strong>
                                {" "}
                                <u> Mes: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={mesRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>

                            {meses2 ? (
                                <>{
                                    meses2.map((m, index) => (

                                        <option key={index} value={`${m.value}`}>{m.label}</option>

                                    ))}
                                </>

                            ) : null}

                        </select>
                    </div>

                    <div className="mt-4 form-group col-md-3">

                        <label>
                            <strong>
                                {" "}
                                <u> Año: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={anoRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
                            <option value="2022">
                                2022
                            </option>

                            <option value="2023">
                                2023
                            </option>

                            <option value="2024">
                                2024
                            </option>

                        </select>
                    </div>

                </div>


                {
                    errores ? (
                        <div className='alert alert-danger mt-4 mb-4 text-uppercase text-center border border-dark'>
                            {errores}
                        </div>
                    ) : null
                }


                <div className='row d-flex justify-content-end mt-4'>

                    <button
                        className='btn btn-primary  '
                        onClick={generarAcumulado}
                    >
                        Generar
                    </button>

                    <a
                        href='/gestion/sucursales/caja/listado'
                        className='btn btn-danger  ml-1'
                    >
                        Cancelar
                    </a>

                </div>

            </div>

        </div>


    )
}

export default FormAcumulado