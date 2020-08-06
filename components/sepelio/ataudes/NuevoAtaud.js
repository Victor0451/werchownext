import React from "react";

const NuevoAtaud = () => {
  return (
    <div className="container mt-4 border border-dark p-4 alert alert-primary">
      <h2 className="mb-4">
        <strong>
          <u>Agregar Nuevo ataud</u>
        </strong>
      </h2>

      <form className="border border-dark p-4">
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
              //ref={}
              readOnly
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Tipo: </u>
              </strong>
            </label>
            <select className="custom-select">
              <option selected>Elige una Opcion</option>
              <option value="BOVEDA">Boveda</option>
              <option value="BOVEDILLA">Bovedilla</option>
              <option value="BORLA">Borla</option>
              <option value="ANGELITO">Angelito</option>
              <option value="ARITOS">Aritos</option>
              <option value="EXTRAORDINARIO">Extraordinario</option>
              <option value="EXTRACAVA">Extracava</option>
              <option value="URNA">Urna</option>
              <option value="ECOLOGICOS">Ecologicos</option>
              <option value="RECUPERADOS">Recuperados</option>
            </select>
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
              //ref={}
              readOnly
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Uso: </u>
              </strong>
            </label>
            <select className="custom-select">
              <option selected>Elige una Opcion</option>
              <option value="TIERRA">Tierra</option>
              <option value="NICHO">Nicho</option>
            </select>
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Fabricante: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              //ref={}
              readOnly
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Codigo De Precios: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              //ref={}
              readOnly
            />
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
              //ref={}
              readOnly
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Uso: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              //ref={}
              readOnly
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
              //ref={}
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
              //ref={}
              readOnly
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NuevoAtaud;
