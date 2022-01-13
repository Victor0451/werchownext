import React from "react";

const ModalFarmacia = ({
  socio,
  farmaciaRef,
  modalidadRef,
  descuentoRef,
}) => {

  return (
    <div
      className="modal fade"
      id="modalFarmacia"
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
              <div className="col-md-4">
                <label>
                  Farmacia:
                </label>

                <select className="custom-select" ref={farmaciaRef}>
                  <option selected value="no">Selecciona una opcion</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div className="col-md-4">
                <label>
                  Modalidad:
                </label>

                <select className="custom-select" ref={modalidadRef}>
                  <option selected value="no">Selecciona una opcion</option>
                  <option value="1">Particular</option>
                  <option value="2">Complemento</option>
                </select>
              </div>

              <div className="col-md-4">
                <label>
                  Descuento:
                </label>

                <select className="custom-select" ref={descuentoRef}>
                  <option selected value="no">Selecciona una opcion</option>
                  <option value="1">20</option>
                  <option value="2">30</option>
                  <option value="3">35</option>

                  {/* {modalidadRef.current.value === "1" ? (
                    <>
                      <option value="1">20</option>
                      <option value="2">30</option>
                      <option value="3">35</option>
                    </>
                  ) : modalidadRef.current.value === "2" ? (
                    <option value="1">20</option>

                  ) : (<option selected value="no">Selecciona una opcion</option>)} */}

                </select>
              </div>
            </div>
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

export default ModalFarmacia;
