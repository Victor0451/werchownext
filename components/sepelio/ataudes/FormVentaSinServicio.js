import React, { useState } from "react";
import Stock from "../ataudes/Stock";

const FormVentaSinServicio = ({
  selcasofrm,
  ataud,
  socio,
  buscarTitular,
  buscarTitularM,
  contratoRef,
  errores,
  apellidoFallRef,
  nombreFallRef,
  dniFallRef,
  domFallRef,
  nDomFallRef,
  barrioFallRef,
  telefonoFallRef,
  apellidoSolRef,
  nombreSolRef,
  dniSolRef,
  telefonoSolRef,
  parentescoSolRef,
  registrarVenta,
  errval,
}) => {
  const [fallAp, guardarApFall] = useState("-");
  const [fallNom, guardarNomFall] = useState("-");

  const garbApFall = () => {
    if (apellidoFallRef.current.value === "") {
      guardarApFall("-");
    } else {
      guardarApFall(`${apellidoFallRef.current.value}`);
    }
  };

  const garbNomFall = () => {
    if (nombreFallRef.current.value === "") {
      guardarNomFall("-");
    } else {
      guardarNomFall(`${nombreFallRef.current.value}`);
    }
  };

  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <div className="row">
        <div className="col-md-8">
          <h2>
            <strong>
              <u>Venta de Ataudes sin servicio</u>
            </strong>
          </h2>
        </div>

        <div className="col-md-4">
          <a
            className="btn btn-info btn-block btn-sm"
            href="/sepelio/ataudes/listadoventassinservicio"
          >
            Listado de ventas Realizadas
          </a>
        </div>
      </div>

      <div className="mt-4 mb-4 alert alert-warning border border-dark text-center text-uppercase">
        Esta seccion del sistema esta diseñada exclusivamente para la venta de
        ataudes sin la solicitud de un servicio.
      </div>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <strong>
            <u>Datos del ataud</u>
          </strong>
        </h4>
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
        <h4>
          <strong>
            <u>Datos del fallecido</u>
          </strong>
        </h4>
        <div className=" mt-4 row d-flex justify-content-center">
          <div className="row border border-dark col-md-5">
            <div className="col-md-6">
              <button
                className="mt-4 btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#afiliado"
                onClick={buscarTitular}
              >
                Werchow
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="mt-4 btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#afiliado"
                onClick={buscarTitularM}
              >
                Mutual
              </button>
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Contrato:</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Contrato"
                ref={contratoRef}
              />
            </div>
            {socio ? (
              <div className="col-md-8 mt-4 mb-4">
                <label>
                  <strong>
                    <u>Socio:</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={`${socio.APELLIDOS}, ${socio.NOMBRES}`}
                  readOnly
                />
              </div>
            ) : null}
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

            <div className="mt-4 ">
              <label>
                <strong>
                  <u>Fallecido:</u>
                </strong>
              </label>
              <div className=" col-md-12 form-control">
                {fallAp !== "-" ? <>{fallAp}, </> : null}
                {fallNom !== "-" ? <>{fallNom}</> : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-dark mt-4 p-4">
        <h4>
          <strong>
            <u>Datos del solicitante</u>
          </strong>
        </h4>
        <div className="mt-4 row border border-dark p-4">
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
              ref={apellidoSolRef}
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
              ref={nombreSolRef}
            />
          </div>

          <div className="col-md-4 mt-4 ">
            <label>
              <strong>
                <u>DNI Solicitante:</u>
              </strong>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="DNI Solicitante"
              ref={dniSolRef}
            />
          </div>

          <div className="col-md-4 mt-4 ">
            <label>
              <strong>
                <u>Telefono Solicitante:</u>
              </strong>
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Telefono Solicitante"
              ref={telefonoSolRef}
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
              ref={parentescoSolRef}
            />
          </div>
        </div>
      </div>

      {errval ? (
        <div className="mt-4 mb-4 alert alert-danger text-center text-uppercase border border-dark">
          {errval}
        </div>
      ) : null}

      <div className="border border-dark p-4 mt-4">
        <div className="row">
          <div className="col-md-6">
            <button
              className="btn btn-block btn-primary"
              onClick={registrarVenta}
            >
              Registrar Venta
            </button>
          </div>
          <div className="col-md-6">
            <a className="btn btn-block btn-danger" href="/">
              Cancelar
            </a>
          </div>
        </div>
      </div>

      {/* -----------------------  MODALES ------------------------------- */}

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
                          <u>DNI:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={socio.NRO_DOC}
                        readOnly
                      />
                    </div>

                    <div className="col-md-8 mt-4 ">
                      <label>
                        <strong>
                          <u>Domicilio:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={`${socio.CALLE} - N° ${socio.NRO_CALLE}`}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Barrio:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={socio.BARRIO}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Telefono:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={socio.TELEFONO}
                        readOnly
                      />
                    </div>

                    <div className="col-md-4 mt-4 ">
                      <label>
                        <strong>
                          <u>Movil:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={socio.MOVIL}
                        readOnly
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {errores ? (
                      <div className="border border-dark alert alert-danger text-center text-uppercase">
                        {errores}
                      </div>
                    ) : null}
                  </>
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
                      ref={apellidoFallRef}
                      onChange={garbApFall}
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
                      ref={nombreFallRef}
                      onChange={garbNomFall}
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>
                      <strong>
                        <u>DNI Fallecido:</u>
                      </strong>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="DNI Fallecido"
                      ref={dniFallRef}
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
                      ref={domFallRef}
                    />
                  </div>

                  <div className="col-md-2 mt-4">
                    <label>
                      <strong>
                        <u>N°:</u>
                      </strong>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="N°"
                      ref={nDomFallRef}
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
                      ref={barrioFallRef}
                    />
                  </div>

                  <div className="col-md-4 mt-4">
                    <label>
                      <strong>
                        <u>Telefono:</u>
                      </strong>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Telefono"
                      ref={telefonoFallRef}
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
