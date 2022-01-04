import React from "react";

const BuscarCampaña = ({
  listado,
  recRef,
  campRef,
  emprRef,
  consultarMapa,
  errores,
}) => {
  return (
    <div className="container mt-4 border border-dark list p-4">
      <h2 className="mb-4">
        <strong>
          <u>Mapeo de Campañas Activas</u>
        </strong>
      </h2>

      <div className="row border border-dark p-4">
        <div className="col-md-3">
          <label>
            <strong>
              <u>Recuperadoras</u>
            </strong>
          </label>
          <select className="custom-select" ref={recRef}>
            <option defaultValue="no">Selecciona un Recuperador</option>
            {listado ? (
              <>
                {listado.map((rec, index) => (
                  <option key={index} value={rec.label}>
                    {rec.label}
                  </option>
                ))}
              </>
            ) : null}
          </select>
        </div>

        <div className="col-md-3">
          <label>
            <strong>
              <u>Campaña</u>
            </strong>
          </label>
          <select className="custom-select" ref={campRef}>
            <option defaultValue="no">Selecciona una Campaña</option>
            <option value="Atrasados">AT1</option>
            <option value="Atrasados2">AT2</option>
            <option value="Recuperacion">Recuperacion</option>
            <option value="Reincidentes">Reincidente</option>
            <option value="Policia">Policia</option>
          </select>
        </div>

        <div className="col-md-3">
          <label>
            <strong>
              <u>Empresa</u>
            </strong>
          </label>
          <select className="custom-select" ref={emprRef}>
            <option defaultValue="no">Selecciona una Empresa</option>
            <option value="werchow">Werchow</option>
            <option value="mutual">Mutual</option>
          </select>
        </div>

        <div className="col-md-3">
          <button
            className="mt-4 btn btn-block btn-primary"
            onClick={consultarMapa}
          >
            Buscar
          </button>
        </div>

        {errores ? (
          <div className="mt-4 col-md-12">
            <div className="alert alert-danger border border-dark text-center text-uppercase">
              {errores}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BuscarCampaña;
