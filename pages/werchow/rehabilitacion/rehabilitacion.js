import React, { useState } from "react";
import moment from "moment-timezone";
import Layout from "../../../components/layout/Layout";
import Rehabilitacion from "../../../components/werchow/rehabilitacion/Rehabilitacion";
import NotaRehabilitacion from "../../../components/werchow/rehabilitacion/NotaRehabilitacion";
import ReactToPrint from "react-to-print";

import axios from "axios";
import toastr from "toastr";

const rehabilitacion = () => {
  let contratoRef = React.createRef();
  let componentRef = React.createRef();

  const imprimir = () => {
    let contenido = document.getElementById("solicitud").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;
  };

  const [ficha, guardarFicha] = useState(null);
  const [nomoro, guardarNoMoro] = useState(null);
  const [errores, guardarErrores] = useState(null);

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarErrores(null);
    guardarNoMoro(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;
      console.log(contrato);

      await axios
        .get(
          `http://190.231.32.232:5002/api/sgi/prestamos/consultarficha/${contrato}`
        )
        .then((res) => {
          let ficha = res.data;
          if (
            res.data.GRUPO === 1001 ||
            res.data.GRUPO === 3444 ||
            res.data.GRUPO === 3666 ||
            res.data.GRUPO === 3777 ||
            res.data.GRUPO === 3888 ||
            res.data.GRUPO === 3999 ||
            res.data.GRUPO === 4004
          ) {
            guardarFicha(ficha);
            console.log(ficha);
          } else if (
            res.data.GRUPO !== 1001 ||
            res.data.GRUPO !== 3444 ||
            res.data.GRUPO !== 3666 ||
            res.data.GRUPO !== 3777 ||
            res.data.GRUPO !== 3888 ||
            res.data.GRUPO !== 3999 ||
            res.data.GRUPO !== 4004
          ) {
            toastr.warning(
              "EL NUMERO DE FICHA NO PERTENECE A UN MOROSO",
              "ATENCION"
            );
            const nomoro = "EL NUMERO DE FICHA NO PERTENECE A UN MOROSO";
            guardarNoMoro(nomoro);
            toastr.error(
              "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
              "ATENCION"
            );
          } else if (res.DATA === null) {
            const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
            guardarErrores(errores);
          }
        })
        .catch((error) => {
          console.log(error);
          toastr.error(
            "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
            "ATENCION"
          );
          const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
          guardarErrores(errores);
        });
    } else if (contratoRef.current.value === "") {
      const errores = "Debes Ingresar Un Numero De Contrato";
      guardarErrores(errores);
    }
  };
  let fecha = moment().format("DD/MM/YYYY");
  return (
    <Layout>
      <Rehabilitacion
        buscarTitular={buscarTitular}
        contratoRef={contratoRef}
        errores={errores}
        nomoro={nomoro}
      />

      {ficha !== null ? (
        <>
          <div
            id="solicitud"
            className="mt-4 container "
            ref={(el) => (componentRef = el)}
          >
            <NotaRehabilitacion ficha={ficha} fecha={fecha} />
          </div>
          <div className="alert alert-primary">
            <div className="mt-4 p-4 border">
              <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
              <div className="row d-flex justify-content-center">
                {/* <ReactToPrint
              trigger={() => (
                <a href="#" className="btn btn-primary">
                  imprimir{" "}
                </a>
              )}
              content={() => componentRef}
            /> */}

                <button className="btn btn-primary" onClick={imprimir}>
                  Imprimir
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Layout>
  );
};

export default rehabilitacion;
