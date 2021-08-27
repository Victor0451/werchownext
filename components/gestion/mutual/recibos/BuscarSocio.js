import React from "react";

const BuscarSocio = ({
  contratoRef,
  dniRef,
  buscarTitularM,
  buscarTitularDniM,
  errores,
}) => {
  return (
    <div className="container border border-dark alert alert-primary mt-4">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mt-2 mb-4">
            <strong>
              <u>Emision de Recibos</u>
            </strong>
          </h1>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <img src="/img/logom.jpg" className="mutuallogo" />
        </div>
      </div>

      <div className="mt-4 border border-dark p-4 alert alert-primary">
        <form>
          <h2 className=" mb-4">
            <strong>
              <u>Buscar Socio</u>
            </strong>
          </h2>

          <div className="border border-dark p-4">
            <div className="row mb-4">
              <div className=" col-md-3">
                <h5 className="mt-4 mb-4">
                  <strong>
                    <u>Ingrese N° de Ficha</u>
                  </strong>
                </h5>
              </div>
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
                  onClick={buscarTitularM}
                >
                  MUTUAL
                </button>
              </div>
              {errores && (
                <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                  {errores}
                </div>
              )}
            </div>
          </div>
        </form>

        <hr className="mt-4 mb-4" />

        <form>
          <div className="border border-dark p-4">
            <div className="row mb-4">
              <div className="col-md-3">
                <h5 className=" mt-4 mb-4">
                  <strong>
                    <u>Ingrese N° DNI</u>
                  </strong>
                </h5>
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
                  placeholder="DNI"
                  name="contrato"
                  ref={dniRef}
                />
              </div>

              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDniM}
                >
                  MUTUAL
                </button>
              </div>
              {errores && (
                <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                  {errores}
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
