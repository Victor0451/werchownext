import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import InformePrestamos from "../../components/prestamos/InformePrestamos";
import TablaPrestamos from "../../components/prestamos/TablaPrestamos";
import TablaInformes from "../../components/prestamos/TablaInformes";
import jsCookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import ReactToPrint from "react-to-print";
import toastr from "toastr";
import moment from "moment-timezone";

const informeprestamos = () => {
  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  let componentRef = useRef();
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [error, guardarError] = useState(null);
  const [prestamos, guardarPrestamos] = useState(null);
  const [prestamosop, guardarPrestamosOp] = useState(null);
  const [prestamosest, guardarPrestamosEst] = useState(null);

  const [mgalian, guardarMgalian] = useState(null);
  const [ggimenez, guardarGgimenez] = useState(null);
  const [mcarrizo, guardarMcarrizo] = useState(null);
  const [vgorosito, guardarVgorosito] = useState(null);
  const [sjuarez, guardarSjuarez] = useState(null);
  const [atejerina, guardarAtejerina] = useState(null);

  const [totalprestamos, guardarTotalprestamos] = useState(null);
  const [totalcapital, guardarTotalcapital] = useState(null);
  const [totalinteres, guardarTotalinteres] = useState(null);
  const [totalcapconint, guardarTotalcapconint] = useState(null);

  const [aprobado, guardarAprobado] = useState(null);
  const [rechazado, guardarRechazado] = useState(null);
  const [cancelado, guardarCancelado] = useState(null);
  const [pendiente, guardarPendiente] = useState(null);

  const [totalprestamosest, guardarTotalprestamoest] = useState(null);
  const [totalcapitalest, guardarTotalcapitalest] = useState(null);
  const [totalinteresest, guardarTotalinteresest] = useState(null);
  const [totalcapconintest, guardarTotalcapconintest] = useState(null);

  const [capitalprest, guardarCapitalprest] = useState(null);
  const [intereses, guardarIntereses] = useState(null);
  const [cuotas, guardarCuotas] = useState(null);
  const [capconint, guardarCapconint] = useState(null);
  const [cantprest, guardarCantprest] = useState(null);

  const divisionArraryOperador = (prestporop) => {
    let totalprestamos = 0;
    let totalcapital = 0;
    let totalinteres = 0;
    let totalcapconint = 0;

    for (let i = 0; i < prestporop.length; i++) {
      totalprestamos += prestporop[i].prestamos;
      totalcapital += parseInt(prestporop[i].capital);
      totalinteres += prestporop[i].interes;
      totalcapconint += prestporop[i].capconint;

      guardarTotalprestamos(totalprestamos);
      guardarTotalcapital(totalcapital);
      guardarTotalinteres(totalinteres);
      guardarTotalcapconint(totalcapconint);

      if (prestporop[i].operador === 3) {
        const atejerina = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint,
        };
        guardarAtejerina(atejerina);
      }
      if (prestporop[i].operador === 4) {
        const mgalian = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint,
        };

        guardarMgalian(mgalian);
      }
      if (prestporop[i].operador === 7) {
        const mcarrizo = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint,
        };

        guardarMcarrizo(mcarrizo);
      }
      if (prestporop[i].operador === 8) {
        const vgorosito = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint,
        };

        guardarVgorosito(vgorosito);
      }
      if (prestporop[i].operador === 77) {
        const sjuarez = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint,
        };
        guardarSjuarez(sjuarez);
      }
      if (prestporop[i].operador === 97) {
        const ggimenez = {
          prestamos: prestporop[i].prestamos,
          capital: prestporop[i].capital,
          interes: prestporop[i].interes,
          capconint: prestporop[i].capconint,
        };
        guardarGgimenez(ggimenez);
      }
    }
  };

  //   DIVISION ARRAY POR ESTADO
  const divisionArraryEstado = (prestporestado) => {
    let totalprestamosest = 0;
    let totalcapitalest = 0;
    let totalinteresest = 0;
    let totalcapconintest = 0;

    for (let i = 0; i < prestporestado.length; i++) {
      totalprestamosest += prestporestado[i].prestamos;
      totalcapitalest += parseInt(prestporestado[i].capital);
      totalinteresest += prestporestado[i].interes;
      totalcapconintest += prestporestado[i].capconint;

      guardarTotalprestamoest(totalprestamosest);
      guardarTotalcapitalest(totalcapconintest);
      guardarTotalinteresest(totalinteresest);
      guardarTotalcapconintest(totalinteresest);

      if (prestporestado[i].estado === "APROBADO") {
        const aprobado = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint,
        };
        guardarAprobado(aprobado);
      }
      if (prestporestado[i].estado === "RECHAZADO") {
        const rechazado = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint,
        };
        guardarRechazado(rechazado);
      }
      if (prestporestado[i].estado === "CANCELADO") {
        const cancelado = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint,
        };
        guardarCancelado(cancelado);
      }
      if (prestporestado[i].estado === "PENDIENTE") {
        const pendiente = {
          prestamos: prestporestado[i].prestamos,
          capital: prestporestado[i].capital,
          interes: prestporestado[i].interes,
          capconint: prestporestado[i].capconint,
        };
        guardarPendiente(pendiente);
      }
    }
  };

  //   AMRADO DEL RESUMEN DEL LISTADO DE PRESTAMOS BUSCADO
  const resumenArray = (listado) => {
    let capitalprest = 0;

    let intereses = 0;

    let cuotas = 0;

    let cantprest = listado.length;

    let capconint = 0;

    for (let i = 0; i < listado.length; i++) {
      capitalprest += parseInt(listado[i].ptm_prestamo);
      cuotas += listado[i].ptm_cuotas;
      capconint += listado[i].ptm_valcuota * listado[i].ptm_cuotas;
    }

    intereses = capconint - capitalprest;

    guardarCantprest(cantprest);
    guardarIntereses(intereses);
    guardarCuotas(cuotas);
    guardarCapconint(capconint);
    guardarCapitalprest(capitalprest);
  };

  const buscarPrestamos = async (e) => {
    e.preventDefault();

    guardarMcarrizo(null);
    guardarMgalian(null);
    guardarVgorosito(null);
    guardarAtejerina(null);
    guardarSjuarez(null);
    guardarGgimenez(null);

    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;

    if (desde === "" || hasta === "") {
      let error = `Los campos "DESDE" y "HASTA" no pueden estar vacios`;

      guardarError(error);
    } else if (desde > hasta) {
      let error = `La fecha "DESDE" no puede ser mayor que la fecha "HASTA"`;

      guardarError(error);
    } else {
      await axios
        .get(`http://190.231.32.232:5002/api/sgi/prestamos/listadoprestamos2`, {
          params: {
            desde: desde,
            hasta: hasta,
          },
        })
        .then((res) => {
          const prestamos = res.data;
          guardarPrestamos(prestamos);
          resumenArray(prestamos);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get(`http://190.231.32.232:5002/api/sgi/prestamos/prestamosporop`, {
          params: {
            desde: desde,
            hasta: hasta,
          },
        })
        .then((res) => {
          const prestamosop = res.data;
          guardarPrestamosOp(prestamosop);
          divisionArraryOperador(prestamosop);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get(
          `http://190.231.32.232:5002/api/sgi/prestamos/prestamosporestado`,
          {
            params: {
              desde: desde,
              hasta: hasta,
            },
          }
        )
        .then((res) => {
          const prestamosest = res.data;
          guardarPrestamosEst(prestamosest);
          divisionArraryEstado(prestamosest);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Layout>
      <>
        <InformePrestamos
          desdeRef={desdeRef}
          hastaRef={hastaRef}
          buscarPrestamos={buscarPrestamos}
          error={error}
        />

        {prestamos ? (
          <div>
            <div ref={componentRef}>
              <TablaPrestamos
                data={prestamos}
                capitalprest={capitalprest}
                cuotas={cuotas}
                intereses={intereses}
                cantprest={cantprest}
                capconint={capconint}
              />

              <TablaInformes
                atejerina={atejerina}
                mgalian={mgalian}
                ggimenez={ggimenez}
                vgorosito={vgorosito}
                mcarrizo={mcarrizo}
                sjuarez={sjuarez}
                totalprestamos={totalprestamos}
                totalcapital={totalcapital}
                totalinteres={totalinteres}
                totalcapconint={totalcapconint}
                totalprestamosest={totalprestamosest}
                totalcapitalest={totalcapitalest}
                totalinteresest={totalinteresest}
                totalcapconintest={totalcapconintest}
                aprobado={aprobado}
                pendiente={pendiente}
                cancelado={cancelado}
                rechazado={rechazado}
              />
            </div>

            <div className="container">
              <hr className="mt-4 mb-4" />

              <div className=" alert alert-primary border border-dark p-4">
                <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
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
            </div>
          </div>
        ) : null}
      </>
    </Layout>
  );
};

export default informeprestamos;
