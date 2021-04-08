import React from "react";
import moment from "moment-timezone";

const PlanificacionGuardias = ({
  registroPlanificacion,
  lugarRef,
  hsInicioRef,
  hsFinRef,
  operadorRef,
  error,
  operadorsep,
  siRef,
  noRef
}) => {
  let mes = moment().locale("es-es").format("MMMM");
  return (
    <div className="container border border-dark alert alert-primary p-4 mt-4">
      <h2 className="mb-4">
        <strong>
          <u>Planificacion de Guardias de Sepelio</u>
        </strong>
      </h2>

      <form className="border border-dark p-4" onSubmit={registroPlanificacion}>
        <h4 className="mb-4">
          <strong>
            <u>Planificacion de {mes}</u>
          </strong>
        </h4>

        <div className="row">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Lugar: </u>
              </strong>
            </label>
            <select className="custom-select" ref={lugarRef}>
              <option selected value="no">
                Elige una Opcion
              </option>
              <option value="cc">Casa Central</option>
              <option value="sv">Sala Velatoria</option>
            </select>
            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.lugar}
              </div>
            )}
          </div>


          <div className="form-group col-md-3">
            <label>
              <strong>
                {" "}
                <u> Incio: </u>
              </strong>
            </label>

            <input type="datetime-local" className="form-control" ref={hsInicioRef} name="start" />

            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.hs_inicio}
              </div>
            )}
          </div>



          <div className="form-group col-md-3">
            <label>
              <strong>
                {" "}
                <u> Fin: </u>
              </strong>
            </label>
            <input type="datetime-local" className="form-control" ref={hsFinRef} name="end" />
            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.hs_fin}
              </div>
            )}
          </div>

          <div className="col-md-2 mb-4">
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

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Operador: </u>
              </strong>
            </label>
            <select
              className="custom-select"
              name="operador"
              ref={operadorRef}
            >
              <option selected value="no"> Elige una Opcion </option>
              {operadorsep
                ? operadorsep.map((operador, index) => (
                  <option key={index} value={operador.value}>
                    {operador.label}
                  </option>
                ))
                : null}
            </select>

            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.operador}
              </div>
            )}
          </div>

          <div className="form-group col-md-4 mt-4">
            <button type="submit" className="btn btn-primary btn-block">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlanificacionGuardias;
