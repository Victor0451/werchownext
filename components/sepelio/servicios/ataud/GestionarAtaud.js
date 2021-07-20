import React from "react";
import Stock from "../../ataudes/Stock";

const GestionarAtaud = ({ idataudRef, selcasofrm, ataud, registrarAtaud }) => {
  return (
    <div className="container border border-dark alert alert-primary mt-4 p-4">
      <h2>
        <strong>
          <u>Gestionar ataud asignado</u>
        </strong>
      </h2>
      <div className="mt-4 mb-4 border border-dark alert alert-primary p-4">
        {ataud ? (
          <h4 className="mt-2">
            <strong>
              <u>Ataud Actual</u>: {ataud.nombre}, {ataud.fabricante} -{" "}
              {ataud.uso}
            </strong>
          </h4>
        ) : (
          <h4 className="mt-2">
            <strong>
              <u>Ataud</u>
            </strong>
          </h4>
        )}

        <div className="row d-flex justify-content-center">
          <div className="col-md-2 mt-4 mb-4">
            <label>
              <strong>
                <u>Codigo:</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Codigo"
              name="idataud"
              id="idataud"
              ref={idataudRef}
              //  defaultValue={ataud.idataud}
              readOnly
            />
            {/* {erridataud && (
                <div className="alert alert-danger text-center p-2 mt-2">
                  {erridataud}
                </div>
              )} */}
          </div>

          <div className="col-md-4 mt-4 mb-4">
            <label>
              <strong>
                <u>Ataud:</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ataud"
              name="ataud"
              id="ataud"
              // defaultValue={ataud.}
              readOnly
            />
          </div>

          <div className="col-md-2 mt-4 mb-4">
            <label>
              <strong>
                <u>Uso:</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Uso"
              name="uso"
              id="uso"
              readOnly
            />
          </div>

          <div className=" col-md-4 mt-4 mb-4">
            <button
              className="mt-4 btn btn-primary btn-block"
              data-toggle="modal"
              data-target="#stockataud"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Stock
            </button>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary btn-block mt-4 col-5 mr-1"
          onClick={registrarAtaud}
        >
          Registrar
        </button>
        <a
          href="/sepelio/servicios/listado"
          className="btn btn-danger btn-block border border-dark mt-4 col-5"
        >
          Cancelar
        </a>
      </div>

      {/* MODAL STOCK ATAUD */}
      <div
        className="modal fade"
        id="stockataud"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Stock Ataudes
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
              <Stock selcasofrm={selcasofrm} />
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

export default GestionarAtaud;
