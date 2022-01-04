import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { ip } from "../../../config/config";

const FormSubirArchivo = ({ id, traerArchivos }) => {
  const [archivos, guardarArchivos] = useState(null);
  const [error, guardarError] = useState(null);

  const handlerArchivos = async (e) => {
    e.preventDefault();

    guardarArchivos(e.target.files[0]);
  };

  const uploadArchivos = async () => {
    const upload = new FormData();

    console.log(upload.values());

    upload.append("file", archivos);

    await axios
      .post(
        `${ip}api/archivos/legajovirtualpersonal/uploadfichalegajo/${id}`,
        upload
      )
      .then((res) => {
        console.log(res.data);
        toastr.success("Archivo Subido Con Exito", "Atencion");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container border border-dark  mt-4">
      <form className=" mt-4 p-4">
        {error && (
          <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
            {error}
          </div>
        )}

        <h2>
          <strong>
            Subir Archivos
          </strong>
        </h2>

        {/* SOLICITUD */}

        <div className="row d-flex justify-content-center">
          <div className="mt-4 form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Subir Solicitud: </u>
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
          </div>

          <div className="mt-4 form-group col-md-4">
            <button
              type="submit"
              className="mt-4 btn btn-primary btn-block"
              onClick={(e) => {
                e.preventDefault();
                uploadArchivos();
              }}
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
