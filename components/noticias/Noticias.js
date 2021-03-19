import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone'
import axios from 'axios'

const Noticias = () => {
    const [noticia, guardarNoticia] = useState({});

    const mostarNoticias = async () => {
        await axios.get(
            `http://190.231.32.232:5002/api/sgi/noticia/noticias`
        ).then((res => {
            const noticia = res.data
            guardarNoticia(noticia)
        })).catch((error => {
            console.log(error);
        }))
    }

    useEffect(() => {
        mostarNoticias()
    }, [])

    let fecha = moment.utc(noticia.fecha).format("DD/MM/YYYY");

    return (

        <div
            className="mt-4 alert alert-info alert-dismissible fade show container"
            role="alert"
        >
            <h3 className="alert-heading mb-4">
                <strong>
                    <u>Noticias</u>
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
            <p>* {noticia.noticia}</p>
            <hr />
            <p className="mb-0 text-center">
                {noticia.operador} - {fecha}
            </p>

        </div>
    );
};

export default Noticias;