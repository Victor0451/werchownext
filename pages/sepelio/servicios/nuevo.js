import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import AltaServicio from "../../../components/sepelio/servicios/AltaServicio";

const nuevo = () => {
  // DETALLES EXTINTO
  let empresaRef = React.createRef();
  let dniRef = React.createRef();
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let edadRef = React.createRef();

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

  
  return (
    <Layout>
      <AltaServicio
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
