import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { ip } from "../../../../config/config";
import ListadoCajasGeneradas from "../../../../components/gestion/werchow/caja/ListadoCajasGeneradas";
import ModalImprimirCaja from "../../../../components/gestion/werchow/caja/ModalImprimirCaja";

const ListadoCajas = () => {

    const [cajas, guardarCajas] = useState(null)
    const [ingresos, guardarIngresos] = useState(null)
    const [egresos, guardarEgresos] = useState(null)
    const [fec, guardarFec] = useState(null)


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            traerCajas()

        }
    }, []);


    const traerCajas = async () => {

        await axios.get(`${ip}api/sgi/servicios/listadocajas`)
            .then(res => {

                guardarCajas(res.data)

            })
            .catch(error => {
                console.log(error)

                toastr.error("Ocurrio un error al traer el listado de cajas", "ATENCION")
            })

    }

    const traerMovimientos = async (fecha) => {

        guardarFec(fecha)

        await axios.get(`${ip}api/sgi/servicios/traeringresos/${fecha}`)
            .then(res => {
                guardarIngresos(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer los ingresos", "ATENCION")
            })

        await axios.get(`${ip}api/sgi/servicios/traeregresos/${fecha}`)
            .then(res => {
                guardarEgresos(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer los egresos", "ATENCION")
            })

    }

    const calcTotal = (arr) => {

        let total = 0

        if (arr) {
            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].IMPORTE)

            }

            return total.toFixed(2)
        }



    }

    const imprimir = () => {
        let contenido = document.getElementById("caja").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.replace('/gestion/werchow/servicios/listadocajas');
    };



    return (
        <Layout>
            <ListadoCajasGeneradas
                listado={cajas}
                traerMovimientos={traerMovimientos}
            />

            <ModalImprimirCaja
                ingresos={ingresos}
                egresos={egresos}
                calcTotal={calcTotal}
                imprimir={imprimir}
                fec={fec}
            />

        </Layout>
    )
}

export default ListadoCajas
