import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import toastr from "toastr";
import Link from "next/link";
import BuscarSocio from "../../../components/socios/solilcitudes/BuscarSocio";
import { ip } from '../../../config/config'
import { FormSolicitudEst } from "../../../components/socios/solilcitudes/FormSolicitudEst";

export default function Certificado() {

    let contratoRef = React.createRef()

    const [ficha, guardarFicha] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [ncert, guardarNcert] = useState(0)
    const [empresa, guardarEmpresa] = useState(null)
    const [adhs, guardarAdhs] = useState(null)
    const [user, guardarUser] = useState(null)


    let token = jsCookie.get("token");
    let usuario = jsCookie.get("usuario")

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            if (usuario) {
                let user = JSON.parse(usuario);
                guardarUser(user);
            }

            setInterval(() => {

                traerNCert()

            }, 5000);
        }
    }, []);

    const buscarTitular = async (e) => {
        e.preventDefault();

        guardarFicha(null);
        guardarErrores(null);
        guardarAdhs(null);

        if (contratoRef.current.value !== "") {
            let contrato = contratoRef.current.value;

            await axios
                .get(
                    `${ip}api/werchow/maestro/titular/${contrato}`
                )
                .then((res) => {
                    let ficha = res.data[0][0];
                    guardarFicha(ficha);

                    if (ficha === "undefined") {
                        toastr.error(
                            "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                            "ATENCION"
                        );
                        const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                        guardarErrores(errores);
                    }
                    traerAdhs(ficha.CONTRATO);
                    guardarEmpresa("W");
                })
                .catch((error) => {
                    console.log(error);
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
        guardarAdhs(null);

        if (contratoRef.current.value !== "") {
            let contrato = contratoRef.current.value;

            await axios
                .get(
                    `${ip}api/werchow/maestro/titularm/${contrato}`
                )
                .then((res) => {
                    let ficha = res.data[0][0];
                    guardarFicha(ficha);


                    if (ficha === "undefined") {
                        toastr.error(
                            "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                            "ATENCION"
                        );
                        const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                        guardarErrores(errores);
                    }

                    guardarEmpresa("M");
                    traerAdhsM(ficha.CONTRATO);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else if (contratoRef.current.value === "") {
            const errores = "Debes Ingresar Un Numero De Contrato";
            guardarErrores(errores);
        }
    };

    const traerAdhs = async (contrato) => {
        await axios
            .get(
                `${ip}api/werchow/adherent/adherentestitsoli/${contrato}`
            )
            .then((res) => {
                guardarAdhs(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerAdhsM = async (contrato) => {
        await axios
            .get(
                `${ip}api/mutual/adherent/adherentestit/${contrato}`
            )
            .then((res) => {
                guardarAdhs(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const imprimir = () => {
        let contenido = document.getElementById("solicitud").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload();
    };

    const registrarCert = async () => {

        const cert = {

            contrato: ficha.CONTRATO,
            socio: `${ficha.APELLIDOS}, ${ficha.NOMBRES}`,
            fecha: moment().format('YYYY-MM-DD'),
            operador: user.usuario,
            ncert: ncert
        }


        await axios.post(`${ip}api/sgi/socios/regcert`, cert)
            .then(res => {

                if (res.status === 200) {

                    toastr.success("Certificado Registrado", "ATENCION")

                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al registrar el certificado", "ATENCION")
            })

    }

    const traerNCert = async () => {

        await axios.get(`${ip}api/sgi/socios/ncert`)
            .then(res => {

                setTimeout(() => {

                    if (!res.data) {

                        guardarNcert(1)

                    } else {

                        guardarNcert(`${res.data.idcertificado + 1}`)

                    }
                }, 500);

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el N° de Orden", "ATENCION")
            })
    }


    return (
        <Layout>

            {ficha ? null : (
                <BuscarSocio buscarTitular={buscarTitular} buscarTitularM={buscarTitularM} contratoRef={contratoRef} errores={errores} />
            )}

            {!ficha ? null
                : ficha.GRUPO === 6 || ficha.GRUPO === 66 ? (

                    <>
                        <div className="mt-4 container p-4 list border border-dark ">
                            <h2>
                                <strong>
                                    <u>
                                        Opciones
                                    </u>
                                </strong>
                            </h2>
                            <div className="mt-4 row">
                                <div className="col-md-6">
                                    <button className="btn btn-sm btn-block btn-primary"
                                        onClick={() => {
                                            imprimir()
                                            registrarCert()
                                        }}
                                    >Imprimir</button>
                                </div>

                                <div className="col-md-6">
                                    <a href="/socios/solicitudes/ingreso" className="btn btn-sm btn-block btn-danger">Cancelar</a>
                                </div>
                            </div>
                        </div>
                        <div id='solicitud' className="print-soli">
                            <FormSolicitudEst
                                ficha={ficha}
                                ncert={ncert}
                            />
                        </div>
                    </>

                ) : (

                    <div className="border border-dark alert alert-info text-center text-uppercase mt-4 mb-4">
                        El socio ingresado no es un estudiante de policia
                    </div>
                )}


        </Layout>
    )
}
