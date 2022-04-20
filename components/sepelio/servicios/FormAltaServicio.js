import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Pagos from "../../socios/ficha/Pagos";
import Stock from "../ataudes/Stock";

// Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarAltaServicio from "../../../validacion/validarAltaServicio";
import toastr from "toastr";
import Router from "next/router";
import ListadoAdherentes from "./ListadoAdherentes";
import ListadoParcelas from "../parcelas/ListadoParcelas";
import { ip } from "../../../config/config";
import { registrarHistoria } from "../../../utils/funciones";

const STATE_INICIAL = {
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
  dni_solicitante: "",
};

const FormAltaServicio = ({
  ficha,
  pagos,
  nuevoServicio,
  // DETALLES EXTINTO
  empresa,
  empresaRef,
  dniRef,
  apellidoRef,
  nombreRef,
  edadRef,
  usuario,
  adhs,
  grupo,
}) => {
  let dninuevotitRef = React.createRef();
  let motivoRef = React.createRef();
  let idataudRef = React.createRef();
  let idparcelaRef = React.createRef();

  const [show, guardarShow] = useState(true);
  const [errmotiv, guardarErrMotiv] = useState(null);
  const [erridataud, guardarErrIdAtaud] = useState(null);
  const [error, guardarError] = useState(null);
  const [parcela, guardarParcela] = useState(null);
  const [crem, guardarCrem] = useState(0);
  const [stock, guardarStock] = useState(null);

  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarAltaServicio, nuevoServicio);

  const {
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
    dni_solicitante,
  } = valores;

  const postServicio = async (servicio) => {
    await axios
      .post(`${ip}api/sepelio/servicio/nuevoservicio`, servicio)
      .then((res) => {
        if ((res.status = 200)) {
          toastr.success("Servicio cargado con exito", "ATENCION");

          let accion = `Se registro un nuevo servicio ${servicio.tipo_servicio} ID: ${res.data.idservicio}, extinto: ${servicio.apellido}, ${servicio.nombre}, DNI: ${servicio.dni}`

          registrarHistoria(accion, usuario)

          if (parcela) {
            Router.push({
              pathname: "/sepelio/servicios/impresion",

              query: {
                id: servicio.dni,
                dni_extinto: servicio.dni,
                ficha: servicio.contrato,
                fecha: servicio.fecha_recepcion,
                asignada: 1,
                idparcela: parcela.idparcela,
              },
            });
          } else if (!parcela) {
            Router.push({
              pathname: "/sepelio/servicios/impresion",

              query: {
                id: servicio.dni,
              },
            });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateStockAtaud = async (idataud, stock) => {
    let nustock = stock - 1;
    console.log(nustock);
    await axios
      .put(`${ip}api/sepelio/ataudes/updatestock/${idataud}`, { nustock })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function nuevoServicio() {
    guardarErrMotiv(null);

    const servicio = {
      contrato: ficha.CONTRATO,
      empresa: empresaRef.current.value,
      dni: dniRef.current.value,
      obra_soc: ficha.OBRA_SOC,
      apellido: apellidoRef.current.value,
      nombre: nombreRef.current.value,
      edad: edadRef.current.value,
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
      sucursal: ficha.SUCURSAL,
      estado: 1,
      dni_nuevotitular: "",
      operador: usuario,
      idataud: idataudRef.current.value,
      dni_solicitante: dni_solicitante,
      cremacion: crem,
      liquidado: 0,
    };

    if (ficha.GRUPO && ficha.PLAN !== "P") {
      if (dninuevotitRef.current.value === "") {
        guardarError("Debes ingresar el dni del nuevo titular");
      } else if (dninuevotitRef.current.value.length > 8) {
        guardarError("El numero de dni debe ser de un maximo de 8 digitos");
      } else if (motivoRef.current.value === "") {
        guardarErrMotiv("Debes ingresar una Causa de muerte");
      } else if (idataudRef.current.value === "") {
        guardarErrIdAtaud("Debes seleccionar un ataud");
      } else {
        servicio.dni_nuevotitular = dninuevotitRef.current.value;
        postServicio(servicio);
        updateStockAtaud(servicio.idataud, stock);

      }
    } else if (ficha.GRUPO && ficha.PLAN === "P") {
      if (motivoRef.current.value === "") {
        guardarErrMotiv("Debes ingresar una Causa de muerte");
      } else if (idataudRef.current.value === "") {
        guardarErrIdAtaud("Debes seleccionar un ataud");
      } else {
        servicio.dni_nuevotitular = 11111111;
        postServicio(servicio);
        updateStockAtaud(servicio.idataud, stock);

      }
    } else if (!ficha.GRUPO) {
      if (motivoRef.current.value === "") {
        guardarErrMotiv("Debes ingresar una Causa de muerte");
      } else if (idataudRef.current.value === "") {
        guardarErrIdAtaud("Debes seleccionar un ataud");
      } else if (idataudRef.current.value !== "") {
        postServicio(servicio);
        updateStockAtaud(servicio.idataud, stock);

      }
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

  const cremacion = (flag) => {
    if (flag === "si") {
      guardarCrem(1);
    } else if (flag === "no") {
      guardarCrem(0);
    }
  };

  const noDni = () => {
    document.getElementById("nuevotitular").value = 11111111;
    document.getElementById("nuevotitular").readOnly = true;
    document.getElementById("adh").value = "SIN ADHERENTES";
  };

  const selcasoparcela = (row) => {
    guardarParcela(row.original);

    document.getElementById("parcela").value = `${row.original.parcela}`;
    document.getElementById("mza").value = `${row.original.mza}`;
    document.getElementById("lote").value = `${row.original.lote}`;
  };

  const selcasofrm = (row) => {
    document.getElementById("ataud").value = `${row.original.nombre}`;
    document.getElementById("idataud").value = `${row.original.idataud}`;
    document.getElementById("uso").value = `${row.original.uso}`;
    guardarStock(row.original.stock);
  };

  const selAdh = (row) => {
    document.getElementById(
      "adh"
    ).value = `${row.original.APELLIDOS}, ${row.original.NOMBRES} `;
    document.getElementById("nuevotitular").value = `${row.original.NRO_DOC}`;
  };

  const gastoLuto = (plan, alta) => {


    const anti = parseInt(moment().format('YYYY') - moment(alta).format("YYYY"))

    let gl = 0


    if (plan === "F" || plan === "MA" || plan === "MB" || plan === "MC") {

      gl = 1000

      if (anti <= 2) {

        gl = 1000 + 1000

      } else if (anti > 2 && anti <= 4) {

        gl = 1000 + 2000

      } else if (anti > 4 && anti <= 6) {

        gl = 1000 + 3000

      } else if (anti > 6 && anti <= 8) {

        gl = 1000 + 4000

      } else if (anti > 8) {

        gl = 1000 + 5000

      }

      return gl



    } else if (plan === "MP") {

      if (anti <= 2) {

        gl = 2000 + 1000

      } else if (anti > 2 && anti <= 4) {

        gl = 2000 + 2000

      } else if (anti > 4 && anti <= 6) {

        gl = 2000 + 3000

      } else if (anti > 6 && anti <= 8) {

        gl = 2000 + 4000

      } else if (anti > 8) {

        gl = 2000 + 5000

      }

      return gl


    } else if (plan === "MN") {


      if (anti <= 2) {

        gl = 2500 + 1000

      } else if (anti > 2 && anti <= 4) {

        gl = 2500 + 2000

      } else if (anti > 4 && anti <= 6) {

        gl = 2500 + 3000

      } else if (anti > 6 && anti <= 8) {

        gl = 2500 + 4000

      } else if (anti > 8) {

        gl = 2500 + 5000

      }

      return gl

    } else if (plan === "MO" || plan === "A" || plan === "AB" || plan === "G0" || plan === "U0") {


      if (anti <= 2) {

        gl = 3000 + 1000

      } else if (anti > 2 && anti <= 4) {

        gl = 3000 + 2000

      } else if (anti > 4 && anti <= 6) {

        gl = 3000 + 3000

      } else if (anti > 6 && anti <= 8) {

        gl = 3000 + 4000

      } else if (anti > 8) {

        gl = 3000 + 5000

      }

      return gl


    } else if (plan === "G1" || plan === "U1") {



      if (anti <= 2) {

        gl = 5000 + 1000

      } else if (anti > 2 && anti <= 4) {

        gl = 5000 + 2000

      } else if (anti > 4 && anti <= 6) {

        gl = 5000 + 3000

      } else if (anti > 6 && anti <= 8) {

        gl = 5000 + 4000

      } else if (anti > 8) {

        gl = 5000 + 5000

      }

      return gl


    } else {

      gl = "no"

      return gl

    }

  }

  let tiposervicio = `Plan ${ficha.PLAN}`;
  let fecha = moment().format("DD/MM/YYYY HH:mm:ss");

  return (
    <div className="border border-dark p-4">
      {grupo ? (
        <div className="">
          {grupo.CODIGO === 1001 ||
            grupo.CODIGO === 3444 ||
            grupo.CODIGO === 3666 ||
            grupo.CODIGO === 3777 ||
            grupo.CODIGO === 3888 ||
            grupo.CODIGO === 3999 ||
            grupo.CODIGO === 4004 ||
            grupo.CODIGO === 7777 ||
            grupo.CODIGO === 8500
            ? (
              <div
                className="mt-4 alert alert-danger alert-dismissible border border-dark fade show container"
                role="alert"
              >
                <h3 className="alert-heading mb-4">
                  <strong>
                    <u>ATENCION!!</u>
                  </strong>
                </h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h5>
                  El afiliado esta en estado de morosidad!!!. GRUPO:{" "}
                  {grupo.CODIGO} - {grupo.DESCRIP}
                </h5>
              </div>
            ) : (
              <div className="alert alert-info border border-dark text-center text-uppercase">
                GRUPO: {grupo.CODIGO} - {grupo.DESCRIP}
              </div>
            )}
        </div>
      ) : null}
      <div className="row border border-dark p-4 d-flex justify-content-center">
        <button
          className="btn btn-info btn-sm col-5 mr-1"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Ver Pagos
        </button>
        <a
          href="/sepelio/servicios/nuevo"
          className="btn btn-danger btn-sm col-5 mr1"
        >
          Cancelar
        </a>
      </div>
      
      {
        gastoLuto(`${ficha.PLAN}${ficha.SUB_PLAN}`, ficha.ALTA) === "no" ? null
          : (
            <div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4">
              El gasto de luto por este fallecido es de: ${gastoLuto(`${ficha.PLAN}${ficha.SUB_PLAN}`, ficha.ALTA)}
            </div>
          )
      }


      <form className=" border border-dark mt-4 p-4" onSubmit={handleSubmit}>
        <h1 className="mt-4 mb-4 text-center">
          <strong>
            <u>Formulario De Solicitud De Servicio</u>
          </strong>
        </h1>

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
                defaultValue={empresa}
                ref={empresaRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-4 mb-4">
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
                defaultValue={ficha.CONTRATO}
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
                defaultValue={ficha.NRO_DOC}
                ref={dniRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Obra Social</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Obra Social"
                name="obra_soc"
                defaultValue={ficha.OBRA_SOC}
                readOnly
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
                readOnly
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
                readOnly
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Edad</u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={ficha.EDAD}
                ref={edadRef}
                readOnly
              />
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
                type="number"
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
                type="number"
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
                  id="covid"
                  name="motivo"
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
                  id="otro"
                  name="motivo"
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
                defaultValue={retiro}
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
                  <u>Cremacion</u>
                </strong>
              </label>
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  id="cremsi"
                  name="cremacion"
                  value="option1"
                  onClick={() => cremacion("si")}
                />
                <label className="form-check-label" for="cremsi">
                  Si
                </label>
              </div>
              <div className="form-check ">
                <input
                  className="form-check-input "
                  type="radio"
                  name="cremacion"
                  id="cremno"
                  value="option1"
                  onClick={() => cremacion("no")}
                  defaultChecked={true}
                />
                <label className="form-check-label" for="cremno">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className=" mt-4 mb-4 border border-dark p-4">
          <h2 className="mt-2">
            <strong>
              <u>Datos del Solicitante</u>
            </strong>
          </h2>

          <div className="row">
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
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>DNI del Solicitante:</u>
                </strong>
              </label>
              <input
                type="number"
                maxLength="8"
                className="form-control"
                placeholder="DNI del Solicitante"
                name="dni_solicitante"
                defaultValue={dni_solicitante}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.dni_solicitante && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.dni_solicitante}
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

        <hr />

        <div className="mt-4 mb-4 border border-dark  p-4">
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

        <div className="mt-4 mb-4 border border-dark  p-4">
          <h2 className="mt-2">
            <strong>
              <u>Parcela</u>
            </strong>
          </h2>

          <div className="row d-flex justify-content-center">
            <div className="col-md-2 mt-4 mb-4">
              <label>
                <strong>
                  <u>Parcela:</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Parcela"
                name="parcela"
                id="parcela"
                ref={idparcelaRef}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Manzana:</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Manzana"
                name="mza"
                id="mza"
                readOnly
              />
            </div>

            <div className="col-md-2 mt-4 mb-4">
              <label>
                <strong>
                  <u>Lote:</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Lote"
                name="lote"
                id="lote"
                readOnly
              />
            </div>

            <div className=" col-md-4 mt-4 mb-4">
              <button
                type="button"
                className="mt-4 btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#stockparcela"
              >
                Stock
              </button>
            </div>
          </div>
        </div>

        {ficha.GRUPO ? (
          <div>
            {ficha.PLAN === "P" ? (
              <div className="border border-dark alert alert-info text-center text-uppercase">
                la ficha pertenece a un plan novell
              </div>
            ) : (
              <>
                <hr className="mt-4 mb-4" />
                <div className="row d-flex justify-content-between mt-4 mb-4 border border-dark p-4">
                  <div className="col-md-4">
                    <button
                      className="btn btn-block btn-primary"
                      data-toggle="modal"
                      data-target="#adhs"
                    >
                      Seleccionar Nuevo Titular
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control mr-1 col-4"
                    placeholder="Adherente"
                    name="nuevotitular"
                    id="adh"
                    readOnly
                  />
                  <input
                    type="number"
                    maxLength="8"
                    className="form-control col-3"
                    placeholder="Dni"
                    name="nuevotitular"
                    id="nuevotitular"
                    ref={dninuevotitRef}
                    readOnly
                  />
                  <div className="mt-4 form-check ">
                    {/* <input
                      className="form-check-input "
                      type="checkbox"
                      name="nodni"
                      id="nodni"
                      onClick={() => noDni()}
                    />
                    <label className="form-check-label" for="nodni">
                      Todos los Adherentes de la ficha estan de baja o no posee
                      Adherentes
                    </label> */}
                    <button
                      className="btn btn-info btn-block"
                      onClick={() => noDni()}
                    >
                      Todos los Adherentes de la ficha estan de baja o no posee
                      Adherentes
                    </button>
                  </div>
                </div>
              </>
            )}

            {error && (
              <div className="alert alert-danger text-center p-2 mt-2">
                {error}
              </div>
            )}
          </div>
        ) : null}

        <div className="row border border-dark p-4 d-flex justify-content-center">
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
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Pagos del Afililado
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
              <Pagos pagos={pagos} />
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
              <Stock selcasofrm={selcasofrm} fl={0} historial={[]} />
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

      <div
        className="modal fade"
        id="stockparcela"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Stock Parcelas
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
              <ListadoParcelas selcasoparcela={selcasoparcela} />
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

      <div
        className="modal fade"
        id="adhs"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Listados de Adherentes
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
              <ListadoAdherentes listado={adhs} selAdh={selAdh} />
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

export default FormAltaServicio;
