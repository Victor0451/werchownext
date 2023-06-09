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
import { FormSolicitudEstPDF } from "../../../components/socios/solilcitudes/FormSolicitudEstPDF";

export default function Certificado() {

    let contratoRef = React.createRef()

    const [ficha, guardarFicha] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [ncert, guardarNcert] = useState(0)
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

    const traerSocio = async () => {

        let dni = contratoRef.current.value

        if (dni === "") {

            guardarErrores("Debes ingresar el DNI")

        } else {

            await axios
                .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
                .then((res) => {

                    if (res.data[0][0]) {

                        guardarFicha(res.data[0][0])

                    } else if (!res.data[0][0]) {

                        axios
                            .get(`${ip}api/werchow/maestro/titulardnim/${dni}`)
                            .then(resM => {

                                if (resM.data[0][0]) {

                                    guardarFicha(resM.data[0][0])

                                } else if (!resM.data[0][0]) {

                                    axios
                                        .get(`${ip}api/werchow/maestro/adherente/${dni}`)
                                        .then(resA => {

                                            if (resA.data[0][0]) {

                                                guardarFicha(resA.data[0][0])

                                            } else if (!resA.data[0][0]) {

                                                axios
                                                    .get(`${ip}api/werchow/maestro/adherentem/${dni}`)
                                                    .then(resAM => {

                                                        if (resAM.data[0][0]) {

                                                            guardarFicha(resAM.data[0][0])

                                                        } else if (!resAM.data[0][0]) {

                                                            axios.get(`${ip}api/sgi/servicios/traeradhprovidni/${dni}`)
                                                                .then(resAP => {

                                                                    if (resAP.data.length > 0) {

                                                                        guardarFicha(resAP.data[0])

                                                                    } else {

                                                                        toastr.warning("El DNI ingresado no se encontra registrado.", "ATENCION")

                                                                    }

                                                                }).catch(error => {
                                                                    console.log(error)
                                                                    toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                                                })

                                                        }
                                                    })
                                                    .catch(error => {
                                                        console.log(error)
                                                        toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                                    })

                                            }
                                        })
                                        .catch(error => {
                                            console.log(error)
                                            toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                        })
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                            })



                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                })

        }
    }

    const imprimir = (div) => {
        console.log(div)

        let contenido = document.getElementById(`${div}`).innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        registrarCert()

        setTimeout(() => {

            window.location.reload();

        }, 1000);
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
                <BuscarSocio
                    traerSocio={traerSocio}
                    contratoRef={contratoRef}
                    errores={errores}
                />
            )}

            {!ficha ? null
                : (

                    <>

                        {
                            ficha.GRUPO !== 6 || ficha.GRUPO !== 66 ? (

                                <div className="mt-4 mb-4 alert alert-info border border-dark container text-center text-uppercase">
                                    La ficha del solicitante no pertenece a un grupo de POLICIA o ESTUDIANTE DE POLICIA. Verifica su estado.
                                </div>

                            ) : null
                        }

                        <div className="mt-4 container p-4 list border border-dark ">
                            <h2>
                                <strong>
                                    <u>
                                        Opciones
                                    </u>
                                </strong>
                            </h2>
                            <div className="mt-4 row ">
                                <div className="col-md-4">
                                    <button className="btn btn-sm  btn-primary"
                                        onClick={() => {
                                            imprimir("solicitud")
                                        }}
                                    >Imprimir PRE IMPRESO</button>
                                </div>

                                <div className="col-md-4">
                                    <button className="btn btn-sm  btn-primary"
                                        onClick={() => {
                                            imprimir("solicitudpdf")
                                        }}
                                    >Imprimir PDF</button>
                                </div>

                                <div className="col-md-4">
                                    <a href="/socios/solicitudes/certificado" className="btn btn-sm  btn-danger">Cancelar</a>
                                </div>
                            </div>
                        </div>
                        <div id='solicitud' className="print-soli">
                            <FormSolicitudEst
                                ficha={ficha}
                                ncert={ncert}
                            />
                        </div>
                        <div id='solicitudpdf' className="print-soli">
                            <FormSolicitudEstPDF
                                ficha={ficha}
                                ncert={ncert}
                            />
                        </div>
                    </>

                )}


        </Layout>
    )
}
