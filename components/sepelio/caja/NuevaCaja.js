import React from "react";
import moment from "moment";
import EmpresaSelect from "react-select";
import ConceptoSelect from "react-select";
import TipoFacturaSelect from "react-select";
import { empresa, conceptossep, tipofac } from "../../../array/array";

const NuevaCaja = ({
  user,
  handleChange,
  montoRef,
  ptoVentaRef,
  nfacturaRef,
  detalleRef,
  newCaja,
  error,
}) => {
  return (
    <div className="container mt-4 border border-dark list p-4">
      <h2 className="mb-4">
        <strong>
          <u>Habilitar Caja de Sepelio</u>
        </strong>
      </h2>

      {error ? (
        <div className="alert alert-danger text-center text-uppercase">
          {error}
        </div>
      ) : null}

      <div className="border  border-dark  p-4">
        <div className="row">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Empresa: </u>
              </strong>
            </label>
            <EmpresaSelect
              options={empresa}
              placeholder={"Selecciona una Empresa"}
              onChange={(value) => handleChange(value, "empresa")}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Monto a Habilitar: </u>
              </strong>
            </label>
            <input
              type="text"
              name="monto"
              className="form-control"
              placeholder="Ingrese el Monto"
              ref={montoRef}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Concepto: </u>
              </strong>
            </label>
            <ConceptoSelect
              options={conceptossep}
              placeholder={"Concepto"}
              onChange={(value) => handleChange(value, "concepto")}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Tipo de Factura: </u>
              </strong>
            </label>
            <TipoFacturaSelect
              options={tipofac}
              placeholder={"Tipo de Factura"}
              onChange={(value) => handleChange(value, "tipofactura")}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Pto. Venta: </u>
              </strong>
            </label>
            <input
              type="number"
              name="ptoventa"
              className="form-control"
              placeholder="Punto de Venta"
              defaultValue="0"
              ref={ptoVentaRef}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> N° de Factura: </u>
              </strong>
            </label>
            <input
              type="number"
              name="nfactura"
              className="form-control"
              placeholder="N° de Factura"
              defaultValue="0"
              ref={nfacturaRef}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Fecha: </u>
              </strong>
            </label>
            <input
              type="text"
              name="fecha"
              defaultValue={moment().format("DD/MM/YYYY")}
              className="form-control"
              readOnly
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Operador: </u>
              </strong>
            </label>
            <input
              type="text"
              name="fecha"
              defaultValue={user}
              className="form-control"
              readOnly
            />
          </div>

          <div className="mt-2 form-group col-md-12">
            <label>
              <strong>
                {" "}
                <u> Detalle: </u>
              </strong>
            </label>
            <textarea
              rows="3"
              className="form-control"
              name="detalle"
              placeholder="Detalle Habilitacion"
              ref={detalleRef}
            />
          </div>
          <div className="mt-2 form-group col-md-6">
            <button className="mt-4 btn btn-danger btn-block">Cancelar</button>
          </div>
          <div className="mt-2 form-group col-md-6">
            <button
              className="mt-4 btn btn-primary btn-block"
              onClick={newCaja}
            >
              Habilitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevaCaja;
