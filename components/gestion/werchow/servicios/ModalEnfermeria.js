import React from "react";

const ModalEnfermeria = ({
  socio,
  sucursales,
  enfer,
  sucursalRefE,
  traerEnfer,
  detEnf,
  traerDetalleMedSelec,
  medicoRefE,
  practEnfer,
  prestacionRefE,
  cantidadRefE,
  registrarEnfermeriaUso,
}) => {

  return (
    <div
      className="modal fade"
      id="modalEnfermeria"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Orden de Farmacia para: {socio.APELLIDOS}, {socio.NOMBRES}
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

                    <select className="custom-select" ref={sucursalRefE} onChange={traerEnfer}>
                      <option value="no" >Selecciona una opcion</option>
                      {sucursales.map((s, index) => (
                        <option key={index} value={s.codigo}>{s.sucursal}</option>
                      ))}
                    </select>
                  </div>
                )}

              {!enfer ? (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Selecciona una Sucursal Para Traer los prestadores de enfermeria</div>
              ) :
                (
                  <div className="col-md-4">
                    <label>
                      Prestador:
                    </label>

                    <select className="custom-select" ref={medicoRefE} onChange={() => traerDetalleMedSelec('E')}>
                      <option selected value="no">Selecciona una opcion</option>
                      {enfer.map((s, index) => (
                        <option key={index} value={s.COD_PRES}>{s.NOMBRE}</option>
                      ))}
                    </select>
                  </div>
                )}


            </div>

            {detEnf ? (

              <>
                <hr className="mt-4 mb-4" />

                <div className="border border-dark p-4">

                  <h4>
                    <u>Detalle del Prestador</u>
                  </h4>

                  <div className="row border border-dark p-4 mt-4">

                    <div className="col-md-4">
                      <label>
                        <u>
                          Dr
                        </u>
                      </label>
                      <input type="text" className="form-control" value={detEnf.NOMBRE} />
                    </div>

                    <div className="col-md-8">
                      <label>
                        <u>
                          Horarios
                        </u>
                      </label>
                      <input type="text" className="form-control" value={`${detEnf.HORARIO1} - ${detEnf.HORARIO2}`} />
                    </div>

                    <div className="col-md-4 mt-4">
                      <label>
                        <u>
                          Telefono
                        </u>
                      </label>
                      <input type="text" className="form-control" value={detEnf.TELEFONOS} />
                    </div>

                    <div className="col-md-8 mt-4">
                      <label>
                        <u>
                          Direccion
                        </u>
                      </label>
                      <input type="text" className="form-control" value={detEnf.DIRECCION} />
                    </div>

                    <div className="col-md-12 d-flex justify-content-end mt-4">
                      <div className="mt-4 alert alert-info text-center text-uppercase border border-dark">
                        <u>Coseguro</u>: ${detEnf.MAX_DESC}
                      </div>
                    </div>

                  </div>
                </div>

                <hr className="mt-4 mb-4" />

                <div className="row border border-dark list p-4">

                  {!practEnfer ? (
                    <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">No hay prestacion registrada</div>
                  ) :
                    (
                      <div className="col-md-4">
                        <label>
                          Prestacion:
                        </label>

                        <select className="custom-select" ref={prestacionRefE}>
                          <option selected value="no">Selecciona una opcion</option>
                          {practEnfer.map((s, index) => (
                            <option key={index} value={s.idpractica}>{s.practica}</option>
                          ))}
                        </select>
                      </div>
                    )}

                  <div className="col-md-4">
                    <label>
                      Cantidad:
                    </label>

                    <select className="custom-select" ref={cantidadRefE} >
                      <option selected value="no">Selecciona una opcion</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>

                    </select>

                  </div>


                </div>


              </>
            ) : null}

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={registrarEnfermeriaUso}
              data-dismiss="modal"
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
    </div >
  );
};

export default ModalEnfermeria;
