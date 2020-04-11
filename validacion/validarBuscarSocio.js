export default function validarRegistro(valores) {
  let errores = {};

  if (!valores.socio) {
    errores.socio = "El numero de socio es obligatorio";
  }

  return errores;
}
