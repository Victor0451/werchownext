import React, { useState } from "react";
import RenovaSelect from "react-select";
import CapitalSelect from "react-select";
import CuotasSelect from "react-select";
import moment from "moment-timezone";

import { capitalaprest, cuotasprest, renovaprest } from "../../array/array";

const FormAltaPrestamo = ({
  ficha,
  legajo,
  neto,
  anti,
  handleChange,
  handleSubmit,
  handleBlur,
  valcuotaRef,
  errores,
  handleChanges,
  capital,
  cuotas,
  renoverror,
}) => {
  const [cuoprest, guardarCuoprest] = useState(null);
  const [capadev, guardarCapadev] = useState(null);

  const calculoPrestamo = (e) => {
    e.preventDefault();

    let principal = parseInt(capital);
    let interest = 120 / 100 / 12;
    let payments = parseInt(cuotas);
    let x = Math.pow(1 + interest, payments);
    let monthly = ((principal * x * interest) / (x - 1)).toFixed(0);

    guardarCuoprest(monthly);

    let capadev = monthly * payments;

    guardarCapadev(capadev);
  };

  let mesi = moment().add(1, "months").format("MM/YYYY");
  let mesf = moment().add(cuotas, "months").format("MM/YYYY");

  return (
    <div>
      <hr className="mt-4 mb-4" />

      <h2 className="mt-4 mb-4">
        <strong>
          <u>Informacion Del Afiliado</u>
        </strong>
      </h2>

      <form className="" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between mt-4 mb-4 border border-dark p-2">
          <div className="row mb-4">
            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> N° Socio: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.CONTRATO}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> DNI: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.NRO_DOC}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Apellido: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.APELLIDOS}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Nombre: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.NOMBRES}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Calle: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.CALLE}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> N°: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.NRO_CALLE}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Barrio: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.BARRIO}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Localidad: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.LOCALIDAD}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Telefono: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.TELEFONO}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> MOVIL: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                value={ficha.MOVIL}
                readOnly
              />
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <h2 className="mt-4 mb-4">
          <strong>
            <u>Opciones del Prestamo</u>
          </strong>
        </h2>

        <div className="row border border-dark p-2 mb-4">
          <div className="col-md-4">
            <CapitalSelect
              options={capitalaprest}
              placeholder={"Capital a Prestar"}
              onChange={(value) => handleChanges(value, "capital")}
            />
          </div>
          <div className="col-md-4">
            <CuotasSelect
              options={cuotasprest}
              placeholder={"Cuotas del Prestamo"}
              onChange={(value) => handleChanges(value, "cuotas")}
            />
          </div>

          <div className="col-md-4 ">
            <button
              className="btn btn-primary btn-block "
              onClick={calculoPrestamo}
            >
              {" "}
              Calcular Cuota
            </button>
          </div>
        </div>

        {cuoprest !== null ? (
          <div className="mt-4 mb-4">
            <hr className="mt-4 mb-4" />

            <h2 className="mt-4 mb-4">
              <strong>
                <u>Informacion Del Prestamo Solicitado</u>
              </strong>
            </h2>

            <div className="row d-flex mt-4 mb-4 border border-dark">
              <div className="form-group col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> Capital Solicitado: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={capital}
                  readOnly
                />
              </div>

              <div className="form-group col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> N° de Cuotas: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={cuotas}
                  readOnly
                />
              </div>

              <div className="form-group col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> Cuota Mensual: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={cuoprest}
                  ref={valcuotaRef}
                  readOnly
                />
              </div>

              <div className="form-group col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> Capital A Devolver: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={capadev}
                  readOnly
                />
              </div>

              <div className="form-group col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> Legajo: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="legajo"
                  value={legajo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errores.legajo && (
                  <div className="mt-2 form-group  alert alert-danger">
                    {errores.legajo}
                  </div>
                )}
              </div>

              <div className="form-group col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> Sueldo Neto: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="neto"
                  value={neto}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errores.neto && (
                  <div className="mt-2 form-group  alert alert-danger">
                    {errores.neto}
                  </div>
                )}
              </div>

              <div className="form-group col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> Atigüedad: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="anti"
                  value={anti}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errores.anti && (
                  <div className="mt-2 form-group  alert alert-danger">
                    {errores.anti}
                  </div>
                )}
              </div>

              <div className="col-md-3">
                <label>
                  <strong>
                    {" "}
                    <u> Ronovacion: </u>
                  </strong>
                </label>
                <RenovaSelect
                  options={renovaprest}
                  placeholder={"Renovacion"}
                  onChange={(value) => handleChanges(value, "renova")}
                />
                {renoverror !== null ? (
                  <div className="mt-2 form-group  alert alert-danger">
                    {renoverror}
                  </div>
                ) : null}
              </div>

              <div className="form-group col-md-12">
                <button
                  className="btn btn-primary btn-block"
                  //onClick={this.cargarPrestamos}
                >
                  Cargar Prestamo
                </button>
              </div>
            </div>

            <div className="row mt-2 d-flex justify-content-center alert alert-info text-center">
              {" "}
              EL PRESTAMO EMPEZARA A DEBITARSE EN{"   "}
              <strong>
                {" "}
                <u> {mesi} </u>{" "}
              </strong>{" "}
              Y FINALIZARIA EN{" "}
              <strong>
                {" "}
                <u> {mesf} </u>{" "}
              </strong>{" "}
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default FormAltaPrestamo;
