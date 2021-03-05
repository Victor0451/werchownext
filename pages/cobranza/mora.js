import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import Resumen from "../../components/cobranza/Resumen";
import axios from "axios";
import ResumenWerchow from "../../components/cobranza/ResumenWerchow";
import ResumenMutual from "../../components/cobranza/ResumenMutual";
import ReactToPrint from "react-to-print";
import moment from "moment-timezone";
import toastr from "toastr";
import Router from "next/router";
import InformeMora from "../../components/cobranza/InformeMora";



const mora = () => {

  let componentRef = useRef();

  const [sindato, guardarSindato] = useState(null);
  const [cargando, guardarCargando] = useState(false);
  const [mes, guardarMes] = useState(null);
  const [ano, guardarAno] = useState(null);
  const [mora, guardarMora] = useState(null)
  const [moracob, guardarMoraCob] = useState(null)
  const [moratjt, guardarMoraTjt] = useState(null)

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const buscarNumeros = async () => {
    let month = moment().format("M");
    let year = moment().format("YYYY");

    if (mes === null || ano === null) {
      toastr.warning("Debes seleccionas un mes y un año si o no", "ATENCION");
    } else if (mes > parseInt(month) && ano >= year) {
      let sindato = true;
      console.log(sindato);
      guardarSindato(sindato);
    } else if (
      mes >= parseInt(month) ||
      (mes <= parseInt(month) && ano <= year)
    ) {
      let cargando = true;
      guardarCargando(cargando);
      let sindato = false;
      guardarSindato(sindato);

      traerMoraSoOf()
      traerMoraSoOfCob()
      traerMoraSoTjt()

    }

  };

  const traerMoraSoOf = async () => {

    axios.get(`http://190.231.32.232:5002/api/sgi/moraw/morasoof`, {
      params: {
        mes: mes,
        ano: ano,
      },
    })
      .then(res => {
        guardarMora(res.data)

      })
      .catch(error => {
        console.log(error)
      })

  }

  const traerMoraSoOfCob = async () => {

    axios.get(`http://190.231.32.232:5002/api/sgi/moraw/morasoofcob`,
      {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then(res => {
        guardarMoraCob(res.data)

      })
      .catch(error => {
        console.log(error)
      })

  }

  const traerMoraSoTjt = async () => {

    axios.get(`http://190.231.32.232:5002/api/sgi/moraw/morasotjt`,
      {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then(res => {
        guardarMoraTjt(res.data)

      })
      .catch(error => {
        console.log(error)
      })

  }

  const handleChange = (value, flag) => {
    if (flag === "mes") {
      const mes = value.value;
      guardarMes(mes);
    } else if (flag === "ano") {
      const ano = value.value;
      guardarAno(ano);
    }
  };

  return (
    <Layout>

      <Resumen buscarNumeros={buscarNumeros} handleChange={handleChange} titulo={'Mora'} />

      <div className=" container border border-dark mt-4 mb-4 alert alert-info text-center text-uppercase"><u>¡atencion!</u>: La mora a analizar, es la plata no cobrada del mes anterior con respecto al mes en curso</div>

      {sindato === null ? null : (
        <div className="container mt-4 mb-4 border border-dark p-2">
          {sindato === true ? (
            <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
              <strong>No hay datos generados aun. Intente mas tarde</strong>
            </div>
          ) : (
              <>
                <div className="print-efect p-4" ref={componentRef}>
                  <h2>
                    <strong>
                      <u>
                        Efectividad De Mora Werchow Periodo:{" "}
                        {mes - 1}/{ano}
                      </u>
                    </strong>
                  </h2>

                  <InformeMora mora={mora} moracob={moracob} moratjt={moratjt} />

                  <div className="container">
                    <hr className="mt-4 mb-4" />


                  </div>
                </div>
                <div className="alert alert-primary border border-dark p-4">
                  <h3 className="text-center mb-4 font-weight-bold">
                    <u>Opciones</u>
                  </h3>
                  <div className="row d-flex justify-content-center">
                    <ReactToPrint
                      trigger={() => (
                        <a href="#" className="btn btn-primary">
                          imprimir{" "}
                        </a>
                      )}
                      content={() => componentRef.current}
                    />
                  </div>
                </div>
              </>
            )}
        </div>
      )}

    </Layout>
  )
}

export default mora
