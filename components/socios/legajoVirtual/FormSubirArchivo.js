import React, { useState } from "react";
import axios from "axios";
import toastr from "toastr";
import { ip } from "../../../config/config";

const FormSubirArchivo = ({ contrato, empresa }) => {
  const [archivos, guardarArchivos] = useState(null);
  const [error, guardarError] = useState(null);

  const handlerArchivos = async (e) => {
    e.preventDefault();

    guardarArchivos(e.target.files[0]);
  };

  const uploadArchivos = async (flag) => {
    const upload = new FormData();

    console.log(upload.values());

    upload.append("file", archivos);

    if (flag === "S") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtual/uploadfichalegajosoli/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "C") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtual/uploadfichalegajocondi/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "R") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtual/uploadfichalegajorehab/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "ReF") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtual/uploadfichalegajorecf/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "ReD") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtual/uploadfichalegajorecd/${contrato}`,
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

  const uploadArchivosM = async (flag) => {
    const upload = new FormData();

    upload.append("file", archivos);

    if (flag === "S") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtualm/uploadfichalegajosoli/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "C") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtualm/uploadfichalegajocondi/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "R") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtualm/uploadfichalegajorehab/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "ReF") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtualm/uploadfichalegajorecf/${contrato}`,
          upload
        )
        .then((res) => {
          console.log(res);
          toastr.success("Archivo Subido Con Exito", "Atencion");
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (flag === "ReD") {
      await axios
        .post(
          `${ip}api/archivos/legajovirtualm/uploadfichalegajorecd/${contrato}`,
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
    <div className="container border border-dark alert alerft-primary mt-4">
      <form className=" mt-4 alert alert-primary border border-dark p-4">
        {error && (
          <div className="mt-2 form-group alert alert-danger col-md-12 text-center text-uppercase">
            {error}
          </div>
        )}

        <h2>
          <strong>
            <u>Subir Archivos</u>
          </strong>
        </h2>

        <div className="border border-dark p-4">
          <h4 className="col-md-12 mb-4">
            {" "}
            <strong>
              <u>Carga de Ficha de ingreso y Rehabilitacion</u>
            </strong>
          </h4>

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
              {empresa === "W" ? (
                <button
                  type="submit"
                  className="mt-4 btn btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadArchivos(`S`);
                  }}
                >
                  Subir Archivos
                </button>
              ) : empresa === "M" ? (
                <button
                  type="submit"
                  className="mt-4 btn btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadArchivosM(`S`);
                  }}
                >
                  Subir Archivos
                </button>
              ) : null}
            </div>
          </div>

          {/* CONDICIONES */}

          <div className="row d-flex justify-content-center">
            <div className="mt-4 form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Subir Condiciones: </u>
                </strong>
              </label>
              <input
                type="file"
                id="fil2"
                className="form-control"
                name="file"
                // multiple
                onChange={handlerArchivos}
              />
            </div>

            <div className="mt-4 form-group col-md-4">
              {empresa === "W" ? (
                <button
                  type="submit"
                  className="mt-4 btn btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadArchivos(`C`);
                  }}
                >
                  Subir Archivos
                </button>
              ) : empresa === "M" ? (
                <button
                  type="submit"
                  className="mt-4 btn btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadArchivosM(`C`);
                  }}
                >
                  Subir Archivos
                </button>
              ) : null}
            </div>
          </div>

          {/* REHABILITACION */}

          <div className="row d-flex justify-content-center">
            <div className="mt-4 form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Subir Rehabilitacion: </u>
                </strong>
              </label>
              <input
                type="file"
                id="fil3"
                className="form-control"
                name="file"
                // multiple
                onChange={handlerArchivos}
              />
            </div>

            <div className="mt-4 form-group col-md-4">
              {empresa === "W" ? (
                <button
                  type="submit"
                  className="mt-4 btn btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadArchivos(`R`);
                  }}
                >
                  Subir Archivos
                </button>
              ) : empresa === "M" ? (
                <button
                  type="submit"
                  className="mt-4 btn btn-primary btn-block"
                  onClick={(e) => {
                    e.preventDefault();
                    uploadArchivosM(`R`);
                  }}
                >
                  Subir Archivos
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {/* RECIBO  */}

        <div className="mt-4 border border-dark row p-4">
          <h4 className="col-md-12 mb-4">
            {" "}
            <strong>
              <u>Carga de Recibos</u>
            </strong>
          </h4>

          <div className="mt-2 form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Subir Recibo (frente): </u>
              </strong>
            </label>
            <input
              type="file"
              id="fil4"
              className="form-control"
              name="file"
              // multiple
              onChange={handlerArchivos}
            />
          </div>

          <div className="mt-4 form-group col-md-2">
            {empresa === "W" ? (
              <button
                type="submit"
                className="mt-4 btn btn-primary btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  uploadArchivos(`ReF`);
                }}
              >
                Subir Archivos
              </button>
            ) : empresa === "M" ? (
              <button
                type="submit"
                className="mt-4 btn btn-primary btn-sm "
                onClick={(e) => {
                  e.preventDefault();
                  uploadArchivosM(`ReF`);
                }}
              >
                Subir Archivos
              </button>
            ) : null}
          </div>

          <div className="mt-2 form-group col-md-4">
            <label>
              <strong>
                {" "}
                <u> Subir Recibo (dorso): </u>
              </strong>
            </label>
            <input
              type="file"
              id="fil5"
              className="form-control"
              name="file"
              // multiple
              onChange={handlerArchivos}
            />
          </div>

          <div className="mt-4 form-group col-md-2">
            {empresa === "W" ? (
              <button
                type="submit"
                className="mt-4 btn btn-primary btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  uploadArchivos(`ReD`);
                }}
              >
                Subir Archivos
              </button>
            ) : empresa === "M" ? (
              <button
                type="submit"
                className="mt-4 btn btn-primary btn-sm"
                onClick={(e) => {
                  e.preventDefault();
                  uploadArchivosM(`ReD`);
                }}
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
