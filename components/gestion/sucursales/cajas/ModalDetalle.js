import React, { useState } from 'react'
import Spinner from '../../../layout/Spinner';
import { ip } from '../../../../config/config'
import LegajoArchivos from './LegajoVirtual';
import FormSubirArchivo from './FormSubirArchivos';

const ModalDetalle = ({ archivos, row, traerArchivos, eliminarArchivos }) => {
    const [archi, guardarArchi] = useState(null);

    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            <u>Legajo Virtual</u>:
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="border border-dark p-4 alert alert-primary">
                            <LegajoArchivos archivos={archivos} eliminarArchivos={eliminarArchivos} />

                            <FormSubirArchivo row={row} traerArchivos={traerArchivos} />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
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

export default ModalDetalle
