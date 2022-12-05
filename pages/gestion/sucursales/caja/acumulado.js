import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { ip } from '../../../../config/config'
import FormAcumulado from "../../../../components/gestion/sucursales/cajas/FormAcumulado";
import GenerarAcumulado from "../../../../components/gestion/sucursales/cajas/GenerarAcumulado";

const Acumulado = () => {

    let sucursalRef = React.createRef()
    let mesRef = React.createRef()
    let anoRef = React.createRef()

    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState([])
    const [acumuladoI, guardarAcumuladoI] = useState([])
    const [acumuladoE, guardarAcumuladoE] = useState([])




    const generarAcumulado = async () => {

        let suc = sucursalRef.current.value
        let mes = mesRef.current.value
        let ano = anoRef.current.value


        if (suc === "") {

            guardarErrores("Debes seleccionar una sucursal")

        } else if (mes === "") {

            guardarErrores("Debes seleccionar un mes")

        } else if (ano === "") {

            guardarErrores("Debes seleccionar un año")

        } else {


            await axios.get(`${ip}api/sgi/cajasucursales/generaracumuladoI`, {
                params: {
                    suc: suc,
                    mes: mes,
                    ano: ano
                }
            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarAcumuladoI(res.data)


                    } else if (res.data.length === 0) {

                        toastr.warning("No se encuentran datos para generar el acumulado", "ATENCION")

                    }

                })
                .catch(error => {

                    console.log(error)
                    toastr.error("Ocurrio un error al generar el acumulado", "ATENCION")

                })

            await axios.get(`${ip}api/sgi/cajasucursales/generaracumuladoE`, {
                params: {
                    suc: suc,
                    mes: mes,
                    ano: ano
                }
            })
                .then(res => {

                    if (res.data.length > 0) {

                        guardarAcumuladoE(res.data)


                    } else if (res.data.length === 0) {

                        toastr.warning("No se encuentran datos para generar el acumulado", "ATENCION")

                    }

                })
                .catch(error => {

                    console.log(error)
                    toastr.error("Ocurrio un error al generar el acumulado", "ATENCION")

                })

        }



    }

    const totales = (arr, mov) => {

        let total = 0

        if (mov === "I") {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].importe)

            }

            return total.toFixed(2)

        } else if (mov === "E") {

            for (let i = 0; i < arr.length; i++) {

                total += parseFloat(arr[i].importe)

            }

            return total.toFixed(2)

        }


    }

    const imprimir = (div) => {
        let contenido = document.getElementById(`${div}`).innerHTML;
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

        }

    }, []);



    return (
        <Layout>
            <FormAcumulado
                sucursalRef={sucursalRef}
                mesRef={mesRef}
                anoRef={anoRef}
                generarAcumulado={generarAcumulado}
            />


            <div id="caja">
                <GenerarAcumulado
                    totales={totales}
                    acumuladoI={acumuladoI}
                    acumuladoE={acumuladoE}
                />
            </div>
            <div className="container list border border-dark p-4 mt-4">
                <h2 className="mb-4">
                    <strong>
                        <u>Opciones</u>
                    </strong>
                </h2>

                <div className="d-flex justify-content-center border border-dark p-4">
                    <button
                        className="btn btn-primary  "
                        onClick={() => imprimir("caja")}
                    >
                        Imprimir
                    </button>
                </div>
            </div>

        </Layout>
    )
}

export default Acumulado