import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { ip } from "../../../../config/config";
import BuscarSocio from "../../../../components/gestion/mutual/recibos/BuscarSocio";
import EmitirServicio from "../../../../components/gestion/werchow/servicios/EmitirServicio";
import { registrarHistoria } from '../../../../utils/funciones'
import FormLiquidacion from "../../../../components/gestion/werchow/servicios/FormLiquidacion";
import TablaLiquidacion from "../../../../components/gestion/werchow/servicios/TablaLiquidacion";
import ExportarPadron from "../../../../components/gestion/werchow/servicios/ExportarPadron";

const Liquidacion = () => {

    let medicoRef = React.createRef()
    let desdeRef = React.createRef()
    let hastaRef = React.createRef()

    const [usuario, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [liquidacion, guardarLiquidacion] = useState(null)
    const [desde, guardarDesde] = useState(null)
    const [hasta, guardarHasta] = useState(null)

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

    const calcularLiquidacion = async () => {

        guardarErrores(null)

        if (medicoRef.current.value === "no") {

            guardarErrores("Debes seleccionar un medico")

        } else if (desdeRef.current.value === "") {

            guardarErrores(`Debes seleccionar una fecha "DESDE"`)

        } else if (hastaRef.current.value === "") {

            guardarErrores(`Debes seleccionar una fecha "HASTA"`)

        } else if (desdeRef.current.value > hastaRef.current.value) {

            guardarErrores(`el campo "DESDE" no puede ser mayor que el campo "HASTA"`)

        } else {

            guardarDesde(desdeRef.current.value)
            guardarHasta(hastaRef.current.value)

            await axios.get(`${ip}api/sgi/servicios/liquidacion`, {
                params: {
                    medico: medicoRef.current.value,
                    desde: desdeRef.current.value,
                    hasta: hastaRef.current.value
                }
            })
                .then(res => {
                    console.log(res.data)

                    guardarLiquidacion(res.data)

                    toastr.success("Liquidacion generada con exito", "ATENCION")
                })
                .catch(error => {
                    console.log(error)

                    toastr.error("Ocurrio un error al generar la liquidacion", "ATENCION")
                })

        }




    }

    const calcTotal = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += parseFloat(arr[i].VLIQ)
        }

        return total.toFixed(2)

    }

    const imprimir = () => {

        let contenido = document.getElementById("liq").innerHTML;

        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload()
    };

    return (
        <Layout>
            <FormLiquidacion
                desdeRef={desdeRef}
                hastaRef={hastaRef}
                medicoRef={medicoRef}
                calcularLiquidacion={calcularLiquidacion}
                errores={errores}
            />

            {liquidacion ? (

                <>

                    <div id="liq">

                        <TablaLiquidacion
                            liquidacion={liquidacion}
                            calcTotal={calcTotal}
                            desde={desde}
                            hasta={hasta}

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
                                    className=" btn btn-primary mr-1"
                                    onClick={imprimir}
                                >
                                    Imprimir
                                </button>

                                <ExportarPadron                                 
                                listado={liquidacion}
                                desde={desde}
                                hasta={hasta}
                                />
                            </div>
                        </div>
                    </div>

                </>

            ) : null}
        </Layout>
    )
}

export default Liquidacion