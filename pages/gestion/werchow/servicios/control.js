import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import { registrarHistoria } from '../../../../utils/funciones'
import FormControlOrdenes from "../../../../components/gestion/werchow/servicios/FormControlOrdenes";
import ListadoControlOrdenes from "../../../../components/gestion/werchow/servicios/ListadoControlOrdenes";

const Control = () => {

    let desdeRef = React.createRef()
    let hastaRef = React.createRef()


    const [user, guardarUsuario] = useState(null);
    const [listado, guardarListado] = useState(null);
    const [errores, guardarErrores] = useState(null);
    const [rango, guardarRango] = useState([])


    const traerListado = async () => {

        let desde = desdeRef.current.value
        let hasta = hastaRef.current.value

        if (desde === "" || hasta === "") {

            guardarErrores("Los campos DESDE y HASTA no deben estar vacios")

        } else if (desde > hasta) {

            guardarErrores("El campo DESDE no puede ser mayor que el campo HASTA")

        } else {

            let rango = {
                desde: desde,
                hasta: hasta
            }

            guardarRango(rango)

            await axios.get(`${ip}api/sgi/servicios/buscarordenes`, {

                params: {
                    desde: desde,
                    hasta: hasta
                }

            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListado(res.data)

                        toastr.success("Listado encontrado", "ATENCION")

                    } else if (res.data.length === 0) {

                        toastr.info("No se encuentran ordenes para este rango de fechas", "ATENCION")

                    }
                })
                .catch(error => {

                    console.log(error)

                    toastr.error("Ocurrio un error al buscar el listado", "ATENCION")

                })

        }


    }

    const imprimir = () => {

        let contenido = document.getElementById("list").innerHTML;

        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload()
    };

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

        }
    }, []);

    return (
        <Layout>

            <FormControlOrdenes
                traerListado={traerListado}
                desdeRef={desdeRef}
                hastaRef={hastaRef}
                errores={errores}
            />

            {
                listado ? (

                    < ListadoControlOrdenes
                        listado={listado}
                        rango={rango}
                        imprimir={imprimir}
                    />

                ) : null
            }

        </Layout>
    )
}

export default Control