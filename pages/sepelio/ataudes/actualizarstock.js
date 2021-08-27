import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";

import moment from "moment";
import toastr from "toastr";
import ActualizarStock from "../../../components/sepelio/ataudes/ActualizarStock";
import { ip } from "../../../config/config";
import { confirmAlert } from "react-confirm-alert";

const actualizar = () => {
  let nuevoStockRef = React.createRef();
  let observacionRef = React.createRef();
  let idataudRef = React.createRef();
  let nRemitoRef = React.createRef();
  let fechaRec = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [sf, guardarSF] = useState(null);
  const [sa, guardarSA] = useState(null);
  
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
      stock: sf,
      observaciones: observacionRef.current.value,
      fecha_reposicion: moment().format("YYYY-MM-DD"),
      idataud: idataudRef.current.value,
      operador: user,
    };

    if (stock.stock === "") {
      toastr.warning("Debes Ingresar el nuevo stock", "ATENCION");
    } else if (nRemitoRef.current.value === "") {
      toastr.warning("Debes ingresar el numero de remito", "ATENCION");
    } else if (fechaRec.current.value === "") {
      toastr.warning(
        "Debes ingresar la fecha de recepcion del ataud",
        "ATENCION"
      );
    } else {
      await confirmAlert({
        title: "ATENCION",
        message: "¿Seguro quieres actualizar el stock?",
        buttons: [
          {
            label: "Si",
            onClick: () => {
              axios
                .put(
                  `${ip}api/sepelio/ataudes/nuevostock/${stock.idataud}`,
                  stock
                )
                .then((res) => {
                  if (res.status === 200) {
                    toastr.success(
                      "El stock se actualizo correctamente",
                      "ATENCION"
                    );
                  }

                  regHistorial();

                  setTimeout(() => {
                    window.location.reload();
                  }, 300);
                })
                .catch((error) => {
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
    }
  };

  const regHistorial = async () => {
    const historial = {
      idataud: idataudRef.current.value,
      stock_anterior: sa,
      stock_nuevo: sf,
      fecha_carga: moment().format("YYYY-MM-DD"),
      fecha_recepcion: fechaRec.current.value,
      remito: nRemitoRef.current.value,
      operador: user,
    };

    await axios
      .post(`${ip}api/sepelio/ataudes/reghistorial`, historial)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          toastr.info("Se registro el movimiento en el historial", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const stockFinal = (sa, sn) => {
    guardarSA(sa);
    let sf = parseInt(sa) + parseInt(sn);
    guardarSF(sf);
  };

  return (
    <Layout>
      <ActualizarStock
        nuevoStockRef={nuevoStockRef}
        observacionRef={observacionRef}
        idataudRef={idataudRef}
        updateStock={updateStock}
        stockFinal={stockFinal}
        sf={sf}
        nRemitoRef={nRemitoRef}
        fechaRec={fechaRec}
        
      />
    </Layout>
  );
};

export default actualizar;
