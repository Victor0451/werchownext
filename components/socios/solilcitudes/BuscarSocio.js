import React from 'react'

const BuscarSocio = ({ contratoRef, traerSocio, errores, nomoro }) => {
    return (
        <div className="container border border-dark list mt-4">
            <div className="mt-4  p-4 ">
                <h2 className=" mb-4">
                    <strong>
                        <u>Buscar Socio </u>
                    </strong>
                </h2>

                <div className="border border-dark p-4">
                    <h3 className=" mb-4">
                        <strong>
                            <u>Ingrese el DNI del solicitante</u>
                        </strong>
                    </h3>
                    <div className="row mb-4">
                        <div className="form-group col-md-6">
                            <label>
                                <strong>
                                    {" "}
                                    <u> DNI: </u>
                                </strong>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="DNI"
                                name="contrato"
                                ref={contratoRef}
                            />
                        </div>
                        <div className="form-group col-md-6 mt-4">
                            <button
                                className="btn btn-block btn-primary"
                                onClick={traerSocio}
                            >
                                Buscar
                            </button>
                        </div>{" "}

                        {errores && (
                            <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                                {errores}
                            </div>
                        )}
                        {nomoro && (
                            <div className="mt-2 form-group alert alert-warning col-md-12 text-center text-uppercase">
                                {nomoro}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuscarSocio
