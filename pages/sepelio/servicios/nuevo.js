import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import AltaServicio from "../../../components/sepelio/servicios/AltaServicio";
import axios from "axios";

const nuevo = () => {
  // DETALLES EXTINTO
  let empresaRef = React.createRef();
  let dniRef = React.createRef();
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let edadRef = React.createRef();
  let calleRef = React.createRef();
  let numeroRef = React.createRef();
  let barrioRef = React.createRef();
  let fechaFallecimientoRef = React.createRef();
  let lugarFallecimientoRef = React.createRef();
  let tipoServicioRef = React.createRef();
  let casaMortuariaRef = React.createRef();
  let fechaInumacionRef = React.createRef();
  let horaInumacionRef = React.createRef();
  let cementerioRef = React.createRef();

  const [usuario, guardarUsuario] = useState(null);

  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = JsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }
    }
  }, []);

  const precioServicio = async (codigo) => {
    await axios
      .get(
        `http://190.231.32.232:5002/api/sepelio/servicio/precioservicio/${codigo}`
      )

      .then((res) => {
        const precioserv = res.data;
        guardarPrecioServ(precioserv);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selcaso = (index) => {
    let descriart = index.original.nombre;
    guardarDescriArt(descriart);

    let codigo = index.original.codigo;
    guardarCodigo(codigo);

    let caracteristicas = index.original.medidas;
    guardarCaracteristica(caracteristicas);

    let uso = index.original.uso;
    guardarUso(uso);

    precioServicio(codigo);
  };

  return (
    <Layout>
      <AltaServicio
        selcaso={selcaso}
        empresaRef={empresaRef}
        dniRef={dniRef}
        apellidoRef={apellidoRef}
        nombreRef={nombreRef}
        edadRef={edadRef}
        usuario={usuario}
      />
    </Layout>
  );
};

export default nuevo;
