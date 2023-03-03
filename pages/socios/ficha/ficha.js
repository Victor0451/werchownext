import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import { ip } from '../../../config/config'
import SocioFicha from "../../../components/socios/ficha/SocioFicha";
import Legajo from "../../../components/socios/ficha/Legajo";
import Pagos from "../../../components/socios/ficha/Pagos";
import LegajoArchivos from "../../../components/socios/legajoVirtual/LegajoArchivos";
import Adherentes from "../../../components/socios/ficha/Adherentes";
import { gastoLuto } from '../../../utils/funciones'
import GastoLuto from "../../../components/layout/GastoLuto";
import moment from "moment";


const ficha = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();
  let apellidoRef = React.createRef();

  const [adhs, guardarAdhs] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [flag, guardarFlag] = useState(null);
  const [archivos, guardarArchivos] = useState(null);
  const [empresa, guardarEmpresa] = useState(null);
  const [listsocio, guardarListSocios] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [cantadh, guardarCantAdh] = useState(null);
  const [baja, guardarBaja] = useState(false)



  const traerArchivos = async (contrato) => {

    await axios
      .get(
        `${ip}api/archivos/legajovirtual/listaarchivos/${contrato}`
      )
      .then((res) => {
        let archivos = res.data;
        guardarArchivos(archivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerArchivosM = async (contrato) => {
    await axios
      .get(
        `${ip}api/archivos/legajovirtualm/listaarchivos/${contrato}`
      )
      .then((res) => {
        let archivos = res.data;
        guardarArchivos(archivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerPagos = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/pagos/pagos/${contrato}`)
      .then((res) => {
        let pagos = res.data;
        // guardarPagos(pagos);

        axios
          .get(
            `${ip}api/werchow/pagobco/pagobco/${contrato}`
          )
          .then((res) => {
            let pagosbco = res.data;
            let allPagos = pagos.concat(pagosbco);

            guardarPagos(allPagos);
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
        guardarPagosBco(pagos);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `${ip}api/werchow/pagos/pagosmutual/${contrato}`
      )
      .then((res) => {
        let pagos = res.data;
        // guardarPagos(pagos);

        axios
          .get(
            `${ip}api/werchow/pagobco/pagobcom/${contrato}`
          )
          .then((res) => {
            let pagosbco = res.data;
            let allPagos = pagos.concat(pagosbco);

            guardarPagos(allPagos);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAdhs = async (contrato) => {
    await axios
      .get(
        `${ip}api/werchow/adherent/adherentestit/${contrato}`
      )
      .then((res) => {
        guardarAdhs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAdhsM = async (contrato) => {
    await axios
      .get(
        `${ip}api/mutual/adherent/adherentestit/${contrato}`
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
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarBaja(false)



    if (contratoRef.current.value !== "") {

      let contrato = contratoRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titular/${contrato}`)
        .then((res) => {

          let ficha = res.data[0][0];

          if (!ficha) {

            axios
              .get(`${ip}api/werchow/maestro/titularbaja/${contrato}`)
              .then(resB => {

                let fichaB = resB.data[0][0];

                if (!fichaB) {

                  toastr.error(
                    "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN",
                    "ATENCION"
                  );
                  const errores = "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN";
                  guardarErrores(errores);

                } else {

                  guardarFicha(fichaB);

                  traerPagos(fichaB.CONTRATO);

                  traerAdhs(fichaB.CONTRATO);

                  guardarEmpresa("W");

                  guardarBaja(true)

                  traerArchivos(fichaB.CONTRATO)

                  cantAdh(fichaB.CONTRATO)

                }

              })
              .catch((error) => {
                console.log(error);
              });

          } else {

            guardarFicha(ficha);

            traerPagos(ficha.CONTRATO);

            traerAdhs(ficha.CONTRATO);

            guardarEmpresa("W");

            guardarBaja(false)

            traerArchivos(ficha.CONTRATO)

            cantAdh(ficha.CONTRATO)


          }


        })
        .catch((error) => {
          console.log(error);
        });

    } else if (contratoRef.current.value === "") {

      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);

    }
  };

  const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarBaja(false)



    if (contratoRef.current.value !== "") {

      let contrato = contratoRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titularm/${contrato}`)
        .then((res) => {

          let ficha = res.data[0][0];

          if (!ficha) {

            axios
              .get(`${ip}api/werchow/maestro/titularmbaja/${contrato}`)
              .then(resB => {

                let fichaB = resB.data[0][0];

                if (!fichaB) {

                  toastr.error(
                    "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN",
                    "ATENCION"
                  );
                  const errores = "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN";
                  guardarErrores(errores);

                } else {

                  guardarFicha(fichaB);

                  traerPagosM(fichaB.CONTRATO);

                  traerAdhsM(fichaB.CONTRATO);

                  guardarEmpresa("M");

                  guardarBaja(true)

                  traerArchivosM(fichaB.CONTRATO)

                  cantAdhM(fichaB.CONTRATO)

                }

              })
              .catch((error) => {
                console.log(error);
              });

          } else {

            guardarFicha(ficha);

            traerPagosM(ficha.CONTRATO);

            traerAdhsM(ficha.CONTRATO);

            guardarEmpresa("M");

            guardarBaja(false)

            traerArchivosM(fichaB.CONTRATO)

            cantAdhM(ficha.CONTRATO)

          }


        })
        .catch((error) => {
          console.log(error);
        });

    } else if (contratoRef.current.value === "") {

      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);

    }

  };

  const buscarTitularDni = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarBaja(false)


    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
        .then((res) => {

          let ficha = res.data[0][0];
          console.log(ficha)

          if (!ficha) {

            console.log("dentro")

            axios
              .get(`${ip}api/werchow/maestro/titularbajadni/${dni}`)
              .then(resB => {

                let fichaB = resB.data[0][0];

                if (!fichaB) {

                  toastr.error(
                    "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN",
                    "ATENCION"
                  );
                  const errores = "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN";
                  guardarErrores(errores);

                } else {

                  guardarFicha(fichaB);

                  if (fichaB.GRUPO === 1000 || fichaB.GRUPO === 1001) {

                    traerPagos(fichaB.CONTRATO);

                  } else if (fichaB.GRUPO === 6 || fichaB.GRUPO > 3000) {

                    traerPagosBco(fichaB.CONTRATO);

                  }

                  traerAdhs(fichaB.CONTRATO);

                  guardarEmpresa("W");

                  guardarBaja(true)

                  traerArchivos(fichaB.CONTRATO)

                  cantAdh(fichaB.CONTRATO)

                }

              })
              .catch((error) => {
                console.log(error);
              });


          } else {


            guardarFicha(ficha);


            if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {

              traerPagos(ficha.CONTRATO);

            } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {

              traerPagosBco(ficha.CONTRATO);

            }
            guardarEmpresa("W");

            guardarBaja(false)

            traerArchivos(ficha.CONTRATO)

            cantAdh(ficha.CONTRATO)

          }

        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const buscarTitularDniM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarBaja(false)


    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titulardnim/${dni}`)
        .then((res) => {

          let ficha = res.data[0][0];
          console.log(ficha)

          if (!ficha) {

            console.log("dentro")

            axios
              .get(`${ip}api/werchow/maestro/titularmbajadni/${dni}`)
              .then(resB => {

                let fichaB = resB.data[0][0];

                if (!fichaB) {

                  toastr.error(
                    "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN",
                    "ATENCION"
                  );
                  const errores = "EL NUMERO DE FICHA NO EXISTE O EL SOCIO ESTA ADHERIDO EN MUTUAL SAN VALENTIN";
                  guardarErrores(errores);

                } else {

                  guardarFicha(fichaB);

                  if (fichaB.GRUPO === 1000 || fichaB.GRUPO === 1001) {

                    traerPagosM(fichaB.CONTRATO);

                  } else if (fichaB.GRUPO === 6 || fichaB.GRUPO > 3000) {

                    traerPagosBcoM(fichaB.CONTRATO);

                  }

                  traerAdhsM(fichaB.CONTRATO);

                  guardarEmpresa("M");

                  guardarBaja(true)

                  traerArchivosM(fichaB.CONTRATO)

                  cantAdhM(fichaB.CONTRATO)

                }

              })
              .catch((error) => {
                console.log(error);
              });


          } else {


            guardarFicha(ficha);


            if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {

              traerPagosM(ficha.CONTRATO);

            } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {

              traerPagosBcoM(ficha.CONTRATO);

            }
            guardarEmpresa("M");

            guardarBaja(false)

            traerArchivosM(ficha.CONTRATO)

            cantAdhM(ficha.CONTRATO)


          }

        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const listSociosM = async () => {
    guardarListSocios(null)

    guardarFlag('M')

    toastr.info("Buscando y generando listado de socios", "ATENCION")


    await axios.get(`${ip}api/werchow/maestro/titularesm`)
      .then(res => {
        guardarListSocios(res.data[0])
        toastr.success("Se genero el listado de socios con exito", "ATENCION")

      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al generar el listado de socios", "ATENCION")
      })
  }

  const listSocios = async () => {
    guardarFlag('W')

    guardarListSocios(null)

    toastr.info("Buscando y generando listado de socios", "ATENCION")


    await axios.get(`${ip}api/werchow/maestro/titulares`)
      .then(res => {
        guardarListSocios(res.data[0])
        toastr.success("Se genero el listado de socios con exito", "ATENCION")

      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al generar el listado de socios", "ATENCION")
      })
  }

  const Seleccionar = async (contrato) => {
    if (flag === 'W') {
      guardarArchivos(null);
      guardarFicha(null);
      guardarErrores(null);
      guardarPagos(null);
      guardarAdhs(null);

      await axios
        .get(
          `${ip}api/werchow/maestro/titular/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          cantAdh(ficha.CONTRATO)
          traerPagos(ficha.CONTRATO);

          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
          traerArchivos(ficha.CONTRATO);
          traerAdhs(ficha.CONTRATO);
          guardarEmpresa("W");

          toastr.success("Se busco al socio con exito", "ATENCION")
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al buscar al socios", "ATENCION")
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);


    } else if (flag === 'M') {
      guardarArchivos(null);
      guardarFicha(null);
      guardarErrores(null);
      guardarPagos(null);
      guardarAdhs(null);

      await axios
        .get(
          `${ip}api/werchow/maestro/titularm/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);

          traerPagos(ficha.CONTRATO);
          cantAdhM(ficha.CONTRATO)

          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
          traerArchivos(ficha.CONTRATO);
          traerAdhs(ficha.CONTRATO);
          guardarEmpresa("M");
          toastr.success("Se busco al socio con exito", "ATENCION")
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }

  }

  const cantAdh = async (contrato) => {

    await axios
      .get(`${ip}api/sepelio/servicio/cantadh/${contrato}`)
      .then((res) => {
        guardarCantAdh(res.data.adh);
      })
      .catch((error) => {
        console.log(error);
      });

  }

  const cantAdhM = async (contrato) => {

    await axios
      .get(`${ip}api/sepelio/servicio/cantadhm/${contrato}`)
      .then((res) => {
        guardarCantAdh(res.data.adh);
      })
      .catch((error) => {
        console.log(error);
      });

  }



  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <SocioFicha
        ficha={ficha}
        contratoRef={contratoRef}
        dniRef={dniRef}
        apellidoRef={apellidoRef}
        buscarTitular={buscarTitular}
        buscarTitularM={buscarTitularM}
        buscarTitularDni={buscarTitularDni}
        buscarTitularDniM={buscarTitularDniM}
        listSocios={listSocios}
        listSociosM={listSociosM}
        errores={errores}
        pagos={pagos}
        empresa={empresa}
        archivos={archivos}
        adhs={adhs}
        listsocio={listsocio}
        Seleccionar={Seleccionar}
        cantadh={cantadh}
      />


      <div
        className="modal fade"
        id="legajo"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl p-2">
          <div className="modal-content border border-dark ">
            <div className="modal-header">
              <h2 className="modal-title" id="exampleModalLabel">
                <strong>
                  <u>Legajo Del Socio</u>
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

              <div id="solicitud" className="mt-4  border border-dark p-4">

                {baja === true ? (
                  <div className="alert alert-danger text-center text-uppercase border border-dark mb-4">
                    ESTA FICHA SE ENCUENTRA ACTUALMENTE DE BAJA DESDE: {moment(ficha.baja).format('DD/MM/YYYY')}
                  </div>
                ) : null}

                <div>


                  {ficha ? (
                    <GastoLuto
                      plan={`${ficha.PLAN}${ficha.SUB_PLAN}`}
                      alta={ficha.ALTA}
                      cantadh={cantadh}

                    />
                  ) : null}


                  <Legajo ficha={ficha} empresa={empresa} />

                  <hr className="mt-4 mb-4" />

                  <div className="border border-dark p-4">

                    <h2 className="text-center">
                      Opciones
                    </h2>

                    <p className="mt-4 d-flex justify-content-center">
                      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#pagos" aria-expanded="false" aria-controls="collapseExample">
                        Mostrar Pagos
                      </button>
                      <button className="ml-1 btn btn-primary" type="button" data-toggle="collapse" data-target="#adhs" aria-expanded="false" aria-controls="collapseExample">
                        Mostrar Adherentes
                      </button>
                      <button className="ml-1 btn btn-primary" type="button" data-toggle="collapse" data-target="#archi" aria-expanded="false" aria-controls="collapseExample">
                        Mostrar Archivos
                      </button>
                    </p>

                  </div>

                  <div className="collapse" id="pagos">
                    <hr className="mt-4 mb-4" />

                    <Pagos pagos={pagos} />

                  </div>

                  <div className="collapse" id="adhs">
                    <hr className="mt-4 mb-4" />

                    <Adherentes adhs={adhs} />

                  </div>

                  <div className="collapse" id="archi">
                    <hr className="mt-4 mb-4" />

                    <LegajoArchivos archivos={archivos} empresa={empresa} />

                  </div>

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  );
};

export default ficha;
