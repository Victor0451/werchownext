import React from "react";
import Legajo from "../../../components/socios/ficha/Legajo";
import Pagos from "../../../components/socios/ficha/Pagos";
import ListadoSocio from "./ListadoSocios";
import LegajoArchivos from "../legajoVirtual/LegajoArchivos";

const SocioFicha = ({
  buscarTitular,
  buscarTitularM,
  buscarTitularDni,
  buscarTitularDniM,
  buscarTitularApellido,
  contratoRef,
  dniRef,
  apellidoRef,
  errores,
  nomoro,
  ficha,
  pagos,
  listado,
  flag,
  empresa,
  archivos,
}) => {
  return (
    <div className="container">
      <h1 className="mt-4 mb-4">
        <strong>
          <u>Legajo Virtual</u>
        </strong>
      </h1>
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

        {/* <hr className="mt-4 mb-4" />

        <form>
          <div className="border border-dark p-4">
            <h3 className=" mb-4">
              <strong>
                <u>Ingrese Apellido</u>
              </strong>
            </h3>
            <div className="row mb-4">
              <div className="form-group col-md-4">
                <label>
                  <strong>
                    {" "}
                    <u> Apellido: </u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="contrato"
                  ref={apellidoRef}
                />
              </div>
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  onClick={buscarTitularApellido}
                  data-toggle="modal"
                  data-target=".modlist"
                >
                  WERCHOW
                </button>
              </div>{" "}
              <div className="form-group col-md-4 mt-4">
                <button
                  className="btn btn-block btn-primary"
                  //onClick={buscarTitularM}
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
        </form>*/}
      </div>

      <div
        className="modal fade modlist"
        id="exampleModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content border border-dark ">
            <div className="modal-header alert alert-primary">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Legajo Del Socio</u>
                </strong>
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <ListadoSocio listado={listado} flag={flag} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content border border-dark ">
            <div className="modal-header alert alert-primary">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Legajo Del Socio</u>
                </strong>
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              <div id="solicitud" className="mt-4 container ">
                <div>
                  <Legajo ficha={ficha} />

                  <hr className="mt-4 mb-4" />

                  <Pagos pagos={pagos} />

                  <hr className="mt-4 mb-4" />

                  <LegajoArchivos archivos={archivos} empresa={empresa} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocioFicha;
