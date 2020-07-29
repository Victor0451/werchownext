import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import SocioFicha from "../../../components/socios/ficha/SocioFicha";

import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";

const ficha = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();
  let apellidoRef = React.createRef();

  const [listado, guardarListado] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [flag, guardarFlag] = useState(null);
  const [archivos, guardarArchivos] = useState(null);
  const [empresa, guardarEmpresa] = useState(null);

  const [errores, guardarErrores] = useState(null);

  const traerArchivos = async (contrato) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/archivos/legajovirtual/listaarchivos/${contrato}`
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
        `http://190.231.32.232:5002/api/archivos/legajovirtualm/listaarchivos/${contrato}`
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
      .get(`http://190.231.32.232:5002/api/werchow/pagos/pagos/${contrato}`)
      .then((res) => {
        let pagos = res.data;
        guardarPagos(pagos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerPagosBco = async (contrato) => {
    await axios
      .get(`http://190.231.32.232:5002/api/werchow/pagobco/pagobco/${contrato}`)
      .then((res) => {
        let pagos = res.data;
        guardarPagos(pagos);
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
        guardarPagos(pagos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerPagosBcoM = async (contrato) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/werchow/pagobco/pagobcom/${contrato}`
      )
      .then((res) => {
        let pagos = res.data;
        guardarPagos(pagos);
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

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(
          `http://190.231.32.232:5002/api/werchow/maestro/titular/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          console.log(ficha);

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

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(
          `http://190.231.32.232:5002/api/werchow/maestro/titularm/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);

          if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
            traerPagosM(ficha.CONTRATO);
          } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
            traerPagosBcoM(ficha.CONTRATO);
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

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`http://190.231.32.232:5002/api/werchow/maestro/titulardni/${dni}`)
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          console.log(ficha);

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

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(
          `http://190.231.32.232:5002/api/werchow/maestro/titulardnim/${dni}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          console.log(ficha);

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
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  // const buscarTitularApellido = async (e) => {
  //   e.preventDefault();

  //   guardarListado(null);
  //   guardarErrores(null);
  //   guardarPagos(null);
  //   guardarFlag("W");

  //   if (apellidoRef.current.value !== "") {
  //     let apellido = apellidoRef.current.value;

  //     await axios
  //       .get(
  //         `http://190.231.32.232:5002/api/werchow/maestro/titularapellido/${apellido}`
  //       )
  //       .then((res) => {
  //         let listado = res.data[0];
  //         console.log(listado);
  //         guardarListado(listado);

  //         if (listado === "undefined") {
  //           toastr.error("VERIFICA EL APELLIDO DEL SOCIO...", "ATENCION");
  //           const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
  //           guardarErrores(errores);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else if (contratoRef.current.value === "") {
  //     const errores = "Debes Ingresar Un Numero De Contrato";
  //     guardarErrores(errores);
  //   }
  // };

  // const buscarTitularApellidoM = async (e, flag) => {
  //   e.preventDefault();

  //   guardarFicha(null);
  //   guardarErrores(null);
  //   guardarPagos(null);

  //   guardarFlag(flag);

  //   if (dniRef.current.value !== "") {
  //     let dni = dniRef.current.value;

  //     await axios
  //       .get(
  //         `http://190.231.32.232:5002/api/werchow/maestro/titulardnim/${dni}`
  //       )
  //       .then((res) => {
  //         let ficha = res.data[0][0];
  //         guardarFicha(ficha);
  //         console.log(ficha);

  //         if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
  //           traerPagos(ficha.CONTRATO);
  //         } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
  //           traerPagosBco(ficha.CONTRATO);
  //         } else if (ficha === "undefined") {
  //           toastr.error(
  //             "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
  //             "ATENCION"
  //           );
  //           const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
  //           guardarErrores(errores);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else if (contratoRef.current.value === "") {
  //     const errores = "Debes Ingresar Un Numero De Contrato";
  //     guardarErrores(errores);
  //   }
  // };

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
        errores={errores}
        ficha={ficha}
        pagos={pagos}
        listado={listado}
        flag={flag}
        empresa={empresa}
        archivos={archivos}
      />
    </Layout>
  );
};

export default ficha;
