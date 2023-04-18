import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ip } from "../../config/config";
import { registrarHistoria } from '../../utils/funciones'
import FormInfoGremios from '../../components/movil/FormInfoGremios'
import FormLogInfoGremio from "../../components/movil/FormLogInfoGremio";


const infogremios = () => {

    let dniRef = React.createRef()

    const [errores, guardarErrores] = useState(null)
    const [registro, guardarRegistro] = useState([])
    const [log, guardarLog] = useState(false)
    const [info, guardarInfo] = useState(null)

    let router = useRouter()

    if (router.query.f) {
        jsCookie.set("fgr", router.query.f)
        jsCookie.set("g", router.query.g)

    }

    const verificarSocio = async () => {

        let dni = dniRef.current.value

        if (dni === "") {

            guardarErrores("Debes ingresar tu DNI para verificar si estar registrado")

        } else {

            await axios.get(`${ip}api/sgi/servicios/verificarnosocio/${dni}`)
                .then(res => {

                    if (res.data) {

                        guardarRegistro(res.data)

                        guardarLog(true)

                        toastr.info(`Felicidades ${res.data.nosocio}, ya estas registrado y participando por el sorteo.`, "ATENCION")

                    } else {

                        toastr.info("Debes registrate primero para poder participar el sorteo", "ATENCION")
                        guardarInfo("Debes registrate primero para poder participar el sorteo")
                    }


                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al verificar su existencia", "ATENCION")

                })

        }

    }


    return (
        <Layout f={"nonav"}>

            {

                jsCookie.get("fgr") === "0" ? (


                    log === false ? (

                        <FormLogInfoGremio
                            verificarSocio={verificarSocio}
                            dniRef={dniRef}
                            errores={errores}
                            info={info}
                            g={jsCookie.get("g")}
                        />

                    ) : log === true ? (

                        <FormInfoGremios />

                    ) : null



                ) : jsCookie.get("fgr") === "1" ?
                    (
                        <FormInfoGremios />

                    ) : null

            }



        </Layout>
    )
}

export default infogremios