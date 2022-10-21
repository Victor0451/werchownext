import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from "../../../config/config";
import jsCookie from "js-cookie";
import FormRegistroBeneficio from "../../../components/socios/clubwerchow/FormRegistroBeneficio";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid';




const registrobeneficio = () => {

    let dniRef = React.createRef()
    let montoRef = React.createRef()
    let descuentoRef = React.createRef()


    const [errores, guardarErrores] = useState(null)
    const [socio, guardarSocio] = useState(null)
    const [empresa, guardarEmpresa] = useState([])
    const [montoFinal, guardarMontoFinal] = useState(0)


    const buscarEmpresa = async (emp) => {

        await axios.get(`${ip}api/clubwerchow/comercios/comercio/${emp}`)
            .then(res => {
                guardarEmpresa(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer la empresa del beneficio")
            })

    }

    const buscarSocio = async () => {

        guardarErrores(null)

        let dni = dniRef.current.value

        if (dni === "") {

            guardarErrores("Debes ingresar el DNI del titular")

        } else {

            await axios
                .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
                .then((res) => {

                    if (res.data[0][0]) {

                        guardarSocio(res.data[0][0])

                    } else if (!res.data[0][0]) {

                        axios
                            .get(`${ip}api/werchow/maestro/titulardnim/${dni}`)
                            .then(resM => {

                                if (resM.data[0][0]) {

                                    guardarSocio(resM.data[0][0])

                                } else if (!resM.data[0][0]) {

                                    axios
                                        .get(`${ip}api/werchow/maestro/adherente/${dni}`)
                                        .then(resA => {

                                            if (resA.data[0][0]) {

                                                guardarSocio(resA.data[0][0])

                                            } else if (!resA.data[0][0]) {

                                                axios
                                                    .get(`${ip}api/werchow/maestro/adherentem/${dni}`)
                                                    .then(resAM => {

                                                        if (resAM.data[0][0]) {

                                                            guardarSocio(resAM.data[0][0])

                                                        } else if (!resAM.data[0][0]) {
                                                            toastr.warning("No se encuentra el beneficiario", "ATENCION")
                                                        }
                                                    })
                                                    .catch(error => {
                                                        console.log(error)
                                                        toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                                    })

                                            }
                                        })
                                        .catch(error => {
                                            console.log(error)
                                            toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                        })
                                }
                            })
                            .catch(error => {
                                console.log(error)
                                toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                            })



                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                })

        }





    }

    const calcMontoFinal = () => {

        let monto = parseInt(montoRef.current.value)

        let descuento = parseInt(descuentoRef.current.value) / 100

        let montoDesc = monto * descuento

        let montoFinal = monto - montoDesc

        guardarMontoFinal(montoFinal)

    }

    const registrarDescuento = async () => {

        const benef = {

            socio: socio.CONTRATO,
            ape_nom: `${socio.APELLIDOS}, ${socio.NOMBRES}`,
            dni: socio.NRO_DOC,
            idcomercio: empresa.idcomercio,
            nombre: empresa.comercio,
            monto_compra: montoRef.current.value,
            beneficio: empresa.descuento,
            monto_final: montoFinal,
            fecha: moment().format('YYYY-MM-DD'),
            n_trans: uuidv4()

        }


        await axios.post(`${ip}api/clubwerchow/beneficios/nuevobeneficio`, benef)
            .then(res => {

                if (res.status === 200) {

                    toastr.success("El beneficio se registro correctamente", "ATENCION")

                    Router.push({
                        pathname: "/socios/clubwerchow/comprobantebeneficio",
                        query: {
                            ntrans: benef.n_trans,
                        },
                    });
                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al registrar el beneficio", "ATENCION")
            })



    }

    let router = useRouter();

    const id = router.query.id;


    if (id) {

        jsCookie.set("idcom", id)

    }

    let idcom = jsCookie.get("idcom")

    setTimeout(() => {
        if (idcom) {
            buscarEmpresa(idcom)

        }
    }, 800);


    return (
        <Layout f={"nonav"}>
            <FormRegistroBeneficio
                errores={errores}
                buscarSocio={buscarSocio}
                socio={socio}
                dniRef={dniRef}
                empresa={empresa}
                montoRef={montoRef}
                montoFinal={montoFinal}
                calcMontoFinal={calcMontoFinal}
                descuentoRef={descuentoRef}
                registrarDescuento={registrarDescuento}
            />
        </Layout>
    )
}

export default registrobeneficio
