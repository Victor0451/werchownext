import React from "react";
import ListadoDatos from "./ListadoDatos";

const FormDatos = ({
  apellidoRef,
  nombreRef,
  dniRef,
  parentezcoRef,
  telefonoRef,
  motivoRef,
  operadoratencionRef,
  regDatos,
  listado,
}) => {
  return (
    <div className="mt-4 container border border-dark list p-4">
      <div className="row">
        <div className="col-md-8">
          <h2 className="mb-4">
            <strong>
              <u>Toma de Datos</u>
            </strong>
          </h2>
        </div>

        <div className="col-md-4 ">
          <button
            className="btn btn-info btn-sm"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Ver Datos Cargados
          </button>
        </div>
      </div>

      <div className="row border border-dark p-4">
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

        <div className="form-group  col-md-4">
          <label>
            <strong>
              <u>Operador Atencion</u>
            </strong>
          </label>
          <select className="custom-select" ref={operadoratencionRef}>
            <option defaultValue="no">Selecciona un Operador</option>
            <option value="jcmorales">Juan Carlos Morales</option>
            <option value="mgalian">Maria Galian</option>
            <option value="ggimenez">Gisela Gimenez</option>
          </select>
        </div>

        <div className="form-group col-md-12 ">
          <label>
            <strong>
              {" "}
              <u>Motivo de Consulta: </u>
            </strong>
          </label>
          <textarea rows="3" className="form-control" ref={motivoRef} />
        </div>
      </div>
      <div className="mt-4 row border border-dark p-4">
        <div className="col-md-6">
          <button className="btn btn-primary btn-block" onClick={regDatos}>
            Registrar
          </button>
        </div>
        <div className="col-md-6">
          <a className="btn btn-danger btn-block" href="/">
            Cancelar
          </a>
        </div>
      </div>
      <ListadoDatos listado={listado} />
    </div>
  );
};

export default FormDatos;
