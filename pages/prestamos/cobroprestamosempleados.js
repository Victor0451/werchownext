import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import axios from "axios";
import toastr from "toastr";
import moment from "moment-timezone";
import { ip } from "../../config/config";
import FormCobranzaCuota from "../../components/prestamos/FormCobranzaCuota";
import { confirmAlert } from 'react-confirm-alert';
import { registrarHistoria } from '../../utils/funciones'

const CobroPrestamosEmpleados = () => {

    const [user, guardarUsuario] = useState(null)
    const [prestamoEmpleado, guardarPrestamosEmpleados] = useState([])
    const [planCuotas, guardarPlanCuotas] = useState([])

    const router = useRouter();

    const {
        query: { id },
    } = router;

    jsCookie.set("idprest", id)


    const traerPrestamoEmpleado = async () => {

        await axios.get(`${ip}api/sgi/prestamos/prestamoempleado/${jsCookie.get("idprest")}`)
            .then(res => {

                if (res.data) {

                    guardarPrestamosEmpleados(res.data)

                } else {

                    toastr.info("No se encuentra el subsidio", "ATENCION")

                }

            })
            .catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al traer el subsidio", "ATENCION")
            })

    }

    const traerPlanCuotas = async () => {

        await axios.get(`${ip}api/sgi/prestamos/traerplancuotas/${jsCookie.get("idprest")}`)
            .then(res => {

                if (res.data) {

                    guardarPlanCuotas(res.data)

                } else {

                    toastr.info("No se encuentra el plan de cuotas de este subsidio", "ATENCION")

                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al buscar el plan de cuotas", "ATENCION")
            })
    }

    const impactarCobro = async (id) => {

        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres registrar el pago?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {

                        let cob = {

                            estado: 1,
                            fecha_pago: moment().format('YYYY-MM-DD'),
                            operador: user.usuario

                        }

                        axios.put(`${ip}api/sgi/prestamos/impactarcobro/${id}`, cob)
                            .then(res => {
                                if (res.status === 200) {

                                    toastr.success("Pago impactado correctamente", "ATENCION")

                                    let accion = `Se registro el cobro de del prestamo ${prestamoEmpleado.idprestamo} del empleado: ${prestamoEmpleado.empleado}, por un importe de $ ${prestamoEmpleado.cuota_mensual}.`

                                    registrarHistoria(accion, user.usuario)

                                    setTimeout(() => {

                                        Router.reload()

                                    }, 500);

                                }
                            })
                            .catch(error => {
                                console.log(error)
                                toastr.error("Ocurrio un error al impactar el pago", "ATENCION")
                            })

                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                        toastr.info("El subsidio fue cancelado", "ATENCION")

                    }
                }
            ]
        });


    }


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

            setTimeout(() => {
                traerPlanCuotas()
                traerPrestamoEmpleado()
            }, 500);

        }
    }, []);

    return (
        <Layout>
            <FormCobranzaCuota
                planCuotas={planCuotas}
                prestamoEmpleado={prestamoEmpleado}
                impactarCobro={impactarCobro}
            />
        </Layout>
    )
}

export default CobroPrestamosEmpleados