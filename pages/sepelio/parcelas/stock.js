import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import Stock from "../../../components/sepelio/parcelas/Stock";
import moment from "moment";
import toastr from "toastr";



const stock = () => {

    const [parcelas, guardarParcelas] = useState(null);

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
    }, []);

    const parcelasLibres = async () => {
        await axios
            .get(`http://190.231.32.232:5002/api/sepelio/parcelas/parcelaslibres`)
            .then((res) => {
                guardarParcelas(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const parcelasOcupadas = async () => {
        await axios
            .get(`http://190.231.32.232:5002/api/sepelio/parcelas/parcelasocupadas`)
            .then((res) => {
                guardarParcelas(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Layout>

            <div className="container mt-4 border border-dark alert alert-primary p-4">
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

            </div>


            {!parcelas ? (null) :

                (
                    <Stock parcelas={parcelas} />

                )}

        </Layout>
    )
}

export default stock
