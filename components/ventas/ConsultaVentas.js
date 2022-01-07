import React from "react";
import MesSelect from "react-select";
import AnoSelect from "react-select";
import { mesventas, anosventas } from "../../array/array";

const ConsultaVentas = ({ errores, ventas, buscarVentas, handleChange }) => {
  return (
    <div className="container border border-dark list mt-4 p-4">

      <h2 className="mb-4">
        <strong>
          <u> Consutas de ventas realizadas por periodo</u>:
        </strong>
      </h2>

      <div className="mt-4 mb-4 row border border-dark p-4">
        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Tipo De Cartera: </u>
            </strong>
          </label>
          <MesSelect
            options={mesventas}
            placeholder={"Seleccionar Mes"}
            onChange={(value) => handleChange(value, "mes")}
          />
        </div>
        <div className="form-group col-md-4">
          <label>
            <strong>
              {" "}
              <u> Tipo De Cartera: </u>
            </strong>
          </label>
          <AnoSelect
            options={anosventas}
            placeholder={"Seleccionar Año"}
            onChange={(value) => handleChange(value, "ano")}
          />
        </div>
        <div className="mt-4 form-group col-md-4">
          <button
            to={"#"}
            className="btn btn-primary btn-block"
            onClick={buscarVentas}
          >
            Buscar
          </button>
        </div>

        {errores && (
          <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
            {errores}
          </div>
        )}
      </div>

      <div>
        {/* <ListadoConsulta
          listadoventas={listadoventas}
          listadoventasm={listadoventasm}
          desde={desde}
          hasta={hasta}
        /> */}
      </div>
    </div>
  );
};

export default ConsultaVentas;
