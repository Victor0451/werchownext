import React, { useEffect, useState } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import moment from "moment";
import axios from "axios";
import { ip } from '../../../config/config'
import toastr from 'toastr'
import FormNuevoProveedor from "../../../components/sepelio/proveedores/FormNuevoProveedor";

const nuevo = () => {

    let proveedorRef = React.createRef()
    let cuitRef = React.createRef()
    let telefonoRef = React.createRef()
    let domicilioRef = React.createRef()


    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)

    let token = JsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = JsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
        }
    }, []);

    const registrarProv = async () => {
        const prov = {

            razon: proveedorRef.current.value,
            cuit: cuitRef.current.value,
            domicilio: domicilioRef.current.value,
            telefonos: telefonoRef.current.value,
            estado: 1,
            operador: user

        }

        if (prov.razon === '') {
            guardarErrores('Debes ingresar el nombre del proveedor')
        } else {
            await axios.post(`${ip}api/sepelio/proveedores/nuevoprov`, prov)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("Se registro el nuevo proveedor con exito", "ATENCION")
                    }

                    setTimeout(() => {
                        Router.push(`/sepelio/proveedores/nuevo`)
                    }, 500);

                })
                .catch(error => {
                    toastr.error("Ocurrio un error al registrar el proveedor", "ATENCION")
                    console.log(error)
                })
        }

    }

    return (
        <Layout>
            <FormNuevoProveedor
                proveedorRef={proveedorRef}
                cuitRef={cuitRef}
                telefonoRef={telefonoRef}
                domicilioRef={domicilioRef}
                registrarProv={registrarProv}
                errores={errores}
            />
        </Layout>
    )
}

export default nuevo
