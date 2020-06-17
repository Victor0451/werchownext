import React from "react";

const Legajo = ({ ficha }) => {
  return (
    <div
      className="container alert alert-primary border border-dark
    "
    >
      <div className="row mt-4 d-flex justify-content-center  ">
        <div className="col-md-3">
          <h3>Contrato: {ficha.CONTRATO}</h3>
        </div>

        <div className="col-md-3">
          <h3>
            {" "}
            GRUPO:{""} {ficha.GRUPO}
          </h3>
        </div>

        <div className="col-md-3">
          <h3>Sucursal: {ficha.SUCURSAL}</h3>
        </div>

        <div className="col-md-3">{/* <h3>Cuota: {cuota.IMPORTE}</h3> */}</div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2 className="display-3">
            {" "}
            {ficha.APELLIDOS} {ficha.NOMBRES}{" "}
          </h2>
        </div>
      </div>

      <hr className="my-4" />
      <h3>DATOS DE FICHA</h3>
      <div className="row mt-4">
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">ZONA:</span> {""}
            {ficha.ZONA}
          </p>
        </div>

        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">ALTA:</span> {""}
            {ficha.ALTA}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">VIGENCIA:</span> {""}
            {ficha.VIGENCIA}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">DOM. LABORAL:</span> {""}
            {ficha.DOM_LAB}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">DOM. COBRANZA:</span> {""}
            {ficha.DOMI_COBR}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">PLAN:</span> {""}
            {ficha.PLAN}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">SUB PLAN:</span> {""}
            {ficha.SUB_PLAN}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">FECHA DEL PLAN:</span> {""}
            {ficha.FEC_PLAN}
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <h3>DATOS PERSONALES</h3>

      <div className="row mt-4">
        <div className="col-md-2">
          <span className="font-weight-bold">DNI:</span> {""}
          {ficha.NRO_DOC}
        </div>

        <div className="col-md-2 ">
          <p>
            <span className="font-weight-bold">OBRA SOC.:</span> {""}
            {ficha.OBRA_SOC}
          </p>
        </div>
        <div className="col-md-2 ">
          <p>
            <span className="font-weight-bold">NACIMIENTO:</span> {""}
            {ficha.NACIMIENTO}
          </p>
        </div>
        <div className="col-md-2 ">
          <p>
            <span className="font-weight-bold">SEXO:</span> {""}
            {ficha.SEXO}
          </p>
        </div>

        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">CALLE:</span> {""}
            {ficha.CALLE}
          </p>
        </div>

        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">N° DE CALLE:</span> {""}
            {ficha.NRO_CALLE}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">BARRIO:</span> {""}
            {ficha.BARRIO}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">TELEFONO:</span> {""}
            {ficha.TELEFONO}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">MOVIL:</span> {""}
            {ficha.MOVIL}
          </p>
        </div>
        <div className="col-md-2">
          <p>
            <span className="font-weight-bold">MAIL:</span> {""}
            {ficha.MAIL}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legajo;
