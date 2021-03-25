import React from 'react'

const Administracion = ({
    postC1000,
    postC1000M,
    postCBanco,
    postCPolicia,
    postCTjt,
    postCTjtM,
    postPrestamos,
    putOficina,
    putOficinaM,
    putPolicia,
    putPrestamos,
    putAdelantado,
    putAdelantadoM,
    putBanco,
    putCobradores,
    putCobradoresM,
    putCtjt,
    putCtjtm,
    putNoNull,
    putNoNullM,
    sucursalRefM,
    sucursalRefW,
}) => {
    return (
        <div className="container alert alert-primary border border-dark p-4 mt-4">
            <h2 className="mb-4">
                <strong>
                    <u>Administracion de datos para la efectividad</u>
                </strong>
            </h2>

            <br />

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >
                        Insertar Datos Para Efectividad
            </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                    >
                        Actualizar Datos Para Efectividad
            </a>
                </li>

                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link"
                        id="pills-mora-tab"
                        data-toggle="pill"
                        href="#pills-mora"
                        role="tab"
                        aria-controls="pills-mora"
                        aria-selected="false"
                    >
                        Actualizar Datos Para Mora
            </a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                >
                    <div className=" alert alert-primary border border-dark p-4 mt-4">
                        <h2 className=" mb-4">
                            <strong>
                                <u>INSERTAR DATOS WERCHOW</u>
                            </strong>
                        </h2>
                        <div className="row d-flex justify-content-between border border-dark p-4">
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary "
                                    onClick={postC1000}
                                >
                                    Insertar C1000
                  </button>
                            </div>

                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={postCTjt}
                                >
                                    Insertar Tarjetas
                  </button>
                            </div>

                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={postCBanco}
                                >
                                    Insertar Banco
                  </button>
                            </div>

                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={postCPolicia}
                                >
                                    Insertar Policias
                  </button>
                            </div>

                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={postPrestamos}
                                >
                                    Insertar Prestamos
                  </button>
                            </div>
                        </div>
                    </div>

                    <div className="container alert alert-primary border border-dark p-4 mt-4">
                        <h2 className=" mb-4">
                            <strong>
                                <u>INSERTAR DATOS MUTUAL</u>
                            </strong>
                        </h2>
                        <div className="row d-flex justify-content-between border border-dark p-4">
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary "
                                    onClick={postC1000M}
                                >
                                    Insertar C1000m
                  </button>
                            </div>

                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={postCTjtM}
                                >
                                    Insertar Tarjetas
                  </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                >
                    <div className=" alert alert-primary border border-dark p-4 mt-4">
                        <h2 className=" mb-4">
                            <strong>
                                <u>ACTUALIZAR DATOS WERCHOW</u>
                            </strong>
                        </h2>
                        <div className="row d-flex justify-content-between border border-dark p-4">
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary "
                                    onClick={putCobradores}
                                >
                                    Actualizar Cobradores
                  </button>
                            </div>
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putOficina}
                                >
                                    Actualizar Oficina
                  </button>
                            </div>
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putAdelantado}
                                >
                                    Actualizar Adelantado
                  </button>
                            </div>
                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putCtjt}
                                >
                                    Actualizar Tarjetas
                  </button>
                                <select
                                    className="form-control form-control-sm mt-1"
                                    ref={sucursalRefW}
                                >
                                    <option value="no">Seleccionar Sucursal</option>
                                    <option value="W">Casa Central</option>
                                    <option value="L">Palpala</option>
                                    <option value="R">Perico</option>
                                    <option value="P">San Pedro</option>
                                </select>
                            </div>

                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putBanco}
                                >
                                    Actualizar Banco
                  </button>
                            </div>

                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putPolicia}
                                >
                                    Actualizar Policias
                  </button>
                            </div>

                            <div className="col-md-4 mt-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putPrestamos}
                                >
                                    Actualizar Prestamos
                  </button>
                            </div>

                            <div className="col-md-4 mt-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putNoNull}
                                >
                                    Sacar Null
                  </button>
                            </div>
                        </div>
                    </div>

                    <div className="container alert alert-primary border border-dark p-4 mt-4">
                        <h2 className=" mb-4">
                            <strong>
                                <u>ACTUALIZAR DATOS MUTUAL</u>
                            </strong>
                        </h2>
                        <div className="row d-flex justify-content-between border border-dark p-4">
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary "
                                    onClick={putCobradoresM}
                                >
                                    Actualizar Cobradores
                  </button>
                            </div>
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putOficinaM}
                                >
                                    Actualizar Oficina
                  </button>
                            </div>
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putAdelantadoM}
                                >
                                    Actualizar Adelantado
                  </button>
                            </div>
                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putCtjtm}
                                >
                                    Actualizar Tarjetas
                  </button>
                                <select
                                    className="form-control form-control-sm mt-1"
                                    ref={sucursalRefM}
                                >
                                    <option value="no">Seleccionar Sucursal</option>
                                    <option value="W">Casa Central</option>
                                    <option value="L">Palpala</option>
                                    <option value="R">Perico</option>
                                    <option value="P">San Pedro</option>
                                </select>
                            </div>
                            <div className="col-md-4 mt-2">
                                <button
                                    className="btn btn-block btn-primary"
                                    onClick={putNoNullM}
                                >
                                    No Null
                  </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-mora"
                    role="tabpanel"
                    aria-labelledby="pills-mora-tab"
                >


                    <div className="container alert alert-primary border border-dark p-4 mt-4">
                        <h2 className=" mb-4">
                            <strong>
                                <u>ACTUALIZAR DATOS MORA</u>
                            </strong>
                        </h2>
                        <div className="row d-flex justify-content-between border border-dark p-4">
                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary "
                                // onClick={postC1000}
                                >
                                    Actualizar M1000
                            </button>
                            </div>

                            <div className="col-md-4">
                                <button
                                    className="btn btn-block btn-primary "
                                // onClick={postC1000}
                                >
                                    Actualizar MTJT
                            </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Administracion
