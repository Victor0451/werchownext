import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ip } from "../../../../config/config";
import { registrarHistoria } from '../../../../utils/funciones'
import FormCodigoNoSocio from "../../../../components/gestion/werchow/servicios/FormCodigoNoSocio";
import ImprimirCodigoNoSocio from "../../../../components/gestion/werchow/servicios/ImprimirCodigoNoSocio";

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



            let noSoc = {

                nosocio: noSocioRef.current.value,
                dni: dniRef.current.value,
                telefono: telefonoRef.current.value,
                mail: mailRef.current.value,
                obra_soc: obraSocRef.current.value,
                fecha: moment().format('YYYY-MM-DD'),
                codigo: Math.round(Math.random() * 999999)

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

        }
    }

    const imprimir = () => {
        let contenido = document.getElementById("orden").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.replace('/gestion/werchow/servicios/codigonosocio');
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
                        imprimir={imprimir}
                    />

                )
            }




        </Layout>
    )
}

export default CodigoNoSocio