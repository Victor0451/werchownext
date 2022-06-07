import React, { useEffect, useState } from "react";
import Layout from "../../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../../config/config'
import FormNuevaCaja from "../../../../../components/gestion/sucursales/cajas/FormNuevaCaja";

const nueva = () => {

    let entradaRef = React.createRef()
    let salidaRef = React.createRef()
    let valoresDepositarRef = React.createRef()
    let fechaCajaRef = React.createRef()
    let sucursalRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [archivos, guardarArchivos] = useState(null);
    const [error, guardarError] = useState(null);

    const handlerArchivos = async (e) => {
        e.preventDefault();

        guardarArchivos(e.target.files[0]);
    };

    const uploadArchivos = async (e) => {
        e.preventDefault();

        const fil = document.getElementById("fil");

        if (fil.files.length === 0) {
            guardarError("Debes Seleccionar Un Archivo");
        } else {
            const upload = new FormData();

            console.log(upload.values());

            upload.append("file", archivos);

            const caja = {
                entrada: entradaRef.current.value,
                salida: salidaRef.current.value,
                valor_depositar: valoresDepositarRef.current.value,
                fecha_caja: fechaCajaRef.current.value,
                fecha_carga: moment().format('YYYY-MM-DD HH:mm:ss'),
                operador: user,
                sucursal: sucursalRef.current.value
            }

            await axios.post(`${ip}api/archivos/legajovirtualcajasucursales/registrarcaja`, caja)
                .then(res => {
                    console.log(res);
                    if (res.status === 200) {
                  
                        setTimeout(() => {

                            axios
                                .post(
                                    `${ip}api/archivos/legajovirtualcajasucursales/uploadarchivo/${res.data.idcaja}`, upload)
                                .then((res) => {
                                    console.log(res);
                                    toastr.success("Archivo Subido Con Exito", "Atencion");
                                })
                                .catch((error) => {
                                    console.log(error);
                                    toastr.error("Ocurrio un error al subir el archivo", "ATENCION")
                                });

                        }, 1000);
                    }
                }).catch(error => {
                    console.log(error);
                    toastr.error("Ocurrio un error al registrar la caja", "ATENCION")
                })


        }
    };


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
        }
    }, []);


    return (
        <Layout>
            <FormNuevaCaja
                user={user}
                handlerArchivos={handlerArchivos}
                uploadArchivos={uploadArchivos}
                error={error}
                entradaRef={entradaRef}
                salidaRef={salidaRef}
                valoresDepositarRef={valoresDepositarRef}
                fechaCajaRef={fechaCajaRef}
                sucursalRef={sucursalRef}
            />
        </Layout>
    )
}

export default nueva
