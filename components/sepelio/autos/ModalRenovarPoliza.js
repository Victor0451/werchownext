import React from 'react'
import FormRenovarPoliza from './FormRenovarPoliza'

const ModalRenovarPoliza = ({
    row,
    nuevaPolRef,
    nuevoVencimientoRef,
    nuevaEmpresaRef,
    errores,
    renovPoliza

}) => {
    return (
        <div className="modal fade" id="renovpol" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Opciones</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <FormRenovarPoliza
                            row={row}
                            nuevaPolRef={nuevaPolRef}
                            nuevoVencimientoRef={nuevoVencimientoRef}
                            nuevaEmpresaRef={nuevaEmpresaRef}
                            errores={errores}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" onClick={() => renovPoliza(row.idauto)}>Renovar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalRenovarPoliza
