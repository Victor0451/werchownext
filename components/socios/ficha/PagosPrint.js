import React from "react";
import moment from "moment";

const PagosPrint = ({ pagos, ficha, empresa }) => {
  if (!pagos || pagos.length === 0)
    return (

      <div className=" mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase border border-dark">
        EL SOCIO NO REGISTRA PAGOS
      </div>

    );

  return (
    <div className="mt-4  list p-4 border border-dark">
      <div className="row d-felx justify-content-between p-2">
        <h2 className="  mb-4 text-center">
          <strong>
            <u>Constancia de Pagos</u>
          </strong>
        </h2>
        {empresa === "W" ? (
          <img src="/img/logo.png" className="werchowlogo" />
        ) : empresa === "M" ? (
          <img src="/img/logom.jpg" className="mutuallogo" />
        ) : null}
      </div>

      <h3 className=" mb-4">
        <strong>
          <u>
            Socio: {ficha.CONTRATO} - {ficha.APELLIDOS}, {ficha.NOMBRES}
          </u>
        </strong>
      </h3>

      <table className="mt-4 table table-sm border border-dark list text-dark">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">TIPO</th>
            <th scope="col">IMPORTE</th>
            <th scope="col">MES</th>
            <th scope="col">AÑO</th>
            <th scope="col">FECHA</th>
          </tr>
        </thead>
        <tbody>
          {pagos.map((pago, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {pago.DIA_PAG ? (
                  <div>Cuota</div>
                ) : pago.DIA_PAGO ? (
                  <div>Debito</div>
                ) : null}
              </td>
              {!pago.IMPORTE ? <td>Bonificado</td> : <td>{pago.IMPORTE}</td>}

              <td>{pago.MES}</td>
              <td>{pago.ANO}</td>
              <td>
                {pago.DIA_PAG ? (
                  <div>{moment(pago.DIA_PAG).format("DD/MM/YYYY")}</div>
                ) : pago.DIA_PAGO ? (
                  <div>{moment(pago.DIA_PAGO).format("DD/MM/YYYY")}</div>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PagosPrint;
