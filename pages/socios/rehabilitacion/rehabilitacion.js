import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Layout from "../../../components/layout/Layout";
import Rehabilitacion from "../../../components/socios/rehabilitacion/Rehabilitacion";
import jsCookie from "js-cookie";

import axios from "axios";
import toastr from "toastr";

const rehabilitacion = () => {
  let contratoRef = React.createRef();
  let componentRef = React.createRef();
  let vigenciaRef = React.createRef();

  const [vigencia, guardarVigencia] = useState(null);
  const [error, guardarError] = useState(null);

  const handlechange = () => {
    let cuotas = vigenciaRef.current.value;

    if (cuotas === "") {
      document.getElementById("btn").hidden = true;
    } else {
      let carencia = cuotas * 15;

      let vigencia = moment().add(carencia, "days").format("YYYY-MM-DD");

      document.getElementById("btn").hidden = false;

      guardarVigencia(vigencia);
    }
  };

  const handleBlur = () => {
    let cuotas = vigenciaRef.current.value;

    if (cuotas === "") {
      const error = "Debes Ingresar La Cantidad De Cuotas A Adeudadas";
      guardarError(error);
    }
  };

  const imprimir = () => {
    let contenido = document.getElementById("solicitud").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload();
  };

  const [empresa, guardarEmpresa] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [nomoro, guardarNoMoro] = useState(null);
  const [errores, guardarErrores] = useState(null);

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarNoMoro(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;
      console.log(contrato);

      await axios
        .get(
          `http://190.231.32.232:5002/api/sgi/socios/consultarficha/${contrato}`
        )
        .then((res) => {
          let ficha = res.data;
          if (
            res.data.GRUPO === 1001 ||
            res.data.GRUPO === 1000 ||
            res.data.GRUPO === 3444 ||
            res.data.GRUPO === 3666 ||
            res.data.GRUPO === 3777 ||
            res.data.GRUPO === 3888 ||
            res.data.GRUPO === 3999 ||
            res.data.GRUPO === 4004
          ) {
            guardarFicha(ficha);
            guardarEmpresa("W");
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
              "EL NUMERO DE FICHA NO ES MOROSO O ESTA DADA DE BAJA",
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

  const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarFicha(null);
    guardarErrores(null);
    guardarNoMoro(null);

    if (contratoRef.current.value !== "") {
      let contrato = contratoRef.current.value;
      console.log(contrato);

      await axios
        .get(
          `http://190.231.32.232:5002/api/sgi/socios/consultarficham/${contrato}`
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
            guardarEmpresa("M");
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
            const errores =
              "EL NUMERO DE FICHA NO ES MOROSO O ESTA DADA DE BAJA";
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

  const nuevaRehab = async (e) => {
    e.preventDefault();

    let usuario = jsCookie.get("usuario");

    let userData = JSON.parse(usuario);

    const rehab = {
      contrato: ficha.CONTRATO,
      apellido: ficha.APELLIDOS,
      nombre: ficha.NOMBRES,
      operador: userData.usuario,
      idoperador: userData.id,
      vigencia: vigencia,
      fecha: fecha,
      cuotas: vigenciaRef.current.value,
      dni: ficha.NRO_DOC,
      empresa: "",
    };

    if (empresa === "W") {
      rehab.empresa = "WERCHOW";
    } else if (empresa === "M") {
      rehab.empresa = "MUTUAL SAN VALENTIN";
    }

    await axios
      .post(`http://190.231.32.232:5002/api/sgi/socios/nuevarehab`, rehab)
      .then((res) => {
        console.log(res.data, res.status);
        toastr.success(
          "La rehabilitacion del socio fue registrada, puede imprimir la notificacion",
          "ATENCION"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let fecha = moment().format("YYYY-MM-DD");

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <Rehabilitacion
        buscarTitular={buscarTitular}
        buscarTitularM={buscarTitularM}
        contratoRef={contratoRef}
        errores={errores}
        nomoro={nomoro}
        ficha={ficha}
        empresa={empresa}
        nuevaRehab={nuevaRehab}
        imprimir={imprimir}
        handlechange={handlechange}
        handleBlur={handleBlur}
        vigenciaRef={vigenciaRef}
        vigencia={vigencia}
        error={error}
      />
    </Layout>
  );
};

export default rehabilitacion;
