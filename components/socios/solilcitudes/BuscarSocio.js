import React from 'react'

const BuscarSocio = ({ contratoRef, buscarTitular, buscarTitularM, errores, nomoro }) => {
    return (
        <div className="container">
            <form className="mt-4 border border-dark p-4 alert alert-primary">
                <h2 className=" mb-4">
                    <strong>
                        <u>Buscar Socio </u>
                    </strong>
                </h2>

                <div className="border border-dark p-4">
                    <h3 className=" mb-4">
                        <strong>
                            <u>Ingrese N° de Ficha</u>
                        </strong>
                    </h3>
                    <div className="row mb-4">
                        <div className="form-group col-md-4">
                            <label>
                                <strong>
                                    {" "}
                                    <u> N° de Ficha: </u>
                                </strong>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ficha"
                                name="contrato"
                                ref={contratoRef}
                            />
                        </div>
                        <div className="form-group col-md-4 mt-4">
                            <button
                                className="btn btn-block btn-primary"
                                onClick={buscarTitular}
                            >
                                WERCHOW
              </button>
                        </div>{" "}
                        <div className="form-group col-md-4 mt-4">
                            <button
                                className="btn btn-block btn-primary"
                                onClick={buscarTitularM}
                            >
                                MUTUAL
              </button>
                        </div>
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
            </form>
        </div>
    )
}

export default BuscarSocio
