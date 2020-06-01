export default function validarAltaServicio(valores) {
  let errores = {};

  if (!valores.empresa) {
    errores.empresa = "Este campo es obligatorio";
  }
  if (!valores.dni) {
    errores.dni = "Este campo es obligatorio";
  }
  if (!valores.nombre) {
    errores.nombre = "Este campo es obligatorio";
  }
  if (!valores.apellido) {
    errores.apellido = "Este campo es obligatorio";
  }
  if (!valores.edad) {
    errores.edad = "Este campo es obligatorio";
  }
  if (!valores.fechafallecimiento) {
    errores.fechafallecimiento = "La fecha de fallecimiento es obligatorio";
  }
  if (!valores.lugarfallecimiento) {
    errores.lugarfallecimiento = "El lugar de fallecimiento es obligatorio";
  }

  if (!valores.tiposervicio) {
    errores.tiposervicio = "El tipo de servicio es obligatorio";
  }

  if (!valores.casamortuaria) {
    errores.casamortuaria = "La casa mortuaria es obligatorio";
  }

  if (!valores.fechainhumacion) {
    errores.fechainhumacion = "La fecha de inhumacion es obligatorio";
  }

  if (!valores.horainhumacion) {
    errores.horainhumacion = "La hora de inhumacion es obligatorio";
  }

  if (!valores.cementerio) {
    errores.cementerio = "Este campo es obligatorio";
  }

  if (!valores.tiporetirocuerpo) {
    errores.tiporetirocuerpo = "Este campo es obligatorio";
  }

  if (!valores.tipotraslado) {
    errores.tipotraslado = "Este campo es obligatorio";
  }

  if (!valores.tipotramites) {
    errores.tipotramites = "Este campo es obligatorio";
  }

  if (!valores.tipoaviso) {
    errores.tipoaviso = "Este campo es obligatorio";
  }

  if (!valores.tipocarrozzafu) {
    errores.tipocarrozzafu = "Este campo es obligatorio";
  }

  if (!valores.tipoportacor) {
    errores.tipoportacor = "Este campo es obligatorio";
  }

  if (!valores.tipoautoduel) {
    errores.tipoautoduel = "Este campo es obligatorio";
  }

  if (!valores.tiposalavel) {
    errores.tiposalavel = "Este campo es obligatorio";
  }
  return errores;
}
