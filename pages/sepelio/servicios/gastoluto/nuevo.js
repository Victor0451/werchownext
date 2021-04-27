import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from '../../../../config/config'
import moment from 'moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import FormGastoLuto from "../../../../components/sepelio/servicios/gastoluto/FormGastoLuto";

const nuevo = () => {

    let gastoLutoRef = React.createRef()
    let apellidoBenRef = React.createRef()
    let nombreBenRef = React.createRef()
    let telefonoBenRef = React.createRef()
    let parentezcoRef = React.createRef()

    const [servicio, guardarServicio] = useState(null);
    const [ataud, guardarAtaud] = useState(null)
    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [flag, guardarFlag] = useState(false)
    const [gluto, guardarGLuto] = useState(null)


    let token = jsCookie.get("token");
    let router = useRouter();

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else if (token) {
            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData.usuario);
            }

            const id = router.query.id;
            const idservicio = router.query.idservicio;

            existenciaGastoLuto(idservicio)

            traerSolicitud(id);

        }
    }, []);


    const traerSolicitud = async (id) => {
        await axios
            .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
            .then((res) => {
                const servicio = res.data;
                guardarServicio(servicio);

                traerAtaud(res.data.idataud)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const traerAtaud = async (idataud) => {
        await axios
            .get(`${ip}api/sepelio/ataudes/ataud/${idataud}`)
            .then((res) => {
                guardarAtaud(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const registrarGastoLuto = async () => {

        const gl = {

            idservicio: servicio.idservicio,
            contrato: servicio.contrato,
            dni_extinto: servicio.dni,
            extinto: `${servicio.apellido}, ${servicio.nombre}`,
            gasto_luto: gastoLutoRef.current.value,
            idataud: servicio.idataud,
            apellido_ben: apellidoBenRef.current.value,
            nombre_ben: nombreBenRef.current.value,
            telefono_ben: telefonoBenRef.current.value,
            fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
            operador: user,
            parentezco: parentezcoRef.current.value
        }


        if (gl.gasto_luto === '') {
            guardarErrores("Debes ingresar el monto del gasto de luto")
        }

        if (gl.apellido_ben === '') {
            guardarErrores("Debes ingresar el apellido del beneficiario")
        }

        if (gl.nombre_ben === '') {
            guardarErrores("Debes ingresar el nombre del beneficiario")
        }

        if (gl.telefono_ben === '') {
            guardarErrores("Debes ingresar el telefono del beneficiario")
        }

        axios.post(`${ip}api/sepelio/gastoluto/nuevogasto`, gl)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("Se registro el gasto de luto con exito", "ATENCION")
                    console.log(res.data)
                }
            })
            .catch(error => {
                toastr.error("Ocurrio un error al registrar el gasto de luto", "ATENCION")
                console.log(error)
            })

    }

    const existenciaGastoLuto = async (id) => {

        axios.get(`${ip}api/sepelio/gastoluto/existencia/${id}`)
            .then(res => {
                if (res.data.idservicio) {
                    guardarFlag(true)
                    toastr.warning("Este servicio ya tiene registrado un gasto de luto", "ATENCION")
                    guardarGLuto(res.data)
                } else if (res.data === false) {
                    toastr.info("Puedes cargar el gasto de luto en este servicio", "ATENCION")
                }

            })
            .catch(error => {
                toastr.error("Ocurrio un error al comprobar la existencia del gasto de luto", "ATENCION")
                console.log(error)
            })

    }

    return (
        <Layout>

            {flag === false ? (
                <FormGastoLuto
                    servicio={servicio}
                    ataud={ataud}
                    errores={errores}
                    gastoLutoRef={gastoLutoRef}
                    apellidoBenRef={apellidoBenRef}
                    nombreBenRef={nombreBenRef}
                    telefonoBenRef={telefonoBenRef}
                    parentezcoRef={parentezcoRef}
                    registrarGastoLuto={registrarGastoLuto}
                />
            ) : flag === true ? (
                <>

                    <div className="container mt-4 mb-4 alert alert-warning border border-dark text-center text-uppercase">
                        Este servicio ya posee un gasto de luto cargado
                    </div>

                    {
                        gluto ? (
                            <div className="mt-4 container alert alert-primary border border-dark p-4">

                                <h4>
                                    <strong>
                                        <u>
                                            Datos del Beneficiario
                                        </u>
                                    </strong>
                                </h4>

                                <div className="row">



                                    <div className="mt-4  col-md-6">
                                        <label>
                                            <u>
                                                Beneficiario:
                                            </u>
                                        </label>
                                        <input type="text" className="form-control" placeholder="Apellido Beneficiario" value={`${gluto.apellido_ben}, ${gluto.nombre_ben} `} />
                                    </div>


                                    <div className="mt-4  col-md-4">
                                        <label>
                                            <u>
                                                Telefono del Beneficiario:
                                            </u>
                                        </label>
                                        <input type="text" className="form-control" placeholder="Telefono Beneficiario" value={gluto.telefono_ben} />
                                    </div>


                                    <div className="mt-4 col-md-4">
                                        <label>
                                            <u>
                                                Parentezco del Beneficiario:
                                            </u>
                                        </label>
                                        <input type="text" className="form-control" placeholder="Parentezco Beneficiario" value={gluto.parentezco} />
                                    </div>

                                    <div className="mt-4 col-md-4">
                                        <label>
                                            <u>
                                                Gasto de Luto:
                                            </u>
                                        </label>
                                        <input type="text" className="form-control" placeholder="Parentezco Beneficiario" value={gluto.gasto_luto} />
                                    </div>
                                </div>
                            </div>

                        ) : null
                    }



                </>
            ) : null}


        </Layout>
    )
}

export default nuevo
