import React from "react";
import moment from "moment-timezone";

const Gestiones = ({ socioGest }) => {
  if (socioGest.length === 0)
    return (
      <div className="mt-4">El caso no posee gestiones registradas!..</div>
    );

  return (
    <table className="table table-responsive border border-dark">
      <thead className="thead-dark">
        <tr>
          <th scope="col">CONTRATO</th>
          <th scope="col">ACCION</th>
          <th scope="col">FECHA</th>
          <th scope="col">NUEVA ACCION</th>
          <th scope="col">FECHA NUEVA ACCION</th>
          <th scope="col">OPERADOR</th>
        </tr>
      </thead>
      <tbody>
        {socioGest.map((gestion, index) => (
          <tr key={index}>
            <td>{gestion.contrato}</td>
            <td>
              {gestion.accion < 7
                ? "LLAMADA NO RESPONDIA"
                : gestion.accion === 7
                ? "COMPROMISO DE PAGO"
                : gestion.accion === 8
                ? "NO PAGA"
                : gestion.accion === 9
                ? "CUOTA AL DIA"
                : gestion.accion === 10
                ? "NOTIFICAR (ALEJANDRA)"
                : gestion.accion === 11
                ? "SE ENVIA COBRADOR"
                : gestion.accion === 12
                ? "PASA POR OFICINA"
                : gestion.accion === 13
                ? "CARTERA ROJA"
                : gestion.accion === 14
                ? "SOCIO FALLECIDO"
                : gestion.accion === 14
                ? "RECORDATORIO DE PAGO"
                : gestion.accion === 15
                ? "COMP. PAGO EFECTIVO"
                : gestion.accion === 16
                ? "DEBITO"
                : gestion.accion === 17
                ? "CREDITO"
                : gestion.accion === 18
                ? "COMP. PAGO NO EFECTIVO"
                : gestion.accion === 19
                ? "SOCIO FALLECIDO"
                : null}
            </td>
            <td>{moment(gestion.fechaaccion).format("DD/MM/YYYY")}</td>
            <td>{gestion.nuevaaccion}</td>
            <td>{moment(gestion.fechanuevaaccion).format("DD/MM/YYYY")}</td>
            <td>{gestion.operador}</td>
            {/* <td>
                        {titular.ESTADO === 1
                          ? "ACTIVO"
                          : titular.ESTADO === 0
                          ? "BAJA"
                          : ""}
                      </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Gestiones;
