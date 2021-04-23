import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from '../../../../config/config'
import moment from 'moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import FormDetalle from "../../../../components/sepelio/servicios/detalles/FormDetalle";
import ListadoServicioDetalles from "../../../../components/sepelio/servicios/detalles/ListadoSevicioDetalles";


const nuevo = () => {

    const lugarRef = React.createRef()
    const montoRef = React.createRef()
    const observacionRef = React.createRef()


    const [servicio, guardarServicio] = useState(null);
    const [tipodetalle, guardarTipoDetalle] = useState(null);
    const [flag, guardarFlag] = useState(null)
    const [autos, guardarAutos] = useState(null)
    const [patente, guardarPatente] = useState(null)
    const [user, guardarUsuario] = useState(null)
    const [errores, guardarErrores] = useState(null)
    const [listdetalles, guardarListDetalle] = useState(null)




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

            traerSolicitud(id);

            traerTipoDetalles()

            traerDetalles(idservicio)

            traerAutos()


        }
    }, []);


    const handleChange = (value, fl) => {

        if (fl === 'detalle') {
            guardarFlag(value)
        } else if (fl === 'auto') {
            guardarPatente(value)
        }

    };

    const traerSolicitud = async (id) => {
        await axios
            .get(`${ip}api/sepelio/servicio/impservicio/${id}`)
            .then((res) => {
                const servicio = res.data;
                guardarServicio(servicio);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerTipoDetalles = async () => {
        await axios
            .get(`${ip}api/sepelio/serviciodetalles/tipodetalle`)
            .then((res) => {
                guardarTipoDetalle(res.data[0]);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerDetalles = async (id) => {
        await axios
            .get(`${ip}api/sepelio/serviciodetalles/traerdetalles/${id}`)
            .then((res) => {
                guardarListDetalle(res.data);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const traerAutos = async () => {
        await axios
            .get(`${ip}api/sepelio/serviciodetalles/autos`)
            .then((res) => {
                guardarAutos(res.data[0]);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    const registrarDetalle = async () => {

        if (flag === null) {
            guardarErrores("Debes Seleccionar un detalle")
        } else {



            const det = {
                idservicio: servicio.idservicio,
                detalle: flag,
                lugar: "",
                monto: "",
                patente: patente,
                operador: user,
                fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
                observacion: observacionRef.current.value
            }


            if (flag === 'Carroza Funebre' ||
                flag === 'Coche Portacoronas' ||
                flag === 'Automovil Duelo') {

                det.lugar = ""
                det.monto = ""

                if (det.patente === null) {
                    guardarErrores("Debes Seleccionar un Auto")
                }

            } else {
                det.lugar = lugarRef.current.value
                det.monto = montoRef.current.value
                det.patente = ""
            }

            axios.post(`${ip}api/sepelio/serviciodetalles/nuevodetalle`, det)
                .then(res => {
                    if (res.status === 200) {
                        toastr.success(`Se registro el detalle en el servicio ${servicio.idservicio} con exito `, "ATENCION")
                        console.log(res.data)
                    }
                })
                .catch(error => {
                    toastr.error("Ocurrio un error al registrar el detalle", "ATENCION")

                    console.log(error)
                })
        }
    }


    return (
        <Layout>
            <FormDetalle
                servicio={servicio}
                tipodetalle={tipodetalle}
                handleChange={handleChange}
                flag={flag}
                autos={autos}
                registrarDetalle={registrarDetalle}
                montoRef={montoRef}
                lugarRef={lugarRef}
                observacionRef={observacionRef}
                errores={errores}
            />


            {listdetalles !== [] ? (
                <ListadoServicioDetalles listado={listdetalles} />
            ) : null}

        </Layout>
    )
}

export default nuevo
