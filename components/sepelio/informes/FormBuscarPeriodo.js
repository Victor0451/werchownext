import React from 'react'
import MesSelect from 'react-select'
import AnoSelect from 'react-select'
import { meses, anos } from "../../../array/array";

const FormBuscarPeriodo = ({ handleChange, buscarInfo }) => {
    return (

        <div className="container mt-4 border border-dark list p-4">
            <h2 className=" mb-4 ">
                <strong>
                    <u>Seleccione El Periodo A Analizar</u>
                </strong>
            </h2>
            <div className=" row border border-dark p-2">
                <div className="col-md-4 mt-4">
                    <MesSelect
                        options={meses}
                        placeholder={"Eliga un Mes"}
                        onChange={(value) => handleChange(value, "mes")}
                    />
                </div>
                <div className="col-md-4 mt-4">
                    <AnoSelect
                        options={anos}
                        placeholder={"Eliga el Año"}
                        onChange={(value) => handleChange(value, "ano")}
                    />
                </div>


                <div className="col-md-4 mt-4">
                    <button
                        className="mt-1 btn btn-block btn-primary btn-sm"
                        onClick={buscarInfo}
                    >
                        Buscar
          </button>
                </div>
            </div>
        </div>

    )
}

export default FormBuscarPeriodo
