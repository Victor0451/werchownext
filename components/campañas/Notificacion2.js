import React, { useState } from "react";
import ReactToPrint from "react-to-print";
import moment from 'moment'

const Notificacion = ({ caso, userData }) => {
  let componentRef = React.createRef();

  if (!userData) return <div>cargando..</div>;

  const op = (op) => {
    if (userData === "mgalian") {
      return "Galian Maria - 388-54301465";
    } else if (userData === "vfidao") {
      return "Fidao Valeria - 388-4176523";
    } else if (userData === "ggimenez") {
      return "Gimenez Gisela - 388-54176871";
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
        className="container border border-dark p-4 "
        id="solicitud"
        ref={(el) => (componentRef = el)}
      >
        <div className="row  p-2">
          <div className="col-md-6 d-flex justify-content-start ">
            <img
              className="werchowlogo"
              src="/img/logo.png"
              alt="werchowlogo"
            />
          </div>

          <div className="col-md-6 d-flex justify-content-end ">
            San Salvador de Jujuy, {moment().format('DD/MM/YYYY')}{" "}
          </div>

          <div className="row col-md-12 m-4">
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
              Por medio de la presente se le informa que se encuentra con los
              servicios de seperlios atrasados. Por este motivo lo invitamos a
              concurrir a nuestras oficinas, ubicadas en la calle Lavalle 123,
              para regularizar su situación. Si al momento de recibir esta nota
              ud ya abono las cuotas pendientes, rogamos que nos disculpe. Sin
              otro particular y a la espera de solucionar este inconveniente,
              nos despedimos atentamente.
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


    </div>
  );
};

export default Notificacion;
