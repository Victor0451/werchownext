import React from "react";
import Spinner from '../layout/Spinner'
import { efecempresam, efecmediopago, efecsucursalm, efecsucursalmsp } from "./funciones";

const ResumenMutual = ({
  pericoCOBM,
  pericoOFM,
  pericoTARM,
  palpalaCOBM,
  palpalaOFM,
  palpalaTARM,
  sanPedroCOBM,
  sanPedroOFM,
  sanPedroTARM,
  CasaCentralCOBM,
  CasaCentralOFM,
  CasaCentralTARM,
}) => {

  if (!CasaCentralTARM) return <div className="container"> <Spinner /> </div>
  else if (CasaCentralTARM)
    return (
      <table className="container table border border-dark text-center mt-2">
        <thead className="thead-dark">
          <th className="border border-dark border-bottom" colspan="8">
            MUTUAL
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
              <strong>{efecmediopago(palpalaCOBM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(palpalaOFM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(palpalaTARM)} %</strong>
            </td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">
              <strong>
                {efecsucursalm(palpalaCOBM, palpalaOFM, palpalaTARM)} %
            </strong>
            </td>
          </tr>
          <tr className="border border-dark">
            <th className="border border-dark" scope="row">
              PERICO
          </th>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoCOBM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoOFM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(pericoTARM)} %</strong>
            </td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">
              <strong>
                {efecsucursalm(pericoCOBM, pericoOFM, pericoTARM)} %
            </strong>
            </td>
          </tr>

          <tr className="border border-dark">
            <th className="border border-dark" scope="row">
              SAN PEDRO
          </th>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroCOBM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroOFM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(sanPedroTARM)} %</strong>

            </td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">
              <strong>
                {efecsucursalmsp(sanPedroCOBM, sanPedroOFM)} %
           </strong>
            </td>
          </tr>
          <tr className="border border-dark">
            <th className="border border-dark" scope="row">
              SAN SALVADOR
          </th>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralCOBM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralOFM)} %</strong>
            </td>
            <td className="border border-dark">
              <strong>{efecmediopago(CasaCentralTARM)} %</strong>
            </td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">------</td>
            <td className="border border-dark">
              <strong>
                {efecsucursalm(CasaCentralCOBM, CasaCentralOFM, CasaCentralTARM)}{" "}
              %
            </strong>
            </td>
          </tr>
          <tr>
            <td className="border border-dark" colspan="6">
              <strong>TOTAL EFECTIVIDAD MUTUAL</strong>
            </td>

            <td className="border border-dark" colspan="2">
              <strong>
                {efecempresam(
                  pericoCOBM,
                  pericoOFM,
                  pericoTARM,
                  palpalaCOBM,
                  palpalaOFM,
                  palpalaTARM,
                  sanPedroCOBM,
                  sanPedroOFM,
                  sanPedroTARM,
                  CasaCentralCOBM,
                  CasaCentralOFM,
                  CasaCentralTARM
                )}{" "}
              %
            </strong>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default ResumenMutual;
