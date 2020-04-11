import React from "react";
import Gestiones from "./Gestiones";
import Campcaso from "./Campcaso";

const BuscarSocio = ({
  socio,
  errores,
  handleChange,
  handleSubmit,
  handleBlur,
  error,
  socioRes,
  socioGest,
}) => {
  return (
    <div className="container">
      <div className="mt-4 p-3 border border-dark jumbotron">
        <h2 className="mt-2">
          <u>Buscar Socio</u>
        </h2>
        <form className=" mt-4 border p-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6">
              <label>Buscar Socio</label>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar Socio"
                onChange={handleChange}
                onBlur={handleBlur}
                value={socio}
                name="socio"
              />
              {errores.socio && (
                <div className="mt-2 form-group  alert alert-danger">
                  {errores.socio}
                </div>
              )}
            </div>

            <div className="col-md-6">
              <button type="submit" className="btn btn-primary  btn-block mt-4">
                Buscar
              </button>
              {error && (
                <div className="mt-2 form-group text-center alert alert-danger">
                  {error}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      {socioRes ? (
        <div
          className="text-center mt-4 jumbotron border border-dark"
          id="alert"
        >
          <hr />
          <Campcaso socioRes={socioRes} />

          {socioGest ? (
            <div>
              <hr />
              <h3>Ultimas Gestiones</h3>

              <Gestiones socioGest={socioGest} />
              <hr />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
export default BuscarSocio;
