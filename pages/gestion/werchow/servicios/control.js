import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import { registrarHistoria, traerAdhs } from '../../../../utils/funciones'
import FormControlOrdenes from "../../../../components/gestion/werchow/servicios/FormControlOrdenes";
import ListadoControlOrdenes from "../../../../components/gestion/werchow/servicios/ListadoControlOrdenes";
import ListadoControlConsultasMedicos from "../../../../components/gestion/werchow/servicios/ListadoControlConsultasMedicos";
import ListadoControlUsosPorPrestador from "../../../../components/gestion/werchow/servicios/ListadoControlUsosPorPrestador";

const Control = () => {

    let desdeRef = React.createRef()
    let hastaRef = React.createRef()
    let desdeRef2 = React.createRef()
    let hastaRef2 = React.createRef()
    let desdeRef3 = React.createRef()
    let hastaRef3 = React.createRef()
    let medicoRef = React.createRef()

    const [user, guardarUsuario] = useState(null);
    const [medicos, guardarMedicos] = useState(null);
    const [listado, guardarListado] = useState(null);
    const [listadoFa, guardarListadoFa] = useState(null);
    const [listado2, guardarListado2] = useState(null);
    const [listadoFa2, guardarListadoFa2] = useState(null);
    const [listado3, guardarListado3] = useState(null);
    const [listadoFa3, guardarListadoFa3] = useState(null);
    const [errores, guardarErrores] = useState(null);
    const [rango, guardarRango] = useState([])


    const traerListado = async () => {

        guardarListado(null)
        guardarListado2(null)
        guardarListadoFa(null)
        guardarListadoFa2(null)

        let desde = desdeRef.current.value
        let hasta = hastaRef.current.value

        if (desde === "" || hasta === "") {

            guardarErrores("Los campos DESDE y HASTA no deben estar vacios")

        } else if (desde > hasta) {

            guardarErrores("El campo DESDE no puede ser mayor que el campo HASTA")

        } else {

            let rango = {
                desde: desde,
                hasta: hasta
            }

            guardarRango(rango)

            await axios.get(`${ip}api/sgi/servicios/buscarordenes`, {

                params: {
                    desde: desde,
                    hasta: hasta
                }

            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListado(res.data)

                        toastr.success("Listado encontrado", "ATENCION")

                    } else if (res.data.length === 0) {

                        toastr.info("No se encuentran ordenes para este rango de fechas en el sistema de Otero", "ATENCION")

                    }
                })
                .catch(error => {

                    console.log(error)

                    toastr.error("Ocurrio un error al buscar el listado", "ATENCION")

                })


            await axios.get(`${ip}api/sgi/servicios/buscarordenesfa`, {

                params: {
                    desde: desde,
                    hasta: hasta
                }

            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListadoFa(res.data)

                        toastr.success("Listado encontrado", "ATENCION")

                    } else if (res.data.length === 0) {

                        toastr.info("No se encuentran ordenes para este rango de fechas en el sistema de Casa Central", "ATENCION")

                    }
                })
                .catch(error => {

                    console.log(error)

                    toastr.error("Ocurrio un error al buscar el listado", "ATENCION")

                })

        }


    }

    const traerListadoConsultasMedicos = async () => {

        guardarListado(null)
        guardarListado2(null)
        guardarListadoFa(null)
        guardarListadoFa2(null)

        let desde = desdeRef2.current.value
        let hasta = hastaRef2.current.value
        let medico = medicoRef.current.value

        if (medico === "no") {

            guardarErrores("Debes seleccionar un medico")

        } else if (desde === "" || hasta === "") {

            guardarErrores("Los campos DESDE y HASTA no deben estar vacios")

        } else if (desde > hasta) {

            guardarErrores("El campo DESDE no puede ser mayor que el campo HASTA")

        } else {

            let rango = {
                medico: medico,
                desde: desde,
                hasta: hasta
            }

            guardarRango(rango)

            await axios.get(`${ip}api/sgi/servicios/buscaconsultaspormedico`, {

                params: {
                    medico: medico,
                    desde: desde,
                    hasta: hasta
                }

            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListado2(res.data)

                        toastr.success("Listado encontrado", "ATENCION")

                    } else if (res.data.length === 0) {

                        toastr.info("No se encuentran ordenes para este rango de fechas en el sistema de Otero", "ATENCION")

                    }
                })
                .catch(error => {

                    console.log(error)

                    toastr.error("Ocurrio un error al buscar el listado", "ATENCION")

                })

            await axios.get(`${ip}api/sgi/servicios/buscaconsultaspormedicofa`, {

                params: {
                    medico: medico,
                    desde: desde,
                    hasta: hasta
                }

            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListadoFa2(res.data)

                        toastr.success("Listado encontrado", "ATENCION")

                    } else if (res.data.length === 0) {

                        toastr.info("No se encuentran ordenes para este rango de fechas en el sistema de Casa Central", "ATENCION")

                    }
                })
                .catch(error => {

                    console.log(error)

                    toastr.error("Ocurrio un error al buscar el listado", "ATENCION")

                })

        }

    }

    const traerUsosPorPrestador = async () => {

        guardarListado(null)
        guardarListado2(null)
        guardarListado3(null)
        guardarListadoFa(null)
        guardarListadoFa2(null)
        guardarListadoFa3(null)

        let desde = desdeRef3.current.value
        let hasta = hastaRef3.current.value

        if (desde === "" || hasta === "") {

            guardarErrores("Los campos DESDE y HASTA no deben estar vacios")

        } else if (desde > hasta) {

            guardarErrores("El campo DESDE no puede ser mayor que el campo HASTA")

        } else {

            let rango = {
                desde: desde,
                hasta: hasta
            }

            guardarRango(rango)

            await axios.get(`${ip}api/sgi/servicios/buscausosporprestador`, {

                params: {
                    desde: desde,
                    hasta: hasta
                }

            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListado3(res.data)

                        toastr.success("Listado encontrado", "ATENCION")

                    } else if (res.data.length === 0) {

                        toastr.info("No se encuentran ordenes para este rango de fechas en el sistema de Otero", "ATENCION")

                    }
                })
                .catch(error => {

                    console.log(error)

                    toastr.error("Ocurrio un error al buscar el listado", "ATENCION")

                })


            await axios.get(`${ip}api/sgi/servicios/buscausosporprestadorfa`, {

                params: {
                    desde: desde,
                    hasta: hasta
                }

            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarListadoFa3(res.data)

                        toastr.success("Listado encontrado", "ATENCION")

                    } else if (res.data.length === 0) {

                        toastr.info("No se encuentran ordenes para este rango de fechas en el sistema de Casa Central", "ATENCION")

                    }
                })
                .catch(error => {

                    console.log(error)

                    toastr.error("Ocurrio un error al buscar el listado", "ATENCION")

                })
        }

    }

    const traerMedicos = async (f) => {

        await axios.get(`${ip}api/sgi/servicios/traermedicostodos`)
            .then(res => {
                guardarMedicos(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
            })

    }

    const imprimir = () => {

        let contenido = document.getElementById("list").innerHTML;

        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload()
    };

    const calcTotales = (arr, campo) => {

        let total = 0

        if (campo === 'VALOR') {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].VALOR)

            }

            return total.toFixed(2)

        } else if (campo === 'COSEGURO') {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].COSEGURO)

            }

            return total.toFixed(2)

        } else if (campo === 'WERCHOW') {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].WERCHOW)

            }

            return total.toFixed(2)

        } else if (campo === 'IMPORTE') {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].IMPORTE)

            }

            return total.toFixed(2)

        } else if (campo === 'USOS') {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].USOS)

            }

            return total

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

            traerMedicos()

        }
    }, []);

    return (
        <Layout>

            <FormControlOrdenes
                traerListado={traerListado}
                traerListadoConsultasMedicos={traerListadoConsultasMedicos}
                traerUsosPorPrestador={traerUsosPorPrestador}
                desdeRef={desdeRef}
                hastaRef={hastaRef}
                errores={errores}
                medicos={medicos}
                medicoRef={medicoRef}
                desdeRef2={desdeRef2}
                hastaRef2={hastaRef2}
                desdeRef3={desdeRef3}
                hastaRef3={hastaRef3}
            />


            {
                listado && listadoFa ? (

                    <div className='container alert alert-info mt-4 mb-4 border border-dark text-uppercase text-center'>
                        <strong>
                            Resumen Total: Ordenes = {listado.length + listadoFa.length} ||   Valor = ${parseFloat(calcTotales(listado, "VALOR")) + parseFloat(calcTotales(listadoFa, "VALOR"))}   ||   Coseguro = ${parseFloat(calcTotales(listado, "COSEGURO")) + parseFloat(calcTotales(listadoFa, "COSEGURO"))}   ||   Werchow = ${parseFloat(calcTotales(listado, "WERCHOW")) + parseFloat(calcTotales(listadoFa, "WERCHOW"))}
                        </strong>
                    </div>

                )
                    : null

            }

            {
                listado2 && listadoFa2 ? (

                    <div className='container alert alert-info mt-4 mb-4 border border-dark text-uppercase text-center'>
                        <strong>
                            Resumen Total: Ordenes = {listado2.length + listadoFa2.length} ||   Valor = ${parseFloat(calcTotales(listado2, "VALOR")) + parseFloat(calcTotales(listadoFa2, "VALOR"))}   ||   Coseguro = ${parseFloat(calcTotales(listado2, "COSEGURO")) + parseFloat(calcTotales(listadoFa2, "COSEGURO"))}   ||   Werchow = ${parseFloat(calcTotales(listado2, "WERCHOW")) + parseFloat(calcTotales(listadoFa2, "WERCHOW"))}
                        </strong>
                    </div>

                )
                    : null

            }

            {
                listado3 && listadoFa3 ? (

                    <div className='container alert alert-info mt-4 mb-4 border border-dark text-uppercase text-center'>
                        <strong>
                            Resumen Total:  Usos = {parseFloat(calcTotales(listado3, "USOS")) + parseFloat(calcTotales(listadoFa3, "USOS"))}  ||   Importe = ${parseFloat(calcTotales(listado3, "IMPORTE")) + parseFloat(calcTotales(listadoFa3, "IMPORTE"))}
                        </strong>
                    </div>

                )
                    : null

            }


            {
                listado ? (

                    < ListadoControlOrdenes
                        titulo={"Listado de Ordenes Otero"}
                        listado={listado}
                        rango={rango}
                        imprimir={imprimir}

                    />

                ) : null
            }

            {
                listadoFa ? (

                    < ListadoControlOrdenes
                        titulo={"Listado de Ordenes Casa Central y Sucursales"}
                        listado={listadoFa}
                        rango={rango}
                        imprimir={imprimir}
                    />

                ) : null
            }

            {
                listado2 ? (

                    < ListadoControlConsultasMedicos
                        titulo={"Listado de Ordenes Otero"}
                        listado={listado2}
                        rango={rango}
                        imprimir={imprimir}
                        calcTotales={calcTotales}
                    />

                ) : null
            }

            {
                listadoFa2 ? (

                    < ListadoControlConsultasMedicos
                        titulo={"Listado de Ordenes Casa Central y Sucursales"}
                        listado={listadoFa2}
                        rango={rango}
                        imprimir={imprimir}
                        calcTotales={calcTotales}

                    />

                ) : null
            }

            {
                listado3 ? (

                    < ListadoControlUsosPorPrestador
                        titulo={"Listado de Ordenes Otero"}
                        listado={listado3}
                        rango={rango}
                        imprimir={imprimir}
                        calcTotales={calcTotales}
                    />

                ) : null
            }

            {
                listadoFa3 ? (

                    < ListadoControlUsosPorPrestador
                        titulo={"Listado de Ordenes Casa Central y Sucursales"}
                        listado={listadoFa3}
                        rango={rango}
                        imprimir={imprimir}
                        calcTotales={calcTotales}

                    />

                ) : null
            }



        </Layout>
    )
}

export default Control