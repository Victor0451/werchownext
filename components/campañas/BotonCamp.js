import React from 'react';

const BotonCamp = ({ camp, emp, array, fn, id }) => {
    return (

        <button
            className="btn btn-primary"
            onClick={() => fn(array, id)}
        >
            Crear Camp {camp} {emp}
        </button>

    );
};

export default BotonCamp;