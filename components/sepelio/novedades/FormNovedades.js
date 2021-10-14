import React from "react";
import moment from "moment";

const FormNovedades = ({
  registrarNovedad,
  descripcionRef,
  userData,
  errores,
}) => {
  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <h2>
        <strong>
          <u>Ingresar Novedades</u>
        </strong>
      </h2>

      <div className="row border border-dark p-4">
        {errores ? (
          <div className="col-md-12 border border-dark mt-4 alert alert-danger text-center text-uppercase">
            {errores}
          </div>
        ) : null}

        <div className="col-md-12">
          <label>
            <u>Descripcion</u>
          </label>
          <textarea
            rows="3"
            className="form-control"
            ref={descripcionRef}
            placeholder="Nombre"
          />
        </div>

        <div className="col-md-3 mt-4">
          <label>
            <u>Operador</u>
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={userData}
            readOnly
          />
        </div>

        <div className="col-md-3 mt-4">
          <label>
            <u>Fecha</u>
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={moment().format("DD/MM/YYYY HH:mm:ss")}
            readOnly
          />
        </div>

        <div className="mt-4 col-md-3">
          <button
            onClick={registrarNovedad}
            className=" mt-4 btn btn-block btn-primary"
          >
            Registrar
          </button>
        </div>

        <div className="mt-4 col-md-3">
          <a href="/" className=" mt-4 btn btn-block btn-danger">
            Cancelar
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormNovedades;
