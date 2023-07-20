import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import Router, { useRouter } from "next/router";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../../config/config";
import toastr from "toastr";
import moment from "moment";

const ContratoDepto = () => {


    const [contrato, guardarContrato] = useState(null)
    const [locador, guardarLocador] = useState(null)
    const [user, guardarUsuario] = useState(null)


    let month = [];
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";

    let newDate = new Date();
    let date = newDate.getDate();

    let monthname = month[newDate.getMonth()];
    let year = newDate.getFullYear();


    const traerLocador = async (id) => {


        await axios.get(`${ip}api/sgi/contratos/traerlocador/${id}`)
            .then(res => {

                guardarLocador(res.data[0])

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el locador", "ATENCION")
            })

    }

    const traerContrato = async (cont) => {

        await axios.get(`${ip}api/sgi/contratos/traercontrato/${cont}`)
            .then(res => {

                guardarContrato(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el contrato", "ATENCION")
            })

    }

    const imprimir = () => {
        let contenido = document.getElementById("contrato").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload(true);

    };


    let rou = useRouter()

    if (rou.query.loc) {

        jsCookie.set("loc", rou.query.loc)
        jsCookie.set("cont", rou.query.cont)

    }


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);

                traerLocador(jsCookie.get("loc"))
                traerContrato(jsCookie.get("cont"))


            }

        }
    }, []);


    if (!locador) return <div>...</div>
    if (!contrato) return <div>...</div>

    return (

        <Layout >
            <div className="list mb-4">

                <div className="row  containerImp d-flex justify-content-end">

                    <button className="mt-4 btn btn-primary" onClick={imprimir}>
                        Imprimir
                    </button>

                </div>

                <div
                    className="containerImp "
                    id="contrato"
                >
                    <h2 className="text-center mt-4">
                        <strong>CONTRATO DE LOCACION</strong>
                    </h2>
                    <p className="text-justify mt-4">
                        En San salvador de jujuy, Provincia de Jujuy, República Argentina, a
                        los <strong>{date}</strong> días del mes de
                        <strong> {monthname}</strong> de <strong>{year}</strong>, entre la
                        Sr/a <strong> {locador.nombre} </strong>{" "}
                        <strong>{locador.apellido}</strong>, DNI {""}
                        <strong>{locador.dni}</strong> con domicilio en calle{" "}
                        <strong>{locador.domicilio}</strong>{" "}
                        de Ciudad de <strong>{locador.localidad}</strong> de{" "}
                        <strong>{locador.provicia}</strong> –Provincia de{" "}
                        <strong>{locador.provincia}</strong>- , en adelante denominado el
                        LOCADOR, por una parte; y por la otra
                        <strong> {contrato.locatario1}</strong> ,DNI
                        <strong>{contrato.dni1}</strong> {" "}
                        con domicilio en <strong>{contrato.domicilio1}</strong>,
                        –Provincia de Jujuy-, y el
                        Sr.
                        <strong> {contrato.locatario2}</strong>, DNI {" "}
                        <strong>{contrato.dni2}</strong>{" "}
                        con domicilio en <strong>{contrato.domicilio2}</strong> , –Provincia de Jujuy- en
                        adelante los “LOCATARIOS”, se conviene en celebrar el presente
                        Contrato de Locación Comercial, el que se regirá conforme a las
                        siguientes cláusulas:
                    </p>

                    <p className="text-justify">
                        <u>PRIMERA:</u> El locador da en arriendo a los locatarios y estos
                        aceptan, la unidad funcional n° <strong>{contrato.uf}</strong>,
                        identificada como <strong>{contrato.local}</strong>, que se disgregan
                        del edificio situado en OTERO Nº 464 de esta ciudad, fijándose como
                        fecha de iniciación de este contrato el día{" "}
                        <strong>{contrato.alta}</strong>, fecha a la cual
                        retrotraen los efectos de este contrato. Todos los montos que se
                        consignan a continuación en el presente contrato, no incluyen IVA
                        (impuesto al valor agregado). En este acto el locador recibe del
                        locatario la suma de pesos: {" "}
                        <strong>${contrato.monto * 2}</strong>. Sirviendo la
                        presente de suficiente recibo por dicho importe, aplicado a los
                        siguientes conceptos: la suma de pesos:(
                        <strong>${contrato.monto}</strong>) en concepto de pago
                        anticipado de un mes de alquiler, correspondiente al mes de{" "}
                        <strong> {monthname}</strong> del año <strong>{year}</strong> y la
                        suma de pesos: (<strong>${contrato.monto}</strong>
                        ), en concepto de deposito de garantía, los cuales serán devueltos
                        al finalizar el presente contrato, una vez que se hayan abonado
                        todos los alquileres, gastos de remodelación, impuestos y servicios
                        por parte de los locatarios y eventuales reparaciones en el inmueble
                        locado. En caso de existir saldo a pagar por los conceptos
                        enunciados se abonaran con el importe del deposito hasta cubrir los
                        mismos y si existiese saldo, serán abonados por los locatarios.
                    </p>

                    <p className="text-justify">
                        <u>SEGUNDA:</u> el termino de la Locacion será de <strong>({contrato.duracion})</strong>  años a
                        partir de la fecha citada, feneciendo el{" "}
                        <strong>{moment(contrato.fecha_inicio).add(contrato.duracion, "y").format('DD/MM/YYYY')}</strong>,. A su
                        vencimiento, si los locatarios desearan continuar en la locacion, se
                        celebrara un nuevo contrato. Se pacta expresamente que los
                        locatarios podrán rescindir la contratación luego de transcurridos
                        seis (6) meses de locación, debiendo notificar fehacientemente su
                        decisión al locador con una antelación mínima de sesenta (60) días
                        de la fecha en que reintegrara el inmueble locado. Los locatarios
                        deberán abonar el valor equivalente a 1 (un) mes y medio de alquiler
                        si la rescisión se produce dentro del primer año de contrato, y de 1
                        (un) mes de alquiler si se produce después del primer año, en
                        concepto de indemnización.--
                    </p>

                    <p className="text-justify">
                        <u>TERCERA:</u> El Locatario se compromete a abonar por la unidad
                        funcional que arriendan la suma de (
                        <strong>${contrato.monto}</strong>) mensuales, pagaderos
                        por mes adelantado del 1 al 10 de cada mes, en calle LAVALLE Nº 123
                        de esta ciudad o donde el locador indique, además y como formando
                        parte de la locacion los locatarios abonaran al Locador en el mismo
                        termino, las expensas comunes por, limsa, impuestos inmobiliario,
                        luz, agua, gas, que forman parte de dicha expensas, Internet y todo
                        cuando otro gasto común que se realice para el buen funcionamiento y
                        aseo de las unidades funcionales de los pisos del edificio. Los
                        locatarios se comprometen y obligan a cumplir como así también
                        respetar el reglamento de copropiedad y administración al que
                        declaran conocer y aceptar. La mora es automática, opera de pleno
                        derecho por el mero vencimiento, sin necesidad de interpelación
                        judicial o extrajudicial alguna; y toda deuda atrasada devengará una
                        mora equivalente al 0,5% diarios, por el período comprendido entre
                        el vencimiento y el efectivo pago.-
                    </p>

                    <p className="text-justify">
                        <u>CUARTA:</u> El precio de la locacion sera a pedido del LOCADOR y aceptado por los LOCATARIOS de
                        PESOS <strong>(${contrato.monto})</strong>{""} durante el primer semestre de Locación, dicho importe se actualizara semestralmente
                        aplicando el 50% del indice informado por el Banco Central de la Republica Argentina acorde a lo dispuesto en la Ley 27551, art. 14
                        Titulo II "Rugacion Complementaria de las Locaciones", consistente en un promedio entre los indices IPC (Indices de Precios al Consumidor)
                        y RIPTE (Remuneracion Imponible Promedio de los Trabajadores Estables). Para el casoo dque dicho coeficiente no se encuentre disponible al
                        momento del recalculo, se aplicara el del mes inmediato anterior y luego se actualizara con el proximo vencimiento.
                        Como complemento a lo mencionado con anterioridad en la presente cláusula se
                        establece que por la situación de emergencia e incertidumbre que
                        reina en el país sobre los pecios de las locaciones y sobre la
                        evolución de los precios en general.- es por ello que si el precio
                        fijado se tornara excesivamente oneroso para el locatario, podrán
                        rescindir el contrato sin penalidad alguna. si lo fuera para el
                        locador, el contrato quedara resuelto de pleno derecho y el
                        locatario deberá desalojar el inmueble, en un plazo de 72 hrs.
                        hábiles. el locador podrá evitar la rescisión del contrato,
                        realizando un ofrecimiento de reajuste equitativo del precio,
                        mediante un medio fehaciente de comunicación. el plazo de espera del
                        mencionado ofrecimiento será de 10 días hábiles desde el pedido
                        expreso de reajuste por parte del locador. el precio equitativo
                        ofrecido por el locatario no podrá ser menor al precio que determine
                        la cámara inmobiliaria de jujuy en base al reajuste fijado sobre el
                        precio de la locacion.
                    </p>
                    <p className="text-justify">
                        <u>QUINTA:</u> El locatario recibe la unidad funcional identificada{" "}
                        <strong>N°{contrato.uf}</strong>{""} en perfectas condiciones de uso, con todos los herrajes, un portero
                        eléctrico, llaves, artefactos de iluminación, cocina a gas, calefón de 14 litros, mesada de granito gris
                        mara, bajo mesada, cajonera confeccionada en melanina color caoba, tofo con herrajes jafele, Baño privado
                        completo (con mochila, grifería, receptáculo de ducha, ducha, asiento de inodoro, lavatorio, columna todo
                        marca ferrum), dos placares completos de melanina color cedro y correctamente pintada y aseada, dando en
                        este acto su mas absoluta conformidad a lo que aquí se manifiesta, comprometiéndose a restituirla al término
                        de la locacion en las mismas condiciones en que la recibió y pintada con la misma calidad de pintura.
                    </p>

                    <p className="text-justify">
                        <u>SEXTA:</u> El bien arrendado deberá ser destinado exclusivamente
                        para el funcionamiento de la especialidad de los inquilinos y podrán
                        ser compartidos con otros profesionales de su especialidad, sin que
                        ello importe la admisión de cesión de la locacion o sub-locacion y
                        al terminar la locacion y devolver la unidad funcional, los
                        locatarios se comprometen a entregarlo libre de ocupantes y cosas.-
                    </p>

                    <p className="text-justify">
                        <u>SEPTIMA:</u> Los locatarios no podrán introducir cambios, reformas, mejoras o modificaciones, de
                        cualquier tipo y especie en el inmueble, sin autorización por escrito del locador. Todas las mejoras
                        autorizadas que se realicen en las unidad funcional arrendada, aún con autorización de El Locador, quedaran
                        en beneficio de la propiedad sin derecho a solicitar reintegro todo esto sin perjuicio de que el mismo
                        (refiere El locador) puede exigir la inmediata restitución al estado anterior a costa exclusiva de los
                        locatarios. Ellos (los locatarios) se responsabilizan por todos los daños que ocasionen no solo en la unidad
                        funcional si no también en los espacios comunes del edificio de calle OTERO Nº 464 de esta ciudad. Como
                        respaldo a esto se detalla a continuación los elementos que se encuentran en los espacios comunes, los
                        cuales son: trece (13) unidades de Luces de Emergencia de 100 LED, marca ALIC; veintiún (21) artefactos de
                        embutir redondo para dos lamparas, marca BAP; cuatro (4) unidades de Artefactos 36 x3 con sus respectivas
                        lamparas marca BAP; doce (12) unidades de Artefactos 26 x2 con sus respectivas lamparas marcas BAP; Todos
                        los espacios pintados con pintura de la marca Murella código 6084; una (1) puertas de aluminio negro con
                        vidrio; cuatro (4) puertas ventanas de aluminio negro con vidrio; veinticuatro (24) ventanas de aluminio
                        negro con vidrio; Seis (6) puertas de baños de marca Oblack, completas con vidrio, picaporte y cerraduras;
                        Seis (6) Inodoros con tabla de madera, mochila y lavatorios Ferrum con gritería tipo prismática marca FV;
                        trece (13) llaves de un puntos; doce (12) llaves de dos puntos; cuatro (4) llaves de tres puntos; (8) tomas
                        corrientes; seis (6) tapas ciegas; dos (2) termotanques eléctricos de marca Rheem de 125 litros.
                    </p>

                    <p className="text-justify">
                        <u>OCTAVA:</u> El propietario y la administración quedan totalmente
                        eximidos de responsabilidad por la rotura o desperfectos que se
                        causen a artefactos eléctricos, (sea que dicho artefacto roto o con
                        desperfectos) se encuentre en la unidad en la que se produjo o en
                        cualquier otra.-
                    </p>

                    <p className="text-justify">
                        <u>NOVENA:</u> El incumplimiento por parte de los locatarios a
                        cualquiera de las cláusulas, prohibiciones, u obligaciones a su
                        cargo, así como la falta de pago de dos mensualidades consecutivas
                        de alquiler y/o expensas, dará derecho al locador a rescindir este
                        contrato y exigir el inmediato desalojo, sin necesidad de
                        interpelación judicial o extrajudicial de ninguna especie, debiendo
                        restituirse a su propietario el bien objeto de la locacion en las
                        condiciones establecidas en la cláusula cuarta.-
                    </p>

                    <p className="text-justify">
                        <u>DECIMA:</u> Para cualquier cuestión litigiosa que pudiera
                        plantearse las partes se someten a la jurisdicción de los tribunales
                        ordinarios de la ciudad de san salvador de Jujuy, con exclusión de
                        cualquiera otro fuero o jurisdicción de excepción, siendo validas
                        las notificaciones que se realicen en los domicilios establecidos en
                        el contrato.-
                    </p>

                    <p className="text-justify">
                        <u>UNDECIMA:</u> El sellado del presente contrato por ante la
                        Dirección Provincial de Rentas de la Provincia, cualquier impuesto
                        que se creara y los que sean inherentes a la profesión de los
                        ocupantes de la unidad funcional, serán a cargo de los locatarios.-
                        En prueba de conformidad y para su fiel cumplimiento, se firman dos
                        ejemplares de un mismo tenor e igual efecto en la ciudad de san
                        salvador de Jujuy a los a los <strong>{date}</strong> días del mes
                        de
                        <strong> {monthname}</strong> de <strong>{year}</strong>.-
                    </p>
                </div>
            </div>

        </Layout>
    )
}

export default ContratoDepto