import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { ip } from "../../../../config/config";
import moment from "moment";
import toastr from "toastr";
import Spinner from "../../../../components/layout/Spinner";
import GestionarAtaud from "../../../../components/sepelio/servicios/ataud/GestionarAtaud";
import { confirmAlert } from "react-confirm-alert";

const gestion = () => {
  let idataudRef = React.createRef();

  const [user, guardarUsuario] = useState(null);
  const [flag, guardarFlag] = useState(false);
  const [servicio, guardarServicio] = useState(null);
  const [nuataud, guardarNuAtaud] = useState(null);
  const [ataud, guardarAtaud] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();

  const selcasofrm = (row) => {
    document.getElementById("ataud").value = `${row.original.nombre}`;
    document.getElementById("idataud").value = `${row.original.idataud}`;
    document.getElementById("uso").value = `${row.original.uso}`;
    guardarNuAtaud(row.original);
  };

  const traerServicio = async (id) => {
    axios
      .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        guardarServicio(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAtaud = async (idataud) => {
    await axios
      .get(`${ip}api/sepelio/ataudes/ataud/${idataud}`)
      .then((res) => {
        if (res.data.length !== 0) {
          toastr.warning(
            "Este servicio ya cuenta con ataud asignada",
            "ATENCION"
          );
          guardarFlag(true);
          guardarAtaud(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toFalse = () => {
    confirmAlert({
      title: "ATENCION",
      message:
        "Estas a punto de cambiar el ataud de este servicio. ¿Estas Seguro?",
      buttons: [
        {
          label: "SI",
          onClick: () => {
            guardarFlag(false);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const registrarAtaud = async () => {
    let datos = {
      oldstock: ataud.stock + 1,
      nustock: nuataud.stock - 1,
      oldid: ataud.idataud,
      nuid: nuataud.idataud,
      idservicio: servicio.idservicio,
    };

    await axios
      .put(`${ip}api/sepelio/ataudes/updatestock2`, datos)
      .then((res) => {
        if (res.status === 200) {
          toastr.success(
            "Se gestiono correctamente el cambio de ataud",
            "ATENCION"
          );
          setTimeout(() => {
            Router.push("/sepelio/servicios/listado");
          }, 500);
        }
      })
      .catch((error) => {
        toastr.error("Ocurrio un error al actualizar el stock", "ATENCION");
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerServicio(router.query.id);

      traerAtaud(router.query.idataud);

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData);
      }
    }
  }, []);

  return (
    <Layout>
      {flag === true ? (
        <>
          {servicio ? (
            <div className="container mt-4 alert alert-info border border-dark text-center text-uppercase">
              Servicio N° {servicio.idservicio} - {servicio.apellido},{" "}
              {servicio.nombre} Ya posee ataud asigando
            </div>
          ) : null}

          {ataud ? (
            <div className="container alert alert-info text-center border border-dark">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4>
                    <strong>
                      <u>Ataud Asignado</u>
                    </strong>
                  </h4>
                </div>

                <div className="col-md-6">
                  <button className="btn btn-primary btn-sm" onClick={toFalse}>
                    Gestionar Ataud
                  </button>
                </div>
              </div>

              <div className="row border border-dark d-flex justify-content-center">
                <div className="col-md-3 mt-4 mb-4">
                  <label>
                    <strong>
                      <u>Fabricante</u>: {ataud.fabricante}
                    </strong>
                  </label>
                </div>
                <div className="col-md-4 mt-4 mb-4">
                  <label>
                    <strong>
                      {" "}
                      <u>Ataud</u>: {ataud.nombre}
                    </strong>
                  </label>
                </div>
                <div className="col-md-3 mt-4 mb-4">
                  <label>
                    <strong>
                      {" "}
                      <u>Tipo</u>: {ataud.tipo}{" "}
                    </strong>
                  </label>
                </div>
                <div className="col-md-3 mt-4 mb-4">
                  <label>
                    <strong>
                      {" "}
                      <u>Uso</u>: {ataud.uso}{" "}
                    </strong>
                  </label>
                </div>
                <div className="col-md-3 mt-4 mb-4">
                  <label>
                    <strong>
                      {" "}
                      <u>Medidas</u>: {ataud.medidas}{" "}
                    </strong>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <Spinner />
          )}
        </>
      ) : flag === false ? (
        <GestionarAtaud
          selcasofrm={selcasofrm}
          idataudRef={idataudRef}
          ataud={ataud}
          registrarAtaud={registrarAtaud}
        />
      ) : null}
    </Layout>
  );
};

export default gestion;
