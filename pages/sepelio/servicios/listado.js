import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import ListadoServicios from "../../../components/sepelio/servicios/ListadoServicio";
import jsCookie from "js-cookie";
import axios from "axios";
import PeriodoServicios from "../../../components/sepelio/servicios/PeriodoServicios";
import moment from "moment";

const listado = () => {
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [listado, guardarListado] = useState(null);
  const [error, guardarError] = useState(null);
  const [desde, guardarDesde] = useState(null);
  const [hasta, guardarHasta] = useState(null);

  let token = jsCookie.get("token");

  const buscarServicios = async () => {
    guardarError(null);

    let desde = moment(desdeRef.current.value).format("YYYY-MM-DD");
    let hasta = moment(hastaRef.current.value).format("YYYY-MM-DD");
    if (desde === "" || hasta === "") {
      guardarError("Los campos desde y hasta no pueden estar vacios");
    } else if (desde > hasta) {
      guardarError(`La fecha "desde" no puede ser mayor a la fecha "hasta" `);
    } else {
      guardarDesde(desde);
      guardarHasta(hasta);
      await axios
        .get(
          `http://190.231.32.232:5002/api/sepelio/servicio/listadoservicios`,
          {
            params: {
              desde: desde,
              hasta: hasta,
            },
          }
        )

        .then((res) => {
          const listado = res.data;
          guardarListado(listado);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const todoLosServicios = async () => {
    console.log("toy");
    await axios
      .get(`http://190.231.32.232:5002/api/sepelio/servicio/todoslosservicios`)
      .then((res) => {
        guardarListado(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      {listado === null ? (
        <PeriodoServicios
          desdeRef={desdeRef}
          hastaRef={hastaRef}
          buscarServicios={buscarServicios}
          todoLosServicios={todoLosServicios}
          error={error}
        />
      ) : (
        <ListadoServicios listado={listado} desde={desde} hasta={hasta} />
      )}
    </Layout>
  );
};

export default listado;
