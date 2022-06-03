import React from 'react'
import { gastoLuto } from '../../utils/funciones'

const GastoLuto = ({
    plan,
    alta,
    cantadh
}) => {
    return (
        <div>
            {
                gastoLuto(plan, alta, cantadh) === "no" ? null
                    : (


                        <div
                            className="mt-4 alert alert-info alert-dismissible border border-dark fade show container"
                            role="alert"
                        >
                            <h3 className="alert-heading mb-4">
                                <strong>
                                    <u>ATENCION!!</u>
                                </strong>
                            </h3>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="alert"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <hr />
                            <h5>
                                <strong>
                                    El gasto de luto estimado para este socio es de: ${gastoLuto(plan, alta, cantadh)}.

                                </strong>
                            </h5>
                            <hr />
                            <p >
                                *Tener en cuenta que el tope maximo a pagar por gasto de luto para cualquier plan es de $4000
                            </p>

                        </div>
                    )
            }
        </div>
    )
}

export default GastoLuto