import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import BuscarPadron from "../../../components/socios/reportes/BuscarPadron";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import { zonaPer, zonaPal, zonaSP, zonaCC, zonas, anos } from "../../../array/array";
import { ip } from "../../../config/config";
import ModalResultados from "../../../components/socios/reportes/ModalResultados";

const estadopadron = () => {
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [userData, guardarUsuario] = useState(null);
  const [cartera, guardarCartera] = useState(null);
  const [zona, guardarZona] = useState(null);
  const [mes, guardarMes] = useState(null);
  const [ano, guardarAno] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [errorrango, guardarErrorRango] = useState(null);
  const [padron, guardarPadron] = useState(null);
  const [listZona, guardarListZona] = useState(null);
  const [tipocartera, guardarTipoCartera] = useState(null);
  const [sucursal, guardarSucursal] = useState(null);

  const idPadron = () => {

    if (cartera === 0) {
      guardarTipoCartera("Atrasado Cobrador");
    } else if (cartera === 1) {
      guardarTipoCartera("Atrasado Oficina");
    } else if (cartera === 2) {
      guardarTipoCartera("Atrasado Tarjeta");
    } else if (cartera === 3) {
      guardarTipoCartera("Atrasado Banco");
    } else if (cartera === 4) {
      guardarTipoCartera("Moroso 1001");
    } else if (cartera === 5) {
      guardarTipoCartera("Morosos Tarjetas");
    }

    if (zona === 1) {
      guardarSucursal("Casa Central");
    } else if (zona === 3) {
      guardarSucursal("Palpala");
    } else if (zona === 5) {
      guardarSucursal("Perico");
    } else if (zona === 30) {
      guardarSucursal("El Carmen");
    } else if (zona === 60) {
      guardarSucursal("San Pedro");
    }
  };

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
    } else if (flag === "ano") {
      const ano = value.value;
      guardarAno(ano);
    }
  };

  const buscarCartera = async (e) => {
    e.preventDefault();

    guardarErrores(null)



    if (cartera === null || mes === null || zona === null || ano === null) {
      let errores = "Los Campos Mes, Cartera, zona y año No Pueden Estar Vacios";
      guardarErrores(errores);
    } else {
      const parametros = {
        mes: mes,
        ano: ano,
        zona: zona,
        grupo: "",
        flag: "",
        sucursal: "",
      };

      //   AT COBRADORES
      if (cartera === 0 && zona === 1) {
        parametros.grupo = 1000;
        parametros.flag = "W";
      } else if (cartera === 0 && zona === 3) {
        parametros.grupo = 1000;
        parametros.flag = "L";
      } else if (cartera === 0 && zona === 5) {
        parametros.grupo = 1000;
        parametros.flag = "R";
      } else if (cartera === 0 && zona === 30) {
        parametros.grupo = 1000;
        parametros.flag = "C";
      } else if (cartera === 0 && zona === 60) {
        parametros.grupo = 1000;
        parametros.flag = "P";
      }
      //   AT
      else if (cartera === 1) {
        parametros.grupo = 1000;
        parametros.flag = 1;
        // AT TJT
      } else if (cartera === 2) {
        (parametros.grupo = [3400, 3600, 3700, 3800, 3900, 4000]),
          (parametros.flag = 2);
        if (zona === 1) {
          parametros.sucursal = "W";
        } else if (zona === 3) {
          parametros.sucursal = "L";
        } else if (zona === 5) {
          parametros.sucursal = "R";
        } else if (zona === 30) {
          parametros.sucursal = "C";
        } else if (zona === 60) {
          parametros.sucursal = "P";
        }
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

      await axios
        .get(`${ip}api/sgi/socios/estadocarteraw`, {
          params: {
            mes: parametros.mes,
            ano: parametros.ano,
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

          idPadron()
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const buscarCarteram = async (e) => {
    e.preventDefault();

    guardarErrores(null)


    if (cartera === null || mes === null || zona === null) {
      let errores = "Los Campos Mes, Cartera y Zona No Pueden Estar Vacios";
      guardarErrores(errores);
    } else {
      const parametros = {
        mes: mes,
        ano: ano,
        zona: zona,
        grupo: "",
        flag: "",
        sucursal: "",
      };

      //   AT COBRADORES
      if (cartera === 0 && zona === 1) {
        parametros.grupo = 1000;
        parametros.flag = "W";
      } else if (cartera === 0 && zona === 3) {
        parametros.grupo = 1000;
        parametros.flag = "L";
      } else if (cartera === 0 && zona === 5) {
        parametros.grupo = 1000;
        parametros.flag = "R";
      } else if (cartera === 0 && zona === 60) {
        parametros.grupo = 1000;
        parametros.flag = "P";
      }

      //   AT
      else if (cartera === 1) {
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
        .get(`${ip}api/sgi/socios/estadocarteram`, {
          params: {
            mes: parametros.mes,
            ano: parametros.ano,
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
          idPadron()
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const buscarCarteraSinTel = async () => {
    guardarErrores(null)

    if (cartera === null || zona === null) {
      let errores = "Los Campos Cartera y Zona No Pueden Estar Vacios";
      guardarErrores(errores);
    } else {
      const parametros = {
        zona: zona,
        grupo: "",
        sucursal: "",
        cartera: "",
      };


      //   1000
      if (cartera === 0 && zona === 1) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      } else if (cartera === 0 && zona === 3) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      } else if (cartera === 0 && zona === 5) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      } else if (cartera === 0 && zona === 60) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      }


      //   TJT
      if (cartera === 1 && zona === 1) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "W";
      } else if (cartera === 1 && zona === 3) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "L";
      } else if (cartera === 1 && zona === 5) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "R";
      } else if (cartera === 1 && zona === 60) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "P";
      }

      //   BANCO
      if (cartera === 2 && zona === 1) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "W";
      } else if (cartera === 2 && zona === 3) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "L";
      } else if (cartera === 2 && zona === 5) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "R";
      } else if (cartera === 2 && zona === 60) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "P";
      }

      // POLICIA
      if (cartera === 3 && zona === 1) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      } else if (cartera === 3 && zona === 3) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      } else if (cartera === 3 && zona === 5) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      } else if (cartera === 3 && zona === 60) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      }


      await axios
        .get(`${ip}api/sgi/socios/carterasintelefono`, {
          params: {
            grupo: parametros.grupo,
            zona: parametros.zona,
            cartera: parametros.cartera,
            sucursal: parametros.sucursal

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

  const buscarCarteraSinTelM = async () => {
    guardarErrores(null)

    if (cartera === null || zona === null) {
      let errores = "Los Campos Cartera y Zona No Pueden Estar Vacios";
      guardarErrores(errores);
    } else {
      const parametros = {
        zona: zona,
        grupo: "",
        sucursal: "",
        cartera: "",
      };


      //   1000
      if (cartera === 0 && zona === 1) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      } else if (cartera === 0 && zona === 3) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      } else if (cartera === 0 && zona === 5) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      } else if (cartera === 0 && zona === 60) {
        parametros.grupo = 1000;
        parametros.cartera = cartera;
      }


      //   TJT
      if (cartera === 1 && zona === 1) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "W";
      } else if (cartera === 1 && zona === 3) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "L";
      } else if (cartera === 1 && zona === 5) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "R";
      } else if (cartera === 1 && zona === 60) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "P";
      }

      //   BANCO
      if (cartera === 2 && zona === 1) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "W";
      } else if (cartera === 2 && zona === 3) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "L";
      } else if (cartera === 2 && zona === 5) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "R";
      } else if (cartera === 2 && zona === 60) {
        parametros.grupo = 0;
        parametros.cartera = cartera;
        parametros.sucursal = "P";
      }

      // POLICIA
      if (cartera === 3 && zona === 1) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      } else if (cartera === 3 && zona === 3) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      } else if (cartera === 3 && zona === 5) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      } else if (cartera === 3 && zona === 60) {
        parametros.grupo = 6;
        parametros.cartera = cartera;
      }


      await axios
        .get(`${ip}api/sgi/socios/carterasintelefonom`, {
          params: {
            grupo: parametros.grupo,
            zona: parametros.zona,
            cartera: parametros.cartera,
            sucursal: parametros.sucursal

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
    } else {
      let usuario = jsCookie.get("usuario");

      if (usuario) {
        let userData = JSON.parse(usuario);

        if (userData.usuario === "vgorosito") {
          guardarListZona(zonaPer);
        } else if (userData.usuario === "mcarrizo") {
          guardarListZona(zonaPal);
        } else if (userData.usuario === "sjuarez") {
          guardarListZona(zonaSP);
        } else if (
          userData.usuario === "mgalian" ||
          userData.usuario === "ggimenez"
        ) {
          guardarListZona(zonaCC);
        } else {
          guardarListZona(zonas);
        }
      }
    }
  }, []);

  return (
    <Layout>
      <BuscarPadron
        userData={userData}
        handleChange={handleChange}
        desdeRef={desdeRef}
        hastaRef={hastaRef}
        buscarCartera={buscarCartera}
        buscarCarteram={buscarCarteram}
        errores={errores}
        errorrango={errorrango}
        listZona={listZona}
        anos={anos}
        buscarCarteraSinTel={buscarCarteraSinTel}
        buscarCarteraSinTelM={buscarCarteraSinTelM}
      />

      <ModalResultados
        padron={padron}
        cartera={cartera}
        zona={zona}
        tipocartera={tipocartera}
        sucursal={sucursal}
      />

    </Layout>
  );
};

export default estadopadron;
