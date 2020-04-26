import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import RedirectToLogin from "../components/auth/RedirectToLogin";
import jsCookie from "js-cookie";
import Resultados from "../components/campañas/Resultados";
import toastr from "toastr";
import axios from "axios";

const resultado_campana = () => {
  const [operador, guardarOperador] = useState(null);
  const [llamin, guardarLlamin] = useState(null);
  const [compago, guardarCompago] = useState(null);
  const [nopaga, guardarNopaga] = useState(null);
  const [cuotadia, guardarCuotadia] = useState(null);
  const [notificacion, guardarNotificacion] = useState(null);
  const [carteraroja, guardarCarteraroja] = useState(null);
  const [sociofallecido, guardarSociofallecido] = useState(null);
  const [casosabiertos, guardarCasosabiertos] = useState(null);
  const [casoscerrados, guardarCasoscerrados] = useState(null);
  const [casossinaccion, guardarCasossinaccion] = useState(null);
  const [casosconaccion, guardarCasosconaccion] = useState(null);

  const handleChange = (value) => {
    const operador = value.value;
    guardarOperador(operador);
  };

  const estadisticasW = async (operador, empresa) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/llamin/${operador}`
      )
      .then((res) => {
        const llamin = res.data[0][0].casos;
        guardarLlamin(llamin);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/compago/${operador}`
      )
      .then((res) => {
        const compago = res.data[0][0].casos;
        guardarCompago(compago);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/nopaga/${operador}`
      )
      .then((res) => {
        const nopaga = res.data[0][0].casos;
        guardarNopaga(nopaga);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/cuotadia/${operador}`
      )
      .then((res) => {
        const cuotadia = res.data[0][0].casos;
        guardarCuotadia(cuotadia);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/notificacion/${operador}`
      )
      .then((res) => {
        const notificacion = res.data[0][0].casos;
        guardarNotificacion(notificacion);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/carteraroja/${operador}`
      )
      .then((res) => {
        const carteraroja = res.data[0][0].casos;
        guardarCarteraroja(carteraroja);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/sociofallecido/${operador}`
      )
      .then((res) => {
        const sociofallecido = res.data[0][0].casos;
        guardarSociofallecido(sociofallecido);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/casosabiertos/${operador}`
      )
      .then((res) => {
        const casosabiertos = res.data[0][0].casos;
        guardarCasosabiertos(casosabiertos);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/casoscerrados/${operador}`
      )
      .then((res) => {
        const casoscerrados = res.data[0][0].casos;
        guardarCasoscerrados(casoscerrados);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/casosconaccion/${operador}`
      )
      .then((res) => {
        const casosconaccion = res.data[0][0].casos;
        guardarCasosconaccion(casosconaccion);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        `http://190.231.32.232:5002/api/sgi/estadistica/${empresa}/casossinaccion/${operador}`
      )
      .then((res) => {
        const casossinaccion = res.data[0][0].casos;
        guardarCasossinaccion(casossinaccion);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const obtenerEstadistica = (empresa) => {
    if (operador === null) {
      toastr.warning("Debes seleccionar un operador!!", "ATENCION");
    } else {
      estadisticasW(operador, empresa);
    }
  };

  let token = jsCookie.get("token");

  return (
    <Layout>
      {!token ? (
        <RedirectToLogin />
      ) : (
        <Resultados
          obtenerEstadistica={obtenerEstadistica}
          handleChange={handleChange}
          llamin={llamin}
          compago={compago}
          nopaga={nopaga}
          cuotadia={cuotadia}
          notificacion={notificacion}
          carteraroja={carteraroja}
          sociofallecido={sociofallecido}
          casosabiertos={casosabiertos}
          casoscerrados={casoscerrados}
          casosconaccion={casosconaccion}
          casossinaccion={casossinaccion}
          operador={operador}
        />
      )}
    </Layout>
  );
};

export default resultado_campana;
