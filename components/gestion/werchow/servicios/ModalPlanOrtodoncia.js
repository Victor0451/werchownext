import React from "react";


const ModalPlanOrtodoncia = ({
  socio,
  sucursales,
  espec,
  medicos,
  especialidadRefPl,
  sucursalRefPl,
  medicoRefPl,
  traerMedicosPorSuc,
  traerDetalleMedSelec,
  detalleMed,
  planOrto,
  registrarPlanOrto
}) => {

  return (
    <div
      className="modal fade"
      id="modalPlanOrtodoncia"
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


            <div className="row border border-dark list p-4">

              {!sucursales ? (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Cargando Sucursales...</div>
              ) :
                (
                  <div className="col-md-4">
                    <label>
                      Sucursal:
                    </label>

                    <select className="custom-select" ref={sucursalRefPl}>
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

                    <select className="custom-select" ref={especialidadRefPl} onChange={() => traerMedicosPorSuc('Pl')}>
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
                    <select className="custom-select" ref={medicoRefPl} onChange={() => traerDetalleMedSelec('Pl')} >
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

                <hr className="mt-4 mb-4" />

                <div className="row">

                  <div className=" border border-dark p-4 col-md-12">

                    <h4>
                      <u>Plan De Ortodoncia</u>
                    </h4>

                    <div className="row border border-dark p-4 mt-4">

                      <div className="col-md-4 mt-4">
                        <label>
                          <u>
                            Paciente
                          </u>
                        </label>
                        <input type="text" className="form-control" value={`${socio.APELLIDOS}, ${socio.NOMBRES}`} readOnly />
                      </div>

                      <div className="col-md-4 mt-4">
                        <label>
                          <u>
                            Plan
                          </u>: Sujeto a modif. del especialista

                        </label>
                        <input type="text" className="form-control" defaultValue={planOrto.detalle} readOnly />
                      </div>

                      <div className="col-md-4 mt-4">
                        <label>
                          <u>
                            Monto Total
                          </u>

                        </label>
                        <input type="text" className="form-control" defaultValue={planOrto.total} readOnly />
                      </div>

                      <div className="col-md-4 mt-4">
                        <label>
                          <u>
                            Pago Inicial
                          </u>
                        </label>
                        <input type="text" className="form-control" defaultValue={planOrto.pago_inicial} readOnly />
                      </div>

                      <div className="col-md-8 mt-4">
                        <label>
                          <u>
                            Detalle plan
                          </u>
                        </label>
                        <input type="text" className="form-control" defaultValue={"Activacion kit ortodoncia"} readOnly />
                      </div>

                    </div>
                  </div>
                </div>


              </>
            ) : null}



          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={registrarPlanOrto}
            >
              Iniciar Plan
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

export default ModalPlanOrtodoncia;
