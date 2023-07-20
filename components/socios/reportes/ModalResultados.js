import React from 'react'
import ListadoPadron from "../../../components/socios/reportes/ListadoPadron";
import ExportarPadron from "../../../components/socios/reportes/ExportarPadron";

const ModalResultados = ({
    padron,
    cartera,
    zona,
    tipocartera,
    sucursal,

}) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Resultados</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {padron !== null ? (
                            <>
                                <ListadoPadron
                                    padron={padron}
                                    tipocartera={tipocartera}
                                    sucursal={sucursal}
                                />

                                <div className="container list mt-4">
                                    <div className="mt-4 p-4 border">
                                        <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
                                        <div className="row d-flex justify-content-center">
                                            <ExportarPadron
                                                padron={padron}
                                                tipocartera={tipocartera}
                                                sucursal={sucursal}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalResultados
