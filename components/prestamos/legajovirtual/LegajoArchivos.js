import React from "react";
import Spinner from "../../layout/Spinner";

const LegajoArchivos = ({ archivos, id, ficha, prestamo }) => {
  if (!ficha) {
    return <Spinner />;
  } else if (!archivos) {
    return <Spinner />;
  }

  console.log(prestamo);

  return (
    <div className="container alert alert-primary border border-dark p-4 mt-4">
      <div className="row border border-dark p-4">
        <h2 className="mt-4 mb-4 col-8">
          <strong>
            <u>Legajo Virtual N°:</u> "{id}"
          </strong>
        </h2>
        <a
          href="/prestamos/imprimircaratula"
          className="btn btn-primary  mt-4 text-white col-md-4"
        >
          Volver Al Listado
        </a>
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
            <u>Informacion Del Prestamo</u>
          </strong>
        </h2>

        <div className="d-flex justify-content-between mt-4 ">
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

      <div className="row mt-4 mb-4 border border-dark p-4">
        <h2 className="mt-4 mb-4 col-8">
          <strong>
            <u>Archivos:</u>
          </strong>
        </h2>
        <div className="text-center  text-dark d-flex justify-content-between p-4">
          {archivos.map((archivo, index) => (
            <div key={index} className="mt-4">
              <div className="col">
                <strong>
                  <u>{archivo.archivo}</u>
                </strong>
              </div>
              <div className="row">
                <div className="col">
                  <img
                    src={`http://190.231.32.232:5002/api/archivos/legajovirtualprestamos/archivo/${archivo.archivo}`}
                    className="archivos p-4 "
                  />

                  <br />

                  <a
                    className="btn btn-primary "
                    href={`http://190.231.32.232:5002/api/archivos/legajovirtualprestamos/descargararchivo/${archivo.archivo}`}
                  >
                    Descargar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegajoArchivos;
