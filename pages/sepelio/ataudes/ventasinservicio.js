import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from "toastr";
import FormVentaSinServicio from "../../../components/sepelio/ataudes/FormVentaSinServicio";
import { ip } from "../../../config/config";

const ventasinservicio = () => {
  let contratoRef = React.createRef();
  let apellidoFallRef = React.createRef();
  let nombreFallRef = React.createRef();
  let dniFallRef = React.createRef();
  let domFallRef = React.createRef();
  let nDomFallRef = React.createRef();
  let barrioFallRef = React.createRef();
  let telefonoFallRef = React.createRef();
  let apellidoSolRef = React.createRef();
  let nombreSolRef = React.createRef();
  let dniSolRef = React.createRef();
  let telefonoSolRef = React.createRef();
  let parentescoSolRef = React.createRef();

  const [ataud, guardarStock] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [errval, guardarErrVal] = useState(null);
  const [usuario, guardarUsuario] = useState(null);

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

  const selcasofrm = (row) => {
    guardarStock(row.original);
    console.log(ataud);
  };

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titular/${contrato}`)
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);

          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarFicha(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titularm/${contrato}`)
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);

          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const updateStockAtaud = async (idataud, stock) => {
    let nustock = stock - 1;
    console.log(nustock);
    await axios
      .put(`${ip}api/sepelio/ataudes/updatestock/${idataud}`, { nustock })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registrarVenta = async () => {
    guardarErrVal(null);

    if (!ataud) {
      guardarErrVal("Debes elegir un ataud");
    } else {
      const venta = {
        idataud: ataud.idataud,
        ataud: `${ataud.nombre} - ${ataud.uso}`,
        contrato: "",
        apellido_fall: "",
        nombre_fall: "",
        dni_fall: "",
        dom_fall: "",
        ndom_fall: "",
        barrio_fall: "",
        telefono_fall: "",
        apellido_sol: "",
        nombre_sol: "",
        dni_sol: "",
        telefono_sol: "",
        fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
        operador: usuario,
      };

      if (ficha) {
        (venta.contrato = ficha.CONTRATO),
          (venta.apellido_fall = ficha.APELLIDOS),
          (venta.nombre_fall = ficha.NOMBRES),
          (venta.dni_fall = ficha.NRO_DOC),
          (venta.dom_fall = ficha.CALLE),
          (venta.ndom_fall = ficha.NRO_CALLE),
          (venta.barrio_fall = ficha.BARRIO),
          (venta.telefono_fall = ficha.TELEFONO);
      } else if (!ficha) {
        venta.contrato = "0";

        if (apellidoFallRef.current.value === "") {
          guardarErrVal("Debes ingresar el apellido del Fallecido");
        } else {
          venta.apellido_fall = apellidoFallRef.current.value;

          if (nombreFallRef.current.value === "") {
            guardarErrVal("Debes ingresar el nombre del Fallecido");
          } else {
            venta.nombre_fall = nombreFallRef.current.value;

            if (dniFallRef.current.value === "") {
              guardarErrVal("Debes ingresar el dni del Fallecido");
            } else {
              venta.dni_fall = dniFallRef.current.value;

              if (domFallRef.current.value === "") {
                guardarErrVal("Debes ingresar el domicilio del Fallecido");
              } else {
                venta.dom_fall = domFallRef.current.value;

                if (nDomFallRef.current.value === "") {
                  guardarErrVal(
                    "Debes ingresar el N° del domicilio del Fallecido"
                  );
                } else {
                  venta.ndom_fall = nDomFallRef.current.value;

                  if (barrioFallRef.current.value === "") {
                    guardarErrVal("Debes ingresar el barrio del Fallecido");
                  } else {
                    venta.barrio_fall = barrioFallRef.current.value;

                    if (telefonoFallRef.current.value === "") {
                      guardarErrVal("Debes ingresar el telefono del Fallecido");
                    } else {
                      venta.telefono_fall = telefonoFallRef.current.value;
                    }
                  }
                }
              }
            }
          }
        }
      }

      if (apellidoSolRef.current.value === "") {
        guardarErrVal("Debes ingresar el apellido del Solicitante");
      } else {
        venta.apellido_sol = apellidoSolRef.current.value;

        if (nombreSolRef.current.value === "") {
          guardarErrVal("Debes ingresar el nombre del Solicitante");
        } else {
          venta.nombre_sol = nombreSolRef.current.value;

          if (dniSolRef.current.value === "") {
            guardarErrVal("Debes ingresar el dni del Solicitante");
          } else {
            venta.dni_sol = dniSolRef.current.value;

            if (telefonoSolRef.current.value === "") {
              guardarErrVal("Debes ingresar el telefono del Solicitante");
            } else {
              venta.telefono_sol = telefonoSolRef.current.value;

              if (parentescoSolRef.current.value === "") {
                guardarErrVal("Debes ingresar el parentesco del Solicitante");
              } else {
                venta.parentesco_sol = parentescoSolRef.current.value;

                await axios
                  .post(`${ip}api/sepelio/ataudventa/nuevaventa`, venta)
                  .then((res) => {
                    if (res.status === 200) {
                      toastr.success(
                        "La venta se registro con exito",
                        "ATENCION"
                      );

                      updateStockAtaud(ataud.idataud, ataud.stock);

                      setTimeout(() => {
                        Router.push(
                          "/sepelio/ataudes/listadoventassinservicio"
                        );
                      }, 500);
                    }
                  })
                  .catch((error) => {
                    toastr.error(
                      "Ocurrio un error al registrar la venta",
                      "ATENCION"
                    );
                    console.log(error);
                  });
              }
            }
          }
        }
      }
    }
  };

  return (
    <Layout>
      <FormVentaSinServicio
        selcasofrm={selcasofrm}
        ataud={ataud}
        buscarTitular={buscarTitular}
        buscarTitularM={buscarTitularM}
        contratoRef={contratoRef}
        socio={ficha}
        errores={errores}
        apellidoFallRef={apellidoFallRef}
        nombreFallRef={nombreFallRef}
        dniFallRef={dniFallRef}
        domFallRef={domFallRef}
        nDomFallRef={nDomFallRef}
        barrioFallRef={barrioFallRef}
        telefonoFallRef={telefonoFallRef}
        apellidoSolRef={apellidoSolRef}
        nombreSolRef={nombreSolRef}
        dniSolRef={dniSolRef}
        telefonoSolRef={telefonoSolRef}
        parentescoSolRef={parentescoSolRef}
        registrarVenta={registrarVenta}
        errval={errval}
      />
    </Layout>
  );
};

export default ventasinservicio;
