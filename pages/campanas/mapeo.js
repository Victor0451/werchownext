import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../config/config";
import toastr from "toastr";
import BuscarCampaña from "../../components/campañas/mapeo/BuscarCampaña";
import MapeoCampañas from "../../components/campañas/mapeo/MapeoCampañas";
import ModalAccionesReg from "../../components/campañas/mapeo/ModalAccionesReg";

const Mapeo = () => {
  let recRef = React.createRef();
  let campRef = React.createRef();
  let empRef = React.createRef();

  const [recup, guardarRecup] = useState(null);
  const [errores, guardarError] = useState(null);
  const [mapa, guardarMapa] = useState(null);
  const [acciones, guardarAcciones] = useState([]);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      recuperadores();
    }
  }, []);

  const recuperadores = async () => {
    await axios
      .get(`${ip}api/sgi/mapa/recuperadores`)
      .then((res) => {
        guardarRecup(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarMapa = async () => {
    guardarError(null);

    let rec = recRef.current.value;
    let camp = campRef.current.value;
    let emp = empRef.current.value;

    if (rec === "Selecciona un Recuperador") {
      guardarError("Debes elegir un recuperador");
    } else if (camp === "Selecciona una Campaña") {
      guardarError("Debes elegir una campaña");
    } else if (emp === "Selecciona una Empresa") {
      guardarError("Debes elegir una empresa");
    } else {
      await axios
        .get(`${ip}api/sgi/mapa/mapacampanasactivas`, {
          params: {
            rec: rec,
            camp: camp,
            emp: emp,
          },
        })
        .then((res) => {
          guardarMapa(res.data[0]);
          toastr.success("Se trajo el mapeo con exito", "ATENCION");
        })
        .catch((error) => {
          console.log(error);
          toastr.error("Ocurrio un error al traer el mapeo", "ATENCION");
        });
    }
  };

  const getTrProps = (state, rowInfo, instance) => {
    if (rowInfo) {
      return {
        style: {
          "background-color": (rowInfo.original.estadocaso = 1
            ? "green"
            : "red"),
        },
      };
    }
    return {};
  };

  const traerAccionesReg = async (id) => {
    await axios
      .get(`${ip}api/sgi/mapa/traeraccionesreg/${id}`)
      .then((res) => {
        guardarAcciones(res.data[0]);

        toastr.success("Se trajo las acciones con exito", "ATENCION");
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer las acciones", "ATENCION");
      });
  };

  return (
    <Layout>
      <BuscarCampaña
        listado={recup}
        recRef={recRef}
        campRef={campRef}
        emprRef={empRef}
        consultarMapa={consultarMapa}
        errores={errores}
      />

      {mapa && mapa.length === 0 ? (
        <div className="container alert alert-info text-center text-uppercase border border-dark mt-4">
          No se registran casos
        </div>
      ) : mapa ? (
        <>
          <MapeoCampañas
            casos={mapa}
            getTrProps={getTrProps}
            traerAccionesReg={traerAccionesReg}
          />
          <ModalAccionesReg acciones={acciones} />
        </>
      ) : null}
    </Layout>
  );
};

export default Mapeo;
