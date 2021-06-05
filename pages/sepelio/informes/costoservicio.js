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
import ListadoServicios from "../../../components/sepelio/informes/ListadoServicio";
import InformeCostoTotalServicio from "../../../components/sepelio/informes/InformeCostoTotalServicio";

const costoservicio = () => {

    const [cajas, guardarCajas] = useState(null);
    const [gastos, guardarGastos] = useState(null);
    const [servicios, guardarServicio] = useState(null);
    const [ataud, guardarAtaud] = useState(null);
    const [row, guardarRow] = useState(null)


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            serviciosALiquidar()
        }
    }, []);

    const traerCajasSepelio = async (id) => {
        await axios.get(`${ip}api/sepelio/informes/cajasepelio/${id}`)
            .then(res => {
                guardarCajas(res.data[0])
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer las cajas", "ATENCION")
                console.log(error)
            })
    }

    const traerGastosServicio = async (id) => {
        await axios.get(`${ip}api/sepelio/informes/gastosservicio/${id}`)
            .then(res => {
                guardarGastos(res.data[0])
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los gastos", "ATENCION")
                console.log(error)
            })
    }

    const serviciosALiquidar = async () => {
        await axios
            .get(
                `${ip}api/sepelio/servicioliquidacion/serviciosaliquidar`
            )
            .then((res) => {
                const servicio = res.data[0];
                guardarServicio(servicio);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerGastos = (row) => {

        guardarRow(null)
        guardarAtaud(null)
        guardarCajas(null)
        guardarGastos(null)

        toastr.info("Buscando gastos del servicio seleccionado", "Atencion")

        traerCajasSepelio(row.original.idservicio)

        traerGastosServicio(row.original.idservicio)

        traerAtaud(row.original.idataud)

        guardarRow(row.original)
    }

    const traerAtaud = async (id) => {
        await axios
            .get(`${ip}api/sepelio/ataudes/ataud/${id}`)
            .then((res) => {
                guardarAtaud(res.data);
            })
            .catch((error) => {
                toastr.error("Ocurrio un error al traer el ataud", "ATENCION")
                console.log(error);
            });
    };

    const imprimir = (div) => {
        let contenido = document.getElementById(`${div}`).innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        document.location.reload()
    };

    return (
        <Layout>
            <ListadoServicios listado={servicios} traerGastos={traerGastos} datatoggle={"modal"} datatarget={'#costoModal'} />


            <div className="modal fade" id="costoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Costo Total Del Servicio</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div id="costo">
                                <InformeCostoTotalServicio cajas={cajas} gastos={gastos} ataud={ataud} row={row} />
                            </div>

                            <div className="border border-dark alert alert-primary p-4 d-flex justify-content-center">
                                <div className="row ">
                                    <div className="col-md-12">
                                        <button className="btn btn-primary" onClick={() => imprimir("costo")}>Imprimir</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" onClick={() => imprimir('costo')}>Imprimir</button>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>



    )
}

export default costoservicio
