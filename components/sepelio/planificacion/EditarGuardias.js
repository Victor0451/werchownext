import React from "react";
import moment from "moment-timezone";
import Spinner from "../../layout/Spinner";

const EditarGuardias = ({
  planiID,
  lugarERef,
  hsInicioERef,
  hsFinERef,
  operadorERef,
  error,
  operadorsep,
  siERef,
  noERef
}) => {

  if (!planiID) return <Spinner />

  return (
    <div className="container border border-dark list p-4 mt-4">
      <form className="border border-dark p-4" >
        <h4 className="mb-4">
          <strong>
            <u>Editar Planificacion</u>
          </strong>
        </h4>

        <div className="row">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Lugar</u>: {planiID.lugar === 'sv' ? (<>Sala Velatoria</>) : (<>Casa Central</>)}
              </strong>
            </label>
            <select className="custom-select" ref={lugarERef}>
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
                <u> Incio</u>: {moment(planiID.inicio).format('DD/MM/YYYY HH:mm:ss')}
              </strong>
            </label>

            <input type="datetime-local" className="form-control" ref={hsInicioERef} name="start" />

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
                <u> Fin</u>: {moment(planiID.fin).format('DD/MM/YYYY HH:mm:ss')}
              </strong>
            </label>
            <input type="datetime-local" className="form-control" ref={hsFinERef} name="end" />
            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.hs_fin}
              </div>
            )}
          </div>

          <div className="col-md-2 mb-4">
            <label>
              <strong>
                <u>Feriado:</u> {planiID.feriado === 1 ? (<>Si</>) : (<>No</>)}
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

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Operador</u>: {planiID.operador}
              </strong>
            </label>
            <select
              className="custom-select"
              name="operador"
              ref={operadorERef}
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

        </div>
      </form>
    </div>
  );
};

export default EditarGuardias;
