import React from "react";
import Spinner from "../../../layout/Spinner";

const FormNuevoVisitante = ({
  servicio,
  apellidoRef,
  nombreRef,
  dniRef,
  parentezcoRef,
  telefonoRef,
  temperaturaRef,
}) => {
  if (!servicio) return <Spinner />;

  return (
    <div className="container mt-4 border border-dark list">
      <h2 className="">
        <strong>
          <u>Ingresar Visitantes del servicio:</u> {servicio.idservicio} -{" "}
          {servicio.apellido}, {servicio.nombre}
        </strong>
      </h2>

      <div className="mt-4 border border-dark p-4">
        <div className="row">
          <div className="form-group col-md-4 ">
            <label>
              <strong>
                {" "}
                <u>Apellido: </u>
              </strong>
            </label>
            <input type="text" className="form-control" ref={apellidoRef} />
          </div>

          <div className="form-group col-md-4 ">
            <label>
              <strong>
                {" "}
                <u>Nombre: </u>
              </strong>
            </label>
            <input type="text" className="form-control" ref={nombreRef} />
          </div>

          <div className="form-group col-md-4 ">
            <label>
              <strong>
                {" "}
                <u>DNI: </u>
              </strong>
            </label>
            <input type="number" className="form-control" ref={dniRef} />
          </div>

          <div className="form-group col-md-4 ">
            <label>
              <strong>
                {" "}
                <u>Parentezco: </u>
              </strong>
            </label>
            <input type="text" className="form-control" ref={parentezcoRef} />
          </div>

          <div className="form-group col-md-4 ">
            <label>
              <strong>
                {" "}
                <u>Telefono: </u>
              </strong>
            </label>
            <input type="number" className="form-control" ref={telefonoRef} />
          </div>

          <div className="form-group col-md-4 ">
            <label>
              <strong>
                {" "}
                <u>Temperatura: </u>
              </strong>
            </label>
            <input type="text" className="form-control" ref={temperaturaRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNuevoVisitante;
