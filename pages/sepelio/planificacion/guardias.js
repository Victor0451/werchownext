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

const guardias = () => {
  let lugarRef = React.createRef();
  let observacionesTRef = React.createRef();
  let siRef = React.createRef();
  let noRef = React.createRef();
  let siTRef = React.createRef();
  let noTRef = React.createRef();
  let hsInicioRef = React.createRef();
  let hsFinRef = React.createRef();
  let hsInicioTRef = React.createRef();
  let hsFinTRef = React.createRef();
  let operadorRef = React.createRef();
  let tareaRef = React.createRef();
  let opRef = React.createRef()

  const [plani, guardarPlani] = useState(null);
  const [error, guardarError] = useState(null);
  const [gastliq, guardarGastLiq] = useState(null);
  const [operadorsep, guardarOperadorSep] = useState(null)
  const [idturno, guardarIdTurno] = useState(null)


  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
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
        liquidado: 0
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

        }
        console.log(res.data)
      })
      .catch(error => {
        toastr.error("Ocurrio un error", "ATENCION")
        console.log(error)
      })

  }

  return (
    <Layout>
      <PlanificacionGuardias
        registroPlanificacion={registroPlanificacion}
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
              data-toggle="modal" data-target="#staticBackdrop"
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
      />

      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Tareas Adicionales</h5>
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
