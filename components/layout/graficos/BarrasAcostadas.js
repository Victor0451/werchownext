import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const BarrasAcostadas = ({
  llamin,
  compago,
  nopaga,
  cuotadia,
  notificacion,
  carteraroja,
  sociofallecido,
}) => {
  const data = {
    labels: [
      "Llamados Inconclusos",
      "Compromisos de Pagos",
      "No Paga",
      "Cuota al Dia",
      "Notificacion",
      "Cartera Roja",
      "Socio Fallecido",
    ],
    datasets: [
      {
        label: ["Werchow"],
        fill: false,
        lineTension: 0.1,
        backgroundColor: [
          "#0000FF",
          "#A52A2A",
          "#FF4500",
          "#FFD700",
          "#2E8B57",
          "#FF6347",
          "#40E0D0",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          llamin,
          compago,
          nopaga,
          cuotadia,
          notificacion,
          carteraroja,
          sociofallecido,
        ],
      },
    ],
  };

  return (
    <div>
      <HorizontalBar data={data} />
    </div>
  );
};

export default BarrasAcostadas;
