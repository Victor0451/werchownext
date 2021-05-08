import React from "react";
import Spinner from "../../../layout/Spinner";
import moment from "moment";

const ImpresionNovell = ({ novell }) => {
  if (!novell) return <Spinner />;

  return (
    <div className="container mt-2 alert alert-dark border border-dark p-4">
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
          <h6 className=" mt-1">
            <strong>
              <u>Fecha de Recepcion</u>: {novell.fecha_recepcion}
            </strong>
          </h6>
          <h6 className=" mt-4">
            <strong>
              <u>Socio N°</u>:
            </strong>
          </h6>
        </div>

        <div className="col-md-12 mt-2 border border-dark p-2">
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
            defaultValue={novell.servicio}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.monto}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.monto_letra}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.anticipo}
          />
        </div>
        <div className="col-md-2 mt-2 border border-dark p-2">
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
            name="anticipo"
            defaultValue={novell.anticipo_letra}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Cuota Saldo </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Cuota"
            name="cuota"
            defaultValue={novell.cuotas}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Saldo </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Cuota"
            name="cuota"
            defaultValue={novell.cuotasaldo}
          />
        </div>
        <div className="col-md-2 mt-2 border border-dark p-2">
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
            name="anticipo"
            defaultValue={novell.cuotasaldo_letra}
          />
        </div>
        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.gastos_adm}
          />
        </div>
        <div className="col-md-2 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Cuota Mantenimiento </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number"
            placeholder="Gastos Adm."
            name="cuotamantenimiento"
            defaultValue={novell.cuota_mantenimiento}
          />
        </div>
      </div>

      <hr className="mt-2 mb-4" />

      <h4>
        <strong>
          <u>Datos del Solicitante</u>
        </strong>
      </h4>
      <div className="row ">
        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.apellido_sol}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.nombre_sol}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.dni_sol}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.estcivil_sol}
          />
        </div>

        <div className="col-md-3 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Fecha de Nacimiento </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            name="fecnacsol"
            defaultValue={moment(novell.fecha_nac_sol).format("DD/MM/YYYY")}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.dom_sol}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.domnum_sol}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.piso_sol}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.barrio_sol}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.localidad_sol}
          />
        </div>
        <div className="col-md-4 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Nacionalidad</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Localidad"
            name="nacionalidadsol"
            defaultValue={novell.nacionalidad_sol}
          />
        </div>
        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.codpostal_sol}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.telefono_sol}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.movil_sol}
          />
        </div>
      </div>

      <hr className="mt-2 mb-4" />

      <h4>
        <strong>
          <u>Datos del Beneficiario</u>
        </strong>
      </h4>

      <div className="row">
        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.apellido_ben}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.nombre_ben}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> DNI </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="number    "
            placeholder="DNI"
            maxLength="8"
            name="dniben"
            defaultValue={novell.dni_ben}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.estcivil_ben}
          />
        </div>

        <div className="col-md-3 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Fecha de Nacimiento </u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            name="fecnacben"
            defaultValue={moment(novell.fecha_nac_ben).format("DD/MM/YYYY")}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.dom_ben}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.domnum_ben}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.piso_ben}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.barrio_ben}
          />
        </div>

        <div className="col-md-4 mt-2 border border-dark p-2">
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
            defaultValue={novell.localidad_ben}
          />
        </div>
        <div className="col-md-4 mt-2 border border-dark p-2">
          <label>
            {" "}
            <strong>
              <u> Nacionalidad</u>:
            </strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Localidad"
            name="nacionalidadben"
            defaultValue={novell.nacionalidad_ben}
          />
        </div>
        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.codpostal_ben}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.telefono_ben}
          />
        </div>

        <div className="col-md-2 mt-2 border border-dark p-2">
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
            defaultValue={novell.movil_ben}
          />
        </div>
      </div>

      <div className="border border-dark mt-4">
        <div className="row d-flex justify-content-between p-2">
          <div className="col-4 text-center mt-4">
            <br />
            <p>-----------------------------</p>
            <label>Firma</label>
          </div>
          <div className="col-4 text-center mt-4">
            <br />
            <p>-----------------------------</p>
            <label>Aclaracion</label>
          </div>
          <div className="col-4 text-center mt-4">
            <br />
            <p>-----------------------------</p>
            <label>N° de documento</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpresionNovell;
