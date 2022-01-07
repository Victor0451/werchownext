import React from "react";
import moment from "moment-timezone";

const NotaRehabilitacion = ({ ficha, fecha, vigencia, empresa, cuotas }) => {
  return (
    <div className="container mt-2 p-1">
      <div className=" p-4">
        <div className="row   mb-4 p-2">
          {empresa === "W" ? (
            <div className="col-md-6 d-flex justify-content-start">
              <img
                className="werchowlogo"
                src="/img/logo.png"
                alt="werchowlogo"
              />
            </div>
          ) : empresa === "M" ? (
            <div className="col-md-6 d-flex justify-content-start">
              <img
                className="mutuallogo"
                src="/img/logom.jpg"
                alt="mutuallogo"
              />
            </div>
          ) : null}

          <div className="col-md-6 d-flex justify-content-end mt-4">
            <font size="4">
              San Salvador de Jujuy, <u>{fecha}</u>
            </font>
          </div>

          <div className="row  mt-4">
            <div className="col-md-12 mt-2">
              <font size="4">
                <strong>
                  <u>Sr/A. Afiliado</u>: {""}
                </strong>
                {ficha.APELLIDOS}, {ficha.NOMBRES}
              </font>
            </div>

            <div className="col-md-12 mt-2 ">
              <font size="4">
                <strong>
                  <u>Legajo</u>:
                </strong>{" "}
                {ficha.CONTRATO}
              </font>
            </div>

            <h3 className="col-md-12 mt-2 ">
              <font size="4" className="">
                <strong>
                  <u>Nueva Vigencia De Sepelio</u>:
                </strong>{" "}
                {vigencia ? (
                  <strong>{moment(vigencia).format("DD/MM/YYYY")}</strong>
                ) : null}
              </font>
            </h3>
          </div>

          <div className="row d-flex justify-content-center col-md-12 mt-4 mb-4">
            <h3 className="text-center mt-4">
              <u>Solicitud de afiliacion</u>
            </h3>
          </div>


          <p className="text-justify mt-2 p-2">
            <font size="5">

              Por la presente solicito la afiliación a la Empresa Werchow Medicina Privada S.A, a
              los efectos de poder efectivizar el pago de la cuota de inscripción. Asimismo acepto
              que de conformidad a las condiciones de la contratación, afrontaré un periodo de
              carencia de 15/30/60 días a contar desde el pago de la cuota de afiliación, en lo que se
              refiere al servicio de sepelio, para los servicios médicos la vigencia es de 48 hs .
            </font>
          </p>

          {/* <p className="text-justify mt-2 p-2">
            <font size="5">
              {cuotas === 1 ? (
                <>
                  Por la presente solicito afiliarme a la Empresa Werchow
                  Medicina Privada S.A, a los efectos de poder efectivizar el
                  pago de la cuota de inscripción por cuanto
                  su pago debía realizarse hasta el día 15 de cada mes. Asimismo
                  acepto que de conformidad a las condiciones de la
                  contratación, afrontaré un periodo de carencia de 15 días por
                  cada mes de atraso, a contar desde el pago de la cuota en
                  mora, en lo que se refiere al servicio de sepelio no así en lo
                  que se refiere a otros servicios que me brinda la empresa.
                  Tambien tomo conocimiento que es la ultima solicitud de ingreso que
                  se me otorga-

                  
                </>
              ) : cuotas > 1 ? (
                <>
                  Por la presente solicito afiliarme a la Empresa Werchow
                  Medicina Privada S.A, a los efectos de poder efectivizar el
                  pago de las cuotas de la cual me encuentro en mora por cuanto
                  su pago debía realizarse hasta el día 15 de cada mes. Asimismo
                  acepto que de conformidad a las condiciones de la
                  contratación, afrontaré un periodo de carencia de 30 días por
                  cada mes de atraso, a contar desde el pago de la cuota en
                  mora, en lo que se refiere al servicio de sepelio no así en lo
                  que se refiere a otros servicios que me brinda la empresa.
                  Tambien tomo conocimiento que es la ultima solicitud de ingreso que
                  se me otorga-
                </>
              ) : null}
            </font>
          </p> */}

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
