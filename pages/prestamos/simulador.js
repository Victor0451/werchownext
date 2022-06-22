import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AltaPrestamos from "../../components/prestamos/AltaPrestamos";
import jsCookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import toastr from "toastr";
import moment from "moment-timezone";
import { ip } from "../../config/config";
import Simulador from "../../components/prestamos/Simulador";
import { cuotasprest } from "../../array/array";
import { interest } from "../../utils/variables";

const simulador = () => {
  const [cuoprest, guardarCuoprest] = useState(null);
  const [capadev, guardarCapadev] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [cuotas, guardarCuotas] = useState(null);
  const [capital, guardarCapital] = useState(null);
  const [capiPrest, guardarCapiPrest] = useState(null);


  const calculoPrestamo = () => {
    //e.preventDefault();

    guardarFlag(false);

    let principal = parseInt(capital);

    let payments = parseInt(cuotas);
    let x = Math.pow(1 + interest, payments);
    let monthly = ((principal * x * interest) / (x - 1)).toFixed(0);

    guardarCuoprest(monthly);

    let capadev = monthly * payments;

    guardarCapadev(capadev);

    guardarFlag(true);
  };

  const handleChanges = (value, flag) => {
    if (flag === "cuotas") {
      guardarCuotas(value.value);
    } else if (flag === "capital") {
      guardarCapital(value.value);
    }
  };

  const tarerCapPrestamo = async () => {

    await axios.get(`${ip}api/sgi/prestamos/capitalaprest`)
      .then(res => {
        guardarCapiPrest(res.data)
      })
      .catch(error => {
        console.log(error)
      })

  }


  let mesi = moment().add(1, "months").format("MM/YYYY");
  let mesf = moment().add(cuotas, "months").format("MM/YYYY");

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {

      tarerCapPrestamo()

    }
  }, []);

  return (
    <Layout>
      <Simulador
        calculoPrestamo={calculoPrestamo}
        handleChanges={handleChanges}
        mesi={mesi}
        mesf={mesf}
        capital={capital}
        cuoprest={cuoprest}
        cuotas={cuotas}
        capadev={capadev}
        flag={flag}
        cuotasprest={cuotasprest}
        capiPrest={capiPrest}
      />
    </Layout>
  );
};

export default simulador;
