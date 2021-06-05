import React from "react";
import Spinner from "../../layout/Spinner";
import ConceptoSelect from "react-select";
import TipoFacturaSelect from "react-select";
import EmpresaSelect from "react-select";
import { empresa, tipofac } from "../../../array/array";

const IngresoCaja = ({
  caja,
  ingresos,
  handleChange,
  listConcep,
  fechaRef,
  nFacturaRef,
  ptoVentaRef,
  totalRef,
  detalleRef,
  error,
  regIngreso,
}) => {
  if (!caja) return <Spinner />;

  const calcmontocaja = (array) => {
    if (array) {
      let totaling = 0;
      for (let i = 0; i < array.length; i++) {
        totaling += array[i].monto;
      }
      let total = caja.monto - totaling;

      return total;
    } else {
      let total = caja.monto;
      return total;
    }
  };

  return (
    <div className="mt-4 container border border-dark alert alert-primary p-4">
      <div className="row">
        <div className="col-md-6">
          <h2>
            <strong>
              <u>Caja de sepelio N</u>: {caja.idcaja}
            </strong>
          </h2>
        </div>

        <div className="col-md-6 d-flex justify-content-end">
          <a className="btn btn-danger mr-1" href="/sepelio/caja/listado">
            Cancelar
          </a>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Cargar Ingreso
          </button>
        </div>
      </div>
      <div className="mt-4 border border-dark p-4">
        <h2>
          <strong>
            <u>Ingresos Habilitados</u>:
          </strong>
        </h2>

        <table className="mt-4 table table-sm list border border-dark">
          <thead className="thead-dark">
            <th scope="col">#</th>
            <th scope="col">Ingresos</th>
            <th scope="col">Monto</th>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{caja.concepto}</td>
              <td>{calcmontocaja(ingresos)}</td>
            </tr>
            {ingresos
              ? ingresos.map((ingreso, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 2}</th>
                    <td>{ingreso.concepto}</td>
                    <td>{ingreso.monto}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>

      {/* MODAL */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Regristrar Ingreso
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
              <form
                className="alert alert-primary border border-dark p-4"
                onKeyPress={(e) => {
                  e.key === "Enter" && e.preventDefault();
                }}
              >
                <h2>
                  <strong>
                    <u>Ingreso</u>
                  </strong>
                </h2>

                <div className="row mt-4 mb-4">
                  <div className="form-group col-md-6">
                    <label>
                      <strong>
                        <u>Empresa</u>
                      </strong>
                    </label>
                    <EmpresaSelect
                      options={empresa}
                      placeholder={"Empresa"}
                      onChange={(value) => handleChange(value, "empresa")}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong>
                        <u>Concepto</u>
                      </strong>
                    </label>
                    <ConceptoSelect
                      options={listConcep}
                      placeholder={"Concepto"}
                      onChange={(value) => handleChange(value, "concepto")}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong>
                        <u>Fecha</u>
                      </strong>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="fecha"
                      ref={fechaRef}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong>
                        <u>Tipo Factura</u>
                      </strong>
                    </label>
                    <TipoFacturaSelect
                      options={tipofac}
                      placeholder={"Tipo de Factura"}
                      onChange={(value) => handleChange(value, "tipofactura")}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong>
                        <u>Pto. Venta</u>
                      </strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      ref={ptoVentaRef}
                      placeholder="Pto. Venta"
                      defaultValue="0"
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label>
                      <strong>
                        <u>N° Factura</u>
                      </strong>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      ref={nFacturaRef}
                      placeholder="N° Factura"
                      defaultValue="0"
                    />
                  </div>

                  <div className="form-group col-md-6 ">
                    <label>
                      <strong>
                        <u>Monto</u>
                      </strong>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      ref={totalRef}
                      placeholder="Monto"
                      defaultValue="0"
                    />
                  </div>

                  <div className="mt-4 form-group col-md-12">
                    <label>
                      <strong>
                        <u>Detalle</u>
                      </strong>
                    </label>
                    <textarea
                      rows="3"
                      className="form-control"
                      ref={detalleRef}
                      placeholder="Detalle"
                    />
                  </div>
                </div>
              </form>

              {error ? (
                <div className="alert alert-danger text-center text-uppercase col-md-12">
                  {error}
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={regIngreso}
              >
                Registrar Ingreso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngresoCaja;
