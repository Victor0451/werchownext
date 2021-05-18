import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { ip } from '../../../../config/config'

import moment from "moment";
import toastr from 'toastr'
import ListadoServiciosVendidos from "../../../../components/sepelio/servicios/venta/ListadoServiciosVendidos";

const liquidacion = () => {

    const [user, guardarUsuario] = useState(null);
    const [servicios, guardarServVendidos] = useState(null)
    const [detalleVenta, guardarDetallesVenta] = useState(null)
    const [detalleServicio, guadraDetalleServicio] = useState(null)
    const [detalleAtaud, guadraDetalleAtaud] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerServiciosVendidos()

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData);
            }
        }
    }, []);


    const traerServiciosVendidos = async () => {

        await axios.get(`${ip}api/sepelio/servicioventa/traerserviciosvendidos`)
            .then(res => {
                guardarServVendidos(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los servicios vendidos", "ATENCION")
                console.log(error)
            })
    }

    const traerDetalles = async (row) => {


        guardarDetallesVenta(row)

        await axios.get(`${ip}api/sepelio/servicio/impservicio2/${row.idservicio}`)
            .then(res1 => {
                guadraDetalleServicio(res1.data)

                axios.get(`${ip}api/sepelio/ataudes/ataud/${res1.data.idataud}`)
                    .then(res => {
                        guadraDetalleAtaud(res.data)
                    })
                    .catch(error => {
                        toastr.error("Ocurrio un error al traer el los detalles del servicio vendido", "ATENCION")
                        console.log(error)
                    })

            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer el los detalles del servicio vendido", "ATENCION")
                console.log(error)
            })

    }


    const aprobarVenta = async (id, flag, u) => {

        if (flag === 1) {
            axios.put(
                `${ip}api/sepelio/servicioventa/aprobarliqventa/${id}`,
                {
                    params: {
                        operador: u
                    }
                }
            )
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("Liquidacion de venta aprobado", "ATENCION")

                        setInterval(() => {
                            traerServiciosVendidos()
                        }, 500);
                    }
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al liquidar la venta seleccionado", "ATENCION")
                    console.log(error)
                })
        } else if (flag === 0) {
            axios.put(
                `${ip}api/sepelio/servicioventa/cancelarliqventa/${id}`,
                {
                    params: {
                        operador: u
                    }
                }
            )
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("Liquidacion de venta rechazada", "ATENCION")
                    }
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al liquidar la venta seleccionado", "ATENCION")
                    console.log(error)
                })
        }
    }

    const regLiqVenta = async (id, u) => {
        axios.put(
            `${ip}api/sepelio/servicioventa/regliqventa/${id}`,
            {
                params: {
                    operador: u
                }
            }
        )
            .then(res => {
                if (res.status === 200) {
                    toastr.success("La venta se liquido correctamente", "ATENCION")
                    setInterval(() => {
                        traerServiciosVendidos()
                    }, 500);
                }
            })
            .catch(error => {
                toastr.error("Ocurrio un error al liquidar la venta seleccionado", "ATENCION")
                console.log(error)
            })
    }

    return (
        <Layout>

            <div className="mt-4 container alert alert-primary border border-dark">

                <h3 className="">
                    <strong>
                        <u>
                            Liquidacion de servicios vendidos
                       </u>
                    </strong>
                </h3>

                <ListadoServiciosVendidos
                    listado={servicios}
                    traerDetalles={traerDetalles}
                    detalleServicio={detalleServicio}
                    detalleVenta={detalleVenta}
                    detalleAtaud={detalleAtaud}
                    aprobarVenta={aprobarVenta}
                    regLiqVenta={regLiqVenta}
                    user={user}
                />
            </div>

        </Layout>
    )
}

export default liquidacion
