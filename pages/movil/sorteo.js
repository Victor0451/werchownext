import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { confirmAlert } from "react-confirm-alert"; // Import
import { ip } from "../../config/config";
import FormSorteo from "../../components/movil/FormSorteo";
import ImprimirComprobanteSorteo from "../../components/movil/ImprimirComprobanteSorteo";

const Sorteo = () => {
  let noSocioRef = React.createRef();
  let dniRef = React.createRef();
  let mailRef = React.createRef();
  let telefonoRef = React.createRef();

  const [errores, guardarErrores] = useState(null);
  const [registro, guardarRegistro] = useState(null);
  const [alertas, guardarAlertas] = useState(null);

  const registrarNoSocio = async () => {
    guardarErrores(null);

    let emailRegex =
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono

    if (noSocioRef.current.value === "") {
      guardarErrores("Debes ingresar tu apellido y nombre");
    } else if (dniRef.current.value === "") {
      guardarErrores("Debes ingresar tu DNI");
    } else if (telefonoRef.current.value === "") {
      guardarErrores("Debes ingresar un numero de telefono");
    } else if (mailRef.current.value === "") {
      guardarErrores("Debes ingresar una direccion de mail");
    } else {
      if (emailRegex.test(mailRef.current.value)) {
        let noSoc = {
          solicitante: noSocioRef.current.value,
          dni: dniRef.current.value,
          telefono: telefonoRef.current.value,
          mail: mailRef.current.value,
          fecha: moment().format("YYYY-MM-DD"),
          detalle: "POLICIA",
          estado: 1,
        };

        await axios
          .get(`${ip}api/clubwerchow/sorteo/checksoli/${noSoc.dni}`)
          .then((res) => {
            if (res.data) {
              toastr.info(
                "Usted ya se encuentra inscripto y participando por el sorteo.",
                "ATENCION"
              );
              guardarAlertas(
                "Usted ya se encuentra inscripto y participando por el sorteo."
              );
            } else {
              axios
                .post(`${ip}api/clubwerchow/sorteo/regsolicitud`, noSoc)
                .then((res1) => {
                  if (res1.status === 200) {
                    toastr.success(
                      "Sus datos fueron registrados con exito",
                      "ATENCION"
                    );

                    guardarRegistro(res1.data);

                    // mandarMail(noSoc);
                  }
                })
                .catch((error) => {
                  console.log(error);
                  toastr.error(
                    "Ocurrio un error al registrar sus datos",
                    "ATENCION"
                  );
                });
            }
          })
          .catch((error) => {
            console.log(error);
            toastr.error(
              "Ocurrio un error al verificar su existencia",
              "ATENCION"
            );
          });
      } else {
        guardarErrores(
          "Debes ingresar una direccion de mail valida, vefirica que al principio y/o final de la direccion no existan espacios"
        );
      }
    }
  };

  const mandarMail = (array) => {
    fetch("/api/mail/sgi/sorteo", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    })
      .then((res) => {
        if (res.status === 200) {
          toastr.info(
            "Se envio un email con la confirmacion de su solicitud. Muchas Gracias.",
            "ATENCION"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout f={"nonav"}>
      {!registro ? (
        <FormSorteo
          registrarNoSocio={registrarNoSocio}
          noSocioRef={noSocioRef}
          dniRef={dniRef}
          mailRef={mailRef}
          telefonoRef={telefonoRef}
          errores={errores}
          alertas={alertas}
        />
      ) : (
        <ImprimirComprobanteSorteo registro={registro} />
      )}
    </Layout>
  );
};

export default Sorteo;
