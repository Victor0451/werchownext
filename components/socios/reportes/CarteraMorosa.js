import React from 'react'
import ZonaSelect from "react-select";
import MesSelect from "react-select";
import AnoSelect from "react-select";
import CarteraSelect from "react-select";


const CarteraMorosa = ({
    errores,
    nomoro,
    desdeRef,
    hastaRef,
    buscarCartera,
    buscarCarteram,
    errorrango,
    meses,
    estadocartera,
    listZona,
    anos,
    handleChange,

}) => {
    return (
        <form className="mt-4 border border-dark p-4 ">
            <h3 className=" mb-4">
                <strong>
                    <u>Filtrar Cartera Morosa Por Estado</u>
                </strong>
            </h3>

            <div className="border border-dark p-4">
                <h3 className=" mb-4">
                    <strong>
                        <u>Opciones</u>
                    </strong>
                </h3>
                <div className="row mb-4">
                    <div className="form-group col-md-3">
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
                    <div className="form-group col-md-3">
                        <label>
                            <strong>
                                {" "}
                                <u> Mes: </u>
                            </strong>
                        </label>
                        <MesSelect
                            options={meses}
                            placeholder={"Seleccionar Mes"}
                            onChange={(value) => handleChange(value, "mes")}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label>
                            <strong>
                                {" "}
                                <u> Año: </u>
                            </strong>
                        </label>
                        <AnoSelect
                            options={anos}
                            placeholder={"Seleccionar Mes"}
                            onChange={(value) => handleChange(value, "ano")}
                        />
                    </div>
                    <div className="form-group col-md-3">
                        <label>
                            <strong>
                                {" "}
                                <u> Tipo De Cartera: </u>
                            </strong>
                        </label>
                        <CarteraSelect
                            options={estadocartera}
                            placeholder={"Seleccionar Cartera"}
                            onChange={(value) => handleChange(value, "cartera")}
                        />
                    </div>
                    {/* SELECCION DE CUOTAS DE DEUDA */}
                    <div id="cuotas" hidden>
                        <div className="mt-2 form-group alert alert-info col-md-12 text-center text-uppercase">
                            Las carteras de baches y morosas correspondes solo al mes en
                            curso y se obtienen de la cartera que se genera de manera
                            mensual.
                        </div>
                        <div className="border border-dark p-4 d-flex justify-content-center ">
                            <h4 className=" mb-4">
                                <strong>
                                    <u>Selecciona El Rango de Cuotas de Deuda</u>
                                </strong>
                            </h4>

                            <div className="d-flex justify-content-beetwen">
                                <div className="form-group col-md-6">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Desde: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Desde"
                                        name="contrato"
                                        ref={desdeRef}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label>
                                        <strong>
                                            {" "}
                                            <u> Hasta: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Hasta"
                                        name="contrato"
                                        ref={hastaRef}
                                    />
                                </div>
                            </div>
                        </div>
                        {errorrango && (
                            <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                                {errorrango}
                            </div>
                        )}
                    </div>
                    <div className="mt-4 form-group col-md-6 ">
                        <button
                            className="btn btn-block btn-primary"
                            onClick={buscarCartera}
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            WERCHOW
                        </button>
                    </div>{" "}
                    <div className=" mt-4 form-group col-md-6 ">
                        <button
                            className="btn btn-block btn-primary"
                            onClick={buscarCarteram}
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            MUTUAL
                        </button>
                    </div>
                    {errores && (
                        <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                            {errores}
                        </div>
                    )}
                </div>
            </div>
        </form>
    )
}

export default CarteraMorosa
