import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import moment from "moment";
import axios from "axios";
import PlanificacionGuardias from "../../../components/sepelio/planificacion/PlanificacionGuardias";
import ListadoPlanificacion from "../../../components/sepelio/planificacion/ListadoPlanificacion";
import FormTareasAdicionales from "../../../components/sepelio/planificacion/FormTareasAdicionales"
import { ip } from '../../../config/config'
import toastr from 'toastr'
import { registrarHistoria } from "../../../utils/funciones";

const guardias = () => {
  let lugarRef = React.createRef();
  let lugarERef = React.createRef();
  let observacionesTRef = React.createRef();
  let siRef = React.createRef();
  let noRef = React.createRef();
  let siERef = React.createRef();
  let noERef = React.createRef();
  let siTRef = React.createRef();
  let noTRef = React.createRef();
  let hsInicioRef = React.createRef();
  let hsFinRef = React.createRef();
  let hsInicioERef = React.createRef();
  let hsFinERef = React.createRef();
  let hsInicioTRef = React.createRef();
  let hsFinTRef = React.createRef();
  let operadorRef = React.createRef();
  let operadorERef = React.createRef();
  let tareaRef = React.createRef();
  let opRef = React.createRef()

  const [plani, guardarPlani] = useState(null);
  const [planiID, guardarPlaniID] = useState(null);
  const [error, guardarError] = useState(null);
  const [gastliq, guardarGastLiq] = useState(null);
  const [operadorsep, guardarOperadorSep] = useState(null)
  const [idturno, guardarIdTurno] = useState(null)
  const [user, guardarUsuario] = useState(null)



  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }

      listPlani();
      traerOperador()
      traerGastLiq()
    }
  }, []);

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

  const listPlani = async () => {
    await axios
      .get(`${ip}api/sepelio/planificacion/listadoplani`)
      .then((res) => {
        guardarPlani(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registroPlanificacion = async (e) => {
    e.preventDefault();

    const error = {
      lugar: null,
      fecha: null,
      hs_inicio: null,
      hs_fin: null,
      operador: null,
    };

    if (
      lugarRef.current.value === "no" ||
      hsInicioRef.current.value === "" ||
      hsFinRef.current.value === "" ||
      operadorRef.current.value === "no"
    ) {
      error.lugar = "Debes elegir una opcion";
      error.hs_inicio = "Debes especificar el inicio de la guardia";
      error.hs_fin = "Debes especificar el fin de la guardia";
      error.operador = "Debes Elegir un operador";
    } else {
      guardarError(null);

      const planificacion = {
        lugar: lugarRef.current.value,
        inicio: moment(hsInicioRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
        fin: moment(hsFinRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
        operador: operadorRef.current.value,
        mes_planificacion: moment().locale("es-es").format("MMMM"),
        feriado: '',
        liquidado: 0,
        tarea: 'Guardia Oficina'
      };

      if (siRef.current.checked === true) {
        planificacion.feriado = 1
      } else if (noRef.current.checked === true) {
        planificacion.feriado = 0
      }


      await axios
        .post(
          `${ip}api/sepelio/planificacion/nuevaplani`,
          planificacion
        )
        .then((res) => {
          if (res.status === 200) {
            toastr.success("La guardia se registro correctamente", "ATENCION")

            let accion = `se registro la planificacion de guardia: ID ${res.data.idturno}, para: ${planificacion.operador}, inicia ${planificacion.inicio}, termina ${planificacion.fin}, correspondiente al mes ${planificacion.mes_planificacion}`

            registrarHistoria(accion, user)

            setTimeout(() => {
              Router.reload()
            }, 500);

          }


        })
        .catch((error) => {
          console.log(error);
        });
    }
    guardarError(error);
  };

  const registrarTareaAdicional = async () => {
    const task = {

      inicio: moment(hsInicioTRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
      fin: moment(hsFinTRef.current.value).format('YYYY-MM-DD HH:mm:ss'),
      tarea: tareaRef.current.value,
      operador: opRef.current.value,
      observaciones: observacionesTRef.current.value,
      feriado: '',
      mes_planificacion: moment().locale("es-es").format("MMMM"),
      liquidado: 0
    }

    if (siTRef.current.checked === true) {
      task.feriado = 1
    } else if (noTRef.current.checked === true) {
      task.feriado = 0
    }


    axios.post(`${ip}api/sepelio/tareasadicionales/registrartarea`, task)
      .then(res => {
        if (res.status === 200) {
          toastr.success("La tarea se registro correctamente", "ATENCION")

          let accion = `Se registro tarea: ID ${res.data.idtarea} adicional para el operador: ${task.operador}, tarea: ${task.tarea}, inicio ${task.inicio}, fin ${task.fin}, correspontiente al mes: ${task.mes_planificacion}`

          registrarHistoria(accion, user)

        }

      })
      .catch(error => {
        toastr.error("Ocurrio un error", "ATENCION")
        console.log(error)
      })

  }

  const editarPlanificacion = async (id) => {


    const planificacion = {
      lugar: lugarERef.current.value,
      inicio: '',
      fin: '',
      operador: operadorERef.current.value,
      mes_planificacion: planiID.mes_planificacion,
      feriado: planiID.feriado,
      liquidado: 0
    };


    if (planificacion.lugar === 'no') {
      planificacion.lugar = planiID.lugar
    }

    if (hsInicioERef.current.value === '') {
      planificacion.inicio = moment(planiID.inicio).format('YYYY-MM-DD HH:mm:ss')
    } else if (hsInicioERef.current.value !== '') {
      planificacion.inicio = moment(hsInicioERef.current.value).format('YYYY-MM-DD HH:mm:ss')
    }

    if (hsFinERef.current.value === '') {
      planificacion.fin = moment(planiID.fin).format('YYYY-MM-DD HH:mm:ss')
    } else if (hsFinERef.current.value !== '') {
      planificacion.fin = moment(hsFinERef.current.value).format('YYYY-MM-DD HH:mm:ss')
    }

    if (planificacion.fin === '') {
      planificacion.fin = moment(planiID.fin).format('YYYY-MM-DD HH:mm:ss')
    }

    if (planificacion.operador === 'no') {
      planificacion.operador = planiID.operador
    }


    await axios
      .put(
        `${ip}api/sepelio/planificacion/editarplani/${id}`,
        planificacion
      )
      .then((res) => {
        if (res.status === 200) {
          toastr.success("La guardia se registro correctamente", "ATENCION")

          let accion = `se edito la planificacion de guardia ID: ${id}`

          registrarHistoria(accion, user)

          setTimeout(() => {
            Router.reload()
          }, 500);

        }


      })
      .catch((error) => {
        console.log(error);
      });


  }

  const selcaso = (row) => {
    guardarPlaniID(null)
    guardarPlaniID(row)
  }

  const deleteCaso = async (id) => {
    await axios.delete(`${ip}api/sepelio/planificacion/eliminarturno/${id}`)
      .then(res => {
        if (res.status === 200) {

          toastr.success("La guardia se eliminio con exito", "ATENCION")

          let accion = `se elimino la planificacion de guardia ID: ${id}`

          registrarHistoria(accion, user)


          setTimeout(() => {
            Router.reload()
          }, 500);
        }
      })
      .catch(error => {
        toastr.error("Ocurrio un error al eliminar la guardia", "ATENCION")
        console.log(error)
      })
  }

  const delCaso = (id) => {
    confirmAlert({
      title: 'ATENCION',
      message: '¿Seguro quieres eliminar el gasto?',
      buttons: [
        {
          label: 'Siu',
          onClick: () => {
            deleteCaso(id)
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
      <PlanificacionGuardias
        fn={registroPlanificacion}
        lugarRef={lugarRef}
        siRef={siRef}
        noRef={noRef}
        hsInicioRef={hsInicioRef}
        hsFinRef={hsFinRef}
        operadorRef={operadorRef}
        error={error}
        operadorsep={operadorsep}

      />

      <hr className="container mt-4 mb-4" />

      <div className="container border border-dark alert alert-dark p-4">

        <div className="row">
          <div className="col-md-6">
            <h2>
              <strong>
                <u>
                  Cargar Tareas Adicionales
                </u>
              </strong>
            </h2>
          </div>

          <div className="col-md-6">
            <button
              className="btn btn-primary btn-block"
              data-toggle="modal" data-target="#modalformtask"
            >
              Cargar Tareas
            </button>
          </div>

        </div>


      </div>

      <hr className="container mt-4 mb-4" />


      <ListadoPlanificacion
        plani={plani}
        mes={moment().locale("es-es").format("MMMM")}
        editarPlanificacion={editarPlanificacion}
        lugarERef={lugarERef}
        siERef={siERef}
        noERef={noERef}
        hsInicioERef={hsInicioERef}
        hsFinERef={hsFinERef}
        operadorERef={operadorERef}
        error={error}
        operadorsep={operadorsep}
        delCaso={delCaso}
        planiID={planiID}
        selcaso={selcaso}
      />

      <div className="modal" id="modalformtask" tabIndex="-1">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Tareas Adicionales</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormTareasAdicionales
                gastliq={gastliq}
                idturno={idturno}
                operadorsep={operadorsep}
                hsInicioTRef={hsInicioTRef}
                hsFinTRef={hsFinTRef}
                tareaRef={tareaRef}
                observacionesTRef={observacionesTRef}
                siTRef={siTRef}
                noTRef={noTRef}
                opRef={opRef}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary btn-sm" onClick={registrarTareaAdicional}>Registrar</button>
            </div>
          </div>
        </div>
      </div>



    </Layout>
  );
};

export default guardias;
