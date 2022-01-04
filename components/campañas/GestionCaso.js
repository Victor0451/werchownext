import React from "react";
import ListadoCaso from "./ListadoCasos";
import moment from "moment";

const GestionCaso = ({
  campanaOp,
  campanaOpTrab,
  campanaOpNoti,
  operador,
  camp,
  empresa,
  nuevosCasos,
  casosNotificados,
  casosTrabajados,
  userData,
}) => {
  let modaltrab = "lgtrab";
  let modalnuevo = "lgnuevo";
  let modalnoti = "lgnoti";

  return (
    <div className="mt-4 container border border-dark p-4 list">
      <h2 className="mb-4">
        <u>
          {" "}
          Gestion Casos de {camp} - Casos asignados:{" "}
          {campanaOp.length + campanaOpTrab.length + campanaOpNoti.length}
        </u>
      </h2>

      <nav className="">
        <div className="nav nav-tabs border border-dark p-1" id="nav-tab" role="tablist">
          <a
            className="nav-item nav-link active border border-dark"
            id="nav-home-tab"
            data-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            <u>  Listado de Casos</u>
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
            <u> Casos Trabajados</u>
          </a>
          <a
            className="nav-item nav-link border border-dark"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            <u> Casos Notificados</u>
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
            <>
              <div className="alert alert-info border border-dark text-center text-uppercase mt-4">
                No Tienes Casos Asignados
              </div>
              <div className="d-flex justify-content-end">
                <a className="mt-4 btn btn-danger" href="/campanas/campanas">
                  Volver al listado de campañas
                </a>
              </div>
            </>
          ) : (
            <ListadoCaso
              campana={campanaOp}
              operador={operador}
              modal={modaltrab}
              userData={userData}
              camp={camp}
              empresa={empresa}
              nuevosCasos={nuevosCasos}
              casosNotificados={casosNotificados}
              casosTrabajados={casosTrabajados}
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
            <>
              <div className="alert alert-info border border-dark text-center text-uppercase mt-4">
                No Tienes Casos Trabajados
              </div>
              <div className="d-flex justify-content-end">
                <a className="mt-4 btn btn-danger" href="/campanas/campanas">
                  Volver al listado de campañas
                </a>
              </div>
            </>
          ) : (
            <ListadoCaso
              campana={campanaOpTrab}
              operador={operador}
              modal={modalnoti}
              userData={userData}
              camp={camp}
              empresa={empresa}
              nuevosCasos={nuevosCasos}
              casosNotificados={casosNotificados}
              casosTrabajados={casosTrabajados}

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
            <>
              <div className="alert alert-info border border-dark text-center text-uppercase mt-4">
                No Tienes Casos Notificados
              </div>
              <div className="d-flex justify-content-end">
                <a className="mt-4 btn btn-danger" href="/campanas/campanas">
                  Volver al listado de campañas
                </a>
              </div>
            </>
          ) : (
            <ListadoCaso
              campana={campanaOpNoti}
              operador={operador}
              modal={modalnuevo}
              userData={userData}
              camp={camp}
              empresa={empresa}
              nuevosCasos={nuevosCasos}
              casosNotificados={casosNotificados}
              casosTrabajados={casosTrabajados}

            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GestionCaso;
