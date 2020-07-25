import React from "react";

const LegajoArchivos = ({ archivos, empresa }) => {
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
          <div key={index} className="">
            <div className="">
              <strong>
                <u>{archivo.archivo}</u>
              </strong>
            </div>
            {empresa === "W" ? (
              <img
                src={`http://190.231.32.232:5002/api/archivos/legajovirtual/archivo/${archivo.archivo}`}
                className="archivos p-4 mb-4"
              />
            ) : empresa === "M" ? (
              <img
                src={`http://190.231.32.232:5002/api/archivos/legajovirtualm/archivo/${archivo.archivo}`}
                className="archivos p-4 mb-4"
              />
            ) : null}

            <br />

            {empresa === "W" ? (
              <a
                className="btn btn-primary mt-4 "
                href={`http://190.231.32.232:5002/api/archivos/legajovirtual/descargararchivo/${archivo.archivo}`}
              >
                Descargar
              </a>
            ) : empresa === "M" ? (
              <a
                className="btn btn-primary mt-4 "
                href={`http://190.231.32.232:5002/api/archivos/legajovirtualm/descargararchivo/${archivo.archivo}`}
              >
                Descargar
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegajoArchivos;
