import React from "react";

const FormAtaud = () => {
  return (
    <div>
      <div className="border border-dark p-4">
        <h2 className="mt-4 mb-4">
          <strong>
            <u>Ataud</u>
          </strong>
        </h2>
        <div className="row mt-4">
          <div className="col-md-4 mt-2 mb-4">
            <label>
              <strong>
                <u>Tipo de Ataud</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tipo"
              name="tipo"
              ref={tipoAtaudRef}
              defaultValue={descriart}
            />
          </div>

          <div className="col-md-4 mt-2 mb-4">
            <label>
              <strong>
                <u>Caracteristicas</u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Caracteristica"
              name="caracteristica"
              ref={caracteristicaAtaudRef}
              defaultValue={caracteristicas}
            />
          </div>
          <div className="col-md-4 mt-4 mb-4">
            <button
              type="button"
              className="btn btn-primary btn-block"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Ver Stock
            </button>
          </div>
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      {errmsg && (
        <div className="alert alert-danger text-center p-2 mt-4 mb-4">
          {errmsg}
        </div>
      )}

      <button type="submit" className="btn btn-primary btn-block mt-4">
        Registrar
      </button>

      <div
        className="modal fade bd-example-modal-lg"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Stock de Ataudes</h5>
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
              <Stock selcaso={selcaso} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAtaud;
