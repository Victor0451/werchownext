import React from 'react'

const DestinatarioBadge = ({
    dest,
    index,
    eliminarDestino
}) => {
    return (
        <div key={index}>
            <div className="badge badge-dark ml-1" onClick={() => eliminarDestino(index)}>
                {`${dest} X `}
            </div>
        </div>
    )
}

export default DestinatarioBadge