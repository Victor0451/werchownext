import React from "react";
import moment from "moment";

const AltaNovell = ({
  servicio,
  monto,
  montoletra,
  montosaldo,
  montosaldoletra,
  anticipo,
  anticipoletra,
  cuota,
  gastosadm,
  cuotamantenimiento,
  apellidosol,
  nombresol,
  dnisol,
  estcivilsol,
  fecnacsol,
  domsol,
  domnumsol,
  pisosol,
  barriosol,
  localidadsol,
  nacionalidadsol,
  codpostalsol,
  telefonosol,
  movilsol,
  apellidoben,
  nombreben,
  dniben,
  estcivilben,
  fecnacben,
  domben,
  domnumben,
  pisoben,
  barrioben,
  localidadben,
  nacionalidadben,
  codpostalben,
  telefonoben,
  movilben,
  errores,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="container list mt-4 alert alert-dark border border-dark p-4">
      <div className="row">
        <div className="col-md-3 border border-dark p-2 text-center">
          <img src="/img/logo.png" className="werchowlogo" />
        </div>

        <div className="col-md-5 border border-dark p-2 text-center">
          <h4>
            <strong>
              <u>Solicitud de adhesion al plan novell</u>
            </strong>
          </h4>
        </div>

        <div className="col-md-4 border border-dark p-2">
          <h6 className="mt-3">
            <strong>
              <u>Fecha de Recepcion</u>: {moment().format("DD/MM/YYYY")}
            </strong>
          </h6>
        </div>

        <div className="col-md-12 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Servicio </u>
            </strong>
          </label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="DETALLE DEL SERVICIO"
            name="servicio"
            value={servicio}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.servicio && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.servicio}
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Monto Total en $ </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="$"
            name="monto"
            value={monto}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.monto && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.monto}
            </div>
          )}
        </div>

        <div className="col-md-4 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Son </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Monto"
            name="montoletra"
            value={montoletra}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.montoletra && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.montoletra}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Anticipo </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Anticipo"
            name="anticipo"
            value={anticipo}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.anticipo && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.anticipo}
            </div>
          )}
        </div>

        <div className="col-md-4 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Son </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Anticipo"
            name="anticipoletra"
            value={anticipoletra}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.anticipoletra && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.anticipoletra}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Cuota Saldo </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Cuota Saldo"
            name="cuota"
            value={cuota}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.cuota && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.cuota}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Monto Saldo </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Monto Saldo"
            name="montosaldo"
            value={montosaldo}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.montosaldo && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.montosaldo}
            </div>
          )}
        </div>

        <div className="col-md-4 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Son </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Monto Saldo"
            name="montosaldoletra"
            value={montosaldoletra}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.montosaldoletra && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.montosaldoletra}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Gastos Adm. </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Gastos Adm."
            name="gastosadm"
            value={gastosadm}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.gastosadm && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.gastosadm}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Cuota Mantenimiento </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Cuota Mantenimiento"
            name="cuotamantenimiento"
            value={cuotamantenimiento}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.cuotamantenimiento && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.cuotamantenimiento}
            </div>
          )}
        </div>
      </div>
      <hr className="mt-4 mb-4" />

      <h4>
        <strong>
          <u>Datos del Solicitante</u>
        </strong>
      </h4>
      <div className="row ">
        <div className="col-md-4 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Apellido </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Apellido"
            name="apellidosol"
            value={apellidosol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.apellidosol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.apellidosol}
            </div>
          )}
        </div>

        <div className="col-md-4 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Nombre </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Nombre"
            name="nombresol"
            value={nombresol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.nombresol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.nombresol}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> DNI </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="DNI"
            maxLength="8"
            name="dnisol"
            value={dnisol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.dnisol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.dnisol}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Estado Civil </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Estado Civil"
            name="estcivilsol"
            value={estcivilsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.estcivilsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.estcivilsol}
            </div>
          )}
        </div>

        <div className="col-md-3 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Fecha de Nacimiento </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="date"
            name="fecnacsol"
            value={fecnacsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.fecnacsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.fecnacsol}
            </div>
          )}
        </div>

        <div className="col-md-8 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Domicilio</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Domicilio"
            name="domsol"
            value={domsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.domsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.domsol}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> N°</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="N°"
            name="domnumsol"
            value={domnumsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.domnumsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.domnumsol}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Piso</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Piso"
            name="pisosol"
            value={pisosol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.pisosol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.pisosol}
            </div>
          )}
        </div>

        <div className="col-md-6 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Barrio</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Barrio"
            name="barriosol"
            value={barriosol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.barriosol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.barriosol}
            </div>
          )}
        </div>

        <div className="col-md-6 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Localidad</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Localidad"
            name="localidadsol"
            value={localidadsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.localidadsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.localidadsol}
            </div>
          )}
        </div>

        <div className="col-md-6 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Nacionalidad</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Nacionalidad"
            name="nacionalidadsol"
            value={nacionalidadsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.nacionalidadsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.nacionalidadsol}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Codigo Postal</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="Number"
            placeholder="Codigo Postal"
            name="codpostalsol"
            value={codpostalsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.codpostalsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.codpostalsol}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Telefono</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Telefono"
            name="telefonosol"
            value={telefonosol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.telefonosol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.telefonosol}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Celular</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Celular"
            name="movilsol"
            value={movilsol}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.movilsol && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.movilsol}
            </div>
          )}
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      <h4>
        <strong>
          <u>Datos del Beneficiario</u>
        </strong>
      </h4>

      <div className="row">
        <div className="col-md-4 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Apellido </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Apellido"
            name="apellidoben"
            value={apellidoben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.apellidoben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.apellidoben}
            </div>
          )}
        </div>

        <div className="col-md-4 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Nombre </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Nombre"
            name="nombreben"
            value={nombreben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.nombreben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.nombreben}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> DNI </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="DNI"
            maxLength="8"
            name="dniben"
            value={dniben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.dniben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.dniben}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Estado Civil </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Estado Civil"
            name="estcivilben"
            value={estcivilben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.estcivilben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.estcivilben}
            </div>
          )}
        </div>

        <div className="col-md-3 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Fecha de Nacimiento </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="date"
            name="fecnacben"
            value={fecnacben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.fecanacben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.fecanacben}
            </div>
          )}
        </div>

        <div className="col-md-8 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Domicilio</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Domicilio"
            name="domben"
            value={domben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.domben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.domben}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> N°</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="N°"
            name="domnumben"
            value={domnumben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.domnumben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.domnumben}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Piso</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Piso"
            name="pisoben"
            value={pisoben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.pisoben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.pisoben}
            </div>
          )}
        </div>

        <div className="col-md-6 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Barrio</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Barrio"
            name="barrioben"
            value={barrioben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.barrioben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.barrioben}
            </div>
          )}
        </div>

        <div className="col-md-6 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Localidad</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Localidad"
            name="localidadben"
            value={localidadben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.localidadben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.localidadben}
            </div>
          )}
        </div>

        <div className="col-md-6 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Nacionalidad</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Nacionalidad"
            name="nacionalidadben"
            value={nacionalidadben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.nacionalidadben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.nacionalidadben}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Codigo Postal</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="Number"
            placeholder="Codigo Postal"
            name="codpostalben"
            value={codpostalben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.codpostalben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.codpostalben}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Telefono</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Telefono"
            name="telefonoben"
            value={telefonoben}
            onBlur={handleBlur}
            onChange={handleChange}
          />

          {errores.telefonoben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.telefonoben}
            </div>
          )}
        </div>

        <div className="col-md-2 mt-4 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Celular</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Celular"
            name="movilben"
            value={movilben}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errores.movilben && (
            <div className="alert alert-danger text-center p-2 mt-2">
              {errores.movilben}
            </div>
          )}
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      <div className="row mt-4">
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            Regristrar
          </button>
        </div>

        <div className="col-md-6">
          <a href="#" className="btn btn-danger btn-block">
            Cancelar
          </a>
        </div>
      </div>
    </div>
  );
};

export default AltaNovell;
