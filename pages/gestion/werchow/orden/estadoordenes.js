import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import ListadoEstadoOrdenes from "../../../../components/gestion/werchow/orden/ListadoEstadoOrdenes";
import ModalDetalleOrden from "../../../../components/gestion/werchow/orden/ModalDetalleOrden";
import ModalImpresion from "../../../../components/gestion/werchow/orden/ModalImpresion";
import ModalSubirArchivo from "../../../../components/gestion/werchow/orden/ModalSubirArchivo";
import { registrarHistoria } from '../../../../utils/funciones'
import ModalLegajoOrden from "../../../../components/gestion/werchow/orden/ModalLegajoOrden";


const estadoordenes = () => {

    const [listado, guardarListado] = useState([])
    const [user, guardarUsuario] = useState(null)
    const [listDetalle, guardarListDetalle] = useState([])
    const [orde, guardarOrde] = useState(null)
    const [archivos, guardarArchivos] = useState([]);
    const [error, guardarError] = useState(null);
    const [archi, guardarArchi] = useState(null);

    const eliminarArchivos = async (id) => {

        await axios
            .delete(`${ip}api/archivos/legajovirtualordenes/eliminararchivos/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    toastr.success("El archivo se elimino", "ATENCION");
                }
            })
            .catch((error) => {
                console.log(error);
            });


    };

    const traerAchivos = async (id) => {
        console.log(id)
        await axios
            .get(`${ip}api/archivos/legajovirtualordenes/listaarchivos/${id}`)
            .then((res) => {
                let archivos = res.data;
                console.log(res)
                guardarArchivos(archivos);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handlerArchivos = async (e) => {
        e.preventDefault();

        guardarArchivos(e.target.files[0]);

    };

    const uploadArchivos = async (e) => {
        e.preventDefault();

        const fil = document.getElementById("fil");

        if (fil.files.length === 0) {

            guardarError("Debes Seleccionar Un Archivo");

        } else {
            const upload = new FormData();

            upload.append("file", archivos);

            await axios
                .post(
                    `${ip}api/archivos/legajovirtualordenes/uploadfichalegajo/${orde.idorden}`, upload,
                    {
                        param: {
                            norden: orde.norden,
                            nfactura: orde.nfactura,
                        },


                    }
                )
                .then((res) => {

                    if (res.status === 200) {

                        toastr.success("Archivo Subido Con Exito", "Atencion");

                        let accion = `Se subio un archivo al legajo virtual de la orden de pago ID: ${orde.norden}`

                        registrarHistoria(accion, user)

                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const traerOrdenes = async () => {

        await axios.get(`${ip}api/sgi/ordenpago/traerordenes`)
            .then(res => {

                guardarListado(res.data)

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")

            })

    }

    const detalleOrdenPago = async (id) => {

        await axios.get(`${ip}api/sgi/ordenpago/detalleorden`,
            {
                params: {
                    id: id
                }
            })
            .then(res => {

                guardarListDetalle(res.data)

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el detalle de la orden", "ATENCION")
            })

    }

    const imprimir = () => {
        let contenido = document.getElementById("imp").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload()
    };

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

            traerOrdenes()

        }
    }, []);

    return (
        <Layout>
            <ListadoEstadoOrdenes
                listado={listado}
                detalleOrdenPago={detalleOrdenPago}
                guardarOrde={guardarOrde}
                traerAchivos={traerAchivos}
            />

            <ModalDetalleOrden
                listDetalle={listDetalle}
            />

            <ModalImpresion
                orde={orde}
                listDetalle={listDetalle}
                imprimir={imprimir}
            />

            <ModalSubirArchivo
                handlerArchivos={handlerArchivos}
                uploadArchivos={uploadArchivos}
                orde={orde}
                error={error}
            />

            <ModalLegajoOrden
                archi={archi}
                archivos={archivos}
                guardarArchi={guardarArchi}
                eliminarArchivos={eliminarArchivos}
            />

        </Layout>
    )
}

export default estadoordenes