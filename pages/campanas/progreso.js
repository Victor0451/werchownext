import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../config/config";
import toastr from "toastr";
import moment from "moment";
import FormProgreso from "../../components/campañas/FormProgreso";

function Progreso(props) {
  let recRef = React.createRef();
  let mesRef = React.createRef();
  let anoRef = React.createRef();

  const [asignado, guardarAsignado] = useState(0);
  const [trabajado, guardarTrabajado] = useState(0);
  const [user, guardarUsuario] = useState(null);
  const [recup, guardarRecup] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [mes, guardarMes] = useState(0);
  const [ano, guardarAno] = useState(0);
  const [show, guardarShow] = useState(false);

  const recuperadores = async () => {
    await axios
      .get(`${ip}api/sgi/mapa/recuperadores`)
      .then((res) => {
        guardarRecup(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const progCasos = async () => {
    guardarAno(0);
    guardarMes(0);
    guardarShow(false);

    let datos = {
      op: recRef.current.value,
      mes: mesRef.current.value,
      ano: anoRef.current.value,
    };

    if (datos.op === "no") {
      guardarErrores("Debes seleccionar una recuperadora");
    } else if (datos.mes === "no") {
      guardarErrores("Debes seleccionar el mes de la campaña");
    } else if (datos.ano === "no") {
      guardarErrores("Debes seleccionar el año de la campaña");
    } else {
      guardarMes(datos.mes);
      guardarAno(datos.ano);
      guardarShow(true);

      await axios
        .get(`${ip}api/sgi/campanas/casosaignados`, {
          params: {
            op: datos.op,
            mes: datos.mes,
            ano: datos.ano,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarAsignado(res.data[0].asig);
          } else if (res.data.length === 0) {
            toastr.info("No hay casos asignados aun", "ATENCION");
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer la estadistica de casos trabajados"
          );
        });

      await axios
        .get(`${ip}api/sgi/campanas/casostrabajados`, {
          params: {
            op: datos.op,
            mes: datos.mes,
            ano: datos.ano,
          },
        })
        .then((res) => {
          if (res.data.length > 0) {
            guardarTrabajado(res.data[0].trab);
          } else if (res.data.length === 0) {
            toastr.info("No hay casos asignados aun", "ATENCION");
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "Ocurrio un error al traer la estadistica de casos trabajados"
          );
        });
    }
  };

  const porcenTab = (a, t) => {
    let resultado = 0;

    if (t === 0) {
      return resultado;
    } else if (t > 0) {
      resultado = (t * 100) / a;
      return resultado.toFixed(2);
    }
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
        recuperadores();
      }
    }
  }, []);

  return (
    <Layout>
      <FormProgreso
        asignado={asignado}
        trabajado={trabajado}
        porcenTab={porcenTab}
        recup={recup}
        recRef={recRef}
        anoRef={anoRef}
        mesRef={mesRef}
        progCasos={progCasos}
        mes={mes}
        ano={ano}
        show={show}
      />
      ;
    </Layout>
  );
}

export default Progreso;
