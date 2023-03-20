import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../config/config";
import toastr from "toastr";
import ListadoCampanasTemp from "../../components/campañas/ListadoCampanasTemp";
import ModalAccionesTemp from "../../components/campañas/ModalAccionesTemp"

const TampanasTemp = () => {

    let observacionRef = React.createRef()

    const [user, guardarUsuario] = useState(null);
    const [listado, guardarListado] = useState([]);
    const [listadoTrab, guardarListadoTrab] = useState([]);
    const [caso, guardarCaso] = useState([]);

    const traerCampTemp = async (user) => {

        await axios.get(`${ip}api/sgi/campanas/camptemp/${user}`)
            .then(res => {
                if (res.data.length > 0) {

                    guardarListado(res.data)

                } else if (res.data.length === 0) {

                    toastr.info("No hay casos activos para trabajar", "ATENCION")

                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

        await axios.get(`${ip}api/sgi/campanas/camptemptrab/${user}`)
            .then(res => {
                if (res.data.length > 0) {

                    guardarListadoTrab(res.data)

                } else if (res.data.length === 0) {

                    toastr.info("No hay casos trabajados", "ATENCION")

                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    const regDevolucion = async (id) => {

        const datos = {

            observacion: observacionRef.current.value,
            idcaso: id

        }

        await axios.put(`${ip}api/sgi/campanas/regdev`, datos)
            .then(res => {
                if (res.status === 200) {

                    toastr.info("Devolucion Registrada", "ATENCION")

                    setTimeout(() => {

                        traerCampTemp(user)

                    }, 500);
                }
            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al registrar la devolucion", "ATENCION")

            })

    }

    const rowSave = (caso) => {

        guardarCaso(null)

        guardarCaso(caso)

    }

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);

                traerCampTemp(userData.usuario)
            }

        }
    }, []);

    return (
        <Layout>

            <ListadoCampanasTemp
                user={user}
                listado={listado}
                listadoTrab={listadoTrab}
                rowSave={rowSave}
            />

            <ModalAccionesTemp
                caso={caso}
                regDevolucion={regDevolucion}
                observacionRef={observacionRef}
            />
        </Layout>
    )
}

export default TampanasTemp
