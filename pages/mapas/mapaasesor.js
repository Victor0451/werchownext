import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import FormMapa from "../../components/mapas/FormMapa";
import MapaAsesor from "../../components/mapas/MapaAsesor";
import { ip } from '../../config/config'

const mapaasesor = () => {
  let asesorRef = React.createRef();
  let anoRef = React.createRef();

  const [listado, guardarAsesores] = useState(null);
  const [error, guardarError] = useState(null);
  const [mapa, guardarMapa] = useState(null);

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      asesores();
    }
  }, []);

  const asesores = async () => {
    await axios
      .get(`${ip}api/sgi/mapa/asesores`)
      .then((res) => {
        guardarAsesores(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarMapa = async () => {
    let ase = asesorRef.current.value;
    let ano = anoRef.current.value;

    if (ase === "no" || ano === "no") {
      guardarError("Debes seleccionar un asesor y/o un año");
    } else {
      await axios
        .get(`${ip}api/sgi/mapa/mapaasesor`, {
          params: {
            asesor: ase,
            ano: ano,
          },
        })
        .then((res) => {
          guardarMapa(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
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

  return (
    <Layout>
      <FormMapa
        listado={listado}
        asesorRef={asesorRef}
        anoRef={anoRef}
        consultarMapa={consultarMapa}
        datatoggle={"modal"}
        datatarget={"#exampleModal"}
        error={error}
      />

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
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
                    <MapaAsesor mapa={mapa} />
                  </div>

                  <div className=" container alert alert-primary border border-dark p-4">
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

export default mapaasesor;
