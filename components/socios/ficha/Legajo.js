import React from "react";

const Legajo = ({ ficha, empresa }) => {
  if (!ficha)
    return (
      <div className="container mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
        EL SOCIO NO EXISTE O ESTA DADO DE BAJA
      </div>
    );

  return (
    <div
      className="mt-4 container alert alert-primary border border-dark
    "
    >
      <div className="row d-felx justify-content-between p-2">
        <h2 className="  mb-4 text-center">
          <strong>
            <u>Legajo Virtual</u>
          </strong>
        </h2>
        {empresa === "W" ? (
          <img src="/img/logo.png" className="werchowlogo" />
        ) : empresa === "M" ? (
          <img src="/img/logom.jpg" className="werchowlogo" />
        ) : null}
      </div>

      <hr />
      <div className="row mt-4 d-flex justify-content-center  ">
        <div className="col-md-4">
          <h3>
            <u>N° Ficha</u>: {ficha.CONTRATO}
          </h3>
        </div>

        <div className="col-md-3">
          <h3>
            {" "}
            <u>Grupo</u>:{""} {ficha.GRUPO}
          </h3>
        </div>

        <div className="col-md-3">
          <h3>
            <u>Cuota</u>: {ficha.IMPORTE}
          </h3>
        </div>
      </div>
      <hr className="mt-4 mb-4" />
      <div className="row">
        <div className="col-md-12 ">
          <h2 className="display-3">
            {" "}
            {ficha.APELLIDOS}, {ficha.NOMBRES}
          </h2>
        </div>
      </div>

      <hr className="my-4" />
      <h3>
        <u>DATOS DE FICHA</u>
      </h3>
      <div className="row mt-4">
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>ALTA</u>:
            </span>{" "}
            {""}
            {ficha.ALTA}
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>VIGENCIA</u>:
            </span>{" "}
            {""}
            {ficha.VIGENCIA}
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>DOM. LABORAL</u>:
            </span>{" "}
            {""}
            {ficha.DOM_LAB}
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>DOM. COBRANZA</u>:
            </span>{" "}
            {""}
            {ficha.DOMI_COBR}
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>PLAN</u>:
            </span>{" "}
            {""}
            {ficha.PLAN}
          </p>
        </div>
      </div>

      <hr className="my-4" />

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

        <div className="col-md-3 ">
          <p>
            <span className="font-weight-bold">
              <u>OBRA SOC.</u>:
            </span>{" "}
            {""}
            {ficha.OBRA_SOC}
          </p>
        </div>
        <div className="col-md-3 ">
          <p>
            <span className="font-weight-bold">
              <u>NACIMIENTO</u>:
            </span>{" "}
            {""}
            {ficha.NACIMIENTO}
          </p>
        </div>

        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>CALLE</u>:
            </span>{" "}
            {""}
            {ficha.CALLE}
          </p>
        </div>

        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>N° DE CALLE</u>:
            </span>{" "}
            {""}
            {ficha.NRO_CALLE}
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>BARRIO</u>:
            </span>{" "}
            {""}
            {ficha.BARRIO}
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>TELEFONO</u>:
            </span>{" "}
            {""}
            {ficha.TELEFONO}
          </p>
        </div>
        <div className="col-md-3">
          <p>
            <span className="font-weight-bold">
              <u>MOVIL</u>:
            </span>{" "}
            {""}
            {ficha.MOVIL}
          </p>
        </div>
        <div className="col-md-3">
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
  );
};

export default Legajo;
