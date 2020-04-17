import React, { useEffect, useState } from "react";
import Link from "next/link";
import jsCookies from "js-cookie";

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
    <div>
      <div className="container mb-4">
        <nav>
          <div className="nav nav-tabs mt-4" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link active"
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
              className="nav-item nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              MUTUAL
            </a>
            <a
              className="nav-item nav-link"
              id="nav-contact-tab"
              data-toggle="tab"
              href="#nav-contact"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              ESTADISTICA
            </a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <h1 className="mt-4 mb-4 text-center">
              <u>GESTION DE CAMPAÑAS WERCHOW</u>
            </h1>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">ATRASADOS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Atrasados",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
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
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Recuperacion",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
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
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Reincidente",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
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
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Blanqueo",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
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
                    <a
                      className="btn btn-primary"
                      href={`/gestioncaso/Policia`}
                    >
                      Abrir Campaña
                    </a>
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
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Recordatorio",
                          empresa: "werchow",
                          operador: operadorNom,
                        },
                      }}
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
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
            <h1 className="mt-4 mb-4 text-center">
              <u>GESTION DE CAMPAÑAS MUTUAL</u>
            </h1>
            <div className="row">
              <div className="col-md-6 mt-4">
                <div className="card bg-light mb-3">
                  <div className="card-header">ATRASADOS</div>
                  <div className="card-body">
                    <h5 className="card-title">Listado de casos:</h5>
                    <Link
                      href={{
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Atrasados",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
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
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Recuperacion",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
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
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Reincidente",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
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
                        pathname: "gestioncaso/[campana]",
                        query: {
                          camp: "Blanqueo",
                          empresa: "mutual",
                          operador: operadorNom,
                        },
                      }}
                    >
                      <a className="btn btn-primary">Abrir Campaña</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            EN PROCESO
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionCampanas;
