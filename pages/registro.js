import React from 'react';
import Layout from "../components/layout/Layout";
import RegistrarUsuario from '../components/auth/RegistrarUsuario'

// Validaciones
import useValidacion from '../hooks/useValidacion'
import validarRegistro from '../validacion/validarRegistro'

const STATE_INICIAL = {
    usuario: '',
    contrasena: '',
    nombre: '',
    apellido: ''
}


const Registro = () => {

    const {
        valores,
        errores,
        submitForm,
        handleChange,
        handleSubmit,
        handleBlur
    } = useValidacion(STATE_INICIAL, validarRegistro, crearRegistro)


    const { nombre, apellido, usuario, contrasena } = valores;


    function crearRegistro() {

    }

    return (
        <Layout>

            <RegistrarUsuario
                nombre={nombre}
                apellido={apellido}
                usuario={usuario}
                contrasena={contrasena}
                errores={errores}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
            />

        </Layout>
    );
};


export default Registro;