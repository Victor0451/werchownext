import React from 'react'
import Legajo from './Legajo'
import AdhPrint from './AdhPrint'
import PagosPrint from './PagosPrint'

const ModalLegajoPrint = ({
    imprimir,
    pagos,
    ficha,
    empresa,
    adhs
}) => {
    return (
        <div
            className="modal fade"
            id="legajo"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl p-2">
                <div className="modal-content border border-dark ">
                    <div className="modal-header list">
                        <h2 className="modal-title" id="exampleModalLabel">
                            <strong>
                                <u>Legajo Del Socio</u>
                            </strong>
                        </h2>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ">

                        {ficha ? (
                            <>
                                {ficha.GRUPO === 1001 ||
                                    ficha.GRUPO === 1005 ||
                                    ficha.GRUPO === 1006 ||
                                    ficha.GRUPO === 3444 ||
                                    ficha.GRUPO === 3666 ||
                                    ficha.GRUPO === 3777 ||
                                    ficha.GRUPO === 3888 ||
                                    ficha.GRUPO === 3999 ||
                                    ficha.GRUPO === 4004 ||
                                    ficha.GRUPO === 7777 ||
                                    ficha.GRUPO === 8500 ? (
                                    <div className="alert alert-warning text-center text-uppercase border border-dark mb-4">
                                        ESTA FICHA PERTENECE A UN GRUPO MOROSO
                                    </div>
                                ) : null}
                            </>
                        ) : null}


                        <div id="solicitud" className="mt-4 container p-4 border border-dark">
                            <div>
                                <div id="leg">
                                    <Legajo ficha={ficha} empresa={empresa} />

                                    <hr className="mt-4 mb-4 border border-dark" />
                                    <AdhPrint adhs={adhs} />
                                </div>
                                <button
                                    className="btn btn-info"
                                    onClick={() => imprimir("leg")}
                                >
                                    Imprimir Legajo
                                </button>

                                <hr className="mt-4 mb-4 border border-dark" />
                                <div id="pag">
                                    <PagosPrint pagos={pagos} ficha={ficha} empresa={empresa} />
                                </div>
                                <button
                                    className="mt-4 btn btn-info"
                                    onClick={() => imprimir("pag")}
                                >
                                    Imprimir Pagos
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLegajoPrint
