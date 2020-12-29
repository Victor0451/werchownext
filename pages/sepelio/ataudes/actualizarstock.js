import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";

import moment from "moment";
import toastr from "toastr";
import ActualizarStock from "../../../components/sepelio/ataudes/ActualizarStock";

const actualizar = () => {
  let nuevoStockRef = React.createRef();
  let observacionRef = React.createRef();
  let idataudRef = React.createRef();

  const [user, guardarUsuario] = useState(null);

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

  const updateStock = async () => {
    const stock = {
      stock: nuevoStockRef.current.value,
      observaciones: observacionRef.current.value,
      fecha_reposicion: moment().format("YYYY-MM-DD"),
      idataud: idataudRef.current.value,
      operador: user,
    };

    if (stock.stock === "") {
      toastr.warning("Debes ingresar el nuevo stock", "ATENCION");
    } else {
      await axios
        .put(
          `http://190.231.32.232:5002/api/sepelio/ataudes/nuevostock/${stock.idataud}`,
          stock
        )
        .then((res) => {
          if (res.status === 200) {
            toastr.success("El stock se actualizo correctamente", "ATENCION");
          }
          setTimeout(() => {
            window.location.reload();
          }, 300);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Layout>
      <ActualizarStock
        nuevoStockRef={nuevoStockRef}
        observacionRef={observacionRef}
        idataudRef={idataudRef}
        updateStock={updateStock}
      />
    </Layout>
  );
};

export default actualizar;
