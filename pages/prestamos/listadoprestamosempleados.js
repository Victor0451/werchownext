import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import Router from "next/router";
import axios from "axios";
import toastr from "toastr";
import moment from "moment-timezone";
import { ip } from "../../config/config";
import ListPrestamosEmpleados from "../../components/prestamos/ListadoPrestamosEmpleados";
import { confirmAlert } from 'react-confirm-alert';
import { registrarHistoria, registrarHistorialAprobacion } from '../../utils/funciones'

const ListadoPrestamosEmpleados = () => {

    const [user, guardarUsuario] = useState(null)
    const [listado, guardarListado] = useState([])

    const traerPestamosEmpleados = async () => {

        await axios.get(`${ip}api/sgi/prestamos/traerprestamosempleados`)
            .then(res => {
                
                if (res.data.length > 0) {

                    guardarListado(res.data)

                } else if (res.data.length === 0) {

                    toastr.info("No hay subsidios registrados", "ATENCION")

                }

            })
            .catch(error => {
                console.log(error)
                toastr.error("Ocurrio un error al general el listado de subsidios")
            })

    }

    const aprobarPrestamos = async (row) => {


        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres aprobar el subsidio?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {


                        const id = row.original.idprestamo;

                        axios
                            .put(`${ip}api/sgi/prestamos/aprobarprestamoempleado/${id}`)
                            .then((res) => {

                                if (res.status === 200) {
                                    toastr.success("Se aprobo el prestamo con exito", "Atencion");

                                    registrarHistorialAprobacion(row, user.usuario);

                                    let accion = `Se aprobo el prestamo ${row.original.idprestamo}, del empleado ${row.original.empleado} por un capital de ${row.original.capital} en ${row.original.plan_cuotas} cuotas.`

                                    registrarHistoria(accion, user.usuario)

                                    setTimeout(() => {
                                        Router.reload();
                                    }, 1500);
                                }

                            })
                            .catch((error) => {
                                console.log(error);
                            });


                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                        toastr.info("El subsidio no se aprobo", "ATENCION")

                    }
                }
            ]
        });



    };

    const rechazarPrestamos = async (row) => {

        await confirmAlert({
            title: 'ATENCION',
            message: '¿Seguro quieres rechazar el subsidio?',
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {


                        const id = row.original.idprestamo;

                        axios
                            .put(`${ip}api/sgi/prestamos/rechazarprestamoempleado/${id}`)
                            .then((res) => {

                                if (res.status === 200) {
                                    toastr.success("Se rechazo el prestamo con exito", "Atencion");

                                    registrarHistorialAprobacion(row, user.usuario);

                                    let accion = `Se rechazo el prestamo ${row.original.idprestamo}, del empleado ${row.original.empleado} por un capital de ${row.original.capital} en ${row.original.plan_cuotas} cuotas.`

                                    registrarHistoria(accion, user.usuario)

                                    setTimeout(() => {
                                        Router.reload();
                                    }, 1500);
                                }

                            })
                            .catch((error) => {
                                console.log(error);
                            });


                    }
                },
                {
                    label: 'No',
                    onClick: () => {

                        toastr.info("El subsidio no se rechazo", "ATENCION")

                    }
                }
            ]
        });
    };

    const getTrProps = (state, rowInfo, instance) => {
        if (rowInfo) {
            return {
                style: {
                    "background-color": rowInfo.original.capinoaut === 0 ? "red"
                        : null
                    ,
                    "color": rowInfo.original.capinoaut === 0 ? "white"
                        : null

                },


            };
        }
        return {};
    };


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

            let usuario = jsCookie.get("usuario");

            if (usuario) {
                let userData = JSON.parse(usuario);
                guardarUsuario(userData);

            }

            traerPestamosEmpleados()


        }
    }, []);


    return (
        <Layout>

            <ListPrestamosEmpleados
                listado={listado}
                user={user}
                aprobarPrestamos={aprobarPrestamos}
                rechazarPrestamos={rechazarPrestamos}
            />

        </Layout>
    )
}

export default ListadoPrestamosEmpleados