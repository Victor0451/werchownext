import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import FormSubirArchivo from "../../../components/socios/legajoVirtual/FormSubirArchivo";
import BuscarSocio from "../../../components/socios/legajoVirtual/BuscarSocio";
import Legajo from "../../../components/socios/ficha/Legajo";
import Pagos from "../../../components/socios/ficha/Pagos";
import PromiseFtp from "promise-ftp";

const subirarchivo = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();

  const [pagos, guardarPagos] = useState(null);
  const [contrato, guardarContrato] = useState(null);

  const [errores, guardarErrores] = useState(null);
  const [ficha, guardarFicha] = useState(null);

  const [prueba, guardarPrueba] = useState(null);

  let token = jsCookie.get("token");
  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

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
      guardarContrato(contrato);
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
      guardarContrato(contrato);
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
          guardarContrato(ficha.CONTRATO);
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
          guardarContrato(ficha.CONTRATO);

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
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  return (
    <Layout>
      <BuscarSocio
        ficha={ficha}
        contratoRef={contratoRef}
        dniRef={dniRef}
        buscarTitular={buscarTitular}
        buscarTitularM={buscarTitularM}
        buscarTitularDni={buscarTitularDni}
        buscarTitularDniM={buscarTitularDniM}
        errores={errores}
        ficha={ficha}
      />

      <img src="http://190.231.32.232:5002/api/archivos/legajovirtual/archivo" />

      {ficha !== null ? (
        <div className="container mt-4 alert alert-primary border border-dark p-4">
          <h2 className=" mb-4">
            <strong>
              <u>Legajo Virtual</u>
            </strong>
          </h2>

          <Legajo ficha={ficha} />

          <hr className="container mt-4 mb-4" />

          <Pagos pagos={pagos} />

          <hr className="container mt-4 mb-4" />

          <FormSubirArchivo contrato={contrato} />
        </div>
      ) : null}
    </Layout>
  );
};

export default subirarchivo;
