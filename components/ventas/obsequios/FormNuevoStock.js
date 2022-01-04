import React from 'react'

const FormNuevoStock = ({
    categorias,
    productoRef,
    marcaRef,
    categoriaRef,
    stockRef,
    precioRef,
    observacionRef,
    user,
    errores,
    registrarProducto

}) => {
    return (
        <div className="mt-4 container border border-dark list">

            <div className="row">
                <div className="col-md-6">
                    <h2>
                        <strong>
                            <u>
                                Nuevo Producto
                    </u>
                        </strong>
                    </h2>
                </div>
                <div className="col-md-6">
                    <a href="/ventas/obsequios/stock" className="btn btn-block btn-info btn-sm">
                        Ver Stock Disponible
</a>
                </div>
            </div>


            {errores ? (
                <div className="alert alert-danger border border-dark text-center text-uppercase">
                    {errores}
                </div>

            ) : null}


            <div className="mt-4 border border-dark p-4">

                <div className="row">

                    <div className="col-md-4">
                        <label>
                            <u>
                                Producto
                                </u>
                        </label>

                        <input type="text" className="form-control" placeholder="Producto" ref={productoRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <u>
                                Marca
                                </u>
                        </label>

                        <input type="text" className="form-control" placeholder="Marca" ref={marcaRef} />
                    </div>

                    <div className="col-md-4">
                        <label>
                            <strong>
                                {" "}
                                <u> Obsequio Para: </u>
                            </strong>
                        </label>
                        <select
                            className="custom-select"
                            name="operador"
                            ref={categoriaRef}

                        >
                            <option selected value="no"> Elige una Opcion </option>
                            {categorias
                                ? categorias.map((c, index) => (
                                    <option key={index} value={c.value}>
                                        {c.label}
                                    </option>
                                ))
                                : null}
                        </select>
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            <u>
                                Precio
                                </u>
                        </label>

                        <input type="number" className="form-control" placeholder="Precio" ref={precioRef} />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            <u>
                                Stock
                                </u>
                        </label>

                        <input type="number" className="form-control" placeholder="Stock" ref={stockRef} />
                    </div>

                    <div className="mt-4 col-md-4">
                        <label>
                            <u>
                                Operador
                                </u>
                        </label>

                        <input type="text" className="form-control" placeholder="Operador" value={user} />
                    </div>

                    <div className="mt-4 col-md-12">
                        <label>
                            <u>
                                Observacion
                                </u>
                        </label>

                        <textarea rows="3" className="form-control" placeholder="Observacion" ref={observacionRef} />
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
                        <button className="btn btn-primary btn-block" onClick={registrarProducto}>
                            Registrar
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FormNuevoStock
