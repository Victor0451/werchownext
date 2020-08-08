import React from "react";
import moment from "moment-timezone";

const PlanificacionGuardias = ({
  registroPlanificacion,
  lugarRef,
  fechaRef,
  hsInicioRef,
  hsFinRef,
  operadorRef,
  error,
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

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> fecha: </u>
              </strong>
            </label>
            <input type="date" className="form-control" ref={fechaRef} />
            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.fecha}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Hora Incio: </u>
              </strong>
            </label>
            <input
              type="time"
              className="form-control"
              ref={hsInicioRef}
              name="start"
            />
            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.hs_inicio}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Hora Fin: </u>
              </strong>
            </label>
            <input
              type="time"
              className="form-control"
              ref={hsFinRef}
              name="end"
            />
            {error && (
              <div className="mt-2 form-group  alert alert-danger">
                {error.hs_fin}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Operador: </u>
              </strong>
            </label>
            <select className="custom-select" ref={operadorRef}>
              <option selected>Elige una Opcion</option>
              <option value="pbandur">Pablo Bandur</option>
              <option value="juro">Jorge Uro</option>
              <option value="muro">Marcelo Uro</option>
              <option value="mquiroz">Marcelo Quiroz</option>
              <option value="jzamorano">Jose Zamorano</option>
              <option value="cvalda">Carlos Valda</option>
              <option value="agareca">Abel Gareca</option>
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
