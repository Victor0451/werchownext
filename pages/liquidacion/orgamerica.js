import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import ReactToPrint from "react-to-print";
import SelecLiqu from "../../components/liquidacion/orgamerica/SelecLiq";
import ListadoPagos from "../../components/liquidacion/orgamerica/ListadoPagos";
import ExportarPadron from "../../components/liquidacion/orgamerica/ExportarPadron";
import { ip } from "../../config/config";
import toastr from "toastr";
import { registrarHistoria } from "../../utils/funciones";

const orgamerica = () => {
  let componentRef = useRef();

  const [mes, guardarMes] = useState(null);
  const [ano, guardarAno] = useState(null);
  const [cargando, guardarCargando] = useState(false);
  const [sindato, guardarSindato] = useState(null);
  const [pagos, guardarPagos] = useState(null);
  const [user, guardarUser] = useState(null);
  const [liq, guardarLiq] = useState(null);

  let token = jsCookie.get("token");
  let usuario = jsCookie.get("usuario");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      if (usuario) {
        let user = JSON.parse(usuario);
        guardarUser(user);
      }
    }
  }, []);

  const handleChange = (value, flag) => {
    if (flag === "mes") {
      const mes = value.value;
      guardarMes(mes);
    } else if (flag === "ano") {
      const ano = value.value;
      guardarAno(ano);
    }
  };

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

      pagosP100();
      verificarLiquidacion();
    }
  };

  const pagosP100 = async () => {
    await axios
      .get(`${ip}api/sgi/orgamerica/liquidacion`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        guardarPagos(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const regHistorialLiq = async () => {
    const historial = {
      operador: user.usuario,
      fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
      mes: mes,
      ano: ano,
      cobranza: totales(pagos, "cobranza"),
      total: totales(pagos, "total"),
      comision: totales(pagos, "comision"),
      entidad: "Org. America",
    };

    await axios
      .post(`${ip}api/sgi/orgamerica/reghistorial`, historial)
      .then((res) => {
        if (res.status === 200) {
          toastr.info("Se registro la liquidacion en el historial", "ATENCION");

          let accion = `Se registro liquidacion ID: ${res.data.idliquidacion} de Org. America del periodo: ${historial.mes}/${historial.ano}.`

          registrarHistoria(accion, user.usuario)

        }
        setTimeout(() => {
          verificarLiquidacion();
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        toastr.error(
          "Ocurrio un error al registrar la liquidacion en el historial",
          "ATENCION"
        );
      });
  };

  const verificarLiquidacion = async () => {
    await axios
      .get(`${ip}api/sgi/orgamerica/verhistorial`, {
        params: {
          mes: mes,
          ano: ano,
          entidad: "Org. America",
        },
      })
      .then((res) => {
        guardarLiq(res.data);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al buscar el registro", "ATENCION");
      });
  };

  const totales = (arr, flag) => {
    let cobranza = 0;
    let total = 0;

    if (flag === "cobranza") {
      for (let i = 0; i < arr.length; i++) {
        cobranza += arr[i].IMPORTE;
      }

      return cobranza;
    } else if (flag === "total") {
      for (let i = 0; i < arr.length; i++) {
        total = i;
      }

      return total + 1;
    } else if (flag === "comision") {
      for (let i = 0; i < arr.length; i++) {
        cobranza += arr[i].IMPORTE;
      }

      let com = (cobranza * 15) / 100;

      return com;
    }
  };

  return (
    <Layout>
      <SelecLiqu handleChange={handleChange} buscarNumeros={buscarNumeros} />

      {sindato === null ? null : (
        <div className="container list mt-4 mb-4 border border-dark p-2">
          {sindato === true ? (
            <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
              <strong>No hay datos generados aun. Intente mas tarde</strong>
            </div>
          ) : (
            <>
              {liq ? (
                <div className="alert alert-info border border-dark text-center text-uppercase">
                  Esta liquidacion ya fue registrada y pagada
                </div>
              ) : (
                <div className="alert alert-warning border border-dark text-center text-uppercase">
                  Esta liquidacion no fue registrada
                </div>
              )}

              <div className="print-efect border border-dark p-4 " ref={componentRef}>
                <h3 className="">
                  <strong>
                    <u>
                      Pagos Realizados de fichas con Productor 100 (Org.
                      America) periodo {mes}/{ano}
                    </u>
                  </strong>
                </h3>

                <ListadoPagos listado={pagos} totales={totales} />


                <hr className="mt-4 mb-4 border border-dark" />


                <div className="border border-dark p-4">
                  <h3 className="text-center mb-4 font-weight-bold">
                    <u>Opciones</u>
                  </h3>
                  <div className="row d-flex justify-content-center">
                    <ReactToPrint
                      trigger={() => (
                        <a href="#" className="btn btn-primary mr-1">
                          imprimir{" "}
                        </a>
                      )}
                      content={() => componentRef.current}
                    />

                    <ExportarPadron listado={pagos} />

                    {liq ? null : (
                      <button
                        className="btn btn-info ml-1"
                        onClick={regHistorialLiq}
                      >
                        Registrar Liquidacion
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </>
          )}
        </div>

      )}
    </Layout>
  );
};

export default orgamerica;
