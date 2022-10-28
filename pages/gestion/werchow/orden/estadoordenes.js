import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import ListadoEstadoOrdenes from "../../../../components/gestion/werchow/orden/ListadoEstadoOrdenes";
import ModalDetalleOrden from "../../../../components/gestion/werchow/orden/ModalDetalleOrden";
import ModalImpresion from "../../../../components/gestion/werchow/orden/ModalImpresion";


const estadoordenes = () => {

    const [listado, guardarListado] = useState([])
    const [user, guardarUsuario] = useState(null)
    const [listDetalle, guardarListDetalle] = useState([])
    const [orde, guardarOrde] = useState(null)

    const traerOrdenes = async () => {

        await axios.get(`${ip}api/sgi/ordenpago/traerordenes`)
            .then(res => {

                guardarListado(res.data)

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

    const imprimir = () => {
        let contenido = document.getElementById("imp").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload()
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

            traerOrdenes()

        }
    }, []);

    return (
        <Layout>
            <ListadoEstadoOrdenes
                listado={listado}
                detalleOrdenPago={detalleOrdenPago}
                guardarOrde={guardarOrde}
            />

            <ModalDetalleOrden
                listDetalle={listDetalle}
            />

            <ModalImpresion
                orde={orde}
                listDetalle={listDetalle}
                imprimir={imprimir}
            />
        </Layout>
    )
}

export default estadoordenes