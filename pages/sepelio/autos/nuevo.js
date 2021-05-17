import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from 'toastr'
import { ip } from '../../../config/config'
import FormNuevoAuto from "../../../components/sepelio/autos/FormNuevoAuto";

const nuevo = () => {

    let patenteRef = React.createRef();
    let autoRef = React.createRef();
    let kilometrosRef = React.createRef();
    let responsableRef = React.createRef();
    let motorRef = React.createRef();
    let chasisRef = React.createRef();
    let modeloRef = React.createRef();
    let empresaRef = React.createRef();
    let nroPolizaRef = React.createRef();
    let vencimientoRef = React.createRef();
    let coberturaRef = React.createRef();

    const [errores, guardarErrores] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
    }, []);


    const registrarAuto = async () => {
        const car = {

            patente: patenteRef.current.value,
            auto: autoRef.current.value,
            kilometros: kilometrosRef.current.value,
            responsable: responsableRef.current.value,
            nro_poliza: nroPolizaRef.current.value,
            empresa: empresaRef.current.value,
            vencimiento: moment(vencimientoRef.current.value).format('YYYY/MM/DD'),
            motor: motorRef.current.value,
            chasis: chasisRef.current.value,
            modelo: modeloRef.current.value,
            cobertura: coberturaRef.current.value,
            estado: 1
        }

        console.log(car.vencimiento)

        if (car.patente === "") {
            guardarErrores("Debes ingresar la patente")
        } else if (car.auto === "") {
            guardarErrores("Debes ingresar la marca y el modelo del auto")
        } else if (car.kilometros === "") {
            guardarErrores("Debes ingresar el kilometraje del auto")
        } else if (car.motor === "") {
            guardarErrores("Debes ingresar el n° de serie del motor")
        } else if (car.chasis === "") {
            guardarErrores("Debes ingresar el n° de serie del chasis")
        } else if (car.modelo === "") {
            guardarErrores("Debes ingresar el modelo o año de fabricacion del auto")
        } else if (car.empresa === "") {
            guardarErrores("Debes ingresar la empresa aseguradora")
        } else if (car.nro_poliza === "") {
            guardarErrores("Debes ingresar el n° de poliza del seguro")
        } else if (car.vencimiento === "Invalid date") {
            guardarErrores("Debes ingresar el vencimiento de la poliza")
        } else if (car.cobertura === "") {
            guardarErrores("Debes ingresar el tipo de cobertura de la poliza")
        } else {
            await axios.post(`${ip}api/sepelio/autos/nuevoauto`, car)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("El auto se registro con exito", "ATENCION")
                    }
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al registrar el auto", "ATENCION")
                    console.log(error)
                })
        }

    }

    return (
        <Layout>
            <FormNuevoAuto
                patenteRef={patenteRef}
                autoRef={autoRef}
                kilometrosRef={kilometrosRef}
                responsableRef={responsableRef}
                motorRef={motorRef}
                chasisRef={chasisRef}
                modeloRef={modeloRef}
                empresaRef={empresaRef}
                nroPolizaRef={nroPolizaRef}
                vencimientoRef={vencimientoRef}
                coberturaRef={coberturaRef}
                errores={errores}
                registrarAuto={registrarAuto}

            />
        </Layout>
    )
}

export default nuevo
