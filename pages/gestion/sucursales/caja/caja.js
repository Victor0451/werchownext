import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { ip } from '../../../../config/config'
import CajaDetalles from "../../../../components/gestion/sucursales/cajas/CajaDetalles";

const caja = () => {

    const [user, guardarUsuario] = useState(null)
    const [ingreso, guardarIngresos] = useState([])
    const [egreso, guardarEgresos] = useState([])


    const traerMov = async (id) => {

        await axios.get(`${ip}api/sgi/cajasucursales/traermovi/${id}`)
            .then(res => {

                if (res.data.length > 0) {

                    guardarIngresos(res.data)

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

        await axios.get(`${ip}api/sgi/cajasucursales/traermove/${id}`)
            .then(res => {

                if (res.data.length > 0) {

                    guardarEgresos(res.data)

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    const totales = (arr, mov) => {

        let total = 0

        if (mov === "I") {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(ingreso[i].importe)

            }

            return total.toFixed(2)

        } else if (mov === "E") {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(egreso[i].importe)

            }

            return total.toFixed(2)

        }


    }

    const imprimir = (div) => {
        let contenido = document.getElementById(`${div}`).innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.replace("/sepelio/caja/listado");
    };

    let token = jsCookie.get("token");
    let router = useRouter()
    jsCookie.set("id", router.query.id)


    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);

                setTimeout(() => {

                    traerMov(jsCookie.get("id"))

                }, 500);
            }


        }
    }, []);



    return (
        <Layout>

            <div>

                <div id="caja">
                    <CajaDetalles
                        totales={totales}
                        ingreso={ingreso}
                        egreso={egreso}
                    />
                </div>

            </div>

            <div className="container list border border-dark p-4 mt-4">
                <h2 className="mb-4">
                    <strong>
                        <u>Opciones</u>
                    </strong>
                </h2>

                <div className="d-flex justify-content-center border border-dark p-4">
                    <button
                        className="btn btn-primary  "
                        onClick={() => imprimir("caja")}
                    >
                        Imprimir
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default caja