import React from "react";

const NuevaNoticia = ({
  errores,
  handleChange,
  handleSubmit,
  handleBlur,
  error,
  noticia,
  operadorRef,
  fechaRef,
  today,
  usuario,
}) => {
  let userData = JSON.parse(usuario);

  return (
    <div className="container mt-4 border border-dark p-4 alert alert-primary">
      <div className="">
        <h2 className="mt-4">
          <u>Ingresar Noticia</u>
        </h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label>Fecha</label>
              <input
                type="text"
                className="form-control"
                value={today}
                name="fecha"
                ref={fechaRef}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-md-6">
              <label>Operador</label>
              <input
                type="text"
                className="form-control"
                readOnly
                name="operador"
                ref={operadorRef}
                value={userData.usuario}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-md-12 mt-4">
              <textarea
                className="form-control"
                placeholder="Nueva Noticia"
                rows="3"
                name="noticia"
                value={noticia}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errores.noticia && (
                <div className="mt-2 form-group  alert alert-danger">
                  {errores.noticia}
                </div>
              )}
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4 btn-block">
            Registrar Noticia
          </button>
        </form>
      </div>
    </div>
  );
};

export default NuevaNoticia;
