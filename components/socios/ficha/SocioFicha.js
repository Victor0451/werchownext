import React from "react";
import ListadoSocios from "./ListadoSocios";

const SocioFicha = ({
  buscarTitular,
  buscarTitularM,
  buscarTitularDni,
  buscarTitularDniM,
  listSocios,
  listSociosM,
  contratoRef,
  dniRef,
  errores,
  nomoro,
  listsocio,
  Seleccionar,
  titulo,
  
}) => {
  return (
    <div className="container border border-dark list mt-4 p-4 mb-4">

      {titulo ? (
        <h1 className="mb-4">
          <strong>
            <u>{titulo}</u>
          </strong>
        </h1>
      ) : (
        <h1 className="mb-4">
          <strong>
            <u>Legajo Virtual</u>
          </strong>
        </h1>
      )}

      <div className="mt-4 border border-dark p-4 ">
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
                  data-target="#legajo"
                >
                  WERCHOW
                </button>
              </div>{" "}
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularM}
                  data-toggle="modal"
                  data-target="#legajo"
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
                  data-target="#legajo"
                >
                  WERCHOW
                </button>
              </div>{" "}
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDniM}
                  data-toggle="modal"
                  data-target="#legajo"
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


        <div className="border border-dark p-4">


          <h3 className=" mt-4 mb-4">
            <strong>
              <u>Buscar Por Apellido</u>
            </strong>
          </h3>


          <div className="row mb-4 d-flex justify-content-center">
            <div className="form-group col-md-4 mt-4">
              <button
                className="btn btn-block btn-primary"
                data-toggle="modal"
                data-target="#listadoSocio"
                onClick={() => listSocios()}

              >
                WERCHOW
              </button>
            </div>

            <div className="form-group col-md-4 mt-4">
              <button
                className="btn btn-block btn-primary"
                data-toggle="modal"
                data-target="#listadoSocio"
                onClick={() => listSociosM()}

              >
                MUTUAL
              </button>
            </div>

            {!listsocio ? null
              : (
                <ListadoSocios listado={listsocio} Seleccionar={Seleccionar} />
              )}


          </div>
        </div>
      </div>


    </div>
  );
};

export default SocioFicha;
