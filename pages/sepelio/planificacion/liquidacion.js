import React, { useEffect, useState, useRef } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import moment from "moment";
import axios from "axios";
import { ip } from "../../../config/config";
import toastr from "toastr";
import FromLiquidacion from "../../../components/sepelio/planificacion/FromLiquidacion";
import Liquidacion from "../../../components/sepelio/planificacion/Liquidacion";
import ReactToPrint from "react-to-print";
import ResumenLiquidacion from "../../../components/sepelio/planificacion/ResumenLiquidacion";

const liquidacion = () => {
  let componentRef = useRef();

  const [mes, guardarMes] = useState(null);
  const [ano, guardarAno] = useState(null);
  const [cargando, guardarCargando] = useState(false);
  const [sindato, guardarSindato] = useState(null);
  const [liqguardias, guardarLiqGuardias] = useState(null);
  const [liqtarad, guardarLiqTareas] = useState(null);
  const [resumenG, guardarResumenG] = useState(null);
  const [resumenT, guardarResumenT] = useState(null);
  const [user, guardarUsuario] = useState(null);
  const [usnom, guardarUsNom] = useState(null);

  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = JsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
        guardarUsNom(userData.usuario);
      }
    }
  }, []);

  const handleChange = (value, flag) => {
    if (flag === "mes") {
      const mes = value.value;
      guardarMes(mes);
    } else if (flag === "ano") {
      const ano = value.value;
      guardarAno(ano);
    }
  };

  const buscarTareasALiquidar = () => {
    let month = moment().format("M");
    let year = moment().format("YYYY");

    if (mes === null || ano === null) {
      toastr.warning("Debes seleccionas un mes y un año si o no", "ATENCION");
    } else if (mes > parseInt(month) && ano >= year) {
      let sindato = true;
      console.log(sindato);
      guardarSindato(sindato);
    } else if (
      mes >= parseInt(month) ||
      (mes <= parseInt(month) && ano <= year)
    ) {
      let cargando = true;
      guardarCargando(cargando);
      let sindato = false;
      guardarSindato(sindato);

      liquidarTareasAd();
      liquidarGuardias();
    }
  };

  const liquidarTareasAd = async () => {
    await axios
      .get(`${ip}api/sepelio/tareasadicionales/liquidartareas`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        guardarLiqTareas(res.data[0]);
      })
      .catch((error) => {
        toastr.error("Ocurrio un error", "ATENCION");
        console.log(error);
      });
  };

  const liquidarGuardias = async () => {
    await axios
      .get(`${ip}api/sepelio/planificacion/liquidarguardias`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          guardarLiqGuardias(res.data[0]);
        }
      })
      .catch((error) => {
        toastr.error("Ocurrio un error", "ATENCION");
        console.log(error);
      });
  };

  const traerResumenLiq = async () => {
    await axios
      .get(`${ip}api/sepelio/planificacion/resumenguardias`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res1) => {
        if (res1.status === 200) {
          guardarResumenG(res1.data[0]);

          console.log(res1.data[0]);

          axios
            .get(`${ip}api/sepelio/tareasadicionales/resumentareas`, {
              params: {
                mes: mes,
                ano: ano,
              },
            })
            .then((res2) => {
              guardarResumenT(res2.data[0]);
            })
            .catch((error) => {
              toastr.error(
                "Ocurrio un error al traer la liquidacion final",
                "ATENCION"
              );
              console.log(error);
            });
        }
      })
      .catch((error) => {
        toastr.error(
          "Ocurrio un error al traer la liquidacion final",
          "ATENCION"
        );
        console.log(error);
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("liquidacion").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload();
  };

  const regLiqGuardia = async (id) => {
    axios
      .put(`${ip}api/sepelio/planificacion/regliqguardia/${id}`, {
        params: {
          operador: usnom,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toastr.success("La guardia se liquido correctamente", "ATENCION");

          setTimeout(() => {
            buscarTareasALiquidar();
          }, 500);
        }
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al liquidar la guardia", "ATENCION");
        console.log(error);
      });
  };

  const regLiqTareas = async (id) => {
    axios
      .put(`${ip}api/sepelio/tareasadicionales/regliqtareas/${id}`, {
        params: {
          operador: usnom,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toastr.success("La tarea se liquido correctamente", "ATENCION");

          setTimeout(() => {
            buscarTareasALiquidar();
          }, 500);
        }
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al liquidar la tarea", "ATENCION");
        console.log(error);
      });
  };

  const aprobarTareas = async (id, flag) => {
    if (flag === 1) {
      axios
        .put(`${ip}api/sepelio/tareasadicionales/aprobarliqtarea/${id}`, {
          params: {
            operador: usnom,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Liquidacion de tarea aprobada", "ATENCION");

            setTimeout(() => {
              buscarTareasALiquidar();
            }, 500);
          }
        })
        .catch((error) => {
          toastr.error("Ocurrio un error al liquidar la tarea", "ATENCION");
          console.log(error);
        });
    } else if (flag === 0) {
      axios
        .put(`${ip}api/sepelio/tareasadicionales/cancelarliqtarea/${id}`, {
          params: {
            operador: usnom,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Liquidacion de tarea rechazada", "ATENCION");

            setTimeout(() => {
              buscarTareasALiquidar();
            }, 500);
          }
        })
        .catch((error) => {
          toastr.error("Ocurrio un error al liquidar la tarea", "ATENCION");
          console.log(error);
        });
    }
  };

  const aprobarGuardias = async (id, flag) => {
    if (flag === 1) {
      axios
        .put(`${ip}api/sepelio/planificacion/aprobarliqguardia/${id}`, {
          params: {
            operador: usnom,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Liquidacion de guardia aprobada", "ATENCION");

            setTimeout(() => {
              buscarTareasALiquidar();
            }, 500);
          }
        })
        .catch((error) => {
          toastr.error("Ocurrio un error al liquidar la tarea", "ATENCION");
          console.log(error);
        });
    } else if (flag === 0) {
      axios
        .put(`${ip}api/sepelio/planificacion/cancelarliqguardia/${id}`, {
          params: {
            operador: usnom,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Liquidacion de guardia rechazada", "ATENCION");

            setTimeout(() => {
              buscarTareasALiquidar();
            }, 500);
          }
        })
        .catch((error) => {
          toastr.error(
            "Ocurrio un error en la aprobacion de la guardia",
            "ATENCION"
          );
          console.log(error);
        });
    }
  };

  return (
    <Layout>
      <FromLiquidacion
        handleChange={handleChange}
        buscarTareasALiquidar={buscarTareasALiquidar}
      />

      {sindato === null ? null : (
        <div className="container mt-4 mb-4 border border-dark p-2">
          {sindato === true ? (
            <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
              <strong>No hay datos generados aun. Intente mas tarde</strong>
            </div>
          ) : (
            <>
              <div className="print-efect" ref={componentRef}>
                <div className="row">
                  <div className="col-md-9">
                    <h3>
                      <strong>
                        <u>
                          Liquidacion de guardias y tareas adicionales Periodo:{" "}
                          {mes}/{ano}
                        </u>
                      </strong>
                    </h3>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-info"
                      data-toggle="modal"
                      data-target="#liqmodal"
                      onClick={traerResumenLiq}
                    >
                      Resumen Liquidacion
                    </button>
                  </div>
                </div>

                <Liquidacion
                  liqguardias={liqguardias}
                  liqtarad={liqtarad}
                  regLiqGuardia={regLiqGuardia}
                  regLiqTareas={regLiqTareas}
                  aprobarGuardias={aprobarGuardias}
                  aprobarTareas={aprobarTareas}
                  user={user}
                />
              </div>
            </>
          )}
        </div>
      )}

      <div
        className="modal fade"
        id="liqmodal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Liquidacion Final Periodo - {mes}/{ano}
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
              <div id="liquidacion">
                <ResumenLiquidacion
                  resumenG={resumenG}
                  resumenT={resumenT}
                  mes={mes}
                  ano={ano}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={imprimir}
              >
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default liquidacion;
