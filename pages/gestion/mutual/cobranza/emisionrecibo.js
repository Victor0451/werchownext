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
import { registrarHistoria } from '../../../../utils/funciones'

const emisionrecibo = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();
  let mesRef = React.createRef();
  let anoRef = React.createRef();
  let importeRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [pagosB, guardarPagosB] = useState(null);
  const [allPagos, guardarAllPagos] = useState([]);
  const [adhs, guardarAdhs] = useState(null);
  const [cuofija, guardarCuoFija] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [nupagos, guardarNuPagos] = useState([]);
  const [flag, guardarFlag] = useState(false);
  const [recibo, guardarRecibo] = useState(null);
  const [listado, guardarListSocios] = useState(null);
  const [cuo, guardarCuo] = useState(null)



  const traerPagosM = async (contrato, f) => {


    if (f === 'P') {

      await axios
        .get(`${ip}api/werchow/pagos/pagosmutual/${contrato}`)
        .then((res) => {

          const pag = res.data

          guardarAllPagos(pag);

          axios
            .get(`${ip}api/werchow/pagobco/pagobcom/${contrato}`)
            .then((res2) => {

              if (res2.data.length > 0) {

                const pagB = res2.data

                const allP = pag.concat(pagB)

                guardarAllPagos(allP)

              }


            })
            .catch((error) => {
              toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
              console.log(error);
            });


        })
        .catch((error) => {
          toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
          console.log(error);
        });

    }

    // if (pagos && pagosB) {

    //   const allPagos = pagos.concat(pagosB)

    //   guardarAllPagos(allPagos)

    // } 



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

  const traerPagos = async (contrato, f) => {

    if (f === 'P') {
      await axios
        .get(`${ip}api/werchow/pagos/pagos/${contrato}`)
        .then((res) => {
          guardarPagos(res.data);
        })
        .catch((error) => {
          toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
          console.log(error);
        });
    } else if (f === 'B') {
      await axios
        .get(`${ip}api/werchow/pagobco/pagobco/${contrato}`)
        .then((res) => {
          guardarPagosB(res.data);
        })
        .catch((error) => {
          toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
          console.log(error);
        });
    }


  };

  const traerAdhs = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/maestro/adherentesm/${contrato}`)
      .then((res) => {
        guardarAdhs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerCuoFija = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/cuofija/cuowerchow/${contrato}`)
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
                `¡¡CUIDADO!!, El socio pertenece a un grupo moroso - grupo ${ficha.GRUPO}`,
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
                `El socio usa tarjeta como medio de pago - grupo ${ficha.GRUPO}`,
                "ATENCION"
              );
            } else if (
              ficha.GRUPO >= 5000 &&
              ficha.GRUPO < 7777
            ) {
              toastr.warning(
                `El socio usa debito banco macro como medio de pago - grupo ${ficha.GRUPO}`,
                "ATENCION"
              );

            }

            traerPagosM(ficha.CONTRATO, 'P');
            traerPagosM(ficha.CONTRATO, 'B');
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
                `¡¡CUIDADO!!, El socio pertenece a un grupo moroso - grupo ${ficha.GRUPO}`,
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
                `El socio usa tarjeta como medio de pago - grupo ${ficha.GRUPO}`,
                "ATENCION"
              );


            } else if (

              ficha.GRUPO >= 5000 &&
              ficha.GRUPO < 7777

            ) {
              toastr.warning(
                `El socio usa debito banco macro como medio de pago - grupo ${ficha.GRUPO}`,
                "ATENCION"
              );

            }

            traerPagosM(ficha.CONTRATO, 'P');
            traerPagosM(ficha.CONTRATO, 'B');


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

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarCuoFija(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titular/${contrato}`)
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

            traerAdhs(ficha.CONTRATO);

            traerCuoFija(ficha.CONTRATO);

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
                `¡¡CUIDADO!!, El socio pertenece a un grupo moroso - grupo ${ficha.GRUPO}`,
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
                `El socio usa tarjeta como medio de pago - grupo ${ficha.GRUPO}`,
                "ATENCION"
              );

            } else if (

              ficha.GRUPO >= 5000 &&
              ficha.GRUPO < 7777

            ) {

              toastr.warning(
                `El socio usa debito banco macro como medio de pago - grupo ${ficha.GRUPO}`,
                "ATENCION"
              );

            }

            traerPagosM(ficha.CONTRATO, 'P');
            traerPagosM(ficha.CONTRATO, 'B');

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

  const buscarTitularDni = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarCuoFija(null);

    if (dniRef.current.value !== "") {
      let dni = dniRef.current.value;

      await axios
        .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
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


            traerAdhs(ficha.CONTRATO);

            traerCuoFija(ficha.CONTRATO);

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
              traerPagos(ficha.CONTRATO, 'B');

            } else if (
              ficha.GRUPO >= 5000 &&
              ficha.GRUPO < 7777
            ) {
              toastr.warning(
                `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
              traerPagos(ficha.CONTRATO, 'B');

            } else {
              traerPagos(ficha.CONTRATO, 'P');

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

        }
      }


    }


  };

  const totalPagosPrecargados = (arr) => {

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

  const push = (q1, q2, q3) => {


    Router.push({
      pathname: `/gestion/mutual/cobranza/recibo`,
      query: {
        rec: q1,
        contrato: q2,
        fecha: q3
      },
    });
  }

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

                  let accion = `Se registro cobro de cuota del socio: ${ficha.CONTRATO} - ${ficha.APELLIDOS}, ${ficha.NOMBRES}. Recibo: ${nupagos[0].SERIE} - ${nupagos[0].NRO_RECIBO}, monto: $ ${totalPagosPrecargados(nupagos)}`

                  registrarHistoria(accion, user.usuario)

                  setTimeout(() => {
                    push(recibo.NRO_RECIBO, ficha.CONTRATO, moment().format("YYYY-MM-DD"))
                  }, 500);

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
    await axios.get(`${ip}api/werchow/maestro/titulares`)
      .then(res => {
        guardarListSocios(res.data[0])
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de socios", "ATENCION")
      })
  }

  const listSociosM = async () => {
    await axios.get(`${ip}api/werchow/maestro/titularesm`)
      .then(res => {
        guardarListSocios(res.data[0])
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de socios", "ATENCION")
      })
  }

  const SeleccionarM = async (contrato) => {

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
            traerPagosM(ficha.CONTRATO, 'B');
          } else if (
            ficha.GRUPO >= 5000 &&
            ficha.GRUPO < 7777
          ) {
            toastr.warning(
              `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
            traerPagosM(ficha.CONTRATO, 'B');

          } else {
            traerPagosM(ficha.CONTRATO, 'P');

          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const Seleccionar = async (contrato) => {

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);
    guardarCuoFija(null);

    await axios
      .get(`${ip}api/werchow/maestro/titular/${contrato}`)
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



          traerAdhs(ficha.CONTRATO);

          traerCuoFija(ficha.CONTRATO);

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
            traerPagos(ficha.CONTRATO, 'B');
          } else if (
            ficha.GRUPO >= 5000 &&
            ficha.GRUPO < 7777
          ) {
            toastr.warning(
              `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
            traerPagos(ficha.CONTRATO, 'B');

          } else {
            traerPagos(ficha.CONTRATO, 'P');

          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const cuoInt = () => {

    let day = moment().format("DD");
    let month = moment().format("M");
    let year = moment().format("YYYY");

    if (anoRef.current.value === year) {
      if (mesRef.current.value === month) {
        if (day <= 15) {
          guardarCuo(cuofija.IMPORTE);
        } else if (day > 15 && day <= 20) {
          let cuoint = cuofija.IMPORTE + cuofija.IMPORTE * 0.1;
          guardarCuo(cuoint);
        } else if (day > 20) {
          let cuoint = cuofija.IMPORTE + cuofija.IMPORTE * 0.2;
          guardarCuo(cuoint);
        }
      } else if (parseInt(mesRef.current.value) < parseInt(month)) {
        let cuoint = cuofija.IMPORTE + cuofija.IMPORTE * 0.2;
        guardarCuo(cuoint)
      } else if (parseInt(mesRef.current.value) > parseInt(month)) {
        guardarCuo(cuofija.IMPORTE)
      }
    } else if (anoRef.current.value < year) {
      let cuoint = cuofija.IMPORTE + cuofija.IMPORTE * 0.2;
      guardarCuo(cuoint);
    } else if (anoRef.current.value < year) {
      let cuoint = cuofija.IMPORTE;
      guardarCuo(cuoint);
    }
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
      {/* {flag === false ? (
        <BuscarSocio
          ficha={ficha}
          contratoRef={contratoRef}
          dniRef={dniRef}
          buscarTitularM={buscarTitularM}
          buscarTitularDniM={buscarTitularDniM}
          buscarTitular={buscarTitular}
          buscarTitularDni={buscarTitularDni}
          errores={errores}
          titulo={"Recibos"}
          listSocios={listSocios}
          listSociosM={listSociosM}
          listado={listado}
          Seleccionar={Seleccionar}
          SeleccionarM={SeleccionarM}
          emp={"W"}

        />
      ) : flag === true ? (
        <>
          {ficha ? (
            <>
            </>
            // <EmitirRecibo
            //   ficha={ficha}
            //   pagos={pagos}
            //   pagosB={pagosB}
            //   allPagos={allPagos}
            //   adhs={adhs}
            //   nupagos={nupagos}
            //   mesRef={mesRef}
            //   anoRef={anoRef}
            //   importeRef={importeRef}
            //   preCargarPago={preCargarPago}
            //   eliminarPagoPrecargado={eliminarPagoPrecargado}
            //   cuofija={cuofija}
            //   totalPagosPrecargados={totalPagosPrecargados}
            //   registrarPago={registrarPago}
            //   cuoInt={cuoInt}
            //   cuo={cuo}
            // />
          ) : null}
        </>
      ) : null} */}
    </Layout>
  );
};

export default emisionrecibo;
