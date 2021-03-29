import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import toastr from "toastr";
import SolicitudIngreso from "../../../components/socios/solilcitudes/SolicitudIngreso";
import BuscarSocio from "../../../components/socios/solilcitudes/BuscarSocio";
import { ip } from '../../../config/config'


const solicitud = () => {
  let contratoRef = React.createRef()

  const [ficha, guardarFicha] = useState(null)
  const [empresa, guardarEmpresa] = useState(null)
  const [adhs, guardarAdhs] = useState(null)
  const [errores, guardarErrores] = useState(null)


  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarAdhs(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(
          `${ip}api/werchow/maestro/titular/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);

          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
          traerAdhs(ficha.CONTRATO);
          guardarEmpresa("W");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const buscarTitularM = async (e) => {
    e.preventDefault();


    guardarFicha(null);
    guardarErrores(null);
    guardarAdhs(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;

      await axios
        .get(
          `${ip}api/werchow/maestro/titularm/${contrato}`
        )
        .then((res) => {
          let ficha = res.data[0][0];
          guardarFicha(ficha);


          if (ficha === "undefined") {
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }

          guardarEmpresa("M");
          traerAdhsM(ficha.CONTRATO);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };

  const traerAdhs = async (contrato) => {
    await axios
      .get(
        `${ip}api/werchow/adherent/adherentestit/${contrato}`
      )
      .then((res) => {
        guardarAdhs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerAdhsM = async (contrato) => {
    await axios
      .get(
        `${ip}api/mutual/adherent/adherentestit/${contrato}`
      )
      .then((res) => {
        guardarAdhs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("solicitud").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload();
  };

  return (
    <Layout>

      {ficha ? null : (
        <BuscarSocio buscarTitular={buscarTitular} buscarTitularM={buscarTitularM} contratoRef={contratoRef} errores={errores} />
      )}

      {!ficha ? null : (

        <>
          <div className="mt-4 container  border border-dark alert alert-primary">
            <h2>
              <strong>
                <u>
                  Opciones
               </u>
              </strong>
            </h2>
            <div className="mt-4 row">
              <div className="col-md-6">
                <button className="btn btn-sm btn-block btn-primary"
                  onClick={imprimir}
                >Imprimir</button>
              </div>

              <div className="col-md-6">
                <a href="/socios/solicitudes/ingreso" className="btn btn-sm btn-block btn-danger">Cancelar</a>
              </div>
            </div>
          </div>
          <div id='solicitud' className="print-soli">
            <SolicitudIngreso ficha={ficha} empresa={empresa} adhs={adhs} />
          </div>
        </>

      )}
    </Layout>
  );
};

export default solicitud;
