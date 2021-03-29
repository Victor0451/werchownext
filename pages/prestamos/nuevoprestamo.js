import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AltaPrestamos from "../../components/prestamos/AltaPrestamos";
import jsCookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import toastr from "toastr";
import moment from "moment-timezone";
import { ip } from '../../config/config'

// Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarAltaPrestamo from "../../validacion/validarAltaPrestamo";
import { cuotasprest, renovaprest } from "../../array/array";

const STATE_INICIAL = {
  contrato: "",
  legajo: "",
  neto: "",
  anti: "",
  renova: "",
};

const nuevoprestamo = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  let valcuotaRef = React.createRef();
  let operadorRef = React.createRef();
  let nombreRef = React.createRef();
  let apellidoRef = React.createRef();

  const [error, guardarError] = useState(false);
  const [renoverror, guardarRenoverror] = useState(null);
  const [cuotas, guardarCuotas] = useState(null);
  const [capital, guardarCapital] = useState(null);
  const [renovapres, guardarRenovaprest] = useState(null);

  const handleChanges = (value, flag) => {
    // guardarCapital(null);
    // guardarCuotas(null);
    // guardarRenovaprest(null);

    if (flag === "cuotas") {
      const cuotas = value.value;
      guardarCuotas(cuotas);
    } else if (flag === "capital") {
      const capital = value.value;
      guardarCapital(capital);
    } else if (flag === "renova") {
      const renovapres = value.value;
      guardarRenovaprest(renovapres);
    }
  };

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaPrestamo, altaPrestamo);

  const { contrato, capadev, legajo, neto, anti } = valores;

  async function altaPrestamo() {
    let fecha = moment().format("YYYY/MM/DD");

    const prestamo = {
      fechacarga: fecha,
      fechasol: fecha,
      operador: operadorRef.current.value,
      ficha: contrato,
      legajo,
      anti,
      renova: renovapres,
      capital: capital,
      cuotas: cuotas,
      valcuota: valcuotaRef.current.value,
      neto,
      estado: "PENDIENTE",
      codptmleg: `${contrato}-${moment().format("YYYY-MM-DD")}`,
      ptm_afi: `${apellidoRef.current.value}, ${nombreRef.current.value}`,
    };

    console.log(prestamo);

    if (prestamo.renova === null) {
      const renoverror = "Debes indicar si es renovacion o no";
      guardarRenoverror(renoverror);
    } else {
      guardarRenoverror(null);

      let porcentaje = Math.floor(prestamo.neto * 30) / 100;

      if (porcentaje > prestamo.valcuota) {
        toastr.success(
          "El 30% del sueldo neto supera al valor de la cuota del prestamo",
          "Atencion"
        );
        setTimeout(() => {
          // Router.push("/prestamos/imprimircaratula");
          window.location.replace("/prestamos/imprimircaratula");
        }, 500);
      } else {
        toastr.error(
          "El 30% del sueldo neto no supera al valor de la cuota del prestamo, su aprobacion queda sujeta a decision del los superiores",
          "Atencion"
        );
        window.location.replace("/prestamos/imprimircaratula");
      }

      await axios
        .post(
          `${ip}api/sgi/prestamos/altaprestamo`,
          prestamo
        )
        .then((res) => {
          console.log(res.status);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  let usuario = jsCookie.get("usuario");

  return (
    <Layout>
      <AltaPrestamos
        usuario={usuario}
        contrato={contrato}
        capital={capital}
        capadev={capadev}
        legajo={legajo}
        neto={neto}
        anti={anti}
        errores={errores}
        handleChange={handleChange}
        handleChanges={handleChanges}
        cuotas={cuotas}
        renovapres={renovapres}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        error={error}
        valcuotaRef={valcuotaRef}
        operadorRef={operadorRef}
        renoverror={renoverror}
        nombreRef={nombreRef}
        apellidoRef={apellidoRef}
      />
    </Layout>
  );
};

export default nuevoprestamo;
