import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from "toastr";
import { ip } from "../../../config/config";
import ListadoVentasSinServicio from "../../../components/sepelio/ataudes/ListadoVentasSinServicio";
import { confirmAlert } from "react-confirm-alert"; // Import

const listadoventassinservicio = () => {
  const [usuario, guardarUsuario] = useState(null);
  const [ventas, guardarVentas] = useState(null);

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

      traerVentasSinServ();
    }
  }, []);

  const traerVentasSinServ = async () => {
    await axios
      .get(`${ip}api/sepelio/ataudventa/ventas`)
      .then((res) => {
        guardarVentas(res.data);
      })
      .catch((error) => {
        toastr.error(
          "Ocurrio un error al traer las ventas de ataudes sin servicio",
          "ATENCION"
        );
        console.log(error);
      });
  };

  const updateStockAtaud = async (idataud) => {
    await axios
      .put(`${ip}api/sepelio/ataudventa/updatestock/${idataud}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarVentaSinServ = async (row) => {
    console.log(row);

    await confirmAlert({
      title: "ATENCION",
      message: "¿Estas seguro de eliminar la venta?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(
                `${ip}api/sepelio/ataudventa/eliminarventa/${row.idataudventa}`
              )
              .then((res) => {
                if (res.status === 200) {
                  toastr.success("La venta se elimino con exito", "ATENCION");

                  updateStockAtaud(row.idataud, row.stock);

                  traerVentasSinServ();
                }
              })
              .catch((error) => {
                toastr.error(
                  "Ocurrio un error al eliminar la venta",
                  "ATENCION"
                );
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <Layout>
      <ListadoVentasSinServicio
        listado={ventas}
        eliminarVentaSinServ={eliminarVentaSinServ}
      />
    </Layout>
  );
};

export default listadoventassinservicio;
