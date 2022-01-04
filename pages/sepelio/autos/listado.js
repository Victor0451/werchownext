import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import moment from "moment";
import toastr from 'toastr'
import { ip } from '../../../config/config'
import ListadoAutos from "../../../components/sepelio/autos/ListadoAutos";
import { registrarHistoria } from "../../../utils/funciones";

const listado = () => {

    let nuevaEmpresaRef = React.createRef()
    let nuevaPolRef = React.createRef()
    let nuevoVencimientoRef = React.createRef()

    const [autos, guardarAutos] = useState(null)
    const [row, guardarRow] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [user, guardarUsuario] = useState(null)




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

            traerAutos()
        }
    }, []);

    const traerAutos = async () => {
        await axios.get(`${ip}api/sepelio/autos/traerautos`)
            .then(res => {
                guardarAutos(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los autos", "ATENCION")
                console.log(error)
            })
    }

    const getRow = (data) => {
        guardarRow(null)

        guardarRow(data)
    }

    const push = (p1, p2, url) => {


        Router.push(
            {
                pathname: url,
                query: {
                    idpatente: p1,
                    idauto: p2
                },
            })

    }

    const renovPoliza = async (id) => {


        const nupol = {
            empresa: nuevaEmpresaRef.current.value,
            nro_poliza: nuevaPolRef.current.value,
            vencimiento: moment(nuevoVencimientoRef.current.value).format('YYYY-MM-DD')
        }

        if (nupol.empresa === "") {
            guardarErrores("Debes ingresar la empresa")
        } else if (nupol.nro_poliza === "") {
            guardarErrores("Debes ingresar el numero de poliza")
        } else if (nupol.vencimiento === "") {
            guardarErrores("Debes ingresar el vencimiento de la poliza")
        } else {

            await axios.put(`${ip}api/sepelio/autos/renovpol/${id}`, nupol)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success("Se renovo la poliza con exito", "ATENCNION")

                        let accion = `Se renovo poliza al auto modelo: ${row.auto} - patente: ${row.patente}. Poliza vencida ${row.nro_poliza} - empresa ${row.empresa}. Nueva Poliza ${nupol.nro_poliza} - empresa: ${nupol.empresa}`

                        registrarHistoria(accion, user)

                        setTimeout(() => {
                            traerAutos()
                        }, 500);
                    }
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al actualizar la poliza", "ATENCION")
                    console.log(error)
                })
        }
    }

    return (
        <Layout>
            <ListadoAutos
                autos={autos}
                push={push}
                getRow={getRow}
                row={row}
                nuevaPolRef={nuevaPolRef}
                nuevoVencimientoRef={nuevoVencimientoRef}
                nuevaEmpresaRef={nuevaEmpresaRef}
                renovPoliza={renovPoliza}
                errores={errores}

            />
        </Layout>
    )
}

export default listado
