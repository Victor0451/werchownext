import React from "react";

const FormLiquidarServicio = ({ servicio, gastos }) => {
  if (!servicio) {
    if (!gastos) {
      return (
        <div className="alert alert-warning">
          No se puede realizar la liquidacion.
        </div>
      );
    }
  }
  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <h2>
        <strong>
          <u>Liquidar Servicio N°: {servicio.idservicio}</u>:{" "}
          {servicio.apellido}, {servicio.nombre}
        </strong>
      </h2>

      <div className="border border-dark mt-4 p-4">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Gasto</th>
              <th scope="col">Importe</th>
              <th scope="col">operador</th>
            </tr>
          </thead>
          <tbody>
            {gastos.map(gasto, (index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{gasto.fecha_gasto}</td>
                <td>{gasto.tipo_gasto}</td>
                <td>{gasto.importe}</td>
                <td>{gasto.operador}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormLiquidarServicio;
