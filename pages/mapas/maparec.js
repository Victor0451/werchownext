import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import FormMapaRec from "../../components/mapas/FormMapaRec";
import MapaRec from "../../components/mapas/MapaRec";
import { ip } from "../../config/config";
import toastr from "toastr";

const maparec = () => {
  let recRef = React.createRef();
  let rec2Ref = React.createRef();
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();
  let accionRef = React.createRef();
  let anoRef = React.createRef();

  const [desde, guadarDesde] = useState(null);
  const [hasta, guardarHasta] = useState(null);
  const [ano, guardarAno] = useState(null);
  const [mapa, guardarMapa] = useState(null);
  const [mapaM, guardarMapaM] = useState(null);
  const [mora, guardarMora] = useState(null);
  const [moraM, guardarMoraM] = useState(null);
  const [recup, guardarRecup] = useState(null);
  const [error, guardarError] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      recuperadores();
    }
  }, []);

  const recuperadores = async () => {
    await axios
      .get(`${ip}api/sgi/mapa/recuperadores`)
      .then((res) => {
        guardarRecup(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarMapa = async () => {
    guardarError(null);
    guardarAno(null);

    let rec = recRef.current.value;
    let desde = desdeRef.current.value;
    let hasta = hastaRef.current.value;

    if (desde === "" || hasta === "") {
      guardarError("Debes elegir un rango de fechas");
    } else if (desde > hasta) {
      guardarError(`El campo "DESDE" no puede ser mayor al campo "HASTA" `);
    } else if (rec === "no") {
      guardarError("Debes elegir un recuperador");
    } else {
      guadarDesde(desde);
      guardarHasta(hasta);

      await axios
        .get(`${ip}api/sgi/mapa/maparec`, {
          params: {
            rec: rec,
            desde: desde,
            hasta: hasta,
            emp: "W",
          },
        })
        .then((res) => {
          guardarMapa(res.data[0]);

          traerMora(rec, desde, hasta);

          toastr.success("Se trajo el mapeo con exito", "ATENCION");
        })
        .catch((error) => {
          console.log(error);

          toastr.error("Ocurrio un error al traer el mapeo", "ATENCION");
        });

      await axios
        .get(`${ip}api/sgi/mapa/maparec`, {
          params: {
            rec: rec,
            desde: desde,
            hasta: hasta,
            emp: "M",
          },
        })
        .then((res) => {
          guardarMapaM(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const consultarMapa2 = async () => {
    guardarError(null);
    guardarMapa(null);
    guardarMapaM(null);
    guardarAno(null);

    let rec = rec2Ref.current.value;
    let ano = anoRef.current.value;
    let accion = accionRef.current.value;

    if (ano === "no") {
      guardarError("Debes elegir un año");
    } else if (accion === "no") {
      guardarError(`Debes elegir la accion a analizar `);
    } else if (rec === "no") {
      guardarError("Debes elegir un recuperador");
    } else {
      guardarAno(ano);
      await axios
        .get(`${ip}api/sgi/mapa/maparec2`, {
          params: {
            rec: rec,
            accion: accion,
            ano: ano,
            emp: "W",
          },
        })
        .then((res) => {
          guardarMapa(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });

      await axios
        .get(`${ip}api/sgi/mapa/maparec2`, {
          params: {
            rec: rec,
            accion: accion,
            ano: ano,
            emp: "M",
          },
        })
        .then((res) => {
          guardarMapaM(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const traerMora = async (rec, desde, hasta) => {
    await axios
      .get(`${ip}api/sgi/mapa/mapareccamp`, {
        params: {
          rec: rec,
          desde: desde,
          hasta: hasta,
          emp: "werchow",
        },
      })
      .then((res) => {
        guardarMora(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer la mora", "ATENCION");
      });

    await axios
      .get(`${ip}api/sgi/mapa/mapareccamp`, {
        params: {
          rec: rec,
          desde: desde,
          hasta: hasta,
          emp: "mutual",
        },
      })
      .then((res) => {
        guardarMoraM(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un error al traer la mora", "ATENCION");
      });
  };

  const imprimir = () => {
    let contenido = document.getElementById("solicitud").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.reload();
  };

  return (
    <Layout>
      <FormMapaRec
        listado={recup}
        recRef={recRef}
        rec2Ref={rec2Ref}
        desdeRef={desdeRef}
        hastaRef={hastaRef}
        anoRef={anoRef}
        accionRef={accionRef}
        consultarMapa={consultarMapa}
        consultarMapa2={consultarMapa2}
        error={error}
        datatoggle={"modal"}
        datatarget={"#exampleModal"}

      />

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {mapa && mapa.length !== 0 ? (
                <>
                  <div id="solicitud" className="mt-4">
                    <MapaRec
                      mapa={mapa}
                      mapaM={mapaM}
                      desde={desde}
                      hasta={hasta}
                      ano={ano}
                      mora={mora}
                      moraM={moraM}
                    />
                  </div>
                  <div className=" container list mt-4 border border-dark p-4">
                    <h3>
                      <strong>
                        <u>Opciones</u>
                      </strong>
                    </h3>
                    <div className="row border border-dark p-4 mt-4">
                      <div className="col-md-12 d-flex justify-content-center">
                        <button
                          className=" btn btn-primary "
                          onClick={imprimir}
                        >
                          Imprimir
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : error ? (
                <div className="alert alert-danger text-center text-uppercase m-4">
                  {error}
                </div>
              ) : (
                <div className="container alert alert-warning text-center text-uppercase">
                  No se registran acciones
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default maparec;
