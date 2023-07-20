import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import { registrarHistoria } from '../../../../utils/funciones'
import NuevaCaja from "../../../../components/gestion/werchow/caja/NuevaCaja";
import FormCaja from "../../../../components/gestion/werchow/caja/FormCaja";


const Caja = () => {

    let descripcionIRef = React.createRef()
    let cantidadIRef = React.createRef()
    let importeIRef = React.createRef()
    let descripcionERef = React.createRef()
    let cantidadERef = React.createRef()
    let importeERef = React.createRef()


    const [user, guardarUsuario] = useState(null);
    const [usuc, guardarUsuc] = useState(null);
    const [ordenes, guardarOrdenes] = useState(null);
    const [ingresos, guardarIngresos] = useState([]);
    const [egresos, guardarEgresos] = useState([])
    const [errores, guadrarErrores] = useState(null);
    const [fechaOrd, guadrarFechaOrd] = useState(null);
    const [flag, guardarFlag] = useState(false);


    const traerOrdenesSinRendir = async (user, suc) => {


        await axios.get(`${ip}api/sgi/servicios/ordenessinrendir`, {
            params: {
                suc: suc,
                user: user

            }
        })
            .then(res => {

                guardarOrdenes(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer las ordenes sin rendir", "ATENCION")
            })

    }

    const traerOrdenesPorDia = async (fecha) => {
        await axios.get(`${ip}api/sgi/servicios/ordenespordia`, {
            params: {
                suc: usuc,
                fecha: fecha,
                user: user
            }
        })
            .then(res => {

                let ing = []

                let arr = res.data

                for (let i = 0; i < arr.length; i++) {

                    ing.push(arr[i])

                    guardarIngresos([...ing])

                }

                guadrarFechaOrd(fecha)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer las ordenes por dia", "ATENCION")
            })
    }

    const regEgreso = () => {

        let egre = {

            detalle: descripcionERef.current.value,
            cantidad: cantidadERef.current.value,
            importe: importeERef.current.value
        }

        if (egre.descripcion === "") {
            guadrarErrores("Debes ingresar una descripcion")
        } else if (egre.cantidad === "") {
            guadrarErrores("Debes ingresar una cantidad")
        } else if (egre.importe === "") {
            guadrarErrores("Debes ingresar un importe")
        } else {
            guardarEgresos([...egresos, egre])
            toastr.info("Se precargo el egreso exitosamente", "ATENCION")
        }
    }

    const regIngreso = () => {

        let ingre = {

            SERVICIO: descripcionIRef.current.value,
            CANTIDAD: cantidadIRef.current.value,
            IMPORTE: importeIRef.current.value
        }

        if (ingre.descripcion === "") {
            guadrarErrores("Debes ingresar una descripcion")
        } else if (ingre.cantidad === "") {
            guadrarErrores("Debes ingresar una cantidad")
        } else if (ingre.importe === "") {
            guadrarErrores("Debes ingresar un importe")
        } else {
            guardarIngresos([...ingresos, ingre])
            toastr.info("Se precargo el ingreso exitosamente", "ATENCION")
        }
    }

    const imprimir = () => {
        let contenido = document.getElementById("caja").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.replace('/gestion/werchow/servicios/emision');
    };

    const calcTotalMovimientos = (arr, f) => {

        let total = 0

        if (f === 'I') {
            for (let i = 0; i < arr.length; i++) {
                total += parseFloat(arr[i].IMPORTE)
            }
        } else if (f === 'E') {
            for (let i = 0; i < arr.length; i++) {
                total += parseFloat(arr[i].importe)
            }
        }


        return total.toFixed(2)

    }

    const regCaja = async () => {

        if (flag === false) {



            let totI = 0
            let totE = 0

            let caja = {
                SUCURSAL: usuc,
                PUESTO: 30,
                CODIGO: 0,
                MOVIM: '',
                CUENTA: '',
                IMPORTE: '',
                TIPO: '',
                SERIE: 0,
                NUMERO: 0,
                CUIT: '',
                DETALLE: '',
                DET_AUX: '',
                FECHA: moment().format('YYYY-MM-DD'),
                FEC_COMP: '',
                HORA: moment().format('HH:mm'),
                ORIGEN: '',
                OPERADOR: user,
                ASIENTO: 0,
                EXENTO: '',
                CANT_AFIL: 0,
                CAE: '',
                VTO_CAE: '',
            }

            for (let i = 0; i < ingresos.length; i++) {

                caja.CODIGO = 53
                caja.CUENTA = '0201020200'
                caja.MOVIM = 'I'
                caja.IMPORTE = ingresos[i].IMPORTE
                caja.TIPO = 'X'
                caja.DETALLE = ingresos[i].SERVICIO
                caja.NUMERO = 1

                totI += parseFloat(ingresos[i].IMPORTE)

                postCaja(caja, 0)


            }

            for (let j = 0; j < egresos.length; j++) {
                caja.CODIGO = 60
                caja.CUENTA = '0505060600'
                caja.MOVIM = 'E'
                caja.IMPORTE = egresos[j].importe
                caja.TIPO = 'A'
                caja.DETALLE = egresos[j].detalle
                caja.NUMERO = 1

                totE += parseFloat(egresos[j].importe)

                postCaja(caja, 0)

            }

            caja.CODIGO = 718
            caja.CUENTA = '0101010700'
            caja.MOVIM = 'E'
            caja.IMPORTE = totI - totE
            caja.TIPO = 'X'
            caja.DETALLE = 'VALORES A DEPOSITAR'
            caja.NUMERO = 1

            postCaja(caja, 0)


            caja.CODIGO = -1
            caja.CUENTA = ''
            caja.MOVIM = 'I'
            caja.IMPORTE = 0
            caja.TIPO = ''
            caja.DETALLE = 'SALDO INICIAL'
            caja.NUMERO = 0

            postCaja(caja, 1)

        } else if (flag === true) {
            toastr.warning(`Ya se genero una caja con la fecha en el dia de hoy (${moment().format('DD/MM/YYYY')})`, "ATENCION")
        }

    }

    const postCaja = async (caja, f) => {
        await axios.post(`${ip}api/sgi/servicios/regmovimcaja`, caja)
            .then(res => {
                if (f === 1 && res.status === 200) {
                    toastr.success("Se registraron los movimientos en la caja correctamente", "ATENCION")

                    updateRendido()

                    let accion = `El operador ${user} cerro caja de la otero con fecha: ${caja.FECHA}`

                    registrarHistoria(accion, user)

                    setTimeout(() => {

                        Router.push(`/gestion/werchow/servicios/emision`)

                    }, 500);

                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al reg la caja", "ATENCION")
            })
    }

    const updateRendido = async () => {
        await axios.put(`${ip}api/sgi/servicios/updaterendido/${fechaOrd}`)
            .then(res => {
                if (res.data) {
                    toastr.info(`Se marcaron como rendidas los movimientos del dia ${moment(fechaOrd).format('DD/MM/YYYY')}`, "ATENCION")

                    traerOrdenesSinRendir()
                }
            })
            .catch(error => {
                console.log(error)

                toastr.error("Ocurrio un error al impactar como rendido los movimientos", "ATENCION")
            })
    }

    const chekCaja = async (user) => {

        let fecha = moment().format('YYYY-MM-DD')

        await axios.get(`${ip}api/sgi/servicios/chekcaja`, {
            params: {
                fecha: fecha,
                user: user
            }
        })
            .then(res => {

                if (res.data.length > 0) {
                    guardarFlag(true)
                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al chequear la caja", "ATENCION")
            })

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
                guardarUsuc(userData.sucursal)

                traerOrdenesSinRendir(userData.usuario, userData.sucursal)

                chekCaja(userData.usuario)


            }

        }
    }, []);



    return (
        <Layout>
            <NuevaCaja
                listado={ordenes}
                traerOrdenesPorDia={traerOrdenesPorDia}
                flag={flag}
            />

            {ingresos ? (
                <>
                    <div id="caja">
                        <FormCaja
                            ingresos={ingresos}
                            errores={errores}
                            egresos={egresos}
                            descripcionIRef={descripcionIRef}
                            cantidadIRef={cantidadIRef}
                            importeIRef={importeIRef}
                            descripcionERef={descripcionERef}
                            cantidadERef={cantidadERef}
                            importeERef={importeERef}
                            regEgreso={regEgreso}
                            regIngreso={regIngreso}
                            calcTotalMovimientos={calcTotalMovimientos}

                        />
                    </div>

                    <div className=" container list mt-4 border border-dark p-4">
                        <h3>
                            <strong>
                                <u>Opciones</u>
                            </strong>
                        </h3>
                        <div className="row border border-dark p-4 mt-4">
                            <div className="col-md-12 d-flex justify-content-center">
                                <button
                                    className=" btn btn-success mr-1 "
                                    onClick={regCaja}
                                >
                                    Registar Movimientos
                                </button>

                                <button
                                    className=" btn btn-primary "
                                    onClick={imprimir}
                                >
                                    Imprimir
                                </button>
                            </div>
                        </div>
                    </div>

                </>
            ) : null}

        </Layout>
    )
}

export default Caja
