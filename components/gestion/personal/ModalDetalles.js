import React from "react";
import LegajoArchivos from "./LegajoArchivos";
import FormSubirArchivo from "./FormSubirArchivo";
import Spinner from "../../layout/Spinner";

const ModalDetalles = ({ detalle, titulo, archivos, eliminarArchivos, traerArchivos }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              <u>Legajo Virtual</u>: {titulo}{" "}
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
            <div className="border border-dark p-4 ">
              {!detalle ? (
                <Spinner />
              ) : (
                <>
                  <div className="row">
                    <div className="form-group col-md-4">
                      <label htmlFor="exampleFormControlInput1">Apellido</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={detalle.apellido}
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="exampleFormControlInput1">Nombre</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={detalle.nombre}
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="exampleFormControlInput1">DNI</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={detalle.dni}
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="exampleFormControlInput1">Nick</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={detalle.rol}
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="exampleFormControlInput1">Alta</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={detalle.alta}
                      />
                    </div>
                  </div>

                  <LegajoArchivos
                    archivos={archivos}
                    eliminarArchivos={eliminarArchivos}
                  />

                  <FormSubirArchivo id={detalle.idpersonal} traerArchivos={traerArchivos} />
                </>
              )}
            </div>
          </div>

          <div className="modal-footer">
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

export default ModalDetalles;
