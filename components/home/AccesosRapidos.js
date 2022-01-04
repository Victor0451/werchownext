import React from "react";
import Novedades from "../sepelio/novedades/Novedades";

const AccesosRapidos = ({ user }) => {
  if (!user) return null;

  return (
    <>
      {user === 4 ? (
        <>
          <Novedades />
        </>
      ) : null}

      <div className="container">
        <div className="row d-flex justify-content-center">

          <div className="card col-md-3 text-dark bg-ligth border border-dark   mb-3 ">
            <div className="card-header">Ficha Del Socio</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/socios/ficha/ficha"
              >
                Buscar Ficha
              </a>
              <p className="card-text mt-2">
                Este es un acceso rapido a la seccion que te permite ver la
                ficha del socio, adherentes y pagos, emulando la funcion del fox
              </p>
            </div>
          </div>{" "}

          <div className="card col-md-3 text-dark bg-light border border-dark  ml-1 mb-3">
            <div className="card-header">Subir Archivos</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/socios/legajovirtual/subirarchivo"
              >
                Subir Archivos Al Legajo Virtual
              </a>
              <p className="card-text mt-2">
                Acceso rapido para subir archivos digitales al legajo virtual
                del socio.
              </p>
            </div>
          </div>

          <div className="card col-md-3 text-dark bg-light border border-dark   mb-3 ml-1">
            <div className="card-header">Prints</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/socios/ficha/print"
              >
                Print De Ficha y Pagos
              </a>
              <p className="card-text mt-2">
                Este es un acceso rapido a la seccion que te permite realizar un
                print de la ficha con sus adherentes y/o de sus pagos
              </p>
            </div>
          </div>

          <div className="card col-md-3 text-dark bg-light border border-dark   mb-3 ml-1">
            <div className="card-header">Tareas Programadas</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/gestion/sucursales/tareas/nuevo"
              >
                Tareas de Sucursales
              </a>
              <p className="card-text mt-2">
                Este es un acceso rapido al calendario de tareas registradas por las distintas sucursales
              </p>
            </div>
          </div>

          <div className="card col-md-3 text-dark bg-light border border-dark   mb-3 ml-1">
            <div className="card-header">Tareas Programadas</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/sepelio/tareas/calendario"
              >
                Tareas de Sepelio
              </a>
              <p className="card-text mt-2">
                Este es un acceso rapido al calendario de tareas registradas por el depto de sepelio
              </p>
            </div>
          </div>
        </div>

        {user === 4 ? (
          <>
            <div className="row d-flex justify-content-center">
              <div className="card col-md-3 text-dark bg-light border border-dark bg-info mb-3 ">
                <div className="card-header">Nuevo Servicio</div>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block "
                    href="/sepelio/servicios/nuevo"
                  >
                    Cargar Servicio
                  </a>
                  <p className="card-text mt-2">
                    Este es un acceso rapido a la seccion que te permite
                    registrar un nuevo servicio en el sistema
                  </p>
                </div>
              </div>{" "}

              <div className="card col-md-4 border border-dark bg-info mb-3">
                <div className="card-header">Nueva Caja de Sepelio</div>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block "
                    href="/sepelio/caja/nuevo"
                  >
                    Cargar Caja Sepelio
                  </a>
                  <p className="card-text mt-2">
                    Acceso rapido para registrar una nueva caja de sepelio.
                  </p>
                </div>
              </div>

              <div className="card col-md-3 text-dark bg-light border border-dark bg-info mb-3 ml-1">
                <div className="card-header">Stock Ataudes</div>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block "
                    href="/sepelio/ataudes/stock"
                  >
                    Ver Stock Ataudes
                  </a>
                  <p className="card-text mt-2">
                    Este es un acceso rapido al Stock de ataudes para poder ver
                    y gestinar la exitencia de los mismos.
                  </p>
                </div>
              </div>{" "}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default AccesosRapidos;
