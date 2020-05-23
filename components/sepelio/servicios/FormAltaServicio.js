import React, { useState } from "react";
import Stock from "../../../components/sepelio/ataudes/Stock";

const FormAltaServicio = ({
  ficha,
  selcaso,
  nuevoServicio,
  // DETALLES EXTINTO
  empresaRef,
  dniRef,
  apellidoRef,
  nombreRef,
  edadRef,
  calleRef,
  numeroRef,
  barrioRef,
  fechaFallecimientoRef,
  lugarFallecimientoRef,
  tipoServicioRef,
  casaMortuariaRef,
  fechaInumacionRef,
  horaInumacionRef,
  cementerioRef,
  // DETALLES SERVICIO
  caparRef,
  avisoRef,
  autoDueloRef,
  placaRef,
  carrozaFuRef,
  salaRef,
  tramitesRef,
  cochePortaRef,
  adicionalRef,
  // DETALLES ATAUD
  tipoAtaudRef,
  caracteristicaAtaudRef,
}) => {
  const [tramite, guardarTramite] = useState(null);
  const [valuetra, guardarValueTra] = useState(null);

  const [retirocuerpo, guardarRetirocuerpo] = useState(null);
  const [valueretcuerp, guardarValueRetCuerpo] = useState(null);

  const [traslado, guardarTraslado] = useState(null);
  const [valuetras, guardarValueTras] = useState(null);

  const [avsep, guardaraAvSep] = useState(null);
  const [valueavsep, guardarValueAvSep] = useState(null);

  const handleChecked = (e) => {
    if (e.target.name === "tramite") {
      const tramite = e.target.name;
      guardarTramite(tramite);
      const valuetra = e.target.value;
      guardarValueTra(valuetra);
    } else if (e.target.name === "avsep") {
      const avsep = e.target.name;
      guardaraAvSep(avsep);
      const valueavsep = e.target.value;
      guardarValueAvSep(valueavsep);
    } else if (e.target.name === "retirocuerpo") {
      const retirocuerpo = e.target.name;
      guardarRetirocuerpo(retirocuerpo);
      const valueretcuerp = e.target.value;
      guardarValueRetCuerpo(valueretcuerp);
    } else if (e.target.name === "traslado") {
      const traslado = e.target.name;
      guardarTraslado(traslado);
      const valuetras = e.target.value;
      guardarValueTras(valuetras);
    }
  };

  return (
    <div className="mt-4 alert alert-primary border border-dark p-4">
      <form className=" p-4" onSubmit={nuevoServicio}>
        <h1 className="mt-4 mb-4">
          <strong>
            <u>Formulario De Solicitud De Servicio</u>
          </strong>
        </h1>

        <div className=" border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Datos del Extinto</u>
            </strong>
          </h2>
          <div className="row">
            {ficha.EMPRESA === "W" ? (
              <div className="col-md-4 mt-4 mb-4">
                <label>
                  <strong>
                    <u>Empresa</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Empresa"
                  name="responsable"
                  defaultValue="WERCHOW"
                  ref={empresaRef}
                />
              </div>
            ) : ficha.EMPRESA === "M" ? (
              <div className="col-md-4 mt-4 mb-4">
                <label>
                  <strong>
                    <u>Empresa</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Empresa"
                  name="responsable"
                  defaultValue="MUTUAL"
                  ref={empresaRef}
                />
              </div>
            ) : null}

            <div className="form-group col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>DNI</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="dni"
                defaultValue={ficha.NRO_DOC}
                ref={dniRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Apellido</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="apellido"
                defaultValue={ficha.APELLIDOS}
                ref={apellidoRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Nombre</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="nombre"
                defaultValue={ficha.NOMBRES}
                ref={nombreRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Edad</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.EDAD}
                ref={edadRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Calle</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.CALLE}
                ref={calleRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>N°</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.NRO_CALLE}
                ref={numeroRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Barrio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.BARRIO}
                ref={barrioRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Fallecimiento"
                name="fec_fallec"
                ref={fechaFallecimientoRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Lugar de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Lugar de Fallecimiento"
                name="lugar_fallec"
                ref={lugarFallecimientoRef}
              />
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Detalles del Servicio</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Tipo de Servicio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                name="tipo"
                ref={tipoServicioRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Casa Mortuaria</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Casa Mortuaria"
                name="casa_mortuaria"
                ref={casaMortuariaRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha de Inumacion</u>
                </strong>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha de Inumacion"
                name="fec_inuma"
                ref={fechaInumacionRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Hora de Inumacion</u>
                </strong>
              </label>
              <input
                type="time"
                className="form-control"
                placeholder="hora de Inumacion"
                name="hora_inuma"
                ref={horaInumacionRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Cementerio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Cementerio"
                name="cementerio"
                ref={cementerioRef}
              />
            </div>
            <div className="col">
              {/* <Select
              // options={forma}
              placeholder={"Lugar"}
              //onChange={value => handleChange(value, "PRODUCTOR")}
            /> */}
            </div>
          </div>

          <hr className="mt-4 mb-4" />

          <div className="row  p-4">
            <fieldset>
              <h2 className="mb-4">
                <strong>
                  <u>Gastos del Servicio</u>
                </strong>
              </h2>

              <div className="row mt-4 border border-dark p-4">
                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="retirocuerpo"
                      name="retirocuerpo"
                      className="custom-control-input"
                      //ref={tramitesRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="retirocuerpo"
                    >
                      Retiro de Cuerpo
                    </label>
                  </div>
                  {retirocuerpo && valueretcuerp === true ? (
                    <div className="mt-2 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lugar"
                        name="lugar"
                      />
                    </div>
                  ) : null}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="traslado"
                      name="traslado"
                      className="custom-control-input"
                      //ref={tramitesRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="traslado">
                      Traslado
                    </label>
                  </div>
                  {traslado && valuetras === true ? (
                    <div className="mt-2 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Lugar"
                        name="lugar"
                      />
                    </div>
                  ) : null}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="capar"
                      name="capar"
                      className="custom-control-input"
                      ref={caparRef}
                    />
                    <label className="custom-control-label" htmlFor="capar">
                      Capilla Ardiente En Domicilio
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="placa"
                      name="placa"
                      className="custom-control-input"
                      ref={placaRef}
                    />
                    <label className="custom-control-label" htmlFor="placa">
                      Graba Placa
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="tramite"
                      name="tramite"
                      className="custom-control-input"
                      ref={tramitesRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                      defaultChecked={false}
                    />
                    <label className="custom-control-label" htmlFor="tramite">
                      Tramites
                    </label>
                  </div>
                  {tramite && valuetra === true ? (
                    <div className="mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Seccion:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Seccion"
                        name="seccion"
                      />
                    </div>
                  ) : null}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="avsep"
                      name="avsep"
                      className="custom-control-input"
                      ref={avisoRef}
                      onChange={(e) => {
                        handleChecked({
                          target: {
                            name: e.target.name,
                            value: e.target.checked,
                          },
                        });
                      }}
                    />
                    <label className="custom-control-label" htmlFor="avsep">
                      Aviso De Sepelio
                    </label>
                  </div>
                  {avsep && valueavsep === true ? (
                    <div className=" mt-2 mb-4">
                      <label>
                        <strong>
                          <u>Aviso:</u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Aviso"
                        name="aviso"
                      />
                    </div>
                  ) : null}
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="carrofu"
                      name="carrofu"
                      className="custom-control-input"
                      ref={carrozaFuRef}
                    />
                    <label className="custom-control-label" htmlFor="carrofu">
                      Carroza Funebre
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="portacor"
                      name="protacor"
                      className="custom-control-input"
                      ref={cochePortaRef}
                    />
                    <label className="custom-control-label" htmlFor="portacor">
                      Coche Portacoronas
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="autoduel"
                      name="autoduel"
                      className="custom-control-input"
                      ref={autoDueloRef}
                    />
                    <label className="custom-control-label" htmlFor="autoduel">
                      Automoviles Para Duelo
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="salavel"
                      name="salavel"
                      className="custom-control-input"
                      ref={salaRef}
                    />
                    <label className="custom-control-label" htmlFor="salavel">
                      Sala Velatoria
                    </label>
                  </div>
                </div>

                <div className="form-group col-md-4 border  p-2">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="adicional"
                      name="adicional"
                      className="custom-control-input"
                      ref={adicionalRef}
                    />
                    <label className="custom-control-label" htmlFor="adicional">
                      Adicionales
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Ataud</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col-md-4 mt-2 mb-4">
              <label>
                <strong>
                  <u>Tipo de Ataud</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                name="tipo"
                ref={tipoAtaudRef}
              />
            </div>

            <div className="col-md-4 mt-2 mb-4">
              <label>
                <strong>
                  <u>Caracteristicas</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Caracteristica"
                name="caracteristica"
                ref={caracteristicaAtaudRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <button
                type="button"
                className="btn btn-primary btn-block"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Ver Stock
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Registrar
        </button>
      </form>

      <div
        className="modal fade bd-example-modal-lg"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Stock de Ataudes</h5>
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
              <Stock selcaso={selcaso} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAltaServicio;
