import React from 'react'
import Spinner from '../../../layout/Spinner'

const FormGastoLuto = ({
    servicio,
    ataud,
    errores,
    gastoLutoRef,
    apellidoBenRef,
    nombreBenRef,
    telefonoBenRef,
    parentezcoRef,
    registrarGastoLuto,
}) => {

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



            {
                errores ? (
                    <div className="mt-4 mb-4 alert alert-danger text-center text-uppercase border border-dark">
                        {errores}
                    </div>
                ) : null
            }


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
                            <input type="number" className="form-control" placeholder="Gasto de Luto" ref={gastoLutoRef} />
                        </div>

                    </div>
                </div>

                {
                    !ataud ? (<div className="mt-4 border border-dark  alert alert-info text-center text-uppercase">No hay Ataud Registrado</div>) : (
                        <div className="border border-dark mt-4 p-4">
                            <h4>
                                <strong>
                                    <u>
                                        Informacion sobre el ataud
                               </u>
                                </strong>
                            </h4>

                            <div className="row border border-dark mt-4 p-4">

                                <div className="mt-4 col-md-4">
                                    <label>
                                        <u>Ataud</u>:
            </label>
                                    <input className="form-control" defaultValue={ataud.nombre} />
                                </div>

                                <div className="mt-4 col-md-3">
                                    <label>
                                        <u>Tipo</u>:
            </label>
                                    <input className="form-control" defaultValue={ataud.tipo} />
                                </div>

                                <div className="mt-4 col-md-3">
                                    <label>
                                        <u>Uso</u>:
            </label>
                                    <input className="form-control" defaultValue={ataud.uso} />
                                </div>

                                <div className="mt-4 col-md-3">
                                    <label>
                                        <u>Medidas</u>:
            </label>
                                    <input className="form-control" defaultValue={ataud.medidas} />
                                </div>

                                <div className="mt-4 col-md-3">
                                    <label>
                                        <u>Fabricante</u>:
            </label>
                                    <input className="form-control" defaultValue={ataud.fabricante} />
                                </div>
                            </div>
                        </div>
                    )
                }

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
                            <input type="text" className="form-control" placeholder="Apellido Beneficiario" ref={apellidoBenRef} />
                        </div>

                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    Nombre del Beneficiario:
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Nombre Beneficiario" ref={nombreBenRef} />
                        </div>


                        <div className="mt-4  col-md-4">
                            <label>
                                <u>
                                    Telefono del Beneficiario:
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Telefono Beneficiario" ref={telefonoBenRef} />
                        </div>


                        <div className="mt-4 col-md-4">
                            <label>
                                <u>
                                    Parentezco del Beneficiario:
                                </u>
                            </label>
                            <input type="text" className="form-control" placeholder="Parentezco Beneficiario" ref={parentezcoRef} />
                        </div>

                    </div>

                </div>
            </div>

            <div className="row border border-dark mt-4 p-4">

                <div className="col-md-6">
                    <a href="/sepelio/servicios/listado" className="btn btn-danger btn-block">
                        Cancelar
</a>
                </div>

                <div className="col-md-6">
                    <button href="/sepelio/servicios/listado" className="btn btn-primary btn-block" onClick={registrarGastoLuto}>
                        Registrar
</button>
                </div>

            </div>

        </div>
    )
}

export default FormGastoLuto
