import React from "react";
import Spinner from "../../../layout/Spinner";

const CondicionesNovell = ({ novell }) => {
  if (!novell) return <Spinner />;

  return (
    <div className="container">
      <div className=" mt-4 border border-dark p-2">
        <h4 className=" text-center mt-2">
          <strong>
            <u>Condiciones que integran el contrato de adhesion</u>
          </strong>
        </h4>

        <h4 className="text-center mt-2">{novell.servicio}</h4>

        <div className="mt-4 conformnovell">
          <p className="text-justify mt-2">
            Aceptada que sea por parte de la Empresa la presente solicitud de
            adhesión, el Solicitante o Beneficiario deberán concurrir al
            domicilio de la empresa en un plazo de cinco días hábiles, para la
            firma del CONTRATO DE PRESTACION DE SERVICIO. En el caso de no
            concurrir a la misma dicha solicitud quedara ANULADA quedando en tal
            caso WERCHOW SERVICIOS SOCIALES SRL. totalmente liberada de
            cualquier obligación o responsabilidad frente a el Solicitante, y/o
            beneficiarios, con pérdida para estos últimos de derecho a reclamar
            reintegro de las sumas que hubiera abonado, las que se considerarán
            indemnización por los perjuicios ocasionados por el incumplimiento.
            El precitado contrato de prestación de servicios, se sujetará a las
            siguientes cláusulas, a las que el solicitante presta conformidad.-
          </p>

          <p className="text-justify mt-2">
            Entre WERCHOW SERVICIOS SOCIALES SRL, con domicilio en calle
            Independencia N° 1185, de la Ciudad de San Salvador de Jujuy,
            representada en este acto por su Socio Gerente el Señor Joaquín
            Iriarte DNI 25.444.609, por una parte y por otro el Sr.{" "}
            {novell.apellido_sol}, {novell.nombre_sol}
            DNI {novell.dni_sol}, con domicilio en calle {novell.domicilio_sol}{" "}
            Nº {novell.domnum_sol} Bº
            {novell.barrio_sol} de la Ciudad de San Salvador de Jujuy, en
            adelante EL CONTRATANTE, celebran el presente contrato, que se
            sujetará a las siguientes cláusulas:
          </p>

          <p className="text-justify mt-2">
            <strong>
              <u>PRIMERA</u>:
            </strong>{" "}
            Este acuerdo se formaliza bajo la formalidad de “Contrato a favor de
            Tercero (beneficiario)”, revistiendo esta ultima calidad el Sr/ra.{" "}
            {novell.apellido_ben}, {novell.nombre_ben} DNI. Nº {novell.dni_ben}{" "}
            de nacionalidad {novell.nacionalidad_ben} con domicilio en calle{" "}
            {novell.domicilio_ben} N° {novell.domnum_ben} B° {novell.barrio_ben}{" "}
            WERCHOW SERVICIOS SOCIALES SRL., se compromete a prestar al
            beneficiario de este contrato a su fallecimiento, el servicio de
            velatorio e inhumación, que se pasa a detallar: servicio de sepelio
            integral compuesto por ataúd: …………………………………………………...... o de
            similares características aclarándose que si el extinto excede la
            capacidad de dicho ataúd estándar, el contratante deberá abonar la
            diferencia correspondiente por cambio de ataúd de mayor capacidad.
            El servicio incluye también placa identificatoria y símbolos
            religiosos de acuerdo al culto profesado; capilla ardiente en el
            domicilio o sala de velatorio; traslado sin cargo y por intermedio
            de personal altamente capacitado, dentro de un radio de 20 Kms. de
            la Ciudad de San Salvador de Jujuy ; carroza fúnebre americano, un
            coche porta coronas, dos coches de duelo o Comby para
            acompañamiento; un aviso fúnebre en el diario local; trámites ante
            el Registro civil y oficinas de defunciones y cementerios.- - - - -
          </p>
          <p className="text-justify mt-2">
            <strong>
              <u> COVID 19 SERVICIOS FUNEBRES</u>:
            </strong>{" "}
            De acuerdo con los nuevos acontecimientos en relación con el
            CORONAVIRUS COVID 19, y en especial por lo dispuesto por el Decreto
            de Necesidad y Urgencia nro. 297/2020, emitido por el Poder
            Ejecutivo Nacional en el marco de la emergencia sanitaria declarada
            en todo el país, se destaca que en el art. 6to. inc. 7 del texto
            legal citado, se ha contemplado la excepción al aislamiento social y
            preventivo (cuarentena) para la actividad fúnebre, con la
            prohibición de actividades que signifiquen reunión de personas. Por
            tal motivo no podrán realizarse velaciones ni cortejos, ni ninguna
            otra actividad que implique reunión de personas. La empresa también
            estará a las normativas Provinciales vigentes al momento de prestar
            el servicio convenido. Estas medidas es al fin de preservar de
            preservar la salud pública y evitar sanciones por incumplimiento a
            la restricción ordenada.- - - - - - - - - - - - - - - - - - - - - -
          </p>
          <p className="text-justify mt-2">
            <strong>
              <u> SEGUNDA</u>:
            </strong>{" "}
            EL CONTRATANTE podrá designar, mediante formulario aparte, a una
            tercera persona que controlará en su oportunidad, que se cumplan
            estrictamente con los servicios comprometidos por WERCHOW SERVICIOS
            SOCIALES SRL. Esa persona podrá ser sustituida, a exclusiva decisión
            de EL CONTRATANTE, el que deberá comunicarlo de modo fehaciente a la
            empresa. Esta designación, es independiente del derecho de los
            herederos de EL CONTRATANTE, a reclamar, como tales, el cumplimiento
            del presente contrato, es decir la prestación de los servicios
            contratados en el mismo.- - - - - - - - - - - - - - -
          </p>
          <p className="text-justify mt-2">
            <strong>
              <u> TERCERA</u>:
            </strong>{" "}
            EL CONTRATANTE no podrá por ningún motivo vender, ceder o de modo
            alguno transferir el presente contrato, salvo expresa autorización y
            conformidad de WERCHOW SERVICIOS SOCIALES SRL. Cualquier cesión o
            transferencia que se efectúe, en violación a lo establecida en la
            presente cláusula, será nula de nulidad absoluta y totalmente
            inoponible a la empresa.-
          </p>
          <div className="border border-dark mt-2">
            <div className="row d-flex justify-content-between p-2">
              <div className="col-4 text-center mt-4">
                <br />
                <p>-----------------------------</p>
                <label>Firma</label>
              </div>
              <div className="col-4 text-center mt-4">
                <br />
                <p>-----------------------------</p>
                <label>Aclaracion</label>
              </div>
              <div className="col-4 text-center mt-4">
                <br />
                <p>-----------------------------</p>
                <label>N° de documento</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className=" mt-4 border border-dark p-2">
        <div className="mt-4 conformnovell">
          <p className="text-justify mt-2">
            <strong>
              <u> CUARTA</u>:
            </strong>{" "}
            WERCHOW SERVICIOS SOCIALES SRL. no asume obligación de efectuar
            comunicación alguna, a la persona que EL CONTRATANTE hubiere
            designado, para cumplir funciones de control, de conformidad a la
            cláusula segunda.-------------------
          </p>
          <p className="text-justify mt-2">
            <strong>
              <u> QUINTA</u>:
            </strong>{" "}
            Para el caso de que alguien contratara los servicios de velatorio e
            inhumación en otra empresa, WERCHOW SERVICIOS SOCIALES SRL, quedará
            totalmente eximida y liberada de las obligaciones contraídas en el
            presente, no estando obligada a reintegro alguno. En tal caso lo que
            se hubiere abonado por EL CONTRATANTE, quedará a exclusivo beneficio
            de WERCHOW SERVICIOS SOCIALES SRL, en concepto de compensación de
            gastos e indemnización por no haber requerido sus servicios.-
          </p>

          <p className="text-justify mt-2">
            <strong>
              <u> SEXTA</u>:
            </strong>{" "}
            EL CONTRATANTE acuerda en abonar, por los servicios contratados en
            el presente, la suma de Pesos {novell.monto_letra} ($ {novell.monto}
            ), abonando en este acto en concepto de anticipo la suma de Pesos{" "}
            {novell.anticipo_letra} ($ {novell.anticipo}), extendiéndose recibo
            por aparte. El saldo se abonara en {novell.cuotas} cuotas de Pesos
            {novell.cuotasaldo_letra} ($ {novell.cuotasaldo}) Cada una.
            Conjuntamente con cada una de las cuotas antes mencionadas deberá
            abonar una cuota mínima mensual en concepto de gasto de
            mantenimiento, la que continuará abonándose luego de cancelarse el
            precio pactado por el servicio, hasta la prestación del presente
            contrato. La cuota de gasto de mantenimiento aumentara
            cuatrimestralmente. Se deja aclarado que el precio del servicio se
            ajustará a los valores indicativos de los servicios fúnebres
            dependiente de las cámaras de Fadesfya y Fadaf de la Republica
            Argentina, de acuerdo al tipo se servicio y categoría del mismo, en
            el período comprendido entre la firma del presente y la de pago de
            cualquiera de las cuotas y las que resten abonar se incrementarán
            automáticamente de acuerdo a estos valores. No obstante, ante ello,
            le asiste a EL CONTRATANTE el derecho de rescindir el presente
            convenio, bastando a tales fines, una simple comunicación escrita;
            en tal caso, carecerá de derecho a reclamar las sumas que hubiere
            abonado hasta ese momento, las que asumirán el carácter de
            indemnización a favor de la empresa. Se aclara que el precio de
            venta estipulado en este contrato no incluye impuestos y tasas
            nacionales, provinciales y/o municipales, los cuales quedan
            exclusivamente a cargo del CONTRATANTE, familiar o cualquier
            tercero.- - - - - - - - - - - - - - - - - -- - - - - - - - - - - - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </p>

          <p className="text-justify mt-2">
            <strong>
              <u> SEPTIMA</u>:
            </strong>{" "}
            Los plazos pactados en el presente contrato vencen de modo
            automático sin necesidad de intimación alguna judicial o
            extrajudicial y en caso de atraso en el pago de las cuotas -
            anticipos, deberá EL CONTRATANTE abonar, conjuntamente con las
            respectiva cuota, un interés equivalente al que cobra el Banco de la
            Nación Argentina para sus operaciones de Prestamos Personales.- - -
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          </p>
          <p className="text-justify mt-2">
            <strong>
              <u> OCTAVA</u>:
            </strong>{" "}
            La falta de pago puntual de tres (3) cuotas - consecutivas,
            provocará la automática rescisión del presente contrato, quedando en
            tal caso WERCHOW SERVICIOS SOCIALES SRL. totalmente liberada de las
            obligaciones asumidas en el mismo, con pérdida para EL CONTRATANTE
            de derecho a reclamar reintegro de las sumas que hubiera abonado,
            las que se considerarán indemnización por los perjuicios ocasionados
            por el incumplimiento.- - - - - - - - - - - - - - - - - - - - - - -
            - - - - - - - - - - -
          </p>

          <p className="text-justify mt-2">
            <strong>
              <u> NOVENA</u>:
            </strong>{" "}
            Con el consentimiento de WERCHOW SERVICIOS SOCIALES SRL., EL
            CONTRATANTE podrá ceder su calidad de tal o reemplazar el tercero
            designado a los fines del control de la prestación del servicio.
            Serán a su exclusivo cargo la totalidad de gastos notariales o
            similares, impuestos y tasas nacionales, provinciales y municipales
            que demanden tales modificaciones. -
          </p>

          <p className="text-justify mt-2">
            <strong>
              <u> DECIMA</u>:
            </strong>{" "}
            Para tener derecho a los servicios comprometidos por WERCHOW
            SERVICIOS SOCIALES SRL, debe encontrarse pagado íntegramente el
            precio convenido.
          </p>

          <p className="text-justify mt-2">
            <strong>
              <u> DECIMOPRIMERA</u>:
            </strong>{" "}
            Para el caso de no hacer el uso de servicio de velatorio e
            inhumación, el solicitante podrá en forma opcional hacer uso del
            servicio de cremación, renunciando en su totalidad a todos los
            servicios establecidos en la CLAUSULA PRIMERA.
          </p>

          <p className="text-justify mt-2">
            <strong>
              <u> DECIMOSEGUNDA</u>:
            </strong>{" "}
            EL CONTRATANTE designa al Sr………………………..……., con domicilio en calle
            …………………………………………….. Nº………….. del Barrio ……………….. de la Ciudad de San
            Salvador de Jujuy con DNI. Nº……………………, como la persona que
            controlara que se cumplan estrictamente con los servicios
            comprometidos por WERCHOW SERVICIOS SOCIALES SRL. - - - - - - - - -
          </p>
        </div>
        <div className="border border-dark mt-4">
          <div className="row d-flex justify-content-between p-2">
            <div className="col-4 text-center mt-4">
              <br />
              <p>-----------------------------</p>
              <label>Firma</label>
            </div>
            <div className="col-4 text-center mt-4">
              <br />
              <p>-----------------------------</p>
              <label>Aclaracion</label>
            </div>
            <div className="col-4 text-center mt-4">
              <br />
              <p>-----------------------------</p>
              <label>N° de documento</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CondicionesNovell;
