import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import ListadoCampana from "./ListadoCampana";

const AsignarCampana = ({
  CasaCentralMG,
  CasaCentralGG,
  perico,
  palpala,
  sanPedro,
  campana,
  empresa,
}) => {
  console.log(CasaCentralMG);
  return (
    <div className="container">
      <div className="mt-4">
        <div className="d-flex justify-content-between">
          <h3>
            Campaña {campana} - {empresa}: Casa Central Magia Galian{" "}
            <span className="badge badge-pill badge-dark text-white"></span>
          </h3>

          {JSON.parse(empresa) === "W" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Werchow
            </button>
          ) : JSON.parse(empresa) === "M" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Mutual
            </button>
          ) : null}
        </div>
        <ListadoCampana listado={CasaCentralMG} />
      </div>

      <hr />

      <div className="mt-4">
        <div className="d-flex justify-content-between">
          <h3>
            Campaña {campana} - {empresa}: Casa Central Gisela Gimenez{" "}
            <span className="badge badge-pill badge-dark text-white"></span>
          </h3>

          {JSON.parse(empresa) === "W" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Werchow
            </button>
          ) : JSON.parse(empresa) === "M" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Mutual
            </button>
          ) : null}
        </div>
        <ListadoCampana listado={CasaCentralGG} />
      </div>

      <hr />

      <div className="mt-4">
        <div className="d-flex justify-content-between">
          <h3>
            Campaña {campana} - {empresa}: Perico - Vanesa Gorosito{" "}
            <span className="badge badge-pill badge-dark text-white"></span>
          </h3>

          {JSON.parse(empresa) === "W" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Werchow
            </button>
          ) : JSON.parse(empresa) === "M" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Mutual
            </button>
          ) : null}
        </div>
        <ListadoCampana listado={perico} />
      </div>

      <hr />

      <div className="mt-4">
        <div className="d-flex justify-content-between">
          <h3>
            Campaña {campana} - {empresa}: Palpala - Marisa Carrizo{" "}
            <span className="badge badge-pill badge-dark text-white"></span>
          </h3>

          {JSON.parse(empresa) === "W" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Werchow
            </button>
          ) : JSON.parse(empresa) === "M" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Mutual
            </button>
          ) : null}
        </div>
        <ListadoCampana listado={palpala} />
      </div>

      <hr />

      <div className="mt-4">
        <div className="d-flex justify-content-between">
          <h3>
            Campaña {campana} - {empresa}: San Pedro - Silvia Juarez{" "}
            <span className="badge badge-pill badge-dark text-white"></span>
          </h3>

          {JSON.parse(empresa) === "W" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Werchow
            </button>
          ) : JSON.parse(empresa) === "M" ? (
            <button
              className="btn btn-primary"
              // onClick={() => crearCampana(AtCasaCentralMG, 11)}
            >
              Crear Campaña Mutual
            </button>
          ) : null}
        </div>
        <ListadoCampana listado={sanPedro} />
      </div>
    </div>
  );
};

export default AsignarCampana;
