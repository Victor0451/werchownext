import React from "react";
import ListadoParcelas from "../../parcelas/ListadoParcelas";

const AsignarParcela = ({
  idparcelaRef,
  selcasoparcela,
  servicio,
  regParcela,
}) => {
  return (
    <div className="container border border-dark mt-4 alert alert-primary p-4">
      {servicio ? (
        <h2>
          <strong>
            <u>Asignar Parcela</u>: {servicio.idservicio} - {servicio.apellido},{" "}
            {servicio.nombre}
          </strong>
        </h2>
      ) : null}

      <div className="border border-dark mt-4 p-4">
        <h2 className="mt-2">
          <strong>
            <u>Parcela</u>
          </strong>
        </h2>

        <div className="row d-flex justify-content-center">
          <div className="col-md-2 mt-4 mb-4">
            <label>
              <strong>
                <u>Parcela:</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Parcela"
              name="parcela"
              id="parcela"
              ref={idparcelaRef}
              readOnly
            />
          </div>

          <div className="col-md-4 mt-4 mb-4">
            <label>
              <strong>
                <u>Manzana:</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Manzana"
              name="mza"
              id="mza"
              readOnly
            />
          </div>

          <div className="col-md-2 mt-4 mb-4">
            <label>
              <strong>
                <u>Lote:</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Lote"
              name="lote"
              id="lote"
              readOnly
            />
          </div>

          <div className=" col-md-4 mt-4 mb-4">
            <button
              type="button"
              className="mt-4 btn btn-primary btn-block"
              data-toggle="modal"
              data-target="#stockparcela"
            >
              Stock
            </button>
          </div>
        </div>

        <div className="row border border-dark p-4 mt-4">
          <div className="col-md-6 mt-4">
            <a
              className="btn btn-danger btn-block"
              href="/sepelio/servicios/listado"
            >
              Cancelar
            </a>
          </div>
          <div className="col-md-6 mt-4">
            <button className="btn btn-primary btn-block" onClick={regParcela}>
              Asignar Parcela
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="stockparcela"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Stock Parcelas
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
            <div className="modal-body">
              <ListadoParcelas selcasoparcela={selcasoparcela} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsignarParcela;
