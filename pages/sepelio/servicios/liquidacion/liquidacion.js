import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import ListadoServicios from "../../../../components/sepelio/servicios/liquidacion/ListadoServicio";
import toastr from "toastr";
import { ip } from "../../../../config/config";
import Router from "next/router";

const liquidacion = () => {
  const [ataud, guardarAtaud] = useState(null);
  const [cajas, guardarCajas] = useState(null);
  const [parcela, guardarParcela] = useState(null);
  const [servicio, guardarServicio] = useState(null);
  const [servliq, guardarServliq] = useState(null);
  const [gastos, guardarGastos] = useState(null);
  const [liqop, guardarLiqOp] = useState(null);
  const [usuario, guardarUsuario] = useState(null);
  const [servmes, guardarServMes] = useState(null);
  const [aculiqop, guardarAcuLiqOp] = useState(null);
  const [acugascaja, guardarAcuGasCaja] = useState(null);

  let token = jsCookie.get("token");

  const serviciosALiquidar = async () => {
    await axios
      .get(`${ip}api/sepelio/servicioliquidacion/serviciosaliquidar`)
      .then((res) => {
        const servicio = res.data[0];
        guardarServicio(servicio);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerGastos = async (id, servliq, idataud) => {
    await axios
      .get(`${ip}api/sepelio/serviciogastos/listadogastos/${id}`)
      .then((res) => {
        if (res.data) {
          guardarGastos(res.data);
          guardarServliq(servliq);

          tarerAtaud(idataud);
          tarerParcela(id);
          traerCajasSepelio(id);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    liquidarOperador(id);
  };

  const liquidarOperador = async (id) => {
    await axios
      .get(`${ip}api/sepelio/servicioliquidacion/liquidacionoperador/${id}`)
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
      fecha_liquidacion: moment().format("YYYY-MM-DD HH:mm:ss"),
      operador: usuario,
    };

    axios
      .post(`${ip}api/sepelio/servicioliquidacion/postliquidacion`, liquidacion)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Se liquido el servicio correctamente", "ATENCION");
          setTimeout(() => {
            Router.reload();
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error, contacta al administrador", "ATENCION");
      });
  };

  const aprobarGasto = async (id, flag, u, idservicio) => {
    if (flag === 1) {
      axios
        .put(`${ip}api/sepelio/serviciogastos/aprobarliqgasto/${id}`, {
          params: {
            operador: u,
          },
        })
        .then((res) => {
          toastr.success("Liquidacion de gasto aprobado", "ATENCION");

          updateTareasApServicio(idservicio);

          serviciosALiquidar();
          traerGastos(idservicio);
        })
        .catch((error) => {
          toastr.error(
            "Ocurrio un error al liquidar el gasto seleccionado",
            "ATENCION"
          );
          console.log(error);
        });
    } else if (flag === 0) {
      axios
        .put(`${ip}api/sepelio/serviciogastos/cancelarliqgasto/${id}`, {
          params: {
            operador: u,
          },
        })
        .then((res) => {
          toastr.success("Liquidacion de gasto rechazada", "ATENCION");

          updateTareasApServicio(idservicio);

          serviciosALiquidar();
          traerGastos(idservicio);
        })
        .catch((error) => {
          toastr.error(
            "Ocurrio un error al liquidar el gasto seleccionado",
            "ATENCION"
          );
          console.log(error);
        });
    }
  };

  const aprobarTodoGasto = async (flag, u, idservicio) => {
    if (flag === 1) {
      axios
        .put(`${ip}api/sepelio/serviciogastos/aprobartodoliqgasto`, {
          params: {
            operador: u,
            servicio: idservicio,
          },
        })
        .then((res) => {
          toastr.success("Liquidacion de gasto aprobado", "ATENCION");

          updateTareasApServicio(idservicio);

          traerGastos(idservicio);
        })
        .catch((error) => {
          toastr.error(
            "Ocurrio un error al liquidar el gasto seleccionado",
            "ATENCION"
          );
          console.log(error);
        });
    } else if (flag === 0) {
      axios
        .put(`${ip}api/sepelio/serviciogastos/cancelartodoliqgasto`, {
          params: {
            operador: u,
            servicio: idservicio,
          },
        })
        .then((res) => {
          toastr.success("Liquidacion de gasto rechazada", "ATENCION");

          updateTareasApServicio(idservicio);

          serviciosALiquidar();
          traerGastos(idservicio);
        })
        .catch((error) => {
          toastr.error(
            "Ocurrio un error al liquidar el gasto seleccionado",
            "ATENCION"
          );
          console.log(error);
        });
    }
  };

  const regLiqGasto = async (id, u, idservicio) => {
    axios
      .put(`${ip}api/sepelio/serviciogastos/regliqgasto/${id}`, {
        params: {
          operador: u,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toastr.success("El gasto se liquido correctamente", "ATENCION");

          setInterval(() => {
            serviciosALiquidar();
            traerGastos(idservicio);
          }, 500);
        }
      })
      .catch((error) => {
        toastr.error(
          "Ocurrio un error al liquidar el gasto seleccionado",
          "ATENCION"
        );
        console.log(error);
      });
  };

  const updateTareasApServicio = async (id) => {
    await axios
      .put(`${ip}api/sepelio/serviciogastos/updatetareasapservicio/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Tareas en servicio actualizadas", "ATENCION");
        }
      })
      .catch((error) => {
        toastr.error(
          "Ocurrio un error verificando el estado de las tareas",
          "ATENCION"
        );
        console.log(error);
      });
  };

  const tarerAtaud = async (id) => {
    await axios
      .get(`${ip}api/sepelio/ataudes/ataud/${id}`)
      .then((res) => {
        guardarAtaud(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer el ataud", "ATENCION");
        console.log(error);
      });
  };

  const tarerParcela = async (id) => {
    await axios
      .get(`${ip}api/sepelio/parcelas/traerparcela/${id}`)
      .then((res) => {
        guardarParcela(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer el ataud", "ATENCION");
        console.log(error);
      });
  };

  const traerCajasSepelio = async (id) => {
    await axios
      .get(`${ip}api/sepelio/informes/cajasepelio/${id}`)
      .then((res) => {
        guardarCajas(res.data[0]);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer las cajas", "ATENCION");
        console.log(error);
      });
  };

  const serviciosDelMes = async (id) => {
    await axios
      .get(`${ip}api/sepelio/informes/serviciosenelmes`)
      .then((res) => {
        guardarServMes(res.data[0]);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer la informacion", "ATENCION");
        console.log(error);
      });
  };

  const acumuladoLiqOp = async (id) => {
    await axios
      .get(`${ip}api/sepelio/informes/acumuladoliqop`)
      .then((res) => {
        guardarAcuLiqOp(res.data[0]);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer las cajas", "ATENCION");
        console.log(error);
      });
  };

  const acumuladoGastoCaja = async (id) => {
    await axios
      .get(`${ip}api/sepelio/informes/acumuladogastocaja`)
      .then((res) => {
        guardarAcuGasCaja(res.data[0]);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer las cajas", "ATENCION");
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      serviciosALiquidar();
      serviciosDelMes();
      acumuladoGastoCaja();
      acumuladoLiqOp();

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
      }
    }
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
        user={usuario}
        aprobarGasto={aprobarGasto}
        regLiqGasto={regLiqGasto}
        ataud={ataud}
        cajas={cajas}
        parcela={parcela}
        acugascaja={acugascaja}
        aculiqop={aculiqop}
        servmes={servmes}
        aprobarTodoGasto={aprobarTodoGasto}
      />
    </Layout>
  );
};

export default liquidacion;
