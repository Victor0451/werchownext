import React from "react";
import moment from "moment";
const Recibo = () => {
  return (
    <div className="container p-4 mt-4">
      <div className="col-md-12 d-flex">
        {/* ORIGINAL */}
        <div className="border border-dark mr-1">
          <div className="col-md-12 border border-dark d-flex justify-content-between p-2">
            <div className="col-md-6">
              <h4>Plan Werchow</h4>
              <p>De Asociacion Mutual San Valentin</p>
              <p>Telefono: (388)-4213755</p>
              <p>Condicion: IVA EXENTO</p>
            </div>

            <div className="ml-5 col-md-12">
              <div>
                <strong>RECIBO</strong>: X
              </div>
              <div>N: 22-45454</div>
              <div>Fecha: {moment().format("DD/MM/YYYY")}</div>
            </div>
          </div>

          <div className="col-md-12 border border-dark alert alert-primary d-flex justify-content-between p-2">
            <div>DNI:</div>
            <div>HC:</div>
            <div>NOMBRE:</div>
          </div>

          <div className="col-md-12 border border-dark d-flex justify-content-between p-2">
            <div>Cuotas:</div>

            <div>ORIGINAL</div>
          </div>

          <div className="col-md-12 p-2">
            <table class="table table-sm border border-dark  mt-2">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cuota</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>1/2021</td>
                  <td>$ 2500</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2/2021</td>
                  <td>$ 2500</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>3/2021</td>
                  <td>$ 2500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-12  p-2">
            <p className="text-justify" style={{ "font-size": "10px" }}>
              <u>COVID 19 SERVICIOS FUNEBRES</u>: La prestacion de los servicios
              de la empresa estara en relacion directa a las diferentes fases
              sanitarias que determinen las autoridades Nacionales, Provinciales
              y/o Municipales. El servicio de cremacion y/o parcela estara
              sujeta a disponibilidad de la empresa y a normativas Nacionales,
              Provinciales, Municipales y/o Comerciales, que impidieren su
              normal prestacion. Como para el caso de volver al aislamiento
              social y preventivo (cuarentena) para la actividad fúnebre, con la
              prohibición de actividades que signifiquen reunión de personas.
              Por tal motivo no prodrán realizarse velaciones ni cortejos, ni
              ninguna otra actividad que implique reunión de personas.{" "}
              <u>SERVICIO DE SEPELIO</u>: se compromete a brindar a los socios
              al momento de su fallecimiento el servicio de sepelio que a
              continuacion se detalla: ataúd bóveda, placa, simbolos, carroza
              fúnebre; un coche portacoronas; un coche remis; un aviso fúnebre;
              trámites ante autoridades correspondientes. Subsidio de $500.00.
              Para solicitar el servicio los familiares deberán presentar el
              recibo de pago por la cujota del mes en curso, certificado de
              defuncion expedida por el médico y documento de identidad del
              extinto. <u>PAGO DE LA CUOTA</u>: La cuota mensual debera abonarse
              por mes adelantado del 1 al 15 de cada mes en las oficinas
              administrativas de la empresa o lugar que esta designe para
              recibir los mismos, como así tambíen por los servicios de cobranza
              domiciliarios debidamente autorizados por esta o por el sistema de
              debito bancario o tarjeta de credito.
            </p>
          </div>
        </div>

        {/* DUPLICADO */}

        <div className="border border-dark">
          <div className="col-md-12 border border-dark d-flex justify-content-between p-2">
            <div className="col-md-6">
              <h4>Plan Werchow</h4>
              <p>De Asociacion Mutual San Valentin</p>
              <p>Telefono: (388)-4213755</p>
              <p>Condicion: IVA EXENTO</p>
            </div>

            <div className="ml-5 col-md-12">
              <div>
                <strong>RECIBO</strong>: X
              </div>
              <div>N: 22-45454</div>
              <div>Fecha: {moment().format("DD/MM/YYYY")}</div>
            </div>
          </div>

          <div className="col-md-12 border border-dark alert alert-primary d-flex justify-content-between p-2">
            <div>DNI:</div>
            <div>HC:</div>
            <div>NOMBRE:</div>
          </div>

          <div className="col-md-12 border border-dark d-flex justify-content-between p-2">
            <div>Cuotas:</div>

            <div>DUPLICADO</div>
          </div>

          <div className="col-md-12 p-2">
            <table class="table table-sm border border-dark  mt-2">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Cuota</th>
                  <th scope="col">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>1/2021</td>
                  <td>$ 2500</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2/2021</td>
                  <td>$ 2500</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>3/2021</td>
                  <td>$ 2500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-12  p-2">
            <p className="text-justify" style={{ "font-size": "10px" }}>
              <u>COVID 19 SERVICIOS FUNEBRES</u>: La prestacion de los servicios
              de la empresa estara en relacion directa a las diferentes fases
              sanitarias que determinen las autoridades Nacionales, Provinciales
              y/o Municipales. El servicio de cremacion y/o parcela estara
              sujeta a disponibilidad de la empresa y a normativas Nacionales,
              Provinciales, Municipales y/o Comerciales, que impidieren su
              normal prestacion. Como para el caso de volver al aislamiento
              social y preventivo (cuarentena) para la actividad fúnebre, con la
              prohibición de actividades que signifiquen reunión de personas.
              Por tal motivo no prodrán realizarse velaciones ni cortejos, ni
              ninguna otra actividad que implique reunión de personas.{" "}
              <u>SERVICIO DE SEPELIO</u>: se compromete a brindar a los socios
              al momento de su fallecimiento el servicio de sepelio que a
              continuacion se detalla: ataúd bóveda, placa, simbolos, carroza
              fúnebre; un coche portacoronas; un coche remis; un aviso fúnebre;
              trámites ante autoridades correspondientes. Subsidio de $500.00.
              Para solicitar el servicio los familiares deberán presentar el
              recibo de pago por la cujota del mes en curso, certificado de
              defuncion expedida por el médico y documento de identidad del
              extinto. <u>PAGO DE LA CUOTA</u>: La cuota mensual debera abonarse
              por mes adelantado del 1 al 15 de cada mes en las oficinas
              administrativas de la empresa o lugar que esta designe para
              recibir los mismos, como así tambíen por los servicios de cobranza
              domiciliarios debidamente autorizados por esta o por el sistema de
              debito bancario o tarjeta de credito.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recibo;
