import React from 'react'
import Notificacion from './Notificacion'

const ModalNotificacion = ({
    modal,
    caso,
    userData
}) => {

    return (
        <div
            className={`modal fade bd-example-modal-xl${modal}`}
            role="dialog"
            aria-labelledby="myExtraLargeModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content p-2">
                    <Notificacion caso={caso} userData={userData} />
                </div>
            </div>
        </div>
    )
}

export default ModalNotificacion
