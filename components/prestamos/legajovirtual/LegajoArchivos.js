import React, { useState } from "react";
import Spinner from "../../layout/Spinner";
import axios from "axios";
import toastr from "toastr";
import { ip } from "../../../config/config";

const LegajoArchivos = ({ archivos, id, ficha, prestamo, fl }) => {
  if (!ficha) {
    return <Spinner />;
  } else if (!archivos) {
    return <Spinner />;
  }

  const [archi, guardarArchi] = useState(null);

  const eliminarArchivos = async (id, flag) => {
    console.log(id);
    await axios
      .delete(`${ip}api/archivos/legajovirtualprestamos/eliminararchivos/${id}`)
      .then((res) => {
        if (res.status === 200) {
          toastr.success("El archivo se elimino", "ATENCION");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    guardarFlag(true);
  };

  return (
    <div className="container list border border-dark p-4 mt-4">
      <div className="row border border-dark p-4">
        <h2 className="mt-4 mb-4 col-8">
          <strong>
            <u>Legajo Virtual N°:</u> "{id}"
          </strong>
        </h2>

        {fl === "ap" ? (
          <a
            href="/prestamos/aprobarprestamos"
            className="btn btn-primary  mt-4 text-white col-md-4"
          >
            Volver Al Listado
          </a>
        ) : (
          <a
            href="/prestamos/imprimircaratula"
            className="btn btn-primary  mt-4 text-white col-md-4"
          >
            Volver Al Listado
          </a>
        )}
      </div>

      <form className="border border-dark p-4 mt-4">
        <h2 className="mb-4">
          <strong>
            <u>Informacion Del Afiliado</u>
          </strong>
        </h2>

        <div className="d-flex justify-content-between mt-4 ">
          <div className="row mb-4">
            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> N° Socio: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.CONTRATO}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> DNI: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.NRO_DOC}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Apellido: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.APELLIDOS}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Nombre: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.NOMBRES}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Calle: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.CALLE}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> N°: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.NRO_CALLE}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Barrio: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.BARRIO}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Localidad: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.LOCALIDAD}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Telefono: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.TELEFONO}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> MOVIL: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={ficha.MOVIL}
                readOnly
              />
            </div>
          </div>
        </div>
      </form>

      <form className="border border-dark p-4 mt-4">
        <h2 className="mb-4">
          <strong>
            <u>Informacion Del Sub. Cont. Familiar</u>
          </strong>
        </h2>

        <div className="mt-4 ">
          <div className="row mb-4">
            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Fecha de Solicitud: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={prestamo.ptm_fechasol}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Caspital: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={prestamo.ptm_prestamo}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Cuotas: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={prestamo.ptm_cuotas}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Valor De Las Cuotas: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={prestamo.ptm_valcuota}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Capital Mas Intereses: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={prestamo.ptm_valcuota * prestamo.ptm_cuotas}
                readOnly
              />
            </div>

            <div className="form-group col-md-4">
              <label>
                <strong>
                  {" "}
                  <u> Renovacion: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue={prestamo.ptm_renov}
                readOnly
              />
            </div>
          </div>
        </div>
      </form>

      <div className=" col-md-12 mt-4 mb-4 border border-dark p-4">
        <h2 className="mt-4 mb-4 col-8">
          <strong>
            <u>Archivos:</u>
          </strong>
        </h2>
        <div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4">
          Haciendo click en la imagen, se vizualiza en tamaño real
        </div>

        <div className=" row  row d-flex justify-content-center text-center  text-dark   p-4">
          {archivos.map((archivo, index) => (
            <div key={index} className=" mt-4">
              <div className="col-md-12 border border-dark p-4 mr-1">
                {/* <strong>
                  <u>{archivo.archivo}</u>
                </strong> */}

                <img
                  src={`${ip}api/archivos/legajovirtualprestamos/archivo/${archivo.archivo}`}
                  className="archivos p-4 "
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => guardarArchi(archivo.archivo)}
                />

                <br />
                <div className="">
                  <a
                    className="btn btn-primary mr-1 "
                    href={`${ip}api/archivos/legajovirtualprestamos/descargararchivo/${archivo.archivo}`}
                  >
                    <i className="fa fa-download" aria-hidden="true"></i>
                  </a>
                  <button
                    className="btn btn-danger mr-1"
                    onClick={() => eliminarArchivos(archivo.archivo, index)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* MODAL IMAGEN AMPLIA */}

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <u>{archi}</u>
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <img
                src={`${ip}api/archivos/legajovirtualprestamos/archivo/${archi}`}
                classNameName="archimodal p-4  "
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegajoArchivos;
