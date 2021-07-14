import React from "react";
import moment from "moment";

const AdhPrint = ({ adhs }) => {
  if (!adhs)
    return (
      <div className="alert alert-danger text-center text-uppercase">
        El socio no posee adherentes
      </div>
    );

  return (
    <div className="mt-4 container alert alert-primary p-4 border border-dark">
      <h2 className="mt-2 mb-2">
        <strong>
          <u>Adherentes</u>
        </strong>
      </h2>
      <table className="table table-sm border border-dark list text-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">APELLIDO</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">NACIMIENTO</th>
            <th scope="col">ALTA</th>
            <th scope="col">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {adhs.map((adh, index) => (
            <tr key={index}>
              <td></td>
              <td>{adh.APELLIDOS}</td>
              <td>{adh.NOMBRES}</td>
              <td>{adh.NACIMIENTO}</td>
              <td>{adh.ALTA}</td>
              <td>
                {" "}
                {adh.EDAD === 999 && adh.BAJA ? (
                  <div>FALLECIDO - {moment(adh.BAJA).format("DD/MM/YYYY")}</div>
                ) : adh.EDAD !== 999 && adh.BAJA ? (
                  <div>BAJA - {moment(adh.BAJA).format("DD/MM/YYYY")}</div>
                ) : !adh.BAJA ? (
                  <div>ACTIVO</div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdhPrint;
