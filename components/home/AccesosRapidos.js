import React from "react";

const AccesosRapidos = ({ user }) => {
  if (!user) return null;

  return (
    <>
      <div className="container p-4 border border-dark list">

        <h2>
          <u>
            Accesos Directos
          </u>
        </h2>

        <div className="row mt-4 border border-dark p-4 d-flex justify-content-center">

          <div className="card col-md-3 text-dark bg-ligth border border-dark   mb-3 ">
            <div className="card-header">Certificados</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/socios/solicitudes/certificado"
              >
                Certificados Est. Policia
              </a>
              <p className="card-text mt-2">
                Generacion de certificados para estudiantes de policia.
              </p>
            </div>
          </div>{" "}

          <div className="card col-md-3 text-dark bg-ligth border border-dark   mb-3 ">
            <div className="card-header">Reg. Turnos</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/socios/turnobajas/turno"
              >
                Registrar Turnos para Atencion
              </a>
              <p className="card-text mt-2">
                Este es un acceso rapido a la seccion que te permite recepcionar el pedido de los socios
                y organizarlo por turnos para su atencion
              </p>
            </div>
          </div>{" "}

          <div className="card col-md-3 text-dark bg-ligth border border-dark ml-1  mb-3 ">
            <div className="card-header">Listado de Turnos</div>
            <div className="card-body">
              <a
                className="btn btn-primary btn-block "
                href="/socios/turnobajas/listado"
              >
                Listado de Turnos Agendados
              </a>
              <p className="card-text mt-2">
                Este es un acceso rapido a la seccion que te permite visualizar y resgistrar la respuesta de los turnos registrados
              </p>
            </div>
          </div>{" "}

          <div className="card col-md-3 text-dark bg-ligth border border-dark ml-1 mb-3 ">
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
            <div className="card-header">Tareas Prog. Sucursales</div>
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
            <div className="card-header">Tareas Prog. Sepelio</div>
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


          {user === 4 ? (
            <>

              <div className="card col-md-3 text-dark bg-ligth border border-dark mb-3 ml-1 ">
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

              <div className="card col-md-3 text-dark bg-ligth border border-dark mb-3 ml-1">
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

              <div className="card col-md-3 text-dark bg-ligth border border-dark mb-3 ml-1">
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
              </div>

              <div className="card col-md-3 text-dark bg-ligth border border-dark mb-3 ml-1">
                <div className="card-header">Simulador</div>
                <div className="card-body">
                  <a
                    className="btn btn-primary btn-block "
                    href="/sepelio/servicios/simulador"
                  >
                    Simulador Valor Traslado
                  </a>
                  <p className="card-text mt-2">
                    Este es un acceso rapido al simulador de valores por traslado.
                  </p>

                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AccesosRapidos;
