import React from "react";

const LoginUsuario = ({
  handleChange,
  handleSubmit,
  handleBlur,
  nombre,
  apellido,
  usuario,
  contrasena,
  errores,
  error,
}) => {
  return (
    <div className="container ">
      <form
        className=" container mt-4 border border-dark p-5 col-md-6 alert alert-primary "
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4">
          <u>Login</u>
        </h1>
        <div className="row  ">
          <div className="form-group col-md-12">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              name="usuario"
              value={usuario}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.usuario && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.usuario}
              </div>
            )}
          </div>

          <div className="form-group col-md-12">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contrasena"
              name="contrasena"
              value={contrasena}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errores.contrasena && (
              <div className="mt-2 form-group  alert alert-danger">
                {errores.contrasena}
              </div>
            )}
          </div>

          <div className="col-md-12">
            <button type="submit" className="btn btn-primary btn-block mt-4">
              Ingresar
            </button>

            {error && (
              <div className="mt-2 form-group text-center alert alert-danger">
                {error}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default LoginUsuario;
