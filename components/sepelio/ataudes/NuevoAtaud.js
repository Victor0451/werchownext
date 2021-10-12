import React from "react";
import moment from "moment";

const NuevoAtaud = ({
  usuario,
  errores,
  handleChange,
  handleSubmit,
  handleBlur,
  nombre,
  tipo,
  medidas,
  uso,
  fabricante,
  fecha_alta,
  stock,
  observaciones,
}) => {
  return (
    <div className="container mt-4 border border-dark p-4 alert alert-primary">
      <h2 className="mb-4">
        <strong>
          <u>Agregar Nuevo ataud</u>
        </strong>
      </h2>

      <form className="border border-dark p-4" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Nombre: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={nombre}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errores.nombre && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.nombre}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Tipo: </u>
              </strong>
            </label>
            <select
              className="custom-select"
              name="tipo"
              value={tipo}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option selected>Elige una Opcion</option>
              <option value="BOVEDA">Boveda</option>
              <option value="BOVEDILLA">Bovedilla</option>
              <option value="BORLA">Borla</option>
              <option value="ANGELITO">Angelito</option>
              <option value="ARITOS">Aritos</option>
              <option value="SEMI">Semi</option>
              <option value="EXTRAORDINARIO">Extraordinario</option>
              <option value="EXTRAVACA">Extravaca</option>
              <option value="URNA">Urna</option>
              <option value="ECOLOGICOS">Ecologicos</option>
              <option value="RECUPERADOS">Recuperados</option>
            </select>
            {errores.tipo && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.tipo}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Medidas: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="medidas"
              value={medidas}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errores.medidas && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.medidas}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Uso: </u>
              </strong>
            </label>
            <select
              className="custom-select"
              name="uso"
              value={uso}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option selected>Elige una Opcion</option>
              <option value="TIERRA">Tierra</option>
              <option value="NICHO">Nicho</option>
            </select>
            {errores.uso && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.uso}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Fabricante: </u>
              </strong>
            </label>
            <select
              className="custom-select"
              name="fabricante"
              value={fabricante}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option selected>Elige una Opcion</option>
              <option value="ANSARDI">Ansardi</option>
              <option value="HECCAR">Heccar</option>
              <option value="FIORI">Fiori</option>
              <option value="LOPEZ/C">Lopez/C</option>
              <option value="AIMI">AIMI</option>
              <option value="GRENOP">GRENOP</option>
              <option value="PIEVE">Pieve</option>
            </select>
            {errores.fabricante && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.fabricante}
              </div>
            )}
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Fecha de Alta: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={moment().format("DD/MM/YYYY")}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Stock: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="stock"
              value={stock}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errores.stock && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.stock}
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
            <input
              type="text"
              className="form-control"
              defaultValue={usuario}
              readOnly
            />
          </div>

          <div className="form-group col-md-12">
            <label>
              <strong>
                {" "}
                <u> Observaciones: </u>
              </strong>
            </label>
            <textarea
              rows="3"
              className="form-control"
              name="observaciones"
              value={observaciones}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errores.observaciones && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.observaciones}
              </div>
            )}
          </div>

          <div className="form-group col-md-12">
            <button type="submit" className="btn btn-primary btn-block">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NuevoAtaud;
