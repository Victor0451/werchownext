import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import FormNuevaCaja from "../../../../components/gestion/sucursales/cajas/FormNuevaCaja";


const nueva = () => {

    let conceptoRef = React.createRef()
    let fechaMovRef = React.createRef()
    let importeRef = React.createRef()
    let tipoMovRef = React.createRef()
    let sucursalRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [archivos, guardarArchivos] = useState(null);
    const [error, guardarError] = useState(null);
    const [errores, guardarErrores] = useState(null);
    const [ingreso, guardarIngreso] = useState([]);
    const [egreso, guardarEgreso] = useState([]);


    const precargaMovim = () => {

        guardarErrores(null)

        const mov = {
            idcaja: "",
            fecha_carga: moment().format('YYYY-MM-DD'),
            sucursal: sucursalRef.current.value,
            fecha_movimiento: fechaMovRef.current.value,
            concepto: conceptoRef.current.value,
            movimiento: tipoMovRef.current.value,
            importe: importeRef.current.value,
            operador_carga: user
        }

        if (mov.sucursal === "no") {

            guardarErrores("Debes ingresar la sucursal de origen de la caja")

        } else if (mov.fecha_movimiento === "") {

            guardarErrores("Debes ingresar la fecha del movimiento")

        } else if (mov.concepto === "") {

            guardarErrores("Debes ingresar el concepto del movimiento")

        } else if (mov.movimiento === "no") {

            guardarErrores("Debes ingresar el tipo de movimiento")

        } else if (mov.importe === "") {

            guardarErrores("Debes ingresar el importe del movimiento")

        } else {

            if (mov.movimiento === 'I') {

                guardarIngreso([...ingreso, mov])

            } else if (mov.movimiento === 'E') {

                guardarEgreso([...egreso, mov])

            }

            toastr.info("Movimiento Precargado", "ATENCION")

        }

    }

    const eliminarPrecarga = (index, movim) => {

        if (movim === 'I') {

            ingreso.splice(index, 1);

            guardarIngreso([...ingreso])

            toastr.success("Orden eliminada del checkeo", "ATENCION");

        } else if (movim === 'E') {

            egreso.splice(index, 1);

            guardarEgreso([...egreso])

            toastr.success("Orden eliminada del checkeo", "ATENCION");

        }
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

    const postCaja = async () => {

        const caja = {

            fecha_carga: moment().format('YYYY-MM-DD'),
            sucursal: sucursalRef.current.value,
            ingresos: totales(ingreso, "I"),
            egresos: totales(egreso, "E"),
            saldo: totales(ingreso, "I") - totales(egreso, "E"),
            operador_carga: user

        }

        await axios.post(`${ip}api/sgi/cajasucursales/nuevacaja`, caja)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {

                    toastr.success("Caja generada, registrando movimientos", "ATENCION")

                    postMov(res.data.idcaja)


                    setTimeout(() => {

                        Router.push("/gestion/sucursales/caja/listado")

                    }, 500);

                }

            }).catch(error => {

                console.log(error)
                toastr.error("Ocurrio un error al generar la caja", "ATENCION")

            })



    }

    const postMov = async (idcaja) => {

        if (ingreso.length > 0) {

            for (let i = 0; i < ingreso.length; i++) {

                ingreso[i].idcaja = idcaja

                await axios.post(`${ip}api/sgi/cajasucursales/nuevomov`, ingreso[i])
                    .then(res => {

                    })
                    .catch(error => {
                        console.log(error)
                        toastr.error("Ocurrio un error al generar la caja", "ATENCION")
                    })

                if (i === ingreso.length) {
                    toastr.info("Ingresos registrados correctamente", "ATENCION")
                }
            }

        } else {

            toastr.info("No hay ingresos para registrar", "ATENCION")

        }

        if (egreso.length > 0) {


            for (let i = 0; i < egreso.length; i++) {

                egreso[i].idcaja = idcaja

                await axios.post(`${ip}api/sgi/cajasucursales/nuevomov`, egreso[i])
                    .then(res => {


                    })
                    .catch(error => {
                        console.log(error)
                        toastr.error("Ocurrio un error al generar la caja", "ATENCION")
                    })

                if (i === egreso.length) {
                    toastr.info("Egresos registrados correctamente", "ATENCION")
                }
            }

        } else {

            toastr.info("No hay egresos para registrar", "ATENCION")

        }

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
        }
    }, []);


    return (
        <Layout>
            <FormNuevaCaja
                user={user}
                error={error}
                conceptoRef={conceptoRef}
                fechaMovRef={fechaMovRef}
                importeRef={importeRef}
                tipoMovRef={tipoMovRef}
                sucursalRef={sucursalRef}
                precargaMovim={precargaMovim}
                ingreso={ingreso}
                egreso={egreso}
                totales={totales}
                errores={errores}
                postCaja={postCaja}
                eliminarPrecarga={eliminarPrecarga}
            />

        </Layout>
    )
}

export default nueva
