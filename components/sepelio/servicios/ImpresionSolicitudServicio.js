import React from "react";
import Spinner from "../../layout/Spinner";
import moment from "moment";

const ImpresionSolicitudServicio = ({ servicio, ataud }) => {
  if (!servicio || !ataud) return <Spinner />;

  return (
    <div className="  list">
      <div className="  p-1">
        <div className="row d-felx justify-content-between p-2">
          <h1 className="   text-center">
            <strong>
              <u>Solicitud De Servicio</u>
            </strong>
          </h1>
          <img src="/img/logo.png" className="werchowlogo" />
        </div>

        <div className="alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase">
          Se deja establecido que, por razones de Salud Pública, en todos los
          casos el retiro del cuerpo del Sanatorio u Hospital, será dentro de
          las 24 hs. del día y hora determinado, y comunicado, por el cementerio
          o crematorio.-
        </div>

        <div className="mt-4  border border-dark p-4">
          <div className="d-flex justify-content-between">
            <h2 className="  col-8">
              <strong>
                <u>Datos del Extinto</u>
              </strong>
            </h2>
            <div className="  col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Empresa"
                name="responsable"
                defaultValue={moment(servicio.fecha_recepcion).format(
                  "DD/MM/YYYY HH:mm:ss"
                )}
                readOnly
              />
            </div>
          </div>

          <hr className="" />

          <div className="row mt-4">
            <div className="col-md-4 mt-2">
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
                defaultValue={servicio.empresa}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-2">
              <label>
                <strong>
                  <u>N° Socio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="dni"
                defaultValue={servicio.contrato}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-2">
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
                defaultValue={servicio.dni}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
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
                defaultValue={servicio.apellido}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
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
                defaultValue={servicio.nombre}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
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
                defaultValue={servicio.edad}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Fecha de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Fallecimiento"
                name="fechafallecimiento"
                defaultValue={moment(servicio.fecha_fallecimiento).format(
                  "DD/MM/YYYY"
                )}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Lugar de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Lugar de Fallecimiento"
                name="lugarfallecimiento"
                defaultValue={servicio.lugar_fallecimiento}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Altura</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Altura"
                name="altura"
                defaultValue={servicio.altura}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Peso</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Peso"
                name="peso"
                defaultValue={servicio.peso}
                readOnly
              />
            </div>
          </div>
        </div>

        <hr />

        <div className=" border border-dark p-4">
          <h2 className="">
            <strong>
              <u>Detalles del Servicio</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Tipo de Servicio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Tipo de Servicio"
                name="tiposervicio"
                defaultValue={servicio.tipo_servicio}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Motivo</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Motivo"
                name="motivo"
                defaultValue={servicio.motivo}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Retiro Del Extinto</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Retiro Extinto"
                name="retiro"
                defaultValue={servicio.retiro}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Casa Mortuaria</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Casa Mortuaria"
                name="casamortuaria"
                defaultValue={servicio.casa_mortuaria}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Fecha de Inumacion</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Inumacion"
                name="fechainhumacion"
                defaultValue={moment(servicio.fecha_inumacion).format(
                  "DD/MM/YYYY"
                )}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Hora de Inumacion</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="hora de Inumacion"
                name="horainhumacion"
                defaultValue={servicio.hora_inhumacion}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
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
                defaultValue={servicio.cementerio}
                readOnly
              />
            </div>
            {servicio.cremacion === 1 ? (
              <div className="col-md-4 mt-2">
                <label>
                  <strong>
                    <u>Cremacion</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cremacion"
                  name="cremacion"
                  defaultValue="SI"
                  readOnly
                />
              </div>
            ) : servicio.cremacion === 0 ? (
              <div className="col-md-4 mt-2">
                <label>
                  <strong>
                    <u>Cremacion</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cremacion"
                  name="cremacion"
                  defaultValue="NO"
                  readOnly
                />
              </div>
            ) : null}
            {servicio.donacion === 1 ? (
              <div className="col-md-4 mt-2">
                <label>
                  <strong>
                    <u>Donacion</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Donacion"
                  name="donacion"
                  defaultValue="SI"
                  readOnly
                />
              </div>
            ) : servicio.donacion === 0 ? (
              <div className="col-md-4 mt-2">
                <label>
                  <strong>
                    <u>Donacion</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Donacion"
                  name="Donacion"
                  defaultValue="NO"
                  readOnly
                />
              </div>
            ) : null}
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Solicitado Por:</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                defaultValue={servicio.solicitado}
                readOnly
              />
            </div>
            <div className="form-group col-md-4 mt-2">
              <label>
                <strong>
                  {" "}
                  <u> Parentesco: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                defaultValue={servicio.parentesco}
                readOnly
              />
            </div>
          </div>
        </div>
        <hr />
        <div className=" border border-dark p-4">
          <h2 className=" ">
            <strong>
              <u>Detalles del ataud</u>
            </strong>
          </h2>

          <div className="row mt-4 d-flex justify-content-center">
            <div className="form-group col-md-6 ">
              <label>
                <strong>
                  {" "}
                  <u> Ataud: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                defaultValue={ataud.nombre}
                readOnly
              />
            </div>

            <div className="form-group col-md-2 ">
              <label>
                <strong>
                  {" "}
                  <u> Tipo: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                defaultValue={ataud.tipo}
                readOnly
              />
            </div>

            <div className="form-group col-md-2 ">
              <label>
                <strong>
                  {" "}
                  <u> Uso: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                defaultValue={ataud.uso}
                readOnly
              />
            </div>
          </div>
        </div>
        <hr />
        <div className=" border border-dark">
          <div className="row d-flex justify-content-between ">
            <div className="col-4 text-center ">
              <br />
              <p>-----------------------------</p>
              <label>Firma</label>
            </div>
            <div className="col-4 text-center ">
              <br />
              <p>-----------------------------</p>
              <label>Aclaracion</label>
            </div>
            <div className="col-4 text-center ">
              <br />
              <p>-----------------------------</p>
              <label>N° de documento</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpresionSolicitudServicio;
