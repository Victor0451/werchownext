import React from "react";
import Gestiones from "./Gestiones";
import Campcaso from "./Campcaso";
import TablaSocios from "./TablaSocios";

const BuscarSocio = ({
  socio,
  dni,
  apellido,
  errores,
  handleChange,
  handleSubmit,
  handleBlur,
  error,
  socioRes,
  socioGest,
  listSocio,
}) => {
  return (
    <div className="container mt-2 p-4  border border-dark list mb-4">

      <h2 className="mt-2">
        <u>Buscar Socio En Campañas</u>
      </h2>

      <div className="mt-4 border border-dark">

        <form className=" mt-4 d-flex justify-content-center p-2" onSubmit={handleSubmit}>
          <div className="row ">
            <div className="form-group col-md-8 ">

              <input
                type="text"
                className=" form-control"
                placeholder="Ingrese el numero de socio"
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

            <div className="col-md-4">
              <button
                type="submit"
                className="btn btn-primary btn-block "
                data-toggle="modal"
                data-target="#exampleModal1"
              >
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

        <hr className="mt-4" />

        <form className=" mt-4 d-flex justify-content-center p-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-8">

              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el DNI"
                onChange={handleChange}
                onBlur={handleBlur}
                value={dni}
                name="dni"
              />
            </div>

            <div className="col-md-4">
              <button
                type="submit"
                className="btn btn-primary btn-block "
                data-toggle="modal"
                data-target="#exampleModal1"
              >
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

        <hr className="mt-4" />

        <form className=" mt-4 d-flex justify-content-center p-2" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-8">

              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el apellido"
                onChange={handleChange}
                onBlur={handleBlur}
                value={apellido}
                name="apellido"
              />
            </div>

            <div className="col-md-4">
              <button
                type="submit"
                className="btn btn-primary btn-block "
                data-toggle="modal"
                data-target="#exampleModal"
              >
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


      {/* MODAL APELLIDOS */}
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
            <div className="modal-header ">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Socios en campaña</u>
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
              <TablaSocios listSocio={listSocio} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary btn-block"
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
        id="exampleModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content border border-dark ">
            <div className="modal-header ">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Socios en campaña</u>
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
              {socioRes ? (
                <div
                  className="text-center mt-4 alert alert-dark border border-dark"
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
              ) : (
                <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
                  <strong>El socio no se encuentra en campaña</strong>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
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
