import React from 'react'

const FormNuevoProveedor = ({ proveedorRef, cuitRef, telefonoRef, domicilioRef, registrarProv, errores }) => {
    return (
        <div className="mt-4 container border border-dark list p-4">
            <div className="row">
                <div className="col-md-6">
                    <h2>
                        <strong>
                            <u>
                                Nuevo Proveedor
                    </u>
                        </strong>
                    </h2>
                </div>
                <div className="col-md-6">
                    <a href="/sepelio/proveedores/listado" className="btn btn-info btn-block btn-sm" >
                        Listado de Proveedores
</a>
                </div>
            </div>


            {errores ? (
                <div className="mt-4 alert alert-danger text-center text-uppercase border border-dark">
                    {errores}
                </div>
            ) : null}

            <div className="mt-4 border border-dark p-4">
                <div className="row">
                    <div className="col-md-4">
                        <label>
                            <u>
                                Proveedor:
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Proveedor" ref={proveedorRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Cuit:
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Cuit" ref={cuitRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Telefono:
                            </u>
                        </label>
                        <input type="number" className="form-control" placeholder="Telefono" ref={telefonoRef} />
                    </div>

                    <div className="col-md-6 mt-4">
                        <label>
                            <u>
                                Domicilio:
                            </u>
                        </label>
                        <input type="text" className="form-control" placeholder="Domicilio" ref={domicilioRef} />
                    </div>

                </div>
            </div>

            <div className="border border-dark p-4 mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <a href="/sepelio/proveedores/listado" className="btn btn-danger btn-block">
                            Cancelar
                </a>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-primary btn-block" onClick={registrarProv}>
                            Registrar
                </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormNuevoProveedor
