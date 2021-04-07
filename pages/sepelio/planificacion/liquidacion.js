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
import ResumenLiquidacion from "../../../components/sepelio/planificacion/ResumenLiquidacion";



const liquidacion = () => {
    let componentRef = useRef();

    const [mes, guardarMes] = useState(null);
    const [ano, guardarAno] = useState(null);
    const [cargando, guardarCargando] = useState(false);
    const [sindato, guardarSindato] = useState(null);
    const [liqguardias, guardarLiqGuardias] = useState(null);
    const [liqtarad, guardarLiqTareas] = useState(null)
    const [liqfinal, guardarLiqFinal] = useState(null)


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


    const buscarTareasALiquidar = () => {

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

            liquidarTareasAd()
            liquidarGuardias()


        }

    }


    const liquidarTareasAd = async () => {
        await axios.get(`${ip}api/sepelio/tareasadicionales/liquidartareas`)
            .then(res => {
                guardarLiqTareas(res.data[0])
            }).catch(error => {
                toastr.error("Ocurrio un error", "ATENCION")
                console.log(error)
            })
    }


    const liquidarGuardias = async () => {
        await axios.get(`${ip}api/sepelio/planificacion/liquidarguardias`)
            .then(res => {
                if (res.status === 200) {
                    guardarLiqGuardias(res.data[0])

                }
            }).catch(error => {
                toastr.error("Ocurrio un error", "ATENCION")
                console.log(error)
            })
    }

    const crearResumenLiq = async () => {
        await axios.get(`${ip}api/sepelio/planificacion/registrarliqguardias`)
            .then(res => {
                if (res.status === 200) {
                    axios.get(`${ip}api/sepelio/tareasadicionales/registrarliqtareas`)
                        .then(res2 => {
                            if (res2.status === 200) {

                                setTimeout(() => {
                                    traerResumenLiq()
                                }, 500);

                                toastr.success(`Se genero correctamente la liquidacion del periodo ${moment().format('MM-YYYY')}`, "ATENCION")
                            }
                        }).catch(error => {
                            toastr.error("Ocurrio un error generando tabla liq tareas", "ATENCION")
                            console.log(error)
                        })
                }
            }).catch(error => {
                toastr.error("Ocurrio un error generando tabla liq guardias", "ATENCION")
                console.log(error)
            })
    }


    const traerResumenLiq = () => {
        axios.get(`${ip}api/sepelio/liquidacionsepelio/traerliquidacion`)
            .then(res => {
                guardarLiqFinal(res.data[0])
            })
            .catch(error => {
                toastr.error('Ocurrio un error al traer la liquidacion final', "ATENCION")
                console.log(error)
            })

    }

    const imprimir = () => {
        let contenido = document.getElementById("liquidacion").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload()
    };

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

                                <Liquidacion liqguardias={liqguardias} liqtarad={liqtarad} />

                            </div>


                            <div className="container mt-4 border border-dark alert alert-primary">
                                <h4>
                                    <strong>
                                        <u>
                                            OPCIONES
        </u>
                                    </strong>
                                </h4>

                                <div className="row">
                                    <div className="col-md-6">
                                        <button className="btn  btn-sm btn-success" onClick={crearResumenLiq} >
                                            Generar Liquidacion
                                        </button>
                                    </div>

                                    <div className="col-md-6">
                                        <button className="btn  btn-sm btn-primary" data-toggle="modal" data-target="#liqmodal" onClick={traerResumenLiq} >
                                            Generar Liquidacion
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </>
                    )}
                </div>
            )}




            <div className="modal fade" id="liqmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Liquidacion Final Periodo - {moment().format('MM-YYYY')}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="liquidacion">
                                <ResumenLiquidacion liqfinal={liqfinal} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={imprimir}>Imprimir</button>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default liquidacion
