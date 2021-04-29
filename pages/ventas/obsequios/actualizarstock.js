import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from 'toastr'
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import { ip } from '../../../config/config'
import moment from "moment";
import FromActualizarStock from "../../../components/ventas/obsequios/FromActualizarStock";
import { confirmAlert } from 'react-confirm-alert'

const actualizarstock = () => {

    let nuevoStockRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [prod, guardarProducto] = useState(null)
    const [errores, guardarErrores] = useState(null)


    let token = jsCookie.get("token");
    let router = useRouter()

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else if (token) {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

            const id = router.query.id;

            traerProducto(id)

        }

    }, []);

    const traerProducto = async (id) => {
        await axios(`${ip}api/ventas/obsequios/traerproducto/${id}`)
            .then(res => { guardarProducto(res.data) })
            .catch(error => {
                toastr.error("Ocurrio un error al traer el producto", "ATENCION")
                console.log(error)
            })
    }

    const actNuevoStock = async () => {

        const nuevoStock = {
            stock: nuevoStockRef.current.value,
            operador_rep: user,
            fecha_reposicion: moment().format('YYYY-MM-DD HH:mm:ss'),
        }

        if (nuevoStock.stock === "") {
            toastr.warning("Debes ingresar el nuevo stock", "ATENCION");
        } else {

            await confirmAlert({
                title: 'ATENCION',
                message: '¿Seguro quieres actualizar el stock?',
                buttons: [
                    {
                        label: 'Si',
                        onClick: () => {
                            axios.put(`${ip}api/ventas/obsequios/nuevostock/${router.query.id}`, nuevoStock)
                                .then(res => {
                                    if (res.status === 200) {
                                        toastr.success("Se actalizo el stock con exito", "ATENCION")
                                        console.log(res.data)
                                        setTimeout(() => {
                                            Router.push('/ventas/obsequios/stock')
                                        }, 500);

                                    }

                                })
                                .catch(error => {
                                    toastr.error("Ocurrio un error al actualizar el stock", "ATENCION")
                                    console.log(error)
                                })
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => { }
                    }
                ]
            });
        }
    }

    return (
        <Layout>
            <FromActualizarStock prod={prod} nuevoStockRef={nuevoStockRef} actNuevoStock={actNuevoStock} />
        </Layout>
    )
}

export default actualizarstock
