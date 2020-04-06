export default function validarRegistro(valores) {

    let errores = {}

    if (!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }

    if (!valores.apellido) {
        errores.apellido = "El apellido es obligatorio"
    }


    if (!valores.usuario) {
        errores.usuario = "El usuario es obligatorio"
    }


    if (!valores.contrasena) {
        errores.contrasena = "El contraseña es obligatoria"
    }

    return errores
}
