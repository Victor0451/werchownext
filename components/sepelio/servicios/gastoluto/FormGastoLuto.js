import React from 'react'
import Spinner from '../../../layout/Spinner'

const FormGastoLuto = ({ servicio, ataud }) => {

    if (!servicio) return <Spinner />

    return (
        <div className="mt-4 container border border-dark alert alert-primary">

            <h2 className="mt-4 mb-4">
                <strong>
                    <u>
                        Gasto de Luto servicio
                </u>: {servicio.idservicio} - {servicio.apellido}, {servicio.nombre}
                </strong>
            </h2>



            <div className=" border border-dark p-4">

                <div className=" border border-dark p-4">

                    <h4>
                        <strong>
                            <u>
                                Datos del Extinto
                        </u>
                        </strong>
                    </h4>

                    <div className="row">

                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    Extinto:
                                </u>
                            </label>
                            <input type="text" className="form-control" defaultValue={`${servicio.apellido}, ${servicio.nombre}`} />
                        </div>

                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    DNI Extinto:
                                </u>
                            </label>
                            <input type="number" className="form-control" defaultValue={servicio.dni} />
                        </div>

                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    Contrato:
                                </u>
                            </label>
                            <input type="number" className="form-control" defaultValue={servicio.contrato} />
                        </div>

                        <div className="mt-4 col-md-4">
                            <label>
                                <u>
                                    Servicio:
                                </u>
                            </label>
                            <input type="text" className="form-control" defaultValue={servicio.tipo_servicio} />
                        </div>

                        <div className="mt-4 col-md-4">
                            <label>
                                <u>
                                    Gasto de Luto:
                                </u>
                            </label>
                            <input type="number" className="form-control" placeholder="Gasto de Luto" />
                        </div>

                    </div>
                </div>

                <div className="mt-4 border border-dark p-4">

                    <h4>
                        <strong>
                            <u>
                                Datos del Beneficiario
                        </u>
                        </strong>
                    </h4>

                    <div className="row">



                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    Apellido del Beneficiario:
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Apellido Beneficiario" />
                        </div>

                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    Nombre del Beneficiario:
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Nombre Beneficiario" />
                        </div>


                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    Telefono del Beneficiario:
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Telefono Beneficiario" />
                        </div>


                        <div className="mt-4 col-md-4">
                            <label>
                                <u>
                                    Parentezco del Beneficiario:
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Parentezco Beneficiario" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormGastoLuto
