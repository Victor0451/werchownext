import React from "react";

const FormSubirArchivo = ({ error }) => {
  return (
    <div className="container">
      <form className=" mt-4 alert alert-primary border border-dark">
        <h2>
          <strong>
            <u>Legajo Virtual</u>
          </strong>
        </h2>
        <div className="mt-4 form-group col-md-6">
          <label>
            <strong>
              {" "}
              <u> Subir Archivo: </u>
            </strong>
          </label>
          <input type="file" className="form-control" />

          {error && (
            <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
              {error}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormSubirArchivo;
