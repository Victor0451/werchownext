import React, { useEffect, useState } from "react";
import Link from "next/link";
import jsCookies from "js-cookie";
import Router from "next/router";

const GestionCampanas = () => {
  let usuario = jsCookies.get("usuario");

  const [operadorNom, guardarOperador] = useState(null);

  useEffect(() => {
    if (usuario) {
      let userData = JSON.parse(usuario);

      let operadorNom = userData.usuario;

      guardarOperador(operadorNom);
    }
  });

  return (

    <div className="container list p-4 mt-4 mb-4 border border-dark">
      <nav>
        <div className="nav nav-tabs " id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active border border-dark"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            WERCHOW
          </a>
          <a
            className="nav-item nav-link border border-dark"
            id="nav-profile-tab"
            data-toggle="tab"
            href="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            MUTUAL
          </a>
          {/* <a
              className="nav-item nav-link border border-dark"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              ESTADISTICA
            </a> */}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="list p-4 border border-dark">
            <h3 className="mt-2 mb-4 text-center">
              <u>GESTION DE CAMPAÑAS WERCHOW</u>
            </h3>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">ATRASADOS 1 CUOTA</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",

                        query: {
                          camp: "Atrasados",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">ATRASADOS 2 CUOTAS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Atrasados2",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">RECUPERACIONES</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Recuperacion",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      {/* <div className="alert alert-info text-center text-uppercase">
                        CAMPAÑA INHABILITADA
                      </div> */}

                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">RECUPERACION GENERAL</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Recuperaciongral",
                          empresa: "werchow",
                          operador: "todos",
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <div className="alert alert-info text-center text-uppercase">
                        CAMPAÑA INHABILITADA
                      </div>
                      {/* <a className="btn btn-primary">Abrir Campaña</a> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">REINCIDENTES</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Reincidente",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      {/* <div className="alert alert-info text-center text-uppercase">
                        CAMPAÑA INHABILITADA
                      </div> */}
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">REINCIDENTES GENERAL</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Reincidentegral",
                          empresa: "werchow",
                          operador: "todos",
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <div className="alert alert-info text-center text-uppercase">
                        CAMPAÑA INHABILITADA
                      </div>
                      {/* <a className="btn btn-primary">Abrir Campaña</a> */}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">BLANQUEOS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Blanqueo",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">POLICIAS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Policia",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">CAMPAÑA AUXILIAR</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Campaña para gestionar casos especiales.
                    </h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Recordatorio",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">CAMPAÑA AUXILIAR 2</div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Campaña para gestionar casos especiales.
                    </h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Recordatorio2",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div className="list p-4 border border-dark">
            <h2 className="mt-4 mb-4 text-center">
              <u>GESTION DE CAMPAÑAS MUTUAL</u>
            </h2>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">ATRASADOS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Atrasados",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">RECUPERACIONES</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Recuperacion",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">REINCIDENTES</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Reincidente",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">BLANQUEOS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "/campanas/gestioncaso/[campana]",
                        query: {
                          camp: "Blanqueo",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
                      as="/campanas/gestioncaso/campana"
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            EN PROCESO
          </div> */}
      </div>
    </div>

  );
};

export default GestionCampanas;
