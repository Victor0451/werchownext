import React from 'react'
import CarteraSelect from "react-select";
import ZonaSelect from "react-select";

const CarteraSinTelefono = ({
    cartera,
    handleChange,
    listZona,
    buscarCarteraSinTel,
    buscarCarteraSinTelM
}) => {
    return (
        <div className="p-4 border border-dark ">
            <h3 className=" mb-4">
                <strong>
                    <u>Cartera sin telefono</u>
                </strong>
            </h3>

            <div className="row border border-dark p-4">

                <div className="form-group col-md-4">
                    <label>
                        <strong>
                            {" "}
                            <u> Tipo De Cartera: </u>
                        </strong>
                    </label>
                    <CarteraSelect
                        options={cartera}
                        placeholder={"Seleccionar Cartera"}
                        onChange={(value) => handleChange(value, "cartera")}
                    />
                </div>

                <div className="form-group col-md-4">
                    <label>
                        <strong>
                            {" "}
                            <u> Zona: </u>
                        </strong>
                    </label>
                    <ZonaSelect
                        options={listZona}
                        placeholder={"Seleccionar Zona"}
                        onChange={(value) => handleChange(value, "zona")}
                    />
                </div>

                <div className="mt-4 form-group col-md-6 ">
                    <button
                        className="btn btn-block btn-primary"
                        onClick={buscarCarteraSinTel}
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        WERCHOW
                    </button>
                </div>{" "}
                <div className=" mt-4 form-group col-md-6 ">
                    <button
                        className="btn btn-block btn-primary"
                        onClick={buscarCarteraSinTelM}
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        MUTUAL
                    </button>
                </div>

            </div>

        </div>
    )
}

export default CarteraSinTelefono
