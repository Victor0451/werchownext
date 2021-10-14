import React from "react";

const FormNuevoPersonal = ({
  rol,
  apellidoRef,
  nombreRef,
  dniRef,
  altaRef,
  rolRef,
  errores,
  regPersonal,
}) => {
  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <h2>
        <strong>
          <u>Nuevo Personal</u>
        </strong>
      </h2>

      <div className="mt-4 row border border-dark p-4">
        <div className="col-md-4">
          <label>
            <u>Apellido</u>
          </label>
          <input
            type="text"
            className="form-control"
            ref={apellidoRef}
            placeholder="Apellido"
          />
        </div>
        <div className="col-md-4">
          <label>
            <u>Nombre</u>
          </label>
          <input
            type="text"
            className="form-control"
            ref={nombreRef}
            placeholder="Nombre"
          />
        </div>

        <div className="col-md-4">
          <label>
            <u>DNI</u>
          </label>
          <input
            type="text"
            className="form-control"
            ref={dniRef}
            placeholder="DNI"
          />
        </div>

        <div className="mt-4 col-md-4">
          <label>
            <u>Fecha de Alta</u>
          </label>
          <input type="date" className="form-control" ref={altaRef} />
        </div>

        {rol ? (
          <div className="mt-4 col-md-4">
            <label>
              <u>Rol</u>
            </label>

            <select className="custom-select" ref={rolRef}>
              <option value="no">Seleccionar Rol...</option>
              {rol.map((r, index) => (
                <option key={index} value={r.value}>
                  {r.value}
                </option>
              ))}
            </select>
          </div>
        ) : null}
      </div>

      {errores ? (
        <div className="mt-4 mb-4 alert alert-danger border border-dark text-center text-uppercase">
          {errores}
        </div>
      ) : null}

      <div className="mt-4 row border border-dark p-4">
        <div className="col-md-6">
          <button className="btn btn-primary btn-block" onClick={regPersonal}>
            Registrar
          </button>
        </div>

        <div className="col-md-6">
          <a
            href="/gestion/personal/legajovirtual"
            className="btn btn-danger btn-block"
          >
            Cancelar
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormNuevoPersonal;
