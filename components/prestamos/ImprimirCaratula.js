import React from "react";
import TablaPrestamosCaratula from "./TablaPrestamosCaratula";

const ImprimirCaratula = ({
  prestamos,
  capitalprest,
  cuotas,
  intereses,
  cantprest,
  capconint,
}) => {
  return (
    <div className="container">
      <h2 className="mt-4 mb-4">
        <strong>
          <u>Prestamos Realizados</u>
        </strong>
      </h2>

      <TablaPrestamosCaratula
        data={prestamos}
        capitalprest={capitalprest}
        cuotas={cuotas}
        intereses={intereses}
        cantprest={cantprest}
        capconint={capconint}
      />
    </div>
  );
};

export default ImprimirCaratula;