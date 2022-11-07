import React, { useEffect, useState } from "react";
import Link from "next/link";
import jsCookies from "js-cookie";
import Router from "next/router";
import Campana from "./Campana";

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
      <div className="mt-4 tab-content" id="nav-tabContent">

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

              <Campana
                titulo="ATRASADOS 1 CUOTA"
                camp="Atrasados"
                empresa="werchow"
                operador={operadorNom}
              />

              <Campana
                titulo="ATRASADOS 2 CUOTAS"
                camp="Atrasados2"
                empresa="werchow"
                operador={operadorNom}
              />

              <Campana
                titulo="RECUPERACIONES"
                camp="Recuperacion"
                empresa="werchow"
                operador={operadorNom}
              />

              <Campana
                titulo="REINCIDENTES"
                camp="Reincidente"
                empresa="werchow"
                operador={operadorNom}
              />

              <Campana
                titulo="BLANQUEOS"
                camp="Blanqueo"
                empresa="werchow"
                operador={operadorNom}
              />

              <Campana
                titulo="POLICIAS"
                camp="Policia"
                empresa="werchow"
                operador={operadorNom}
              />

              <Campana
                titulo="CAMPAÑA AUXILIAR"
                camp="Recordatorio"
                empresa="werchow"
                operador={operadorNom}
              />

              <Campana
                titulo="CAMPAÑA AUXILIAR 2"
                camp="Recordatorio2"
                empresa="werchow"
                operador={operadorNom}
              />

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
              <Campana
                titulo="ATRASADOS 1 CUOTA"
                camp="Atrasados"
                empresa="mutual"
                operador={operadorNom}
              />

              <Campana
                titulo="ATRASADOS 2 CUOTAS"
                camp="Atrasados2"
                empresa="mutual"
                operador={operadorNom}
              />

              <Campana
                titulo="RECUPERACIONES"
                camp="Recuperacion"
                empresa="mutual"
                operador={operadorNom}
              />

              <Campana
                titulo="REINCIDENTES"
                camp="Reincidente"
                empresa="mutual"
                operador={operadorNom}
              />


              <Campana
                titulo="BLANQUEOS"
                camp="Blanqueo"
                empresa="mutual"
                operador={operadorNom}
              />
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
