import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from '../../../../config/config'
import moment from 'moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import ListadoGastoLuto from "../../../../components/sepelio/servicios/gastoluto/ListadoGastoLuto";

const listado = () => {

    const [listado, guadarListado] = useState(null)

    let token = jsCookie.get("token");
    let router = useRouter();

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else if (token) {

            traerGastosLuto()
        }
    }, []);

    const traerGastosLuto = async () => {
        await axios.get(`${ip}api/sepelio/gastoluto/listadogastos`)
            .then(res => {
                guadarListado(res.data)
            })
            .catch(error => {
                toastr.error("Ocurrio un error al traer los gastos de luto", "ATENCION")
                console.log(error)
            })
    }

    const deleteGasto = async (id) => {
        await axios.delete(`${ip}api/sepelio/gastoluto/eliminargasto/${id}`)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("Se elimino el gasto con exito", "ATENCION")
                    traerGastosLuto()
                }
            })
            .catch(error => {
                toastr.error("Ocurrio un error al eliminar el gasto", "ATENCIO")
                console.log(error)
            })
    }

    const eliminarGasto = (id) => {

        confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres eliminar el gasto?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {
                        deleteGasto(id)
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });


    }

    return (
        <Layout>
            <ListadoGastoLuto listado={listado} eliminarGasto={eliminarGasto} />
        </Layout>
    )
}

export default listado
