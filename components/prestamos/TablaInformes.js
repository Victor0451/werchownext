import React from "react";

const TablaInformes = ({
  atejerina,
  mgalian,
  ggimenez,
  vgorosito,
  mcarrizo,
  sjuarez,
  totalprestamos,
  totalcapital,
  totalinteres,
  totalcapconint,
  totalprestamosest,
  totalcapitalest,
  totalinteresest,
  totalcapconintest,
  aprobado,
  rechazado,
  pendiente,
  cancelado,
}) => {
  return (
    <div className="container">
      <hr className="mt-4 mb-4" />
      <div className="mt-4 mb-4 border border-dark alert alert-primary p-4">
        <h2 className="mt-4 mb-4">
          <strong>
            <u>Prestamos Aprobados Realizados por Operador</u>
          </strong>
        </h2>

        <div className="d-flex justify-content-between text-center border-bottom  border-dark mt-4 mb-4 ">
          <div className="col-2">
            {" "}
            <strong>OPERADOR</strong>
          </div>
          <div className="col-2">
            {" "}
            <strong>N° PRESTAMOS</strong>
          </div>
          <div className="col-3">
            <strong>CAPITAL PRESTADO</strong>
          </div>
          <div className="col-2">
            <strong>INTERESES GENERADOS</strong>
          </div>
          <div className="col-3">
            <strong>CAPITAL MAS INTERESES</strong>
          </div>
        </div>
        <div>
          {atejerina ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4 mb-4">
              <div className="col-2">
                <strong> Alejandra Tejerina</strong>
              </div>
              <div className="col-2">
                <strong>{atejerina.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{atejerina.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{atejerina.capconint - atejerina.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{atejerina.capconint}</strong>
              </div>
            </div>
          ) : null}
          {mgalian ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Maria Galian</strong>
              </div>
              <div className="col-2">
                <strong>{mgalian.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{mgalian.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{mgalian.capconint - mgalian.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{mgalian.capconint}</strong>
              </div>
            </div>
          ) : null}
          {mcarrizo ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Marisa Carrizo</strong>
              </div>
              <div className="col-2">
                <strong>{mcarrizo.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{mcarrizo.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{mcarrizo.capconint - mcarrizo.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{mcarrizo.capconint}</strong>
              </div>
            </div>
          ) : null}
          {vgorosito ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Vanesa Gorosito</strong>
              </div>
              <div className="col-2">
                <strong>{vgorosito.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{vgorosito.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{vgorosito.capconint - vgorosito.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{vgorosito.capconint}</strong>
              </div>
            </div>
          ) : null}
          {sjuarez ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Silvia Juarez</strong>
              </div>
              <div className="col-2">
                <strong>{sjuarez.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{sjuarez.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{sjuarez.capconint - sjuarez.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{sjuarez.capconint}</strong>
              </div>
            </div>
          ) : null}
          {ggimenez ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Gisela Gimenez</strong>
              </div>
              <div className="col-2">
                <strong>{ggimenez.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{ggimenez.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{ggimenez.capconint - ggimenez.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{ggimenez.capconint}</strong>
              </div>
            </div>
          ) : null}

          <div className="d-flex justify-content-between text-center border-top  border-dark mt-4  ">
            <div className="col-2">
              {" "}
              <strong>TOTAL</strong>
            </div>
            <div className="col-2">
              {" "}
              <strong>{totalprestamos}</strong>
            </div>
            <div className="col-3">
              <strong>{totalcapital}</strong>
            </div>
            <div className="col-2">
              <strong>{totalcapconint - totalcapital}</strong>
            </div>
            <div className="col-3">
              <strong>{totalcapconint}</strong>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-4 mb-4" />

      <div className="mt-4 mb-4 border border-dark alert alert-primary p-4">
        <h2 className="mt-4 mb-4">
          <strong>
            <u>Prestamos Segun Estado</u>
          </strong>
        </h2>
        <div className="d-flex justify-content-between text-center border-bottom  border-dark  ">
          <div className="col-2">
            {" "}
            <strong>ESTADO</strong>
          </div>
          <div className="col-2">
            {" "}
            <strong>N° PRESTAMOS</strong>
          </div>
          <div className="col-3">
            <strong>CAPITAL PRESTADO</strong>
          </div>
          <div className="col-2">
            <strong>INTERESES GENERADOS</strong>
          </div>
          <div className="col-3">
            <strong>CAPITAL MAS INTERESES</strong>
          </div>
        </div>
        <div>
          {aprobado ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Aprobados</strong>
              </div>
              <div className="col-2">
                <strong>{aprobado.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{aprobado.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{aprobado.capconint - aprobado.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{aprobado.capconint}</strong>
              </div>
            </div>
          ) : null}
          {rechazado ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Rechazados</strong>
              </div>
              <div className="col-2">
                <strong>{rechazado.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{rechazado.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{rechazado.capconint - rechazado.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{rechazado.capconint}</strong>
              </div>
            </div>
          ) : null}
          {cancelado ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Cancelados</strong>
              </div>
              <div className="col-2">
                <strong>{cancelado.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{cancelado.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{cancelado.capconint - cancelado.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{cancelado.capconint}</strong>
              </div>
            </div>
          ) : null}
          {pendiente ? (
            <div className="d-flex justify-content-between border-bottom text-center mt-4">
              <div className="col-2">
                <strong>Pendientes</strong>
              </div>
              <div className="col-2">
                <strong>{pendiente.prestamos}</strong>
              </div>
              <div className="col-3">
                <strong>{pendiente.capital}</strong>
              </div>
              <div className="col-2">
                <strong>{pendiente.capconint - pendiente.capital}</strong>
              </div>
              <div className="col-3">
                <strong>{pendiente.capconint}</strong>
              </div>
            </div>
          ) : null}

          <div className="d-flex justify-content-between text-center border-top  border-dark mt-4  ">
            <div className="col-2">
              {" "}
              <strong>TOTAL</strong>
            </div>
            <div className="col-2">
              {" "}
              <strong>{parseInt(totalprestamosest)}</strong>
            </div>
            <div className="col-3">
              <strong>{totalcapitalest}</strong>
            </div>
            <div className="col-2">
              <strong>{totalcapconintest - totalcapitalest}</strong>
            </div>
            <div className="col-3">
              <strong>{totalcapconintest}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaInformes;
