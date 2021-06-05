import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import moment from "moment";
import toastr from 'toastr'
import { ip } from '../../../config/config'
import { confirmAlert } from 'react-confirm-alert'
import FormPagosPatente from "../../../components/sepelio/autos/FormPagosPatente";

const pagopatente = () => {

    let mesRef = React.createRef()
    let anoRef = React.createRef()
    let importeRef = React.createRef()
    let codPagoRef = React.createRef()
    let fechaRef = React.createRef()


    const [user, guardarUsuario] = useState(null)
    const [auto, guardarAuto] = useState(null)
    const [pagos, guardarPagos] = useState(null)
    const [errores, guardarErrores] = useState(null)

    let token = jsCookie.get("token");
    let router = useRouter();

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

            const idauto = router.query.idauto;


            traerAuto(idauto)



        }
    }, []);


    const traerAuto = async (id) => {
        await axios.get(`${ip}api/sepelio/autos/traerauto/${id}`)
            .then(res => {
                guardarAuto(res.data)
                setTimeout(() => {
                    tarerPagos(res.data.idauto)

                }, 500);
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer el auto", "ATENCION")
                console.log(error)
            })
    }

    const tarerPagos = async (id) => {
        await axios.get(`${ip}api/sepelio/autos/traerpagospatente/${id}`)
            .then(res => {
                guardarPagos(res.data)


            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer el auto", "ATENCION")
                console.log(error)
            })
    }

    const regPagPatente = async () => {

        const pago = {
            idauto: auto.idauto,
            patente: auto.patente,
            mes: mesRef.current.value,
            ano: anoRef.current.value,
            importe: importeRef.current.value,
            cod_pago: codPagoRef.current.value,
            fecha: fechaRef.current.value,
            operador: user
        }

        if (pago.mes === '') {
            guardarErrores("Debes ingresar el mes abonado")
        } else if (pago.ano === '') {
            guardarErrores("Debes ingresar el ano abonado")
        } else if (pago.importe === "") {
            guardarErrores("Debes ingresar el importe abonado")
        } else if (pago.cod_pago === "") {
            guardarErrores("Debes ingresar el numero de factura o referencia (codigo) de pago")
        } else if (pago.fecha === "") {
            guardarErrores("Debes ingresar la fecha del pago")
        } else {
            await axios.post(`${ip}api/sepelio/autos/nuevopago`, pago)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("Se registro el pago correctamente", "ATENCION")
                        console.log(res.data)
                        setTimeout(() => {
                            tarerPagos(pago.idauto)
                        }, 500);
                    }
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al registrar el pago", "ATENCION")
                    console.log(error)
                })
        }

    }

    const eliminarPago = async (id) => {
        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres eliminar el pago?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {
                        axios.delete(`${ip}api/sepelio/autos/eliminarpagopatente/${id}`)
                            .then(res => {
                                if (res.status === 200) {
                                    toastr.success("Se elimino el pago con exito", "ATENCION")
                                }

                                setTimeout(() => {
                                    tarerPagos(auto.idauto)
                                }, 500);
                            })
                            .catch(error => {
                                toastr.error("Ocurrio un error al eliminar el pago", "ATENCION")
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

    return (
        <Layout>
            <FormPagosPatente
                row={auto}
                pagos={pagos}
                regPagPatente={regPagPatente}
                mesRef={mesRef}
                anoRef={anoRef}
                importeRef={importeRef}
                codPagoRef={codPagoRef}
                fechaRef={fechaRef}
                errores={errores}
                eliminarPago={eliminarPago}
            />
        </Layout>
    )
}

export default pagopatente
