import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import FormAdministracion from "../../../../components/gestion/werchow/orden/FormAdministracion";
import { confirmAlert } from "react-confirm-alert";
import { registrarHistoria } from '../../../../utils/funciones'

const auditoria = () => {

    let ordOteroRef = React.createRef()
    let ordFabianRef = React.createRef()
    let impLiqRef = React.createRef()
    let ordenPagoRef = React.createRef()
    let impModRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [listOtero, guardarListOtero] = useState([])
    const [listFa, guardarListFa] = useState([])
    const [orden, guardarOrden] = useState([])
    const [detOrde, guardardetOrde] = useState([])


    const ordenesSinPuntear = async () => {

        await axios.get(`${ip}api/sgi/servicios/ordenessinpuntearotero`)
            .then(res => {

                if (res.data.length > 0) {

                    guardarListOtero(res.data)

                } else if (res.data.length === 0) {

                    toastr.info("Todos los usos liquidados estan correctamente punteados", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el listado de otero", "ATENCION")

            })


        await axios.get(`${ip}api/sgi/servicios/ordenessinpuntearfabian`)
            .then(res1 => {

                if (res1.data.length > 0) {

                    guardarListFa(res1.data)

                } else if (res1.data.length === 0) {

                    toastr.info("Todos los usos liquidados estan correctamente punteados", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el listado de otero", "ATENCION")

            })

    }

    const repunteoOrdenes = async (f) => {

        if (f === 'O') {

            await axios.put(`${ip}api/sgi/servicios/repunteootero`)
                .then(res => {

                    if (res.status === 200) {

                        toastr.success("Usos otero repunteados correctamente", "ATENCION")

                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al repuntear los usos en otero")

                })

        } else if (f === 'F') {

            await axios.put(`${ip}api/sgi/servicios/repunteofabian`)
                .then(res => {
                    if (res.status === 200) {

                        toastr.success("Usos fabian repunteados correctamente", "ATENCION")

                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al repuntear los usos en fabian")

                })

        }

        setTimeout(() => {

            ordenesSinPuntear()

        }, 500);


    }

    const buscarOrden = async (f) => {

        guardarOrden([])

        if (f === 'O') {

            let ord = ordOteroRef.current.value

            if (ord === "") {

                toastr.warning("Debes ingresar el numero de orden", "ATENCION")

            } else {

                await axios.get(`${ip}api/sgi/servicios/buscarordenotero/${ord}`)
                    .then(res => {

                        if (res.data.length > 0) {

                            guardarOrden(res.data)

                        } else if (res.data.length === 0) {

                            toastr.info("La orden que estas buscando no se encuentra registrada", "ATENCION")

                        }

                    })
                    .catch(error => {
                        console.log(error)
                        toastr.error("Ocurrio un error al buscar la orden", "ATENCION")
                    })

            }


        } else if (f === 'F') {

            let ord = ordFabianRef.current.value

            if (ord === "") {

                toastr.warning("Debes ingresar el numero de orden", "ATENCION")

            } else {

                await axios.get(`${ip}api/sgi/servicios/buscarordenfabian/${ord}`)
                    .then(res => {

                        if (res.data.length > 0) {

                            guardarOrden(res.data)

                        } else if (res.data.length === 0) {

                            toastr.info("La orden que estas buscando no se encuentra registrada", "ATENCION")

                        }

                    })
                    .catch(error => {
                        console.log(error)
                        toastr.error("Ocurrio un error al buscar la orden", "ATENCION")
                    })

            }

        }


    }

    const levantarOrden = async (f, orden) => {


        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres levantar orden medica?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {

                        if (f === 'O') {

                            axios.put(`${ip}api/sgi/servicios/aprobarordenotero/${orden}`)
                                .then(res => {
                                    if (res.status === 200) {
                                        toastr.success("Orden levantada", "ATENCION")

                                        let accion = `Modificacion en el estado de la orden N° ${orden}: ANULADO ---> ACTIVO.`

                                        registrarHistoria(accion, user)

                                    }
                                })
                                .catch(error => {
                                    console.log(error)
                                    toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                                })

                        } else if (f !== 'O') {

                            axios.put(`${ip}api/sgi/servicios/aprobarordenfabian/${orden}`)
                                .then(res => {
                                    if (res.status === 200) {
                                        toastr.success("Orden levantada", "ATENCION")

                                        let accion = `Modificacion en el estado de la orden N° ${orden}: ANULADO ---> ACTIVO.`

                                        registrarHistoria(accion, user)

                                    }
                                })
                                .catch(error => {
                                    console.log(error)
                                    toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                                })
                        }


                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }

            ],

            overlayClassName: "overlay-custom-class-name"
        });



    }

    const modifImporte = async (f, orden) => {

        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres modificar el importe de la orden medica?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {

                        let datos = {
                            imp: impLiqRef.current.value,
                            orden: orden
                        }

                        if (f === 'O') {

                            axios.put(`${ip}api/sgi/servicios/cambiarimporteordenotero`, datos)
                                .then(res => {
                                    if (res.status === 200) {
                                        toastr.success("Importe actualizado", "ATENCION")

                                        let accion = `Modificacion en el importe  de la orden N° ${orden}: Nuevo valor $${datos.imp}.`

                                        registrarHistoria(accion, user)
                                    }
                                })
                                .catch(error => {
                                    console.log(error)
                                    toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                                })

                        } else if (f !== 'O') {

                            axios.put(`${ip}api/sgi/servicios/cambiarimporteordenfabian`, datos)
                                .then(res => {
                                    console.log(res.data)

                                    if (res.status === 200) {
                                        toastr.success("Importe actualizado", "ATENCION")

                                        let accion = `Modificacion en el importe  de la orden N° ${orden}: Nuevo valor $${datos.imp}.`

                                        registrarHistoria(accion, user)
                                    }
                                })
                                .catch(error => {
                                    console.log(error)
                                    toastr.error("Ocurrio un error al levantar la orden", "ATENCION")
                                })
                        }


                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }

            ],

            overlayClassName: "overlay-custom-class-name"
        });

    }

    const traerDetalleOrdenPago = async () => {

        let orde = ordenPagoRef.current.value

        if (orde === "") {

            toastr.info("Ingresa el numero de orden", "ATENCION")

        } else {

            await axios.get(`${ip}api/sgi/ordenpago/detalleorden`,
                {
                    params: {
                        id: orde
                    }
                })
                .then(res => {

                    guardardetOrde(res.data)

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer el detalle de la orden", "ATENCION")
                })

        }

    }

    const modifImporteOrden = async () => {

        const datos = {

            imp: impModRef.current.value,
            orden: ordenPagoRef.current.value,
            total: ""

        }

        await axios.put(`${ip}api/sgi/servicios/modificarimporteordenesot`, datos)
            .then(res => {
                
                if (res.status === 200) {

                    toastr.success("Orden de pago modificada usos otero", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al actualizar la orden", "ATENCION")
            })


        await axios.put(`${ip}api/sgi/servicios/modificarimporteordenesfa`, datos)
            .then(res => {

                if (res.status === 200) {

                    toastr.success("Orden de pago modificada usos fabian", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al actualizar la orden", "ATENCION")
            })



        setTimeout(() => {

            traerDetalleOrdenPago()

            modifTotalOrdePag(datos.orden)

        }, 500);


    }

    const modifTotalOrdePag = async (orde) => {

        await axios.get(`${ip}api/sgi/ordenpago/detalleorden`,
            {
                params: {
                    id: orde
                }
            })
            .then(res => {


                let datos = {
                    total: calcTotalOrden(res.data),
                    orden: res.data[0].norden
                }

                axios.put(`${ip}api/sgi/servicios/modificarimporteordenpago`, datos)
                    .then(res1 => {

                        if (res1.status === 200) {

                            toastr.success("El total de la orden de pago fue actualizada", "ATENCION")

                        }

                    })
                    .catch(error => {
                        console.log(error)
                        toastr.error("Ocurrio un error al actualizar la orden", "ATENCION")
                    })


            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el detalle de la orden", "ATENCION")
            })






    }

    const calcTotalOrden = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {

            total += parseFloat(arr[i].importe)

        }

        return total.toFixed(2)

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

            ordenesSinPuntear()


        }
    }, []);


    return (
        <Layout>
            <FormAdministracion
                listFa={listFa}
                listOtero={listOtero}
                repunteoOrdenes={repunteoOrdenes}
                orden={orden}
                buscarOrden={buscarOrden}
                ordFabianRef={ordFabianRef}
                ordOteroRef={ordOteroRef}
                levantarOrden={levantarOrden}
                impLiqRef={impLiqRef}
                modifImporte={modifImporte}
                traerDetalleOrdenPago={traerDetalleOrdenPago}
                ordenPagoRef={ordenPagoRef}
                detOrde={detOrde}
                modifImporteOrden={modifImporteOrden}
                impModRef={impModRef}
                calcTotalOrden={calcTotalOrden}
                ordenesSinPuntear={ordenesSinPuntear}
            />
        </Layout>
    )
}

export default auditoria