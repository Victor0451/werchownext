import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import toastr from 'toastr'
import jsCookie from "js-cookie";
import Router from "next/router";
import { ip } from '../../../config/config'
import FormNuevoStock from "../../../components/ventas/obsequios/FormNuevoStock";
import moment from "moment";


const nuevo = () => {

    let productoRef = React.createRef()
    let marcaRef = React.createRef()
    let categoriaRef = React.createRef()
    let stockRef = React.createRef()
    let precioRef = React.createRef()
    let observacionRef = React.createRef()


    const [user, guardarUsuario] = useState(null)
    const [categorias, guardarCategorias] = useState(null)
    const [errores, guardarErrores] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else if (token) {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
            categoriaObsequio()
        }

    }, []);

    const categoriaObsequio = async () => {
        await axios.get(`${ip}api/ventas/obsequios/categorias`)
            .then(res => {
                guardarCategorias(res.data[0])
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer las categorias de obsequios", "ATENCION")
                console.log(error)
            })
    }

    const registrarProducto = async () => {

        const prod = {
            producto: productoRef.current.value,
            marca: marcaRef.current.value,
            categoria: categoriaRef.current.value,
            stock: stockRef.current.value,
            precio: precioRef.current.value,
            operador: user,
            fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
            observacion: observacionRef.current.value
        }

        if (prod.producto === '') {
            guardarErrores("Debes ingresar el tipo de producto")
        } else if (prod.marca === '') {
            guardarErrores("Debes ingresar la marca del producto")
        } else if (prod.categoria === 'no') {
            guardarErrores("Debes ingresar la categoria del producto")
        } else if (prod.stock === '') {
            guardarErrores("Debes ingresar stock del producto")
        } else if (prod.precio === '') {
            guardarErrores("Debes ingresar el precio del producto")
        } else {


            await axios.post(`${ip}api/ventas/obsequios/nuevoproducto`, prod)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("Se registro el producto con exito", "ATENCION")
                    }

                    setTimeout(() => {
                        Router.reload()
                    }, 500);
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al registrar el producto", "ATENCION")
                    console.log(error)
                })
        }
    }

    return (
        <Layout>
            <FormNuevoStock
                productoRef={productoRef}
                marcaRef={marcaRef}
                categoriaRef={categoriaRef}
                stockRef={stockRef}
                precioRef={precioRef}
                observacionRef={observacionRef}
                user={user}
                categorias={categorias}
                errores={errores}
                registrarProducto={registrarProducto}
            />
        </Layout>
    )
}

export default nuevo
