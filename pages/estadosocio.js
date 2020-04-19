import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import EstadoCartera from "../components/campañas/EstadoCartera";
import AsignarCampana from "../components/campañas/AsignarCampana";
import axios from "axios";
import toastr from 'toastr'

const estadosocio = () => {
  const [campana, guardarCampana] = useState({});
  const [empresa, guardarEmpresa] = useState({});
  const [array, guardarArray] = useState({});

  const [perico, guardarPerico] = useState({});
  const [palpala, guardarPalpala] = useState({});
  const [sanPedro, guardarSanPedro] = useState({});
  const [CasaCentralMG, guardarCCMG] = useState({});
  const [CasaCentralGG, guardarCCGG] = useState({});

  const segmentacion = (array) => {
    let perico = array.filter((at) => {
      return at.SUCURSAL === "R";
    });

    let palpala = array.filter((at) => {
      return at.SUCURSAL === "L";
    });

    let sanPedro = array.filter((at) => {
      return at.SUCURSAL === "P";
    });

    let CasaCentral = array.filter((at) => {
      return at.SUCURSAL === "W";
    });

    let CCmitad = Math.floor(CasaCentral.length / 2);

    let CasaCentralGG = CasaCentral.slice(0, CCmitad);

    let CasaCentralMG = CasaCentral.slice(CCmitad, CasaCentral.length);

    guardarPerico(perico);
    guardarPalpala(palpala);
    guardarSanPedro(sanPedro);
    guardarCCMG(CasaCentralMG);
    guardarCCGG(CasaCentralGG);
  };

  // CAMPAÑAS DE WERCHOW

  const buscarAT = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanas/atW`)
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Atrasados";
          guardarCampana(campana);

          const empresa = "W";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };

  const buscarRec = async () => {
    await axios.get(
      `http://190.231.32.232:5002/api/sgi/campanas/recW`
    )
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Recuperacion";
          guardarCampana(campana);

          const empresa = "W";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };


  const buscarRein = async () => {
    await axios.get(
      `http://190.231.32.232:5002/api/sgi/campanas/reinW`
    )
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Reincidente";
          guardarCampana(campana);

          const empresa = "W";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };


  const buscarBlan = async () => {
    await axios.get(
      `http://190.231.32.232:5002/api/sgi/campanas/blanW`
    )
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Blanqueo";
          guardarCampana(campana);

          const empresa = "W";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };

  const buscarAux = async () => {
    await axios.get(
      `http://190.231.32.232:5002/api/sgi/campanas/AuxW`
    )
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Auxiliar";
          guardarCampana(campana);

          const empresa = "W";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };

  const buscarPoli = async () => {
    await axios.get(
      `http://190.231.32.232:5002/api/sgi/campanas/PoliW`
    )
      .then((res) => {

        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Policia";
          guardarCampana(campana);

          const empresa = "W";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }


      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };

  // CAMPAÑAS DE MUTUAL


  const buscarATM = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanasM/atM`)
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Atrasados";
          guardarCampana(campana);

          const empresa = "M";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };

  const buscarRecM = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanasM/recM`)
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Recuperacion";
          guardarCampana(campana);

          const empresa = "M";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };

  const buscarReinM = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanasM/reinM`)
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Reincidente";
          guardarCampana(campana);

          const empresa = "M";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };

  const buscarBlanM = async () => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanasM/blanM`)
      .then((res) => {
        if (res.data[0].length > 0) {
          const array = res.data[0];
          guardarArray(array);
          segmentacion(array);

          const campana = "Blanqueo";
          guardarCampana(campana);

          const empresa = "M";
          guardarEmpresa(empresa);
        } else if (res.data[0].length === 0) {
          toastr.warning("No se encuentran casos para asignar", "ATENCION")
        }
      })
      .catch((error) => {
        console.log(error);
        toastr.error("La tabla no fue creada", "ATENCION")
      });
  };


  return (

    <Layout>
      <EstadoCartera
        array={array}
        buscarAT={buscarAT}
        buscarATM={buscarATM}
        buscarRec={buscarRec}
        buscarRecM={buscarRecM}
        buscarRein={buscarRein}
        buscarReinM={buscarReinM}
        buscarBlan={buscarBlan}
        buscarBlanM={buscarBlanM}
        buscarAux={buscarAux}
        buscarPoli={buscarPoli}
      />

      {Object.values(array).length > 0 ? (
        <AsignarCampana
          CasaCentralMG={CasaCentralMG}
          CasaCentralGG={CasaCentralGG}
          perico={perico}
          palpala={palpala}
          sanPedro={sanPedro}
          empresa={JSON.stringify(empresa)}
          campana={JSON.stringify(campana)}
        />

      ) : (
          <div className="container">
            <div className=" alert alert-info text-dark text-center">
              <h3>
                <u>
                  Busca si existen casos disponibles para asignar
              </u>
              </h3>
            </div>
          </div>
        )}
    </Layout>
  );
};

export default estadosocio;
