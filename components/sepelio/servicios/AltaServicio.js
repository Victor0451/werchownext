import React, { useState } from "react";
import FormAltaServicio from "./FormAltaServicio";
import FormAltaServicioPart from "./FormAltaServicioPart";
import Pagos from "../../socios/ficha/Pagos";
import toastr from "toastr";
import axios from "axios";

const AltaServicio = ({
  selcaso,
  empresaRef,
  dniRef,
  apellidoRef,
  nombreRef,
  edadRef,
}) => {
  let contratoRef = React.createRef();

  const [empresa, guardarEmpresa] = useState(null);
  const [error, guardarError] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [particular, guardarParticular] = useState(null);

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarPagos(null);

    guardarEmpresa("Werchow");
    let contrato = contratoRef.current.value;
    console.log(contrato);
    if (contrato !== "") {
      await axios
        .get(
          `http://190.231.32.232:5002/api/sepelio/servicio/consultarficha/${contrato}`
        )
        .then((res) => {
          if (res.data) {
            let ficha = res.data;
            guardarFicha(ficha);
            traerPagos(ficha.CONTRATO);
          } else if (!res.data) {
            axios
              .get(
                `http://190.231.32.232:5002/api/sepelio/servicio/consultarfichaadh/${contrato}`
              )
              .then((res) => {
                if (res.data) {
                  let ficha = res.data;
                  guardarFicha(ficha);
                  traerPagos(ficha.CONTRATO);
                } else if (!res.data) {
                  toastr.error(
                    "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                    "ATENCION"
                  );
                }
                let ficha = res.data;
                guardarFicha(ficha);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contrato === "") {
      let error = "Debes ingresar un numero de socio";
      guardarError(error);
    }
  };

  const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarPagos(null);

    guardarEmpresa("Mutual");
    let contrato = contratoRef.current.value;
    console.log(contrato);
    if (contrato !== "") {
      await axios
        .get(
          `http://190.231.32.232:5002/api/sepelio/servicio/consultarficham/${contrato}`
        )
        .then((res) => {
          if (res.data) {
            let ficha = res.data;
            guardarFicha(ficha);
            traerPagosM(ficha.CONTRATO);
          } else if (!res.data) {
            axios
              .get(
                `http://190.231.32.232:5002/api/sepelio/servicio/consultarfichaadhm/${contrato}`
              )
              .then((res) => {
                if (res.data) {
                  let ficha = res.data;
                  guardarFicha(ficha);
                  traerPagosM(ficha.CONTRATO);
                } else if (!res.data) {
                  toastr.error(
                    "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                    "ATENCION"
                  );
                }
                let ficha = res.data;
                guardarFicha(ficha);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contrato === "") {
      let error = "Debes ingresar un numero de socio";
      guardarError(error);
    }
  };

  const traerPagos = async (contrato) => {
    await axios
      .get(`http://190.231.32.232:5002/api/werchow/pagos/pagos/${contrato}`)
      .then((res) => {
        let pagos = res.data;
        axios
          .get(
            `http://190.231.32.232:5002/api/werchow/pagobco/pagobco/${contrato}`
          )
          .then((res) => {
            let pagobco = res.data;

            let allpagos = pagos.concat(pagobco);
            console.log(allpagos);
            guardarPagos(allpagos);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerPagosM = async (contrato) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/werchow/pagos/pagosmutual/${contrato}`
      )
      .then((res) => {
        let pagos = res.data;

        axios
          .get(
            `http://190.231.32.232:5002/api/werchow/pagobco/pagobcom/${contrato}`
          )
          .then((res) => {
            let pagobco = res.data;

            let allpagos = pagos.concat(pagobco);
            console.log(allpagos);
            guardarPagos(allpagos);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const servicioParticular = () => {
    guardarParticular(true);
    guardarFicha(null);
  };

  return (
    <div className="container">
      <div className="alert alert-primary border border-dark mt-4 p-4">
        <h2 className="mt-4 mb-4">
          <strong>
            <u>Ingrese N° de Documento del Fallecido </u>
          </strong>
        </h2>
        <form className="mt-4 border border-dark p-2">
          <div className="row mb-4">
            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> N° de Documento: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ficha"
                name="contrato"
                ref={contratoRef}
              />
              {error && (
                <div className="mt-2 form-group  alert alert-danger">
                  {error}
                </div>
              )}
            </div>

            <div className="form-group col-md-6 mt-4">
              <button
                type="submit"
                className="btn col-md-5 btn-primary mr-4"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={buscarTitular}
              >
                Werchow
              </button>
              <button
                type="submit"
                className="btn col-md-5 btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={buscarTitularM}
              >
                Mutual
              </button>
            </div>
          </div>
        </form>

        <hr className="mt-4 mb-4" />

        <div className="alert alert-primary border border-dark mt-4 p-4">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mt-4 mb-4">
                <strong>
                  <u>Ingresar Servicio Particular</u>
                </strong>
              </h2>
            </div>

            <div className="col-md-6 mt-4">
              <button
                type="reset"
                className="btn btn-block btn-primary"
                onClick={servicioParticular}
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal  fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5>
                <strong>
                  <u>Carga del Servicio</u>
                </strong>
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
              {ficha !== null ? (
                <>
                  <Pagos pagos={pagos} />

                  <FormAltaServicio
                    ficha={ficha}
                    selcaso={selcaso}
                    empresa={empresa}
                    empresaRef={empresaRef}
                    dniRef={dniRef}
                    apellidoRef={apellidoRef}
                    nombreRef={nombreRef}
                    edadRef={edadRef}
                  />
                </>
              ) : particular !== null ? (
                <FormAltaServicioPart />
              ) : null}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltaServicio;
