import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import FormReportes from "../../../../components/gestion/werchow/orden/FormReportes";
import ListadoReporte from "../../../../components/gestion/werchow/orden/ListadoReporte";

const Reportes = () => {

    let desdeRef = React.createRef()
    let hastaRef = React.createRef()
    let ordenRef = React.createRef()
    let autorizadaRef = React.createRef()

    const [errores, guardarErrores] = useState(null)
    const [reporte, guardarReporte] = useState(null)


    const tarerRedumenOrdenesAutorizadas = async () => {

        guardarErrores(null)

        if (desdeRef.current.value === "") {

            guardarErrores("el campo 'DESDE' no puede estar vacio")

        } else if (hastaRef.current.value === "") {

            guardarErrores("el campo 'HASTA' no puede estar vacio")

        } else if (desdeRef.current.value > hastaRef.current.value) {

            guardarErrores("el campo 'DESDE' no puede ser mayor que el campo 'HASTA'")

        } else if (ordenRef.current.value === "no") {

            guardarErrores("debes elegir un tipo de orden")

        } else if (autorizadaRef.current.value === "no") {

            guardarErrores("debes elegir si las ordenes estan autorizadas o no")

        } else {


            await axios.get(`${ip}api/sgi/ordenpago/traerresumenordenesautorizadas`, {

                params: {
                    desde: desdeRef.current.value,
                    hasta: hastaRef.current.value,
                    orden: ordenRef.current.value,
                    autorizada: autorizadaRef.current.value
                }

            })
                .then(res => {
                    console.log(res.data)
                    if (res.data.length > 0) {

                        guardarReporte(res.data)
                        console.log(res.data)

                    } else {

                        toastr.info("No hay datos registrados", "ATENCION")

                    }

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al realizar el reporte", "ATENCION")
                })

        }

    }

    const calcTotal = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {

            total += parseFloat(arr[i].total)

        }

        return total.toFixed(2)

    }


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }

    }, []);

    return (
        <Layout>
            <FormReportes
                desdeRef={desdeRef}
                hastaRef={hastaRef}
                ordenRef={ordenRef}
                autorizadaRef={autorizadaRef}
                errores={errores}
                tarerRedumenOrdenesAutorizadas={tarerRedumenOrdenesAutorizadas}
            />

            {
                reporte ? (

                    <ListadoReporte
                        listado={reporte}
                        calcTotal={calcTotal}
                    />

                ) : null
            }


        </Layout>
    )
}

export default Reportes