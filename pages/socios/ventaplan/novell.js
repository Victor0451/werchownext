import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import moment from "moment";
import AltaNovell from "../../../components/socios/ventaplan/novell/AltaNovell";
import useValidacion from "../../../hooks/useValidacion";
import validarAltaNovell from "../../../validacion/validarAltaNovell";

const STATE_INICIAL = {
  servicio: "",
  monto: "",
  montoletra: "",
  anticipo: "",
  cuota: "",
  gastosadm: "",
  apellidosol: "",
  nombresol: "",
  dnisol: "",
  estcivilsol: "",
  fecnacsol: "",
  domsol: "",
  domnumsol: "",
  pisosol: "",
  barriosol: "",
  localidadsol: "",
  codpostalsol: "",
  telefonosol: "",
  movilsol: "",
  apellidoben: "",
  nombreben: "",
  dniben: "",
  estcivilben: "",
  fecnacben: "",
  domben: "",
  domnumben: "",
  pisoben: "",
  barrioben: "",
  localidadben: "",
  codpostalben: "",
  telefonoben: "",
  movilben: "",
};

const novell = () => {
  const [userData, guardarUsuario] = useState(null);

  let token = jsCookie.get("token");
  let usuario = jsCookie.get("usuario");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }
    }
  }, []);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaNovell, altaNovell);

  const {
    servicio,
    monto,
    montoletra,
    anticipo,
    cuota,
    gastosadm,
    apellidosol,
    nombresol,
    dnisol,
    estcivilsol,
    fecnacsol,
    domsol,
    domnumsol,
    pisosol,
    barriosol,
    localidadsol,
    codpostalsol,
    telefonosol,
    movilsol,
    apellidoben,
    nombreben,
    dniben,
    estcivilben,
    fecnacben,
    domben,
    domnumben,
    pisoben,
    barrioben,
    localidadben,
    codpostalben,
    telefonoben,
    movilben,
  } = valores;

  async function altaNovell() {
    const novell = {
      servicio: servicio,
      fecha_recepcion: moment().format("YYYY-MM-DD"),
      monto: monto,
      monto_letra: montoletra,
      anticipo: anticipo,
      cuota: cuota,
      gastos_adm: gastosadm,
      apellido_sol: apellidosol,
      nombre_sol: nombresol,
      dni_sol: dnisol,
      estcivil_sol: estcivilsol,
      fecha_nac_sol: fecnacsol,
      dom_sol: domsol,
      domnum_sol: domnumsol,
      piso_sol: pisosol,
      barrio_sol: barriosol,
      localidad_sol: localidadsol,
      codpostal_sol: codpostalsol,
      telefono_sol: telefonosol,
      movil_sol: movilsol,
      apellido_ben: apellidoben,
      nombre_ben: nombreben,
      dni_ben: dniben,
      estcivil_ben: estcivilben,
      fecha_nac_ben: fecnacben,
      dom_ben: domben,
      domnum_ben: domnumben,
      piso_ben: pisoben,
      barrio_ben: barrioben,
      localidad_ben: localidadben,
      codpostal_ben: codpostalben,
      telefono_ben: telefonoben,
      movil_ben: movilben,
      operador: userData,
    };

    console.log(novell);

    await axios
      .post(`http://192.168.1.102:5002/api/sgi/socios/nuevonovell`, novell)
      .then((res) => {
        console.log(res);
        toastr.success("El novell se cargo correctamente", "ATENCION");
        window.location.replace("/socios/ventaplan/listadonovell");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout>
      <AltaNovell
        servicio={servicio}
        monto={monto}
        montoletra={montoletra}
        anticipo={anticipo}
        cuota={cuota}
        gastosadm={gastosadm}
        apellidosol={apellidosol}
        nombresol={nombresol}
        dnisol={dnisol}
        estcivilsol={estcivilsol}
        fecnacsol={fecnacsol}
        domsol={domsol}
        domnumsol={domnumsol}
        pisosol={pisosol}
        barriosol={barriosol}
        localidadsol={localidadsol}
        codpostalsol={codpostalsol}
        telefonosol={telefonosol}
        movilsol={movilsol}
        apellidoben={apellidoben}
        nombreben={nombreben}
        dniben={dniben}
        estcivilben={estcivilben}
        fecnacben={fecnacben}
        domben={domben}
        domnumben={domnumben}
        pisoben={pisoben}
        barrioben={barrioben}
        localidadben={localidadben}
        codpostalben={codpostalben}
        telefonoben={telefonoben}
        movilben={movilben}
        errores={errores}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default novell;
