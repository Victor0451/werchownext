import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout"
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import { confirmAlert } from 'react-confirm-alert';
import BuscarSocio from "../../../../components/gestion/mutual/recibos/BuscarSocio";
import EmitirRecibo from "../../../../components/gestion/mutual/recibos/EmitirRecibo";

const emisionrecibo = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();
  let mesRef = React.createRef();
  let anoRef = React.createRef();
  let importeRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [adhs, guardarAdhs] = useState(null);
  const [cuofija, guardarCuoFija] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [nupagos, guardarNuPagos] = useState([]);
  const [flag, guardarFlag] = useState(false);
  const [recibo, guardarRecibo] = useState(null);
  const [listado, guardarListSocios] = useState(null);


  const traerPagosM = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/pagos/pagosmutual/${contrato}`)
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerAdhsM = async (contrato) => {
    await axios
      .get(`${ip}api/mutual/adherent/adherentestit/${contrato}`)
      .then((res) => {
        guardarAdhs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerCuoFijaM = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/cuofija/cuomutual/${contrato}`)
      .then((res) => {
        guardarCuoFija(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al tarer la cuota", "ATENCION");
        console.log(error);
      });
  };

  const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarCuoFija(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titularm/${contrato}`)
        .then((res) => {
          if (res.data[0].length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            let ficha = res.data[0][0];
            guardarFicha(ficha);

            traerPagosM(ficha.CONTRATO);

            traerAdhsM(ficha.CONTRATO);

            traerCuoFijaM(ficha.CONTRATO);

            if (
              ficha.GRUPO === 1001 ||
              ficha.GRUPO === 1005 ||
              ficha.GRUPO === 1006 ||
              ficha.GRUPO === 3444 ||
              ficha.GRUPO === 3666 ||
              ficha.GRUPO === 3777 ||
              ficha.GRUPO === 3888 ||
              ficha.GRUPO === 3999 ||
              ficha.GRUPO === 4004 ||
              ficha.GRUPO === 7777 ||
              ficha.GRUPO === 8500
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha.GRUPO === 3400 ||
              ficha.GRUPO === 3600 ||
              ficha.GRUPO === 3700 ||
              ficha.GRUPO === 3800 ||
              ficha.GRUPO === 3900 ||
              ficha.GRUPO === 4000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
            } else if (
              ficha.GRUPO >= 5000 &&
              ficha.GRUPO < 7777
            ) {
              toastr.warning(
                `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
            }
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

  const buscarTitularDniM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarCuoFija(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titulardnim/${dni}`)
        .then((res) => {
          if (res.data[0].length === 0) {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          } else {
            guardarFlag(true);

            let ficha = res.data[0][0];
            guardarFicha(ficha);

            traerPagosM(ficha.CONTRATO);

            traerAdhsM(ficha.CONTRATO);

            traerCuoFijaM(ficha.CONTRATO);

            if (
              ficha.GRUPO === 1001 ||
              ficha.GRUPO === 1005 ||
              ficha.GRUPO === 1006 ||
              ficha.GRUPO === 3444 ||
              ficha.GRUPO === 3666 ||
              ficha.GRUPO === 3777 ||
              ficha.GRUPO === 3888 ||
              ficha.GRUPO === 3999 ||
              ficha.GRUPO === 4004 ||
              ficha.GRUPO === 7777 ||
              ficha.GRUPO === 8500
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha.GRUPO === 3400 ||
              ficha.GRUPO === 3600 ||
              ficha.GRUPO === 3700 ||
              ficha.GRUPO === 3800 ||
              ficha.GRUPO === 3900 ||
              ficha.GRUPO === 4000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
            } else if (
              ficha.GRUPO >= 5000 &&
              ficha.GRUPO < 7777
            ) {
              toastr.warning(
                `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
            }
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

  const preCargarPago = () => {
    const prepago = {
      SERIE: recibo.SERIE,
      NRO_RECIBO: recibo.NRO_RECIBO + 1,
      MES: mesRef.current.value,
      ANO: anoRef.current.value,
      IMPORTE: importeRef.current.value,
      DIA_REN: moment().format("YYYY-MM-DD"),
      DIA_CAR: moment().format("YYYY-MM-DD"),
      DIA_EMI: moment().format("YYYY-MM-DD"),
      DIA_PAG: moment().format("YYYY-MM-DD"),
      HORA_CAR: moment().format("HH:mm:ss"),
      CONTRATO: ficha.CONTRATO,
      MAN_COB: "X",
      MOVIM: "P",
      OPERADOR: user.codigo,
      PUESTO: user.puestom,
    };

    if (prepago.MES === "") {
      toastr.warning("Debes ingresar el mes a cobrar", "ATENCION");
    } else if (prepago.ANO === "") {
      toastr.warning("Debes ingresar el año a cobrar", "ATENCION");
    } else {

      let encontrado = false

      if (nupagos.length === 0) {
        toastr.success("Pago pre cargado exitosamente", "ATENCION");
        guardarNuPagos([...nupagos, prepago]);
      } else {

        for (let i = 0; i < nupagos.length; i++) {
          if (nupagos[i].MES === mesRef.current.value && nupagos[i].ANO === anoRef.current.value) {
            encontrado = true;
          }
        }
        if (encontrado === true) {
          toastr.warning("El mes ingresado ya exitse", "ATENCION");
        } else if (encontrado === false) {
          toastr.success("Pago pre cargado exitosamente", "ATENCION");
          guardarNuPagos([...nupagos, prepago]);

          console.log(nupago)
        }
      }


    }


  };

  const totalPagosPrecargados = (arr) => {

    console.log(arr)

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].IMPORTE);
    }

    return total.toFixed(2);
  };

  const eliminarPagoPrecargado = (index) => {
    nupagos.splice(index, 1);

    guardarNuPagos([...nupagos]);
  };

  const traerUltimoRecibo = async (id) => {
    await axios
      .get(`${ip}api/werchow/pagos/ultimorecibo/${id}`)
      .then((res) => {
        guardarRecibo(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer el recibo", "ATENCION");
        console.log(error);
      });
  };

  const registrarPago = async () => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Vas a registrar los pagos y generar el recibo?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .post(`${ip}api/werchow/pagos/regpagom`, nupagos)
              .then((res) => {
                if (res.status === 200) {
                  toastr.success(
                    "Se registraron los pagos con exito",
                    "ATENCION"
                  );

                  Router.push({
                    pathname: `/gestion/mutual/cobranza/recibo`,
                    query: {
                      rec: nupagos.RECIBO,
                      contrato: nupagos.CONTRATO,
                      fecha: nupagos.DIA_PAG
                    },
                  });


                }
              })
              .catch((error) => {
                toastr.error(
                  "Ocurrio un error al registar los pagos",
                  "ATENCION"
                );
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => {
            toastr.info("Los pagos precargados no se registran", "ATENCION");
          },
        },
      ],
    });
  };

  const listSocios = async () => {
    await axios.get(`${ip}api/werchow/maestro/titularesm`)
      .then(res => {
        guardarListSocios(res.data[0])
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de socios", "ATENCION")
      })
  }

  const Seleccionar = async (contrato) => {

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarCuoFija(null);

    await axios
      .get(`${ip}api/werchow/maestro/titularm/${contrato}`)
      .then((res) => {
        if (res.data[0].length === 0) {
          toastr.error(
            "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
            "ATENCION"
          );
          const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
          guardarErrores(errores);
        } else {
          guardarFlag(true);

          let ficha = res.data[0][0];
          guardarFicha(ficha);

          traerPagosM(ficha.CONTRATO);

          traerAdhsM(ficha.CONTRATO);

          traerCuoFijaM(ficha.CONTRATO);

          if (
            ficha.GRUPO === 1001 ||
            ficha.GRUPO === 1005 ||
            ficha.GRUPO === 1006 ||
            ficha.GRUPO === 3444 ||
            ficha.GRUPO === 3666 ||
            ficha.GRUPO === 3777 ||
            ficha.GRUPO === 3888 ||
            ficha.GRUPO === 3999 ||
            ficha.GRUPO === 4004 ||
            ficha.GRUPO === 7777 ||
            ficha.GRUPO === 8500
          ) {
            toastr.warning(
              "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
              "ATENCION"
            );
          } else if (
            ficha.GRUPO === 3400 ||
            ficha.GRUPO === 3600 ||
            ficha.GRUPO === 3700 ||
            ficha.GRUPO === 3800 ||
            ficha.GRUPO === 3900 ||
            ficha.GRUPO === 4000
          ) {
            toastr.warning(
              `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
          } else if (
            ficha.GRUPO >= 5000 &&
            ficha.GRUPO < 7777
          ) {
            toastr.warning(
              `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
        traerUltimoRecibo(userData.puestom);
      }
    }
  }, []);

  return (
    <Layout>
      {flag === false ? (
        <BuscarSocio
          ficha={ficha}
          contratoRef={contratoRef}
          dniRef={dniRef}
          buscarTitularM={buscarTitularM}
          buscarTitularDniM={buscarTitularDniM}
          errores={errores}
          titulo={"Recibos"}
          listSocios={listSocios}
          listado={listado}
          Seleccionar={Seleccionar}

        />
      ) : flag === true ? (
        <>
          {ficha ? (
            <EmitirRecibo
              ficha={ficha}
              pagos={pagos}
              adhs={adhs}
              nupagos={nupagos}
              mesRef={mesRef}
              anoRef={anoRef}
              importeRef={importeRef}
              preCargarPago={preCargarPago}
              eliminarPagoPrecargado={eliminarPagoPrecargado}
              cuofija={cuofija}
              totalPagosPrecargados={totalPagosPrecargados}
              registrarPago={registrarPago}
            />
          ) : null}
        </>
      ) : null}
    </Layout>
  );
};

export default emisionrecibo;
