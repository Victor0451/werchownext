import React, { useState } from "react";
import moment from "moment-timezone";
import NotaRehabilitacion from "./NotaRehabilitacion";

const Rehabilitacion = ({
  buscarTitular,
  buscarTitularM,
  contratoRef,
  errores,
  nomoro,
  ficha,
  empresa,
  nuevaRehab,
  imprimir,
  handlechange,
  handleBlur,
  vigencia,
  vigenciaRef,
  error,
  cuotas,
}) => {
  let fecha = moment().format("DD/MM/YYYY");

  return (
    <div className="container">
      <form className="mt-4 border border-dark p-4 alert alert-primary">
        <h2 className=" mb-4">
          <strong>
            <u>Solicitud de Afiliacion</u>
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
              >
                WERCHOW
              </button>
            </div>{" "}
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
            {nomoro && (
              <div className="mt-2 form-group alert alert-warning col-md-12 text-center text-uppercase">
                {nomoro}
              </div>
            )}
          </div>
        </div>
      </form>

      {ficha ? (
        <>
          <hr className="mt-4 mb-4" />
          <div className="alert alert-primary">
            <h2 className="mt-4 mb-4">
              <strong>
                <u>Informacion Del Afiliado</u>
              </strong>
            </h2>

            <form className="" onSubmit={nuevaRehab}>
              <div className="d-flex justify-content-between mt-4 mb-4 border border-dark p-2">
                <div className="row mb-4">
                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> N° Socio: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.CONTRATO}
                      readOnly
                    />
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
                      defaultValue={ficha.NRO_DOC}
                      readOnly
                    />
                  </div>

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
                      defaultValue={ficha.APELLIDOS}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> Nombre: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.NOMBRES}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> Calle: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.CALLE}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> N°: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.NRO_CALLE}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> Barrio: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.BARRIO}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> Localidad: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.LOCALIDAD}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> Telefono: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.TELEFONO}
                      readOnly
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> MOVIL: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={ficha.MOVIL}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-4 mb-4" />

              <h2 className="mt-4 mb-4">
                <strong>
                  <u>Calculo de Carencia</u>
                </strong>
              </h2>

              <div className="border border-dark p-2">
                <div className="row">
                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> Meses Adeudados: </u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handlechange}
                      onBlur={handleBlur}
                      ref={vigenciaRef}
                    />

                    {error && (
                      <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                        {error}
                      </div>
                    )}
                  </div>
                  <div className="form-group col-md-4">
                    <label>
                      <strong>
                        {" "}
                        <u> Nueva Vigencia: </u>
                      </strong>
                    </label>

                    {vigencia ? (
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={moment(vigencia).format("DD/MM/YYYY")}
                        readOnly
                      />
                    ) : (
                      <input type="text" className="form-control" readOnly />
                    )}
                  </div>

                  <div className="form-group col-md-4" hidden id="btn">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Registrar
                    </button>
                  </div>
                </div>
              </div>
            </form>

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
                        <u>Solicitud de Afiliacion</u>
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
                      <NotaRehabilitacion
                        ficha={ficha}
                        fecha={fecha}
                        vigencia={vigencia}
                        empresa={empresa}
                        cuotas={cuotas}
                      />
                    </div>

                    <div className="alert alert-primary mt-4">
                      <div className="mt-4 p-4 border">
                        <h3 className="text-center mb-4 font-weight-bold">
                          Opciones
                        </h3>
                        <div className="row d-flex justify-content-center">
                          <button
                            className="btn btn-primary"
                            onClick={imprimir}
                          >
                            Imprimir
                          </button>
                        </div>
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
        </>
      ) : null}
    </div>
  );
};

export default Rehabilitacion;
