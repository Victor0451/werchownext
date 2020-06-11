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
  let cremacionRef = React.createRef();

  // DETALLES ATAUD
  let tipoAtaudRef = React.createRef();
  let caracteristicaAtaudRef = React.createRef();
  let usoAtaudRef = React.createRef();

  const [descriart, guardarDescriArt] = useState(null);
  const [codigo, guardarCodigo] = useState(null);
  const [caracteristicas, guardarCaracteristica] = useState(null);
  const [uso, guardarUso] = useState(null);
  const [precioserv, guardarPrecioServ] = useState(null);

  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
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
        cremacionRef={cremacionRef}
        // DETALLES ATAUD
        tipoAtaudRef={tipoAtaudRef}
        caracteristicaAtaudRef={caracteristicaAtaudRef}
        descriart={descriart}
        codigo={codigo}
        caracteristicas={caracteristicas}
        uso={uso}
        usoAtaudRef={usoAtaudRef}
        //PRECIO
        precioserv={precioserv}
      />
    </Layout>
  );
};

export default nuevo;
