import React from "react";

const FormLiquidarServicio = ({ servicio, gastos, liqop, total }) => {
  return (
    <div>
      <div className="container border border-dark alert alert-primary p-4">
        {servicio ? (
          <h2>
            <strong>
              <u>Servicio N°: {servicio.idservicio}</u>: {servicio.apellido},{" "}
              {servicio.nombre}
            </strong>
          </h2>
        ) : null}
      </div>

      {gastos ? (
        <div className=" border border-dark alert alert-primary ">
          <h4>
            <strong>
              <u>Listado de Gastos</u>
            </strong>
          </h4>

          <table className="mt-4 list table border border-dark">
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
          <div className="alert alert-info text-center text-uppercase border border-dark ">
            Total Gastos de servicio: {total(gastos)}
          </div>
        </div>
      ) : null}

      <hr className="mt-4 mb-4" />

      {liqop ? (
        <div className=" border border-dark alert alert-primary mt-4 p-4">
          <h4>
            <strong>
              <u>Liquidacion del personal</u>
            </strong>
          </h4>

          <table className="mt-4 list table border border-dark">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Operador</th>
                <th scope="col">Trabajo</th>
                <th scope="col">Liquidacion</th>
              </tr>
            </thead>
            <tbody>
              {liqop.map((liq, index) => (
                <>
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{liq.operador}</td>
                    <td>{liq.tipo_gasto}</td>
                    <td>{liq.liquidacion}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <div className="alert alert-info text-center text-uppercase border border-dark ">
            Total Liquidacion del personal: {total(liqop)}
          </div>
        </div>
      ) : null}

      <hr className="mt-4 mb-4" />

      <div className="border border-dark alert alert-primary mt-4 p-4">
        <h4>
          <strong>
            <u>Resumen</u>
          </strong>
        </h4>

        <div className="alert alert-info text-center text-uppercase border border-dark ">
          Liquidacion final del servicio: {total(liqop) + total(gastos)}
        </div>

        {/* <div className="row mt-4 d-flex justify-content-between border border-dark  p-4">
          <div classNames="col-md-4 border border-dark">
            <h6>
              <strong>
                <u> Gastos totales</u>: {total(gastos)}
              </strong>
            </h6>
          </div>

          <div classNames="col-md-4 border border-dark">
            <h6>
              <strong>
                <u> Sueldo a Pagar</u>: {total(liqop)}
              </strong>
            </h6>
          </div>

          <div classNames="col-md-4 border border-dark">
            <h6>
              <strong>
                <u> Total Liquidacion </u>: {total(liqop) + total(gastos)}
              </strong>
            </h6>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FormLiquidarServicio;
