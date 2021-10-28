import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import { ip } from '../../../../config/config'
import moment from 'moment'
import { confirmAlert } from 'react-confirm-alert'; // Import
import ConstanciaAfiliacion from "../../../../components/sepelio/servicios/constancia/ConstanciaAfiliacion";
import FormConstanciaAfiliacion from "../../../../components/sepelio/servicios/constancia/FormConstanciaAfiliacion";
import ListadoConstancias from "../../../../components/sepelio/servicios/constancia/ListadoConstancias";

const Afiliacion = () => {

    let nombreRef = React.createRef()
    let apellidoRef = React.createRef()
    let dniRef = React.createRef()
    let lugarRef = React.createRef()


    const [servicio, guardarServicio] = useState(null);
    const [user, guardarUsuario] = useState(null)
    const [consta, GuardarConstancia] = useState(null);
    const [errores, GuardarErrores] = useState(null);
    const [flag, guadarFlag] = useState(false);
    const [listconst, guardarConstancias] = useState([]);



    let token = jsCookie.get("token");
    let router = useRouter();

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


    const regConstancia = async () => {
        const constancia = {
            apellido: apellidoRef.current.value,
            nombre: nombreRef.current.value,
            dni: dniRef.current.value,
            lugar: lugarRef.current.value
        }

        if (constancia.apellido === "") {
            GuardarErrores("El apellido es obligatorio")
        } else if (constancia.nombre === "") {
            GuardarErrores("El nombre es obligatorio")
        } else if (constancia.dni === "") {
            GuardarErrores("El dni es obligatorio")
        } else if (constancia.lugar === "") {
            GuardarErrores("El lugar a presentar es obligatorio")
        } else {

            GuardarConstancia(constancia)

            guadarFlag(true)



            const registro = {

                apellido_extinto: servicio.apellido,
                nombre_extinto: servicio.nombre,
                dni_extinto: servicio.dni,
                apellido_soli: constancia.apellido,
                nombre_soli: constancia.nombre,
                dni_soli: constancia.dni,
                lugar_presentacion: constancia.lugar,
                fecha: moment().format('YYYY-MM-DD'),
                idservicio: servicio.idservicio,
                operador: user

            }

            await axios.post(`${ip}api/sgi/constanciaafiliacion/registrarconstancia`, registro)
                .then(res => {
                    if (res.status === 200) {
                        toastr.info("Se genero y registro la constancia emitida", "ATENCION")
                    }
                })
                .catch(error => {
                    console.log(error)
                    toastr.error("Ocurrio un error en el registro de la constancia", "ATENCION")
                })

        }
    }

    const cancelarReg = async () => {

        guadarFlag(false)

        traerConstanciasReg(servicio.idservicio)

        toastr.info("Esta constancia ya fue registrada para este servicio", "ATENCION")

    }

    const traerConstanciasReg = async (id) => {
        await axios.get(`${ip}api/sgi/constanciaafiliacion/constanciasregistradas/${id}`)
            .then(res => {
                guardarConstancias(res.data)
            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al traer las constancias registradas", "ATENCION")
            })
    }

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
            traerConstanciasReg(idservicio)


        }

    }, []);

    return (
        <Layout>


            <ListadoConstancias listado={listconst} />


            {flag === false ? (
                <FormConstanciaAfiliacion
                    servicio={servicio}
                    nombreRef={nombreRef}
                    apellidoRef={apellidoRef}
                    dniRef={dniRef}
                    lugarRef={lugarRef}
                    regConstancia={regConstancia}
                    errores={errores}

                />
            ) : flag === true ? (
                <>
                    {consta ? (
                        <ConstanciaAfiliacion
                            servicio={servicio}
                            consta={consta}
                            cancelarReg={cancelarReg}
                        />
                    ) : null}
                </>
            ) : null}





        </Layout>
    )
}

export default Afiliacion
