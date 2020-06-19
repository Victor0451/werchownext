import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import BuscarPadron from "../../../components/socios/reportes/BuscarPadron";
import ListadoPadron from "../../../components/socios/reportes/ListadoPadron";
import axios from "axios";
import ExportarPadron from "../../../components/socios/reportes/ExportarPadron";
import jsCookie from "js-cookie";
import Router from "next/router";

const estadopadron = () => {
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [cartera, guardarCartera] = useState(null);
  const [zona, guardarZona] = useState(null);
  const [mes, guardarMes] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [errorrango, guardarErrorRango] = useState(null);
  const [padron, guardarPadron] = useState(null);

  const handleChange = (value, flag) => {
    document.getElementById("cuotas").hidden = true;

    if (flag === "cartera") {
      const cartera = value.value;
      guardarCartera(cartera);
      if (cartera === 3 || cartera === 4 || cartera === 5) {
        document.getElementById("cuotas").hidden = false;
      }
    } else if (flag === "zona") {
      const zona = value.value;
      guardarZona(zona);
    } else if (flag === "mes") {
      const mes = value.value;
      guardarMes(mes);
    }
  };

  const buscarCartera = async (e) => {
    e.preventDefault();

    if (cartera === null || mes === null || zona === null) {
      let errores = "Los Campos Mes, Cartera y Zona No Pueden Estar Vacios";
      guardarErrores(errores);
    } else {
      const parametros = {
        mes: mes,
        zona: zona,
        grupo: "",
        flag: "",
        sucursal: "",
      };

      //   AT
      if (cartera === 1) {
        parametros.grupo = 1000;
        parametros.flag = 1;
        // AT TJT
      } else if (cartera === 2) {
        (parametros.grupo = [3400, 3600, 3700, 3800, 3900, 4000]),
          (parametros.flag = 2);
      }
      //   BACHES BANCO
      else if (cartera === 3) {
        let desde = parseInt(desdeRef.current.value);
        let hasta = parseInt(hastaRef.current.value);

        if (isNaN(desde) || isNaN(hasta)) {
          guardarErrorRango("Debes Elegir Un Rango De Cuotas");
        } else if (desde > hasta) {
          guardarErrorRango("El Campo Hasta Debe Ser Mayor Al Desde");
        } else {
          (parametros.flag = 4),
            (parametros.desde = desde),
            (parametros.hasta = hasta);

          if (zona === 1) {
            parametros.sucursal = "W";
          } else if (zona === 3) {
            parametros.sucursal = "L";
          } else if (zona === 5) {
            parametros.sucursal = "R";
          } else if (zona === 60) {
            parametros.sucursal = "P";
          }
        }
      }
      //   1001
      else if (cartera === 4) {
        let desde = parseInt(desdeRef.current.value);
        let hasta = parseInt(hastaRef.current.value);

        if (isNaN(desde) || isNaN(hasta)) {
          guardarErrorRango("Debes Elegir Un Rango De Cuotas");
        } else if (desde > hasta) {
          guardarErrorRango("El Campo Hasta Debe Ser Mayor Al Desde");
        } else {
          (parametros.grupo = 1001),
            (parametros.flag = 3),
            (parametros.desde = desde),
            (parametros.hasta = hasta);
        }
      } // 1001 TJT
      else if (cartera === 5) {
        let desde = parseInt(desdeRef.current.value);
        let hasta = parseInt(hastaRef.current.value);

        if (isNaN(desde) || isNaN(hasta)) {
          guardarErrorRango("Debes Elegir Un Rango De Cuotas");
        } else if (desde > hasta) {
          guardarErrorRango("El Campo Hasta Debe Ser Mayor Al Desde");
        } else {
          (parametros.grupo = [3444, 3666, 3777, 3888, 3999, 4004]),
            (parametros.flag = 3);
        }
      }

      console.log(parametros);

      await axios
        .get(`http://190.231.32.232:5002/api/sgi/socios/estadocarteraw`, {
          params: {
            mes: parametros.mes,
            grupo: parametros.grupo,
            zona: parametros.zona,
            flag: parametros.flag,
            desde: parametros.desde,
            hasta: parametros.hasta,
            sucursal: parametros.sucursal,
          },
        })
        .then((res) => {
          let padron = res.data[0];
          guardarPadron(padron);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const buscarCarteram = async (e) => {
    e.preventDefault();

    if (cartera === null || mes === null || zona === null) {
      let errores = "Los Campos Mes, Cartera y Zona No Pueden Estar Vacios";
      guardarErrores(errores);
    } else {
      const parametros = {
        mes: mes,
        zona: zona,
        grupo: "",
        flag: "",
        sucursal: "",
      };

      //   AT
      if (cartera === 1) {
        parametros.grupo = 1000;
        parametros.flag = 1;
        // AT TJT
      } else if (cartera === 2) {
        (parametros.grupo = [3400, 3600, 3700, 3800, 3900, 4000]),
          (parametros.flag = 2);
      }
      //   BACHES BANCO
      else if (cartera === 3) {
        let desde = parseInt(desdeRef.current.value);
        let hasta = parseInt(hastaRef.current.value);

        if (isNaN(desde) || isNaN(hasta)) {
          guardarErrorRango("Debes Elegir Un Rango De Cuotas");
        } else if (desde > hasta) {
          guardarErrorRango("El Campo Hasta Debe Ser Mayor Al Desde");
        } else {
          (parametros.flag = 4),
            (parametros.desde = desde),
            (parametros.hasta = hasta);

          if (zona === 1) {
            parametros.sucursal = "W";
          } else if (zona === 3) {
            parametros.sucursal = "L";
          } else if (zona === 5) {
            parametros.sucursal = "R";
          } else if (zona === 60) {
            parametros.sucursal = "P";
          }
        }
      }
      //   1001
      else if (cartera === 4) {
        let desde = parseInt(desdeRef.current.value);
        let hasta = parseInt(hastaRef.current.value);

        if (isNaN(desde) || isNaN(hasta)) {
          guardarErrorRango("Debes Elegir Un Rango De Cuotas");
        } else if (desde > hasta) {
          guardarErrorRango("El Campo Hasta Debe Ser Mayor Al Desde");
        } else {
          (parametros.grupo = 1001),
            (parametros.flag = 3),
            (parametros.desde = desde),
            (parametros.hasta = hasta);
        }
      } // 1001 TJT
      else if (cartera === 5) {
        let desde = parseInt(desdeRef.current.value);
        let hasta = parseInt(hastaRef.current.value);

        if (isNaN(desde) || isNaN(hasta)) {
          guardarErrorRango("Debes Elegir Un Rango De Cuotas");
        } else if (desde > hasta) {
          guardarErrorRango("El Campo Hasta Debe Ser Mayor Al Desde");
        } else {
          (parametros.grupo = [3444, 3666, 3777, 3888, 3999, 4004]),
            (parametros.flag = 3);
        }
      }

      console.log(parametros);

      await axios
        .get(`http://190.231.32.232:5002/api/sgi/socios/estadocarteram`, {
          params: {
            mes: parametros.mes,
            grupo: parametros.grupo,
            zona: parametros.zona,
            flag: parametros.flag,
            desde: parametros.desde,
            hasta: parametros.hasta,
            sucursal: parametros.sucursal,
          },
        })
        .then((res) => {
          let padron = res.data[0];
          guardarPadron(padron);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  return (
    <Layout>
      <BuscarPadron
        handleChange={handleChange}
        desdeRef={desdeRef}
        hastaRef={hastaRef}
        buscarCartera={buscarCartera}
        buscarCarteram={buscarCarteram}
        errores={errores}
        errorrango={errorrango}
      />

      {padron !== null ? (
        <>
          <ListadoPadron padron={padron} cartera={cartera} zona={zona} />

          <div className="container alert alert-primary mt-4">
            <div className="mt-4 p-4 border">
              <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
              <div className="row d-flex justify-content-center">
                <ExportarPadron padron={padron} />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Layout>
  );
};

export default estadopadron;
