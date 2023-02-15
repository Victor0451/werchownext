import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { ip } from "../../../../config/config";
import ImpOrdenConsulta from '../../../../components/gestion/werchow/servicios/ImpOrdenConsulta';

const Orden = () => {

    const [orden, guardarOrden] = useState(null)
    const [socio, guardarSocio] = useState(null)
    const [medico, guardarMedico] = useState(null)
    const [practicas, guardarPracticas] = useState([])
    const [farmacia, guardarFarmacia] = useState([])
    const [enfermeria, guardarEnfermeria] = useState([])



    let token = jsCookie.get("token");
    let router = useRouter();

    const traerSocio = async (dni) => {
        await axios
            .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
            .then((res) => {

                if (res.data[0][0]) {

                    guardarSocio(res.data[0][0])

                } else if (!res.data[0][0]) {

                    axios
                        .get(`${ip}api/werchow/maestro/titulardnim/${dni}`)
                        .then(resM => {

                            if (resM.data[0][0]) {

                                guardarSocio(resM.data[0][0])

                            } else if (!resM.data[0][0]) {

                                axios
                                    .get(`${ip}api/werchow/maestro/adherente/${dni}`)
                                    .then(resA => {

                                        if (resA.data[0][0]) {

                                            guardarSocio(resA.data[0][0])

                                        } else if (!resA.data[0][0]) {

                                            axios
                                                .get(`${ip}api/werchow/maestro/adherentem/${dni}`)
                                                .then(resAM => {

                                                    if (resAM.data[0][0]) {

                                                        guardarSocio(resAM.data[0][0])

                                                    } else if (!resAM.data[0][0]) {
                                                        toastr.warning("No se encuentra el beneficiario", "ATENCION")
                                                    }
                                                })
                                                .catch(error => {
                                                    console.log(error)
                                                    toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                                })

                                        }
                                    })
                                    .catch(error => {
                                        console.log(error)
                                        toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                                    })
                            }
                        })
                        .catch(error => {
                            console.log(error)
                            toastr.error("Ocurrio un error al traer al socio", "ATENCION")
                        })



                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer al socio", "ATENCION")
            })

    }

    const traerOrden = async (iduso) => {
        await axios.get(`${ip}api/sgi/servicios/traerordenusos/${iduso}`)
            .then(res => {
                guardarOrden(res.data)

                traerMedico(res.data.PRESTADO)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer la orden", "ATENCION")
            })
    }

    const traerMedico = async (id) => {
        await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${id}`)
            .then(res => {
                guardarMedico(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el Medico", "ATENCION")
            })
    }

    const imprimir = () => {
        let contenido = document.getElementById("orden").innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.replace('/gestion/werchow/servicios/emision');
    };

    const traerPracticas = async (orden) => {

        await axios.get(`${ip}api/sgi/servicios/traerpracticas/${orden}`)
            .then(res => {
                guardarPracticas(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer las practicas", "ATENCION")
            })

    }

    const traerFarmacia = async (orden) => {

        await axios.get(`${ip}api/sgi/servicios/traerfarmacia/${orden}`)
            .then(res => {
                guardarFarmacia(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer la orden de farmacia", "ATENCION")
            })

    }

    const traerEnfermeria = async (orden) => {

        await axios.get(`${ip}api/sgi/servicios/traerenfermeria/${orden}`)
            .then(res => {
                console.log(res.data)
                guardarEnfermeria(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer la orden de enfermeria", "ATENCION")
            })
    }

    const calcularTotalPracticas = (arr) => {

        let total = 0

        for (let i = 0; i < arr.length; i++) {
            total += parseFloat(arr[i].IMPORTE)
        }

        return total.toFixed(2)

    }

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
        else {

            let dni = router.query.dni
            let iduso = router.query.iduso
            let orden = router.query.orden

            traerSocio(dni)
            traerOrden(iduso)

            if (orden) {

                setTimeout(() => {

                    traerPracticas(orden)
                    traerFarmacia(orden)
                    traerEnfermeria(orden)

                }, 1000);
            }
        }
    }, []);



    return (

        <Layout>

            <div id="orden">
                <ImpOrdenConsulta
                    socio={socio}
                    orden={orden}
                    medico={medico}
                    practicas={practicas}
                    farmacia={farmacia}
                    enfermeria={enfermeria}
                    calcularTotalPracticas={calcularTotalPracticas}
                    flag={router.query.flag}
                />
            </div>

            <div className=" container list mt-4 border border-dark p-4">
                <h3>
                    <strong>
                        <u>Opciones</u>
                    </strong>
                </h3>
                <div className="row border border-dark p-4 mt-4">
                    <div className="col-md-12 d-flex justify-content-center">
                        <button
                            className=" btn btn-primary "
                            onClick={imprimir}
                        >
                            Imprimir
                        </button>
                        <a
                            className="ml-1 btn btn-secondary "
                            href="/gestion/werchow/servicios/listadoordenes"
                        >
                            Listado De Ordenes
                        </a>
                        <a
                            className="ml-1 btn btn-success "
                            href="/gestion/werchow/servicios/emision"
                        >
                            Generar Orden
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Orden
