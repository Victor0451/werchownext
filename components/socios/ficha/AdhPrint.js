import React from "react";
import moment from "moment";

const AdhPrint = ({ adhs }) => {

  if (!adhs || adhs.length === 0)
    return (
      <div className=" mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase border border-dark">
        El socio no posee adherentes
      </div>
    );

  return (
    <div className="mt-4  list p-4 border border-dark">
      <h2 className="mt-2 mb-2">
        <strong>
          <u>Adherentes</u>
        </strong>
      </h2>
      <table className="mt-4 table table-sm border border-dark list text-dark">
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
