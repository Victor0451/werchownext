import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import { registrarHistoria } from "../../../../utils/funciones";
import ListadoOrdenesSinAutorizar from "../../../../components/gestion/werchow/orden/ListadoOrdenesSinAutorizar";
import ModalDetalleOrden from "../../../../components/gestion/werchow/orden/ModalDetalleOrden";
import ModalLegajoOrden from '../../../../components/gestion/werchow/orden/ModalLegajoOrden'

const autorizacionordenes = () => {

    const [user, guardarUsuario] = useState(null)
    const [listado, guardarListado] = useState([])
    const [listDetalle, guardarListDetalle] = useState([])
    const [archivos, guardarArchivos] = useState([]);
    const [archi, guardarArchi] = useState(null);

    const eliminarArchivos = async (id) => {

        await axios
            .delete(`${ip}api/archivos/legajovirtualordenes/eliminararchivos/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    toastr.success("El archivo se elimino", "ATENCION");
                }
            })
            .catch((error) => {
                console.log(error);
            });


    };

    const traerAchivos = async (id) => {
        console.log(id)
        await axios
            .get(`${ip}api/archivos/legajovirtualordenes/listaarchivos/${id}`)
            .then((res) => {
                let archivos = res.data;
                console.log(res)
                guardarArchivos(archivos);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const ordenesSinAutorizar = async () => {

        await axios.get(`${ip}api/sgi/ordenpago/sinautorizar`)

            .then(res => {

                if (res.data.length === 0) {
                    toastr.info("No hay ordenes para autorizar", "ATENCION")
                    guardarListado(res.data)

                } else {
                    toastr.success("Ordenes generadas para autorizar", "ATENCION")
                    guardarListado(res.data)
                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    const detalleOrdenPago = async (id) => {

        await axios.get(`${ip}api/sgi/ordenpago/detalleorden`,
            {
                params: {
                    id: id
                }
            })
            .then(res => {

                guardarListDetalle(res.data)

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el detalle de la orden", "ATENCION")
            })

    }

    const autorizarOrden = async (id) => {

        const valores = {
            orden: id,
            user: user,
            fec: moment().format('YYYY-MM-DD')
        }

        await axios.put(`${ip}api/sgi/ordenpago/autorizar`, valores)
            .then(res => {

                if (res.status === 200) {

                    toastr.success("La orden de pago fue autorizada con exito", "ATENCION")

                    let accion = `Se autorizo el pago de la orden ID: ${id} por el usuario: ${user}`

                    registrarHistoria(accion, user)

                    setTimeout(() => {

                        ordenesSinAutorizar()

                    }, 1000);

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al autorizar la orden", "ATENCION")
            })

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
            }

            ordenesSinAutorizar()

        }
    }, []);

    return (
        <Layout>

            <ListadoOrdenesSinAutorizar
                listado={listado}
                detalleOrdenPago={detalleOrdenPago}
                autorizarOrden={autorizarOrden}
                user={user}
                traerAchivos={traerAchivos}

            />

            <ModalDetalleOrden
                listDetalle={listDetalle}
            />

            <ModalLegajoOrden
                archi={archi}
                archivos={archivos}
                guardarArchi={guardarArchi}
                eliminarArchivos={eliminarArchivos}
            />

        </Layout>
    )
}

export default autorizacionordenes