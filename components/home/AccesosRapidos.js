import React from "react";

const AccesosRapidos = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card col-md-3 text-white bg-primary mb-3 mr-1">
          <div className="card-header">Ficha Del Socio</div>
          <div className="card-body">
            <a
              className="btn btn-secondary btn-block text-dark"
              href="/socios/ficha/ficha"
            >
              Buscar Ficha
            </a>
            <p className="card-text mt-2">
              Este es un acceso rapido a la seccion que te permite ver la ficha
              del socio, adherentes y pagos, emulando la funcion del fox
            </p>
          </div>
        </div>{" "}
        <div className="card col-md-4 text-white bg-primary mb-3">
          <div className="card-header">Subir Archivos</div>
          <div className="card-body">
            <a
              className="btn btn-secondary btn-block text-dark"
              href="/socios/legajovirtual/subirarchivo"
            >
              Subir Archivos Al Legajo Virtual
            </a>
            <p className="card-text mt-2">
              Acceso rapido para subir archivos digitales al legajo virtual del
              socio.
            </p>
          </div>
        </div>
        <div className="card col-md-3 text-white bg-primary mb-3 ml-1">
          <div className="card-header">Ficha Del Socio</div>
          <div className="card-body">
            <a
              className="btn btn-secondary btn-block text-dark"
              href="/socios/ficha/print"
            >
              Print De Ficha y Pagos
            </a>
            <p className="card-text mt-2">
              Este es un acceso rapido a la seccion que te permite realizar un
              print de la ficha con sus adherentes y/o de sus pagos
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default AccesosRapidos;
