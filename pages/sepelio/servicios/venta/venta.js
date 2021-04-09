import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { ip } from '../../../../config/config'
import FormVentaServicio from "../../../../components/sepelio/servicios/venta/FormVentaServicio";
import moment from "moment";
import toastr from 'toastr'

const venta = () => {

    let apellidoRef = React.createRef()
    let nombreRef = React.createRef()
    let dniRef = React.createRef()
    let motnoRef = React.createRef()
    let opRef = React.createRef()
    let parentescoRef = React.createRef()

    const [servicios, guardarServicios] = useState(null);
    const [idservicio, guardaridservicio] = useState(null);
    const [user, guardarUsuario] = useState(null);
    const [operadorsep, guardarOperadorSep] = useState(null)
    const [error, guardarError] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            servicioCombo()
            traerOperador()

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

    const registrarVentas = async () => {

        guardarError(null)

        const venta = {
            idservicio: idservicio,
            monto: motnoRef.current.value,
            operador: user,
            fecha_venta: moment().format('YYYY-MM-DD HH:mm:ss'),
            apellido_sol: apellidoRef.current.value,
            nombre_sol: nombreRef.current.value,
            dni_sol: dniRef.current.value,
            parentesco: parentescoRef.current.value,
            operador_venta: opRef.current.value
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
                                    console.log(res)
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
                registrarVentas={registrarVentas}
            />
        </Layout>
    )
}

export default venta
