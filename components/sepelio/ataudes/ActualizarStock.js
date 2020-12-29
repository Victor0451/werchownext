import React from "react";
import StockAgotado from "./StockAgotado";

const ActualizarStock = ({ nuevoStockRef, observacionRef, updateStock , idataudRef}) => {
  return (
    <div className="container mt-4 alert alert-primary border border-dark p-4">
      <h2>
        <strong>
          <u>Actualizar Stock Existente</u>
        </strong>
      </h2>

      <div>
        <StockAgotado 
        nuevoStockRef={nuevoStockRef}
        observacionRef={observacionRef}
        updateStock={updateStock}
        idataudRef={idataudRef}
        />
      </div>
    </div>
  );
};

export default ActualizarStock;
