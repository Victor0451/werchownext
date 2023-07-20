import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import FormSimulador from "../../../components/sepelio/servicios/simulador/FormSimulador";

const Simulador = () => {

    let kmRef = React.createRef()
    let naftaRef = React.createRef()

    const [usuario, guardarUsuario] = useState(null);
    const [valTras, guardarValTras] = useState(0)

    const simularTraslado = () => {

        guardarValTras(0)

        let km = parseInt(kmRef.current.value)
        let nafta = parseFloat(naftaRef.current.value)
        let total

        if (km <= 50) {

            total = km * 1.5 * nafta

            guardarValTras(total)

        } else if (km > 50) {

            total = km * 2 * nafta

            guardarValTras(total)


        }


    }


    let token = JsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = JsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
        }
    }, []);


    return (
        <Layout>
            <FormSimulador
                kmRef={kmRef}
                naftaRef={naftaRef}
                simularTraslado={simularTraslado}
                valTras={valTras}
            />
        </Layout>
    )
}

export default Simulador