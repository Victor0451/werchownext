import React from "react";

const ModalFarmacia = ({
  socio,
  farmacias,
  farmaciaRef,
  modalidadRef,
  descuentoRef,
  gestionDescuento,
  descFarma,
  registrarFarmaciaUso,
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

              {farmacias ? (
                <div className="col-md-4">
                  <label>
                    Farmacias:
                  </label>

                  <select className="custom-select" ref={farmaciaRef}>
                    <option selected value="no">Selecciona una opcion</option>

                    {farmacias.map((f, index) => (
                      <option key={index} value={f.CODIGO}>{f.NOMBRE}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Cargando las farmacias..</div>
              )}


              <div className="col-md-4">
                <label>
                  Modalidad:
                </label>

                <select className="custom-select" ref={modalidadRef} onChange={gestionDescuento}>
                  <option selected value="no">Selecciona una opcion</option>
                  <option value="1">Particular</option>
                  <option value="2">Complemento</option>
                </select>
              </div>


              {descFarma ? (
                <div className="col-md-4">
                  <label>
                    Descuento:
                  </label>

                  <select className="custom-select" ref={descuentoRef}>

                    {descFarma.map((d, index) => (
                      <option key={index} value={d.value}>{d.label}</option>
                    ))}

                  </select>
                </div>
              ) : (
                <div className="alert alert-info border border-dark col-md-4 text-center text-uppercase">Selecciones una modalidad para generar los descuentos</div>
              )}

            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={registrarFarmaciaUso}
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

export default ModalFarmacia;
