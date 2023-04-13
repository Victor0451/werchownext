import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ip } from "../../config/config";
import { registrarHistoria } from '../../utils/funciones'
import FormCodigoNoSocio from "../../components/movil/FormCodigoNoSocio";
import ImprimirCodigoNoSocio from "../../components/movil/ImprimirCodigoNoSocio";

const CodigoNoSocio = () => {

    let noSocioRef = React.createRef()
    let dniRef = React.createRef()
    let mailRef = React.createRef()
    let telefonoRef = React.createRef()
    let obraSocRef = React.createRef()

    const [errores, guardarErrores] = useState(null)
    const [registro, guardarRegistro] = useState(null)



    const registrarNoSocio = async () => {

        guardarErrores(null)

        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono


        if (noSocioRef.current.value === "") {

            guardarErrores("Debes ingresar tu apellido y nombre")

        } else if (dniRef.current.value === "") {

            guardarErrores("Debes ingresar tu DNI")

        } else if (telefonoRef.current.value === "") {

            guardarErrores("Debes ingresar un numero de telefono")

        } else if (mailRef.current.value === "") {

            guardarErrores("Debes ingresar una direccion de mail")

        } else if (obraSocRef.current.value === "") {

            guardarErrores("Debes ingresar tu obra social, en caso de no tener una ingresa 'NO TENGO'")

        } else {

            if (emailRegex.test(mailRef.current.value)) {

                let noSoc = {

                    nosocio: noSocioRef.current.value,
                    dni: dniRef.current.value,
                    telefono: telefonoRef.current.value,
                    mail: mailRef.current.value,
                    obra_soc: obraSocRef.current.value,
                    fecha: moment().format('YYYY-MM-DD'),
                    codigo: Math.round(Math.random() * 999999),
                    estado: 1,
                    gremio: "NO"
                }


                await axios.get(`${ip}api/sgi/servicios/verificarnosocio/${noSoc.dni}`)
                    .then(res => {

                        if (res.data) {

                            toastr.info("Usted ya solicito este benefico, en caso de tener interes por este u otro servicio de la empresa, puede acercarce a nuestras sucursales y solictar mas informacion para su afiliacion. Muchas gracias.", "ATENCION")

                        } else {

                            axios.post(`${ip}api/sgi/servicios/regnosocio`, noSoc)
                                .then(res1 => {

                                    if (res1.status === 200) {

                                        toastr.success("Sus datos fueron registrados con exito", "ATENCION")

                                        guardarRegistro(res1.data)

                                        mandarMail(noSoc)
                                    }

                                })
                                .catch(error => {
                                    console.log(error)
                                    toastr.error("Ocurrio un error al registrar sus datos", "ATENCION")

                                })

                        }

                    })
                    .catch(error => {
                        console.log(error)
                        toastr.error("Ocurrio un error al verificar su existencia", "ATENCION")

                    })

            } else {

                guardarErrores("Debes ingresar una direccion de mail valida, vefirica que al principio y/o final de la direccion no existan espacios")
            }



        }
    }


    const mandarMail = (array) => {
        fetch("/api/mail/sgi/codigonosocio", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(array),
        })
            .then((res) => {
                if (res.status === 200) {
                    toastr.info(
                        "Se envio un email con el codigo generado para presentar en clinica otero",
                        "ATENCION"
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Layout f={"nonav"}>

            {
                !registro ? (
                    <FormCodigoNoSocio
                        registrarNoSocio={registrarNoSocio}
                        noSocioRef={noSocioRef}
                        dniRef={dniRef}
                        mailRef={mailRef}
                        telefonoRef={telefonoRef}
                        obraSocRef={obraSocRef}
                        errores={errores}
                    />
                ) : (

                    <ImprimirCodigoNoSocio
                        registro={registro}
                    />

                )
            }




        </Layout>
    )
}

export default CodigoNoSocio