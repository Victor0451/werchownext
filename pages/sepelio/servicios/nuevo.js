import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import axios from "axios";
import AltaServicio from "../../../components/sepelio/servicios/AltaServicio";

// Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarAltaServicio from "../../../validacion/validarAltaServicio";

const STATE_INICIAL = {
  fechafallecimiento: "",
  lugarfallecimiento: "",
  tiposervicio: "",
  casamortuaria: "",
  fechainhumacion: "",
  horainhumacion: "",
  cementerio: "",
  tiporetirocuerpo: "",
  tipotraslado: "",
  tipotramites: "",
  tipoaviso: "",
  tipocarrozzafu: "",
  tipoportacor: "",
  tipoautoduel: "",
  tiposalavel: "",
};

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
  let tipoAvisoRef = React.createRef();
  let autoDueloRef = React.createRef();
  let tipoAutoDuelRef = React.createRef();
  let placaRef = React.createRef();
  let carrozaFuRef = React.createRef();
  let tipoCarrozaFuRef = React.createRef();
  let salaRef = React.createRef();
  let tipoSalaRef = React.createRef();
  let tramitesRef = React.createRef();
  let tipoTramitesRef = React.createRef();
  let cochePortaRef = React.createRef();
  let tipoCochePortaRef = React.createRef();
  let trasladoRef = React.createRef();
  let tipoTrasladoRef = React.createRef();
  let retiroCuerpoRef = React.createRef();
  let tipoRetiroCuerpoRef = React.createRef();
  let observacionRef = React.createRef();

  // DETALLES ATAUD
  let tipoAtaudRef = React.createRef();
  let caracteristicaAtaudRef = React.createRef();

  const [descriart, guardarDescriArt] = useState(null);
  const [codigo, guardarCodigo] = useState(null);
  const [caracteristicas, guardarCaracteristica] = useState(null);

  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const selcaso = (index) => {
    let descriart = index.original.DESCRI_ART;
    guardarDescriArt(descriart);

    let codigo = index.original.CODIGO;
    guardarCodigo(codigo);

    let caracteristicas = index.original.CARACT;
    guardarCaracteristica(caracteristicas);
  };

  // const handleBlur = (e) => {
  //   console.log(e);
  //   if (e.target.value === "") {
  //     const errores = "Este Campo es Obligatorio";
  //     guardarErrores(errores);
  //     console.log("vacio perro");
  //   } else if (e.target.value !== "") {
  //     const errores = null;
  //     guardarErrores(errores);
  //   }

  // };

  const {
    errmsg,
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaServicio, nuevoServicio);

  const {
    empresa,
    dni,
    apellido,
    nombre,
    edad,
    fechafallecimiento,
    lugarfallecimiento,
    tiposervicio,
    casamortuaria,
    fechainhumacion,
    horainhumacion,
    cementerio,
    tiporetirocuerpo,
    tipotraslado,
    tipotramites,
    tipoaviso,
    tipocarrozzafu,
    tipoportacor,
    tipoautoduel,
    tiposalavel,
  } = valores;

  async function nuevoServicio(e) {
    e.preventDefault();
    try {
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
        retirocuerpo: retiroCuerpoRef.current.checked,
        tiporetirocuerpo: tipoRetiroCuerpoRef.current.value,
        traslado: trasladoRef.current.checked,
        tipotraslado: tipoTrasladoRef.current.value,
        capar: caparRef.current.checked,
        placa: placaRef.current.checked,
        tramites: tramitesRef.current.checked,
        tipotramites: tipoTramitesRef.current.value,
        aviso: avisoRef.current.checked,
        tipoaviso: tipoAvisoRef.current.value,
        carroza: carrozaFuRef.current.checked,
        tipocarroza: tipoCarrozaFuRef.current.value,
        portacorona: cochePortaRef.current.checked,
        tipococheporta: tipoCochePortaRef.current.value,
        autoduelo: autoDueloRef.current.checked,
        tipoautoduel: tipoAutoDuelRef.current.value,
        salavel: salaRef.current.checked,
        tiposalavel: tipoSalaRef.current.value,
        ataud: tipoAtaudRef.current.value,
        carasteristicas: caracteristicaAtaudRef.current.value,
        observacion: observacionRef.current.value,
      };

      await axios
        .post(
          `http://190.231.32.232:5002/api/sepelio/servicio/nuevoservicio`,
          servicio
        )
        .then((res) => {
          console.log("todo ok", res);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

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
        tipoAvisoRef={tipoAvisoRef}
        autoDueloRef={autoDueloRef}
        tipoAutoDuelRef={tipoAutoDuelRef}
        placaRef={placaRef}
        carrozaFuRef={carrozaFuRef}
        tipoCarrozaFuRef={tipoCarrozaFuRef}
        salaRef={salaRef}
        tipoSalaRef={tipoSalaRef}
        tramitesRef={tramitesRef}
        tipoTramitesRef={tipoTramitesRef}
        cochePortaRef={cochePortaRef}
        tipoCochePortaRef={tipoCochePortaRef}
        retiroCuerpoRef={retiroCuerpoRef}
        tipoRetiroCuerpoRef={tipoRetiroCuerpoRef}
        trasladoRef={trasladoRef}
        tipoTrasladoRef={tipoTrasladoRef}
        observacionRef={observacionRef}
        // DETALLES ATAUD
        tipoAtaudRef={tipoAtaudRef}
        caracteristicaAtaudRef={caracteristicaAtaudRef}
        descriart={descriart}
        codigo={codigo}
        caracteristicas={caracteristicas}
        // VALIDACION
        errores={errores}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleBlur={handleBlur}
        fechafallecimiento={fechafallecimiento}
        lugarfallecimiento={lugarfallecimiento}
        tiposervicio={tiposervicio}
        casamortuaria={casamortuaria}
        fechainhumacion={fechainhumacion}
        horainhumacion={horainhumacion}
        cementerio={cementerio}
        tiporetirocuerpo={tiporetirocuerpo}
        tipotraslado={tipotraslado}
        tipotramites={tipotramites}
        tipoaviso={tipoaviso}
        tipocarrozzafu={tipocarrozzafu}
        tipoportacor={tipoportacor}
        tipoautoduel={tipoautoduel}
        tiposalavel={tiposalavel}
        errmsg={errmsg}
        empresa={empresa}
        dni={dni}
        apellido={apellido}
        nombre={nombre}
        edad={edad}
      />
    </Layout>
  );
};

export default nuevo;
