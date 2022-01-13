import React from "react";
import TareaSelect from "react-select";
import moment from "moment-timezone";
import Notificacion from "./Notificacion";
import { acciones, nueavaaccion } from "../../array/array";

const FormAcciones = ({
  gestion,
  caso,
  fechaaccionRef,
  fechaaccionnuevaRef,
  obsRef,
  nuevaaccionRef,
  handleChange,
  accion,
  contratoRef,
  idcasoRef,
  obtenerDatos,
}) => {
  let fecha = moment().format("DD/MM/YYYY");
  let fecha1 = moment().format("DD/MM/YYYY");
  let cuoSinBonf = caso.cuota * 1.10

  return (
    <div className="container list">
      <div className="border border-dark p-4">
        {caso.edad >= 65 ? (
          <div className="row">
            <div className="col-md-4">
              <h3>
                <u>Datos del socio</u>
              </h3>
            </div>
            <div className="col-md-8">
              <div className="alert alert-warning border border-dark text-center text-uppercase">
                ¡¡cuidado!!. el afiliado tiene {caso.edad}, verificar con
                gerencia como se procede.
              </div>
            </div>
          </div>
        ) : (
          <h3>
            <u>Datos del socio</u>
          </h3>
        )}

        <form className="mt-4  border border-dark p-4">
          <div className="row">
            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Legajo: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.contrato}
                ref={contratoRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Caso N°: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.idcaso}
                ref={idcasoRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Apellido: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.apellido}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Nombre: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.nombre}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Telefono: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.telefono}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Celular: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.movil}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Domicilio: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.calle}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> N°: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.nro_calle}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Barrio: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.barrio}
                readOnly
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> Localidad: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={caso.localidad}
                readOnly
              />
            </div>
          </div>

          <div className="row d-flex justify-content-center">

            <div className="border border-dark form-group col-md-5 mt-4 text-center alert alert-danger rounded-pill mr-2">
              <label>
                <strong>
                  {" "}
                  <u> Cuota Bonificada: {""}</u>
                </strong>
              </label>
              {" "}{caso.cuota}
            </div>

            <div className="border border-dark form-group col-md-5 mt-4 text-center alert alert-danger rounded-pill">
              <label>
                <strong>
                  {" "}
                  <u> Cuota Sin Bonificar: {""}</u>
                </strong>
              </label>
              {" "}{cuoSinBonf.toFixed(2)}
            </div>
          </div>

        </form>
      </div>

      {!gestion ? null : (
        <div className=" border border-dark">
          <h3>
            <u>Acciones Anterior</u>
          </h3>

          <table className="list table table-striped table-sm table-responsive border border-dark mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">CONTRATO</th>
                <th scope="col">ACCION</th>
                <th scope="col">FECHA ACCION</th>
                <th scope="col">NUEVA ACCION</th>
                <th scope="col">FECHA NUEVA ACCION</th>
                <th scope="col">OBSERVACION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{gestion.contrato}</td>
                <td>{gestion.accion}</td>
                <td>{gestion.fechaaccion}</td>
                <td>{gestion.nuevaaccion}</td>
                <td>{gestion.fechanuevaaccion}</td>
                <td>{gestion.observacion}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <hr />

      <div>
        <div className=" border border-dark p-4">
          <h3>
            <u>Acciones</u>
          </h3>
          <div className="form-row mt-4">
            <div className="form-group col-md-6">
              <label>Acciones</label>

              <TareaSelect
                options={acciones}
                placeholder={"Elige una accion"}
                onChange={(value) => handleChange(value, "accion")}
                name="accion"
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  <u>Fecha de Accion</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={fecha}
                ref={fechaaccionRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-12">
              <label>Observaciones</label>
              <textarea className="form-control" rows="3" ref={obsRef} />
            </div>
          </div>
        </div>

        {accion > 0 && accion < 4 ? (
          <div className="mt-4 p-4 border border-dark">
            <h3>
              <u>Nueva Accion</u>
            </h3>
            <label className="form-group col-md-12 mt-4">
              <strong>
                <label>Nueva Accion</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="LLAMAR DE NUEVO"
                  ref={nuevaaccionRef}
                  readOnly
                />
              </strong>
            </label>
            <div className="form-group col-md-12">
              <label>Fecha de Accion</label>
              <input
                type="date"
                className="form-control"
                ref={fechaaccionnuevaRef}
                defaultValue={fecha1}
              />
            </div>
          </div>
        ) : accion > 3 && accion < 7 ? (
          <div className=" border border-dark">
            <h3>
              <u>Nueva Accion</u>
            </h3>
            <label className="form-group col-md-12 mt-4">
              <strong>
                <label>Nueva Accion</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="VERIFICAR DATOS EN CREDIXA Y LLAMAR DE NUEVO"
                  ref={nuevaaccionRef}
                  readOnly
                />
              </strong>
            </label>
            <div className="form-group col-md-12">
              <label>Fecha de Accion</label>
              <input
                type="date"
                className="form-control"
                ref={fechaaccionnuevaRef}
                defaultValue={fecha1}
              />
            </div>
          </div>
        ) : accion === 7 ? (
          <div className="mt-4 p-4 border border-dark">
            <h3>
              <u>Nueva Accion</u>
            </h3>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Acciones</label>
                <TareaSelect
                  options={nueavaaccion}
                  placeholder={"Elige una accion"}
                  onChange={(value) => handleChange(value, "nuevaaccion")}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Fecha de Accion</label>
                <input
                  type="date"
                  className="form-control"
                  defaultValue={fecha}
                  ref={fechaaccionnuevaRef}
                />
              </div>
            </div>
          </div>
        ) : accion === 8 || accion === 9 ? (
          <div className="mt-4 p-4 border border-dark">
            <h3>
              <u>Nueva Accion</u>
            </h3>
            <div className="row">
              <label className="form-group col-md-12 mt-4">
                <strong>
                  <label>Nueva Accion</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="SE CIERRA EL CASO"
                    ref={nuevaaccionRef}
                    readOnly
                  />
                </strong>
              </label>
            </div>
            <div className="form-group col-md-12">
              <label>Fecha de Accion</label>
              <input
                type="text"
                className="form-control"
                defaultValue={fecha}
                ref={fechaaccionnuevaRef}
              />
            </div>
          </div>
        ) : accion === 10 ? (
          <div className="mt-4 p-4 border border-dark">
            <h3>
              <u>Nueva Accion</u>
            </h3>
            <div className="row">
              <label className="form-group col-md-12 mt-4">
                <strong>
                  <label>Nueva Accion</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="SE CIERRA EL CASO Y SE ENVIA NOTIFICACION"
                    ref={nuevaaccionRef}
                    readOnly
                  />
                </strong>
              </label>
            </div>
            <div className="form-group col-md-12">
              <label>Fecha de Accion</label>
              <input
                type="text"
                className="form-control"
                defaultValue={fecha}
                ref={fechaaccionnuevaRef}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target=".bd-example-modal-xl"
                onClick={obtenerDatos}
              >
                Registrar Gestion y Generar Notificacion
              </button>
            </div>
            <div
              className="modal fade bd-example-modal-xl"
              role="dialog"
              aria-labelledby="myExtraLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content p-2">
                  <Notificacion caso={caso} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FormAcciones;
