import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import Spinner from "../../../components/layout/Spinner";
import jsCookie from "js-cookie";
import Router from "next/router";
import { ip } from '../../../config/config'
import ListadoTurnos from "../../../components/socios/turnobajas/ListadoTurnos";
import moment from "moment";
import toastr from "toastr";
import FromRespuesta from "../../../components/socios/turnobajas/FromRespuesta";

const listado = () => {

    const respuestaRef = React.createRef()

    const [idturno, guardarID] = useState(null)
    const [turnos, guadarTurnos] = useState(null)
    const [operador, guardarUsuario] = useState(null)


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerTurnos()

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }
        }
    }, []);


    const traerTurnos = async () => {
        await axios.get(`${ip}api/sgi/turnobajas/listadoturnos`)
            .then(res => {
                guadarTurnos(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error", "ATENCION")
                console.log(error)
            })
    }

    const registrarRespuesta = async () => {
        const respuestaTurno = {
            estado: 1,
            fecha_atencion: moment().format('YYYY-MM-DD HH:mm:ss'),
            respuesta: respuestaRef.current.value,
            operador_atencion: operador
        }

        await axios.put(`${ip}api/sgi/turnobajas/cargarrespuesta/${idturno}`, respuestaTurno)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("Se cargo la respuesta con exito", "ATENCION")

                    setTimeout(() => {
                        Router.reload()
                    }, 500);
                }

            })
            .catch(error => {
                toastr.error("Ocurrio un error", "ATENCION")
                console.log(error)
            })


    }

    const getId = (id) => {
        guardarID(id)
    }


    return (
        <Layout>
            <ListadoTurnos turnos={turnos} datatoggle={"modal"} datatarget={"#staticBackdrop"} getId={getId} />

            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Cargar Respuesta</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <FromRespuesta operador={operador} respuestaRef={respuestaRef} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={registrarRespuesta}>Registrar Respuesta</button>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default listado
