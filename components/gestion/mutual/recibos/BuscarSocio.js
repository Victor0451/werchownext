import React from "react";
import ListadoSocios from "./ListadoSocios";

const BuscarSocio = ({
  contratoRef,
  dniRef,
  buscarTitularM,
  buscarTitularDniM,
  errores,
  titulo,
  listado,
  listSocios,
  Seleccionar
}) => {
  return (
    <div className="container border border-dark list mt-4">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mt-2 mb-4">
            <strong>
              <u>Emision de {titulo}</u>
            </strong>
          </h1>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <img src="/img/logom.jpg" className="mutuallogo" />
        </div>
      </div>

      <div className="mt-4 border border-dark p-4 ">
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
                  Buscar Socio
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
                  type="number"
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
                  Buscar Socio
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

        <div className="">
          <div className="border border-dark p-4">
            <div className="row mb-4 d-flex justify-content-center">
              <div className="col-md-3">
                <h5 className=" mt-4 mb-4">
                  <strong>
                    <u>Buscar Por Apellido</u>
                  </strong>
                </h5>
              </div>


              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => listSocios()}

                >
                  Ver Socios
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <ListadoSocios listado={listado} Seleccionar={Seleccionar} />

    </div>
  );
};

export default BuscarSocio;
