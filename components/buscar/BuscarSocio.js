import React from "react";

const BuscarSocio = () => {
  return (
    <div className="container">
      <h2>Buscar Socio</h2>
      <form className=" mt-4 border p-2">
        <div className="row">
          <div className="form-group col-md-6">
            <label>Buscar Socio</label>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar Socio"
            />
          </div>

          <div className="col-md-6">
            <button className="btn btn-primary  btn-block mt-4">Buscar</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default BuscarSocio;
