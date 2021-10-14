import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from "toastr";
import jsCookie from "js-cookie";
import Router from "next/router";
import { ip } from "../../../config/config";
import FormNuevoPersonal from "../../../components/gestion/personal/FormNuevoPersonal";

const Nuevo = () => {
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let dniRef = React.createRef();
  let altaRef = React.createRef();
  let rolRef = React.createRef();

  const [rol, guardarRol] = useState(null);
  const [errores, guardarErrores] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerRol();
    }
  }, []);

  const traerRol = async () => {
    await axios
      .get(`${ip}api/sgi/personal/traerrol`)
      .then((res) => {
        guardarRol(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer los roles", "ATENCION");
      });
  };

  const regPersonal = async () => {
    guardarErrores(null);

    const personal = {
      apellido: apellidoRef.current.value,
      nombre: nombreRef.current.value,
      dni: dniRef.current.value,
      alta: altaRef.current.value,
      rol: rolRef.current.value,
    };

    if (personal.apellido === "") {
      guardarErrores("El apellido es obligatorio");
    } else if (personal.nombre === "") {
      guardarErrores("El nombre es obligatorio");
    } else if (personal.dni === "") {
      guardarErrores("El dni es obligatorio");
    } else if (personal.alta === "") {
      guardarErrores("El alta es obligatorio");
    } else if (personal.rol === "no") {
      guardarErrores("El rol es obligatorio");
    } else {
      await axios
        .post(`${ip}api/sgi/personal/registrarpersonal`, personal)
        .then((res) => {
          if (res.status === 200) {
            toastr.success("El personal se registro con exito", "ATENCION");

            setTimeout(() => {
              Router.push(`/gestion/personal/legajovirtual`);
            }, 500);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al registrar el personal", "ATENCION");
        });
    }
  };

  return (
    <Layout>
      <FormNuevoPersonal
        rol={rol}
        apellidoRef={apellidoRef}
        nombreRef={nombreRef}
        dniRef={dniRef}
        altaRef={altaRef}
        rolRef={rolRef}
        errores={errores}
        regPersonal={regPersonal}
      />
    </Layout>
  );
};

export default Nuevo;
