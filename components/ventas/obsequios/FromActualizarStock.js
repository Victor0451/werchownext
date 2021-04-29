import React from 'react'

import Spinner from '../../layout/Spinner'



const FromActualizarStock = ({ prod, nuevoStockRef, actNuevoStock }) => {

    if (!prod)
        return <Spinner />


    return (
        <div className="mt-4 container border border-dark alert alert-primary">

            <h2>
                <strong>
                    <u>
                        Actualizar Stock de los productos
        </u>
                </strong>
            </h2>

            <div className="border border-dark p-4 mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <label>
                            <u>
                                Producto
                                </u>
                        </label>

                        <input type="text" className="form-control" value={prod.producto} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Marca
                                </u>
                        </label>

                        <input type="text" className="form-control" value={prod.marca} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Categoria
                                </u>
                        </label>

                        <input type="text" className="form-control" lue={prod.categoria} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Stock Actual
                                </u>
                        </label>

                        <input type="text" className="form-control" value={prod.stock} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Nuevo Stock
                                </u>
                        </label>

                        <input type="number" className="form-control" placeholder="Nuevo Stock" ref={nuevoStockRef} />
                    </div>

                </div>
            </div>

            <div className="mt-4 border border-dark p-4">
                <div className="row">

                    <div className="col-md-6">
                        <a href="/ventas/obsequios/stock" className="btn btn-danger btn-block">
                            Cancelar
                        </a>
                    </div>

                    <div className="col-md-6">
                        <button className="btn btn-primary btn-block" onClick={actNuevoStock} >
                            Registrar
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FromActualizarStock
