import React from "react";
import Spinner from "../../../layout/Spinner";

const FormGastosServ = ({
  servicio,
  observaciones,
  hsinicio,
  hsfin,
  tipogasto,
  siRef,
  noRef,
  operador,
  errores,
  handleChange,
  handleSubmit,
  handleBlur,
  importeRef,
  operadorsep,
  gastliq,
}) => {
  if (!servicio) return <Spinner />;

  return (
    <div className="container mt-4">
      <div className="alert alert-primary border border-dark  p-4">
        <h2 className="mb-4">
          <strong>
            <u>Gastos del Servicio N° {servicio.idservicio}</u>:{" "}
            {servicio.apellido}, {servicio.nombre}
          </strong>
        </h2>

        <div className="mt-4 border border-dark p-4">
          <h4 className="mb-4">
            <strong>
              <u>Cargar Gasto</u>
            </strong>
          </h4>

          <div className="row border border-dark">



            <div className="form-group mt-4 col-md-4">
              <label>Inicio</label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsinicio"
                defaultValue={hsinicio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.hsinicio && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.hsinicio}
                </div>
              )}
            </div>

            <div className="form-group mt-4 col-md-4">
              <label>Fin</label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsfin"
                defaultValue={hsfin}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.hsfin && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.hsfin}
                </div>
              )}
            </div>

            <div className="mt-4 col-md-1 ">
              <label>
                <strong>
                  <u>Feriado</u>
                </strong>
              </label>
              <br />
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  id="covid"
                  name="motivo"
                  value="option1"
                  ref={siRef}
                />
                <label className="form-check-label" for="si">
                  Si
                            </label>
              </div>
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  id="covid"
                  name="motivo"
                  value="option1"
                  defaultChecked={true}
                  ref={noRef}
                />
                <label className="form-check-label" for="no">
                  No
                            </label>
              </div>
            </div>

            <div className="mt-4 form-group col-md-3">
              <label>
                <strong>
                  {" "}
                  <u> Tipo de Gasto: </u>
                </strong>
              </label>
              <select
                className="custom-select"
                id="tipogasto"
                name="tipogasto"
                defaultValue={tipogasto}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected value="no">
                  Elige una Opcion
                </option>
                {gastliq
                  ? gastliq.map((gasto, index) => (
                    <option key={index} value={gasto.value}>
                      {gasto.label}
                    </option>
                  ))
                  : null}
              </select>
              {errores.tipogasto && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.tipogasto}
                </div>
              )}
            </div>

            <div className="mt-4 form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Operador: </u>
                </strong>
              </label>
              <select
                className="custom-select"
                name="operador"
                defaultValue={operador}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected value="no">
                  Elige una Opcion
                </option>
                {operadorsep
                  ? operadorsep.map((operador, index) => (
                    <option key={index} value={operador.value}>
                      {operador.label}
                    </option>
                  ))
                  : null}
              </select>
              {errores.operador && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.operador}
                </div>
              )}
            </div>

            <div className="form-group mt-4 col-md-12">
              <label>Observaciones</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="observaciones"
                defaultValue={observaciones}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group mt-4 col-md-12">
              <button
                className="btn btn-block btn-primary"
                onClick={handleSubmit}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormGastosServ;
