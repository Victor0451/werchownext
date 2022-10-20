import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { ip } from '../../../../config/config'
import FormVentaServicio from "../../../../components/sepelio/servicios/venta/FormVentaServicio";
import moment from "moment";
import toastr from 'toastr'
import { registrarHistoria } from '../../../../utils/funciones'

const venta = () => {

    let apellidoRef = React.createRef()
    let nombreRef = React.createRef()
    let dniRef = React.createRef()
    let motnoRef = React.createRef()
    let opRef = React.createRef()
    let parentescoRef = React.createRef()
    let fechaventaRef = React.createRef()
    let efectivoRef = React.createRef()
    let planRef = React.createRef()
    let cuoMenRef = React.createRef()
    let motnoFinalRef = React.createRef()

    const [servicios, guardarServicios] = useState(null);
    const [idservicio, guardaridservicio] = useState(null);
    const [user, guardarUsuario] = useState(null);
    const [operadorsep, guardarOperadorSep] = useState(null)
    const [planCuotas, guardarPlanCuotas] = useState(null)
    const [error, guardarError] = useState(null)
    const [errorFin, guardarErrorFIn] = useState(null)
    const [cuoFinal, guardarCuoFinal] = useState(0)
    const [montoFinal, guardarMontoFinal] = useState(0)
    const [plan, guardarPlan] = useState(0)


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            servicioCombo()
            traerOperador()
            traerPlanCuota()

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
        }
    }, []);


    const handleChange = (value, flag) => {

        if (flag === "servicio") {
            guardaridservicio(value.value);
        }
    };

    const servicioCombo = async () => {
        await axios
            .get(`${ip}api/sepelio/servicio/serviciocombo`)
            .then((res) => {
                guardarServicios(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerOperador = async () => {
        await axios
            .get(
                `${ip}api/sepelio/serviciogastos/operadoressep`
            )
            .then((res) => {
                guardarOperadorSep(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerPlanCuota = async () => {
        await axios
            .get(
                `${ip}api/sepelio/servicioventa/plancuotas`
            )
            .then((res) => {
                guardarPlanCuotas(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const registrarVentas = async () => {

        guardarError(null)

        const venta = {
            idservicio: idservicio,
            monto: motnoRef.current.value,
            valor_cuota: cuoFinal,
            plan_cuota: plan,
            monto_financiacion: montoFinal,
            efectivo: efectivoRef.current.value,
            operador: user,
            fecha_venta: moment(fechaventaRef.current.value).format('YYYY-MM-DD'),
            apellido_sol: apellidoRef.current.value,
            nombre_sol: nombreRef.current.value,
            dni_sol: dniRef.current.value,
            parentesco: parentescoRef.current.value,
            operador_venta: opRef.current.value,
            liquidado: 0,
            fecha_carga: moment().format('YYYY-MM-DD HH:mm:ss'),
            financiacion: 0

        }

        if (venta.efectivo > 0) {
            venta.liquidado = 1
        }

        axios.get(`${ip}api/sepelio/servicioventa/cheqventa/${venta.idservicio}`)
            .then(res => {
                if (res.data.length !== 0) {
                    toastr.warning(`Esta venta ya fue registrada por ${res.data[0].operador_venta}`, "ATENCION")
                    console.log(res)
                } else {
                    if (venta.monto === "") {
                        guardarError("debes ingresar el monto")
                    } else if (venta.idservicio === "no") {
                        guardarError("debes seleccionar el servicio vendido")
                    } else if (venta.operador_venta === "no") {
                        guardarError("debes Seleccionar al operador que realizo la venta")
                    } else {

                        axios.post(`${ip}api/sepelio/servicioventa/nuevaventa`, venta)
                            .then(res => {
                                if (res.status === 200) {
                                    toastr.success("Se registro la venta con exito", "ATENCION")

                                    let accion = `Se registro un venta de servicio ${venta.idservicio}, del operador: ${venta.operador_venta} por un monto de ${venta.monto}. En caso de ser financiado, el monto final es ${venta.monto_financiacion}, y si adelanto en efectivo es: ${venta.efectivo} `

                                    registrarHistoria(accion, user)

                                }
                            }).catch(error => {
                                toastr.error("Ocurrio un error al registrar la venta", "ATENCION")
                                console.log(error)
                            })

                    }
                }
            }).catch(error => {
                toastr.error("Ocurrio un error al chequear la venta", "ATENCION")
                console.log(error)
            })

    }

    const calcFinanciacion = () => {

        const monto = parseFloat(motnoRef.current.value)
        const efectivo = parseFloat(efectivoRef.current.value)
        const planTasa = planRef.current.value

        if (monto === 0 || monto === "") {

            guardarErrorFIn("El monto del servicio no puede ser 0 o nulo")

        } else if (efectivo > monto) {

            guardarErrorFIn("El valor en efectivo no puede ser mayo al monto del servicio")

        } else if (planTasa === "no" || planTasa === "") {

            guardarErrorFIn("Debes elegir un plan de cuotas")

        } else {


            let plan = 0

            let interes = 0

            if (planTasa.length === 8) {

                plan = planTasa.slice(0, 1);
                interes = planTasa.slice(2, 8);
                guardarPlan(plan)

            } else if (planTasa.length === 9) {

                plan = planTasa.slice(0, 2);
                interes = planTasa.slice(3, 9);
                guardarPlan(plan)


            }



            const valorFin = monto - efectivo

            const cuoFin = (valorFin * parseFloat(interes)) / parseInt(plan)

            guardarCuoFinal(cuoFin.toFixed(2))

            const monFin = (valorFin * parseFloat(interes))

            guardarMontoFinal(monFin.toFixed(2))

        }


    }

    return (
        <Layout>
            <FormVentaServicio
                servicios={servicios}
                handleChange={handleChange}
                user={user}
                operadorsep={operadorsep}
                apellidoRef={apellidoRef}
                nombreRef={nombreRef}
                dniRef={dniRef}
                motnoRef={motnoRef}
                opRef={opRef}
                error={error}
                parentescoRef={parentescoRef}
                fechaventaRef={fechaventaRef}
                efectivoRef={efectivoRef}
                planRef={planRef}
                cuoMenRef={cuoMenRef}
                motnoFinalRef={motnoFinalRef}
                registrarVentas={registrarVentas}
                planCuotas={planCuotas}
                calcFinanciacion={calcFinanciacion}
                errorFin={errorFin}
                cuoFinal={cuoFinal}
                montoFinal={montoFinal}
            />
        </Layout>
    )
}

export default venta
