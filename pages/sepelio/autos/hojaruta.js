import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from "../../../config/config";
import FormHojaRuta from "../../../components/sepelio/autos/FormHojaRuta";
import moment from "moment";

const hojaruta = () => {

    let patenteRef = React.createRef();
    let conductorRef = React.createRef();
    let servicioRef = React.createRef();
    let fechaSalRef = React.createRef();
    let kmSalRef = React.createRef();
    let fechaLlegRef = React.createRef();
    let kmLlegRef = React.createRef();




    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [autos, guardarAutos] = useState(null)
    const [operadorsep, guardarOperadorSep] = useState(null)
    const [servicios, guardarServicios] = useState(null);


    let token = jsCookie.get("token");

    const traerAutos = async () => {
        await axios.get(`${ip}api/sepelio/autos/traerautos`)
            .then(res => {
                guardarAutos(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los autos", "ATENCION")
                console.log(error)
            })
    }

    const traerOperador = async () => {
        await axios
            .get(
                `${ip}api/sepelio/serviciogastos/operadoressep`
            )
            .then((res) => {
                guardarOperadorSep(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const servicioCombo = async () => {
        await axios
            .get(`${ip}api/sepelio/servicio/serviciocombo`)
            .then((res) => {
                guardarServicios(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

            traerAutos()

            traerOperador()

            servicioCombo()
        }
    }, []);


    const regHojaRuta = async () => {

        let car = patenteRef.current.value;
        let fields = car.split("-");
        const chapa = `${fields[0]}-${fields[1]}`;
        const modelo = fields[2];

        const hojaruta = {
            auto: modelo,
            patente: chapa,
            conductor: conductorRef.current.value,
            idservicio: servicioRef.current.value,
            fecha_salida: fechaSalRef.current.value,
            km_salida: kmSalRef.current.value,
            fecha_llegada: fechaLlegRef.current.value,
            km_llegada: kmLlegRef.current.value,
            operador: user,
            fecha_registro: moment().format('YYYY-MM-DD HH:ss:mm')
        }

        if (patenteRef.current.value === "no") {
            guardarErrores("Debes seleccionar un auto")
        } else if (hojaruta.conductor === "no") {
            guardarErrores("Debes seleccionar un conductor")
        } else if (hojaruta.idservicio === "no") {
            guardarErrores("Debes seleccionar un servicio")
        } else if (hojaruta.fecha_salida === "") {
            guardarErrores("Debes seleccionar una fecha de salida")
        } else if (hojaruta.km_salida === "") {
            guardarErrores("Debes ingresar los km al momento de la salida")
        } else if (hojaruta.fecha_llegada === "") {
            guardarErrores("Debes seleccionar una fecha de llegada")
        } else if (hojaruta.km_llegada === "") {
            guardarErrores("Debes ingresar los km al momento de la llegada")
        } else {

            await axios.post(`${ip}api/sepelio/autos/registrarhojaruta`, hojaruta)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("Se registro la hoja de ruta con exito", "ATENCION")
                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al registrar la hoja de ruta", "ATENCION")
                })

        }
    }


    return (
        <Layout>
            <FormHojaRuta
                autos={autos}
                operadorsep={operadorsep}
                servicios={servicios}
                patenteRef={patenteRef}
                conductorRef={conductorRef}
                servicioRef={servicioRef}
                fechaSalRef={fechaSalRef}
                kmSalRef={kmSalRef}
                fechaLlegRef={fechaLlegRef}
                kmLlegRef={kmLlegRef}
                regHojaRuta={regHojaRuta}
            />
        </Layout>
    )
}

export default hojaruta
