import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import BuscarSocio from "../../../../components/gestion/mutual/recibos/BuscarSocio";
import EmitirServicio from "../../../../components/gestion/werchow/servicios/EmitirServicio";

const Emision = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [pagobco, guardarPagosBco] = useState(null);
  const [adhs, guardarAdhs] = useState(null);
  const [cuofija, guardarCuoFija] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [socio, guardarSocio] = useState(null);

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarCuoFija(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titular/${contrato}`)
        .then((res) => {
          if (res.data[0].length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            let ficha = res.data[0];
            guardarFicha(ficha);

            traerAdhs(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000 ||
              ficha[0].GRUPO > 5000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBco(ficha[0].CONTRATO);
            } else if (ficha[0].GRUPO === 1000) {
              traerPagos(ficha[0].CONTRATO);
            }
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
    guardarAdhs(null);
    guardarCuoFija(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
        .then((res) => {
          if (res.data[0].length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            let ficha = res.data[0][0];
            guardarFicha(ficha);

            traerPagos(ficha.CONTRATO);

            traerAdhs(ficha.CONTRATO);

            traerCuoFija(ficha.CONTRATO);

            if (
              ficha.GRUPO === 1001 ||
              ficha.GRUPO === 1005 ||
              ficha.GRUPO === 1006 ||
              ficha.GRUPO === 3444 ||
              ficha.GRUPO === 3666 ||
              ficha.GRUPO === 3777 ||
              ficha.GRUPO === 3888 ||
              ficha.GRUPO === 3999 ||
              ficha.GRUPO === 4004
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha.GRUPO === 3400 ||
              ficha.GRUPO === 3600 ||
              ficha.GRUPO === 3700 ||
              ficha.GRUPO === 3800 ||
              ficha.GRUPO === 3900 ||
              ficha.GRUPO === 4000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
            }
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

  const traerPagos = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/pagos/pagos/${contrato}`)
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerPagosBco = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/pagobco/pagobco/${contrato}`)
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerAdhs = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/maestro/adherentes/${contrato}`)
      .then((res) => {
        guardarAdhs(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerCuoFija = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/cuofija/cuowerchow/${contrato}`)
      .then((res) => {
        guardarCuoFija(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al tarer la cuota", "ATENCION");
        console.log(error);
      });
  };

  const selectSocio = (row) => {
    guardarSocio(null);

    guardarSocio(row);
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }
    }
  }, []);

  return (
    <Layout>
      {flag === false ? (
        <BuscarSocio
          ficha={ficha}
          contratoRef={contratoRef}
          dniRef={dniRef}
          buscarTitularM={buscarTitular}
          buscarTitularDniM={buscarTitularDni}
          errores={errores}
          titulo={"Ordenes, consultas y farmacia"}
        />
      ) : flag === true ? (
        <>
          {ficha ? (
            <EmitirServicio
              adhs={adhs}
              pagos={pagos}
              pagobco={pagobco}
              ficha={ficha}
              selectSocio={selectSocio}
              socio={socio}
            />
          ) : null}
        </>
      ) : null}
    </Layout>
  );
};

export default Emision;
