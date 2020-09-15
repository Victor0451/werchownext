import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";

const FormSubirArchivo = ({ contrato, empresa }) => {
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
          `http://190.231.32.232:5002/api/archivos/legajovirtual/uploadfichalegajo/${contrato}`,
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

  const uploadArchivosM = async (e) => {
    e.preventDefault();

    const fil = document.getElementById("fil");

    if (fil.files.length === 0) {
      guardarError("Debes Seleccionar Un Archivo");
    } else {
      const upload = new FormData();

      upload.append("file", archivos);

      await axios
        .post(
          `http://190.231.32.232:5002/api/archivos/legajovirtualm/uploadfichalegajo/${contrato}`,
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
    <div className="container">
      <form className=" mt-4 alert alert-primary border border-dark p-4">
        <h2>
          <strong>
            <u>Subir Archivos</u>
          </strong>
        </h2>

        <div className="row d-flex justify-content-center">
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
              className="form-control"
              name="file"
              // multiple
              onChange={handlerArchivos}
            />

            {error && (
              <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
                {error}
              </div>
            )}
          </div>

          <div className="mt-4 form-group col-md-4">
            {empresa === "W" ? (
              <button
                type="submit"
                className="mt-4 btn btn-primary btn-block"
                onClick={uploadArchivos}
              >
                Subir Archivos
              </button>
            ) : empresa === "M" ? (
              <button
                type="submit"
                className="mt-4 btn btn-primary btn-block"
                onClick={uploadArchivosM}
              >
                Subir Archivos
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSubirArchivo;
