import React from "react";
import moment from "moment";

const ModalReciboPagoVisita = ({
  plan,
  datVisi,
  imprimir
}) => {



  return (
    <div
      className="modal fade"
      id="modalReciboPagoVisita"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Recibo
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

            <div className=' p-4 container list' id="orden">

              <div className="p-4 borderImp">
                <div className='mt-4 borderImp p-4 row'>

                  <div className='row  col-md-8'>
                    <div className='col-md-12'>
                      <strong>
                        <u>Beneficiario</u>: {plan.socio}
                      </strong>
                    </div>

                    <div className=' col-md-12'>
                      <strong>
                        <u>N° Socio</u>: {plan.contrato}
                      </strong>
                    </div>
                    <div className='col-md-12'>
                      <strong>
                        <u>Fecha</u>: {moment(plan.fecha).format('DD/MM/YYYY')}
                      </strong>
                    </div>

                    <div className='col-md-12'>
                      <strong>
                        <u>Dr/a</u>: {plan.prestador_nombre}
                      </strong>
                    </div>

                  </div>

                  <div className='row col-md-4'>
                    <div className='col-md-12'>
                      <strong>
                        <u>Detalle</u>: Pago Visita N° {datVisi.nvisita}
                      </strong>
                    </div>

                    <div className='col-md-12'>
                      <strong>
                        <u>Importe</u>: ${datVisi.pago}
                      </strong>
                    </div>

                    <div className='col-md-12'>
                      <strong>
                        <u>Total Plan</u>: ${plan.total}
                      </strong>
                    </div>

                    <div className='col-md-12'>
                      <strong>
                        <u>Saldo</u>: ${plan.saldo}
                      </strong>
                    </div>
                  </div>

                </div>

                <br />

                <div className=" mt-4">
                  <div className="row d-flex justify-content-between p-2">
                    <div className="col-4 text-center mt-4">
                      <br />
                      <p>-----------------------------</p>
                      <label>Firma del Afiliado</label>
                    </div>
                    <div className="col-4 text-center mt-4">
                      <br />
                      <p>-----------------------------</p>
                      <label>Aclaracion</label>
                    </div>


                  </div>
                </div>
              </div>

            </div >

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={imprimir}
            >
              Imprimir Recibo
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Cerrar
            </button>

          </div>
        </div>
      </div>
    </div>


  );
};

export default ModalReciboPagoVisita;
