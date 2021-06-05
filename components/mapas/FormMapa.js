import React from "react";

const FormMapa = ({
  error,
  listado,
  asesorRef,
  anoRef,
  consultarMapa,
  datatoggle,
  datatarget,
}) => {
  return (
    <div className="container mt-4 alert alert-primary border border-dark p-4">
      <h2 className=" mb-4 ">
        <strong>
          <u>Mapeo Ventas del asesor por mes</u>
        </strong>
      </h2>
      <div className="row  border border-dark p-2">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Asesores</u>
            </strong>
          </label>
          <select className="custom-select" ref={asesorRef}>
            <option selected value="no">Selecciona un asesor</option>
            {listado ? (
              <>
                {listado.map((asesor) => (
                  <option value={asesor.value}>{asesor.label}</option>
                ))}
              </>
            ) : null}
          </select>
        </div>
        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Año</u>
            </strong>
          </label>
          <select className="custom-select" ref={anoRef}>
            <option selected value="no">Selecciona un año</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="col-md-4 mt-1 ">
          <button
            className="mt-4 btn btn-block btn-primary"
            onClick={consultarMapa}
            data-target={datatarget}
            data-toggle={datatoggle}
          >
            Buscar
          </button>
        </div>
      </div>
      {error ? (
        <div className="alert alert-danger text-center text-uppercase m-4">
          {error}
        </div>
      ) : null}
    </div>
  );
};

export default FormMapa;
