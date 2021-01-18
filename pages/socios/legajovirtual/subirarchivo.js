import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import BuscarSocio from "../../../components/socios/legajoVirtual/BuscarSocio";

const subirarchivo = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();

  const [contrato, guardarContrato] = useState(null);

  const [empresa, guardarEmpresa] = useState(null);

  const [errores, guardarErrores] = useState(null);
  const [ficha, guardarFicha] = useState(null);

  const [archivos, guardarArchivos] = useState(null);

  let token = jsCookie.get("token");
  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

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

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);

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

          if (ficha === "undefined") {
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
    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);

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

          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
          traerArchivosM(contrato);
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

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`http://190.231.32.232:5002/api/werchow/maestro/titulardni/${dni}`)
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);
          console.log(ficha);
          guardarContrato(ficha.CONTRATO);
          if (ficha === "undefined") {
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

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);

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
        archivos={archivos}
        empresa={empresa}
        contrato={contrato}
      />
    </Layout>
  );
};

export default subirarchivo;
