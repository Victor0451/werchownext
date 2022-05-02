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

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

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
          toastr.success("Se encontro al socio con exito", "ATENCION")

        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(
          `${ip}api/werchow/maestro/titularm/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          cantAdhM(ficha.CONTRATO)
          traerPagosM(ficha.CONTRATO);

          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
          traerArchivosM(ficha.CONTRATO);
          guardarEmpresa("M");
          traerAdhsM(ficha.CONTRATO);
          toastr.success("Se encontro al socio con exito", "ATENCION")
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const buscarTitularDni = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          cantAdh(ficha.CONTRATO)

          if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
            traerPagos(ficha.CONTRATO);
          } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
            traerPagosBco(ficha.CONTRATO);
          } else if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
          traerArchivos(ficha.CONTRATO);
          guardarEmpresa("W");
          toastr.success("Se encontro al socio con exito", "ATENCION")
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const buscarTitularDniM = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(
          `${ip}api/werchow/maestro/titulardnim/${dni}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          cantAdhM(ficha.CONTRATO)

          if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
            traerPagos(ficha.CONTRATO);
          } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
            traerPagosBco(ficha.CONTRATO);
          } else if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
          traerArchivosM(ficha.CONTRATO);
          guardarEmpresa("M");
          toastr.success("Se encontro al socio con exito", "ATENCION")

        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al buscar al socio", "ATENCION")

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
              <div id="solicitud" className="mt-4 container border border-dark p-4">
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
