import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from "toastr";
import NuevaParcela from "../../../components/sepelio/parcelas/NuevaParcela";

// Validaciones
import useValidacion from "../../../hooks/useValidacion";
import validarAltaParcela from "../../../validacion/validarAltaParcela";
import { ip } from '../../../config/config'
import { registrarHistoria } from "../../../utils/funciones";


const STATE_INICIAL = {
    cementerio: "",
    parcela: "",
    mza: "",
    lote: "",
};

const nuevo = () => {

    const [userData, guardarUsuario] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData);
            }
        }
    }, []);


    const {
        valores,
        errores,
        handleChange,
        handleSubmit,
        handleBlur,
    } = useValidacion(STATE_INICIAL, validarAltaParcela, registrarParcela);

    const { cementerio, parcela, mza, lote } = valores;


    async function registrarParcela() {
        const nuparcela = {

            cementerio: cementerio,
            parcela: parcela,
            mza: mza,
            lote: lote,
            asignada: 0,
            operador: userData.usuario,
            fecha_alta: moment().format('YYYY-MM-DD')
        }


        await axios
            .post(`${ip}api/sepelio/parcelas/nuevaparcela`, nuparcela)
            .then((res) => {
                if (res.status === 200) {
                    toastr.success("Parcela Registrada", "ATENCION")

                    let accion = `Se registro una nueva parcela: ${nuparcela.parcela}, mza: ${nuparcela.mza}, lote: ${nuparcela.lote} en el cementerio: ${nuparcela.cementerio}`

                    registrarHistoria(accion, userData.usuario)

                    setTimeout(() => {
                        Router.reload()
                    }, 300);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <Layout>
            <NuevaParcela
                userData={userData}
                errores={errores}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
                cementerio={cementerio}
                parcela={parcela}
                mza={mza}
                lote={lote}
            />
        </Layout>
    )
}

export default nuevo
