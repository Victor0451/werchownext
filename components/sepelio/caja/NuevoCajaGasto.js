import React from "react";
import {
  empresa,
  porciva,
  tipofac,
  mediopag,
  operadoressep,
} from "../../../array/array";
import moment from "moment";
import Spinner from "../../layout/Spinner";
import EmpresaSelect from "react-select";
import ProveedorSelect from "react-select";
import MedioPagoSelect from "react-select";
import ConceptoSelect from "react-select";
import IvaSelect from "react-select";
import TipoFacturaSelect from "react-select";
import OperadorSelect from "react-select";
import ServicioSelect from "react-select";

const NuevoCajaGasto = ({
  listProv,
  listConcep,
  caja,
  user,
  nuevoGasto,
  handleChange,
  fechaRef,
  nFacturaRef,
  ptoVentaRef,
  montoIVARef,
  retIIBBRef,
  retggciasRef,
  percIVARef,
  totalRef,
  detalleRef,
  error,
  servicios,
}) => {
  if (!caja) return <Spinner />;

  return (
    <div className="mt-4 container border border-dark alert alert-primary p-4">
      <h2>
        <strong>
          <u>Cargar Gastos</u>
        </strong>
      </h2>

      <form
        className="border border-dark p-4 mt-4"
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      >
        <h3 className="mt-4 mb-4">
          <strong>
            <u>Detalle de Caja</u>
          </strong>{" "}
        </h3>

        <div className="row mb-4">
          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Caja de Sepelio N°: </u>
              </strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="monto"
              defaultValue={caja.idcaja}
              readOnly
              placeholder="Ingresar Monto"
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
              className="form-control"
              name="monto"
              defaultValue={moment(caja.fecha).format("YYYY-MM-DD HH:mm:ss")}
              readOnly
              placeholder="Fecha"
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
              className="form-control"
              name="monto"
              defaultValue={user}
              readOnly
              placeholder="Operador"
            />
          </div>
        </div>

        <hr />

        {caja.estado === 1 ? (
          <div className="row mt-4 mb-4">
            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Empresa: </u>
                </strong>
              </label>
              <EmpresaSelect
                options={empresa}
                placeholder={"Empresa"}
                onChange={(value) => handleChange(value, "empresa")}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Proveedor: </u>
                </strong>
              </label>
              <ProveedorSelect
                options={listProv}
                placeholder={"Proveedor"}
                onChange={(value) => handleChange(value, "proveedor")}
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
                  <u> Fecha: </u>
                </strong>
              </label>
              <input
                type="date"
                className="form-control"
                name="fecha"
                ref={fechaRef}
              />
            </div>

            <div className="form-group col-md-2">
              <label>
                <strong>
                  {" "}
                  <u> Pto. de Venta: </u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                ref={ptoVentaRef}
                placeholder="Pto. Venta"
                defaultValue={0}
              />
            </div>

            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> N° de Factura: </u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                name="nfactura"
                ref={nFacturaRef}
                placeholder="N° Factura"
                defaultValue={0}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Medio de Pago: </u>
                </strong>
              </label>
              <MedioPagoSelect
                options={mediopag}
                placeholder={"Medio de Pago"}
                onChange={(value) => handleChange(value, "mediopago")}
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
                options={listConcep}
                placeholder={"Concepto"}
                onChange={(value) => handleChange(value, "concepto")}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> I.V.A.: </u>
                </strong>
              </label>
              <IvaSelect
                options={porciva}
                placeholder={"Porcentaje de IVA"}
                onChange={(value) => handleChange(value, "porciva")}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Monto Con I.V.A.: </u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                ref={montoIVARef}
                placeholder="Monto IVA"
                defaultValue={0}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Ret. IIBB: </u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                ref={retIIBBRef}
                placeholder="Ret. IIBB"
                defaultValue={0}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Ret. Ganancias: </u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                ref={retggciasRef}
                placeholder="Ret. Gcias"
                defaultValue={0}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u>Perc. I.V.A.: </u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                ref={percIVARef}
                placeholder="Perc. IVA"
                defaultValue={0}
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u>Total: </u>
                </strong>
              </label>
              <input
                type="number"
                className="form-control"
                ref={totalRef}
                placeholder="Total"
                defaultValue={0}
              />
            </div>

            <div className="form-group col-md-4 ">
              <label>
                <strong>
                  {" "}
                  <u>Operador: </u>
                </strong>
              </label>
              <OperadorSelect
                options={operadoressep}
                placeholder={"Operador del Tramite"}
                onChange={(value) => handleChange(value, "operadortramite")}
              />
            </div>

            <div className="form-group col-md-4 ">
              <label>
                <strong>
                  {" "}
                  <u>Servicio: </u>
                </strong>
              </label>
              <ServicioSelect
                options={servicios}
                placeholder={"Servicio"}
                onChange={(value) => handleChange(value, "servicio")}
              />
            </div>

            <div className="mt-4 form-group col-md-12">
              <label>
                <strong>
                  {" "}
                  <u>Detalle: </u>
                </strong>
              </label>
              <textarea
                rows="3"
                className="form-control"
                ref={detalleRef}
                placeholder="Detalle"
              />
            </div>

            {error ? (
              <div className="alert alert-danger text-center text-uppercase col-md-12">
                {error}
              </div>
            ) : null}

            <div className="mt-2 form-group col-md-12">
              <button
                className="mt-4 btn btn-primary btn-block"
                onClick={nuevoGasto}
                data-dismiss="modal"
              >
                Generar Gasto
              </button>
            </div>
          </div>
        ) : caja.estado === 0 ? (
          <div>
            <hr />
            <div className="alert alert-info text-center">
              <strong>CAJA CERRADA NO PUEDES REGISTRAR GASTOS</strong>
            </div>
            <hr />
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default NuevoCajaGasto;
