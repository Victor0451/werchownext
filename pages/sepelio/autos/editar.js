import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import moment from "moment";
import toastr from 'toastr'
import { ip } from '../../../config/config'
import FormEditarAuto from '../../../components/sepelio/autos/FormEditarAuto';
import { registrarHistoria } from '../../../utils/funciones'


const editar = () => {

    let kilometrosRef = React.createRef();
    let responsableRef = React.createRef();
    let motorRef = React.createRef();
    let chasisRef = React.createRef();
    let modeloRef = React.createRef();

    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [auto, guardarAuto] = useState(null)
    const [operadorsep, guardarOperadorSep] = useState(null)



    let token = jsCookie.get("token");
    let router = useRouter();

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            traerAuto(router.query.idauto)

            traerOperador()

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
        }
    }, []);

    const traerAuto = async (id) => {
        await axios
            .get(` ${ip}api/sepelio/autos/traerauto/${id}`)
            .then((res) => {
                guardarAuto(res.data);
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

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

    const regHistorial = async () => {
        const historial = {
            patente: auto.patente,
            idauto: auto.idauto,
            operador: user,
            fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
            accion: "EDICION DE DATOS"
        }

        await axios.post(`${ip}api/sepelio/autos/registrarhistorial`, historial)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    toastr.info("Se registro este movimiento en el historial", "ATENCION")
                }
            }).catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al registrar el historial", "ATENCION")
            })

    }

    const editarAuto = async () => {

        guardarErrores(null)

        const car = {
            auto: modeloRef.current.value,
            kilometros: kilometrosRef.current.value,
            responsable: responsableRef.current.value,
            motor: motorRef.current.value,
            chasis: chasisRef.current.value,
            modelo: modeloRef.current.value,

        }

        if (car.auto === "") {
            car.auto = auto.auto
        } else if (car.kilometros === "") {
            car.kilometros = auto.kilometros
        } else if (car.kilometros < auto.kilometros) {
            toastr.warning("La cantidad de KM ingresados no puede ser menor a la cantidad de KM que ya estan registrados", "ATENCION")
            guardarErrores("La cantidad de KM ingresados no puede ser menor a la cantidad de KM que ya estan registrados")
        } else if (car.responsable === "") {
            car.responsable = auto.responsable
        } else if (car.nro_poliza === "") {
            car.nro_poliza = auto.nro_poliza
        } else if (car.motor === "") {
            car.motor = auto.motor
        } else if (car.chasis === "") {
            car.chasis = auto.chasis
        } else if (car.modelo === "") {
            car.modelo = auto.modelo
        } else if (car.responsable === "no") {
            car.responsable = auto.responsable

            await axios.put(`${ip}api/sepelio/autos/editarauto/${auto.idauto}`, car)
                .then(res => {
                    console.log(res.data)

                    if (res.status === 200) {
                        toastr.success("La edicion se realizo con exito", "ATENCION")

                        regHistorial()

                        let accion = `Se edito el registro del auto modelo: ${car.auto} - patente:${patente.patente}`

                        registrarHistoria(accion, user)
                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al realizar la edicion", "ATENCION")
                })

        }
    }

    return (
        <Layout>
            <FormEditarAuto
                auto={auto}
                kilometrosRef={kilometrosRef}
                responsableRef={responsableRef}
                motorRef={motorRef}
                chasisRef={chasisRef}
                modeloRef={modeloRef}
                errores={errores}
                operadorsep={operadorsep}
                editarAuto={editarAuto}
            />
        </Layout>
    )
}

export default editar
