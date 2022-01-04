import React from "react";
import Spinner from "../../../layout/Spinner";
import moment from 'moment'

const FormEditarGastosServ = ({
  row,
  operadorsep,
  gastliq,
  siERef,
  noERef,
  inicioRef,
  finRef,
  gastoRef,
  operadorRef,
  observacionesRef

}) => {
  if (!row) return <Spinner />;


  return (
    <div className="container list mt-4">
      <div className=" border border-dark  p-4">
        <h2 className="mb-4">
          <strong>
            <u>Gastos del Servicio N° {row.idservicio}</u>:{" "}
            {row.apellido}, {row.nombre}
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
              <label><u>Inicio</u>: {moment(row.inicio).format('DD/MM/YYYY HH:mm:ss')}</label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsinicio"
                ref={inicioRef}

              />

            </div>

            <div className="form-group mt-4 col-md-4">
              <label><u>Fin</u>: {moment(row.fin).format('DD/MM/YYYY HH:mm:ss')}</label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsfin"
                ref={finRef}

              />

            </div>

            <div className="mt-4 col-md-1 ">
              <label><u>Feriado</u>: {row.feriado === 1 ? (<>Si</>) : (<>No</>)}</label>
              <br />
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  id="covid"
                  name="motivo"
                  value="option1"
                  ref={siERef}
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
                  ref={noERef}
                />
                <label className="form-check-label" for="no">
                  No
                            </label>
              </div>
            </div>

            <div className="mt-4 form-group col-md-3">
              <label><u>Gasto</u>: {row.tipo_gasto}</label>
              <select
                className="custom-select"
                id="tipogasto"
                name="tipogasto"
                ref={gastoRef}

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

            </div>

            <div className="mt-4 form-group col-md-4">
              <label><u>Operador</u>: {row.operador}</label>
              <select
                className="custom-select"
                name="operador"
                ref={operadorRef}
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

            </div>

            <div className="form-group mt-4 col-md-12">
              <label><u>Observacion</u>: {row.observaciones}</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="observaciones"
                ref={observacionesRef}

              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditarGastosServ;
