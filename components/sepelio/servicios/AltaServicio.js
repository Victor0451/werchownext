import React, { useState } from "react";
import FormAltaServicio from "./FormAltaServicio";
import FormAltaServicioPart from "./FormAltaServicioPart";
import toastr from "toastr";
import axios from "axios";
import { ip } from '../../../config/config'

const AltaServicio = ({
  empresaRef,
  dniRef,
  apellidoRef,
  nombreRef,
  edadRef,
  usuario,
}) => {
  let contratoRef = React.createRef();

  const [empresa, guardarEmpresa] = useState(null);
  const [errexiste, guadarErrexiste] = useState(null);
  const [error, guardarError] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [adhs, guardarAdhs] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [particular, guardarParticular] = useState(null);
  const [grupo, guardarGrupo] = useState(null);
  const [cantadh, guardarCantAdh] = useState(null);

  const adherentesTit = async (contrato) => {
    await axios
      .get(
        `${ip}api/sepelio/servicio/adherentestit/${contrato}`
      )
      .then((res) => {
        guardarAdhs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const adherentesTitMut = async (contrato) => {
    await axios
      .get(
        `${ip}api/sepelio/servicio/adherentestitm/${contrato}`
      )
      .then((res) => {
        guardarAdhs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarPagos(null);

    guardarEmpresa("Werchow");
    let contrato = contratoRef.current.value;

    if (contrato !== "") {
      await axios
        .get(
          `${ip}api/sepelio/servicio/impservicio/${contrato}`
        )
        .then((res) => {
          if (res.data) {
            toastr.warning(
              "EL DNI INGRESADO PERTENECE A UN SERVICIO YA CARGADO",
              "ATENCION"
            );
            guadarErrexiste(
              "EL DNI INGRESADO PERTENECE A UN SERVICIO YA CARGADO"
            );
          } else {
            axios
              .get(
                `${ip}api/sepelio/servicio/consultarficha/${contrato}`
              )
              .then((res) => {
                if (res.data) {
                  let ficha = res.data;
                  guardarFicha(ficha);
                  traerPagos(ficha.CONTRATO);
                  adherentesTit(ficha.CONTRATO);
                  cantAdh(ficha.CONTRATO)
                  traerGrupo(ficha.GRUPO);
                } else if (!res.data) {
                  axios
                    .get(
                      `${ip}api/sepelio/servicio/consultarfichaadh/${contrato}`
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
    guadarErrexiste(null);

    guardarEmpresa("Mutual");
    let contrato = contratoRef.current.value;

    if (contrato !== "") {
      await axios
        .get(
          `${ip}api/sepelio/servicio/impservicio/${contrato}`
        )
        .then((res) => {
          if (res.data) {
            toastr.warning(
              "EL DNI INGRESADO PERTENECE A UN SERVICIO YA CARGADO",
              "ATENCION"
            );
            guadarErrexiste(
              "EL DNI INGRESADO PERTENECE A UN SERVICIO YA CARGADO"
            );
          } else {
            axios
              .get(
                `${ip}api/sepelio/servicio/consultarficham/${contrato}`
              )
              .then((res) => {
                if (res.data) {
                  let ficha = res.data;
                  guardarFicha(ficha);
                  traerPagosM(ficha.CONTRATO);
                  adherentesTitMut(ficha.CONTRATO);
                  cantAdhM(ficha.CONTRATO)
                  traerGrupo(ficha.GRUPO);
                } else if (!res.data) {
                  axios
                    .get(
                      `${ip}api/sepelio/servicio/consultarfichaadhm/${contrato}`
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
      .get(`${ip}api/werchow/pagos/pagos/${contrato}`)
      .then((res) => {
        let pagos = res.data;
        axios
          .get(
            `${ip}api/werchow/pagobco/pagobco/${contrato}`
          )
          .then((res) => {
            let pagobco = res.data;

            let allpagos = pagos.concat(pagobco);

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
        `${ip}api/werchow/pagos/pagosmutual/${contrato}`
      )
      .then((res) => {
        let pagos = res.data;

        axios
          .get(
            `${ip}api/werchow/pagobco/pagobcom/${contrato}`
          )
          .then((res) => {
            let pagobco = res.data;

            let allpagos = pagos.concat(pagobco);

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

  const traerGrupo = async (grupo) => {
    await axios
      .get(`${ip}api/sepelio/servicio/grupo/${grupo}`)
      .then((res) => {
        guardarGrupo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const servicioParticular = () => {
    guardarParticular(true);
    guardarFicha(null);
  };

  const cantAdh = async (contrato) => {

    await axios
      .get(`${ip}api/sepelio/servicio/cantadh/${contrato}`)
      .then((res) => {
        guardarCantAdh(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const cantAdhM = async (contrato) => {

    await axios
      .get(`${ip}api/sepelio/servicio/cantadhm/${contrato}`)
      .then((res) => {
        guardarCantAdh(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }
  

  return (
    <div className="mt-4 container border border-dark list p-4">
      {ficha !== null ? (
        <div className="mt-4">
          <FormAltaServicio
            pagos={pagos}
            ficha={ficha}
            empresa={empresa}
            empresaRef={empresaRef}
            dniRef={dniRef}
            apellidoRef={apellidoRef}
            nombreRef={nombreRef}
            edadRef={edadRef}
            usuario={usuario}
            adhs={adhs}
            grupo={grupo}
            cantadh={cantadh}
          />
        </div>
      ) : particular !== null ? (
        <FormAltaServicioPart usuario={usuario} />
      ) : (
        <div className="p-4">
          {errexiste && (
            <div className="mt-2 form-group  alert alert-warning">
              {errexiste}
            </div>
          )}
          <h2 className="">
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

          <div className=" border border-dark mt-4 p-4">
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
      )}
    </div>
  );
};

export default AltaServicio;
