import React from "react";
import Router from "next/router";

const FormAsignarLugar = ({
  parcela,
  socio,
  traerDifunto,
  alertas,
  errores,
  dniRef,
  asigLugar,
}) => {
  return (
    <div className="container mt-4 p-4 border border-dark list">
      <h2>
        <strong>
          <u>Parcelas</u>: Asignar Lugar
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <h4>
          <u>Datos Parcela Seleccionada</u>
        </h4>

        <div className="row">
          <div className="col-md-3 mt-2">
            <label>
              <strong>
                <u>Cementerio</u>
              </strong>
            </label>

            <input
              className="form-control"
              placeholder="Cementerio"
              type="text"
              defaultValue={parcela.cementerio}
            />
          </div>

          <div className="col-md-3 mt-2">
            <label>
              <strong>
                <u>Parcela</u>
              </strong>
            </label>

            <input
              className="form-control"
              placeholder="Parcela"
              type="text"
              defaultValue={parcela.parcela}
            />
          </div>

          <div className="col-md-3 mt-2">
            <label>
              <strong>
                <u>Manzana</u>
              </strong>
            </label>
            <input
              className="form-control"
              placeholder="Manzana"
              type="number"
              defaultValue={parcela.mza}
            />
          </div>

          <div className="col-md-3 mt-2">
            <label>
              <strong>
                <u>Lote</u>
              </strong>
            </label>

            <input
              className="form-control"
              placeholder="Lote"
              type="text"
              defaultValue={parcela.lote}
            />
          </div>

          <div className="col-md-3 mt-2">
            <label>
              <strong>
                <u>Lugares</u>
              </strong>
            </label>

            <input
              className="form-control"
              placeholder="Lugares"
              type="text"
              defaultValue={parcela.lugares}
            />
          </div>
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      <div className="mt-4 border border-dark p-4">
        <h4>
          <u>Buscar Difunto</u>
        </h4>

        <div className="row">
          <div className="col-md-3">
            <label>
              <strong>
                <u>Lugares Disponibles</u>
              </strong>
            </label>

            <input
              className="form-control"
              placeholder="Ingresa el DNI del difunto"
              type="number"
              ref={dniRef}
            />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary btn-block mt-4"
              onClick={traerDifunto}
            >
              Buscar
            </button>
          </div>

          {errores ? (
            <div className="col-md-12 alert alert-danger border border-dark mt-4 mb-4 text-center text-uppercase">
              {errores}
            </div>
          ) : null}

          {alertas ? (
            <div className="col-md-12 alert alert-info border border-dark mt-4 mb-4 text-center text-uppercase">
              {alertas}
            </div>
          ) : null}
        </div>

        {socio ? (
          <>
            <hr className="mt-4 mb-4" />

            <h4 className="mt-4">
              <u>Informacion del difunto</u>
            </h4>

            <div className="row mt-4">
              <div className="col-md-3 mt-2">
                <label>
                  <strong>
                    <u>Empresa</u>
                  </strong>
                </label>
                <input
                  className="form-control"
                  label="Empresa"
                  type="text"
                  value={socio.EMPRESA}
                />
              </div>

              <div className="col-md-3 mt-2">
                <label>
                  <strong>
                    <u>N° Socio</u>
                  </strong>
                </label>
                <input
                  className="form-control"
                  label="N° Socio"
                  type="number"
                  value={socio.CONTRATO}
                />
              </div>

              <div className="col-md-3 mt-2">
                <label>
                  <strong>
                    <u>DNI</u>
                  </strong>
                </label>
                <input
                  className="form-control"
                  label="DNI"
                  type="number"
                  value={socio.NRO_DOC}
                />
              </div>

              <div className="col-md-3 mt-2">
                <label>
                  <strong>
                    <u>Obra Social</u>
                  </strong>
                </label>
                <input
                  className="form-control"
                  label="Obra Social"
                  type="text"
                  value={socio.OBRA_SOC}
                />
              </div>

              <div className="col-md-3 mt-2">
                <label>
                  <strong>
                    <u>Apellido</u>
                  </strong>
                </label>
                <input
                  className="form-control"
                  label="Apellido"
                  type="text"
                  value={socio.APELLIDOS}
                />
              </div>

              <div className="col-md-3 mt-2">
                <label>
                  <strong>
                    <u>Nombre</u>
                  </strong>
                </label>
                <input
                  className="form-control"
                  label="Nombre"
                  type="text"
                  value={socio.NOMBRES}
                />
              </div>

              <div className="col-md-3 mt-2">
                <label>
                  <strong>
                    <u>Edad</u>
                  </strong>
                </label>
                <input
                  className="form-control"
                  label="Edad"
                  type="number"
                  value={socio.EDAD}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-primary" onClick={asigLugar}>
                Asignar Parcela
              </button>

              <button
                className="ml-1 btn btn-danger"
                color="red"
                onClick={() => {
                  Router.push("/sepelio/parcelas/stock");
                }}
              >
                Canelar
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FormAsignarLugar;
