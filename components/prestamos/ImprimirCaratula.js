import React from "react";
import TablaPrestamosCaratula from "./TablaPrestamosCaratula";

const ImprimirCaratula = ({
  prestamos,
  capitalprest,
  cuotas,
  intereses,
  cantprest,
  capconint,
  codigo,
}) => {
    return (
    <div className="container mt-4 alert alert-primary border border-dark p-4">
      <h2 className=" mb-4">
        <strong>
          <u>Sub. Cont. Familiar Realizados</u>
        </strong>
      </h2>

      <TablaPrestamosCaratula
        data={prestamos}
        capitalprest={capitalprest}
        cuotas={cuotas}
        intereses={intereses}
        cantprest={cantprest}
        capconint={capconint}
        codigo={codigo}
      />
    </div>
  );
};

export default ImprimirCaratula;
