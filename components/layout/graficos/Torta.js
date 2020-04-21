import React from "react";
import { Pie } from "react-chartjs-2";

const Torta = ({ casosabiertos, casoscerrados }) => {
  const data = {
    labels: ["Casos Abiertos", "Casos Cerrados"],
    datasets: [
      {
        label: "Werchow",
        fill: false,
        lineTension: 0.1,
        backgroundColor: ["#FF0000", "#00FF00"],
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
        data: [casosabiertos, casoscerrados],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default Torta;
