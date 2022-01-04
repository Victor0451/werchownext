import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import AdministracionServicios from "../../../../components/sepelio/servicios/administracion/AdministracionServicios";
import ExportarPadron from "../../../../components/sepelio/servicios/administracion/ExportarPadron";
import toastr from "toastr";
import { ip } from '../../../../config/config'

const administracion = () => {
  const [servicio, guardarServicio] = useState(null);

  let token = jsCookie.get("token");

  const traerServicio = async () => {
    axios
      .get(
        ` ${ip}api/sepelio/servicio/serviciossinimpactar`
      )
      .then((res) => {
        guardarServicio(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const putTitularesW = async () => {
    axios
      .put(` ${ip}api/sepelio/servicio/puttitularesw`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const putTitularesM = async () => {
    axios
      .put(` ${ip}api/sepelio/servicio/puttitularesm`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const putAdherentesW = async () => {
    axios
      .put(` ${ip}api/sepelio/servicio/putadherentesw`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const putAdherentesM = async () => {
    axios
      .put(` ${ip}api/sepelio/servicio/putadherentesm`)
      .then((res) => {
        toastr.success(`${res.data[0].info}`, `ATENCION`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerServicio();
    }
  }, []);

  return (
    <Layout>
      <AdministracionServicios listado={servicio} actualizar={traerServicio} />

      <div className="mt-4 container list border border-dark p-4">
        <h4 className="mb-4">
          <strong>
            <u>Opciones</u>
          </strong>
        </h4>

        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <button
              className="btn btn-block btn-primary "
              onClick={putTitularesW}
            >
              Actualizar Titulares Werchow
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-block btn-primary"
              onClick={putAdherentesW}
            >
              Actualizar Adherentes Werchow
            </button>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-block btn-primary"
              onClick={putTitularesM}
            >
              Actualizar Titulares Mutual
            </button>
          </div>
          <div className="col-md-4 mt-2">
            <button
              className="btn btn-block btn-primary"
              onClick={putAdherentesM}
            >
              Actualizar Adherentes Mutual
            </button>
          </div>
          <div className="col-md-4 mt-2">
            <ExportarPadron padron={servicio} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default administracion;
