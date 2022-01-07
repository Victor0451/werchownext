import React from "react";
import CapitalSelect from "react-select";
import CuotasSelect from "react-select";

const Simulador = ({
  handleChanges,
  calculoPrestamo,
  flag,
  capital,
  cuoprest,
  cuotas,
  capadev,
  capitalaprest,
  cuotasprest,
  mesi,
  mesf,
}) => {
  return (
    <div className="container mt-4 border border-dark list p-4">
      <h2 className="mb-4">
        <strong>
          <u>Simulacion de Subsidio para contencion familiar</u>
        </strong>
      </h2>

      <div className="mt-4 mb-4 alert alert-info border border-dark text-center text-uppercase">
        Este es un simulador que permite realizar el calculo de los valores de
        un subsidio de manera practica y facil, con fines informativos para el
        socio, sin la obligacion de tener que crearlo. En caso de querer
        confeccionar un subsidio, puedes hacer click aqui. {""}
        <a
          className="btn btn-primary btn-sm rounded"
          href="/prestamos/nuevoprestamo"
        >
          Crear Subsidio
        </a>
      </div>

      <div className="row border border-dark p-4 mb-4">
        <div className="col-md-4">
          <CapitalSelect
            options={capitalaprest}
            placeholder={"Capital a Prestar"}
            onChange={(value) => handleChanges(value, "capital")}
          />
        </div>
        <div className="col-md-4">
          <CuotasSelect
            options={cuotasprest}
            placeholder={"Cuotas del Prestamo"}
            onChange={(value) => handleChanges(value, "cuotas")}
          />
        </div>

        <div className="col-md-4 ">
          <button
            className="btn btn-primary btn-block "
            onClick={() => calculoPrestamo(capital, cuotas)}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            {" "}
            Calcular Cuota
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content border border-dark ">
            <div className="modal-header ">
              <h2 className="mt-4 mb-4">
                <strong>
                  <u>Informacion Del Sub. Cont. Familiar Solicitado</u>
                </strong>
              </h2>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body ">
              {flag === true ? (
                <div className=" mb-4 p-4">
                  <div className="row d-flex  border border-dark p-4">
                    <div className="form-group col-md-3">
                      <label>
                        <strong>
                          {" "}
                          <u> Capital Solicitado: </u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={capital}
                        readOnly
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label>
                        <strong>
                          {" "}
                          <u> N° de Cuotas: </u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={cuotas}
                        readOnly
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label>
                        <strong>
                          {" "}
                          <u> Cuota Mensual: </u>
                        </strong>
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        value={cuoprest}
                        readOnly
                      />
                    </div>

                    <div className="form-group col-md-3">
                      <label>
                        <strong>
                          {" "}
                          <u> Cap. A Devolver: </u>
                        </strong>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={capadev}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="mt-4 border border-dark row mt-2 d-flex justify-content-center alert alert-info text-center text-uppercase">
                    {" "}
                    EL Sub. Cont. Familiar EMPEZARA A DEBITARSE EN{"   "}
                    <strong>
                      {" "}
                      <u> {mesi} </u>{" "}
                    </strong>{" "}
                    Y FINALIZARIA EN{" "}
                    <strong>
                      {" "}
                      <u> {mesf} </u>{" "}
                    </strong>{" "}
                  </div>
                </div>
              ) : flag === false ? null : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulador;
