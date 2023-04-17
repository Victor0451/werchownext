import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import FormGastosServ from "../../../../components/sepelio/servicios/gastos/FormGastosServ";
import toastr from "toastr";
import { ip } from '../../../../config/config'
import moment from 'moment'
import { confirmAlert } from 'react-confirm-alert'; // Import

// Validaciones
import useValidacion from "../../../../hooks/useValidacion";
import validarAltaServicioPart from "../../../../validacion/validarGastoServicio";
import ListadoServicioGastos from "../../../../components/sepelio/servicios/gastos/ListadoServicioGastos";
import FormEditarGastosServ from "../../../../components/sepelio/servicios/gastos/FormEditarGastosServ";


const STATE_INICIAL = {
  hsinicio: "",
  hsfin: "",
  tipogasto: "",
  operador: "",
  observaciones: "",
};

const gastos = () => {
  let inicioRef = React.createRef();
  let finRef = React.createRef();
  let gastoRef = React.createRef();
  let operadorRef = React.createRef();
  let observacionesRef = React.createRef();
  let siERef = React.createRef();
  let noERef = React.createRef();
  let siRef = React.createRef();
  let noRef = React.createRef();



  const [servicio, guardarServicio] = useState(null);
  const [gastos, guardarGastos] = useState(null);
  const [operadorsep, guardarOperadorSep] = useState(null);
  const [gastliq, guardarGastLiq] = useState(null);
  const [row, guardarRow] = useState(null);

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

  const updateTareasServicio = async (id) => {

    await axios.put(`${ip}api/sepelio/serviciogastos/updatetareasservicio/${id}`)
      .then(res => {
        if (res.status === 200) {
          toastr.success("Tareas en servicio actualizadas", "ATENCION")
        }
      })
      .catch(error => {
        toastr.error("Ocurrio un error verificando el estado de las tareas", "ATENCION")
        console.log(error)
      })
  }

  const getRow = (data) => {
    guardarRow(null)

    guardarRow(data)


  }

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

          updateTareasServicio(gasto.idservicio)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const editarGasto = async () => {



    const gasto = {
      tipo_gasto: gastoRef.current.value,
      inicio: inicioRef.current.value,
      fin: finRef.current.value,
      operador: operadorRef.current.value,
      feriado: row.feriado,
      observaciones: observacionesRef.current.value
    }

    console.log(gasto)

    if (inicioRef.current.value === '') {
      gasto.inicio = moment(row.inicio).format('YYYY-MM-DD HH:mm:ss')
    } else if (inicioRef.current.value !== '') {
      gasto.inicio = moment(inicioRef.current.value).format('YYYY-MM-DD HH:mm:ss')
    }

    if (finRef.current.value === '') {
      gasto.fin = moment(row.fin).format('YYYY-MM-DD HH:mm:ss')
    } else if (finRef.current.value !== '') {
      gasto.fin = moment(finRef.current.value).format('YYYY-MM-DD HH:mm:ss')
    }

    if (operadorRef.current.value === 'no') {
      gasto.operador = row.operador
    }

    if (gastoRef.current.value === 'no') {
      gasto.tipo_gasto = row.tipo_gasto
    }

    if (observacionesRef.current.value === '') {
      gasto.observaciones = row.observaciones
    }


    axios.put(`${ip}api/sepelio/serviciogastos/editargasto/${row.idgastos}`, gasto)
      .then(res => {
        if (res.status === 200) {
          toastr.success("El gasto se edito con exito", "ATENCION")

          setTimeout(() => {
            const idservicio = router.query.idservicio;
            traerGastos(idservicio)
          }, 100);


        }
      })
      .catch(error => {
        toastr.error("Ocurrio un error al editar el gasto", "ATENCION")
        console.log(error)
      })


  }

  const deleteGasto = async (id) => {
    await axios.delete(`${ip}api/sepelio/serviciogastos/eliminargasto/${id}`)
      .then(res => {
        if (res.status === 200) {
          toastr.success("Se elimino el gasto correctamente", "ATENCION")
          setTimeout(() => {
            const idservicio = router.query.idservicio;
            traerGastos(idservicio)
          }, 100);
        }
      }).catch(error => {
        toastr.error("Ocurrio un error al eliminar el gasto", "ATENCION")
        console.log(error)
      })
  }

  const eliminarGasto = (id) => {

    confirmAlert({
      title: 'ATENCION',
      message: '¿Seguro quieres eliminar el gasto?',
      buttons: [
        {
          label: 'Si',
          onClick: () => {
            deleteGasto(id)
          }
        },
        {
          label: 'No',
          onClick: () => { }
        }
      ]
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
              <ListadoServicioGastos
                listado={gastos}
                datatoggle="modal"
                datatarget="#editarGasto"
                getRow={getRow}
                eliminarGasto={eliminarGasto}
              />
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

      {/* MODAL CARGA GASTO */}
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

      {/* MODAL EDITAR GASTO*/}
      <div className="modal fade" id="editarGasto" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Editar Gasto</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormEditarGastosServ
                row={row}
                operadorsep={operadorsep}
                gastliq={gastliq}
                inicioRef={inicioRef}
                finRef={finRef}
                gastoRef={gastoRef}
                operadorRef={operadorRef}
                siERef={siERef}
                noERef={noERef}
                observacionesRef={observacionesRef}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={editarGasto}>Registrar</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default gastos;
