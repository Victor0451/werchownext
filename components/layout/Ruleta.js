import React from "react";

const Ruleta = ({ fn }) => {
  return (
    <div>
      <img
        className="ruleta"
        width="400"
        height="400"
        src="http://upload.wikimedia.org/wikipedia/commons/7/7d/European_roulette_wheel.svg"
        onClick={fn}
      />
    </div>
  );
};

export default Ruleta;
