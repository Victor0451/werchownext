import React from "react";
import Calendario from "../../werchow/servicios/Calendario";
import ListadoSocios from "./ListadoSocios";

const BuscarSocio = ({
  contratoRef,
  dniRef,
  buscarTitularM,
  buscarTitularDniM,
  buscarTitular,
  buscarTitularDni,
  errores,
  titulo,
  listado,
  listSocios,
  listSociosM,
  Seleccionar,
  SeleccionarM,
  emp,
  eventSelected,
          visitas,
          detVisi,

}) => {
  return (
    <div className="container border border-dark list mt-4 p-4">
      <div className="row">
        <div className="col-md-8">
          <h1 className="mt-2 mb-4">
            <strong>
              <u>Emision de {titulo}</u>
            </strong>
          </h1>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          {emp && emp === 'W' ? (
            <img src="/img/logo.png" className="mt-2 werchowlogo" />

          ) : emp && emp === 'M' ? (
            <img src="/img/logom.jpg" className="mutuallogo" />

          ) : null}

        </div>
      </div>

      <div className="border border-dark mt-4 mb-4 p-2">
        <div className="row d-flex justify-content-center">

          <div className="col-md-6">
            <h4>
              <u>
                Calendario de visitas - PLan Ortodoncia
              </u>
            </h4>
          </div>

          <div className="col-md-4">
            <button
              className="btn btn-block btn-primary mt-1"
              data-toggle="collapse"
              data-target="#collapseWidthExample"
            >
              Ver Turnos
            </button>
          </div>

        </div>

        <Calendario
      eventSelected={eventSelected}
      visitas={visitas}
      detVisi={detVisi}
        />

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

              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitular}
                >
                  Werchow
                </button>
              </div>
              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularM}
                >
                  Mutual
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

              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDni}
                >
                  Werchow
                </button>
              </div>
              <div className="form-group col-md-2 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularDniM}
                >
                  Mutual
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
                  Werchow
                </button>
              </div>
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => listSociosM()}

                >
                  Mutual
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <ListadoSocios
        listado={listado}
        Seleccionar={Seleccionar}
        SeleccionarM={SeleccionarM}

      />

    </div>
  );
};

export default BuscarSocio;
