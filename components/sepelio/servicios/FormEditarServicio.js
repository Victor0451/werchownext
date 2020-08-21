import React from "react";
import axios from "axios";
import moment from "moment";
import toastr from "toastr";
import Router from "next/router";
import Spinner from "../../layout/Spinner";

const FormEditarServicio = ({ servicio }) => {
  if (!servicio) return <Spinner />;

  let contratoRef = React.createRef();
  let empresaRef = React.createRef();
  let dniRef = React.createRef();
  let apellidoRef = React.createRef();
  let nombreRef = React.createRef();
  let edadRef = React.createRef();
  let fechafallecimientoRef = React.createRef();
  let lugarfallecimientoRef = React.createRef();
  let casamortuariaRef = React.createRef();
  let fechainhumacionRef = React.createRef();
  let horainhumacionRef = React.createRef();
  let cementerioRef = React.createRef();
  let alturaRef = React.createRef();
  let pesoRef = React.createRef();
  let motivoRef = React.createRef();
  let retiroRef = React.createRef();
  let solicitadoRef = React.createRef();
  let parentescoRef = React.createRef();

  const editarServicio = async (e) => {
    e.preventDefault();

    const editServicio = {
      contrato: servicio.contrato,
      empresa: empresaRef.current.value,
      dni: dniRef.current.value,
      apellido: apellidoRef.current.value,
      nombre: nombreRef.current.value,
      edad: edadRef.current.value,
      fecha_fallecimiento: fechafallecimientoRef.current.value,
      lugar_fallecimiento: lugarfallecimientoRef.current.value,
      tipo_servicio: servicio.tipo_servicio,
      casa_mortuaria: casamortuariaRef.current.value,
      fecha_inhumacion: fechainhumacionRef.current.value,
      hora_inhumacion: horainhumacionRef.current.value,
      cementerio: cementerioRef.current.value,
      altura: alturaRef.current.value,
      peso: pesoRef.current.value,
      motivo: motivoRef.current.value,
      retiro: retiroRef.current.value,
      solicitado: solicitadoRef.current.value,
      parentesco: parentescoRef.current.value,
      fecha_recepcion: servicio.fecha_recepcion,
      sucursal: servicio.sucursal,
      estado: 1,
    };

    console.log(editServicio);

    await axios
      .put(
        `http://190.231.32.232:5002/api/sepelio/servicio/editarservicio/${servicio.idservicio}`,
        editServicio
      )
      .then((res) => {
        if ((res.status = 200)) {
          toastr.success("Servicio editado con exito", "ATENCION");

          Router.push({
            pathname: "/sepelio/servicios/impresion",
            query: { id: servicio.dni },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4 alert alert-primary border border-dark p-4">
      <form className=" p-4" onSubmit={editarServicio}>
        <h1 className="mt-4 mb-4">
          <strong>
            <u>Formulario De Solicitud De Servicio</u>
          </strong>
        </h1>

        <div className=" border border-dark p-4">
          <div className="d-flex justify-content-between">
            <h2 className="mt-4 mb-4 col-8">
              <strong>
                <u>Datos del Extinto</u>
              </strong>
            </h2>
            <div className="mt-4 mb-4 col-4">
              <label>
                <strong>
                  <u>Fecha de Recepcion</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Empresa"
                name="responsable"
                defaultValue={servicio.fecha_recepcion}
                readOnly
              />
            </div>
          </div>

          <hr className="mt-4 mb-4" />

          <div className="row">
            <div className="col-md-4 mt-4 mb-4">
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
                ref={empresaRef}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>N° Socio</u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Contrato"
                name="contrato"
                ref={contratoRef}
                defaultValue={servicio.contrato}
                readOnly
              />
            </div>

            <div className="form-group col-md-4 mt-4 mb-4">
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
                ref={dniRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
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
                ref={apellidoRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
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
                ref={nombreRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
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
                ref={edadRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha de Fallecimiento</u>
                </strong>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha de Fallecimiento"
                name="fechafallecimiento"
                defaultValue={servicio.fecha_fallecimiento}
                ref={fechafallecimientoRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
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
                ref={lugarfallecimientoRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
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
                value={servicio.altura}
                ref={alturaRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
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
                ref={pesoRef}
              />
            </div>
          </div>
        </div>

        <hr className="mt-4 mb-4" />

        <div className="border border-dark p-4">
          <h2 className="mt-4 mb-4">
            <strong>
              <u>Detalles del Servicio</u>
            </strong>
          </h2>
          <div className="row mt-4">
            <div className="col-md-4 mt-4 mb-4">
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
            <div className="col-md-4 mt-4 mb-4">
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
                ref={motivoRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
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
                ref={retiroRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
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
                ref={casamortuariaRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Fecha de Inumacion</u>
                </strong>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Fecha de Inumacion"
                name="fechainhumacion"
                defaultValue={servicio.fecha_inhumacion}
                ref={fechainhumacionRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
              <label>
                <strong>
                  <u>Hora de Inumacion</u>
                </strong>
              </label>
              <input
                type="time"
                className="form-control"
                placeholder="hora de Inumacion"
                name="horainhumacion"
                defaultValue={servicio.hora_inhumacion}
                ref={horainhumacionRef}
              />
            </div>

            <div className="col-md-4 mt-4 mb-4">
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
                ref={cementerioRef}
              />
            </div>
            <div className="col-md-4 mt-4 mb-4">
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
                ref={solicitadoRef}
              />
            </div>
            <div className="form-group col-md-4 mt-4">
              <label>
                <strong>
                  {" "}
                  <u> Parentesco: </u>
                </strong>
              </label>
              <select
                className="custom-select"
                name="parentesco"
                defaultValue={servicio.parentesco}
                ref={parentescoRef}
              >
                <option selected value="no">
                  Elige una Opcion
                </option>
                <option value="conyugue">Cónyugue</option>
                <option value="hijo/a">Hijo/a</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary btn-block mt-4 col-5 mr-1"
          >
            Registrar
          </button>
          <a
            href="/sepelio/servicios/listado"
            className="btn btn-danger btn-block border border-dark mt-4 col-5"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormEditarServicio;
