import React from "react";
import ListadoCaso from "./ListadoCasos";

const GestionCaso = ({
  campanaOp,
  campanaOpTrab,
  campanaOpNoti,
  operador,
  camp,
}) => {
  let modaltrab = "lgtrab";
  let modalnuevo = "lgnuevo";
  let modalnoti = "lgnoti";
  console.log(campanaOpTrab);
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">
        <u>
          {" "}
          Gestion Casos de {camp} - Casos asignados:{" "}
          {campanaOp.length + campanaOpTrab.length + campanaOpNoti.length}
        </u>
      </h1>

      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Listado de Casos
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
            Casos Trabajados
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
            Casos Notificados
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
          {campanaOp.length === 0 ? (
            <div className="alert alert-primary mt-4">
              No Tienes Casos Asignados
            </div>
          ) : (
            <ListadoCaso
              campana={campanaOp}
              operador={operador}
              modal={modalnuevo}
            />
          )}
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          {campanaOpTrab.length === 0 ? (
            <div className="alert alert-primary mt-4">
              No Tienes Casos Trabajados
            </div>
          ) : (
            <ListadoCaso
              campana={campanaOpTrab}
              operador={operador}
              modal={modaltrab}
            />
          )}
        </div>

        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          {campanaOpNoti.length === 0 ? (
            <div className="alert alert-primary mt-4">
              No Tienes Casos Notificados
            </div>
          ) : (
            <ListadoCaso
              campana={campanaOpNoti}
              operador={operador}
              modal={modalnoti}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionCaso;
