import React from "react";
import Legajo from "../../../components/socios/ficha/Legajo";
import LegajoArchivos from "../../../components/socios/legajoVirtual/LegajoArchivos";
import FormSubirArchivo from "../../../components/socios/legajoVirtual/FormSubirArchivo";

const BuscarSocio = ({
  contratoRef,
  dniRef,
  errores,
  nomoro,
  buscarTitular,
  buscarTitularM,
  buscarTitularDni,
  buscarTitularDniM,
  empresa,
  contrato,
  archivos,
  ficha,
}) => {
  return (
    <div className="container alert alert-dark border border-primary mt-4">
      <h1 className="mt-4 mb-4">
        <strong>
          <u>Subir Archivos Al Legajo Virtual</u>
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
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Formulario Para Subir Archivos
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              {ficha !== null ? (
                <div className="container mt-4 alert alert-primary border border-dark p-4">
                  <h2 className=" mb-4">
                    <strong>
                      <u>Legajo Virtual</u>
                    </strong>
                  </h2>

                  <Legajo ficha={ficha} />

                  <hr className="container mt-4 mb-4" />

                  <LegajoArchivos archivos={archivos} empresa={empresa} />

                  <hr className="container mt-4 mb-4" />

                  <FormSubirArchivo contrato={contrato} empresa={empresa} />
                </div>
              ) : null}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
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

export default BuscarSocio;
