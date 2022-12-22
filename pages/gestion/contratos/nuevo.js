import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import jsCookie from "js-cookie";
import axios from "axios";
import { ip } from "../../../config/config";
import toastr from "toastr";
import moment from "moment";
import FormNuevoContrato from "../../../components/gestion/contratos/FormNuevoContrato";
import ListadoContratos from "../../../components/gestion/contratos/ListadoContratos";
import { registrarHistoria } from '../../../utils/funciones'

const Nuevo = () => {

    let apeNomL1Ref = React.createRef()
    let dniL1Ref = React.createRef()
    let domL1Ref = React.createRef()

    let apeNomL2Ref = React.createRef()
    let dniL2Ref = React.createRef()
    let domL2Ref = React.createRef()

    let montoRef = React.createRef()
    let fechaIniRef = React.createRef()
    let duracionRef = React.createRef()
    let locadorRef = React.createRef()
    let localRef = React.createRef()
    let ufRef = React.createRef()
    let urlRef = React.createRef()

    const [user, guardarUsuario] = useState(null);
    const [locadores, guardarLocadores] = useState(null);
    const [listado, guardarListado] = useState([]);
    const [tipoCon, guardarTipoContrato] = useState(null);
    const [errores, guardarErrores] = useState(null);
    const [errores2, guardarErrores2] = useState(null);


    const generarContrato = async () => {


        const contrato = {

            locatario1: apeNomL1Ref.current.value,
            dni1: dniL1Ref.current.value,
            domicilio1: domL1Ref.current.value,
            locatario2: apeNomL2Ref.current.value,
            dni2: dniL2Ref.current.value,
            domicilio2: domL2Ref.current.value,
            monto: montoRef.current.value,
            fecha_inicio: fechaIniRef.current.value,
            duracion: duracionRef.current.value,
            locador: locadorRef.current.value,
            operador: user,
            local: localRef.current.value,
            uf: ufRef.current.value

        }


        if (contrato.locatario1 === "") {

            guardarErrores("Debes ingresar el apellido y nombre del locatario")

        } else if (contrato.dni1 === "") {

            guardarErrores("Debes ingresar el DNI del locatario")

        } else if (contrato.domicilio1 === "") {

            guardarErrores("Debes ingresar el domicilio del locatario")

        } else if (contrato.locatario2 === "") {

            guardarErrores("Debes ingresar el apellido y nombre del colocatario")

        } else if (contrato.dni2 === "") {

            guardarErrores("Debes ingresar el DNI del colocatario")

        } else if (contrato.domicilio2 === "") {

            guardarErrores("Debes ingresar el domicilio del colocatario")

        } else if (contrato.monto === "") {

            guardarErrores("Debes ingresar el monto del contrato")

        } else if (contrato.fecha_inicio === "") {

            guardarErrores("Debes ingresar la fecha de inicio del contrato")

        } else if (contrato.locador === "no") {

            guardarErrores("Debes elegir al locador")

        } else if (contrato.duracion === "") {

            guardarErrores("Debes ingresar la duracion del contrato en años")

        } else if (contrato.local === "") {

            guardarErrores("Debes ingresar el tipo de local que se alquila")

        } else if (contrato.uf === "") {

            guardarErrores("Debes ingresar el numero de unidad funcional")

        } else {

            await axios.post(`${ip}api/sgi/contratos/generarcontrato`, contrato)
                .then(res => {
                    console.log(res.data)
                    if (res.status === 200) {

                        toastr.success("Contrato Registrado", "ATENCION")

                        let accion = `Se genero un nuevo contrato para ${contrato.locatario1} y a ${contrato.locatario2} como locatarios. Locador ${contrato.locador}. Unidad Funcional ${contrato.uf} - ${contrato.local}`

                        registrarHistoria(accion, contrato.operador)

                        setTimeout(() => {
                            traerContratos()
                        }, 500);

                    }


                })
                .catch(error => {
                    console.log(error)

                    toastr.error("Ocurrio un error al generar el contrato", "ATENCION")
                })

        }





    }


    const traerLocadores = async () => {

        await axios.get(`${ip}api/sgi/contratos/traerlocadores`)
            .then(res => {

                guardarLocadores(res.data)

            })
            .catch(error => {
                console.log(error)

                toastr.error("Ocurrio un error al traer los locadores", "ATENCION")
            })

    }

    const traerContratos = async () => {

        await axios.get(`${ip}api/sgi/contratos/traercontratos`)
            .then(res => {
                guardarListado(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer contratos", "ATENCION")
            })

    }

    const traerTipoContrato = async () => {

        await axios.get(`${ip}api/sgi/contratos/traertipocontratos`)
            .then(res => {

                guardarTipoContrato(res.data)

            })

            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer los contratos", "ATENCION")
            })

    }

    const routing = (loc, cont) => {

        guardarErrores(null)

        let url = urlRef.current.value

        if (url === "no") {

            toastr.warning("Debes elegir el tipo de contrato", "ATENCION")
            guardarErrores2("Debes elegir el tipo de contrato")

        } else {
            Router.push({
                pathname: `/gestion/contratos${url}`,
                query: {
                    loc: loc,
                    cont: cont
                }
            })
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

                traerLocadores()
                traerContratos()
                traerTipoContrato()
            }

        }
    }, []);



    return (
        <Layout>
            <FormNuevoContrato
                locadores={locadores}
                apeNomL1Ref={apeNomL1Ref}
                dniL1Ref={dniL1Ref}
                domL1Ref={domL1Ref}
                apeNomL2Ref={apeNomL2Ref}
                dniL2Ref={dniL2Ref}
                domL2Ref={domL2Ref}
                montoRef={montoRef}
                fechaIniRef={fechaIniRef}
                duracionRef={duracionRef}
                locadorRef={locadorRef}
                localRef={localRef}
                ufRef={ufRef}
                generarContrato={generarContrato}
                errores={errores}

            />


            <ListadoContratos
                listado={listado}
                urlRef={urlRef}
                routing={routing}
                tipoCon={tipoCon}
                errores2={errores2}
            />

        </Layout>
    )
}

export default Nuevo