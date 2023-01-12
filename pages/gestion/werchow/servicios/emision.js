import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import BuscarSocio from "../../../../components/gestion/mutual/recibos/BuscarSocio";
import EmitirServicio from "../../../../components/gestion/werchow/servicios/EmitirServicio";
import { registrarHistoria } from '../../../../utils/funciones'

const Emision = () => {
  let contratoRef = React.createRef();
  let dniRef = React.createRef();
  let farmaciaRef = React.createRef();
  let modalidadRef = React.createRef();
  let descuentoRef = React.createRef();
  let especialidadRef = React.createRef();
  let especialidadRefP = React.createRef();
  let especialidadRefPl = React.createRef();
  let sucursalRef = React.createRef();
  let sucursalRefP = React.createRef();
  let sucursalRefE = React.createRef();
  let sucursalRefPl = React.createRef();
  let medicoRef = React.createRef();
  let medicoRefP = React.createRef();
  let medicoRefE = React.createRef();
  let medicoRefPl = React.createRef();
  let prestacionRefE = React.createRef();
  let cantidadRefE = React.createRef();
  let cantidadRefP = React.createRef();


  const [errores, guardarErrores] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [user, guardarUsuario] = useState(null);
  const [socio, guardarSocio] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [adhs, guardarAdhs] = useState(null);
  const [sucursales, guardarSucursales] = useState(null);
  const [espec, guardarEspec] = useState(null);
  const [medicos, guardarMedicos] = useState(null);
  const [detalleMed, guardarDetalleMed] = useState(null);
  const [nOrden, guardarNorden] = useState(null)
  const [practicas, guardarPracticas] = useState(null)
  const [pracSocio, guardarPracSocio] = useState([])
  const [listado, guardarListSocios] = useState(null);
  const [farmacias, guardarFarmacias] = useState(null);
  const [descFarma, guardarDescFarma] = useState(null);
  const [enfer, guadrarEnfer] = useState(null);
  const [detEnf, guardarDetalleEnfer] = useState(null);
  const [practEnfer, guadrarPractEnfer] = useState(null);
  const [priUso, guardarPriUso] = useState(0);
  const [nFisio, guardarNFisio] = useState(0);
  const [isj, guardarISJ] = useState(false)
  const [planOrto, guardarPlanOrto] = useState(null)





  // FUNCIONES SOCIO

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

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

            traerNOrden()

            let ficha = res.data[0];

            guardarFicha(ficha);

            traerAdhs(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000 ||
              ficha[0].GRUPO > 5000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBco(ficha[0].CONTRATO);
            } else if (ficha[0].GRUPO === 6) {
              toastr.warning(
                `El socio es policia - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBco(ficha[0].CONTRATO);
            }
            else if (ficha[0].GRUPO === 1000) {
              traerPagos(ficha[0].CONTRATO);
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

  const buscarTitularDni = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

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

            traerNOrden()

            let ficha = res.data[0];

            guardarFicha(ficha);

            traerAdhs(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004 ||
              ficha[0].GRUPO === 7777 ||
              ficha[0].GRUPO === 8500
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000 ||
              ficha[0].GRUPO > 5000

            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
              traerPagosBco(ficha[0].CONTRATO);
            } else {
              traerPagos(ficha[0].CONTRATO);
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

  const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

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

            traerNOrden()

            let ficha = res.data[0];

            guardarFicha(ficha);

            traerAdhsM(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000 ||
              ficha[0].GRUPO > 5000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBcoM(ficha[0].CONTRATO);
            } else if (ficha[0].GRUPO === 6) {
              toastr.warning(
                `El socio es policia - grupo ${ficha[0].GRUPO}`,
                "ATENCION"
              );
              traerPagosBcoM(ficha[0].CONTRATO);
            }
            else if (ficha[0].GRUPO === 1000) {
              traerPagosM(ficha[0].CONTRATO);
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

            traerNOrden()

            let ficha = res.data[0];

            guardarFicha(ficha);

            traerAdhsM(ficha[0].CONTRATO);

            if (
              ficha[0].GRUPO === 1001 ||
              ficha[0].GRUPO === 1005 ||
              ficha[0].GRUPO === 1006 ||
              ficha[0].GRUPO === 3444 ||
              ficha[0].GRUPO === 3666 ||
              ficha[0].GRUPO === 3777 ||
              ficha[0].GRUPO === 3888 ||
              ficha[0].GRUPO === 3999 ||
              ficha[0].GRUPO === 4004
            ) {
              toastr.warning(
                "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
                "ATENCION"
              );
            } else if (
              ficha[0].GRUPO === 3400 ||
              ficha[0].GRUPO === 3600 ||
              ficha[0].GRUPO === 3700 ||
              ficha[0].GRUPO === 3800 ||
              ficha[0].GRUPO === 3900 ||
              ficha[0].GRUPO === 4000
            ) {
              toastr.warning(
                `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
                "ATENCION"
              );
              traerPagosBcoM(ficha[0].CONTRATO);
            } else {
              traerPagosM(ficha[0].CONTRATO);
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

  const traerPagos = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/pagos/pagos/${contrato}`)
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

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

  const traerPagosBco = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/pagobco/pagobco/${contrato}`)
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerPagosBcoM = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/pagobco/pagobcom/${contrato}`)
      .then((res) => {
        guardarPagos(res.data);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al traer los pagos", "ATENCION");
        console.log(error);
      });
  };

  const traerAdhs = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/maestro/adherentes/${contrato}`)
      .then((res) => {
        guardarAdhs(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAdhsM = async (contrato) => {
    await axios
      .get(`${ip}api/werchow/maestro/adherentesm/${contrato}`)
      .then((res) => {
        guardarAdhs(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectSocio = (row) => {
    guardarSocio(null);

    guardarSocio(row);
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

  const Seleccionar = async (contrato) => {

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

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

          traerNOrden()

          let ficha = res.data[0];

          guardarFicha(ficha);

          traerAdhs(ficha[0].CONTRATO);

          if (
            ficha[0].GRUPO === 1001 ||
            ficha[0].GRUPO === 1005 ||
            ficha[0].GRUPO === 1006 ||
            ficha[0].GRUPO === 3444 ||
            ficha[0].GRUPO === 3666 ||
            ficha[0].GRUPO === 3777 ||
            ficha[0].GRUPO === 3888 ||
            ficha[0].GRUPO === 3999 ||
            ficha[0].GRUPO === 4004 ||
            ficha[0].GRUPO === 7777 ||
            ficha[0].GRUPO === 8500
          ) {
            toastr.warning(
              "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
              "ATENCION"
            );
            traerPagosBco(ficha[0].CONTRATO)

          } else if (
            ficha[0].GRUPO === 3400 ||
            ficha[0].GRUPO === 3600 ||
            ficha[0].GRUPO === 3700 ||
            ficha[0].GRUPO === 3800 ||
            ficha[0].GRUPO === 3900 ||
            ficha[0].GRUPO === 4000
          ) {
            toastr.warning(
              `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
          } else if (
            ficha[0].GRUPO >= 5000
          ) {
            toastr.warning(
              `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
            traerPagosBco(ficha[0].CONTRATO)
          } else {
            traerPagos(ficha[0].CONTRATO)
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al seleccionar y traer los datos del socio", "ATENCION")
      });
  }

  const SeleccionarM = async (contrato) => {

    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

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

          traerNOrden()

          let ficha = res.data[0];

          guardarFicha(ficha);

          traerAdhsM(ficha[0].CONTRATO);

          if (
            ficha[0].GRUPO === 1001 ||
            ficha[0].GRUPO === 1005 ||
            ficha[0].GRUPO === 1006 ||
            ficha[0].GRUPO === 3444 ||
            ficha[0].GRUPO === 3666 ||
            ficha[0].GRUPO === 3777 ||
            ficha[0].GRUPO === 3888 ||
            ficha[0].GRUPO === 3999 ||
            ficha[0].GRUPO === 4004 ||
            ficha[0].GRUPO === 7777 ||
            ficha[0].GRUPO === 8500
          ) {
            toastr.warning(
              "¡¡CUIDADO!!, El socio pertenece a un grupo moroso",
              "ATENCION"
            );
          } else if (
            ficha[0].GRUPO === 3400 ||
            ficha[0].GRUPO === 3600 ||
            ficha[0].GRUPO === 3700 ||
            ficha[0].GRUPO === 3800 ||
            ficha[0].GRUPO === 3900 ||
            ficha[0].GRUPO === 4000
          ) {
            toastr.warning(
              `El socio usa tarjeta como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
            traerPagosBcoM(ficha[0].CONTRATO);

          } else if (
            ficha[0].GRUPO >= 5000

          ) {
            toastr.warning(
              `El socio usa debito banco macro como medio de pago - grupo ${ficha.grupo}`,
              "ATENCION"
            );
            traerPagosBcoM(ficha[0].CONTRATO);
          } else {
            traerPagosM(ficha[0].CONTRATO);
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al seleccionar y traer los datos del socio", "ATENCION")
      });
  }

  const contarFisios = async (contrato) => {

    await axios.get(`${ip}api/sgi/servicios/contarfisio/${contrato}`)
      .then(res => {
        console.log(res.data[0].N)
        guardarNFisio(parseInt(res.data[0].N))
      })
      .catch(error => {
        console.log(error)

        toastr.error("Ocurrio un error al verificar el numero de fisios", "ATENCION")
      })

  }

  const verificarUso = async (f, grupo, contrato) => {


    if (f === "C") {

      await axios.get(`${ip}api/sgi/servicios/verificarconsultas/${contrato}`)
        .then(res => {

          guardarPriUso(res.data.orde)

        })
        .catch(error => {
          console.log(error)

          toastr.error("Ocurrio un error al verificar el uso", "ATENCION")
        })

    } else if (f === "P") {

      await axios.get(`${ip}api/sgi/servicios/verificarpracticas/${contrato}`)
        .then(res => {

          guardarPriUso(res.data.orde)

          if (grupo === 66 || grupo === 55) {

            contarFisios(contrato)

          }

        })
        .catch(error => {
          console.log(error)

          toastr.error("Ocurrio un error al verificar el uso", "ATENCION")
        })
    }

  }

  // --------------------------------------------------------------




  // FUNCIONES CONSULTAS

  const registrarOrdenUsos = async () => {

    const uso = {
      SUC: "O",
      ORDEN: nOrden,
      CONTRATO: socio.CONTRATO,
      NRO_ADH: socio.ADHERENTES,
      NRO_DOC: socio.NRO_DOC,
      PLAN: socio.PLAN,
      EDAD: socio.EDAD,
      SEXO: socio.SEXO,
      OBRA_SOC: socio.COD_OBRA,
      FECHA: moment().format('YYYY-MM-DD'),
      FEC_CAJA: moment().format('YYYY-MM-DD'),
      HORA: moment().format('HH:mm'),
      SERVICIO: "ORDE",
      IMPORTE: detalleMed.MAX_DESC,
      IMP_LIQ: detalleMed.CON_PAGA,
      VALOR: 0,
      PUESTO: "",
      PRESTADO: detalleMed.COD_PRES,
      OPERADOR: user.codigo,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,
      NUSOS: (priUso + 1)
    }


    if (detalleMed.COD_PRES === 'C_NJE' || detalleMed.COD_PRES === 'C_OVI' || detalleMed.COD_PRES === 'C_OR1') {

      uso.IMPORTE = detalleMed.CON_PAGA

    } else {

      if (priUso === 0) {

        if (socio.GRUPO === 55 || socio.GRUPO === 66) {

          uso.IMPORTE = 0

        } else {

          uso.IMPORTE = 550

        }

      } else if (priUso === 1) {

        if (isj === true) {

          uso.IMPORTE = 750 - 350

        } else {

          uso.IMPORTE = 750

        }

      } else if (priUso === 2) {


        if (isj === true) {

          uso.IMPORTE = 950 - 350

        } else {

          uso.IMPORTE = 950

        }

      } else if (priUso > 2) {

        if (isj === true) {

          uso.IMPORTE = parseFloat(detalleMed.CON_PAGA) - 350

        } else {

          uso.IMPORTE = detalleMed.CON_PAGA

        }

      }


    }



    await axios.post(`${ip}api/sgi/servicios/regusos`, uso)
      .then(res => {

        if (res.status === 200) {
          regOrdenConsulta(uso.ORDEN)

          setTimeout(() => {

            push('/gestion/werchow/servicios/orden', res.data.iduso, res.data.NRO_DOC)

          }, 500);

        }

      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de consulta", "ATENCION")
      })

  }

  const regOrdenConsulta = async (orden) => {
    const consul = {

      CONTRATO: socio.CONTRATO,
      FECHA: moment().format('YYYY-MM-DD'),
      HORA: moment().format('HH:mm'),
      NRO_ORDEN: orden,
      DESTINO: "",
      COD_PRES: detalleMed.COD_PRES,
      IMPORTE: detalleMed.PRECIO_99,
      ANULADO: 0,
      OPERADOR: 55,
      OPE_ANU: 0,
      DIAGNOSTIC: "",
      ATENCION: 0,
      NRO_DNI: socio.NRO_DOC,

    }

    await axios.post(`${ip}api/sgi/servicios/regconsulta`, consul)
      .then(res => {
        if (res.status === 200) {
          toastr.success("Se registro la orden de consulta con exito", "ATENCION")

          let accion = `Se registro una orden de consulta ID: ${consul.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para el medico: ${detalleMed.NOMBRE}. Coseguro a pagar: ${detalleMed.MAX_DESC}`

          registrarHistoria(accion, user)
        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de consulta", "ATENCION")
      })
  }


  // -----------------------------------------------




  // FUNCIONES PRACTICAS

  const traerPracticasPrest = async (id, lug) => {

    if (!lug) {

      toastr.info("Selecciona un prestador para traer sus practicas", "ATENCION")

    } else {

      let lugar = ""

      if (lug < 10) {

        lugar = `0${lug}`

      } else {

        lugar = lug

      }

      await axios.get(`${ip}api/sgi/servicios/traerpracticaspresador/${id}`, {
        params: {
          lugar: lugar

        }
      })
        .then(res => {
          guardarPracticas(res.data)

        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer las practicas")
        })


    }




  }

  const agregarPractica = (row) => {

    let pra = {
      CODIGOS: row.CODIGOS,
      DESCRIP: row.DESCRIP,
      CANTIDAD: cantidadRefP.current.value,
      IMPORTE: parseFloat(row.IMPORTE) * parseFloat(cantidadRefP.current.value),
      idpractica: row.idpractica

    }

    let encontrado = false

    if (pracSocio.length === 0) {

      toastr.success("Pago pre cargado exitosamente", "ATENCION");
      guardarPracSocio([...pracSocio, pra]);

    } else {

      for (let i = 0; i < pracSocio.length; i++) {
        if (pracSocio[i].idpractica === pra.idpractica) {
          encontrado = true;
        }
      }
      if (encontrado === true) {
        toastr.warning("El codigo ingresado ya exitse", "ATENCION");
      } else if (encontrado === false) {
        toastr.success("Practica cargada exitosamente", "ATENCION");

        guardarPracSocio([...pracSocio, pra]);

      }
    }




  }

  const eliminarPracticaPrecargado = (index) => {
    pracSocio.splice(index, 1);

    guardarPracSocio([...pracSocio]);
  };

  const calcularTotalPracticas = (arr) => {

    let total = 0

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].IMPORTE)
    }

    return total.toFixed(2)

  }

  const registrarPracticaUso = async () => {

    const uso = {
      SUC: "O",
      ORDEN: nOrden,
      CONTRATO: socio.CONTRATO,
      NRO_ADH: socio.ADHERENTES,
      NRO_DOC: socio.NRO_DOC,
      PLAN: socio.PLAN,
      EDAD: socio.EDAD,
      SEXO: socio.SEXO,
      OBRA_SOC: socio.COD_OBRA,
      FECHA: moment().format('YYYY-MM-DD'),
      FEC_CAJA: moment().format('YYYY-MM-DD'),
      HORA: moment().format('HH:mm'),
      SERVICIO: `P${detalleMed.SERVICIO}`,
      IMPORTE: calcularTotalPracticas(pracSocio),
      IMP_LIQ: calcularTotalPracticas(pracSocio),
      VALOR: 0,
      PUESTO: "",
      PRESTADO: detalleMed.COD_PRES,
      OPERADOR: user.codigo,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,
      NUSOS: (priUso + 1)


    }

    if (detalleMed.SERVICIO === 'FIS' && socio.GRUPO === 66 || socio.GRUPO === 55) {

      if (nFisio >= 0 && nFisio <= 8) {
        uso.IMPORTE = 0
      }

    }


    // AUMENTO POR CANTIDAD DE USOS

    if (detalleMed.COD_PRES === 'C_BIO') {

      if (priUso === 1) {

        uso.IMPORTE = uso.IMPORTE * 1.15

      } else if (priUso === 2) {

        uso.IMPORTE = uso.IMPORTE * 1.20

      } else if (priUso > 2) {

        uso.IMPORTE = uso.IMPORTE * 1.25

      }

    }

    // --------------------------------------------

    await axios.post(`${ip}api/sgi/servicios/regusos`, uso)
      .then(res => {

        if (res.status === 200) {

          regPractica(uso.ORDEN)

          setTimeout(() => {

            push('/gestion/werchow/servicios/orden', res.data.iduso, res.data.NRO_DOC, res.data.ORDEN)

          }, 5000);

        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de practica", "ATENCION")
      })

  }

  let regPractica = async (orden) => {


    for (let i = 0; i < pracSocio.length; i++) {

      const practi = {

        SUC_PRA: "O",
        CONTRATO: socio.CONTRATO,
        NRO_DNI: socio.NRO_DOC,
        FECHA: moment().format('YYYY-MM-DD'),
        HORA: moment().format('HH:mm'),
        NRO_ORDEN: orden,
        PRAC_REA: detalleMed.SERVICIO,
        CANT_PRA: pracSocio[i].CANTIDAD,
        IMPORTE: pracSocio[i].IMPORTE,
        ANULADO: 0,
        OPERADOR: user.codigo,
        OPE_ANU: 0,
        COD_PRAC: pracSocio[i].CODIGOS,
        DESCRIP: pracSocio[i].DESCRIP,

      }

      if (detalleMed.SERVICIO === 'FIS' && socio.GRUPO === 66 || socio.GRUPO === 55) {

        if (nFisio >= 0 && nFisio < 8) {
          practi.IMPORTE = 0
        }

      }


      // AUMENTO POR CANTIDAD DE USOS 
      if (detalleMed.COD_PRES === 'C_BIO') {

        if (priUso === 1) {

          practi.IMPORTE = practi.IMPORTE * 1.15

        } else if (priUso === 2) {

          practi.IMPORTE = practi.IMPORTE * 1.20

        } else if (priUso > 2) {

          practi.IMPORTE = practi.IMPORTE * 1.25

        }
      }

      // -----------------------------------------      

      await axios.post(`${ip}api/sgi/servicios/regpractica`, practi)
        .then(res => {
          if (res.status === 200) {
            toastr.success("Se registro la orden de consulta con exito", "ATENCION")

            let accion = `Se registro una orden de practica ID: ${practi.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para el medico: ${detalleMed.NOMBRE}. Codigo de Practica: ${practi.COD_PRAC} , coseguro a pagar: ${practi.IMPORTE}`

            registrarHistoria(accion, user)
          }
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al registrar la orden de consulta", "ATENCION")
        })

    }


  }

  // -----------------------------------------


  // FUNCIONES FARMACIA

  const traerFarmacias = async () => {
    await axios.get(`${ip}api/sgi/servicios/traerfarmacias`)
      .then(res => {
        guardarFarmacias(res.data)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de farmacias", "ATENCION")
      })
  }

  const gestionDescuento = () => {
    let cod = farmaciaRef.current.value
    let flag = modalidadRef.current.value
    let desc = []

    if (flag === "1" && cod === "F_JAV") {

      desc = [
        { value: 20, label: "20%" },
        { value: 30, label: "30%" },
        { value: 35, label: "35%" },
      ]

      guardarDescFarma(desc)

    } else if (flag === "1" && cod !== "F_JAV") {

      desc = [
        { value: 20, label: "20%" },
        { value: 30, label: "30%" },

      ],

        guardarDescFarma(desc)

    } else if (flag === "2") {

      desc = [
        { value: 20, label: "20%" },

      ]

      guardarDescFarma(desc)

    } else if (flag === "no") {
      guardarDescFarma(null)
    }

  }

  const registrarFarmaciaUso = async () => {

    const uso = {
      SUC: "O",
      ORDEN: nOrden,
      CONTRATO: socio.CONTRATO,
      NRO_ADH: socio.ADHERENTES,
      NRO_DOC: socio.NRO_DOC,
      PLAN: socio.PLAN,
      EDAD: socio.EDAD,
      SEXO: socio.SEXO,
      OBRA_SOC: socio.COD_OBRA,
      FECHA: moment().format('YYYY-MM-DD'),
      FEC_CAJA: moment().format('YYYY-MM-DD'),
      HORA: moment().format('HH:mm'),
      VALOR: parseFloat(descuentoRef.current.value),
      SERVICIO: `FARM`,
      IMPORTE: 0,
      IMP_LIQ: 0,
      PUESTO: "",
      PRESTADO: farmaciaRef.current.value,
      OPERADOR: user.codigo,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,


    }

    await axios.post(`${ip}api/sgi/servicios/regusos`, uso)
      .then(res => {
        if (res.status === 200) {

          regFarmacia(uso.ORDEN)

          setTimeout(() => {

            push('/gestion/werchow/servicios/orden', res.data.iduso, res.data.NRO_DOC, res.data.ORDEN, 'F')

          }, 500);

        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de farmacia", "ATENCION")
      })

  }

  let regFarmacia = async (orden) => {

    const farma = {


      CONTRATO: socio.CONTRATO,
      FECHA: moment().format('YYYY-MM-DD'),
      HORA: moment().format('HH:mm'),
      NRO_DOC: socio.NRO_DOC,
      NRO_ORDEN: orden,
      DESTINO: farmaciaRef.current.value,
      MODO: `${descuentoRef.current.value}%`,
      IMPORTE: 0,
      ANULADO: 0,
      OPERADOR: user.codigo,
      OPE_ANU: 0,
      FEC_USO: moment().format('YYYY-MM-DD'),
      CAN_MEDI: 2,
      MATRICULA: 0,
      HABILITA: 1

    }

    await axios.post(`${ip}api/sgi/servicios/regfarmacia`, farma)
      .then(res => {
        if (res.status === 200) {
          toastr.success("Se registro la orden de consulta con exito", "ATENCION")

          let accion = `Se registro una orden de farmacia ID:${farma.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para la farmacia: ${farma.DESTINO}, porcentale de descuento: ${farma.MODO} `

          registrarHistoria(accion, user)
        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de farmacia", "ATENCION")
      })




  }

  // ---------------------------------------------

  // FUNCIONES ENFERMERIA

  const traerEnfer = async () => {

    await axios.get(`${ip}api/sgi/servicios/traerefermporsuc`,
      {
        params: {
          suc: sucursalRefE.current.value,
        }
      })
      .then(res => {
        guadrarEnfer(res.data)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
      })

  }

  const traerPractEnfer = async () => {
    await axios.get(`${ip}api/sgi/servicios/traerpractenfer`)
      .then(res => {
        guadrarPractEnfer(res.data)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de Practicas de enfermeria", "ATENCION")
      })
  }

  const registrarEnfermeriaUso = async () => {

    const uso = {
      SUC: "O",
      ORDEN: nOrden,
      CONTRATO: socio.CONTRATO,
      NRO_ADH: socio.ADHERENTES,
      NRO_DOC: socio.NRO_DOC,
      PLAN: socio.PLAN,
      EDAD: socio.EDAD,
      SEXO: socio.SEXO,
      OBRA_SOC: socio.COD_OBRA,
      FECHA: moment().format('YYYY-MM-DD'),
      FEC_CAJA: moment().format('YYYY-MM-DD'),
      HORA: moment().format('HH:mm'),
      VALOR: 0,
      SERVICIO: `ENFE`,
      IMPORTE: 0,
      IMP_LIQ: 0,
      PUESTO: "",
      PRESTADO: detEnf.COD_PRES,
      OPERADOR: user.codigo,
      EMPRESA: "W",
      RENDIDO: 0,
      ANULADO: 0,


    }

    await axios.post(`${ip}api/sgi/servicios/regusos`, uso)
      .then(res => {
        if (res.status === 200) {

          regEnfermeria(uso.ORDEN)

          setTimeout(() => {

            push('/gestion/werchow/servicios/orden', res.data.iduso, res.data.NRO_DOC, res.data.ORDEN, 'E')

          }, 500);

        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de farmacia", "ATENCION")
      })

  }

  let regEnfermeria = async (orden) => {

    const enfer = {


      CONTRATO: socio.CONTRATO,
      FECHA: moment().format('YYYY-MM-DD'),
      HORA: moment().format('HH:mm'),
      NRO_ORDEN: orden,
      DESTINO: detEnf.COD_PRES,
      IMPORTE: 0,
      ANULADO: 0,
      PRACTICA: prestacionRefE.current.value,
      CANTIDAD: cantidadRefE.current.value,
      OPERADOR: user.codigo,
      OPE_ANU: 0,
      NRO_DNI: socio.NRO_DOC,

    }

    await axios.post(`${ip}api/sgi/servicios/regenfermeria`, enfer)
      .then(res => {
        if (res.status === 200) {
          toastr.success("Se registro la orden de enfermeria con exito", "ATENCION")

          let accion = `Se registro una orden de enfermeria ID:${enfer.NRO_ORDEN}, para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para el prestador: ${enfer.DESTINO} `

          registrarHistoria(accion, user)
        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de enfermeria", "ATENCION")
      })




  }

  // -------------------------------------------------


  // PLANES ORTODONCIA

  const traerPlanesOrto = async () => {

    await axios.get(`${ip}api/sgi/servicios/planesorto`)
      .then(res => {

        guardarPlanOrto(res.data)


      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el plan", "ATENCION")
      })

  }

  const registrarPlanOrto = async () => {


    const plan = {

      contrato: socio.CONTRATO,
      dni: socio.NRO_DOC,
      socio: `${socio.APELLIDOS}, ${socio.NOMBRES}`,
      fecha: moment().format('YYYY-MM-DD'),
      total: planOrto.total,
      pagado: planOrto.pago_inicial,
      saldo: parseFloat(planOrto.total) - parseFloat(planOrto.pago_inicial),
      estado: 1,
      prestador: detalleMed.COD_PRES,
      prestador_nombre: detalleMed.NOMBRE,
      operador: user

    }


    await axios.post(`${ip}api/sgi/servicios/nuevoplanorto`, plan)
      .then(res => {

        if (res.status === 200) {

          toastr.success("Plan registrado correctamente", "ATENCION")

          regPlanVisitas(res.data.idplansocio, plan.saldo)

          let accion = `Se registro plan de ortodoncia ID: ${res.data.idplansocio}, para el socio: ${plan.contrato} - ${plan.socio}, dni: ${plan.dni}. Con un monto de ${plan.total}`

          registrarHistoria(accion, user)

          setTimeout(() => {

            Router.push({
              pathname: '/gestion/werchow/servicios/reciboplan',
              query: {
                id: res.data.idplansocio
              },

            });

          }, 1000);


        }

      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar el plan", "ATENCION")
      })



  }

  const regPlanVisitas = async (plan, saldo) => {

    let visi = {

      idplan: plan,
      nvisita: '',
      pago: 0,
      fecha: moment().format('YYYY-MM-DD'),
      pagado: 0,
      operador: user

    }


    for (let i = 1; i < planOrto.visitas; i++) {

      if (i <= 3) {

        visi.nvisita = i;
        visi.pago = saldo / 3
        visi.fecha = moment().add(i, "months").format('YYYY-MM-DD')

      } else if (i > 3) {

        visi.nvisita = i;
        visi.pago = 0
        visi.fecha = moment().add(i, "months").format('YYYY-MM-DD')

      }



      await axios.post(`${ip}api/sgi/servicios/nuevoplanvisita`, visi)

    }


  }


  // ----------------------------------------------


  // FUNCIONES GENERALES

  const push = (url, p1, p2, p3, flag) => {

    if (p3) {

      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2,
          orden: p3,
          flag: flag
        },
      });

    } else {

      Router.push({
        pathname: url,
        query: {
          iduso: p1,
          dni: p2
        },

      });
    }



  };

  const traerNOrden = async () => {
    await axios.get(`${ip}api/sgi/servicios/norden`)
      .then(res => {

        setTimeout(() => {
          if (!res.data) {
            guardarNorden(1)
          } else {
            guardarNorden(`O-${res.data.iduso + 1}`)
          }
        }, 500);


      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el N° de Orden", "ATENCION")
      })
  }

  const traerSucursales = async () => {
    await axios.get(`${ip}api/sgi/servicios/traersucursales`)
      .then(res => {
        guardarSucursales(res.data)
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de sucursales", "ATENCION")
      })
  }

  const traerEspecialidades = async () => {
    await axios.get(`${ip}api/sgi/servicios/traerespecialidades`)
      .then(res => {
        guardarEspec(res.data)

      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el listado de sucursales", "ATENCION")
      })
  }

  const traerMedicosPorSuc = async (f) => {


    if (f === 'C' && especialidadRef.current.value !== null) {

      await axios.get(`${ip}api/sgi/servicios/traermedporsuc`,
        {
          params: {
            suc: sucursalRef.current.value,
            esp: especialidadRef.current.value
          }
        })
        .then(res => {
          guardarMedicos(res.data)
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })

    } else if (f === 'P' && especialidadRefP.current.value !== null) {

      await axios.get(`${ip}api/sgi/servicios/traermedporsuc`,
        {
          params: {
            suc: sucursalRefP.current.value,
            esp: especialidadRefP.current.value
          }
        })
        .then(res => {
          guardarMedicos(res.data)
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })

    } else if (f === 'Pl' && especialidadRefPl.current.value !== null) {

      await axios.get(`${ip}api/sgi/servicios/traermedporsuc`,
        {
          params: {
            suc: sucursalRefPl.current.value,
            esp: especialidadRefPl.current.value
          }
        })
        .then(res => {
          guardarMedicos(res.data)
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })

    }
  }

  const traerDetalleMedSelec = async (f) => {

    if (f === 'C' && medicoRef.current.value !== null) {

      await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRef.current.value}`)
        .then(res => {
          guardarDetalleMed(res.data)

        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })

    } else if (f === 'P' && medicoRefP.current.value !== null) {

      let id = medicoRefP.current.value

      await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRefP.current.value}`)
        .then(res => {

          guardarDetalleMed(res.data)

          traerPracticasPrest(id, res.data.LUGAR)

        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })
    } else if (f === 'E' && medicoRefE.current.value !== null) {


      await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRefE.current.value}`)
        .then(res => {

          guardarDetalleEnfer(res.data)

          traerPractEnfer()

        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })
    } else if (f === 'Pl' && medicoRefPl.current.value !== null) {


      await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRefPl.current.value}`)
        .then(res => {

          guardarDetalleMed(res.data)

        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })
    }
  }

  const selector = (flag) => {

    if (flag === "si") {

      guardarISJ(true)

    } else if (flag === "no") {

      guardarISJ(false)

    }
  };

  const importeOrden = () => {


    if (detalleMed.COD_PRES === 'C_NJE' || detalleMed.COD_PRES === 'C_OVI') {

      let importe = ""

      importe = detalleMed.CON_PAGA

      return importe

    } else if (detalleMed.COD_PRES === 'C_OR1') {

      let importe = ""

      importe = detalleMed.CON_PAGA - (detalleMed.CON_PAGA * 0.10)

      return importe

    }

    else {

      if (priUso === 0) {

        if (socio.GRUPO === 55 || socio.GRUPO === 66) {

          const importe = 0

          return importe

        } else {

          const importe = 550

          return importe

        }

      } else if (priUso === 1) {

        const importe = 750

        return importe

      } else if (priUso === 2) {

        const importe = 950

        return importe


      } else if (priUso > 2) {

        const importe = detalleMed.CON_PAGA

        return importe

      }

    }


  }

  // ----------------------------------------------







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

      traerSucursales()
      traerEspecialidades()
      traerFarmacias()
      traerPlanesOrto()

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
          buscarTitular={buscarTitular}
          buscarTitularDni={buscarTitularDni}
          errores={errores}
          titulo={"Ordenes, consultas y farmacia"}
          emp={"W"}
          listSocios={listSocios}
          listSociosM={listSociosM}
          listado={listado}
          Seleccionar={Seleccionar}
          SeleccionarM={SeleccionarM}
        />
      ) : flag === true ? (
        <>
          {ficha ? (
            <EmitirServicio
              adhs={adhs}
              pagos={pagos}
              ficha={ficha}
              selectSocio={selectSocio}
              socio={socio}
              farmaciaRef={farmaciaRef}
              modalidadRef={modalidadRef}
              descuentoRef={descuentoRef}
              especialidadRef={especialidadRef}
              especialidadRefP={especialidadRefP}
              especialidadRefPl={especialidadRefPl}
              sucursalRef={sucursalRef}
              sucursalRefP={sucursalRefP}
              sucursalRefPl={sucursalRefPl}
              medicoRef={medicoRef}
              medicoRefP={medicoRefP}
              medicoRefPl={medicoRefPl}
              traerDetalleMedSelec={traerDetalleMedSelec}
              detalleMed={detalleMed}
              sucursales={sucursales}
              espec={espec}
              medicos={medicos}
              traerMedicosPorSuc={traerMedicosPorSuc}
              registrarOrdenUsos={registrarOrdenUsos}
              practicas={practicas}
              agregarPractica={agregarPractica}
              pracSocio={pracSocio}
              eliminarPracticaPrecargado={eliminarPracticaPrecargado}
              calcularTotalPracticas={calcularTotalPracticas}
              registrarPracticaUso={registrarPracticaUso}
              farmacias={farmacias}
              gestionDescuento={gestionDescuento}
              descFarma={descFarma}
              registrarFarmaciaUso={registrarFarmaciaUso}
              enfer={enfer}
              sucursalRefE={sucursalRefE}
              traerEnfer={traerEnfer}
              detEnf={detEnf}
              medicoRefE={medicoRefE}
              practEnfer={practEnfer}
              prestacionRefE={prestacionRefE}
              cantidadRefE={cantidadRefE}
              registrarEnfermeriaUso={registrarEnfermeriaUso}
              cantidadRefP={cantidadRefP}
              priUso={priUso}
              nFisio={nFisio}
              selector={selector}
              isj={isj}
              importeOrden={importeOrden}
              verificarUso={verificarUso}
              planOrto={planOrto}
              registrarPlanOrto={registrarPlanOrto}
            />
          ) : null}
        </>
      ) : null}
    </Layout>
  );
};

export default Emision;
