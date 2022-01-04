import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from "../../../config/config";
import LegajoVirtual from "../../../components/sepelio/autos/LegajoVirtual";

const legajo = () => {

    const [archivos, guardarArchivos] = useState(null);
    const [auto, guardarAuto] = useState(null);
    const [user, guardarUsuario] = useState(null)


    let token = jsCookie.get("token");
    const router = useRouter();

    const traerAuto = async (id) => {
        await axios
            .get(`${ip}api/sepelio/autos/traerauto/${id}`)
            .then((res) => {
                guardarAuto(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerAchivos = async (id) => {
        guardarArchivos(null)
        await axios
            .get(`${ip}api/archivos/legajovirtualautos/listaarchivos/${id}`)
            .then((res) => {
                let archivos = res.data;

                guardarArchivos(archivos);

                if (res.data.length === 0) {
                    toastr.warning("Este legajo no tiene archivos adjuntos", "ATENCION")

                } else {
                    toastr.info("Se trajeron los archivos adjuntados a este legajo", "ATENCION")

                }

            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

            traerAchivos(router.query.idpatente);
            traerAuto(router.query.idauto);
        }
    }, []);

    return (
        <Layout>
            <LegajoVirtual
                auto={auto}
                archivos={archivos}
                traerAchivos={traerAchivos}
                user={user}
            />
        </Layout>
    )
}

export default legajo
