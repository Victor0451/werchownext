import React from "react";
import Stock from "../ataudes/Stock";

const FormVentaSinServicio = ({ selcasofrm, ataud, socio }) => {
  console.log(ataud);
  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <h2>
        <strong>
          <u>Venta de Ataudes sin servicio</u>
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <div className="row">
          <div className="col-md-4">
            <button
              className="mt-4 btn btn-primary btn-block"
              data-toggle="modal"
              data-target="#stockataud"
            >
              Elegir Ataud
            </button>
          </div>

          {ataud ? (
            <>
              <div className="col-md-2 ">
                <label>
                  <strong>
                    <u>Codigo:</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Codigo"
                  name="idataud"
                  id="idataud"
                  defaultValue={ataud.idataud}
                  readOnly
                />
              </div>

              <div className="col-md-4 ">
                <label>
                  <strong>
                    <u>Ataud:</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ataud"
                  name="ataud"
                  id="ataud"
                  defaultValue={ataud.nombre}
                  readOnly
                />
              </div>

              <div className="col-md-2 ">
                <label>
                  <strong>
                    <u>Uso:</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Uso"
                  name="uso"
                  id="uso"
                  defaultValue={ataud.uso}
                  readOnly
                />
              </div>
            </>
          ) : (
            <div className="col-md-8 mt-4">
              <div className="alert alert-info border border-dark text-center text-uppercase">
                Elige el ataud que se va a vender
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 border border-dark p-4">
        <div className="row d-flex justify-content-center">
          <div className="border border-dark col-md-5">
            <div className="col-md-12">
              <button
                className="mt-4 btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#afiliado"
              >
                Buscar Afiliado
              </button>
            </div>
            <div className="col-md-12 mt-4 mb-4">
              <label>
                <strong>
                  <u>Contrato:</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Contrato"
              />
            </div>
          </div>

          <div className="border border-dark col-md-5 ml-1">
            <div className="col-md-12">
              <button
                className="mt-4 btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#particular"
              >
                Particular
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL ATAUD */}
      <div
        className="modal fade"
        id="stockataud"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Stock Ataudes
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Stock selcasofrm={selcasofrm} fl={0} />
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

      {/* MODAL AFILIADO */}
      <div
        className="modal fade"
        id="afiliado"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Afiliado
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="border border-dark alert alert-primary p-4">
                {socio ? (
                  <div className="row">
                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Contrato:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Contrato"
                        defaultValue={socio.CONTRATO}
                        readOnly
                      />
                    </div>

                    <div className="col-md-8 mt-4 ">
                      <label>
                        <strong>
                          <u>Socio:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Socio"
                        defaultValue={`${socio.APELLIDOS}, ${socio.NOMBRES}`}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Apellido Solicitante:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido Solicitante"
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Nombre Solicitante:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre Solicitante"
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>DNI Solicitante:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="DNI Solicitante"
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Telefono Solicitante:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Telefono Solicitante"
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Parentesco:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Parentesco"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="border border-dark alert alert-info text-center text-uppercase">
                    El N° de Contrato No pertenece a un socio registrado
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

      {/* MODAL PARTICULAR */}
      <div
        className="modal fade"
        id="particular"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Particular
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="border border-dark alert alert-primary p-4">
                <div className="row">
                  <div className="col-md-4 mt-4">
                    <label>
                      <strong>
                        <u>Apellido Fallecido:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido Fallecido"
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>
                      <strong>
                        <u>Nombre Fallecido:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre Fallecido"
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>
                      <strong>
                        <u>DNI Fallecido:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DNI Fallecido"
                    />
                  </div>

                  <div className="col-md-6 mt-4">
                    <label>
                      <strong>
                        <u>Domicilio Fallecido:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Domicilio Fallecido"
                    />
                  </div>

                  <div className="col-md-2 mt-4">
                    <label>
                      <strong>
                        <u>N°:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="N°"
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>
                      <strong>
                        <u>Barrio:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Barrio"
                    />
                  </div>

                  <div className="col-md-4 mt-4 ">
                    <label>
                      <strong>
                        <u>Apellido Solicitante:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellido Solicitante"
                    />
                  </div>

                  <div className="col-md-4 mt-4 ">
                    <label>
                      <strong>
                        <u>Nombre Solicitante:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre Solicitante"
                    />
                  </div>

                  <div className="col-md-4 mt-4 ">
                    <label>
                      <strong>
                        <u>DNI Solicitante:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DNI Solicitante"
                    />
                  </div>

                  <div className="col-md-4 mt-4 ">
                    <label>
                      <strong>
                        <u>Telefono Solicitante:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Telefono Solicitante"
                    />
                  </div>

                  <div className="col-md-4 mt-4 ">
                    <label>
                      <strong>
                        <u>Parentesco:</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Parentesco"
                    />
                  </div>
                </div>
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
    </div>
  );
};

export default FormVentaSinServicio;
