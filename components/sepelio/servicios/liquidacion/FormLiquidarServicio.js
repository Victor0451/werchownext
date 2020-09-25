import React from "react";

const FormLiquidarServicio = ({ servicio, gastos }) => {
  return (
    <div className="container border border-dark alert alert-primary p-4">
      {servicio ? (
        <h2>
          <strong>
            <u>Servicio N°: {servicio.idservicio}</u>: {servicio.apellido},{" "}
            {servicio.nombre}
          </strong>
        </h2>
      ) : null}

      {gastos ? (
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
              {gastos.map((gasto, index) => (
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
      ) : null}
    </div>
  );
};

export default FormLiquidarServicio;
