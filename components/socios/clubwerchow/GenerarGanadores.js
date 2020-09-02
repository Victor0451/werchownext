import React, { useState } from "react";
import ListadoGanadores from "./ListadoGanadores";
import ListadoParticipantes from "./ListadoParticipantes";

const GenerarGanadores = () => {
  const [ganador, guardarGanador] = useState(null);

  const buscarGanador = (e) => {
    e.preventDefault();

    const dni = [
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

    const winer = [];

    for (let i = 0; i < 21; i++) {
      const rand = Math.floor(Math.random() * dni.length);
      const seleccion = dni[rand];

      winer.push(seleccion);
    }
    guardarGanador(winer);
  };
  console.log(ganador);

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

          <ListadoParticipantes
          // participantes={participantes}
          />

          <button
            className="btn btn-primary col-12 d-flex justify-content-center"
            onClick={buscarGanador}
          >
            Buscar Ganador
          </button>
          <div className="card" style={{ marginTop: "10px" }}>
            {/* <ListadoGanadores /> */}

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
    </div>
  );
};

export default GenerarGanadores;
