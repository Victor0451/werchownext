import React from 'react'
import { meses2 } from '../../../../array/array'

const FormAcumulado = ({
    sucursalRef,
    mesRef,
    anoRef,
    generarAcumulado
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
                                <u> Sucursal: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={sucursalRef}
                        >
                            <option selected value="no"> Elige una Opcion </option>
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

                    <div className="mt-4 form-group col-md-3">
                        <label>

                        </label>
                        <button
                            className='btn btn-primary btn-block '
                            onClick={generarAcumulado}
                        >
                            Generar
                        </button>
                    </div>

                </div>

            </div>

        </div>


    )
}

export default FormAcumulado