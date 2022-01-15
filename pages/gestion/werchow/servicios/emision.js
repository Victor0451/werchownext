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
  let sucursalRef = React.createRef();
  let medicoRef = React.createRef();

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

            let ficha = res.data[0][0];
            guardarFicha(ficha);

            traerPagos(ficha.CONTRATO);

            traerAdhs(ficha.CONTRATO);

            if (
              ficha.GRUPO === 1001 ||
              ficha.GRUPO === 1005 ||
              ficha.GRUPO === 1006 ||
              ficha.GRUPO === 3444 ||
              ficha.GRUPO === 3666 ||
              ficha.GRUPO === 3777 ||
              ficha.GRUPO === 3888 ||
              ficha.GRUPO === 3999 ||
              ficha.GRUPO === 4004
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

  const selectSocio = (row) => {
    guardarSocio(null);

    guardarSocio(row);
  };

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

  const traerMedicosPorSuc = async () => {

    if (especialidadRef.current.value !== null) {
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
    }


  }

  const traerDetalleMedSelec = async () => {

    if (medicoRef.current.value !== null) {
      await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRef.current.value}`)
        .then(res => {
          guardarDetalleMed(res.data)
        })
        .catch(error => {
          console.log(error)
          toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
        })
    }
  }

  const registrarOrdenUsos = async () => {

    traerNOrden()

    const uso = {
      SUC: "O",
      ORDEN: "",
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
      SERVICIO: "",
      IMPORTE: detalleMed.MAX_DESC,
      PUESTO: "",
      PRESTADO: detalleMed.COD_PRES,
      OPERADOR: 55,
      EMPRESA: "W"

    }

    if (nOrden) {
      uso.ORDEN = `O-${nOrden + 1}`

    } else {
      uso.ORDEN = `O-${1}`
    }

    await axios.post(`${ip}api/sgi/servicios/regusos`, uso)
      .then(res => {

        if (res.status === 200) {
          regOrdenConsulta(uso.ORDEN)
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

          let accion = `Se registro una orden de consulta para el socio: ${socio.APELLIDOS}, ${socio.NOMBRES}, contrato: ${socio.CONTRATO}, para el medico: ${detalleMed.NOMBRE}. Coseguro a pagar: ${detalleMed.MAX_DESC}`

          registrarHistoria(accion, user)
        }
      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al registrar la orden de consulta", "ATENCION")
      })
  }

  const traerNOrden = async () => {
    await axios.get(`${ip}api/sgi/servicios/norden`)
      .then(res => {
        guardarNorden(res.data.iduso)

      })
      .catch(error => {
        console.log(error)
        toastr.error("Ocurrio un error al traer el N° de Orden", "ATENCION")
      })
  }


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

    }
  }, []);

  return (
    <Layout>
      {flag === false ? (
        <BuscarSocio
          ficha={ficha}
          contratoRef={contratoRef}
          dniRef={dniRef}
          buscarTitularM={buscarTitular}
          buscarTitularDniM={buscarTitularDni}
          errores={errores}
          titulo={"Ordenes, consultas y farmacia"}
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
              sucursalRef={sucursalRef}
              medicoRef={medicoRef}
              traerDetalleMedSelec={traerDetalleMedSelec}
              detalleMed={detalleMed}
              sucursales={sucursales}
              espec={espec}
              medicos={medicos}
              traerMedicosPorSuc={traerMedicosPorSuc}
              registrarOrdenUsos={registrarOrdenUsos}
            />
          ) : null}
        </>
      ) : null}
    </Layout>
  );
};

export default Emision;
