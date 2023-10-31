import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import BuscarSocio from "../../components/buscar/BuscarSocio";
import Noticias from "../../components/noticias/Noticias";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../config/config";

// Validaciones
import useValidacion from "../../hooks/useValidacion";
import validarBuscarSocio from "../../validacion/validarBuscarSocio";
import Router from "next/router";
import AccesosRapidos from "../../components/home/AccesosRapidos";
import ModalNovedades from "../../components/layout/ModalNovedades";
import Notificaciones from "../../components/home/Notificaciones";
import moment from "moment";
import toastr from "toastr";

const STATE_INICIAL = {
  socio: "",
  dni: "",
  apellido: "",
};

const home = () => {
  const [error, guardarError] = useState(false);
  const [novedades, guardarNovedades] = useState(null);
  const [socioRes, guardarSocio] = useState(null);
  const [socioGest, guardarGestion] = useState(null);
  const [listSocio, guardarListSocio] = useState(null);
  const [user, guardarUsuario] = useState(null);
  const [msj, guardarMensajes] = useState(0);
  const [prest, guardarPrest] = useState(0);
  const [orde, guardarOrde] = useState(0);

  const { valores, errores, handleChange, handleSubmit, handleBlur } =
    useValidacion(STATE_INICIAL, validarBuscarSocio, buscarSocio);

  const { socio, dni, apellido } = valores;

  async function buscarSocio() {
    try {
      //Req body

      guardarSocio(null);
      guardarGestion(null);
      guardarListSocio(null);

      if (socio) {
        await axios
          .get(`${ip}api/sgi/campanas/buscarcaso/${socio}`)

          .then((res) => {
            if (res.data === null) {
              guardarSindato("El socio no esta en campaña");
            } else {
              const socioRes = res.data;
              guardarSocio(socioRes);
            }
          });

        await axios
          .get(`${ip}api/sgi/campanas/buscargestioncaso/${socio}`)

          .then((res) => {
            const socioGest = res.data;
            guardarGestion(socioGest);
          });
      } else if (dni) {
        await axios
          .get(`${ip}api/sgi/campanas/buscarcasodni/${dni}`)

          .then((res) => {
            if (res.data === null) {
              guardarSindato("El socio no esta en campaña");
            } else {
              const socioRes = res.data;
              console.log(socioRes);
              guardarSocio(socioRes);

              axios
                .get(
                  `${ip}api/sgi/campanas/buscargestioncaso/${socioRes.contrato}`
                )

                .then((res) => {
                  const socioGest = res.data;
                  guardarGestion(socioGest);
                });
            }
          });
      } else if (apellido) {
        await axios
          .get(`${ip}api/sgi/campanas/buscarcasoapellido/${apellido}`)

          .then((res) => {
            if (res.data === null) {
              guardarSindato("El socio no esta en campaña");
            } else {
              const listSocios = res.data;
              guardarListSocio(listSocios);
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const ShowModalNovs = () => {
    document.getElementById("showModal").click();
  };

  const traerNovs = async () => {
    await axios
      .get(`${ip}api/sgi/novedades/traernovedades`)
      .then((res) => {
        if (res.status === 200) {
          guardarNovedades(res.data);
          ShowModalNovs();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerMensajes = async (id) => {
    await axios
      .get(`${ip}api/sgi/mails/listmsjsinleer/${id}`)
      .then((res) => {
        if (res.status === 200) {
          guardarMensajes(res.data.length);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer los mensajes", "ATENCION");
      });
  };

  const prestamosPendientes = async (per) => {
    await axios
      .get(`${ip}api/sgi/prestamos/listadoprestamospendientes`)
      .then((res) => {
        if (res.data.length !== 0) {
          guardarPrest(res.data.length);

          parImpar(res.data, per);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mandarMail = (array) => {
    fetch("/api/mail/sgi/prestamos", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(array),
    })
      .then((res) => {
        if (res.status === 200) {
          jsCookie.set("env", true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ordenesPendientes = async () => {
    await axios
      .get(`${ip}api/sgi/ordenpago/traerordenespendientes`)
      .then((res) => {
        guardarOrde(res.data.length);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al generar el listado", "ATENCION");
      });
  };

  const parImpar = (arr, per) => {
    let numero = moment().format("DD");
    let f = jsCookie.get("env");
    if (per === 1 || per === 3) {
      if (f !== "true") {
        if (numero % 2 == 0 && arr.length > 0) {
          mandarMail(arr);
        }
      }
    }
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.perfil);

        traerMensajes(userData.usuario);

        prestamosPendientes(userData.perfil);
      }

      traerNovs();

      ordenesPendientes();
    }
  }, []);

  return (
    <Layout>
      <div>
        <Noticias user={user} />

        {user == 1 || user == 3 ? (
          <Notificaciones msj={msj} prest={prest} orde={orde} />
        ) : null}

        <AccesosRapidos user={user} />

        {user == 2 || user == 1 || user == 5 ? (
          <BuscarSocio
            socio={socio}
            dni={dni}
            apellido={apellido}
            errores={errores}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            error={error}
            socioGest={socioGest}
            socioRes={socioRes}
            listSocio={listSocio}
          />
        ) : null}
      </div>

      <ModalNovedades novedades={novedades} />

      <button
        hidden
        type="button"
        id="showModal"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#novedades"
      >
        Launch demo modal
      </button>
    </Layout>
  );
};

export default home;
