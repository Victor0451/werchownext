import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import ListadoCajas from "../../../../components/gestion/sucursales/cajas/ListadoCajas";

const listado = () => {

    const [cajas, guardarCajas] = useState(null)
    const [archivos, guardarArchivos] = useState(null)
    const [row, guardarRow] = useState(null)


    const traerCajas = async () => {

        await axios.get(`${ip}api/archivos/legajovirtualcajasucursales/listadocajas`)
            .then(res => {

                guardarCajas(res.data)
                toastr.success("se genero el listado con exito", "ATENCION")
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al generar el listado", "ATENCION")
            })

    }

    const traerArchivos = async (row) => {

        guardarRow(row)

        await axios
            .get(`${ip}api/archivos/legajovirtualcajasucursales/listaarchivos/${row.idcaja}`)
            .then((res) => {
                let archivos = res.data;

                guardarArchivos(archivos);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const eliminarArchivos = async (id) => {
        await axios
            .delete(`${ip}api/archivos/legajovirtualcajasucursales/eliminararchivos/${id}`)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    toastr.success("El archivo se elimino", "ATENCION");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            traerCajas()
        }
    }, []);

    return (
        <Layout>
            <ListadoCajas
                cajas={cajas}
                traerArchivos={traerArchivos}
                row={row}
                archivos={archivos}
                eliminarArchivos={eliminarArchivos}
            />
        </Layout>
    )
}

export default listado

