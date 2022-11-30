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
import ModalLeerMensaje from "../../components/mensajeria/ModalLeerMensaje";
import CentroDeMensajeria from "../../components/mensajeria/CentroDeMensajeria";
import { registrarHistoria } from '../../utils/funciones'

const Nuevo = () => {

    let destinatarioRef = React.createRef()
    let urlRef = React.createRef()
    let asuntoRef = React.createRef()

    const [errores, guardarErrores] = useState(null)
    const [descrip, guardarDescrip] = useState(null)
    const [user, guardarUser] = useState(null);
    const [operadores, guardarOperadores] = useState(null);
    const [codmail, guardarCodmail] = useState(null)
    const [mensajes, guardarMensajes] = useState(null)
    const [mensajesEnv, guardarMensajesEnv] = useState(null)
    const [msj, guardarMensaje] = useState(null)
    const [archivos, guardarArchivos] = useState(null)
    const [destino, guardarDestino] = useState([])
    const [cajas, guardarCajas] = useState([])
    const [url, guardarUrl] = useState([])


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
                traerMensajesEnviados(user.usuario)
                traerCajas(user.usuario)

            }

            listadoOperadores()
            guardarCodmail(uuidv4())


        }
    }, []);


    const traerMensajes = async (id) => {

        await axios.get(`${ip}api/sgi/mails/listmsj/${id}`)
            .then(res => {

                if (res.data) {

                    guardarMensajes(res.data)

                }

            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al traer los mensajes", "ATENCION")

            })

    }

    const traerMensajesEnviados = async (id) => {

        await axios.get(`${ip}api/sgi/mails/listmsjenv/${id}`)
            .then(res => {

                if (res.status === 200) {

                    guardarMensajesEnv(res.data)

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

            const mail = {
                fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
                envia: user,
                recibe: "",
                descrip: descrip,
                codmail: codmail,
                asunto: asuntoRef.current.value,
                leido: 0,
                fecha_leido: null,
                url_caja: url[0]
            }

            if (destino.length > 0) {

                for (let i = 0; i < destino.length; i++) {

                    mail.recibe = destino[i]

                    postMSJ(mail)

                    let accion = `${mail.envia} envio un mail interno al destinatario ${destino[i]} el dia ${moment(mail.fecha).format('DD/MM/YYYY HH:mm:ss')}.`

                    registrarHistoria(accion, user)

                }

            } else {

                toastr.error("Debes seleccionar al menos un destinatario", "ATENCION")
                guardarErrores("Debes seleccionar al menos un destinatario")

            }

        }

    }

    const postMSJ = async (mail) => {

        await axios.post(`${ip}api/sgi/mails/nuevomail`, mail)
            .then(res => {

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

    const agregarDestino = () => {

        let dest = destinatarioRef.current.value

        if (dest === "no") {

            guardarErrores("Debes elegir un destinatario")

        } else {

            let encontrado = false

            for (let i = 0; i < destino.length; i++) {
                if (destino[i] === dest) {
                    encontrado = true;
                }
            }
            if (encontrado === true) {

                toastr.warning("Este destinatario ya fue agregado", "ATENCION");

            } else if (encontrado === false) {

                guardarDestino([...destino, dest])

            }

        }

    }

    const eliminarDestino = (index) => {

        destino.splice(index, 1);

        guardarDestino([...destino])

        toastr.success("El destinatario fue eliminado", "ATENCION");

    }

    const agregarURL = () => {

        let url1 = urlRef.current.value

        if (url1 === "no") {

            guardarErrores("Debes elegir una caja")

        } else {

            if (url.length > 0) {

                toastr.warning("Solo puedes adjuntar una caja por mail", "ATENCION")

            } else {

                guardarUrl([...url, url1])

            }

        }




        // CODIGO PARA CARGAR VARIAS CAJAS 

        // else {

        //     let encontrado = false

        //     for (let i = 0; i < url1.length; i++) {
        //         if (url1[i] === url1) {
        //             encontrado = true;
        //         }
        //     }
        //     if (encontrado === true) {

        //         toastr.warning("Esta caja ya fue agregado", "ATENCION");

        //     } else if (encontrado === false) {

        //         guardarUrl([...url, url1])

        //     }

        // }

    }

    const eliminarURL = (index) => {

        url.splice(index, 1);

        guardarUrl([...url])

        toastr.success("La caja fue eliminado", "ATENCION");

    }

    const traerCajas = async (id) => {

        await axios.get(`${ip}api/sgi/cajasucursales/traercajasmail/${id}`)
            .then(res => {

                guardarCajas(res.data)

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    return (
        <Layout>

            <CentroDeMensajeria
                mensajes={mensajes}
                guardarMensaje={guardarMensaje}
                msjLeido={msjLeido}
                traerAchivos={traerAchivos}
                mensajesEnv={mensajesEnv}
            />

            <ModalNuevoMensaje
                guardarDescrip={guardarDescrip}
                registrarMsg={registrarMsg}
                errores={errores}
                destinatarioRef={destinatarioRef}
                asuntoRef={asuntoRef}
                operadores={operadores}
                codmail={codmail}
                agregarDestino={agregarDestino}
                destino={destino}
                eliminarDestino={eliminarDestino}
                cajas={cajas}
                url={url}
                urlRef={urlRef}
                agregarURL={agregarURL}
                eliminarURL={eliminarURL}
            />

            <ModalLeerMensaje
                msj={msj}
                archivos={archivos}
                url={url}
            />

        </Layout>
    )
}

export default Nuevo