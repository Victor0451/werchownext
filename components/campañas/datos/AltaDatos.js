import React from "react";
import moment from "moment";
import Spinner from "../../layout/Spinner";
const AltaDatos = ({
  user,
  errores,
  apellido,
  nombre,
  edad,
  telefono,
  celular,
  cobertura,
  grupofamiliar,
  observacion,
  domicilio,
  operadorRef,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  if (!user) return <Spinner />;

  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <h2>
        <strong>
          <u>Carga de datos recolectados en campo</u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-2 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                name="fecha"
                defaultValue={moment().format("DD/MM/YYYY")}
                readOnly
              />
            </div>

            <div className="col-md-2 mt-4 mb-4">
              <label>
                <strong>
                  <u>Operdador</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                name="operador"
                defaultValue={user}
                ref={operadorRef}
                readOnly
              />
            </div>

            <div className="col-md-8 mt-4 mb-4">
              <label>
                <strong>
                  <u>Apellido</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                name="apellido"
                value={apellido}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errores.apellido && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.apellido}
                </div>
              )}
            </div>

            <div className="col-md-6 mt-4 mb-4">
              <label>
                <strong>
                  <u>Nombre</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={nombre}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errores.nombre && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.nombre}
                </div>
              )}
            </div>

            <div className="col-md-2 mt-4 mb-4">
              <label>
                <strong>
                  <u>Edad</u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                name="edad"
                value={edad}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Telefono</u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                name="telefono"
                value={telefono}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Celular</u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                name="celular"
                value={celular}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-8 mt-4 mb-4">
              <label>
                <strong>
                  <u>Cobertura</u>
                </strong>
              </label>
              <textarea
                rows="3"
                className="form-control"
                name="cobertura"
                value={cobertura}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12 mt-4 mb-4">
              <label>
                <strong>
                  <u>Domicilio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                name="domicilio"
                value={domicilio}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12 mt-4 mb-4">
              <label>
                <strong>
                  <u>Grupo Familiar</u>
                </strong>
              </label>
              <textarea
                rows="3"
                className="form-control"
                name="grupofamiliar"
                value={grupofamiliar}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12 mt-4 mb-4">
              <label>
                <strong>
                  <u>Observacion</u>
                </strong>
              </label>
              <textarea
                rows="3"
                className="form-control"
                name="observacion"
                value={observacion}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <button className="btn btn-primary btn-block">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AltaDatos;
