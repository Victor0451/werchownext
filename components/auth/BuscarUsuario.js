import React from "react";

const BuscarUsuario = ({ erroruser, userRef, buscarUserName }) => {
  return (
    <div className="container border border-dark list p-4 mt-4 col-md-8">
      <h2 className="mb-4">
        <strong>
          <u>Buscar Usuario</u>
        </strong>
      </h2>

      <div className="row border border-dark p-4 mt-4">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="mt-4 form-control"
            placeholder="Ingrese Nombre de Usuario"
            name="usuario"
            ref={userRef}
          />
          {erroruser && (
            <div className="mt-2 form-group  alert alert-danger">
              {erroruser}
            </div>
          )}
        </div>
        <div className="form-group col-md-6">
          <button
            className="btn btn-primary btn-block mt-4"
            onClick={buscarUserName}
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuscarUsuario;
