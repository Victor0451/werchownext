import React from "react";

const FormMapaRec = ({
  listado,
  recRef,
  rec2Ref,
  desdeRef,
  hastaRef,
  anoRef,
  accionRef,
  consultarMapa,
  consultarMapa2,
  error,
  datatoggle,
  datatarget,

}) => {
  return (
    <div className="container mt-4 alert alert-primary border border-dark p-4">
      <h3 className=" mb-4 ">
        <strong>
          <u>Mapeo Acciones Recuperadoras por periodo</u>
        </strong>
      </h3>
      <div className="row  border border-dark p-2">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Recuperadoras</u>
            </strong>
          </label>
          <select className="custom-select" ref={recRef}>
            <option defaultValue="no">Selecciona un asesor</option>
            {listado ? (
              <>
                {listado.map((rec, index) => (
                  <option key={index} value={rec.value}>
                    {rec.label}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>
        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Desde</u>
            </strong>
          </label>
          <input className="form-control" type="date" ref={desdeRef} />
        </div>

        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Hasta</u>
            </strong>
          </label>
          <input className="form-control" type="date" ref={hastaRef} />
        </div>

        <div className="col-md-12 mt-1 ">
          <button
            className="mt-4 btn btn-block btn-primary"
            data-toggle={datatoggle}
            data-target={datatarget}
            onClick={consultarMapa}
          >
            Buscar
          </button>
        </div>
      </div>
      <br />
      <h3 className="mt-4 mb-4 ">
        <strong>
          <u>Mapeo Acciones Recuperadoras anual, por mes y accion</u>
        </strong>
      </h3>

      <div className="row  border border-dark p-2">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Recuperadoras</u>
            </strong>
          </label>
          <select className="custom-select" ref={rec2Ref}>
            <option defaultValue="no">Selecciona un asesor</option>
            {listado ? (
              <>
                {listado.map((rec, index) => (
                  <option key={index} value={rec.value}>
                    {rec.label}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>

        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Accion</u>
            </strong>
          </label>
          <select className="custom-select" ref={accionRef}>
            <option defaultValue="no">Selecciona un año</option>
            <option value="ADELANTO">Adelanto</option>
            <option value="AT1">AT1</option>
            <option value="BLANQUEO">Blanqueo</option>
            <option value="PRESTAMO">Prestamo</option>
            <option value="RECUPERACION">Recuperacion</option>
            <option value="REINCIDENTE">Reincidente</option>
            <option value="TRASPASO VISA">Traspaso Visa</option>
            <option value="VENTA">Venta</option>
          </select>
        </div>

        <div className="col-md-4 ">
          <label>
            <strong>
              <u>Año</u>
            </strong>
          </label>
          <select className="custom-select" ref={anoRef}>
            <option defaultValue="no">Selecciona un año</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className="col-md-12 mt-1 ">
          <button
            className="mt-4 btn btn-block btn-primary"
            onClick={consultarMapa2}
            data-toggle={datatoggle}
            data-target={datatarget}
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

export default FormMapaRec;
