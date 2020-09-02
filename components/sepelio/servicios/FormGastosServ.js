import React from "react";

const FormGastosServ = () => {
  return (
    <div>
      <div className="  p-4">
        <h2 className="mb-4">
          <strong>
            <u>Gastos del Servicio</u>
          </strong>
        </h2>

        <div className="row mt-4 border border-dark p-4">
          <div className="form-group mt-4 col-md-4">
            <label>Fecha</label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlTextarea1"
              //ref={fechaDetalleRef}
            />
          </div>

          <div className="form-group mt-4 col-md-4">
            <label>Hs Inicio</label>
            <input
              type="time"
              className="form-control"
              id="exampleFormControlTextarea1"
              // ref={fechaDetalleRef}
            />
          </div>

          <div className="form-group mt-4 col-md-4">
            <label>Hs Fin</label>
            <input
              type="time"
              className="form-control"
              id="exampleFormControlTextarea1"
              // ref={fechaDetalleRef}
            />
          </div>

          <div className="form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Tipo de Gasto: </u>
              </strong>
            </label>
            <select className="custom-select">
              <option selected value="no">
                Elige una Opcion
              </option>
              <option value="cc">Retiro Cuerpo</option>
              <option value="sv">Instalacion</option>
              <option value="sv">Tramites</option>
              <option value="sv">Funebre</option>
              <option value="sv">Portacorona</option>
              <option value="sv">Diario</option>
              <option value="sv">Registro Civil</option>
              <option value="sv">Impuesto Cementerio</option>
              <option value="sv">Parcela</option>
              <option value="sv">Comida</option>
              <option value="sv">Formol</option>
              <option value="sv">Movilidad</option>
              <option value="sv">Coffee</option>
              <option value="sv">Auto 1</option>
              <option value="sv">Auto 2</option>
            </select>
          </div>

          <div className="form-group col-md-4">
            <label>Importe</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlTextarea1"
              //ref={fechaDetalleRef}
            />
          </div>

          <div className="form-group mt-4 col-md-12">
            <label>Observaciones</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            //  ref={observacionRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormGastosServ;
