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


    const [errores, guardarErrores] = useState(null)
    const [socio, guardarSocio] = useState(null)
    const [empresa, guardarEmpresa] = useState([])
    const [moro, guardarMoro] = useState(false)


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
        guardarMoro(false)

        let dni = dniRef.current.value

        if (dni === "") {

            guardarErrores("Debes ingresar el DNI del titular")

        } else {

            await axios
                .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
                .then((res) => {

                    if (res.data[0][0]) {

                        if (res.data[0][0].GRUPO === 1001 ||
                            res.data[0][0].GRUPO === 1000 ||
                            res.data[0][0].GRUPO === 3444 ||
                            res.data[0][0].GRUPO === 3666 ||
                            res.data[0][0].GRUPO === 3777 ||
                            res.data[0][0].GRUPO === 3888 ||
                            res.data[0][0].GRUPO === 3999 ||
                            res.data[0][0].GRUPO === 4004 ||
                            res.data[0][0].GRUPO === 7777 ||
                            res.data[0][0].GRUPO === 8500 ||
                            res.data[0][0].GRUPO === 8888
                        ) {

                            toastr.error("Estas en estado de mora, acercate a nuestras sucursales y regulariza tu situacion", "ATENCION")
                            guardarSocio(res.data[0][0])
                            guardarMoro(true)

                        } else {

                            guardarSocio(res.data[0][0])

                        }


                    }
                    else if (!res.data[0][0]) {

                        axios
                            .get(`${ip}api/werchow/maestro/titulardnim/${dni}`)
                            .then(resM => {

                                if (resM.data[0][0]) {

                                    if (resM.data[0][0].GRUPO === 1001 ||
                                        resM.data[0][0].GRUPO === 1000 ||
                                        resM.data[0][0].GRUPO === 3444 ||
                                        resM.data[0][0].GRUPO === 3666 ||
                                        resM.data[0][0].GRUPO === 3777 ||
                                        resM.data[0][0].GRUPO === 3888 ||
                                        resM.data[0][0].GRUPO === 3999 ||
                                        resM.data[0][0].GRUPO === 4004 ||
                                        resM.data[0][0].GRUPO === 7777 ||
                                        resM.data[0][0].GRUPO === 8500 ||
                                        resM.data[0][0].GRUPO === 8888
                                    ) {

                                        toastr.error("Estas en estado de mora, acercate a nuestras sucursales y regulariza tu situacion", "ATENCION")
                                        guardarSocio(resM.data[0][0])
                                        guardarMoro(true)

                                    } else {

                                        guardarSocio(resM.data[0][0])

                                    }

                                } else if (!resM.data[0][0]) {

                                    axios
                                        .get(`${ip}api/werchow/maestro/adherente/${dni}`)
                                        .then(resA => {

                                            if (resA.data[0][0]) {

                                                if (resA.data[0][0].GRUPO === 1001 ||
                                                    resA.data[0][0].GRUPO === 1000 ||
                                                    resA.data[0][0].GRUPO === 3444 ||
                                                    resA.data[0][0].GRUPO === 3666 ||
                                                    resA.data[0][0].GRUPO === 3777 ||
                                                    resA.data[0][0].GRUPO === 3888 ||
                                                    resA.data[0][0].GRUPO === 3999 ||
                                                    resA.data[0][0].GRUPO === 4004 ||
                                                    resA.data[0][0].GRUPO === 7777 ||
                                                    resA.data[0][0].GRUPO === 8500 ||
                                                    resA.data[0][0].GRUPO === 8888
                                                ) {

                                                    toastr.error("Estas en estado de mora, acercate a nuestras sucursales y regulariza tu situacion", "ATENCION")
                                                    guardarSocio(resA.data[0][0])
                                                    guardarMoro(true)

                                                } else {

                                                    guardarSocio(resA.data[0][0])

                                                }

                                            } else if (!resA.data[0][0]) {

                                                axios
                                                    .get(`${ip}api/werchow/maestro/adherentem/${dni}`)
                                                    .then(resAM => {



                                                        if (resAM.data[0][0]) {

                                                            if (resAM.data[0][0].GRUPO === 1001 ||
                                                                resAM.data[0][0].GRUPO === 1000 ||
                                                                resAM.data[0][0].GRUPO === 3444 ||
                                                                resAM.data[0][0].GRUPO === 3666 ||
                                                                resAM.data[0][0].GRUPO === 3777 ||
                                                                resAM.data[0][0].GRUPO === 3888 ||
                                                                resAM.data[0][0].GRUPO === 3999 ||
                                                                resAM.data[0][0].GRUPO === 4004 ||
                                                                resAM.data[0][0].GRUPO === 7777 ||
                                                                resAM.data[0][0].GRUPO === 8500 ||
                                                                resAM.data[0][0].GRUPO === 8888
                                                            ) {

                                                                toastr.error("Estas en estado de mora, acercate a nuestras sucursales y regulariza tu situacion", "ATENCION")
                                                                guardarSocio(resAM.data[0][0])
                                                                guardarMoro(true)

                                                            } else {

                                                                guardarSocio(resAM.data[0][0])

                                                            }

                                                        } else if (!resAM.data[0][0]) {
                                                            toastr.warning("El DNI ingresado no se encuentra registrado", "ATENCION")
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


    const registrarDescuento = async () => {


        let monto = parseInt(montoRef.current.value)

        let descuento = empresa.descuento / 100

        let montoDesc = monto * descuento

        let montoFinal = monto - montoDesc



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
                registrarDescuento={registrarDescuento}
                moro={moro}
            />
        </Layout>
    )
}

export default registrobeneficio
