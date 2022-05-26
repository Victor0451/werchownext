import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../config/config";
import { v4 as uuidv4 } from 'uuid';
import ModalNuevoMensaje from "../../components/mensajeria/ModalNuevoMensaje";
import ListadoMensajes from "../../components/mensajeria/ListadoMensajes";
import ModalLeerMensaje from "../../components/mensajeria/ModalLeerMensaje";

const Nuevo = () => {

    let destinatarioRef = React.createRef()
    let asuntoRef = React.createRef()

    const [errores, guardarErrores] = useState(null)
    const [descrip, guardarDescrip] = useState(null)
    const [user, guardarUser] = useState(null);
    const [operadores, guardarOperadores] = useState(null);
    const [codmail, guardarCodmail] = useState(null)
    const [mensajes, guardarMensajes] = useState(null)
    const [msj, guardarMensaje] = useState(null)
    const [archivos, guardarArchivos] = useState(null)



    let token = jsCookie.get("token");
    let usuario = jsCookie.get("usuario");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            if (usuario) {
                let user = JSON.parse(usuario);
                guardarUser(user.usuario);
                traerMensajes(user.usuario)

            }

            listadoOperadores()
            guardarCodmail(uuidv4())


        }
    }, []);


    const traerMensajes = async (id) => {

        await axios.get(`${ip}api/sgi/mails/listmsj/${id}`)
            .then(res => {

                if (res.status === 200) {

                    guardarMensajes(res.data)

                }

            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al traer los mensajes", "ATENCION")

            })

    }

    const registrarMsg = async () => {



        guardarErrores(null)

        if (destinatarioRef.current.value === 'no') {

            guardarErrores("Debes elegir un destinatario")

        } else if (asuntoRef.current.value === "") {

            guardarErrores("Debes ingresar un asunto")

        } else {

            console.log("first")

            const mail = {
                fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
                envia: user,
                recibe: destinatarioRef.current.value,
                descrip: descrip,
                codmail: codmail,
                asunto: asuntoRef.current.value,
                leido: 0,
                fecha_leido: null
            }


            await axios.post(`${ip}api/sgi/mails/nuevomail`, mail)
                .then(res => {
                    console.log(res)
                    if (res.status === 200) {

                        toastr.info("Se envio el mail correctamente", "ATENCION");

                        setTimeout(() => {
                            Router.reload()
                        }, 500);
                    }

                })
                .catch(error => {

                    console.log(error)
                    toastr.error("Ocurrio un error al enviar el mail", "ATENCION")

                })

        }

    }

    const listadoOperadores = async () => {

        await axios.get(`${ip}api/sgi/mails/listadoops`)
            .then(res => {

                if (res.status === 200) {

                    guardarOperadores(res.data)

                }

            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al traer los operadores", "ATENCION")

            })

    }

    const msjLeido = async (id) => {
        await axios.put(`${ip}api/sgi/mails/leermsj/${id}`)
            .then(res => {

                if (res.status === 200) {

                    traerMensajes(user)

                }

            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error", "ATENCION")

            })
    }


    const traerAchivos = async (id) => {
        await axios
            .get(`${ip}api/archivos/mails/listaarchivos/${id}`)
            .then((res) => {
                let archivos = res.data;

                guardarArchivos(archivos);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Layout>

            {mensajes ? (
                <ListadoMensajes
                    mensajes={mensajes}
                    guardarMensaje={guardarMensaje}
                    msjLeido={msjLeido}
                    traerAchivos={traerAchivos}
                />
            ) : (<div className="alert alert-info text-center text-uppercase border border-dark mt-4 mb-4 container">
                No tienes mensajes en tu casilla
            </div>)}


            <ModalNuevoMensaje
                guardarDescrip={guardarDescrip}
                registrarMsg={registrarMsg}
                errores={errores}
                destinatarioRef={destinatarioRef}
                asuntoRef={asuntoRef}
                operadores={operadores}
                codmail={codmail}

            />

            <ModalLeerMensaje
                msj={msj}
                archivos={archivos}
            />

        </Layout>
    )
}

export default Nuevo