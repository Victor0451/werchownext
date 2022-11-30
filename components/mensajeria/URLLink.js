import React from 'react'

const URLLink = ({
    url,
    index,
    eliminarURL,
    f
}) => {
    return (
        <div key={index}>
            {f === 'nuevo' ? (
                <div className="badge badge-dark ml-1" >
                    {`Link de la caja generada`}
                </div>
            ) : f === 'leer' ? (
                <div className="badge badge-dark ml-1" >
                    <a href={`${url}`}>
                        {`Link de la caja generada`}
                    </a>
                </div>
            ) : null}


        </div>
    )
}

export default URLLink