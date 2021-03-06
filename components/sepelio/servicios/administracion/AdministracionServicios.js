import React from "react";
import ListadoServiciosSinImpactar from "./ListadosServiciosSinImapctar";

const AdministracionServicios = ({ listado, actualizar }) => {
  if (!listado)
    return (
      <div className="alert alert-info text-center text-uppercase mt-4">
        Todos los servicios estan impactados
      </div>
    );

  return (
    <div className="container mt-4 border border-dark alert alert-primary p-4">
      <div className="row">
        <div className="col-md-6">
          <h3>
            <strong>
              <u>Servicios Sin Impactar En el Fox</u>
            </strong>
          </h3>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-block btn-sm btn-info"
            onClick={actualizar}
          >
            Actualizar Listado
          </button>
        </div>
      </div>

      <ListadoServiciosSinImpactar listado={listado} />
    </div>
  );
};

export default AdministracionServicios;
