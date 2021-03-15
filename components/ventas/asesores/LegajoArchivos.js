import React, { useState } from "react";

const LegajoArchivos = ({ archivos }) => {
  const [archi, guardarArchi] = useState(null);

  if (!archivos)
    return (
      <div className="alert alert-danger text-center text-uppercase">
        No Hay Archivos
      </div>
    );

  return (
    <div className="container border border-dark p-4">
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

            <img
              src={`http://190.231.32.232:5002/api/archivos/legajovirtualasesores/archivo/${archivo.archivo}`}
              className="archivos p-4 mb-4"
              className="archivos p-4 "
              data-toggle="modal"
              data-target="#exampleModal2"
              onClick={(e) => {
                e.preventDefault(), guardarArchi(archivo.archivo);
              }}
            />

            <br />

            <div className="">
              <a
                className="btn btn-primary mr-1 "
                href={`http://190.231.32.232:5002/api/archivos/legajovirtualasesores/descargararchivo/${archivo.archivo}`}
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

              <img
                src={`http://190.231.32.232:5002/api/archivos/legajovirtualasesores/archivo/${archi}`}
                classNameName="archimodal p-4  "
              />

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
