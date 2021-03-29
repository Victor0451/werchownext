import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import ImprimirConvenio from "../../../components/socios/conveniodeuda/ImprimirConvenio";
import { ip } from '../../../config/config'

const imprimirconvenio = () => {

    const [convenio, guardarConvenio] = useState(null)

    let token = jsCookie.get("token");
    let router = useRouter()

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");

        } else {
            traerConvenio()
        }

    }, []);

    const imprimir = () => {
        let contenido = document.getElementById("solicitud").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload();
    };


    const traerConvenio = () => {

        let id = router.query.id

        axios.get(`${ip}api/sgi/socios/traerconvenio/${id}`)
            .then(res => {
                guardarConvenio(res.data)

            }).catch(error => {
                console.log(error)
            })

    }


    return (
        <Layout>
            <div id="solicitud">
                <ImprimirConvenio ficha={convenio} />
            </div>

            <div className="mb-4 mt-4 container  border border-dark alert alert-primary p-4">
                <div className="row  d-flex justify-content-center">
                    <div className="col-md-4">
                        <button className="btn btn-block btn-primary" onClick={imprimir}>Imprimir</button>
                    </div>
                    <div className="col-md-4">
                        <a href="/socios/conveniodeuda/listadoconvenios" className="btn btn-block btn-danger">Cancelar</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default imprimirconvenio
