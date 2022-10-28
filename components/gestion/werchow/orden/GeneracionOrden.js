import React from 'react'
import ListadoOrdenesPrestador from "../../../../components/gestion/werchow/orden/ListadoOrdenesPrestador";
import ListadoOrdenesCheck from "../../../../components/gestion/werchow/orden/ListadoOrdenesCheck";

const GeneracionOrden = ({
    listado,
    listadoCheck,
    deleteCheckOrden,
    checkOrden,
    totales,
    observacionRef,
    generarOrdenPago

}) => {
    return (
        <div> {listado ? (

            <div className="container mt-4 border border-dark list p-2">
                <div className="row">


                    <div className="col-md-6">
                        <ListadoOrdenesPrestador
                            listado={listado}
                            checkOrden={checkOrden}
                            totales={totales}
                        />

                    </div>


                    <div className="col-md-6">
                        <ListadoOrdenesCheck
                            listadoCheck={listadoCheck}
                            deleteCheckOrden={deleteCheckOrden}
                            totales={totales}
                        />

                    </div>

                    <div className="col-md-12 mt-4">
                        <label>
                            <u>
                                Observacion
                            </u>
                        </label>

                        <textarea rows={5} className="form-control" ref={observacionRef} />
                    </div>
                </div>

                <div className="row mt-4 mb-4 d-flex justify-content-end">
                    <div className="col-md-3">
                        <button className="btn btn-primary btn-block" onClick={() => generarOrdenPago("medica")}>
                            Generar Orden de Pago
                        </button>
                    </div>

                    <div className="col-md-3">
                        <button className="btn btn-danger btn-block">
                            Cancelar
                        </button>
                    </div>
                </div>

            </div>

        ) : null}
        </div>
    )
}

export default GeneracionOrden