import React from "react";
import moment from "moment";
import SolicitudLegales from "./SolicitudLegales";

const SolicitudIngreso = ({ ficha, adhs, empresa }) => {

  return (
    <div className=" mt-4  border border-dark p-4 container">
      <div className="row ">
        <div className="col-md-6">
          <h3>
            <strong>
              <u>Solicitud de Ingreso</u>
            </strong>
          </h3>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          {empresa == 'W' ? (
            <img src="/img/logo.png" className="werchowlogo" />
          ) : (
            <img src="/img/logom.jpg" className="werchowlogo" />
          )}

        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-3">
          <label>
            <strong>
              <u>Afiliado N°</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.CONTRATO} />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Fecha</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={moment().format("DD/MM/YYYY")} />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Cod</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.PRODUCTOR} />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Procesado</u>
            </strong>
          </label>
          <input
            type="text"
            className=" border border-dark form-control"


          />
        </div>
      </div>

      <div className="row mt-4">
        <table className="table table-sm table-striped border border-dark p-1">
          <thead className="tenca">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Apellido y Nombre</th>
              <th scope="col">Fecha Nac.</th>
              <th scope="col">Edad</th>
              <th scope="col">DNI</th>
              <th scope="col">Parentesco</th>
              <th scope="col">O. Social</th>
              <th scope="col">Subsidio</th>
              <th scope="col">Plan</th>
              <th scope="col">Vigencia</th>
            </tr>
          </thead>
          <tbody>


            <tr >
              <th scope="row">1</th>
              <td>{ficha.APELLIDOS}, {ficha.NOMBRES}</td>
              <td>{moment(ficha.NACIMIENTO).format('DD/MM/YYYY')}</td>
              <td>{moment().diff(ficha.NACIMIENTO, 'years')}</td>
              <td>{ficha.NRO_DOC}</td>
              <td></td>
              <td>{ficha.OBRA_SOC}</td>
              <td>{ficha.TSEG}</td>
              <td>{ficha.PLAN}</td>
              <td>{ficha.VIGENCIA}</td>
            </tr>


            {adhs ? (

              adhs.map((a, index) => (
                <tr key={index}>
                  <th scope="row">{index + 2}</th>
                  <td>{a.APELLIDOS}, {a.NOMBRES}</td>
                  <td>{moment(a.NACIMIENTO).format('DD/MM/YYYY')}</td>
                  <td>{moment().diff(a.NACIMIENTO, 'years')}</td>
                  <td>{a.NRO_DOC}</td>
                  <td>{a.PARENT}</td>
                  <td>{a.OBRA_SOC}</td>
                  <td>{a.PARENTESCO}</td>
                  <td>{a.PLAN}</td>
                  <td>{a.VIGENCIA}</td>
                </tr>
              ))

            ) : null}

          </tbody>
        </table>
      </div>

      <div className="row mt-2 border p-2 alert-primary">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Domicilio</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.CALLE} />
        </div>
        <div className="col-md-2">
          <label>
            <strong>
              <u>N°</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.NRO_CALLE} />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Barrio</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.BARRIO} />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Localidad</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.LOCALIDAD} />
        </div>
      </div>

      <div className="row mt-2 border p-2 alert-primary">
        <div class="form-group mt-3">
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Propietario
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Alquila
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <label>
            <strong>
              <u>Celular</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.MOVIL} />
        </div>
        <div class="form-group mt-3">
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Personal
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Claro
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Movistar
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <label>
            <strong>
              <u>Domicilio Laboral</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" defaultValue={ficha.DOMI_LAB} />
        </div>
        <div class="form-group mt-1">
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Debito Bancario
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Tarjeta
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Convenio
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Cob. a Domicilio
            </label>
          </div>
          <div class="custom-control custom-radio">
            <input
              type="radio"
              id="customRadio1"
              name="customRadio"
              class="custom-control-input"
              checked=""
            />
            <label class="custom-control-label" for="customRadio1">
              Oficina
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-2 border p-2 alert-primary">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Domicilio de Cobranza</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" />
        </div>
        <div className="col-md-1">
          <label>
            <strong>
              <u>N°</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Barrio</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" />
        </div>
        <div className="col-md-4">
          <label>
            <strong>
              <u>Dia y hs de Cobranza</u>
            </strong>
          </label>
          <input type="text" className="form-control border border-dark" />
        </div>
      </div>

      {
        empresa == 'W' ? (
          <div className="mt-2">
            <SolicitudLegales />
          </div>
        ) : null
      }


      <div className=" mt-2 p-4 d-flex justify-content-between">
        <div className="col-4 text-center ">
          <br border border-dark />
          <br />
          <br />
          <p>-----------------------------</p>
          <label>Firma</label>
        </div>
        <div className="col-4 text-center ">
          <br border border-dark />
          <br />
          <br />
          <p>-----------------------------</p>
          <label>Aclaracion</label>
        </div>
        <div className="col-4 text-center ">
          <br border border-dark />
          <br />
          <br />
          <p>-----------------------------</p>
          <label>N° de documento</label>
        </div>
      </div>
    </div>
  );
};

export default SolicitudIngreso;
