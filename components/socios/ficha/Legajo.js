import React from "react";
import moment from "moment";

const Legajo = ({ ficha, empresa }) => {
  if (!ficha)
    return (
      <div className="container mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase border border-dark">
        EL SOCIO NO EXISTE O ESTA DADO DE BAJA
      </div>
    );

  return (
    <div className="mt-4 container list border border-dark">
      <div className="row d-felx justify-content-between p-2">
        <h2 className=" mt-3 mb-4 text-center">
          <strong>
            <u>Legajo Virtual</u>
          </strong>
        </h2>
        {empresa === "W" ? (
          <img src="/img/logo.png" className="werchowlogo" />
        ) : empresa === "M" ? (
          <img src="/img/logom.jpg" className="mutuallogo" />
        ) : null}
      </div>
      
      <div className=" mt-2 d-flex border border-dark justify-content-center  p-4 list">
        <div className="col-md-4">
          <h4>
            <u>Socio</u>: {ficha.CONTRATO}
          </h4>
        </div>

        <div className="col-md-4">
          <h4>
            {" "}
            <u>Grupo</u>:{""} {ficha.GRUPO}
          </h4>
        </div>

        <div className="col-md-4">
          <h4>
            <u>Cuota</u>: {ficha.IMPORTE}
          </h4>
        </div>
      </div>
      <hr className="mt-4 mb-4 border border-dark" />

      <div className="">
        <div className="col-md-12 list border border-dark p-4">
          <h2 className="display-4">
            {" "}
            {ficha.APELLIDOS}, {ficha.NOMBRES}
          </h2>
        </div>
      </div>

      <hr className="my-4 border border-dark" />

      <div className="mt-4 border border-dark list p-4">
        <h3>
          <u>DATOS DE FICHA</u>
        </h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <p>
              <span className="font-weight-bold">
                <u>PLAN</u>:
              </span>{" "}
              {""}
              {ficha.PLAN}{ficha.SUB_PLAN}
            </p>
          </div>

          <div className="col-md-4">
            <p>
              <span className="font-weight-bold">
                <u>ALTA</u>:
              </span>{" "}
              {""}
              {moment(ficha.ALTA).format('DD/MM/YYYY')}
            </p>
          </div>
          <div className="col-md-4">
            <p>
              <span className="font-weight-bold">
                <u>VIGENCIA</u>:
              </span>{" "}
              {""}
              {moment(ficha.VIGENCIA).format('DD/MM/YYYY')}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <span className="font-weight-bold">
                <u>DOM. LABORAL</u>:
              </span>{" "}
              {""}
              {ficha.DOM_LAB}
            </p>
          </div>
          <div className="col-md-6">
            <p>
              <span className="font-weight-bold">
                <u>DOM. COBRANZA</u>:
              </span>{" "}
              {""}
              {ficha.DOMI_COBR}
            </p>
          </div>

        </div>
      </div>

      <hr className="my-4 border border-dark" />


      <div className="border border-dark p-4 list">
        <h3>
          <u>DATOS PERSONALES</u>
        </h3>


        <div className="row mt-4">
          <div className="col-md-3">
            <span className="font-weight-bold">
              <u>DNI</u>:
            </span>{" "}
            {""}
            {ficha.NRO_DOC}
          </div>

          <div className="col-md-4 ">
            <p>
              <span className="font-weight-bold">
                <u>OBRA SOC.</u>:
              </span>{" "}
              {""}
              {ficha.OBRA_SOC}
            </p>
          </div>
          <div className="col-md-5 ">
            <p>
              <span className="font-weight-bold">
                <u>NACIMIENTO</u>:
              </span>{" "}
              {""}
              {moment(ficha.NACIMIENTO).format('DD/MM/YYYY')}
            </p>
          </div>

          <div className="col-md-6 mt-2">
            <p>
              <span className="font-weight-bold">
                <u>CALLE</u>:
              </span>{" "}
              {""}
              {ficha.CALLE}
            </p>
          </div>

          <div className="col-md-3 mt-2">
            <p>
              <span className="font-weight-bold">
                <u>N° DE CALLE</u>:
              </span>{" "}
              {""}
              {ficha.NRO_CALLE}
            </p>
          </div>
          <div className="col-md-6 mt-2">
            <p>
              <span className="font-weight-bold">
                <u>BARRIO</u>:
              </span>{" "}
              {""}
              {ficha.BARRIO}
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <p>
              <span className="font-weight-bold">
                <u>TELEFONO</u>:
              </span>{" "}
              {""}
              {ficha.TELEFONO}
            </p>
          </div>
          <div className="col-md-4 mt-2">
            <p>
              <span className="font-weight-bold">
                <u>MOVIL</u>:
              </span>{" "}
              {""}
              {ficha.MOVIL}
            </p>
          </div>
          <div className="col-md-6 mt-2">
            <p>
              <span className="font-weight-bold">
                <u>MAIL</u>:
              </span>{" "}
              {""}
              {ficha.MAIL}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legajo;
