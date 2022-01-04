import React from 'react'
import moment from 'moment'

const FormTurno = ({ buscarTitular, buscarTitularM, dniRef, telefonoRef, movilRef, motivoRef, errores, ficha, registrarTurno }) => {

    
    return (
        <div className="mt-4 container border border-dark list p-4">
            <h2>
                <strong>
                    <u>
                        Solicitud de Turnos para Gestion de Bajas
                    </u>
                </strong>
            </h2>

            <div className="mt-4 border border-dark p-4">
                <h3 className=" mb-4">
                    <strong>
                        <u>Ingrese N° de DNI</u>
                    </strong>
                </h3>
                <div className="row mb-4">
                    <div className="form-group col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> N° de DNI: </u>
                            </strong>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ficha"
                            name="contrato"
                            ref={dniRef}
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

            {!ficha ? null : (
                <div className="mt-4 border border-dark p-4">

                    <div className=" mt-4 alert alert-info text-center text-uppercase border border-dark">
                        Consultar si los telefono registrados son correctos, caso contrario actualizarlos en el mismo campo en el que figura
                    </div>


                    <div className="row">

                        <div className="col-md-6">
                            <h2 className="mt-4">
                                <strong>
                                    <u>
                                        Datos del Socio
                            </u>
                                </strong>
                            </h2>
                        </div>
                        <div className="col-md-3">
                            <label>
                                <strong>Fecha</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={moment().format('DD/MM/YYYY')} />

                        </div>

                        <div className="col-md-3">
                            <label>
                                <strong>Turno</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={moment().add('days', 3).format('DD/MM/YYYY')} />

                        </div>
                    </div>


                    {ficha.GRUPO == 1001 ||
                        ficha.GRUPO == 3444 ||
                        ficha.GRUPO == 3666 ||
                        ficha.GRUPO == 3777 ||
                        ficha.GRUPO == 3888 ||
                        ficha.GRUPO == 39999 ||
                        ficha.GRUPO == 4004 ||
                        ficha.GRUPO == 666 ||
                        ficha.GRUPO == 7777 ?
                        (<div className="mt-4 alert alert-danger border border-dark text-center text-uppercase">
                            El Socio pertenece a un grupo moroso
                        </div>) : null}

                    <div className="mt-4 row border border-dark p-4">

                        <div className="col-md-4">
                            <label>
                                <strong>Contrato</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={ficha.CONTRATO} />

                        </div>

                        <div className=" col-md-4">
                            <label>
                                <strong>Apellido</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={ficha.APELLIDOS} />

                        </div>

                        <div className=" col-md-4">
                            <label>
                                <strong>Nombre</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={ficha.NOMBRES} />

                        </div>

                        <div className="mt-4 col-md-4">
                            <label>
                                <strong>DNI</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={ficha.NRO_DOC} />

                        </div>

                        <div className="mt-4 col-md-6">
                            <label>
                                <strong>Domicilio</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={ficha.CALLE} />

                        </div>

                        <div className="mt-4 col-md-2">
                            <label>
                                <strong>N°</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={ficha.NRO_CALLE} />

                        </div>

                        <div className="mt-4 col-md-4">
                            <label>
                                <strong>Barrio</strong>
                            </label>
                            <input type="text" className="form-control" defaultValue={ficha.BARRIO} />

                        </div>

                        <div className="mt-4 col-md-4">
                            <label>
                                <strong>Telefono</strong>
                            </label>
                            <input type="number" className="form-control" ref={telefonoRef} defaultValue={ficha.TELEFONO} />

                        </div>

                        <div className="mt-4 col-md-4">
                            <label>
                                <strong>Movil</strong>
                            </label>
                            <input type="number" className="form-control" ref={movilRef} defaultValue={ficha.MOVIL} />

                        </div>

                        <div className="mt-4 col-md-12">
                            <label>
                                <strong>Motivo</strong>
                            </label>
                            <textarea rows="3" className="form-control" ref={motivoRef} />

                        </div>
                    </div>

                    <div className="row mt-4 border border-dark p-4">

                        <div className="col-md-6">
                            <button className="btn btn-block btn-primary" onClick={registrarTurno}>Registar Turno</button>
                        </div>


                        <div className="col-md-6">
                            <a href='/socios/turnobajas/listado' className="btn btn-block btn-danger">
                                Cancelar
                                </a>
                        </div>
                    </div>

                </div>

            )}


        </div>
    )
}

export default FormTurno
