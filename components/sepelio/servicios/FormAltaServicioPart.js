import React from "react";
import Select from "react-select";

const FormAltaServicio = ({ ficha, particular }) => {
  return (
    <div className="mt-4 alert alert-primary border border-dark p-4">
      <form className=" p-4">
        <h1 className="mt-4 mb-4">
          <strong>
            <u>Formulario De Solicitud De Servicio</u>
          </strong>
        </h1>

        <div className=" border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Datos del Extinto</u>
            </strong>
          </h2>
          <div className="row">
            <div className="col-md-4 mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="dni"
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="apellido"
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="nombre"
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Fallecimiento"
                name="fec_fallec"
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Lugar de Fallecimiento"
                name="lugar_fallec"
              />
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Detalles del Servicio</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                name="tipo"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Casa Mortuaria"
                name="casa_mortuaria"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Inumacion"
                name="fec_inuma"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="hora de Inumacion"
                name="hora_inuma"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Cementerio"
                name="cementerio"
              />
            </div>
            <div className="col">
              {/* <Select
              // options={forma}
              placeholder={"Lugar"}
              //onChange={value => handleChange(value, "PRODUCTOR")}
            /> */}
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Ataud</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Tipo"
                name="tipo"
              />
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Caracteristica"
                name="caracteristica"
              />
            </div>
            <div className="col">
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

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Registrar
        </button>
      </form>

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
            <div className="modal-body">{/* <Stock data={ataudes} /> */}</div>
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

export default FormAltaServicio;
