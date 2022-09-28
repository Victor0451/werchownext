import React from "react";
import Spinner from "../layout/Spinner";
import {
  efecempresa,
  efecmediopago,
  efecsucursal,
  efecsubtotal,
} from "./funciones";

const ResumenWerchow = ({
  pericoCOB,
  pericoOF,
  pericoBAN,
  pericoTAR,
  pericoPOL,
  palpalaCOB,
  palpalaOF,
  palpalaBAN,
  palpalaTAR,
  palpalaPOL,
  sanPedroCOB,
  sanPedroOF,
  sanPedroBAN,
  sanPedroTAR,
  sanPedroPOL,
  CasaCentralCOB,
  CasaCentralOF,
  CasaCentralBAN,
  CasaCentralTAR,
  CasaCentralPOL,
}) => {
  if (!CasaCentralPOL)
    return (
      <div className="container">
        {" "}
        <Spinner />{" "}
      </div>
    );
  else if (CasaCentralPOL)
    return (
      <table className="container list table border border-dark text-center mt-4">
        <thead className="thead-dark">
          <th className="border border-dark border-bottom" colspan="8">
            WERCHOW
          </th>
          <tr>
            <th className="border border-dark" scope="col">
              SUCURSAL
            </th>
            <th className="border border-dark" scope="col">
              COBRADORES
            </th>
            <th className="border border-dark" scope="col">
              OFICINA
            </th>
            <th className="border border-dark" scope="col">
              TARJETAS
            </th>
            <th className="border border-dark" scope="col">
              BANCO
            </th>
            <th className="border border-dark" scope="col">
              POLICIAS
            </th>
            <th className="border border-dark" scope="col">
              EFECTIVIDAD TOTAL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-dark">
            <th className="border border-dark" scope="row">
              PALPALA
            </th>
            <td className="border border-dark">
              <strong>{efecmediopago(palpalaCOB, 1)} %</strong>
            </td>

            <td className="border border-dark">
              <strong>{efecmediopago(palpalaOF, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(palpalaTAR, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(palpalaBAN, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(palpalaPOL, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsucursal(
                  palpalaCOB,
                  palpalaOF,
                  palpalaTAR,
                  palpalaBAN,
                  palpalaPOL
                )}{" "}
                %
              </strong>
            </td>
          </tr>

          <tr className="border border-dark">
            <th className="border border-dark" scope="row">
              PERICO
            </th>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoCOB, 1)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoOF, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoTAR, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoBAN, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoPOL, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsucursal(
                  pericoCOB,
                  pericoOF,
                  pericoTAR,
                  pericoBAN,
                  pericoPOL
                )}{" "}
                %
              </strong>
            </td>
          </tr>
          <tr className="border border-dark">
            <th className="border border-dark" scope="row">
              SAN PEDRO
            </th>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroCOB, 1)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroOF, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroTAR, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroBAN, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroPOL, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsucursal(
                  sanPedroCOB,
                  sanPedroOF,
                  sanPedroTAR,
                  sanPedroBAN,
                  sanPedroPOL
                )}{" "}
                %
              </strong>
            </td>
          </tr>
          <tr className="border border-dark">
            <th className="border border-dark" scope="row">
              SAN SALVADOR
            </th>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralCOB, 1)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralOF, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralTAR, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralBAN, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralPOL, 0)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsucursal(
                  CasaCentralCOB,
                  CasaCentralOF,
                  CasaCentralTAR,
                  CasaCentralBAN,
                  CasaCentralPOL
                )}{" "}
                %
              </strong>
            </td>
          </tr>
          <tr>
            <td className="border border-dark">
              <strong>SUBTOTAL</strong>
            </td>

            <td className="border border-dark">
              <strong>
                {efecsubtotal(
                  palpalaCOB,
                  sanPedroCOB,
                  pericoCOB,
                  CasaCentralCOB
                )}{" "}
                %
              </strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsubtotal(palpalaOF, sanPedroOF, pericoOF, CasaCentralOF)} %
              </strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsubtotal(
                  palpalaTAR,
                  sanPedroTAR,
                  pericoTAR,
                  CasaCentralTAR
                )}{" "}
                %
              </strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsubtotal(
                  palpalaBAN,
                  sanPedroBAN,
                  pericoBAN,
                  CasaCentralBAN
                )}{" "}
                %
              </strong>
            </td>
            <td className="border border-dark">
              <strong>
                {efecsubtotal(
                  palpalaPOL,
                  sanPedroPOL,
                  pericoPOL,
                  CasaCentralPOL
                )}{" "}
                %
              </strong>
            </td>
            <td className="border border-dark">------</td>
          </tr>
          <tr>
            <td className="border border-dark" colspan="6">
              <strong>TOTAL EFECTIVIDAD WERCHOW</strong>
            </td>

            <td className="border border-dark" colspan="2">
              <strong>
                {efecempresa(
                  pericoCOB,
                  pericoOF,
                  pericoBAN,
                  pericoTAR,
                  pericoPOL,
                  palpalaCOB,
                  palpalaOF,
                  palpalaBAN,
                  palpalaTAR,
                  palpalaPOL,
                  sanPedroCOB,
                  sanPedroOF,
                  sanPedroBAN,
                  sanPedroTAR,
                  sanPedroPOL,
                  CasaCentralCOB,
                  CasaCentralOF,
                  CasaCentralBAN,
                  CasaCentralTAR,
                  CasaCentralPOL
                )}{" "}
                %
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default ResumenWerchow;
