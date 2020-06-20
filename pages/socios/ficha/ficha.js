import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import SocioFicha from "../../../components/socios/ficha/SocioFicha";
import Legajo from "../../../components/socios/ficha/Legajo";
import axios from "axios";
import jsCookie from "js-cookie";
import Pagos from "../../../components/socios/ficha/Pagos";
import Router from "next/router";

const ficha = () => {
  let contratoRef = React.createRef();

  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);

  const [errores, guardarErrores] = useState(null);

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

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(
          `http://190.231.32.232:5002/api/werchow/maestro/titular/${contrato}`
        )
        .then((res) => {
          let ficha = res.data;
          guardarFicha(ficha);

          if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
            traerPagos(ficha.CONTRATO);
          } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
            traerPagosBco(ficha.CONTRATO);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
            "ATENCION"
          );
          const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
          guardarErrores(errores);
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

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(
          `http://190.231.32.232:5002/api/werchow/maestro/titularm/${contrato}`
        )
        .then((res) => {
          let ficha = res.data;
          guardarFicha(ficha);

          if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
            traerPagosM(ficha.CONTRATO);
          } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
            traerPagosBcoM(ficha.CONTRATO);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
            "ATENCION"
          );
          const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
          guardarErrores(errores);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

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
        buscarTitular={buscarTitular}
        buscarTitularM={buscarTitularM}
        errores={errores}
      />

      {ficha !== null ? (
        <div className="container">
          <hr className="mt-4 mb-4" />

          <Legajo ficha={ficha} />

          <hr className="mt-4 mb-4" />

          <Pagos pagos={pagos} />
        </div>
      ) : null}
    </Layout>
  );
};

export default ficha;
