import React from "react";

const FormLiquidarServicio = ({ servicio, liqop, total }) => {

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

      <hr className="mt-4 mb-4" />

      {liqop ? (
        <div className=" border border-dark alert alert-primary mt-4 p-4">
          <h4>
            <strong>
              <u>Liquidacion del personal</u>
            </strong>
          </h4>

          <table className="mt-4 list table border border-dark table-sm ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th >Operador</th>
                <th >Trabajo</th>
                <th >Hs Inicio</th>
                <th >Hs Fin</th>
                <th >Liquidacion</th>
              </tr>
            </thead>
            <tbody>
              {liqop.map((liq, index) => (
                <>
                  <tr key={index}>
                    <th scope="row" >{index + 1}</th>
                    <td>{liq.operador}</td>
                    <td>{liq.tipo_gasto}</td>
                    <td>{liq.hs_inicio}</td>
                    <td>{liq.hs_fin}</td>
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
    </div>
  );
};

export default FormLiquidarServicio;
