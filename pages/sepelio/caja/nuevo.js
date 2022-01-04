import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import Router, { useRouter } from "next/router";
import NuevaCaja from "../../../components/sepelio/caja/NuevaCaja";
import toastr from "toastr";
import { ip } from '../../../config/config'
import { registrarHistoria } from "../../../utils/funciones";

const nuevo = () => {
  let montoRef = React.createRef();
  let ptoVentaRef = React.createRef();
  let nfacturaRef = React.createRef();
  let detalleRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [empresa, guardarEmpresa] = useState(null);
  const [concepto, guardarConcepto] = useState(null);
  const [tipofactura, guardarFactura] = useState(null);
  const [error, guardarError] = useState(null);

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

  const handleChange = (value, flag) => {
    if (flag === "empresa") {
      guardarEmpresa(value.label);
    }
    if (flag === "concepto") {
      guardarConcepto(value.label);
    }
    if (flag === "tipofactura") {
      guardarFactura(value.label);
    }
  };

  const newCaja = async () => {
    guardarError(null);

    const nuevaCaja = {
      empresa: empresa,
      monto: montoRef.current.value,
      concepto: concepto,
      detalle: detalleRef.current.value,
      fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
      tipofactura: tipofactura,
      ptoventa: ptoVentaRef.current.value,
      nfactura: nfacturaRef.current.value,
      operador: user,
      estado: 1,
      gastos: 0,
      totalcaja: montoRef.current.value,
    };

    if (nuevaCaja.empresa === null) {
      guardarError("Debes selecionar una empresa");
    } else if (nuevaCaja.concepto === null) {
      guardarError("Debes selecionar un concepto");
    } else if (nuevaCaja.tipofactura === null) {
      guardarError("Debes selecionar un tipo de factura");
    } else if (nuevaCaja.monto === "") {
      guardarError("Debes ingresar un monto");
    }

    console.log(nuevaCaja);
    await axios
      .post(
        `${ip}api/sepelio/cajasepelio/nuevacaja`,
        nuevaCaja
      )
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Se habilito la caja con exito", "ATENCION");

          let accion = `Se habilito caja de sepelio N° ${res.data.idcaja} por $ ${res.data.monto}`

          registrarHistoria(accion, user)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <NuevaCaja
        user={user}
        handleChange={handleChange}
        montoRef={montoRef}
        ptoVentaRef={ptoVentaRef}
        nfacturaRef={nfacturaRef}
        detalleRef={detalleRef}
        newCaja={newCaja}
        error={error}
      />
    </Layout>
  );
};

export default nuevo;
