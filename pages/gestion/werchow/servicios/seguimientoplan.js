import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import { registrarHistoria } from '../../../../utils/funciones'
import BuscarPlanOrtodoncia from "../../../../components/gestion/werchow/servicios/BuscarPlanOrtodoncia";
import DetallePlanSocio from "../../../../components/gestion/werchow/servicios/DetallePlanSocio";
import ModalReciboPagoVisita from "../../../../components/gestion/werchow/servicios/ModalReciboPagoVisita";


const seguimientoplan = () => {

    let socioRef = React.createRef()
    let pagoRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [plan, guardarPlan] = useState(null)
    const [planVisit, guardarPlanVisit] = useState(null)
    const [datVisi, guardarVisita] = useState([])


    const traerPlanVisi = async (id, plan) => {

        await axios.get(`${ip}api/sgi/servicios/traerplanvisit/${id}`,
            {
                params: {
                    plan: plan
                }
            })
            .then(res => {

                if (res.data.length === 0) {

                    toastr.error("No se encuentra el plan de visitas del socio", "ATENCION")

                    guardarErrores("No se encuentra el plan de visitas del socio")

                } else {

                    guardarPlanVisit(res.data)

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error", "ATENCION")
            })
    }

    const traerPlan = async () => {

        guardarErrores(null)

        let socio = socioRef.current.value

        if (socio === "") {

            guardarErrores("Debes ingresar el DNI o el numero de socio")

        } else {


            await axios.get(`${ip}api/sgi/servicios/traerplansocio/${socio}`)
                .then(res => {

                    if (!res.data) {

                        axios.get(`${ip}api/sgi/servicios/traerplandni/${socio}`)
                            .then(res1 => {

                                if (res1.data.length === 0) {

                                    toastr.error("El socio no posee plan registrado", "ATENCION")

                                    guardarErrores("El socio no posee plan registrado")

                                } else {

                                    guardarPlan(res1.data)

                                    traerPlanVisi(res1.data.idplansocio, res1.data.plan)
                                }

                            }).catch(error => {
                                console.log(error)
                                toastr.error("Ocurrio un error", "ATENCION")
                            })

                    } else {

                        guardarPlan(res.data)

                        traerPlanVisi(res.data.idplansocio, res.data.plan)

                    }

                }).catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error", "ATENCION")
                })

        }

    }

    const updatePago = async (id, pag) => {


        if (pag > 0) {

            let pago = {
                pag: pag
            }

            await axios.put(`${ip}api/sgi/servicios/imppagovisit/${id}`, pago)
                .then(res => {

                    if (res.status === 200) {

                        toastr.success("Pago impactado correctamente", "ATENCION")

                        traerPlan()

                        let accion = `Se registro cobranza de cuota del plan ID: ${plan.idplansocio}, para el socio: ${plan.contrato} - ${plan.socio}, dni: ${plan.dni}, por un total de ${pago.pag}`

                        registrarHistoria(accion, user)

                        if (plan.total > plan.pagado) {

                            updatePlan(plan.idplansocio, pag)

                        } else if (plan.total === plan.pagado) {

                            toastr.info("El plan esta cancelado, solo se cobran el valor por las visitas pactado por el/la DR/A", "ATENCION")

                        }

                    }

                })
                .catch(error => {
                    console.log(error)

                    toastr.error("Ocurrio un error al registrar el pago", "ATENCION")

                })

        } else if (pag === 0) {

            toastr.info("Ingresa el monto acordado y volve a registrar el pago", "ATENCION")

            console.log(pag)


        }








    }

    const updatePlan = async (id, pag) => {

        let pago = {
            pag: pag
        }

        await axios.put(`${ip}api/sgi/servicios/actplan/${id}`, pago)
            .then(res => {

                if (res.status === 200) {

                    toastr.info("Valores del plan actualizados correctamente", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)

                toastr.error("Ocurrio un error al registrar el pago", "ATENCION")

            })
    }

    const checkPago = (row) => {


        if (row.pago === 0) {

            document.getElementById("frmpag").hidden = false

            updatePago(row.idvisita, parseFloat(pagoRef.current.value))

        } else if (row.pago > 0) {

            document.getElementById("frmpag").hidden = true

            updatePago(row.idvisita, row.pago)

        }




    }

    const datosVisita = (row) => {

        guardarVisita(null)

        guardarVisita(row)

    }

    const imprimir = () => {
        let contenido = document.getElementById("orden").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.replace('/gestion/werchow/servicios/seguimientoplan');
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
            <BuscarPlanOrtodoncia
                traerPlan={traerPlan}
                socioRef={socioRef}
                errores={errores}
            />


            {
                plan ? (
                    <>
                        {
                            planVisit ? (
                                <DetallePlanSocio
                                    plan={plan}
                                    planVisit={planVisit}
                                    checkPago={checkPago}
                                    pagoRef={pagoRef}
                                    datosVisita={datosVisita}
                                />
                            ) : null
                        }
                    </>
                ) : null
            }


            {plan ? (
                <ModalReciboPagoVisita
                    plan={plan}
                    datVisi={datVisi}
                    imprimir={imprimir}
                />
            ) : null}



        </Layout>
    )
}

export default seguimientoplan