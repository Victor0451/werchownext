import React from 'react';

const RegistrarUsuario = ({ handleChange, handleSubmit, handleBlur, nombre, apellido, usuario, contrasena, errores }) => {
    return (
        <div className="container">

            <h1>Registro de Usuarios</h1>

            <form className=" mt-4 border p-2" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col-md-6">
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
                        {errores.usuario && <div className="mt-2 form-group  alert alert-danger">{errores.usuario}</div>}

                    </div>


                    <div className="form-group col-md-6">
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
                        {errores.contrasena && <div className="mt-2 form-group  alert alert-danger">{errores.contrasena}</div>}
                    </div>

                    <div className="form-group col-md-6">
                        <label>Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errores.nombre && <div className="mt-2 form-group  alert alert-danger">{errores.nombre}</div>}
                    </div>

                    <div className="form-group col-md-6">
                        <label>Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Apellido"
                            name="apellido"
                            value={apellido}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errores.apellido && <div className="mt-2 form-group  alert alert-danger">{errores.apellido}</div>}
                    </div>


                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary  btn-block mt-4">Registrar</button>
                    </div>
                </div>
            </form>


        </div>
    );
};


export default RegistrarUsuario;
