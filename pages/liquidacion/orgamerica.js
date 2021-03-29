import React, { useEffect, useState, useRef } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import moment from 'moment'
import ReactToPrint from 'react-to-print'
import SelecLiqu from "../../components/liquidacion/orgamerica/SelecLiq";
import ListadoPagos from "../../components/liquidacion/orgamerica/ListadoPagos";
import ExportarPadron from "../../components/liquidacion/orgamerica/ExportarPadron";
import { ip } from '../../config/config'

const orgamerica = () => {

    let componentRef = useRef();


    const [mes, guardarMes] = useState(null);
    const [ano, guardarAno] = useState(null);
    const [cargando, guardarCargando] = useState(false);
    const [sindato, guardarSindato] = useState(null);
    const [pagos, guardarPagos] = useState(null);



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

    const buscarNumeros = async () => {
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

            pagosP100()

        }

    };

    const pagosP100 = async () => {
        await axios
            .get(`${ip}api/sgi/orgamerica/liquidacion`, {
                params: {
                    mes: mes,
                    ano: ano,
                },
            })
            .then((res) => {
                guardarPagos(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Layout>
            <SelecLiqu handleChange={handleChange} buscarNumeros={buscarNumeros} />


            {sindato === null ? null : (
                <div className="container mt-4 mb-4 border border-dark p-2">
                    {sindato === true ? (
                        <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
                            <strong>No hay datos generados aun. Intente mas tarde</strong>
                        </div>
                    ) : (
                        <>
                            <div className="print-efect p-4" ref={componentRef}>
                                <h3 className="">
                                    <strong>
                                        <u>
                                            Pagos Realizados de fichas con Productor 100 (Org. America) periodo
                                                 {mes}/{ano}
                                        </u>
                                    </strong>
                                </h3>

                                <ListadoPagos listado={pagos} />

                            </div>

                            <div className="container">
                                <hr className="mt-4 mb-4" />

                                <div className="alert alert-primary border border-dark p-4">
                                    <h3 className="text-center mb-4 font-weight-bold">
                                        <u>Opciones</u>
                                    </h3>
                                    <div className="row d-flex justify-content-center">
                                        <ReactToPrint
                                            trigger={() => (
                                                <a href="#" className="btn btn-primary mr-1">
                                                    imprimir{" "}
                                                </a>
                                            )}
                                            content={() => componentRef.current}
                                        />

                                        <ExportarPadron listado={pagos} />


                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}


        </Layout>
    )
}

export default orgamerica
