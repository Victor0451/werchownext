import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ip } from "../../../../config/config";
import FormConsultaNoSocio from "../../../../components/gestion/werchow/servicios/FormConsultaNoSocio";
import ImpOrdenConsultaNoSocio from "../../../../components/gestion/werchow/servicios/ImpOrdenConsultaNoSocio";
import { registrarHistoria } from "../../../../utils/funciones";

const EmisionNoSocio = () => {

    let especialidadRef = React.createRef()
    let sucursalRef = React.createRef()
    let medicoRef = React.createRef()

    const [user, guardarUsuario] = useState(null);
    const [usuc, guardarUsuc] = useState(null);
    const [nosocio, guardarNoSocio] = useState(null);
    const [sucursales, guardarSucursales] = useState(null);
    const [espec, guardarEspec] = useState(null);
    const [medicos, guardarMedicos] = useState(null);
    const [detalleMed, guardarDetalleMed] = useState(null);
    const [nOrden, guardarNorden] = useState(null)
    const [orden, guardarOrden] = useState(null)
    const [f, guardarFlag] = useState(false)


    let token = jsCookie.get("token");

    const traerSucursales = async () => {
        await axios.get(`${ip}api/sgi/servicios/traersucursales`)
            .then(res => {
                guardarSucursales(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el listado de sucursales", "ATENCION")
            })
    }

    const traerEspecialidades = async () => {
        await axios.get(`${ip}api/sgi/servicios/traerespecialidades`)
            .then(res => {
                guardarEspec(res.data)

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el listado de sucursales", "ATENCION")
            })
    }

    const traerMedicosPorSuc = async (f) => {


        if (especialidadRef.current.value !== null) {

            await axios.get(`${ip}api/sgi/servicios/traermedporsuc`,
                {
                    params: {
                        suc: sucursalRef.current.value,
                        esp: especialidadRef.current.value
                    }
                })
                .then(res => {
                    guardarMedicos(res.data)
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
                })
        }
    }

    const traerDetalleMedSelec = async (f) => {

        if (f === 'C' && medicoRef.current.value !== null) {

            await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRef.current.value}`)
                .then(res => {
                    guardarDetalleMed(res.data)

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
                })

        } else if (f === 'P' && medicoRefP.current.value !== null) {

            let id = medicoRefP.current.value

            await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRefP.current.value}`)
                .then(res => {

                    guardarDetalleMed(res.data)

                    traerPracticasPrest(id, res.data.LUGAR)

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
                })
        } else if (f === 'E' && medicoRefE.current.value !== null) {


            await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRefE.current.value}`)
                .then(res => {

                    guardarDetalleEnfer(res.data)

                    traerPractEnfer()

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
                })
        } else if (f === 'Pl' && medicoRefPl.current.value !== null) {


            await axios.get(`${ip}api/sgi/servicios/traerdetallemedico/${medicoRefPl.current.value}`)
                .then(res => {

                    guardarDetalleMed(res.data)

                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error al traer el listado de Especialidades", "ATENCION")
                })
        }
    }

    const traerNoSocio = async (dni) => {

        await axios.get(`${ip}api/sgi/servicios/verificarnosocio/${dni}`)
            .then(res => {

                guardarNoSocio(res.data)

                setInterval(() => {
                    traerNOrden()

                }, 1000);

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer al paciente", "ATENCION")
            })

    }

    const registrarOrdenUsos = async () => {


        const uso = {
            SUC: usuc,
            ORDEN: nOrden,
            CONTRATO: 0,
            NRO_ADH: 0,
            NRO_DOC: nosocio.dni,
            PLAN: "PROMO CONSULTA GRATIS NO SOCIOS",
            EDAD: 0,
            SEXO: "",
            OBRA_SOC: nosocio.obra_soc,
            FECHA: moment().format('YYYY-MM-DD'),
            FEC_CAJA: moment().format('YYYY-MM-DD'),
            HORA: moment().format('HH:mm'),
            SERVICIO: "ORDE",
            IMPORTE: detalleMed.MAX_DESC,
            IMP_LIQ: detalleMed.CON_PAGA,
            VALOR: 0,
            PUESTO: "",
            PRESTADO: detalleMed.COD_PRES,
            OPERADOR: user.codigo,
            EMPRESA: "W",
            RENDIDO: 0,
            ANULADO: 0,
            NUSOS: 1,
            OPERADOR: user
        }


        if (detalleMed.CON_PAGA >= 1500) {

            uso.IMPORTE = 1500

        } else if (detalleMed.CON_PAGA < 1500) {

            uso.IMPORTE = detalleMed.CON_PAGA

        }


        await axios.post(`${ip}api/sgi/servicios/regusos`, uso)

            .then(res => {

                if (res.status === 200) {

                    guardarOrden(uso)

                    guardarFlag(true)

                    regOrdenConsulta(uso.ORDEN)

                    puntearCodigo(nosocio.dni)

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al registrar la orden de consulta", "ATENCION")
            })

    }

    const regOrdenConsulta = async (orden) => {
        const consul = {

            CONTRATO: 0,
            FECHA: moment().format('YYYY-MM-DD'),
            HORA: moment().format('HH:mm'),
            NRO_ORDEN: orden,
            DESTINO: "",
            COD_PRES: detalleMed.COD_PRES,
            IMPORTE: 0,
            ANULADO: 0,
            OPERADOR: user,
            OPE_ANU: 0,
            DIAGNOSTIC: "",
            ATENCION: 0,
            NRO_DNI: nosocio.dni,
            SUC: usuc

        }

        if (detalleMed.CON_PAGA < 1500) {

            consul.IMPORTE = detalleMed.CON_PAGA

        } else if (detalleMed.CON_PAGA >= 1500) {

            consul.IMPORTE = 1500

        }

        await axios.post(`${ip}api/sgi/servicios/regconsulta`, consul)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("Se registro la orden de consulta con exito", "ATENCION")

                    let accion = `Se registro una orden de consulta ID: ${consul.NRO_ORDEN}, para el paciente: ${nosocio.nosocio} por pormocion de consulta sin cargo para no afiliados, para el medico: ${detalleMed.NOMBRE}. Coseguro a pagar: ${consul.IMPORTE}`

                    registrarHistoria(accion, user)
                }
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al registrar la orden de consulta", "ATENCION")
            })
    }

    const traerNOrden = async () => {


        await axios.get(`${ip}api/sgi/servicios/norden`)
            .then(res => {

                setTimeout(() => {

                    if (!res.data) {

                        guardarNorden(1)

                    } else {

                        guardarNorden(`PROM-${res.data.iduso + 1}`)

                    }
                }, 500);

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer el N° de Orden", "ATENCION")
            })
    }

    const puntearCodigo = async (dni) => {

        await axios.put(`${ip}api/sgi/servicios/puntearcodigo/${dni}`)
            .then(res => {

                if (res.status === 200) {

                    toastr.info("Este codigo ya fue utilizado, por ende no tendra mas validez de ahora en adelante", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al puntear el codigo", "ATENCION")
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

    let router = useRouter()

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
                guardarUsuc(userData.sucursal)

            }

            traerSucursales()
            traerEspecialidades()
            traerNoSocio(router.query.dni)

        }
    }, []);

    return (
        <Layout>


            {f === false ? (

                <FormConsultaNoSocio
                    nosocio={nosocio}
                    sucursales={sucursales}
                    espec={espec}
                    medicos={medicos}
                    detalleMed={detalleMed}
                    sucursalRef={sucursalRef}
                    especialidadRef={especialidadRef}
                    medicoRef={medicoRef}
                    traerMedicosPorSuc={traerMedicosPorSuc}
                    traerDetalleMedSelec={traerDetalleMedSelec}
                    registrarOrdenUsos={registrarOrdenUsos}
                />

            ) : f === true ? (

                <>
                    <div id="orden">
                        <ImpOrdenConsultaNoSocio
                            nosocio={nosocio}
                            orden={orden}
                            medico={detalleMed}

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

                </>
            )
                : null
            }



        </Layout>
    )
}

export default EmisionNoSocio