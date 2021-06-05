import React from 'react'
import Spinner from '../../layout/Spinner'

const ConformidadServicio = ({ socio, buscarTitular, buscarTitularM, errores, contratoRef, empresa, servicio, imprimir }) => {

    if (!servicio) return <Spinner />

    return (
        <div className="container mt-4 border border-dark alert alert-primary">

            <form className="mt-4 border border-dark p-4 alert alert-primary">
                <h3 className=" mb-4">
                    <strong>
                        <u>Conformidad de no servicio, Extinto</u>: {servicio.apellido}, {servicio.nombre}
                    </strong>
                </h3>

                <div className="mt-4 border border-dark p-4">
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
                    </div>
                </div>
            </form>

            {socio ? (
                <>
                    <div id="solicitud" >
                        <div className="row  border border-dark list d-flex justify-content-between p-4">

                            <div className="col-md-9 mt-4">
                                <h3 className="">
                                    <strong>
                                        <u>
                                            Declaracion de conformidad
                </u>
                                    </strong>
                                </h3>
                            </div>
                            {empresa === "W" ? (
                                <div className="mt-2 col-md-3 d-flex justify-content-start">
                                    <img
                                        className="werchowlogo"
                                        src="/img/logo.png"
                                        alt="werchowlogo"
                                    />
                                </div>
                            ) : empresa === "M" ? (
                                <div className="mt-2 col-md-3 d-flex justify-content-start">
                                    <img
                                        className="mutuallogo"
                                        src="/img/logom.jpg"
                                        alt="mutuallogo"
                                    />
                                </div>
                            ) : null}



                            <p className="text-justify mt-4 p-2">
                                <font size="3">
                                    Mediante la presente el que suscribe {socio.APELLIDOS}, {socio.NOMBRES}, DNI Nº {socio.NRO_DOC}.
                                por el servicio relacionado con el Extinto {servicio.apellido}, {servicio.nombre}, DNI Nº {servicio.dni}.
                                Cabe manifestar que se le ofreció el servicio de acuerdo al protocolo autorizado por el COE de la Municipalidad de San Salvador de Jujuy,
                                en la que solo autorizan el servicio  en la Sala Velatoria, por esa razón,
                                y al no estar de acuerdo solicitan el retiro de Ataúd  y acepto con total conformidad esta prestación.
                                Por esta razón declaro a {empresa === 'W' ? (<>WERCHOW MEDICINA PRIVADA S.A.</>) : empresa === 'M' ? (<>ASOCIACION MUTUAL SAN VALENTIN</>) : null} libre de responsabilidad
                                y desistiendo desde ya de cualquier acción que pudiera corresponder por dicho servicio de sepelio, renunciando a cualquier reclamo ulterior judicial o extrajudicial,
                                derivado o conexo con la contratación del servicio de sepelio mencionado,
                                particularmente en atención a las circunstancias de excepción derivadas de la pandemia de coronavirus.
                            </font>
                            </p>

                            <div className="d-flex justify-content-center mt-4">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-4 mt-4">
                                        <strong>...........................................</strong>
                                        <label>Firma</label>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-4 mt-4">
                                        <strong>...........................................</strong>
                                        <label>Aclaracion</label>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-4 mt-4">
                                        <strong>...........................................</strong>
                                        <label>DNI</label>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <hr className="mt-4 mb-4 border border-dark" />


                        <div className="row border border-dark  list d-flex justify-content-between p-4">

                            <div className="col-md-9 mt-4">
                                <h3 className="">
                                    <strong>
                                        <u>
                                            Declaracion de conformidad
</u>
                                    </strong>
                                </h3>
                            </div>
                            {empresa === "W" ? (
                                <div className="mt-2 col-md-3 d-flex justify-content-start">
                                    <img
                                        className="werchowlogo"
                                        src="/img/logo.png"
                                        alt="werchowlogo"
                                    />
                                </div>
                            ) : empresa === "M" ? (
                                <div className="mt-2 col-md-3 d-flex justify-content-start">
                                    <img
                                        className="mutuallogo"
                                        src="/img/logom.jpg"
                                        alt="mutuallogo"
                                    />
                                </div>
                            ) : null}



                            <p className="text-justify mt-4 p-2">
                                <font size="3">
                                    Mediante la presente el que suscribe {socio.APELLIDOS}, {socio.NOMBRES}, DNI Nº {socio.NRO_DOC}.
                                presta total conformidad por el servicio de sepelio prestado al Extinto {servicio.apellido}, {servicio.nombre}, DNI Nº {servicio.dni}.
                                Por esta razón declaro a {empresa === 'W' ? (<>WERCHOW MEDICINA PRIVADA S.A.</>) : empresa === 'M' ? (<>ASOCIACION MUTUAL SAN VALENTIN</>) : null} libre de responsabilidad  y desistiendo desde
                                ya de cualquier acción que pudiera corresponder por dicho servicio de sepelio,
                                renunciando a cualquier reclamo ulterior judicial o extrajudicial, derivado o conexo con la contratación del servicio de sepelio mencionado,
                                particularmente en atención a las circunstancias de excepción derivadas de la pandemia de coronavirus.

                             </font>
                            </p>

                            <div className="d-flex justify-content-center mt-4">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-4 mt-4">
                                        <strong>...........................................</strong>
                                        <label>Firma</label>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-4 mt-4">
                                        <strong>...........................................</strong>
                                        <label>Aclaracion</label>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-4 mt-4">
                                        <strong>...........................................</strong>
                                        <label>DNI</label>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="alert alert-primary mt-4">
                        <div className="mt-4 p-4 border">
                            <h3 className="text-center mb-4 font-weight-bold">
                                Opciones
                        </h3>
                            <div className="row d-flex justify-content-center">

                                <button
                                    className="btn btn-primary"
                                    onClick={() => imprimir("solicitud")}
                                >
                                    Imprimir
                          </button>
                            </div>
                        </div>
                    </div>

                </>
            ) : null
            }


        </div >
    )
}

export default ConformidadServicio
