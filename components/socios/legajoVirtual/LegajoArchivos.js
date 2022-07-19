import React, { useState } from "react";
import { ip } from '../../../config/config'

const LegajoArchivos = ({ archivos, empresa }) => {
  const [archi, guardarArchi] = useState(null);

  if (!archivos)
    return (
      <div className="container mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase border border-dark">
        No Hay Archivos
      </div>
    );

  return (
    <div className="container list border border-dark p-4">
      <h2 className="mb-4">
        <strong>
          <u>Archivos</u>
        </strong>
      </h2>
      <div className="row mt-4 mb-4 text-center text-dark d-flex justify-content-center">
        {archivos.map((archivo, index) => (
          <div key={index} className=" mt-4">
            <div className="col-md-12 border border-dark p-4 mr-1">
              <strong>
                <u>{archivo.archivo}</u>
              </strong>
            </div>
            {empresa === "W" ? (
              <img
                src={`${ip}api/archivos/legajovirtual/archivo/${archivo.archivo}`}
                className="archivos p-4 mb-4"
                data-toggle="modal"
                data-target="#exampleModal2"
                onClick={(e) => {
                  e.preventDefault(), guardarArchi(archivo.archivo);
                }}
              />
            ) : empresa === "M" ? (
              <img
                src={`${ip}api/archivos/legajovirtualm/archivo/${archivo.archivo}`}
                className="archivos p-4 mb-4"
                data-toggle="modal"
                data-target="#exampleModal2"
                onClick={(e) => {
                  e.preventDefault(), guardarArchi(archivo.archivo);
                }}
              />
            ) : null}

            <br />

            {empresa === "W" ? (
              <div className="">
                <a
                  className="btn btn-primary mr-1 "
                  href={`${ip}api/archivos/legajovirtual/descargararchivo/${archivo.archivo}`}
                >
                  <i className="fa fa-download" aria-hidden="true"></i>
                </a>
                <button
                  className="btn btn-danger mr-1"
                  onClick={(e) => {
                    e.preventDefault();
                    eliminarArchivos(archivo.archivo, index);
                  }}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            ) : empresa === "M" ? (
              <div className="">
                <a
                  className="btn btn-primary mr-1 "
                  href={`${ip}api/archivos/legajovirtual/descargararchivom/${archivo.archivo}`}
                >
                  <i className="fa fa-download" aria-hidden="true"></i>
                </a>
                <button
                  className="btn btn-danger mr-1"
                  onClick={(e) => {
                    e.preventDefault();
                    eliminarArchivos(archivo.archivo, index);
                  }}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* MODAL IMAGEN AMPLIA */}

      <div
        className="modal fade"
        id="exampleModal2"
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
              {empresa === "W" ? (
                <img
                  src={`${ip}api/archivos/legajovirtual/archivo/${archi}`}
                  classNameName="archimodal p-4  "
                />
              ) : (
                <img
                  src={`${ip}api/archivos/legajovirtualm/archivo/${archi}`}
                  classNameName="archimodal p-4  "
                />
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegajoArchivos;
