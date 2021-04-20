import React from "react";
import Spinner from "../../layout/Spinner";

const FormTareasAdicionales = ({

  observacionesTRef,
  hsInicioTRef,
  hsFinTRef,
  siTRef,
  noTRef,
  idturno,
  tareaRef,
  operadorsep,
  gastliq,
  opRef
}) => {


  return (
    <div className="container mt-4">
      <div className="alert alert-primary border border-dark  p-4">
        <div className="mt-4 border border-dark p-4">
          <h4 className="mb-4">
            <strong>
              <u>Cargar Tarea Adicional</u>
            </strong>
          </h4>

          <div className="row border border-dark">


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
                ref={opRef}
              >
                <option selected value="no"> Elige una Opcion </option>

                {operadorsep
                  ? operadorsep.map((o, index) => (
                    <option key={index} value={o.value}>
                      {o.label}
                    </option>
                  ))
                  : null}

              </select>
            </div>

            <div className="form-group mt-4 col-md-4">
              <label>Inicio</label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsinicio"
                ref={hsInicioTRef}

              />

            </div>

            <div className="form-group mt-4 col-md-4">
              <label>Fin</label>
              <input
                type="datetime-local"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsfin"
                ref={hsFinTRef}

              />

            </div>


            <div className="mt-4 col-md-2 mb-4">
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
                  ref={siTRef}
                />
                <label className="form-check-label" htmlFor="si">
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
                  ref={noTRef}
                />
                <label className="form-check-label" htmlFor="no">
                  No
                            </label>
              </div>
            </div>


            <div className="form-group mt-4 col-md-3">
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
                ref={tareaRef}

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






            <div className="form-group mt-4 col-md-12">
              <label>Observaciones</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="observaciones"
                ref={observacionesTRef}

              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTareasAdicionales;
