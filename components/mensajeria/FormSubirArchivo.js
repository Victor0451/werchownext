import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { ip } from '../../config/config'
import { registrarHistoria } from '../../utils/funciones'

const FormSubirArchivo = ({ codmail }) => {

  const [archivos, guardarArchivos] = useState(null);
  const [error, guardarError] = useState(null);

  const handlerArchivos = async (e) => {
    e.preventDefault();

    guardarArchivos(e.target.files[0]);
  };

  const uploadArchivos = async (e) => {
    e.preventDefault();

    guardarError(null)

    const fil = document.getElementById("fil");

    if (fil.files.length === 0) {
      guardarError("Debes Seleccionar Un Archivo");
    } else {
      const upload = new FormData();

      console.log(upload.values());

      upload.append("file", archivos);

      await axios
        .post(
          `${ip}api/archivos/mails/uploadadjunto/${codmail}`,
          upload
        )
        .then((res) => {
          if (res.status === 200) {
            toastr.success("Archivo Subido Con Exito", "Atencion");

            // let accion = `Se subio un archivo al legajo virtual del prestamo perteneciente al socio ${contrato}`

            // registrarHistoria(accion, user.usuario)

          }

        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <form className=" ">
      <div className="row d-flex  justify-content-center">
        <div className="form-group col-md-4">

          <input
            type="file"
            id="fil"

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

        <div className=" form-group col-md-4">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={uploadArchivos}
          >
            Subir Archivos
          </button>
        </div>
      </div>
    </form>

  );
};

export default FormSubirArchivo;
