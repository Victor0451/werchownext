import React from "react";
import moment from "moment";
import Spinner from "../../../layout/Spinner";
const Recibo = ({ datos }) => {

  if (!datos) return <Spinner />

  console.log(datos)

  const totalCuotas = (arr) => {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
      total += parseFloat(arr[i].IMPORTE)
    }

    return total
  }

  return (
    <div className=" col-md-12 d-flex list ">

      {/* ORIGINAL */}
      <div className="borderImp mr-1">
        <div className="col-md-12 borderImp d-flex justify-content-between ">
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
            <div>N: {datos[0].SERIE} - {datos[0].NRO_RECIBO}</div>
            <div>Fecha: {moment(datos[0].DIA_PAG).format("DD/MM/YYYY")}</div>
          </div>
        </div>

        <div className="col-md-12 borderImp bg-secondary text-white d-flex justify-content-between ">
          <div>DNI: {datos[0].NRO_DOC}</div>
          <div>HC: {datos[0].CONTRATO}</div>
          <div>NOMBRE: {datos[0].APELLIDOS}, {datos[0].NOMBRES}</div>
        </div>

        {/* <div className="col-md-12 borderImp d-flex justify-content-between ">
            <div>Cuotas: {datos.length}</div>

            <div>ORIGINAL</div>
          </div> */}

        <div className="col-md-12 ">
          <table className="table table-sm borderImp  ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cuota</th>
                <th scope="col">Valor</th>
                <th scope="col">ORIGINAL</th>

              </tr>
            </thead>
            <tbody>

              {datos.map((d, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{d.MES}/{d.ANO}</td>
                  <td>{d.IMPORTE}</td>
                </tr>
              ))}

              <tr className="">
                <td></td>
                <td></td>

                <td>
                  <strong>
                    <u>
                      TOTAL
                    </u>: $ {totalCuotas(datos)}
                  </strong>

                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className="col-md-12  ">
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

      <div className="borderImp">
        <div className="col-md-12 borderImp d-flex justify-content-between ">
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
            <div>N: {datos[0].SERIE} - {datos[0].NRO_RECIBO}</div>
            <div>Fecha: {moment(datos[0].DIA_PAG).format("DD/MM/YYYY")}</div>
          </div>
        </div>

        <div className="col-md-12 borderImp bg-secondary text-white d-flex justify-content-between ">
          <div>DNI: {datos[0].NRO_DOC}</div>
          <div>HC: {datos[0].CONTRATO}</div>
          <div>NOMBRE: {datos[0].APELLIDOS}, {datos[0].NOMBRES}</div>
        </div>

        {/* <div className="col-md-12 borderImp d-flex justify-content-between ">
            <div>Cuotas: {datos.length}</div>

            <div>DUPLICADO</div>
          </div> */}


        <div className="col-md-12 ">
          <table className="table table-sm borderImp  ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Cuota</th>
                <th scope="col">Valor</th>
                <th scope="col">DUPLICADO</th>

              </tr>
            </thead>
            <tbody>

              {datos.map((d, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{d.MES}/{d.ANO}</td>
                  <td>{d.IMPORTE}</td>
                </tr>
              ))}

              <tr className="">
                <td></td>
                <td></td>

                <td>
                  <strong>
                    <u>
                      TOTAL
                    </u>: $ {totalCuotas(datos)}
                  </strong>

                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <div className="col-md-12  ">
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

  );
};

export default Recibo;
