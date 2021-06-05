import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import toastr from "toastr";
import { ip } from '../../../config/config'
import ConformidadServicio from "../../../components/socios/conformidad/ConformidadServicio";
import { useRouter } from 'next/router'

const conformidad = () => {
    let contratoRef = React.createRef()

    const [empresa, guardarEmpresa] = useState(null);
    const [socio, guardarFicha] = useState(null);
    const [errores, guardarErrores] = useState(null);
    const [servicio, guardarServicio] = useState(null);

    let token = jsCookie.get("token");
    let router = useRouter()

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            const id = router.query.id;

            traerSolicitud(id);
        }
    }, []);


    const traerSolicitud = async (id) => {
        await axios
            .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
            .then((res) => {
                const servicio = res.data;
                guardarServicio(servicio);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const buscarTitular = async (e) => {
        e.preventDefault();

        guardarFicha(null);
        guardarErrores(null);

        if (contratoRef.current.value !== "") {
            let contrato = contratoRef.current.value;
            console.log(contrato);

            await axios
                .get(
                    `${ip}api/sgi/socios/consultarficha/${contrato}`
                )
                .then((res) => {
                    let ficha = res.data;
                    guardarFicha(ficha);
                    guardarEmpresa("W");
                })
                .catch((error) => {
                    console.log(error);
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                });
        } else if (contratoRef.current.value === "") {
            const errores = "Debes Ingresar Un Numero De Contrato";
            guardarErrores(errores);
        }
    };

    const buscarTitularM = async (e) => {
        e.preventDefault();

        guardarFicha(null);
        guardarErrores(null);


        if (contratoRef.current.value !== "") {
            let contrato = contratoRef.current.value;
            console.log(contrato);

            await axios
                .get(
                    `${ip}api/sgi/socios/consultarficham/${contrato}`
                )
                .then((res) => {
                    let ficha = res.data;

                    guardarFicha(ficha);
                    guardarEmpresa("M");

                })
                .catch((error) => {
                    console.log(error);
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                });
        } else if (contratoRef.current.value === "") {
            const errores = "Debes Ingresar Un Numero De Contrato";
            guardarErrores(errores);
        }
    };

    const imprimir = (div) => {
        let contenido = document.getElementById(`${div}`).innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        document.location.reload()
    };

    return (
        <Layout>
            <ConformidadServicio
                errores={errores}
                socio={socio}
                buscarTitular={buscarTitular}
                buscarTitularM={buscarTitularM}
                contratoRef={contratoRef}
                empresa={empresa}
                servicio={servicio}
                imprimir={imprimir}
            />
        </Layout>
    )
}

export default conformidad
