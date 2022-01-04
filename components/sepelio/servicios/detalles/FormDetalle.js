import React, { useState } from 'react'
import Spinner from '../../../layout/Spinner'
import DetalleSelect from 'react-select'
import AutoSelect from 'react-select'


const FormDetalle = ({
    servicio,
    tipodetalle,
    handleChange,
    flag,
    autos,
    registrarDetalle,
    montoRef,
    lugarRef,
    observacionRef,
    errores
}) => {

    if (!servicio) return <Spinner />


    return (
        <div className="container mt-4 border border-dark list p-4">


            <h2>
                <strong>
                    <u> Detalles del servicio N° {servicio.idservicio}</u>:{" "}
                    {servicio.apellido}, {servicio.nombre}
                </strong>
            </h2>

            {errores ? (<div className="mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase">{errores}</div>
            ) : null}

            <div className=" mt-4 row border border-dark p-4">

                <div className="col-md-4">
                    <label>
                        <strong>
                            {" "}
                            <u> Detalle: </u>
                        </strong>
                    </label>
                    <DetalleSelect
                        options={tipodetalle}
                        placeholder={"Eliga el Año"}
                        onChange={(value) => handleChange(value.value, "detalle")}
                    />
                </div>


                {flag === 'Carroza Funebre' ||
                    flag === 'Coche Portacoronas' ||
                    flag === 'Automovil Duelo' ?
                    (
                        <>
                            <div className="col-md-8">
                                <label>
                                    <strong>
                                        {" "}
                                        <u> Auto: </u>
                                    </strong>
                                </label>
                                <AutoSelect
                                    options={autos}
                                    placeholder={"Eliga el Año"}
                                    onChange={(value) => handleChange(value.value, "auto")}
                                />
                            </div>
                        </>
                    ) : flag === 'Corona Floral' ||
                        flag === 'Grabado De Placa' ||
                        flag === 'Aviso De Sepelio' ?

                        (
                            <>
                                <div className="col-md-4">
                                    <label>
                                        <strong>
                                            <u> Lugar: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        name="lugar"
                                        placeholder="Lugar"
                                        ref={lugarRef}
                                    />

                                </div>

                                <div className="col-md-4">
                                    <label>
                                        <strong>
                                            <u> Monto: </u>
                                        </strong>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        name="monto"
                                        placeholder="Monto"
                                        ref={montoRef}
                                    />

                                </div>

                            </>
                        ) : (<div className="mt-4 col-md-8 alert alert-info border border-dark text-center text-uppercase">Segun el tipo de detalle que elijas se desplegaran otras opciones</div>)

                }

                {flag ? (
                    <div className="mt-4 col-md-12">
                        <label>
                            <strong>
                                <u> Observacion: </u>
                            </strong>
                        </label>
                        <textarea
                            rows="3"
                            className="form-control"
                            placeholder="Observacion"
                            ref={observacionRef}
                        />

                    </div>
                ) : null}


            </div>

            <div className="row p-4 border border-dark mt-4">
                <div className="col-md-6">
                    <a href="/sepelio/servicios/listado" className="btn btn-danger btn-block">Cancelar</a>
                </div>

                <div className="col-md-6">
                    <button className="btn btn-primary btn-block" onClick={registrarDetalle}>Registrar</button>
                </div>
            </div>
        </div>
    )
}

export default FormDetalle
