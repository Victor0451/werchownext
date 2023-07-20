import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from "toastr";
import ListadoSolicitudes from "../../../components/socios/clubwerchow/ListadoSolicitudes";
import { ip } from '../../../config/config'
import ExportarPadron from "../../../components/socios/clubwerchow/ExportarPadron";

const solicitudsorteo = () => {

    const [listsolicitudes, guardarListSolicitudes] = useState(null);

    let token = jsCookie.get("token");

    const traerSolic = async () => {
        await axios
            .get(`${ip}api/clubwerchow/socios/solicitudessorteo`)
            .then((res) => {
                let listsolicitudes = res.data;
                guardarListSolicitudes(listsolicitudes);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const imprimir = () => {

        let contenido = document.getElementById("list").innerHTML;

        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload()
    };


    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerSolic();
        }
    }, []);

    return (
        <Layout>

            <ListadoSolicitudes listsolicitudes={listsolicitudes} />

            <div className='border border-dark mt-4 mb-4 container list p-4'>

                <h2>
                    <u>
                        Opciones
                    </u>
                </h2>

                <div className="row mt-4 n border border-dark p-4 d-flex justify-content-center">


                    <ExportarPadron
                        listado={listsolicitudes}
                        titulo={`Solicitud de Sorteos`}
                    />

                    <button
                        className='ml-1 btn btn-primary'
                        onClick={imprimir}
                    >
                        Imprimir
                    </button>

                </div>

            </div>

        </Layout>
    );

}

export default solicitudsorteo