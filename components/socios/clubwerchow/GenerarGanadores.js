import React, { useState } from "react";
import toastr from "toastr";
import Ruleta from "../../layout/Ruleta";



const socio = [
  5009189,
  5009189,
  6625707,
  11663603,
  12007644,
  14061478,
  16364625,
  22188623,
  22820657,
  23820379,
  30399341,
  30766146,
  32380646,
  33236296,
  33256599,
  34022631,
  36720371,
  93005287,
  95150912,
];

const GenerarGanadores = () => {
  const [ganador, guardarGanador] = useState([]);
  const [selec, guardarSelec] = useState(null);

  
  const padronParticipante = async () => {

  }
  
  const buscarGanador = (e) => {
    e.preventDefault();

    guardarSelec(null);

    if (socio.length !== 0) {
      const rand = Math.floor(Math.random() * socio.length);
      const seleccion = socio[rand];

      guardarSelec(seleccion);

      guardarGanador([...ganador, seleccion]);

      let index = socio.indexOf(seleccion);

      if (index > -1) {
        socio.splice(index, 1);
      }
    } else if (socio.length === 0) {
      toastr.info("No Hay Mas Participantes", "Atencion");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row border border-dark alert alert-primary p-4">
        <div className="col-12">
          <h2 className="text-center mb-4">
            <strong>
              <u>Ganadores Del Sorteo</u>
            </strong>
          </h2>

          <p>
            Para poder participar de los sorteos del Club Werchow entra en: {""}
            <a href="https://clubwerchow.com" target="_blank">
              https://clubwerchow.com
            </a>
          </p>

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
            </div>
          </div>

          <div className="row">
            <div className=" mt-4 mb-4 col-md-6">
              <h6>Participantes</h6>
              <div className="card">
                <div>
                  {socio.map((part, index) => (
                    <div key={index}>{part}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" mt-4 mb-4 col-md-6">
              <h6>Ganadores</h6>
              <div className="card">
                {ganador !== null ? (
                  <div>
                    {ganador.map((ganador, index) => (
                      <div key={index}>{ganador}</div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary col-12 d-flex justify-content-center"
            onClick={buscarGanador}
          >
            Buscar Ganador
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerarGanadores;
