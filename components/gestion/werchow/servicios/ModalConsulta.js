import React from "react";

const ModalConsulta = ({
  socio,
  sucursales,
  espec,
  medicos,
  traerMedicosPorSuc,
  especialidadRef,
  sucursalRef,
  medicoRef,
  traerDetalleMedSelec,
  detalleMed,
}) => {

  console.log(detalleMed)

  return (
    <div
      className="modal fade"
      id="modalConsulta"
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

                    <select className="custom-select" ref={sucursalRef}>
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

                    <select className="custom-select" ref={especialidadRef} onChange={traerMedicosPorSuc}>
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
                    <select className="custom-select" ref={medicoRef} onChange={traerDetalleMedSelec}>
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

                <div className="border border-dark p-4">

                  <h4>
                    <u>Detalle del Medico</u>
                  </h4>

                  <div className="row border border-dark p-4 mt-4">

                    <div className="col-md-4">
                      <label>
                        <u>
                          Dr
                        </u>
                      </label>
                      <input type="text" className="form-control" value={detalleMed[0].NOMBRE} />
                    </div>

                    <div className="col-md-8">
                      <label>
                        <u>
                          Horarios
                        </u>
                      </label>
                      <input type="text" className="form-control" value={`${detalleMed[0].HORARIO1} - ${detalleMed[0].HORARIO2}`} />
                    </div>

                    <div className="col-md-4 mt-4">
                      <label>
                        <u>
                          Telefono
                        </u>
                      </label>
                      <input type="text" className="form-control" value={detalleMed[0].TELEFONOS} />
                    </div>

                    <div className="col-md-8 mt-4">
                      <label>
                        <u>
                          Direccion
                        </u>
                      </label>
                      <input type="text" className="form-control" value={detalleMed[0].DIRECCION} />
                    </div>

                    <div className="col-md-12 d-flex justify-content-end mt-4">
                      <div className="mt-4 alert alert-info text-center text-uppercase border border-dark">
                        <u>Coseguro</u>: ${detalleMed[0].MAX_DESC}
                      </div>
                    </div>

                  </div>
                </div>
              </>
            ) : null}



          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
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
    </div >
  );
};

export default ModalConsulta;
