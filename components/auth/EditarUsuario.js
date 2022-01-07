import React from "react";
import Spinner from "../layout/Spinner";

const EditarUsuario = ({
  username,
  nombreRef,
  apellidoRef,
  usuarioRef,
  contrasenaRef,
  codigoRef,
  perfilRef,
  editUsuario,
}) => {
  if (!username) return <Spinner />;

  return (
    <div className="container border border-dark list mt-4 p-4 col-md-10">
      <h1 className="  mb-4">
        <strong>
          <u>Editar de Usuarios</u>
        </strong>
      </h1>

      <form className=" mt-4 border border-dark p-4" onSubmit={editUsuario}>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Usuario"
              name="usuario"
              defaultValue={username.usuario}
              ref={usuarioRef}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Contraseña</label>
            <input
              type="text"
              className="form-control"
              placeholder="Contrasena"
              name="contrasena"
              defaultValue={username.contrasena}
              ref={contrasenaRef}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              defaultValue={username.nombre}
              ref={nombreRef}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Apellido</label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              name="apellido"
              defaultValue={username.apellido}
              ref={apellidoRef}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Prerfil</label>
            <input
              type="text"
              className="form-control"
              placeholder="Prerfil"
              name="apellido"
              defaultValue={username.perfil}
              ref={perfilRef}
            />
          </div>

          <div className="form-group col-md-6">
            <label>Codigo</label>
            <input
              type="number"
              className="form-control"
              placeholder="Codigo"
              name="apellido"
              defaultValue={username.codigo}
              ref={codigoRef}

            />
          </div>

          <div className="col-md-12">
            <button type="submit" className="btn btn-primary  btn-block mt-4">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditarUsuario;
