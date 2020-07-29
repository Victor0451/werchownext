import React from "react";

const LegajoArchivos = ({ archivos, id }) => {
  if (!archivos)
    return (
      <div className="alert alert-danger text-center text-uppercase">
        No Hay Archivos
      </div>
    );

  return (
    <div className="container alert alert-primary border border-dark p-4 mt-4">
      <h2 className="mb-4">
        <strong>
          <u>Archivos Legajo Virtual N°:</u> "{id}"
        </strong>
      </h2>
      <a
        href="/prestamos/imprimircaratula"
        className="btn btn-primary text-white"
      >
        Volver Al Listado
      </a>
      <div className="row mt-4 mb-4 text-center border border-dark text-dark d-flex justify-content-center">
        {archivos.map((archivo, index) => (
          <div key={index} className="mt-4">
            <div className="col">
              <strong>
                <u>{archivo.archivo}</u>
              </strong>
            </div>
            <div className="col">
              <img
                src={`http://190.231.32.232:5002/api/archivos/legajovirtualprestamos/archivo/${archivo.archivo}`}
                className="archivos p-4 "
              />

              <br />

              <a
                className="btn btn-primary "
                href={`http://190.231.32.232:5002/api/archivos/legajovirtualprestamos/descargararchivo/${archivo.archivo}`}
              >
                Descargar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegajoArchivos;
