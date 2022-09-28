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
import { ip } from '../../config/config'



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

    axios.get(`${ip}api/sgi/moraw/morasoof`, {
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

    axios.get(`${ip}api/sgi/moraw/morasoofcob`,
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

    axios.get(`${ip}api/sgi/moraw/morasotjt`,
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

  const calcularTotalGeneral = (arr1, arr2, arr3, arr4, arr5, arr6, flag) => {

    let total1 = 0
    let total2 = 0
    let total3 = 0
    let total4 = 0
    let total5 = 0

    let totalpret = parseInt(arr6.total)
    let cobradoprest = parseInt(arr6.cobrado)

    let ret = 0

    if (flag === 'fichas') {

      for (let i = 0; i < arr1.length; i++) {
        total1 += parseInt(arr1[i].fichas)
      }
      for (let i = 0; i < arr2.length; i++) {
        total2 += parseInt(arr2[i].fichas)
      }
      for (let i = 0; i < arr3.length; i++) {
        total3 += parseInt(arr3[i].fichas)
      }
      for (let i = 0; i < arr4.length; i++) {
        total4 += parseInt(arr4[i].fichas)
      }

      for (let i = 0; i < arr5.length; i++) {
        total5 += parseInt(arr5[i].fichas)
      }


      ret = total1 + total2 + total3 + total4 + total5

      return ret

    } else if (flag === 'total') {

      for (let i = 0; i < arr1.length; i++) {
        total1 += parseInt(arr1[i].total)
      }
      for (let i = 0; i < arr2.length; i++) {
        total2 += parseInt(arr2[i].total)
      }
      for (let i = 0; i < arr3.length; i++) {
        total3 += parseInt(arr3[i].total)
      }
      for (let i = 0; i < arr4.length; i++) {
        total4 += parseInt(arr4[i].total)
      }

      for (let i = 0; i < arr5.length; i++) {
        total5 += parseInt(arr5[i].total)
      }


      ret = total1 + total2 + total3 + total4 + total5 + totalpret

      return ret


    } else if (flag === 'fichascob') {

      for (let i = 0; i < arr1.length; i++) {
        total1 += parseInt(arr1[i].fichascob)
      }
      for (let i = 0; i < arr2.length; i++) {
        total2 += parseInt(arr2[i].fichascob)
      }
      for (let i = 0; i < arr3.length; i++) {
        total3 += parseInt(arr3[i].fichascob)
      }
      for (let i = 0; i < arr4.length; i++) {
        total4 += parseInt(arr4[i].fichascob)
      }

      for (let i = 0; i < arr5.length; i++) {
        total5 += parseInt(arr5[i].fichascob)
      }


      ret = total1 + total2 + total3 + total4 + total5

      return ret

    } else if (flag === 'cobrado') {

      for (let i = 0; i < arr1.length; i++) {
        total1 += parseInt(arr1[i].cobrado)
      }
      for (let i = 0; i < arr2.length; i++) {
        total2 += parseInt(arr2[i].cobrado)
      }
      for (let i = 0; i < arr3.length; i++) {
        total3 += parseInt(arr3[i].cobrado)
      }
      for (let i = 0; i < arr4.length; i++) {
        total4 += parseInt(arr4[i].cobrado)
      }

      for (let i = 0; i < arr5.length; i++) {
        total5 += parseInt(arr5[i].cobrado)
      }



      ret = total1 + total2 + total3 + total4 + total5 + cobradoprest

      return ret

    } else if (flag === 'adelantado') {

      for (let i = 0; i < arr1.length; i++) {
        total1 += parseInt(arr1[i].adelantado)
      }
      for (let i = 0; i < arr2.length; i++) {
        total2 += parseInt(arr2[i].adelantado)
      }
      for (let i = 0; i < arr3.length; i++) {
        total3 += parseInt(arr3[i].adelantado)
      }
      for (let i = 0; i < arr4.length; i++) {
        total4 += parseInt(arr4[i].adelantado)
      }

      for (let i = 0; i < arr5.length; i++) {
        total5 += parseInt(arr5[i].adelantado)
      }


      ret = total1 + total2 + total3 + total4 + total5

      return ret

    }


  }

  const calcularTotal = (arr, flag) => {
    let ret = 0
    let ini = 0
    let fin = 0

    if (flag === 'fichasinicial') {

      for (let i = 0; i < arr.length; i++) {
        ret += parseInt(arr[i].fichasinicial)
      }
      return ret

    } else if (flag === 'morainicial') {
      for (let i = 0; i < arr.length; i++) {
        ret += parseInt(arr[i].morainicial)
      }
      return ret

    } else if (flag === 'fichasactual') {


      for (let i = 0; i < arr.length; i++) {

        if (!arr[i].fichasactual) {
          ret += parseInt(arr[i].fichasinicial)
          return ret
        } else if (arr[i].fichasactual === arr[i].fichasinicial) {
          ret = 0
          return ret
        } else if (arr[i].fichasactual < arr[i].fichasinicial) {
          ini += parseInt(arr[i].fichasinicial)
          fin += parseInt(arr[i].fichasactual)

          ret = ini - fin
          return ret
        }

      }

    } else if (flag === 'moraactual') {

      for (let i = 0; i < arr.length; i++) {

        if (!arr[i].moraactual) {
          ret += parseInt(arr[i].morainicial)
          return ret
        } else if (arr[i].moraactual === arr[i].morainicial) {
          ret = 0
          return ret
        } else if (arr[i].moraactual < arr[i].morainicial) {
          ini += parseInt(arr[i].morainicial)
          fin += parseInt(arr[i].moraactual)

          ret = ini - fin
          return ret
        }

      }

    }
  }

  return (
    <Layout>

      <Resumen buscarNumeros={buscarNumeros} handleChange={handleChange} titulo={'Mora'} flag={'E'} />

      <div className="list container border border-dark mt-4 mb-4 alert alert-info text-center text-uppercase"><u>¡atencion!</u>: La mora a analizar, es la plata no cobrada del mes anterior con respecto al mes en curso</div>

      {sindato === null ? null : (
        <div className="list container mt-4 mb-4 border border-dark p-2">
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

                <InformeMora mora={mora} moracob={moracob} moratjt={moratjt} calcularTotal={calcularTotal} />

                <div className="container">
                  <hr className="mt-4 mb-4" />


                </div>
              </div>
              <div className="list border border-dark p-4">
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
