import React, { useState } from "react";
import ReactToPrint from "react-to-print";

const Notificacion = ({ caso, userData }) => {
  let componentRef = React.createRef();

  if (!userData) return <div>cargando..</div>;

  const op = (op) => {
    if (userData === "mgalian") {
      return "Galian Maria - 388-4301465";
    } else if (userData === "ladorno") {
      return "Adorno Lucia - 388-4176871";
    } else if (userData === "vgorosito") {
      return "Gorosito Vanesa - 388-4300910";
    } else if (userData === "mcarriso") {
      return "Carriso Marisa - 388-4174570";
    } else if (userData === "sjuarez") {
      return "Juarez Silvia - 3888-569842";
    }
  };


  return (
    <div>
      <div
        className="container  p-4 "
        id="solicitud"
        ref={(el) => (componentRef = el)}
      >
        <div className="row border border-dark mt-4 mb-4 p-2">
          <div className="col-md-6 d-flex justify-content-start mt-4">
            <img
              className="werchowlogo"
              src="/img/logo.png"
              alt="werchowlogo"
            />
          </div>

          <div className="col-md-6 d-flex justify-content-end mt-4">
            San Salvador de Jujuy, ______________________{" "}
          </div>

          <div className="row col-md-12 mt-4">
            <div className="col-md-6 mt-2">
              <strong>
                <u>Sr/A. Afiliado: {""}</u>
              </strong>
              {caso.apellido}, {caso.nombre}
            </div>

            <div className="col-md-6 mt-2 d-flex justify-content-end">
              <strong>
                <u>Legajo: </u>
              </strong>{" "}
              {caso.contrato}
            </div>

            <div className="col-md-12 mt-2 d-flex justify-content-start">
              <strong>
                <u>Domicilio: {""}</u>
              </strong>
              {caso.calle} N° {caso.nro_calle} - B° {caso.barrio} -{" "}
              {caso.localidad}
            </div>

            <div className="col-md-12 mt-2 d-flex justify-content-start ">
              <strong>
                <u>Telefono - Celular: {""}</u>
              </strong>
              {caso.telefono} - {caso.movil}
            </div>
            <p className="text-justify mt-2 p-2">
              Por medio de la presente se le informa que se encuentra con el
              servicio de sepelio atrasado. Por este motivo lo invitamos a
              concurrir a nuestras oficinas, ubicadas en la calle Lavalle 123,
              para regularizar su situación. Si al momento de recibir esta nota
              ud ya abono las cuotas pendientes, rogamos que nos disculpe. Sin
              otro particular y a la espera de solucionar este inconveniente,
              nos despedimos atentamente.
            </p>
            <p className="text-justify mt-2 p-2">
              Nuestros horarios de atencion son: Lunes a Viernes de 9hs a
              12:30hs y de 16:30hs a 20:30hs. Sabados de 9hs a 12:30hs
            </p>

            <div className="col-md-12 mt-2">
              <strong>Departamento de Cobranza</strong>
            </div>
            <div className="col-md-12 mt-2">
              <strong>
                <u>Tel.</u>: 388-4225555
              </strong>
            </div>
            <div className="col-md-12 mt-2 mb-4">
              <strong>
                <u>Operador</u>: {op(userData)}
              </strong>
            </div>
          </div>
        </div>
        ----------------------------------------------------------------------------------------------------------------------------------------------------------
        <div className="row border border-dark mt-4 mb-4 p-2">
          <div className="col-md-6 d-flex justify-content-start mt-4">
            <img
              className="werchowlogo"
              src="/img/logo.png"
              alt="werchowlogo"
            />
          </div>

          <div className="col-md-6 d-flex justify-content-end mt-4">
            San Salvador de Jujuy, ______________________{" "}
          </div>

          <div className="row col-md-12 mt-4">
            <div className="col-md-6 mt-2">
              <strong>
                <u>Sr/A. Afiliado: {""}</u>
              </strong>
              {caso.apellido}, {caso.nombre}
            </div>

            <div className="col-md-6 mt-2 d-flex justify-content-end">
              <strong>
                <u>Legajo: </u>
              </strong>{" "}
              {caso.contrato}
            </div>

            <div className="col-md-12 mt-2 d-flex justify-content-start">
              <strong>
                <u>Domicilio: {""}</u>
              </strong>
              {caso.calle} N° {caso.nro_calle} - B° {caso.barrio} -{" "}
              {caso.localidad}
            </div>

            <div className="col-md-12 mt-2 d-flex justify-content-start ">
              <strong>
                <u>Telefono - Celular: {""}</u>
              </strong>
              {caso.telefono} - {caso.movil}
            </div>
            <p className="text-justify mt-2 p-2">
              Por medio de la presente se le informa que se encuentra con el
              servicio de sepelio atrasado. Por este motivo lo invitamos a
              concurrir a nuestras oficinas, ubicadas en la calle Lavalle 123,
              para regularizar su situación. Si al momento de recibir esta nota
              ud ya abono las cuotas pendientes, rogamos que nos disculpe. Sin
              otro particular y a la espera de solucionar este inconveniente,
              nos despedimos atentamente.
            </p>
            <p className="text-justify mt-2 p-2">
              Nuestros horarios de atencion son: Lunes a Viernes de 9hs a
              12:30hs y de 16:30hs a 20:30hs. Sabados de 9hs a 12:30hs
            </p>

            <div className="col-md-12 mt-2">
              <strong>Departamento de Cobranza</strong>
            </div>
            <div className="col-md-12 mt-2">
              <strong>
                <u>Tel.</u>: 388-4225555
              </strong>
            </div>
            <div className="col-md-12 mt-2 mb-4">
              <strong>
                <u>Operador</u>: {op(userData)}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron">
        <div className="mt-4 p-4 border">
          <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
          <div className="row d-flex justify-content-center">
            <ReactToPrint
              trigger={() => (
                <a href="#" className="btn btn-primary">
                  imprimir{" "}
                </a>
              )}
              content={() => componentRef}
            />

            <a
              href="#"
              className="btn btn-secondary ml-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              Cerrar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notificacion;
