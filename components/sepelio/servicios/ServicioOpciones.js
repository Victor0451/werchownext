import React from "react";

const ServicioOpciones = ({ push, row }) => {
  return (
    <div
      className="modal fade"
      id="opciones"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Opciones
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
            {row ? (
              <div className="p-4">
                <div className=" border border-dark  p-4 row">
                  <div className="col-md-3">
                    <button
                      className="btn btn-block btn-primary mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Imprimir Solicitud"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/impresion",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-print" aria-hidden="true">
                        {" "}
                        Imprimir
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3">
                    <button
                      className="btn btn-block btn-secondary border mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Editar Servicio"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/editar",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-pencil-square-o" aria-hidden="true">
                        {" "}
                        Editar
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3">
                    <button
                      className="btn btn-block btn-warning  mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Legajo Virtual"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/legajovirtual/legajo",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-folder-open" aria-hidden="true">
                        {" "}
                        Legajo Virtual
                      </i>
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-block btn-success mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Subir Archivos"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/legajovirtual/subirarchivos",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-upload" aria-hidden="true">
                        {" "}
                        Subir Archivos
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-danger border mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Detalles Servicio"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/detalles/nuevo",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-sort-amount-desc" aria-hidden="true">
                        {""} Detalles del Servicio
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-info mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cargar Gastos"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/gastos/gastos",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-money" aria-hidden="true">
                        {" "}
                        Cargar Gastos
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-success mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cargar Gasto De Luto"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/gastoluto/nuevo",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-money" aria-hidden="true">
                        {" "}
                        Gasto De Luto
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-primary mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cargar Gasto De Luto"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/socios/conformidad/conformidad",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-sticky-note-o" aria-hidden="true">
                        {" "}
                        Conformidad de No Servicio
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-secondary mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Asignar Parcela"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/parcelas/asignar",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-pencil-square-o" aria-hidden="true">
                        {" "}
                        Asignar Parcela
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-warning mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Gestionar Ataud Asignado"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/ataud/gestion",
                          row.dni,
                          row.idservicio,
                          row.idataud
                        )
                      }
                    >
                      <i className="fa fa-outden" aria-hidden="true">
                        {" "}
                        Gestionar Ataud
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-info mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Cargar Visitantes del Servicio"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/visitantes/nuevo",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-users" aria-hidden="true">
                        {" "}
                        Cargar Visitantes
                      </i>
                    </button>
                  </div>

                  <div className="col-md-3 mt-4">
                    <button
                      className="btn btn-block btn-danger mr-1"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Solicitud de Afiliacion"
                      data-dismiss="modal"
                      onClick={() =>
                        push(
                          "/sepelio/servicios/constancia/afiliacion",
                          row.dni,
                          row.idservicio
                        )
                      }
                    >
                      <i className="fa fa-certificate" aria-hidden="true">
                        {" "}
                        Solicitud de Afiliacion
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="modal-footer">
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

export default ServicioOpciones;
