import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { ip } from '../../../config/config'

const FormSubirArchivo = ({ contrato }) => {
  const [archivos, guardarArchivos] = useState(null);
  const [error, guardarError] = useState(null);

  const handlerArchivos = async (e) => {
    e.preventDefault();

    guardarArchivos(e.target.files[0]);
  };

  const uploadArchivos = async (e) => {
    e.preventDefault();

    const fil = document.getElementById("fil");

    if (fil.files.length === 0) {
      guardarError("Debes Seleccionar Un Archivo");
    } else {
      const upload = new FormData();

      console.log(upload.values());

      upload.append("file", archivos);

      await axios
        .post(
          `${ip}api/archivos/legajovirtualservicios/uploadfichalegajo/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="container border border-dark p-4 list mt-4">
      <h1>
        <strong>
          <u>Crear Legajo Virtual</u>
        </strong>
      </h1>

      <form className=" mt-4 border border-dark p-4">
        <div className="d-flex justify-content-between mb-4">
          <h2>
            <strong>
              <u>Subir Archivos</u>
            </strong>
          </h2>
          <a
            href="/sepelio/servicios/listado"
            className="btn btn-danger text-white"
          >
            Volver Al Listado
          </a>
        </div>
        <div className="row d-flex border border-dark justify-content-center">
          <div className="mt-4 form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Subir Archivo: </u>
              </strong>
            </label>
            <input
              type="file"
              id="fil"
              accept=".png, .jpg, .jpeg"
              className="form-control"
              name="file"
              onChange={handlerArchivos}
            />

            {error && (
              <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                {error}
              </div>
            )}
          </div>

          <div className="mt-4 form-group col-md-4">
            <button
              type="submit"
              className="mt-4 btn btn-primary btn-block"
              onClick={uploadArchivos}
            >
              Subir Archivos
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSubirArchivo;
