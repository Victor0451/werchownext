import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import axios from "axios";
import { ip } from "../../config/config";

const Noticias = (user) => {
  if (user.user === null) return <div>...</div>;

  const [noticia, guardarNoticia] = useState(null);

  const mostarNoticias = async (perfil) => {
    await axios
      .get(`${ip}api/sgi/noticia/noticias/${perfil.user}`)
      .then((res) => {
        const noticia = res.data;
        guardarNoticia(noticia);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    mostarNoticias(user);
  }, []);

  return (
    <div>
      {!noticia ? (
        <div className="container alert alert-info text-center text-uppercase border border-dark mt-4 mb-4">
          No hay novedades
        </div>
      ) : (
        <div
          className="mt-4 alert alert-info alert-dismissible border border-dark fade show container"
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
            {noticia.operador} -{" "}
            {moment.utc(noticia.fecha).format("DD/MM/YYYY")}
          </p>
        </div>
      )}
    </div>
  );
};

export default Noticias;
