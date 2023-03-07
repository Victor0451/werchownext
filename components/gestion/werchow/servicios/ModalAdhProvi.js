import React from "react";


const ModalAdhProvi = ({
  nacimientoRef,
  nombreRef,
  apellidoRef,
  nroDocRef,
  regAdhProvi,
  checkAdhProvi,
  habilita,
  infoAdh,
}) => {

  return (
    <div
      className="modal fade"
      id="ModalAdhProvi"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Formulario Adhrente Provisorio
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

            <div className="row border border-dark p-4">

              <div className="col-md-12">

                <div className="alert alert-info mt-4 text-center text-uppercase border border-dark">
                  Podras realizar la carga provisoria del adherente para poder emitir la orden medica. La misma se impactara en el sistema posteriormente.
                </div>

              </div>

              <div className="col-md-4 mt-4">

                <label>
                  <strong>
                    <u>
                      DNI
                    </u>
                  </strong>
                </label>

                <input
                  className="form-control"
                  type="number"
                  ref={nroDocRef}
                  onBlur={checkAdhProvi}
                />

              </div>

              {

                habilita === false ? (
                  <>

                    {infoAdh.length === 0 ? (

                      <div className="col-md-8 alert alert-info border border-dark text-center text-uppercase mt-5 mb-4">
                        Ingresa el DNI y presiona la tecla "TAB" para verificar si existe
                      </div>

                    ) : infoAdh.length > 0 ? (

                      <div className="col-md-8 alert alert-warning border border-dark text-center text-uppercase mt-5 mb-4">
                        El DNI ingresado pertenece al adherente: {infoAdh[0].APELLIDOS}, {infoAdh[0].NOMBRES}. Ficha N° {infoAdh[0].CONTRATO}
                      </div>

                    ) : null}

                  </>
                ) : habilita === true ?
                  (

                    <>

                      <div className="col-md-4 mt-4">

                        <label>
                          <strong>
                            <u>
                              Nacimiento
                            </u>
                          </strong>
                        </label>

                        <input
                          className="form-control"
                          type="date"
                          ref={nacimientoRef}
                        />

                      </div>

                      <div className="col-md-4 mt-4">

                        <label>
                          <strong>
                            <u>
                              Apellido
                            </u>
                          </strong>
                        </label>

                        <input
                          className="form-control"
                          type="text"
                          ref={apellidoRef}
                        />

                      </div>

                      <div className="col-md-4 mt-4">

                        <label>
                          <strong>
                            <u>
                              Nombre
                            </u>
                          </strong>
                        </label>

                        <input
                          className="form-control"
                          type="text"
                          ref={nombreRef}
                        />

                      </div>

                    </>

                  ) : null

              }



            </div>

          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={regAdhProvi}
            >
              Registrar
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

export default ModalAdhProvi;
