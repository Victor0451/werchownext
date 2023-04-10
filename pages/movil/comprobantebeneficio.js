import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from "../../config/config";
import jsCookie from "js-cookie";
import moment from "moment";
import FormComprobanteBeneficio from "../../components/socios/clubwerchow/FormComprobanteBeneficio";


const comprobantebeneficio = () => {

    const [beneficio, guardarBeneficio] = useState(null)


    const traerBeneficio = async (ntrans) => {

        await axios.get(`${ip}api/clubwerchow/beneficios/traerbeneficio/${ntrans}`)
            .then(res => {

                guardarBeneficio(res.data)

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el beneficio", "ATENCION")
            })

    }

    const imprimir = () => {
        let contenido = document.getElementById("comprobante").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;
    };

    let router = useRouter();

    if (router.query.ntrans) {
        jsCookie.set("ntrans", router.query.ntrans)

    }

    useEffect(() => {

        const ntrans = jsCookie.get("ntrans")

        traerBeneficio(ntrans)

        // setTimeout(() => {
        //     imprimir()
        // }, 1000);

    }, []);

    return (
        <Layout f={"nonav"} >
            <div id="comprobante" >
                <FormComprobanteBeneficio
                    beneficio={beneficio}

                />
            </div>
        </Layout>
    )
}

export default comprobantebeneficio