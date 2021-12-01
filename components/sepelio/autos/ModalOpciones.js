import React from 'react'

const ModalOpciones = ({ push, row }) => {
    return (
        <div className="modal fade" id="opciones" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Opciones</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div className="p-4">
                            <div className=" border border-dark alert alert-primary p-4 row">


                                <div className="col-md-3">

                                    <button
                                        className="btn btn-block btn-warning border mr-1"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Editar"
                                        data-dismiss="modal"
                                        onClick={() => push(row.patente, row.idauto, "/sepelio/autos/editar")}
                                    >
                                        <i
                                            className="fa fa-pencil-square-o"
                                            aria-hidden="true"
                                        > Editar</i>
                                    </button>

                                </div>

                                {/* <div className="col-md-3">

                                    <button
                                        className="btn btn-block btn-danger mr-1"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Elmiminar"
                                        data-dismiss="modal"
                                        onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/impresion")}
                                    >
                                        <i className="fa fa-print" aria-hidden="true"> Eliminar</i>
                                    </button>

                                </div> */}


                                <div className="col-md-3 ">

                                    <button
                                        className="btn btn-block btn-info mr-1"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Renovar Poliza"
                                        data-target='#renovpol'
                                        data-toggle="modal"


                                    >
                                        <i className="fa fa-money" aria-hidden="true"> Renovar Poliza</i>
                                    </button>

                                </div>


                                <div className="col-md-3 ">

                                    <button
                                        className="btn btn-block btn-success mr-1"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Pago de Patente"
                                        data-dismiss="modal"
                                        onClick={() => push(row.patente, row.idauto, "/sepelio/autos/pagopatente")}

                                    >
                                        <i className="fa fa-money" aria-hidden="true"> Pago de Patente</i>
                                    </button>

                                </div>

                                <div className="col-md-3">
                                    <button
                                        className="btn btn-block btn-secondary  mr-1"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Legajo Virtual"
                                        data-dismiss="modal"
                                        onClick={() =>
                                            push(
                                                row.patente, row.idauto,
                                                "/sepelio/autos/legajo"


                                            )
                                        }
                                    >
                                        <i className="fa fa-folder-open" aria-hidden="true">
                                            {" "}
                                            Legajo Virtual
                                        </i>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalOpciones
