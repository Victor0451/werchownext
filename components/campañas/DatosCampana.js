import React from "react";
import BarrasAcostadas from "../layout/graficos/BarrasAcostadas";
import Torta from "../layout/graficos/Torta";
import Barras from "../layout/graficos/Barra";

const DatosCampana = ({
  llamin,
  compago,
  nopaga,
  cuotadia,
  notificacion,
  carteraroja,
  sociofallecido,
  casosabiertos,
  casoscerrados,
  casosconaccion,
  casossinaccion,
  operador,
}) => {
  return (
    <div className="border border-dark p-4">
      <div >
        <div className="row mt-4 mb-4">
          <h1>
            <strong>
              <u>Estadisticas De Campañas Activas Del Operador - {operador}</u>
            </strong>
          </h1>
          <div className="col-md-6 border border-dark mt-4">
            <h2 className="mb-4">Cantidad de Casos segun acciones</h2>
            <BarrasAcostadas
              llamin={llamin}
              compago={compago}
              nopaga={nopaga}
              cuotadia={cuotadia}
              notificacion={notificacion}
              carteraroja={carteraroja}
              sociofallecido={sociofallecido}
            />
          </div>

          <div className="col-md-6 border border-dark mt-4">
            <h2 className="mb-4">Casos Abiertos vs Cerrados</h2>
            <Torta
              casosabiertos={casosabiertos}
              casoscerrados={casoscerrados}
            />
          </div>

          <div className="col-md-6 border border-dark mt-2">
            <h2 className="mb-4">Casos Trabajados vs Sin Trabajar</h2>
            <Barras
              casosconaccion={casosconaccion}
              casossinaccion={casossinaccion}
            />
          </div>

          <div className="col-md-6 border border-dark mt-2">
            <h2 className="mb-4">Resultados</h2>
            <div className="row">
              {llamin === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>LLamadas inconclusas</u>: {llamin}
                </strong>
              )}

              {compago === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Compromiso de Pago</u>: {compago}
                </strong>
              )}

              {nopaga === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>No Paga</u>: {nopaga}
                </strong>
              )}

              {cuotadia === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Cuota al Dia</u>: {cuotadia}
                </strong>
              )}

              {notificacion === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Notificaciones</u>: {notificacion}
                </strong>
              )}

              {carteraroja === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Cartera Roja</u>: {carteraroja}
                </strong>
              )}

              {sociofallecido === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Socio Fallecido</u>: {sociofallecido}
                </strong>
              )}

              {casosabiertos === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Casos Abiertos</u>: {casosabiertos}
                </strong>
              )}

              {casoscerrados === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Casos Cerrados</u>: {casoscerrados}
                </strong>
              )}

              {casosconaccion === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Casos Trabajados</u>: {casosconaccion}
                </strong>
              )}

              {casossinaccion === null ? null : (
                <strong className="col-md-6 mt-2">
                  <u>Casos Sin Trabajar</u>: {casossinaccion}
                </strong>
              )}
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default DatosCampana;
