import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import toastr from "toastr";
import moment from "moment-timezone";
import { ip } from "../../config/config";
import { FormPrestamoEmpleados } from "../../components/prestamos/FormPrestamoEmpleados";
import { tpemp } from "../../utils/variables";
import { confirmAlert } from 'react-confirm-alert';



const NuevoPrestamoEmpleados = () => {

    let capitalRef = React.createRef()
    let cuotasRef = React.createRef()
    let empleadoRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [empleados, guardarEmpleados] = useState([])
    const [capPrest, guardarCapPrest] = useState([])
    const [cuoprest, guardarCuoprest] = useState(null);
    const [capadev, guardarCapadev] = useState(null);
    const [flag, guardarFlag] = useState(false);
    const [errores, guardarErrores] = useState(null);
    const [MesI, guardarMesI] = useState("");
    const [MesF, guardarMesF] = useState("");

    const tarerEmpleados = async () => {

        await axios.get(`${ip}api/sgi/prestamos/empleados`)
            .then(res => {

                if (res.data.length > 0) {

                    guardarEmpleados(res.data)

                } else if (res.data.length === 0) {

                    toastr.info("No hay empleados registrados", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado de empleados", "ATENCION")
            })

    }

    const tarerCapitalPrest = async () => {

        await axios.get(`${ip}api/sgi/prestamos/capitalaprestemp`)
            .then(res => {

                if (res.data.length > 0) {

                    guardarCapPrest(res.data)

                } else if (res.data.length === 0) {

                    toastr.info("No hay capitales registrados", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado de empleados", "ATENCION")
            })

    }

    const calculoPrestamo = () => {

        guardarErrores(null)
        guardarFlag(false)


        if (empleadoRef.current.value === "no") {

            guardarErrores("Debes elegir al empleado que solicita el subsidio")

        } else if (capitalRef.current.value === "no") {

            guardarErrores("Debes elegir el capital del subsidio")

        } else if (cuotasRef.current.value === "no") {

            guardarErrores("Debes elegir el plan de cuotas")

        } else {

            guardarFlag(false);

            let principal = parseInt(capitalRef.current.value);

            let payments = parseInt(cuotasRef.current.value);

            let x = 0
            let monthly = 0


            x = Math.pow(1 + tpemp, payments);
            monthly = ((principal * x * tpemp) / (x - 1)).toFixed(0);


            // if (cuotas === "3") {

            //     x = Math.pow(1 + tp3, payments);
            //     monthly = ((principal * x * tp3) / (x - 1)).toFixed(0);

            // } else if (cuotas === "6") {

            //     x = Math.pow(1 + tp6, payments);
            //     monthly = ((principal * x * tp6) / (x - 1)).toFixed(0);

            // } else if (cuotas === "10") {

            //     x = Math.pow(1 + tp10, payments);
            //     monthly = ((principal * x * tp10) / (x - 1)).toFixed(0);

            // } else if (cuotas === "12") {

            //     x = Math.pow(1 + tp12, payments);
            //     monthly = ((principal * x * tp12) / (x - 1)).toFixed(0);

            // }


            guardarCuoprest(monthly);

            let capadev = monthly * payments;

            guardarCapadev(capadev);

            guardarFlag(true);

            guardarMesI(moment().add(1, "months").format("MM/YYYY"))

            guardarMesF(moment().add(cuotasRef.current.value, "months").format("MM/YYYY"))

        }


    };

    const registrarPrestamo = async () => {


        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres registrar el subsidio?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {

                        let prest = {

                            empleado: empleadoRef.current.value,
                            fecha_solicitud: moment().format('YYYY-MM-DD'),
                            capital: capitalRef.current.value,
                            plan_cuotas: cuotasRef.current.value,
                            cuota_mensual: cuoprest,
                            capital_dev: capadev,
                            inicia: MesI,
                            termina: MesF,
                            estado: "PENDIENTE"

                        }

                        axios.post(`${ip}api/sgi/prestamos/nuevoprestamoempleado`, prest)
                            .then(res => {
                                console.log(res.data)

                                if (res.status === 200) {

                                    toastr.success("Subsidio confeccionado correctamente", "ATENCION")

                                    setTimeout(() => {

                                        Router.push("/prestamos/listadoprestamosempleados")

                                    }, 500);

                                }
                            })
                            .catch(error => {
                                console.log(error)
                                toastr.error("Ocurrio un error al confeccionar el subsidio")
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

            tarerEmpleados()
            tarerCapitalPrest()

        }
    }, []);

    return (
        <Layout>
            <FormPrestamoEmpleados
                user={user}
                empleados={empleados}
                capPrest={capPrest}
                calculoPrestamo={calculoPrestamo}
                cuoprest={cuoprest}
                capadev={capadev}
                flag={flag}
                empleadoRef={empleadoRef}
                capitalRef={capitalRef}
                cuotasRef={cuotasRef}
                errores={errores}
                MesI={MesI}
                MesF={MesF}
                registrarPrestamo={registrarPrestamo}
            />
        </Layout>
    )
}

export default NuevoPrestamoEmpleados