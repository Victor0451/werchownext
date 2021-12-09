import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from "toastr";
import jsCookie from "js-cookie";
import Router from "next/router";
import ListadoAsesores from "../../../components/gestion/personal/ListadoPersonal";
import { ip } from "../../../config/config";

const legajovirtual = () => {
  const [personal, guardarPersonal] = useState(null);
  const [detalle, guardarDetalle] = useState(null);
  const [titulo, guardarTitulo] = useState(null);
  const [archivos, guardarArchivos] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerAsesores();
    }
  }, []);

  const traerAsesores = async () => {
    await axios
      .get(`${ip}api/sgi/personal/traerpersonal`)
      .then((res) => {
        guardarPersonal(res.data);
        toastr.success("Se trajo el personal con exito", "ATENCION");
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer el personal", "ATENCION");
      });
  };

  const traerDetalle = async (id, apellido, nombre) => {
    guardarDetalle(null);

    let asesor = `${apellido}, ${nombre}`;

    guardarTitulo(asesor);

    await axios
      .get(`${ip}api/sgi/personal/detallespersonal/${id}`)
      .then((res) => {
        guardarDetalle(res.data);
        traerArchivos(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerArchivos = async (id) => {
    await axios
      .get(`${ip}api/archivos/legajovirtualpersonal/listaarchivos/${id}`)
      .then((res) => {
        let archivos = res.data;
        guardarArchivos(archivos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eliminarArchivos = async (id) => {
    await axios
      .delete(`${ip}api/archivos/legajovirtualpersonal/eliminararchivos/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("El archivo se elimino", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout>
      <ListadoAsesores
        personal={personal}
        detalle={detalle}
        traerDetalle={traerDetalle}
        titulo={titulo}
        archivos={archivos}
        eliminarArchivos={eliminarArchivos}
        traerArchivos={traerArchivos}
      />
    </Layout>
  );
};

export default legajovirtual;
