import React from "react";
import moment from "moment";
import SolicitudLegales from "./SolicitudLegales";

const Solicitud = () => {
  return (
    <div className=" mt-4 container border border-dark p-4">
      <div className="row ">
        <div className="col-md-6">
          <h2>
            <strong>
              <u>Solicitud de Reafiliacion</u>
            </strong>
          </h2>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <img src="/img/logo.png" className="werchowlogo" />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <label>
            <strong>
              <u>Afiliado N°</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Fecha</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Cod</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Procesado</u>
            </strong>
          </label>
          <input
            type="text"
            className="form-control"
            readOnly
            defaultValue={moment().format("DD/MM/YYYY")}
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row mt-4 border p-2 alert-primary">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Domicilio</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-1">
          <label>
            <strong>
              <u>N°</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Barrio</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-4">
          <label>
            <strong>
              <u>Localidad</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
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
          <input type="text" className="form-control" readOnly />
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
          <input type="text" className="form-control" readOnly />
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

      <div className="row mt-4 border p-2 alert-primary">
        <div className="col-md-4">
          <label>
            <strong>
              <u>Domicilio de Cobranza</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-1">
          <label>
            <strong>
              <u>N°</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-3">
          <label>
            <strong>
              <u>Barrio</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
        <div className="col-md-4">
          <label>
            <strong>
              <u>Dia y hs de Cobranza</u>
            </strong>
          </label>
          <input type="text" className="form-control" readOnly />
        </div>
      </div>
      <div className="mt-4">
        <SolicitudLegales />
      </div>

      <div className=" mt-4 p-4 d-flex justify-content-between">
        <div className="col-4 text-center ">
          <br />
          <br />
          <br />
          <p>-----------------------------</p>
          <label>Firma</label>
        </div>
        <div className="col-4 text-center ">
          <br />
          <br />
          <br />
          <p>-----------------------------</p>
          <label>Aclaracion</label>
        </div>
        <div className="col-4 text-center ">
          <br />
          <br />
          <br />
          <p>-----------------------------</p>
          <label>N° de documento</label>
        </div>
      </div>
    </div>
  );
};

export default Solicitud;
