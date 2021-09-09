import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { ip } from "../../../../config/config";
import FormNuevoVisitante from "../../../../components/sepelio/servicios/visitantes/FormNuevoVisitante";
import toastr from "toastr";
import ListadoVisitantes from "../../../../components/sepelio/servicios/visitantes/ListadoVisitantes";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert"; // Import

const nuevo = () => {
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let dniRef = React.createRef();
  let parentezcoRef = React.createRef();
  let telefonoRef = React.createRef();
  let temperaturaRef = React.createRef();

  const [servicio, guardarServicio] = useState(null);
  const [listado, guardarListado] = useState([]);
  const [usuario, guardarUsuario] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();

  const traerServicio = async (id) => {
    await axios
      .get(` ${ip}api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        guardarServicio(res.data);
        traerVisitantes(res.data.idservicio);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el servicio seleccionado",
          "Atencion"
        );
      });
  };

  const traerVisitantes = async (id) => {
    await axios
      .get(`${ip}api/sepelio/visitantes/listadovisitantes/${id}`)
      .then((res) => {
        guardarListado(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al traer el listado de visitantes de este servicio",
          "Atencion"
        );
      });
  };

  const regVisitante = async () => {
    const visitante = {
      idservicio: servicio.idservicio,
      apellido: apellidoRef.current.value,
      nombre: nombreRef.current.value,
      dni: dniRef.current.value,
      parentezco: parentezcoRef.current.value,
      telefono: telefonoRef.current.value,
      temperatura: temperaturaRef.current.value,
      operador: usuario,
      fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
    };

    await axios
      .post(`${ip}api/sepelio/visitantes/nuevovisitante`, visitante)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("Se registro el visitante correctamente", "ATENCION");
          traerVisitantes(servicio.idservicio);
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al registrar al visitante", "ATENCION");
      });
  };

  const eliminarVisitante = async (id) => {
    await confirmAlert({
      title: "ATENCION",
      message: "¿Seguro quieres eliminar al visitante?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            axios
              .delete(`${ip}api/sepelio/visitantes/eliminarvisitante/${id}`)
              .then((res) => {
                if (res.status === 200) {
                  toastr.success(
                    "El visitante se elimino correctamente",
                    "ATENCION"
                  );

                  traerVisitantes(servicio.idservicio);
                }
              })
              .catch((error) => {
                console.log(error);
                toastr.error(
                  "Ocurrio un error al eliminar al visitante",
                  "ATENCION"
                );
              });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerServicio(router.query.id);

      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);
        guardarUsuario(userData.usuario);
      }
    }
  }, []);

  return (
    <Layout>
      <ListadoVisitantes
        listado={listado}
        datatoggle="modal"
        datatarget="#opciones"
        eliminarVisitante={eliminarVisitante}
      />

      <div
        className="modal fade"
        id="opciones"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Opciones
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
              <FormNuevoVisitante
                servicio={servicio}
                apellidoRef={apellidoRef}
                nombreRef={nombreRef}
                dniRef={dniRef}
                parentezcoRef={parentezcoRef}
                telefonoRef={telefonoRef}
                temperaturaRef={temperaturaRef}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={regVisitante}
              >
                Registrar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default nuevo;
