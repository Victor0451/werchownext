import React from "react";

const NotaRehabilitacion = ({ ficha, fecha }) => {
  return (
    <div className=" p-1">
      <div className="border border-dark p-4">
        <div className="row   mb-4 p-2">
          <div className="col-md-6 d-flex justify-content-start mt-4">
            <img
              className="werchowlogo"
              src="/img/logo.png"
              alt="werchowlogo"
            />
          </div>

          <div className="col-md-6 d-flex justify-content-end mt-4">
            San Salvador de Jujuy, <u>{fecha}</u>
          </div>

          <div className="row  mt-4">
            <div className="col-md-12 mt-2">
              <strong>
                <u>Sr/A. Afiliado</u>: {""}
              </strong>
              {ficha.APELLIDOS}, {ficha.NOMBRES}
            </div>

            <div className="col-md-12 mt-2 ">
              <strong>
                <u>Legajo</u>:
              </strong>{" "}
              {ficha.CONTRATO}
            </div>
          </div>

          <div className="row d-flex justify-content-center col-md-12 mt-4 mb-4">
            <h3 className="text-center mt-4">
              <u>REHABILITACION DE SERVICIOS</u>
            </h3>
          </div>

          <p className="text-justify mt-2 p-2">
            <font size="4">
              Por la presente solicito la reafiliación a la Empresa Werchow
              Servicios Sociales S.R.L., a los efectos de poder efectivizar el
              pago de las cuotas de la cual me encuentro en mora por cuanto su
              pago debía realizarse hasta el día 15 de cada mes. Asimismo acepto
              que de conformidad a las condiciones de la contratación, afrontaré
              un periodo de carencia de 15 días por cada mes de atraso, a contar
              desde el pago de la cuota en mora, en lo que se refiere al
              servicio de sepelio no así en lo que se refiere a otros servicios
              que me brinda la empresa.-
            </font>
          </p>

          <div className="d-flex justify-content-center mt-4">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4 mt-4">
                <strong>...........................................</strong>
                <label>Firma</label>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-md-4 mt-4">
                <strong>...........................................</strong>
                <label>Aclaracion</label>
              </div>
            </div>

            <div className="row d-flex justify-content-center">
              <div className="col-md-4 mt-4">
                <strong>...........................................</strong>
                <label>DNI</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotaRehabilitacion;
