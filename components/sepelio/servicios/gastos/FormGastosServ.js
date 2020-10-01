import React from "react";
import Spinner from "../../../layout/Spinner";

const FormGastosServ = ({
  servicio,
  observaciones,
  fecha,
  hsinicio,
  hsfin,
  tipogasto,
  importe,
  operador,
  errores,
  handleChange,
  handleSubmit,
  handleBlur,
  importeRef,
}) => {
  if (!servicio) return <Spinner />;

  const handleImport = () => {
    let select = document.getElementById("tipogasto");
    let importe = document.getElementById("importe");

    if (
      select.value === "Instalacion" ||
      select.value === "Conduccion" ||
      select.value === "Limpieza sala" ||
      select.value === "Guardia oficina" ||
      select.value === "Viaje interior" ||
      select.value === "Atencion sala"
    ) {
      importe.value = 0;
      importe.readOnly = true;
    } else {
      importe.value = "";
      importe.readOnly = false;
    }
  };

  return (
    <div className="container mt-4">
      <div className="alert alert-primary border border-dark  p-4">
        <h2 className="mb-4">
          <strong>
            <u>Gastos del Servicio N° {servicio.idservicio}</u>:{" "}
            {servicio.apellido}, {servicio.nombre}
          </strong>
        </h2>

        <div className="mt-4 border border-dark p-4">
          <h4 className="mb-4">
            <strong>
              <u>Cargar Gasto</u>
            </strong>
          </h4>

          <div className="row border border-dark">
            <div className="form-group mt-4 col-md-4">
              <label>Fecha</label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="fecha"
                defaultValue={fecha}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.fecha && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.fecha}
                </div>
              )}
            </div>

            <div className="form-group mt-4 col-md-4">
              <label>Hs Inicio</label>
              <input
                type="time"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsinicio"
                defaultValue={hsinicio}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.hsinicio && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.hsinicio}
                </div>
              )}
            </div>

            <div className="form-group mt-4 col-md-4">
              <label>Hs Fin</label>
              <input
                type="time"
                className="form-control"
                id="exampleFormControlTextarea1"
                name="hsfin"
                defaultValue={hsfin}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errores.hsfin && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.hsfin}
                </div>
              )}
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Tipo de Gasto: </u>
                </strong>
              </label>
              <select
                className="custom-select"
                id="tipogasto"
                name="tipogasto"
                defaultValue={tipogasto}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected value="no">
                  Elige una Opcion
                </option>
                <option value="Retiro Cuerpo">Retiro Cuerpo</option>
                <option value="Instalacion">Instalacion</option>
                <option value="Tramites">Tramites</option>
                <option value="Funebre">Funebre</option>
                <option value="Portacorona">Portacorona</option>
                <option value="Diario">Diario</option>
                <option value="Registro Civil">Registro Civil</option>
                <option value="Impuesto Cementerio">Impuesto Cementerio</option>
                <option value="Parcela">Parcela</option>
                <option value="Comida">Comida</option>
                <option value="Formol">Formol</option>
                <option value="Movilidad">Movilidad</option>
                <option value="Coffee">Coffee</option>
                <option value="Conduccion">Conduccion Autos</option>
                <option value="Limpieza sala">Limpieza de Sala</option>
                <option value="Guardia oficina">Guardia en Oficina</option>
                <option value="Viaje interior">Viaje al Interior</option>
                <option value="Atencion sala">Atencion en Sala</option>
              </select>
              {errores.tipogasto && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.tipogasto}
                </div>
              )}
            </div>

            <div className="form-group col-md-4">
              <label>Importe</label>
              <input
                type="number"
                className="form-control"
                id="importe"
                name="importe"
                defaultValue={importe}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleImport}
                ref={importeRef}
              />
              {errores.importe && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.importe}
                </div>
              )}
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Operador: </u>
                </strong>
              </label>
              <select
                className="custom-select"
                name="operador"
                defaultValue={operador}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option selected value="no">
                  Elige una Opcion
                </option>
                <option value="agareca">agareca</option>
                <option value="juro">juro</option>
                <option value="muro">muro</option>
                <option value="mquiroz">mquiroz</option>
                <option value="jzamorano">jzamorano</option>
                <option value="auxiliar">auxiliar</option>
              </select>
              {errores.operador && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {errores.operador}
                </div>
              )}
            </div>

            <div className="form-group mt-4 col-md-12">
              <label>Observaciones</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="observaciones"
                defaultValue={observaciones}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group mt-4 col-md-12">
              <button
                className="btn btn-block btn-primary"
                onClick={handleSubmit}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormGastosServ;
