import React, { useEffect, useState, useRef } from "react";
import JsCookie from "js-cookie";
import Layout from "../../../components/layout/Layout";
import Router from "next/router";
import moment from "moment";
import axios from "axios";
import { ip } from '../../../config/config'
import toastr from 'toastr'
import FromLiquidacion from "../../../components/sepelio/planificacion/FromLiquidacion";
import Liquidacion from "../../../components/sepelio/planificacion/Liquidacion";
import ReactToPrint from "react-to-print";



const liquidacion = () => {
    let componentRef = useRef();

    const [mes, guardarMes] = useState(null);
    const [ano, guardarAno] = useState(null);
    const [cargando, guardarCargando] = useState(false);
    const [sindato, guardarSindato] = useState(null);
    const [liqguardias, guardarLiqGuardias] = useState(null);


    let token = JsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
    }, []);


    const handleChange = (value, flag) => {
        if (flag === "mes") {
            const mes = value.value;
            guardarMes(mes);
        } else if (flag === "ano") {
            const ano = value.value;
            guardarAno(ano);
        }
    };


    const buscarTareasALiquidar = async () => {

        let month = moment().format("M");
        let year = moment().format("YYYY");

        if (mes === null || ano === null) {
            toastr.warning("Debes seleccionas un mes y un año si o no", "ATENCION");
        } else if (mes > parseInt(month) && ano >= year) {
            let sindato = true;
            console.log(sindato);
            guardarSindato(sindato);
        } else if (
            mes >= parseInt(month) ||
            (mes <= parseInt(month) && ano <= year)
        ) {
            let cargando = true;
            guardarCargando(cargando);
            let sindato = false;
            guardarSindato(sindato);


            axios.get(`${ip}api/sepelio/planificacion/liquidarguardias`)
                .then(res => {
                    if (res.status === 200) {
                        guardarLiqGuardias(res.data[0])
                        console.log(res.data[0])
                    }
                }).catch(error => {
                    toastr.error("Ocurrio un error", "ATENCION")
                    console.log(error)
                })



        }

    }

    return (
        <Layout>
            <FromLiquidacion handleChange={handleChange} buscarTareasALiquidar={buscarTareasALiquidar} />

            {sindato === null ? null : (
                <div className="container mt-4 mb-4 border border-dark p-2">
                    {sindato === true ? (
                        <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
                            <strong>No hay datos generados aun. Intente mas tarde</strong>
                        </div>
                    ) : (
                        <>
                            <div className="print-efect" ref={componentRef}>
                                <h2>
                                    <strong>
                                        <u>
                                            Liquidacion de guardias y tareas adicionales Periodo:{" "}
                                            {mes}/{ano}
                                        </u>
                                    </strong>
                                </h2>

                                <Liquidacion liqguardias={liqguardias} />

                            </div>
                        </>
                    )}
                </div>
            )}



        </Layout>
    )
}

export default liquidacion
