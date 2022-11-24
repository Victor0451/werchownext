import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import Stock from "../../../components/sepelio/parcelas/Stock";
import moment from "moment";
import toastr from "toastr";
import { ip } from '../../../config/config'



const stock = () => {

    let desdeRef = React.createRef()
    let hastaRef = React.createRef()

    const [parcelas, guardarParcelas] = useState(null);
    const [rango, guardarRango] = useState(false)
    const [errores, guardarErrores] = useState(null)

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
    }, []);

    const parcelasLibres = async () => {
        await axios
            .get(`${ip}api/sepelio/parcelas/parcelaslibres`)
            .then((res) => {
                guardarParcelas(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const parcelasOcupadas = async () => {

        guardarRango(true)

        await axios
            .get(`${ip}api/sepelio/parcelas/parcelasocupadas`)
            .then((res) => {
                guardarParcelas(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const parcelasOcupadasPorRango = async () => {

        guardarErrores(null)

        let desde = desdeRef.current.value
        let hasta = hastaRef.current.value

        if (desde === "" || hasta === "") {

            guardarErrores("Los campos DESDE y HASTA no pueden estar vacios")

        } else if (desde > hasta) {

            guardarErrores("El campo DESDE no puede ser mayor al campo HASTA")

        } else {

            await axios
                .get(`${ip}api/sepelio/parcelas/parcelasocupadasrango`, {
                    params: {
                        desde: desde,
                        hasta: hasta
                    }
                })
                .then((res) => {
                    guardarParcelas(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });

        }
    };

    return (
        <Layout>

            <div className="container mt-4 border border-dark list p-4">
                <h2>
                    <strong>
                        <u>
                            Stock de Parcelas
                        </u>
                    </strong>
                </h2>

                <div className="mt-4 border border-dark p-4">
                    <div className="row">
                        <div className="col-md-6">
                            <button className="btn btn-sm btn-primary btn-block" onClick={parcelasLibres}>Parcelas Libres</button>
                        </div>

                        <div className="col-md-6">
                            <button className="btn btn-sm btn-primary btn-block" onClick={parcelasOcupadas}>Parcelas Ocupadas</button>
                        </div>
                    </div>
                </div>


                {rango === true ? (

                    <div className=" border border-dark mt-4 p-4">

                        <div className="row">

                            <div className="col-md-4">
                                <label>
                                    <u>
                                        Desde
                                    </u>
                                </label>

                                <input
                                    type={"date"}
                                    className="form-control"
                                    ref={desdeRef}
                                />

                            </div>

                            <div className="col-md-4">
                                <label>
                                    <u>
                                        Hasta
                                    </u>
                                </label>

                                <input
                                    type={"date"}
                                    className="form-control"
                                    ref={hastaRef}
                                />

                            </div>

                            <div className="col-md-4">
                                <label>

                                </label>

                                <button
                                    className="btn btn-primary mt-4"
                                    onClick={parcelasOcupadasPorRango}
                                >
                                    Buscar
                                </button>

                            </div>

                            {
                                errores ? (

                                    <div className="alert alert-danger text-center text-uppercase border border-dark mt-4 mb-4 col-md-12">
                                        {errores}
                                    </div>

                                ) : null
                            }

                        </div>
                    </div>

                ) : rango === false ? null
                    : null}

            </div>


            {!parcelas ? (null) :

                (
                    <Stock parcelas={parcelas} />

                )}

        </Layout>
    )
}

export default stock
