import React, { useState } from "react";
import FormAltaServicio from "./FormAltaServicio";
import FormAltaServicioPart from "./FormAltaServicioPart";
import toastr from "toastr";
import axios from "axios";

const AltaServicio = ({
  selcaso,
  nuevoServicio,
  // DETALLES EXTINTO

  empresaRef,
  dniRef,
  apellidoRef,
  nombreRef,
  edadRef,
  calleRef,
  numeroRef,
  barrioRef,
  fechaFallecimientoRef,
  lugarFallecimientoRef,
  tipoServicioRef,
  casaMortuariaRef,
  fechaInumacionRef,
  horaInumacionRef,
  cementerioRef,
  // DETALLES SERVICIO
  caparRef,
  avisoRef,
  tipoAvisoRef,
  autoDueloRef,
  tipoAutoDuelRef,
  placaRef,
  carrozaFuRef,
  tipoCarrozaFuRef,
  salaRef,
  tipoSalaRef,
  tramitesRef,
  tipoTramitesRef,
  cochePortaRef,
  tipoCochePortaRef,
  retiroCuerpoRef,
  tipoRetiroCuerpoRef,
  trasladoRef,
  tipoTrasladoRef,
  observacionRef,
  cremacionRef,
  // DETALLES ATAUD
  tipoAtaudRef,
  caracteristicaAtaudRef,
  descriart,
  codigo,
  caracteristicas,
  uso,
  usoAtaudRef,
  // PRECIO SERV
  precioserv,
}) => {
  let contratoRef = React.createRef();

  const [empresa, guardarEmpresa] = useState(null);
  const [error, guardarError] = useState(null);
  const [ficha, guardarFicha] = useState(null);
  const [particular, guardarParticular] = useState(null);

  const buscarTitular = async (e) => {
    e.preventDefault();

    guardarEmpresa("Werchow");
    let contrato = contratoRef.current.value;
    console.log(contrato);
    if (contrato !== "") {
      await axios
        .get(
          `http://190.231.32.232:5002/api/sepelio/servicio/consultarficha/${contrato}`
        )
        .then((res) => {
          if (res.data) {
            let ficha = res.data;
            guardarFicha(ficha);
          } else if (!res.data) {
            axios
              .get(
                `http://190.231.32.232:5002/api/sepelio/servicio/consultarfichaadh/${contrato}`
              )
              .then((res) => {
                if (res.data) {
                  let ficha = res.data;
                  guardarFicha(ficha);
                } else if (!res.data) {
                  toastr.error(
                    "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                    "ATENCION"
                  );
                }
                let ficha = res.data;
                guardarFicha(ficha);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (contrato === "") {
      let error = "Debes ingresar un numero de socio";
      guardarError(error);
    }
  };

  const servicioParticular = () => {
    guardarParticular(true);
    guardarFicha(null);
  };

  return (
    <div className="container">
      <div className="alert alert-primary border border-dark mt-4 p-4">
        <h2 className="mt-4 mb-4">
          <strong>
            <u>Ingrese N° de Documento del Fallecido </u>
          </strong>
        </h2>
        <form className="mt-4 border border-dark p-2" onSubmit={buscarTitular}>
          <div className="row mb-4">
            <div className="form-group col-md-6">
              <label>
                <strong>
                  {" "}
                  <u> N° de Documento: </u>
                </strong>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ficha"
                name="contrato"
                ref={contratoRef}
              />
              {error && (
                <div className="mt-2 form-group  alert alert-danger">
                  {error}
                </div>
              )}
            </div>

            <div className="form-group col-md-6 mt-4">
              <button type="submit" className="btn btn-block btn-primary">
                Buscar
              </button>
            </div>
          </div>
        </form>

        <hr className="mt-4 mb-4" />

        <div className="alert alert-primary border border-dark mt-4 p-4">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mt-4 mb-4">
                <strong>
                  <u>Ingresar Servicio Particular</u>
                </strong>
              </h2>
            </div>

            <div className="col-md-6 mt-4">
              <button
                type="reset"
                className="btn btn-block btn-primary"
                onClick={servicioParticular}
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>

      {ficha !== null ? (
        <FormAltaServicio
          ficha={ficha}
          selcaso={selcaso}
          // DETALLES EXTINTO
          empresa={empresa}
          empresaRef={empresaRef}
          dniRef={dniRef}
          apellidoRef={apellidoRef}
          nombreRef={nombreRef}
          edadRef={edadRef}
        />
      ) : particular !== null ? (
        <FormAltaServicioPart />
      ) : null}
    </div>
  );
};

export default AltaServicio;
