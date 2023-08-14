import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import ListadoEstadoOrdenes from "../../../../components/gestion/werchow/orden/ListadoEstadoOrdenes";
import ModalDetalleOrden from "../../../../components/gestion/werchow/orden/ModalDetalleOrden";
import ModalImpresion from "../../../../components/gestion/werchow/orden/ModalImpresion";
import ModalSubirArchivo from "../../../../components/gestion/werchow/orden/ModalSubirArchivo";
import { registrarHistoria } from "../../../../utils/funciones";
import ModalLegajoOrden from "../../../../components/gestion/werchow/orden/ModalLegajoOrden";
import { confirmAlert } from "react-confirm-alert";

const estadoordenes = () => {
  const [listado, guardarListado] = useState([]);
  const [user, guardarUsuario] = useState(null);
  const [perfil, guardarPerfil] = useState(null);
  const [listDetalle, guardarListDetalle] = useState([]);
  const [orde, guardarOrde] = useState(null);
  const [archivos, guardarArchivos] = useState([]);
  const [error, guardarError] = useState(null);
  const [archi, guardarArchi] = useState(null);
  const [listOr, guardarListOrd] = useState(null);

  const eliminarArchivos = async (id) => {
    await axios
      .delete(`${ip}api/archivos/legajovirtualordenes/eliminararchivos/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("El archivo se elimino", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAchivos = async (id) => {
    await axios
      .get(`${ip}api/archivos/legajovirtualordenes/listaarchivos/${id}`)
      .then((res) => {
        let archivos = res.data;

        guardarArchivos(archivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerArchivos = async (e) => {
    e.preventDefault();

    guardarArchivos(e.target.files[0]);
  };

  const uploadArchivos = async (e) => {
    e.preventDefault();

    const fil = document.getElementById("fil");

    if (fil.files.length === 0) {
      guardarError("Debes Seleccionar Un Archivo");
    } else {
      const upload = new FormData();

      upload.append("file", archivos);

      await axios
        .post(
          `${ip}api/archivos/legajovirtualordenes/uploadfichalegajo/${orde.idorden}`,
          upload,
          {
            param: {
              norden: orde.norden,
              nfactura: orde.nfactura,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Archivo Subido Con Exito", "Atencion");

            let accion = `Se subio un archivo al legajo virtual de la orden de pago ID: ${orde.norden}`;

            registrarHistoria(accion, user);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const traerOrdenes = async (us, per) => {
    await axios
      .get(`${ip}api/sgi/ordenpago/traerordenes`, {
        params: {
          perfil: per,
          user: us,
        },
      })
      .then((res) => {
        guardarListado(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al generar el listado", "ATENCION");
      });
  };

  const detalleOrdenPago = async (id) => {
    await axios
      .get(`${ip}api/sgi/ordenpago/detalleorden`, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        guardarListDetalle(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el detalle de la orden",
          "ATENCION"
        );
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("imp").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload();
  };

  const autorizarOrden = async (id) => {
    const valores = {
      orden: id,
      user: user,
      fec: moment().format("YYYY-MM-DD"),
    };

    await axios
      .put(`${ip}api/sgi/ordenpago/autorizar`, valores)
      .then((res) => {
        if (res.status === 200) {
          let accion = `Se autorizo el pago de la orden ID: ${id} por el usuario: ${user}`;

          registrarHistoria(accion, user);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al autorizar la orden", "ATENCION");
      });
  };

  const updatePagadas = async (id, norden) => {
    autorizarOrden(id);

    await axios
      .put(`${ip}api/sgi/ordenpago/pagarorden/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("La orden fue marcada como pagada");

          let accion = `Se marco como pagada la orden de pago ID: ${norden}, por el usuario: ${user}`;

          registrarHistoria(accion, user);

          setTimeout(() => {
            traerOrdenes(user, perfil);
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);

        toastr.error("Ocurrio un error al marcar la orden");
      });
  };

  const desCheckUsos = async (norden) => {
    await axios
      .get(`${ip}api/sgi/ordenpago/detalleorden`, {
        params: {
          id: norden,
        },
      })
      .then((res) => {
        guardarListOrd(res.data);

        if (res.data.length > 0) {
          let arr = res.data;

          for (let i = 0; i < arr.length; i++) {
            axios.put(`${ip}api/sgi/ordenpago/deschekusos/${arr[i].nconsulta}`);

            axios.put(
              `${ip}api/sgi/ordenpago/deschekusosfa/${arr[i].nconsulta}`
            );
          }
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer las ordenes", "ATENCION");
      });
  };

  const anularOrden = async (id, norden, tipOr) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres anular la orden?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            if (tipOr === "Contable") {
              axios
                .put(`${ip}api/sgi/ordenpago/anularorden/${id}`)
                .then((res) => {
                  if (res.status === 200) {
                    toastr.success(
                      "La orden de pago y su contenido fue anulada con exito",
                      "ATENCION"
                    );

                    let accion = `Se anulo la orden de pago ID: ${norden}, por el usuario: ${user}`;

                    registrarHistoria(accion, user);

                    setTimeout(() => {
                      traerOrdenes(user, perfil);
                    }, 500);
                  }
                })
                .catch((error) => {
                  console.log(error);

                  toastr.error("Ocurrio un error al marcar la orden");
                });
            } else if (
              tipOr === "Ordenes Medica" ||
              tipOr === "Practicas Medica"
            ) {
              axios
                .put(`${ip}api/sgi/ordenpago/anularorden/${id}`)
                .then((res) => {
                  if (res.status === 200) {
                    toastr.success("La orden fue marcada como pagada");

                    let accion = `Se anulo la orden de pago ID: ${norden}, por el usuario: ${user}`;

                    registrarHistoria(accion, user);

                    desCheckUsos(norden);

                    setTimeout(() => {
                      traerOrdenes(user, perfil);
                    }, 500);
                  }
                })
                .catch((error) => {
                  console.log(error);

                  toastr.error("Ocurrio un error al marcar la orden");
                });
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const getTrProps = (state, rowInfo, instance) => {
    if (rowInfo) {
      return {
        style: {
          "background-color":
            rowInfo.original.estado === 0
              ? "red"
              : rowInfo.original.pagado === 0
              ? "pink"
              : rowInfo.original.pagado === 1
              ? "#90EE90"
              : null,
          color: rowInfo.original.estado === 0 ? "white" : null,
        },
      };
    }
    return {};
  };

  const mandarMail = (array) => {
    fetch("/api/mail/sgi/ordenpago", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    })
      .then((res) => {
        if (res.status === 200) {
          toastr.info(
            "Se envio un email con la notificacion de la novedad",
            "ATENCION"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
        guardarPerfil(userData.perfil);

        traerOrdenes(userData.usuario, userData.perfil);
      }
    }
  }, []);

  return (
    <Layout>
      <ListadoEstadoOrdenes
        listado={listado}
        detalleOrdenPago={detalleOrdenPago}
        guardarOrde={guardarOrde}
        traerAchivos={traerAchivos}
        getTrProps={getTrProps}
        updatePagadas={updatePagadas}
        anularOrden={anularOrden}
        mandarMail={mandarMail}
      />

      <ModalDetalleOrden listDetalle={listDetalle} />

      <ModalImpresion
        orde={orde}
        listDetalle={listDetalle}
        imprimir={imprimir}
      />

      <ModalSubirArchivo
        handlerArchivos={handlerArchivos}
        uploadArchivos={uploadArchivos}
        orde={orde}
        error={error}
      />

      <ModalLegajoOrden
        archi={archi}
        archivos={archivos}
        guardarArchi={guardarArchi}
        eliminarArchivos={eliminarArchivos}
      />
    </Layout>
  );
};

export default estadoordenes;
