import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import ListadoServicios from "../../../../components/sepelio/servicios/liquidacion/ListadoServicio";
import toastr from "toastr";

const liquidacion = () => {
  const [servicio, guardarServicio] = useState(null);
  const [servliq, guardarServliq] = useState(null);
  const [gastos, guardarGastos] = useState(null);
  const [liqop, guardarLiqOp] = useState(null);

  let token = jsCookie.get("token");

  const serviciosALiquidar = async () => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/sepelio/servicioliquidacion/serviciosaliquidar`
      )
      .then((res) => {
        const servicio = res.data[0];
        guardarServicio(servicio);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerGastos = async (id, servliq) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/sepelio/serviciogastos/listadogastos/${id}`
      )
      .then((res) => {
        if (res.data) {
          guardarGastos(res.data);
          guardarServliq(servliq);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    liquidarOperador(id);
  };

  const liquidarOperador = async (id) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/sepelio/servicioliquidacion/liquidacionoperador/${id}`
      )
      .then((res) => {
        if (res.data) {
          guardarLiqOp(res.data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const total = (array) => {
    let total = 0;

    if (array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].liquidacion) {
          total += array[i].liquidacion;
        }
      }
      return total;
    }
  };

  const liquidarServicio = async () => {
    const liquidacion = {
      idservicio: servicio[0].idservicio,
      total_liquidacion: total(liqop),
      fecha_liquidacion: moment().format('YYYY-MM-DD')
    };

    axios.post('http://190.231.32.232:5002/api/sepelio/servicioliquidacion/postliquidacion', liquidacion)
      .then(res => {
        if (res.status === 200) {
          toastr.success("Se liquido el servicio correctamente", "ATENCION")

        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error, contacta al administrador", "ATENCION")
      })

  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
    }
    serviciosALiquidar();
  }, []);

  return (
    <Layout>
      <ListadoServicios
        listado={servicio}
        gastos={gastos}
        traerGastos={traerGastos}
        servliq={servliq}
        liqop={liqop}
        total={total}
        liquidarServicio={liquidarServicio}
      />
    </Layout>
  );
};

export default liquidacion;
