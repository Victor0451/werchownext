import React from "react";
import ListadoPracticas from "./ListadoPracticas";
import ListadoPracticasAgregadas from "./ListadoPracticasAgregadas";

const ModalPractica = ({
  socio,
  sucursales,
  espec,
  medicos,
  especialidadRefP,
  sucursalRefP,
  medicoRefP,
  traerMedicosPorSuc,
  traerDetalleMedSelec,
  detalleMed,
  practicas,
  agregarPractica,
  pracSocio,
  eliminarPracticaPrecargado,
  calcularTotalPracticas,
  registrarPracticaUso,
  cantidadRefP,
  nFisio,
  priUso
}) => {

  return (
    <div
      className="modal fade"
      id="modalPractica"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Orden de Consulta para: {socio.APELLIDOS}, {socio.NOMBRES}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-4">

            <div className="alert alert-info border border-dark text-center text-uppercase mb-4">
              Esta es la orden de consulta n° {priUso + 1} del mes
            </div>

            <div className="row border border-dark list p-4">

              {!sucursales ? (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Cargando Sucursales...</div>
              ) :
                (
                  <div className="col-md-4">
                    <label>
                      Sucursal:
                    </label>

                    <select className="custom-select" ref={sucursalRefP}>
                      <option value="no" >Selecciona una opcion</option>
                      {sucursales.map((s, index) => (
                        <option key={index} value={s.codigo}>{s.sucursal}</option>
                      ))}
                    </select>
                  </div>
                )}

              {!espec ? (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Selecciona una Sucursal Para Traer las Especialidades</div>
              ) :
                (
                  <div className="col-md-4">
                    <label>
                      Especialidades:
                    </label>

                    <select className="custom-select" ref={especialidadRefP} onChange={() => traerMedicosPorSuc('P')}>
                      <option selected value="no">Selecciona una opcion</option>
                      {espec.map((s, index) => (
                        <option key={index} value={s.ESPECIAL}>{s.NOMBRE}</option>
                      ))}
                    </select>
                  </div>
                )}

              {!medicos ? (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Selecciona una Especialidad Para Traer Medicos</div>
              ) :
                (
                  <div className="col-md-4">
                    <label>
                      Medicos:
                    </label>
                    <select className="custom-select" ref={medicoRefP} onChange={() => traerDetalleMedSelec('P')} >
                      <option selected value="no">Selecciona una opcion</option>
                      {medicos.map((s, index) => (
                        <option key={index} value={s.COD_PRES}>{s.NOMBRE}</option>
                      ))}
                    </select>
                  </div>
                )}

            </div>


            {detalleMed ? (

              <>
                <hr className="mt-4 mb-4" />

                <div className="row">

                  <div className=" border border-dark p-4 col-md-12">

                    <h4>
                      <u>Detalle del Medico</u>
                    </h4>

                    <div className="row border border-dark p-4 mt-4">

                      <div className="col-md-12">
                        <label>
                          <u>
                            Dr
                          </u>
                        </label>
                        <input type="text" className="form-control" value={detalleMed.NOMBRE} />
                      </div>

                      <div className="mt-4 col-md-12">
                        <label>
                          <u>
                            Horarios
                          </u>
                        </label>
                        <input type="text" className="form-control" value={`${detalleMed.HORARIO1} - ${detalleMed.HORARIO2}`} />
                      </div>

                      <div className="col-md-12 mt-4">
                        <label>
                          <u>
                            Telefono
                          </u>
                        </label>
                        <input type="text" className="form-control" value={detalleMed.TELEFONOS} />
                      </div>

                      <div className="col-md-12 mt-4">
                        <label>
                          <u>
                            Direccion
                          </u>
                        </label>
                        <input type="text" className="form-control" value={detalleMed.DIRECCION} />
                      </div>

                    </div>
                  </div>
                </div>

                {
                  socio.GRUPO === 66 || socio.GRUPO === 55 ? (

                    <div className="alert alert-info text-center text-uppercase mt-4 mb-4 border border-dark">
                      Este socio dispone de {8 - nFisio} sesiones de fisioterapia bonificadas al 100%
                    </div>

                  ) : null
                }

                <ListadoPracticas
                  listado={practicas}
                  agregarPractica={agregarPractica}
                  cantidadRefP={cantidadRefP}


                />


                <div className="mt-4 border border-dark p-1">
                  <ListadoPracticasAgregadas
                    listado={pracSocio}
                    eliminarPracticaPrecargado={eliminarPracticaPrecargado}
                    cantidadRefP={cantidadRefP}

                  />
                </div>

                {socio.GRUPO === 66 || socio.GRUPO === 55 && nFisio >= 0 && nFisio < 8 ? (
                  <div className=" mt-4 border border-dark alert alert-info text-center text-uppercase">
                    Total Practicas: 100% Bonificadas
                  </div>
                ) : socio.GRUPO === 66 || socio.GRUPO === 55 && nFisio === 8 ? (
                  <div className=" mt-4 border border-dark alert alert-info text-center text-uppercase">
                    Total Practicas: ${calcularTotalPracticas(pracSocio)}
                  </div>
                ) : (
                  <div className=" mt-4 border border-dark alert alert-info text-center text-uppercase">
                    Total Practicas: ${calcularTotalPracticas(pracSocio)}
                  </div>
                )}



              </>
            ) : null}



          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={registrarPracticaUso}
            >
              Imprimir
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cancelar
            </button>

          </div>
        </div>
      </div>
    </div>


  );
};

export default ModalPractica;
