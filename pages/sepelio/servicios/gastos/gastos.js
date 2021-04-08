import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import FormGastosServ from "../../../../components/sepelio/servicios/gastos/FormGastosServ";
import toastr from "toastr";
// Validaciones
import useValidacion from "../../../../hooks/useValidacion";
import validarAltaServicioPart from "../../../../validacion/validarGastoServicio";
import ListadoServicioGastos from "../../../../components/sepelio/servicios/gastos/ListadoServicioGastos";
import { ip } from '../../../../config/config'

const STATE_INICIAL = {
  hsinicio: "",
  hsfin: "",
  tipogasto: "",
  operador: "",
  observaciones: "",
};

const gastos = () => {
  let siRef = React.createRef();
  let noRef = React.createRef();

  const [servicio, guardarServicio] = useState(null);
  const [gastos, guardarGastos] = useState(null);
  const [operadorsep, guardarOperadorSep] = useState(null);
  const [gastliq, guardarGastLiq] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      const id = router.query.id;
      const idservicio = router.query.idservicio;

      traerSolicitud(id);

      traerGastos(idservicio);

      traerOperador();

      traerGastLiq();
    }
  }, []);

  const traerSolicitud = async (id) => {
    await axios
      .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        const servicio = res.data;
        guardarServicio(servicio);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerGastos = async (id) => {
    await axios
      .get(
        `${ip}api/sepelio/serviciogastos/listadogastos/${id}`
      )
      .then((res) => {
        if (res.data) {
          guardarGastos(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calcularGastos = (array) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
      total += parseFloat(array[i].importe);
    }

    return total;
  };

  const traerOperador = async () => {
    await axios
      .get(
        `${ip}api/sepelio/serviciogastos/operadoressep`
      )
      .then((res) => {
        guardarOperadorSep(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerGastLiq = async () => {
    await axios
      .get(`${ip}api/sepelio/serviciogastos/gastliq`)
      .then((res) => {
        guardarGastLiq(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarAltaServicioPart, cargarGasto);

  const {
    hsinicio,
    hsfin,
    tipogasto,
    operador,
    observaciones,
  } = valores;

  async function cargarGasto() {
    let gasto = {
      idservicio: servicio.idservicio,
      inicio: hsinicio,
      fin: hsfin,
      tipo_gasto: tipogasto,
      operador: operador,
      observaciones: observaciones,
      feriado: '',
      liquidado: 0
    };


    if (siRef.current.checked === true) {
      gasto.feriado = 1
    } else if (noRef.current.checked === true) {
      gasto.feriado = 0
    }

    await axios
      .post(
        `${ip}api/sepelio/serviciogastos/cargargasto`,
        gasto
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toastr.success("El gasto se cargo con exito", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <Layout>
      {servicio ? (
        <>
          {gastos && gastos.length > 0 ? (
            <>
              <div className="container mt-4 border border-dark p-4 alert alert-primary">
                <h2>
                  <strong>
                    <u> Gastos del servicio N° {servicio.idservicio}</u>:{" "}
                    {servicio.apellido}, {servicio.nombre}
                  </strong>
                </h2>
                <div className=" row mt-4 mb-4 border border-dark p-4">
                  <div className="col-md-6">
                    <button
                      className="btn btn-sm btn-block btn-primary"
                      data-toggle="modal"
                      data-target="#adhs"
                    >
                      Cargar Gasto
                    </button>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="/sepelio/servicios/listado"
                      className="btn btn-sm btn-block btn-danger"
                    >
                      Volver al Listado
                    </a>
                  </div>
                </div>
              </div>
              <ListadoServicioGastos listado={gastos} />
            </>
          ) : (
            <div className="container mt-4 border border-dark p-4 alert alert-primary">
              <h2>
                <strong>
                  <u> Gastos del servicio N° {servicio.idservicio}</u>:{" "}
                  {servicio.apellido}, {servicio.nombre}
                </strong>
              </h2>
              <div className=" row mt-4 mb-4 border border-dark p-4">
                <div className="col-md-4">
                  <h4 className="">
                    <strong>
                      <u>No Hay gastos registrados</u>
                    </strong>
                  </h4>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-sm btn-block btn-primary"
                    data-toggle="modal"
                    data-target="#adhs"
                  >
                    Cargar Gasto
                  </button>
                </div>
                <div className="col-md-4">
                  <a
                    href="/sepelio/servicios/listado"
                    className="btn btn-sm btn-block btn-danger"
                  >
                    Volver al Listado
                  </a>
                </div>
              </div>
            </div>
          )}
        </>
      ) : null}

      <div
        className="modal fade"
        id="adhs"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Carga de Gastos
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormGastosServ
                servicio={servicio}
                hsinicio={hsinicio}
                hsfin={hsfin}
                tipogasto={tipogasto}
                operador={operador}
                observaciones={observaciones}
                errores={errores}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
                siRef={siRef}
                noRef={noRef}
                operadorsep={operadorsep}
                gastliq={gastliq}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default gastos;
