import React, { useEffect, useState, useRef } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from "moment";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import Spinner from "../../../components/layout/Spinner";
import { ip } from '../../../config/config'
import { confirmAlert } from 'react-confirm-alert'
import FormBuscarPeriodo from "../../../components/sepelio/informes/FormBuscarPeriodo";
import InformeBalance from "../../../components/sepelio/informes/InformeBalance";

const balance = () => {

    const [mes, guardarMes] = useState(null);
    const [ano, guardarAno] = useState(null);
    const [cargando, guardarCargando] = useState(false);
    const [sindato, guardarSindato] = useState(null);
    const [ventas, guardarVentas] = useState(null);
    const [cajas, guardarCajas] = useState(null);
    const [gastos, guardarGastos] = useState(null);


    let token = jsCookie.get("token");

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

    const buscarInfo = () => {

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

            traerServiciosVendidos()
            traerCajasSepelio()
            traerGastosServicio()


        }

    }

    const traerServiciosVendidos = async () => {

        await axios.get(`${ip}api/sepelio/informes/serviciosvendidos`, {
            params: {
                mes: mes,
                ano: ano
            }
        }).then(res => {
            guardarVentas(res.data[0])
        }).catch(error => {
            toastr.error("Ocurrio un error al traer las ventas", "ATENCION")
            console.log(error)
        })

    }

    const traerCajasSepelio = async () => {
        await axios.get(`${ip}api/sepelio/informes/cajassepelio`, {
            params: {
                mes: mes,
                ano: ano
            }
        }).then(res => {
            guardarCajas(res.data[0])
        })
            .catch(error => {
                toastr.error("Ocurrio un error al traer las cajas", "ATENCION")
                console.log(error)
            })
    }

    const traerGastosServicio = async () => {
        await axios.get(`${ip}api/sepelio/informes/gastosservicio`, {
            params: {
                mes: mes,
                ano: ano
            }
        }).then(res => {
            guardarGastos(res.data[0])
        })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los gastos", "ATENCION")
                console.log(error)
            })
    }

    const imprimir = (div) => {
        let contenido = document.getElementById(`${div}`).innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

    };

    return (
        <Layout>
            <FormBuscarPeriodo handleChange={handleChange} buscarInfo={buscarInfo} />


            {sindato === null ? null : (
                <div className="container mt-4 mb-4 border border-dark p-2">
                    {sindato === true ? (
                        <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
                            <strong>No hay datos generados aun. Intente mas tarde</strong>
                        </div>
                    ) : (
                        <>
                            <div className="" id="balance">
                                <InformeBalance mes={mes} ano={ano} cajas={cajas} ventas={ventas} gastos={gastos} />
                            </div>

                            <div className="container alert alert-primary border border-dark p-4">
                                <h2 className="mb-4">
                                    <strong>
                                        <u>Opciones</u>
                                    </strong>
                                </h2>

                                <div className="d-flex justify-content-center border border-dark p-4">
                                    <button
                                        className="btn btn-primary  "
                                        onClick={() => imprimir("balance")}
                                    >
                                        Imprimir
                                     </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )
            }

        </Layout>
    )
}

export default balance
