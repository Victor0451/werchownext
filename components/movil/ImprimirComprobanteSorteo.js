import React from "react";

const ImprimirCodigoNoSocio = ({ registro }) => {
  return (
    <div className="container border border-dark list p-4 mt-4 mb-4 col-md-6">
      <div className="border border-dark p-4 mt-4 " id="orden">
        <div className="col-md-12 d-flex justify-content-center">
          <img src="/img/logo.png" className="werchowlogo" />
        </div>

        <h4 className="mt-4">
          <strong>
            <u>Solicitud Generada</u>
          </strong>
        </h4>

        <div className="border border-dark mt-4 p-4 list">
          <div className="row ">
            <div className="col-md-4 mt-4">
              <label>
                <strong>
                  <u>Solicitante:</u>
                </strong>
              </label>
              {""} {registro.solicitante}
            </div>

            <div className="col-md-4 mt-4">
              <label>
                <strong>
                  <u>DNI:</u>
                </strong>
              </label>{" "}
              {registro.dni}
            </div>

            <div className="col-md-4 mt-4">
              <label>
                <strong>
                  <u>Telefono:</u>
                </strong>
              </label>{" "}
              {registro.telefono}
            </div>

            <div className="col-md-4 mt-4">
              <label>
                <strong>
                  <u>mail:</u>
                </strong>
              </label>{" "}
              {registro.mail}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-4 ">
        <div className="alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase">
          Tu solicitud fue registrada, ahora estas participando por el sorteo.
          Exitos!
        </div>
      </div>
    </div>
  );
};

export default ImprimirCodigoNoSocio;
