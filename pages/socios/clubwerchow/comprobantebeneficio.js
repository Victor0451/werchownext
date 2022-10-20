import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from "../../../config/config";
import jsCookie from "js-cookie";
import moment from "moment";
import FormComprobanteBeneficio from "../../../components/socios/clubwerchow/FormComprobanteBeneficio";


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

    }, []);

    return (
        <Layout>

            <FormComprobanteBeneficio
                beneficio={beneficio}

            />

            {/* <div className="container listcw border border-dark alert alert-primary mt-4">
                <div className=" border border-dark p-4 border list">
                    <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
                    <div className="row d-flex justify-content-center">
                        <button className="btn btn-primary" onClick={imprimir} >
                            Imprimir

                        </button>

                    </div>
                </div>
            </div> */}

        </Layout>
    )
}

export default comprobantebeneficio