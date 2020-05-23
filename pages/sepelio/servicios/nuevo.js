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

  // DETALLES SERVICIO
  let caparRef = React.createRef();
  let avisoRef = React.createRef();
  let autoDueloRef = React.createRef();
  let placaRef = React.createRef();
  let carrozaFuRef = React.createRef();
  let salaRef = React.createRef();
  let tramitesRef = React.createRef();
  let cochePortaRef = React.createRef();
  let adicionalRef = React.createRef();

  // DETALLES ATAUD
  let tipoAtaudRef = React.createRef();
  let caracteristicaAtaudRef = React.createRef();

  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const selcaso = (index) => {
    console.log(index);
  };

  const nuevoServicio = async (e) => {
    e.preventDefault();

    const servicio = {
      empresa: empresaRef.current.value,
      dni: dniRef.current.value,
      apellido: apellidoRef.current.value,
      nombre: nombreRef.current.value,
      edad: edadRef.current.value,
      calle: calleRef.current.value,
      numero: numeroRef.current.value,
      barrio: barrioRef.current.value,
      fecha_fallecimiento: fechaFallecimientoRef.current.value,
      lugar_fallecimiento: lugarFallecimientoRef.current.value,
      tipo_servicio: tipoServicioRef.current.value,
      casa_mortuaria: casaMortuariaRef.current.value,
      fecha_inhumacion: fechaInumacionRef.current.value,
      hora_inhumacion: horaInumacionRef.current.value,
      cementerio: cementerioRef.current.value,
      capar: caparRef.current.checked,
      placa: placaRef.current.checked,
      tramites: tramitesRef.current.checked,
      aviso: avisoRef.current.checked,
      carroza: carrozaFuRef.current.checked,
      portacorona: cochePortaRef.current.checked,
      autoduelo: autoDueloRef.current.checked,
      salavel: salaRef.current.checked,
      adicional: adicionalRef.current.checked,
      ataud: tipoAtaudRef.current.value,
      carasteristicas: caracteristicaAtaudRef.current.value,
    };

    console.log(servicio);
  };

  return (
    <Layout>
      <AltaServicio
        selcaso={selcaso}
        nuevoServicio={nuevoServicio}
        // DETALLES EXTINTO
        empresaRef={empresaRef}
        dniRef={dniRef}
        apellidoRef={apellidoRef}
        nombreRef={nombreRef}
        edadRef={edadRef}
        calleRef={calleRef}
        numeroRef={numeroRef}
        barrioRef={barrioRef}
        fechaFallecimientoRef={fechaFallecimientoRef}
        lugarFallecimientoRef={lugarFallecimientoRef}
        tipoServicioRef={tipoServicioRef}
        casaMortuariaRef={casaMortuariaRef}
        fechaInumacionRef={fechaInumacionRef}
        horaInumacionRef={horaInumacionRef}
        cementerioRef={cementerioRef}
        // DETALLES SERVICIO
        caparRef={caparRef}
        avisoRef={avisoRef}
        autoDueloRef={autoDueloRef}
        placaRef={placaRef}
        carrozaFuRef={carrozaFuRef}
        salaRef={salaRef}
        tramitesRef={tramitesRef}
        cochePortaRef={cochePortaRef}
        adicionalRef={adicionalRef}
        // DETALLES ATAUD
        tipoAtaudRef={tipoAtaudRef}
        caracteristicaAtaudRef={caracteristicaAtaudRef}
      />
    </Layout>
  );
};

export default nuevo;
