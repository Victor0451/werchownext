import React, { useState } from "react";
import { ip } from "../../config/config";
import URLLink from "./URLLink";

const LegajoArchivos = ({
  archivos,
  
}) => {

  if (!archivos) {
    return null
  }

  const [archi, guardarArchi] = useState(null);

  return (
    <div className="p-4 list mt-4">

      <div className=" col-md-12  mb-4">
        <h4 className=" mb-4 col-8">
          <strong>
            <u>Adjuntos:</u>
          </strong>
        </h4>


        <div className=" row  d-flex justify-content-center text-center  text-dark ">
          {archivos.map((archivo, index) => (

            <div key={index} className=" ">
              <div className="col-md-12 mt-4 borderImp p-4 mr-1">
                <strong>
                  <u>{archivo.adjunto}</u>
                </strong>



                <br />
                <div className="">
                  <a
                    className="btn btn-primary mr-1 "
                    href={`${ip}api/archivos/mails/descargararchivo/${archivo.adjunto}`}
                  >
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                </div>

                {
                  archivo.tipo === 'image/jpeg' ? (

                    <img
                      src={`${ip}api/archivos/mails/archivo/${archivo.adjunto}`}
                      className="archivos p-4 "
                      data-toggle="modal"
                      data-target="#imgModal"
                      onClick={() => guardarArchi(archivo.adjunto)}
                    />

                  ) : (

                    <iframe className="doc mt-4" src={`https://docs.google.com/gview?url=http://190.231.67.172:5002/api/archivos/mails/archivo/${archivo.adjunto}&embedded=true`}></iframe>

                  )
                }

              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL IMAGEN AMPLIA */}

      <div
        className="modal fade"
        id="imgModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <u>{archi}</u>
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
            <div className="modal-body d-flex justify-content-center">
              <img
                src={`${ip}api/archivos/mails/archivo/${archi}`}
                classNameName="archimodal p-4  "
              />
            </div>

            <div className="modal-footer">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegajoArchivos;
