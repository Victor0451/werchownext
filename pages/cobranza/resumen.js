import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import RedirectToLogin from "../../components/auth/RedirectToLogin";
import jsCookie from "js-cookie";
import Resumen from "../../components/cobranza/Resumen";
import axios from "axios";
import ResumenWerchow from "../../components/cobranza/ResumenWerchow";
import ResumenMutual from "../../components/cobranza/ResumenMutual";

const resumen = () => {
  const [mes, guardarMes] = useState(null);
  const [ano, guardarAno] = useState(null);

  const [resofi, guardarResofi] = useState(null);
  const [resofim, guardarResofim] = useState(null);
  const [resban, guardarResban] = useState(null);
  const [respol, guardarRespol] = useState(null);
  const [restar, guardarRestar] = useState(null);
  const [restarm, guardarRestarm] = useState(null);

  const [pericoOF, guardarPericoOF] = useState(null);
  const [palpalaOF, guardarPalpalaOF] = useState(null);
  const [sanPedroOF, guardarSanPedroOF] = useState(null);
  const [CasaCentralOF, guardarCCOF] = useState(null);

  const [pericoOFM, guardarPericoOFM] = useState(null);
  const [palpalaOFM, guardarPalpalaOFM] = useState(null);
  const [sanPedroOFM, guardarSanPedroOFM] = useState(null);
  const [CasaCentralOFM, guardarCCOFM] = useState(null);

  const [pericoBAN, guardarPericoBAN] = useState(null);
  const [palpalaBAN, guardarPalpalaBAN] = useState(null);
  const [sanPedroBAN, guardarSanPedroBAN] = useState(null);
  const [CasaCentralBAN, guardarCCBAN] = useState(null);

  const [pericoPOL, guardarPericoPOL] = useState(null);
  const [palpalaPOL, guardarPalpalaPOL] = useState(null);
  const [sanPedroPOL, guardarSanPedroPOL] = useState(null);
  const [CasaCentralPOL, guardarCCPOL] = useState(null);

  const [pericoTAR, guardarPericoTAR] = useState(null);
  const [palpalaTAR, guardarPalpalaTAR] = useState(null);
  const [sanPedroTAR, guardarSanPedroTAR] = useState(null);
  const [CasaCentralTAR, guardarCCTAR] = useState(null);

  const [pericoTARM, guardarPericoTARM] = useState(null);
  const [palpalaTARM, guardarPalpalaTARM] = useState(null);
  const [sanPedroTARM, guardarSanPedroTARM] = useState(null);
  const [CasaCentralTARM, guardarCCTARM] = useState(null);

  const [pericoCOB, guardarPericoCOB] = useState(null);
  const [palpalaCOB, guardarPalpalaCOB] = useState(null);
  const [sanPedroCOB, guardarSanPedroCOB] = useState(null);
  const [CasaCentralCOB, guardarCCCOB] = useState(null);

  const [pericoCOBM, guardarPericoCOBM] = useState(null);
  const [palpalaCOBM, guardarPalpalaCOBM] = useState(null);
  const [sanPedroCOBM, guardarSanPedroCOBM] = useState(null);
  const [CasaCentralCOBM, guardarCCCOBM] = useState(null);

  const handleChange = (value, flag) => {
    if (flag === "mes") {
      const mes = value.value;
      guardarMes(mes);
    } else if (flag === "ano") {
      const ano = value.value;
      guardarAno(ano);
    }
  };

  const segmentarArrayOF = (array) => {
    if (array[0].zona) {
      if (array[0].zona) {
        let CasaCentralOF = array[0];
        guardarCCOF(CasaCentralOF);
      }
      if (array[1].zona) {
        let palpalaOF = array[1];
        guardarPalpalaOF(palpalaOF);
      }
      if (array[2].zona) {
        let pericoOF = array[2];
        guardarPericoOF(pericoOF);
      }
      if (array[3].zona) {
        let sanPedroOF = array[3];
        guardarSanPedroOF(sanPedroOF);
      }
    }
  };

  const segmentarArrayOFM = (array) => {
    if (array[0].zona) {
      if (array[0].zona) {
        let CasaCentralOFM = array[0];
        guardarCCOFM(CasaCentralOFM);
      }
      if (array[1].zona) {
        let palpalaOFM = array[1];
        guardarPalpalaOFM(palpalaOFM);
      }
      if (array[2].zona) {
        let pericoOFM = array[2];
        guardarPericoOFM(pericoOFM);
      }
      if (array[3].zona) {
        let sanPedroOFM = array[3];
        guardarSanPedroOFM(sanPedroOFM);
      }
    }
  };

  const segmentarArrayBAN = (array) => {
    if (array[0].sucursal) {
      if (array[3].sucursal) {
        let CasaCentralBAN = array[3];
        guardarCCBAN(CasaCentralBAN);
      }
      if (array[0].sucursal) {
        let palpalaBAN = array[0];
        guardarPalpalaBAN(palpalaBAN);
      }
      if (array[2].sucursal) {
        let pericoBAN = array[2];
        guardarPericoBAN(pericoBAN);
      }
      if (array[1].sucursal) {
        let sanPedroBAN = array[1];
        guardarSanPedroBAN(sanPedroBAN);
      }
    }
  };

  const segmentarArrayPOL = (array) => {
    if (array[0].sucursal) {
      if (array[3].sucursal) {
        let CasaCentralPOL = array[3];
        guardarCCPOL(CasaCentralPOL);
      }
      if (array[0].sucursal) {
        let palpalaPOL = array[0];
        guardarPalpalaPOL(palpalaPOL);
      }
      if (array[2].sucursal) {
        let pericoPOL = array[2];
        guardarPericoPOL(pericoPOL);
      }
      if (array[1].sucursal) {
        let sanPedroPOL = array[1];
        guardarSanPedroPOL(sanPedroPOL);
      }
    }
  };

  const segmentarArrayTAR = (array) => {
    if (array[0].sucursal) {
      if (array[3].sucursal) {
        let CasaCentralTAR = array[3];
        guardarCCTAR(CasaCentralTAR);
      }
      if (array[0].sucursal) {
        let palpalaTAR = array[0];
        guardarPalpalaTAR(palpalaTAR);
      }
      if (array[2].sucursal) {
        let pericoTAR = array[2];
        guardarPericoTAR(pericoTAR);
      }
      if (array[1].sucursal) {
        let sanPedroTAR = array[1];
        guardarSanPedroTAR(sanPedroTAR);
      }
    }
  };

  const segmentarArrayTARM = (array) => {
    console.log(array);
    if (array[0].sucursal) {
      if (array[0].sucursal) {
        let palpalaTARM = array[0];
        guardarPalpalaTARM(palpalaTARM);
      }
      if (array[2].sucursal) {
        let CasaCentralTARM = array[2];
        guardarPericoTARM(CasaCentralTARM);
      }
      if (array[1].sucursal) {
        let pericoTARM = array[1];
        guardarPericoTARM(pericoTARM);
      }
    }
  };

  const buscarNumeros = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/resofi`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let resofi = res.data;
        guardarResofi(resofi);
        segmentarArrayOF(resofi);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadm/resofi`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let resofiM = res.data;
        guardarResofim(resofiM);
        segmentarArrayOFM(resofiM);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/resban`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let resban = res.data;
        guardarResban(resban);
        segmentarArrayBAN(resban);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/respol`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let respol = res.data;
        guardarRespol(respol);
        segmentarArrayPOL(respol);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/restar`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let restar = res.data;
        guardarRestar(restar);
        segmentarArrayTAR(restar);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadm/restar`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let restarM = res.data;
        guardarRestarm(restarM);
        segmentarArrayTARM(restarM);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/respalcob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let palpalaCOB = res.data[0];
        guardarPalpalaCOB(palpalaCOB);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadm/respalcob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let palpalaCOBM = res.data[0];
        guardarPalpalaCOBM(palpalaCOBM);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/respercob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let pericoCOB = res.data[0];
        guardarPericoCOB(pericoCOB);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadm/respercob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let pericoCOBM = res.data[0];
        guardarPericoCOBM(pericoCOBM);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/resspcob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let sanPedroCOB = res.data[0];
        guardarSanPedroCOB(sanPedroCOB);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadm/resspcob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let sanPedroCOBM = res.data[0];
        guardarSanPedroCOBM(sanPedroCOBM);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadw/resssjcob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let CasaCentralCOB = res.data[0];
        guardarCCCOB(CasaCentralCOB);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(`http://190.231.32.232:5002/api/sgi/efectividadm/resssjcob`, {
        params: {
          mes: mes,
          ano: ano,
        },
      })
      .then((res) => {
        let CasaCentralCOBM = res.data[0];
        guardarCCCOBM(CasaCentralCOBM);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let token = jsCookie.get("token");

  return (
    <div>
      <Layout>
        {!token ? (
          <RedirectToLogin />
        ) : (
          <>
            <Resumen
              buscarNumeros={buscarNumeros}
              handleChange={handleChange}
            />
            {CasaCentralOF === null ? null : (
              <div>
                <ResumenWerchow
                  pericoCOB={pericoCOB}
                  pericoOF={pericoOF}
                  pericoBAN={pericoBAN}
                  pericoTAR={pericoTAR}
                  pericoPOL={pericoPOL}
                  palpalaCOB={palpalaCOB}
                  palpalaOF={palpalaOF}
                  palpalaBAN={palpalaBAN}
                  palpalaTAR={palpalaTAR}
                  palpalaPOL={palpalaPOL}
                  sanPedroCOB={sanPedroCOB}
                  sanPedroOF={sanPedroOF}
                  sanPedroBAN={sanPedroBAN}
                  sanPedroTAR={sanPedroTAR}
                  sanPedroPOL={sanPedroPOL}
                  CasaCentralCOB={CasaCentralCOB}
                  CasaCentralOF={CasaCentralOF}
                  CasaCentralBAN={CasaCentralBAN}
                  CasaCentralTAR={CasaCentralTAR}
                  CasaCentralPOL={CasaCentralPOL}
                />

                <hr />

                <ResumenMutual
                  pericoCOBM={pericoCOBM}
                  pericoOFM={pericoOFM}
                  pericoTARM={pericoTARM}
                  palpalaCOBM={palpalaCOBM}
                  palpalaOFM={palpalaOFM}
                  palpalaTARM={palpalaTARM}
                  sanPedroCOBM={sanPedroCOBM}
                  sanPedroOFM={sanPedroOFM}
                  sanPedroTARM={sanPedroTARM}
                  CasaCentralCOBM={CasaCentralCOBM}
                  CasaCentralOFM={CasaCentralOFM}
                  CasaCentralTARM={CasaCentralTARM}
                />
              </div>
            )}
          </>
        )}
      </Layout>
    </div>
  );
};

export default resumen;
