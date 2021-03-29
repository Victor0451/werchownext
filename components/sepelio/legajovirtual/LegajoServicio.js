import React, { useState } from "react";
import Spinner from "../../layout/Spinner";
import axios from "axios";
import toastr from "toastr";
import moment from 'moment'
import { ip } from '../../../config/config'

const LegajoServicio = ({ archivos, id, servicio, }) => {
  if (!servicio) {
    return <Spinner />;
  } else if (!archivos) {
    return <Spinner />;
  }

  const [archi, guardarArchi] = useState(null);

  const eliminarArchivos = async (id, flag) => {
    console.log(id);
    await axios
      .delete(
        `${ip}api/archivos/legajovirtualprestamos/eliminararchivos/${id}`
      )
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
    <div className="container alert alert-primary border border-dark p-4 mt-4">

      <div className=" border border-dark p-4">
        <div className="row d-felx justify-content-between p-2">
          <h1 className="  mb-4 text-center">
            <strong>
              <u>Legajo Virtual Del Servicio</u>: {id}
            </strong>
          </h1>
          <div>
            <a
              href="/sepelio/servicios/listado"
              className="btn btn-danger text-white"
            >
              Volver Al Listado
          </a>
          </div>
        </div>

        <div className="mt-4 alert alert-primary border border-dark p-4">
          <div className="d-flex justify-content-between">
            <h2 className="  col-8">
              <strong>
                <u>Datos del Extinto</u>
              </strong>
            </h2>
            <div className="  col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Empresa"
                name="responsable"
                defaultValue={moment(servicio.fecha_recepcion).format(
                  "DD/MM/YYYY HH:mm:ss"
                )}
                readOnly
              />
            </div>
          </div>

          <hr className="" />

          <div className="row mt-4">
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Empresa</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Empresa"
                name="responsable"
                defaultValue={servicio.empresa}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-2">
              <label>
                <strong>
                  <u>N° Socio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="dni"
                defaultValue={servicio.contrato}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-2">
              <label>
                <strong>
                  <u>DNI</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="DNI"
                name="dni"
                defaultValue={servicio.dni}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Apellido</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="apellido"
                defaultValue={servicio.apellido}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Nombre</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="nombre"
                defaultValue={servicio.nombre}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Edad</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="responsable"
                defaultValue={servicio.edad}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Fecha de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Fallecimiento"
                name="fechafallecimiento"
                defaultValue={moment(servicio.fecha_fallecimiento).format(
                  "DD/MM/YYYY"
                )}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Lugar de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Lugar de Fallecimiento"
                name="lugarfallecimiento"
                defaultValue={servicio.lugar_fallecimiento}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Altura</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Altura"
                name="altura"
                defaultValue={servicio.altura}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Peso</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Peso"
                name="peso"
                defaultValue={servicio.peso}
                readOnly
              />
            </div>
          </div>
        </div>

        <hr />

        <div className="alert alert-primary border border-dark p-4">
          <h2 className="">
            <strong>
              <u>Detalles del Servicio</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Tipo de Servicio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Tipo de Servicio"
                name="tiposervicio"
                defaultValue={servicio.tipo_servicio}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Motivo</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Motivo"
                name="motivo"
                defaultValue={servicio.motivo}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Retiro Del Extinto</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Retiro Extinto"
                name="retiro"
                defaultValue={servicio.retiro}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Casa Mortuaria</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Casa Mortuaria"
                name="casamortuaria"
                defaultValue={servicio.casa_mortuaria}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Fecha de Inumacion</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Fecha de Inumacion"
                name="fechainhumacion"
                defaultValue={moment(servicio.fecha_inumacion).format(
                  "DD/MM/YYYY"
                )}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Hora de Inumacion</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="hora de Inumacion"
                name="horainhumacion"
                defaultValue={servicio.hora_inhumacion}
                readOnly
              />
            </div>

            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Cementerio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Cementerio"
                name="cementerio"
                defaultValue={servicio.cementerio}
                readOnly
              />
            </div>
            <div className="col-md-4 mt-2">
              <label>
                <strong>
                  <u>Solicitado Por:</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                defaultValue={servicio.solicitado}
                readOnly
              />
            </div>
            <div className="form-group col-md-4 mt-2">
              <label>
                <strong>
                  {" "}
                  <u> Parentesco: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                defaultValue={servicio.parentesco}
                readOnly
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="alert alert-primary border border-dark p-4">
          <h2 className=" ">
            <strong>
              <u>Detalles del ataud</u>
            </strong>
          </h2>

          <div className="row mt-4 d-flex justify-content-center">
            <div className="form-group col-md-6 ">
              <label>
                <strong>
                  {" "}
                  <u> Ataud: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                // defaultValue={ataud.nombre}
                readOnly
              />
            </div>

            <div className="form-group col-md-2 ">
              <label>
                <strong>
                  {" "}
                  <u> Tipo: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Solicitado Por"
                name="solicitado"
                //defaultValue={ataud.tipo}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>



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

export default LegajoServicio;
