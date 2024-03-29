import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import ImprimirCaratulas from "../../components/prestamos/ImprimirCaratula";
import jsCookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import { ip } from '../../config/config'

const imprimircaratula = () => {
  const [prestamos, guardarPrestamos] = useState(null);
  const [user, guardarUser] = useState(null);

  const [capitalprest, guardarCapitalprest] = useState(null);
  const [intereses, guardarIntereses] = useState(null);
  const [cuotas, guardarCuotas] = useState(null);
  const [capconint, guardarCapconint] = useState(null);
  const [cantprest, guardarCantprest] = useState(null);

  let token = jsCookie.get("token");
  let usuario = jsCookie.get("usuario");

  //   AMRADO DEL RESUMEN DEL LISTADO DE PRESTAMOS BUSCADO
  const resumenArray = (listado) => {
    let capitalprest = 0;

    let intereses = 0;

    let cuotas = 0;

    let cantprest = listado.length;

    let capconint = 0;

    for (let i = 0; i < listado.length; i++) {
      capitalprest += parseInt(listado[i].ptm_prestamo);
      cuotas += listado[i].ptm_cuotas;
      capconint +=
        parseInt(listado[i].ptm_valcuota) * parseInt(listado[i].ptm_cuotas);
    }

    intereses = capconint - capitalprest;

    guardarCantprest(cantprest);
    guardarIntereses(intereses);
    guardarCuotas(cuotas);
    guardarCapconint(capconint);
    guardarCapitalprest(capitalprest);
  };

  const prestamosPorCodigo = async (id) => {
    await axios
      .get(`${ip}api/sgi/prestamos/prestamosporcodigo`, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        let prestamos = res.data;
        guardarPrestamos(prestamos);

        resumenArray(prestamos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      if (usuario) {
        let user = JSON.parse(usuario);
        guardarUser(user);
        let id = user.codigo;

        prestamosPorCodigo(id);
      }
    }
  }, []);

  return (
    <Layout>
      <>
        {prestamos ? (
          <ImprimirCaratulas
            prestamos={prestamos}
            capitalprest={capitalprest}
            cuotas={cuotas}
            intereses={intereses}
            cantprest={cantprest}
            capconint={capconint}
            codigo={user.codigo}
          />
        ) : (
          <>
            <div className="mt-4 container border border-dark list">
              <hr className="mt-4 mb-4" />
              <div className=" mt-4 alert alert-primary text-center text-uppercase border border-dark">
                <strong> No tienes prestamos para imprimir caratula</strong>
              </div>
              <hr className="mt-4 mb-4" />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default imprimircaratula;
