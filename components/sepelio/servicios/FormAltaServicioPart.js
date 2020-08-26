import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import Stock from "../ataudes/Stock";

// Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarAltaServicioPart from "../../../validacion/validarAltaServicioPart";
import toastr from "toastr";
import Router from "next/router";

const STATE_INICIAL = {
  nombre: "",
  apellido: "",
  dni: "",
  edad: "",
  fechafallecimiento: "",
  lugarfallecimiento: "",
  casamortuaria: "",
  fechainhumacion: "",
  horainhumacion: "",
  cementerio: "",
  altura: "",
  peso: "",
  motivo: "",
  retiro: "",
  solicitado: "",
  parentesco: "",
};

const FormAltaServicioPart = ({ nuevoServicio, empresaRef, usuario }) => {
  const motivoRef = React.createRef();
  let idataudRef = React.createRef();

  const [show, guardarShow] = useState(true);
  const [errmotiv, guardarErrMotiv] = useState(null);
  const [erridataud, guardarErrIdAtaud] = useState(null);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaServicioPart, nuevoServicio);

  const {
    nombre,
    apellido,
    dni,
    edad,
    fechafallecimiento,
    lugarfallecimiento,
    casamortuaria,
    fechainhumacion,
    horainhumacion,
    cementerio,
    altura,
    peso,
    motivo,
    retiro,
    solicitado,
    parentesco,
  } = valores;

  async function nuevoServicio() {
    const servicio = {
      contrato: 0,
      empresa: "Werchow",
      dni: dni,
      apellido: apellido,
      nombre: nombre,
      edad: edad,
      fecha_fallecimiento: fechafallecimiento,
      lugar_fallecimiento: lugarfallecimiento,
      tipo_servicio: tiposervicio,
      casa_mortuaria: casamortuaria,
      fecha_inhumacion: fechainhumacion,
      hora_inhumacion: horainhumacion,
      cementerio: cementerio,
      altura: altura,
      peso: peso,
      motivo: motivoRef.current.value,
      retiro: retiro,
      solicitado: solicitado,
      parentesco: parentesco,
      fecha_recepcion: moment().format("YYYY-MM-DD HH:mm:ss"),
      sucursal: "Casa Central",
      estado: 1,
      operador: usuario,
      idataud: idataudRef.current.value,
    };

    if (motivoRef.current.value === "") {
      guardarErrMotiv("Debes ingresar una Causa de muerte");
    } else if (idataudRef.current.value === "") {
      guardarErrIdAtaud("Debes seleccionar un ataud");
    } else {
      console.log(servicio);

      await axios
        .post(
          `http://190.231.32.232:5002/api/sepelio/servicio/nuevoservicio`,
          servicio
        )
        .then((res) => {
          if ((res.status = 200)) {
            toastr.success("Servicio cargado con exito", "ATENCION");

            Router.push({
              pathname: "/sepelio/servicios/impresion",
              query: { id: servicio.dni },
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const causamuerte = (flag) => {
    guardarShow(true);

    console.log(flag);
    if (flag === "covid") {
      setTimeout(() => {
        document.getElementById("motivo").value = "COVID 19";
        document.getElementById("motivo").readOnly = true;
      }, 200);
    } else if (flag === "otro") {
      setTimeout(() => {
        document.getElementById("motivo").readOnly = false;
        document.getElementById("motivo").value = "";
      }, 200);
    }
  };

  const selcasofrm = (row) => {
    console.log(row);

    document.getElementById("ataud").value = `${row.original.nombre}`;
    document.getElementById("idataud").value = `${row.original.idataud}`;
    document.getElementById("uso").value = `${row.original.uso}`;
  };

  let tiposervicio = `Servicio Particular`;
  let fecha = moment().format("DD/MM/YYYY HH:mm:ss");
  return (
    <div className="mt-4 alert alert-primary border border-dark p-4">
      <form className=" p-4" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between">
          <h1 className=" mb-4">
            <strong>
              <u>Formulario De Solicitud De Servicio</u>
            </strong>
          </h1>
          <div>
            <a
              href="/sepelio/servicios/nuevo"
              className="btn btn-danger   mr-1"
            >
              Cancelar
            </a>
          </div>
        </div>
        <div className=" border border-dark p-4">
          <div className="d-flex justify-content-between">
            <h2 className="mt-4 mb-4 col-8">
              <strong>
                <u>Datos del Extinto</u>
              </strong>
            </h2>
            <div className="mt-4 mb-4 col-4">
              <label>
                <strong>
                  <u>Fecha de Recepcion</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Empresa"
                name="responsable"
                defaultValue={fecha}
                readOnly
              />
            </div>
          </div>

          <hr className="mt-4 mb-4" />

          <div className="row">
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
                defaultValue="Werchow"
                ref={empresaRef}
                readOnly
              />
            </div>

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
                defaultValue={dni}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.dni && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.dni}
                </div>
              )}
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
                defaultValue={apellido}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.apellido && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.apellido}
                </div>
              )}
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
                defaultValue={nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.nombre && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.nombre}
                </div>
              )}
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
                name="edad"
                defaultValue={edad}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.edad && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.edad}
                </div>
              )}
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha de Fallecimiento"
                name="fechafallecimiento"
                defaultValue={fechafallecimiento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.fechafallecimiento && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.fechafallecimiento}
                </div>
              )}
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
                name="lugarfallecimiento"
                defaultValue={lugarfallecimiento}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.lugarfallecimiento && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.lugarfallecimiento}
                </div>
              )}
            </div>

            <div className="col-md-4 mt-4 mb-4">
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
                value={altura}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.altura && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.altura}
                </div>
              )}
            </div>

            <div className="col-md-4 mt-4 mb-4">
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
                value={peso}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.peso && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.peso}
                </div>
              )}
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
                placeholder="Tipo de Servicio"
                name="tiposervicio"
                defaultValue={tiposervicio}
                onChange={handleChange}
                onBlur={handleBlur}
                readOnly
              />
              {errores.tiposervicio && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.tiposervicio}
                </div>
              )}
            </div>

            <div className="col-md-2 mt-4 mb-4">
              <label>
                <strong>
                  <u>Motivo</u>
                </strong>
              </label>
              <br />
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  name="exampleRadios"
                  id="covid"
                  value="option1"
                  onClick={() => causamuerte("covid")}
                />
                <label className="form-check-label" for="covid">
                  COVID 19
                </label>
              </div>

              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  name="exampleRadios"
                  id="otro"
                  value="option1"
                  onClick={() => causamuerte("otro")}
                  defaultChecked={true}
                />
                <label className="form-check-label" for="otro">
                  Otro
                </label>
              </div>
            </div>

            {show === true ? (
              <div className="col-md-6 mt-4 mb-4">
                <label>
                  <strong>
                    <u>Detalle Causa de Muerte</u>
                  </strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Motivo"
                  name="motivo"
                  id="motivo"
                  ref={motivoRef}
                />
                {errmotiv && (
                  <div className="alert alert-danger text-center p-2 mt-2">
                    {errmotiv}
                  </div>
                )}
              </div>
            ) : null}

            <div className="col-md-4 mt-4 mb-4">
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
                value={retiro}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.retiro && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.retiro}
                </div>
              )}
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
                name="casamortuaria"
                defaultValue={casamortuaria}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.casamortuaria && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.casamortuaria}
                </div>
              )}
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
                name="fechainhumacion"
                defaultValue={fechainhumacion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.fechainhumacion && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.fechainhumacion}
                </div>
              )}
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
                name="horainhumacion"
                defaultValue={horainhumacion}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.horainhumacion && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.horainhumacion}
                </div>
              )}
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
                defaultValue={cementerio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.cementerio && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.cementerio}
                </div>
              )}
            </div>
            <div className="col-md-4 mt-4 mb-4">
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
                defaultValue={solicitado}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.solicitado && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.solicitado}
                </div>
              )}
            </div>
            <div className="form-group col-md-4 mt-4">
              <label>
                <strong>
                  {" "}
                  <u> Parentesco: </u>
                </strong>
              </label>
              <select
                className="custom-select"
                name="parentesco"
                defaultValue={parentesco}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected value="no">
                  Elige una Opcion
                </option>
                <option value="conyugue">Cónyugue</option>
                <option value="hijo/a">Hijo/a</option>
                <option value="otro">Otro</option>
              </select>
              {errores.parentesco && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.parentesco}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4 border border-dark alert alert-primary p-4">
          <h2 className="mt-2">
            <strong>
              <u>Ataud</u>
            </strong>
          </h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-2 mt-4 mb-4">
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
                ref={idataudRef}
                readOnly
              />
              {erridataud && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {erridataud}
                </div>
              )}
            </div>

            <div className="col-md-4 mt-4 mb-4">
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
                readOnly
              />
            </div>

            <div className="col-md-2 mt-4 mb-4">
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
                readOnly
              />
            </div>

            <div className=" col-md-4 mt-4 mb-4">
              <button
                className="mt-4 btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#stockataud"
              >
                Stock
              </button>
            </div>
          </div>
        </div>

        <div className="container row  p-4 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary col-5 mr-1">
            Registrar
          </button>
          <a
            href="/sepelio/servicios/nuevo"
            className="btn btn-danger  col-5 mr1"
          >
            Cancelar
          </a>
        </div>
      </form>

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
              <Stock selcasofrm={selcasofrm} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
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

export default FormAltaServicioPart;
