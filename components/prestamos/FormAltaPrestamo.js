import React, { useState } from "react";
import RenovaSelect from "react-select";
import CapitalSelect from "react-select";
import CuotasSelect from "react-select";
import moment from "moment-timezone";

import { capitalaprest, cuotasprest, renovaprest } from "../../array/array";
import FormSubirArchivo from "./legajovirtual/FormSubirArchivo";
import { interest } from "../../utils/variables";

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
  nombreRef,
  apellidoRef,
}) => {
  const [cuoprest, guardarCuoprest] = useState(null);
  const [capadev, guardarCapadev] = useState(null);
  const [flag, guardarFlag] = useState(false);

  const calculoPrestamo = (capital, cuotas) => {
    //e.preventDefault();

    guardarFlag(false);

    let principal = parseInt(capital);

    let payments = parseInt(cuotas);
    let x = Math.pow(1 + interest, payments);
    let monthly = ((principal * x * interest) / (x - 1)).toFixed(0);

    guardarCuoprest(monthly);

    let capadev = monthly * payments;

    guardarCapadev(capadev);

    guardarFlag(true);
  };

  let mesi = moment().add(1, "months").format("MM/YYYY");
  let mesf = moment().add(cuotas, "months").format("MM/YYYY");

  return (
    <div className="alert alert-primary border border-dark p-4">
      <h2 className="mb-4">
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
                defaultValue={ficha.CONTRATO}
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
                defaultValue={ficha.NRO_DOC}
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
                defaultValue={ficha.APELLIDOS}
                ref={apellidoRef}
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
                defaultValue={ficha.NOMBRES}
                ref={nombreRef}
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
                defaultValue={ficha.CALLE}
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
                defaultValue={ficha.NRO_CALLE}
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
                defaultValue={ficha.BARRIO}
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
                defaultValue={ficha.LOCALIDAD}
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
                defaultValue={ficha.TELEFONO}
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
                defaultValue={ficha.MOVIL}
                readOnly
              />
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <h2 className="mt-4 mb-4">
          <strong>
            <u>Opciones del Sub. Cont. Familiar</u>
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
              onClick={() => calculoPrestamo(capital, cuotas)}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              {" "}
              Calcular Cuota
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl p-2">
            <div className="modal-content border border-dark ">
              <div className="modal-header alert alert-primary">
                <h2 className="mt-4 mb-4">
                  <strong>
                    <u>Informacion Del Sub. Cont. Familiar Solicitado</u>
                  </strong>
                </h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body ">
                {flag === true ? (
                  <div className=" mb-4 p-4">
                    <div className="row d-flex alert alert-primary border border-dark p-4">
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
                          readOnly
                          ref={valcuotaRef}
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
                          type="number"
                          className="form-control"
                          name="legajo"
                          defaultValue={legajo}
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
                          type="number"
                          className="form-control"
                          name="neto"
                          defaultValue={neto}
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
                          type="number"
                          className="form-control"
                          name="anti"
                          defaultValue={anti}
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
                          onChange={(defaultValue) =>
                            handleChanges(defaultValue, "renova")
                          }
                        />
                        {renoverror !== null ? (
                          <div className="mt-2 form-group  alert alert-danger">
                            {renoverror}
                          </div>
                        ) : null}
                      </div>

                      <hr />
                      <FormSubirArchivo contrato={ficha.CONTRATO} />
                      <hr />

                      <div className="form-group col-md-12">
                        <button
                          className="btn btn-primary btn-block"
                          //onClick={this.cargarPrestamos}
                        >
                          Cargar Sub. Cont. Familiar
                        </button>
                      </div>
                    </div>

                    <div className="row mt-2 d-flex justify-content-center alert alert-info text-center text-uppercase">
                      {" "}
                      EL Sub. Cont. Familiar EMPEZARA A DEBITARSE EN{"   "}
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
                ) : flag === false ? null : null}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            data-dismiss="modal"
          >
            Cerrar
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default FormAltaPrestamo;
