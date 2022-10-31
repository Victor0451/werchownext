import React, { useState } from "react";
import toastr from "toastr";
import axios from "axios";
import Ruleta from "../../layout/Ruleta";
import moment from "moment";
import { ip } from "../../../config/config";

const GenerarGanadores = ({
  socio,
  sociog,
  eliminarGanador,
  padronGanadores,
  imprimir,
  eliminarGanadores,
}) => {
  const [ganador, guardarGanador] = useState([]);
  const [selec, guardarSelec] = useState(null);
  const [premio, guardarPremio] = useState(0);

  const buscarGanador = (e) => {
    e.preventDefault();

    guardarSelec(null);

    if (socio.length !== 0) {
      const rand = Math.floor(Math.random() * socio.length);
      const seleccion = socio[rand];

      guardarSelec(seleccion);

      if (premio === 0) {
        regGanador(seleccion, 1);
        guardarPremio(1);
      } else if (premio > 0) {
        let nuprem = premio + 1;
        guardarPremio(nuprem);
        regGanador(seleccion, nuprem);
      }

      guardarGanador([...ganador, seleccion]);

      let index = socio.indexOf(seleccion);

      if (index > -1) {
        socio.splice(index, 1);
      }
    } else if (socio.length === 0) {
      toastr.info("No Hay Mas Participantes", "Atencion");
    }

    padronGanadores();
  };

  const regGanador = async (seleccion, premio) => {
    const winner = {
      ganador: seleccion,
      premio: premio,
      fecha: moment().format("YYYY-MM-DD"),
    };

    axios
      .post(`${ip}api/clubwerchow/socios/ganador`, winner)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container list mt-4">
      <div className="row border border-dark  p-4">
        <div className="col-12">
          <h2 className="text-center mb-4">
            <strong>
              <u>Ganadores Del Sorteo</u>
            </strong>
          </h2>

          <h6 className="mb-4">
            <strong>
              <p>
                Para poder participar de los sorteos del Club Werchow entra en:{" "}
                {""}
                <a href="https://clubwerchow.com" target="_blank">
                  https://clubwerchow.com
                </a>
              </p>
            </strong>
          </h6>

          <br />
          <div className="row">
            <div className="col-6">
              <Ruleta fn={buscarGanador} />
            </div>

            <div className="col-6">
              {selec ? (
                <>
                  <div className="alert alert-info text-center text-uppercase">
                    El ganador es: {selec}
                  </div>
                </>
              ) : null}

              {/* IMAGEN DE PREMIOS */}

              {/* <img src="/img/premios.jpg" className="premios " /> */}

              {/* ------------------------  */}
            </div>
          </div>

          <br />
          <div className="row  mt-4">
            <div className=" mt-2 mb-4 col-md-6 border border-dark  list">
              <h6 className="mt-4 mb-4">
                <u>Participantes</u>
              </h6>
              <div className="card">
                <div className="verticalScroll">
                  {socio.map((part, index) => (
                    <div className="row ml-2 ">
                      <div className="mt-2">*</div>
                      <div className="mt-2 col-md-10 over" key={index}>
                        {part}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 mb-4 col-md-6 border border-dark  list">
              <div className="row d-flex justify-content-center mt-4 mb-4">
                <div className="col-md-4 mt-2 mb-4 ">
                  <h6>
                    <u>Ganadores</u>
                  </h6>
                </div>

                <div className="col-md-3">
                  <button className="btn btn-sm btn-primary" onClick={imprimir}>
                    Imprimir
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={eliminarGanadores}
                  >
                    Eliminar Todos
                  </button>
                </div>
              </div>

              <div className="card">
                <div id="win">
                  {!sociog ? null : (
                    <>
                      {sociog.map((partg, index) => (
                        <>
                          <div className="row ml-2 mb-2">
                            <div className=" mt-2">{index + 1} -</div>
                            <div className="mt-2 col-md-8" key={index}>
                              {partg}
                            </div>
                            <div className="mt-2 col-md-3">
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => eliminarGanador(partg)}
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerarGanadores;
