import React from "react";

const BuscarSocio = ({
  contratoRef,
  dniRef,
  errores,
  nomoro,
  buscarTitular,
  buscarTitularM,
  buscarTitularDni,
  buscarTitularDniM,
}) => {
  return (
    <div className="container">
      <div className="mt-4 border border-dark p-4 alert alert-primary">
        <form>
          <h2 className=" mb-4">
            <strong>
              <u>Buscar Socio</u>
            </strong>
          </h2>

          <div className="border border-dark p-4">
            <h3 className=" mb-4">
              <strong>
                <u>Ingrese N° de Ficha</u>
              </strong>
            </h3>
            <div className="row mb-4">
              <div className="form-group col-md-4">
                <label>
                  <strong>
                    {" "}
                    <u> N° de Ficha: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ficha"
                  name="contrato"
                  ref={contratoRef}
                />
              </div>
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitular}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  WERCHOW
                </button>
              </div>{" "}
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularM}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  MUTUAL
                </button>
              </div>
              {errores && (
                <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                  {errores}
                </div>
              )}
              {nomoro && (
                <div className="mt-2 form-group alert alert-warning col-md-12 text-center text-uppercase">
                  {nomoro}
                </div>
              )}
            </div>
          </div>
        </form>

        <hr className="mt-4 mb-4" />

        <form>
          <div className="border border-dark p-4">
            <h3 className=" mb-4">
              <strong>
                <u>Ingrese DNI</u>
              </strong>
            </h3>
            <div className="row mb-4">
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
                  placeholder="DNI"
                  name="contrato"
                  ref={dniRef}
                />
              </div>
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDni}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  WERCHOW
                </button>
              </div>{" "}
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDniM}
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  MUTUAL
                </button>
              </div>
              {errores && (
                <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                  {errores}
                </div>
              )}
              {nomoro && (
                <div className="mt-2 form-group alert alert-warning col-md-12 text-center text-uppercase">
                  {nomoro}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuscarSocio;
