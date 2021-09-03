import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import LegajoArchivos from "../../../components/prestamos/legajovirtual/LegajoArchivos";
import { ip } from "../../../config/config";

const legajo = () => {
  const [archivos, guardarArchivos] = useState(null);
  const [prestamo, guardarPrestamo] = useState(null);
  const [ficha, guardarFicha] = useState(null);

  let token = jsCookie.get("token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerAchivos(router.query.id);
      traerPrestamo(router.query.idprest);
      traerSocio(router.query.contrato);
    }
  }, []);

  const traerPrestamo = async (id) => {
    await axios
      .get(`${ip}api/sgi/prestamos/prestamosporid/${id}`)
      .then((res) => {
        let prestamo = res.data;
        guardarPrestamo(prestamo);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAchivos = async (id) => {
    await axios
      .get(`${ip}api/archivos/legajovirtualprestamos/listaarchivos/${id}`)
      .then((res) => {
        let archivos = res.data;
        guardarArchivos(archivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerSocio = async (contrato) => {
    await axios
      .get(`${ip}api/sgi/prestamos/consultarficha/${contrato}`)
      .then((res) => {
        let ficha = res.data;
        guardarFicha(ficha);
        console.log(ficha);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <LegajoArchivos
        archivos={archivos}
        id={router.query.id}
        ficha={ficha}
        prestamo={prestamo}
        fl={router.query.flag}
      />
    </Layout>
  );
};

export default legajo;
