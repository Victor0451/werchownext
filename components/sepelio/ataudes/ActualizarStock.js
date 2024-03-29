import React from "react";
import StockAgotado from "./StockAgotado";

const ActualizarStock = ({
  nuevoStockRef,
  observacionRef,
  updateStock,
  idataudRef,
  stockFinal,
  sf,
  nRemitoRef,
  fechaRec,
  traerHistorial,
  historial,
  
}) => {
  return (
    <div className="container mt-4 list border border-dark p-4">
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
          stockFinal={stockFinal}
          sf={sf}
          nRemitoRef={nRemitoRef}
          fechaRec={fechaRec}
          traerHistorial={traerHistorial}
          historial={historial}
          
        />
      </div>
    </div>
  );
};

export default ActualizarStock;
