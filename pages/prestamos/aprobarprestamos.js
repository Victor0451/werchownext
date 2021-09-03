import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import TablaPrestamosPendientes from "../../components/prestamos/TablaPrestamosPrendientes";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../config/config";
import moment from "moment";
import toastr from "toastr";

const aprobarprestamos = () => {
  const [prestamospen, guardarPrestamosPen] = useState(null);
  const [user, guardarUser] = useState(null);
  const [capitalprest, guardarCapitalprest] = useState(null);
  const [intereses, guardarIntereses] = useState(null);
  const [cuotas, guardarCuotas] = useState(null);
  const [capconint, guardarCapconint] = useState(null);
  const [cantprest, guardarCantprest] = useState(null);

  const prestamosPendientes = async () => {
    await axios
      .get(`${ip}api/sgi/prestamos/listadoprestamospendientes`)
      .then((res) => {
        if (res.data.length !== 0) {
          const prestamospen = res.data;
          guardarPrestamosPen(prestamospen);

          resumenArray(prestamospen);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   AMRADO DEL RESUMEN DEL LISTADO DE PRESTAMOS BUSCADO
  const resumenArray = (listado) => {
    let capitalprest = 0;

    let intereses = 0;

    let cuotas = 0;

    let cantprest = listado.length;

    let capconint = 0;

    for (let i = 0; i < listado.length; i++) {
      capitalprest += parseInt(listado[i].ptm_prestamo);
      intereses += listado[i].ptm_valcuota;
      cuotas += listado[i].ptm_cuotas;
      capconint += listado[i].ptm_valcuota * listado[i].ptm_cuotas;
    }

    guardarCantprest(cantprest);
    guardarIntereses(intereses);
    guardarCuotas(cuotas);
    guardarCapconint(capconint);
    guardarCapitalprest(capitalprest);
  };

  let token = jsCookie.get("token");
  let usuario = jsCookie.get("usuario");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      if (usuario) {
        let user = JSON.parse(usuario);
        guardarUser(user);
      }
      prestamosPendientes();
    }
  }, []);

  const aprobarPrestamos = async (row) => {
    const id = row.original.ptm_id;

    await axios
      .put(`${ip}api/sgi/prestamos/aprobarprestamo/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Se aprobo el prestamo con exito", "Atencion");
          registrarHistorialAprobacion(row);
          setTimeout(() => {
            Router.reload();
          }, 1500);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registrarHistorialAprobacion = async (data) => {
    const historial = {
      operador: user.usuario,
      idprestamo: data.original.ptm_id,
      contrato: data.original.ptm_ficha,
      afiliado: data.original.ptm_afi,
      fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
      productor: data.original.ptm_op,
    };

    await axios
      .post(`${ip}api/sgi/prestamos/reghistorial`, historial)
      .then((res) => {
        if (res.status === 200) {
          toastr.info("Esta accion se registrara en el historial", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al registrar el historial", "ATENCION");
      });
  };

  return (
    <Layout>
      <>
        {prestamospen ? (
          <TablaPrestamosPendientes
            data={prestamospen}
            capitalprest={capitalprest}
            cuotas={cuotas}
            intereses={intereses}
            cantprest={cantprest}
            capconint={capconint}
            aprobarPrestamos={aprobarPrestamos}
            codigo={user.codigo}
          />
        ) : (
          <>
            <div className="container">
              <hr className="mt-4 mb-4" />
              <div className=" mt-4 alert alert-primary text-center text-uppercase">
                <strong> No hay prestamos pendientes de aprobacion</strong>
              </div>
              <hr className="mt-4 mb-4" />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default aprobarprestamos;
