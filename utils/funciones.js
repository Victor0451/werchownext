import moment from "moment"
import axios from "axios"
import { ip } from '../config/config'
import toastr from "toastr"
import Router from "next/router"

export const registrarHistoria = async (accion, user) => {

    const historial = {
        operador: user,
        fecha: moment().format('YYYY-MM-DD HH:mm:ss'),
        accion: accion
    }

    await axios.post(`${ip}api/sgi/historialacciones/reghistorial`, historial)
        .then(res => {

            if (res.status === 200) {
                // toastr.info("Esta accion se registo en el historial", "ATENCION")               
            }
        })
        .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al registrar la accion en el historial", "ATENCION")
        })

}

export const registrarHistorialAprobacion = async (data, user) => {
    const historial = {
        operador: user,
        idprestamo: data.original.ptm_id,
        contrato: data.original.ptm_ficha,
        afiliado: data.original.ptm_afi,
        fecha: moment().format("YYYY-MM-DD HH:mm:ss"),
        productor: data.original.ptm_op,
    };

    await axios
        .post(`${ip}api/sgi/prestamos/reghistorial`, historial)
        .then((res) => {
            if (res.status === 200) {
                toastr.info("Esta accion se registrara en el historial", "ATENCION");
            }
        })
        .catch((error) => {
            console.log(error);
            toastr.error("Ocurrio un error al registrar el historial", "ATENCION");
        });
};


// CALCULO GASTO LUTO VIEJO
// export const gastoLuto = (plan, alta, cantadh) => {


//     const anti = parseInt(moment().format('YYYY') - moment(alta).format("YYYY"))

//     let gl = 0

//     let glf = 0

//     if (plan === "F" || plan === "MA" || plan === "MB" || plan === "MC") {

//         gl = 1000

//         if (anti <= 2) {

//             gl = 1000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 1000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 1000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 1000 + 4000

//         } else if (anti > 8) {

//             gl = 1000 + 5000

//         }


//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf



//     } else if (plan === "MP") {

//         if (anti <= 2) {

//             gl = 2000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 2000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 2000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 2000 + 4000

//         } else if (anti > 8) {

//             gl = 2000 + 5000

//         }


//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }

//         return glf


//     } else if (plan === "MN") {


//         if (anti <= 2) {

//             gl = 2500 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 2500 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 2500 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 2500 + 4000

//         } else if (anti > 8) {

//             gl = 2500 + 5000

//         }

//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf


//     } else if (plan === "MO" || plan === "A" || plan === "AB" || plan === "G0" || plan === "U0") {


//         if (anti <= 2) {

//             gl = 3000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 3000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 3000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 3000 + 4000

//         } else if (anti > 8) {

//             gl = 3000 + 5000

//         }

//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf


//     } else if (plan === "G1" || plan === "U1") {



//         if (anti <= 2) {

//             gl = 5000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 5000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 5000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 5000 + 4000

//         } else if (anti > 8) {

//             gl = 5000 + 5000

//         }

//         if (cantadh <= 4) {

//             glf = gl + 1000

//         } else if (cantadh = 5) {

//             glf = gl + 1500

//         } else if (cantadh >= 6) {

//             glf = gl + 2000

//         }


//         return glf


//     } else {

//         // gl = "no"

//         if (anti <= 2) {

//             gl = 1000 + 1000

//         } else if (anti > 2 && anti <= 4) {

//             gl = 1000 + 2000

//         } else if (anti > 4 && anti <= 6) {

//             gl = 1000 + 3000

//         } else if (anti > 6 && anti <= 8) {

//             gl = 1000 + 4000

//         } else if (anti > 8) {

//             gl = 1000 + 5000

//         }

//         return gl

//     }

// }



// CALCULO GASTO LUTO NUEVO


export const gastoLuto = (plan, alta, cantadh) => {

    // NUEVO CALCULO 09/2022


    let inicio = moment(alta).format('YYYY-MM-DD')

    let anti = moment().diff(inicio, 'years')


    if (anti <= 3) {

        return 22000

    } else if (anti > 3) {

        return 28000

    }



    // ---------------------------

    // CALCULO VIEJO  03/2022

    // const anti = parseInt(moment().format('YYYY') - moment(alta).format("YYYY"))

    // let gl = 0

    // let glf = 0

    // let inte = cantadh + 1



    // gl = 2000


    // if (inte < 4) {

    //     glf = gl

    // } else if (inte >= 4 && inte <= 6) {

    //     glf = gl + 1500

    // } else if (inte >= 7) {

    //     glf = gl + 2000

    // }


    // return glf





}

export const traerArchivos = async (contrato) => {
    await axios
        .get(
            `${ip}api/archivos/legajovirtual/listaarchivos/${contrato}`
        )
        .then((res) => {
            let archivos = res.data;
            guardarArchivos(archivos);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const traerArchivosM = async (contrato) => {
    await axios
        .get(
            `${ip}api/archivos/legajovirtualm/listaarchivos/${contrato}`
        )
        .then((res) => {
            let archivos = res.data;
            guardarArchivos(archivos);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const traerPagos = async (contrato) => {
    await axios
        .get(`${ip}api/werchow/pagos/pagos/${contrato}`)
        .then((res) => {
            let pagos = res.data;
            // guardarPagos(pagos);

            axios
                .get(
                    `${ip}api/werchow/pagobco/pagobco/${contrato}`
                )
                .then((res) => {
                    let pagosbco = res.data;
                    let allPagos = pagos.concat(pagosbco);

                    guardarPagos(allPagos);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const traerPagosM = async (contrato) => {
    await axios
        .get(
            `${ip}api/werchow/pagos/pagosmutual/${contrato}`
        )
        .then((res) => {
            let pagos = res.data;
            guardarPagosBco(pagos);
        })
        .catch((error) => {
            console.log(error);
        });

    await axios
        .get(
            `${ip}api/werchow/pagos/pagosmutual/${contrato}`
        )
        .then((res) => {
            let pagos = res.data;
            // guardarPagos(pagos);

            axios
                .get(
                    `${ip}api/werchow/pagobco/pagobcom/${contrato}`
                )
                .then((res) => {
                    let pagosbco = res.data;
                    let allPagos = pagos.concat(pagosbco);

                    guardarPagos(allPagos);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
};

export const traerAdhs = async (contrato) => {
    await axios
        .get(
            `${ip}api/werchow/adherent/adherentestit/${contrato}`
        )
        .then((res) => {
            guardarAdhs(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const traerAdhsM = async (contrato) => {
    await axios
        .get(
            `${ip}api/mutual/adherent/adherentestit/${contrato}`
        )
        .then((res) => {
            guardarAdhs(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const buscarTitular = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    if (contratoRef.current.value !== "") {
        let contrato = contratoRef.current.value;

        await axios
            .get(
                `${ip}api/werchow/maestro/titular/${contrato}`
            )
            .then((res) => {
                let ficha = res.data[0][0];
                guardarFicha(ficha);
                cantAdh(ficha.CONTRATO)
                traerPagos(ficha.CONTRATO);

                if (ficha === "undefined") {
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                }
                traerArchivos(ficha.CONTRATO);
                traerAdhs(ficha.CONTRATO);
                guardarEmpresa("W");
                toastr.success("Se encontro al socio con exito", "ATENCION")

            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
            });
    } else if (contratoRef.current.value === "") {
        const errores = "Debes Ingresar Un Numero De Contrato";
        guardarErrores(errores);
    }
};

export const buscarTitularM = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);
    guardarAdhs(null);

    if (contratoRef.current.value !== "") {
        let contrato = contratoRef.current.value;

        await axios
            .get(
                `${ip}api/werchow/maestro/titularm/${contrato}`
            )
            .then((res) => {
                let ficha = res.data[0][0];
                guardarFicha(ficha);
                cantAdhM(ficha.CONTRATO)
                traerPagosM(ficha.CONTRATO);

                if (ficha === "undefined") {
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                }
                traerArchivosM(ficha.CONTRATO);
                guardarEmpresa("M");
                traerAdhsM(ficha.CONTRATO);
                toastr.success("Se encontro al socio con exito", "ATENCION")
            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
            });
    } else if (contratoRef.current.value === "") {
        const errores = "Debes Ingresar Un Numero De Contrato";
        guardarErrores(errores);
    }
};

export const buscarTitularDni = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);

    if (dniRef.current.value !== "") {
        let dni = dniRef.current.value;

        await axios
            .get(`${ip}api/werchow/maestro/titulardni/${dni}`)
            .then((res) => {
                let ficha = res.data[0][0];
                guardarFicha(ficha);
                cantAdh(ficha.CONTRATO)

                if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
                    traerPagos(ficha.CONTRATO);
                } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
                    traerPagosBco(ficha.CONTRATO);
                } else if (ficha === "undefined") {
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                }
                traerArchivos(ficha.CONTRATO);
                guardarEmpresa("W");
                toastr.success("Se encontro al socio con exito", "ATENCION")
            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
            });
    } else if (contratoRef.current.value === "") {
        const errores = "Debes Ingresar Un Numero De Contrato";
        guardarErrores(errores);
    }
};

export const buscarTitularDniM = async (e) => {
    e.preventDefault();

    guardarArchivos(null);
    guardarFicha(null);
    guardarErrores(null);
    guardarPagos(null);

    if (dniRef.current.value !== "") {
        let dni = dniRef.current.value;

        await axios
            .get(
                `${ip}api/werchow/maestro/titulardnim/${dni}`
            )
            .then((res) => {
                let ficha = res.data[0][0];
                guardarFicha(ficha);
                cantAdhM(ficha.CONTRATO)

                if (ficha.GRUPO === 1000 || ficha.GRUPO === 1001) {
                    traerPagos(ficha.CONTRATO);
                } else if (ficha.GRUPO === 6 || ficha.GRUPO > 3000) {
                    traerPagosBco(ficha.CONTRATO);
                } else if (ficha === "undefined") {
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                }
                traerArchivosM(ficha.CONTRATO);
                guardarEmpresa("M");
                toastr.success("Se encontro al socio con exito", "ATENCION")

            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error al buscar al socio", "ATENCION")

            });
    } else if (contratoRef.current.value === "") {
        const errores = "Debes Ingresar Un Numero De Contrato";
        guardarErrores(errores);
    }
};

export const listSociosM = async () => {
    guardarListSocios(null)

    guardarFlag('M')

    toastr.info("Buscando y generando listado de socios", "ATENCION")


    await axios.get(`${ip}api/werchow/maestro/titularesm`)
        .then(res => {
            guardarListSocios(res.data[0])
            toastr.success("Se genero el listado de socios con exito", "ATENCION")

        })
        .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al generar el listado de socios", "ATENCION")
        })
}

export const listSocios = async () => {
    guardarFlag('W')

    guardarListSocios(null)

    toastr.info("Buscando y generando listado de socios", "ATENCION")


    await axios.get(`${ip}api/werchow/maestro/titulares`)
        .then(res => {
            guardarListSocios(res.data[0])
            toastr.success("Se genero el listado de socios con exito", "ATENCION")

        })
        .catch(error => {
            console.log(error)
            toastr.error("Ocurrio un error al generar el listado de socios", "ATENCION")
        })
}

export const Seleccionar = async (contrato) => {
    if (flag === 'W') {
        guardarArchivos(null);
        guardarFicha(null);
        guardarErrores(null);
        guardarPagos(null);
        guardarAdhs(null);

        await axios
            .get(
                `${ip}api/werchow/maestro/titular/${contrato}`
            )
            .then((res) => {
                let ficha = res.data[0][0];
                guardarFicha(ficha);
                cantAdh(ficha.CONTRATO)
                traerPagos(ficha.CONTRATO);

                if (ficha === "undefined") {
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                }
                traerArchivos(ficha.CONTRATO);
                traerAdhs(ficha.CONTRATO);
                guardarEmpresa("W");

                toastr.success("Se busco al socio con exito", "ATENCION")
            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error al buscar al socios", "ATENCION")
            });
    } else if (contratoRef.current.value === "") {
        const errores = "Debes Ingresar Un Numero De Contrato";
        guardarErrores(errores);


    } else if (flag === 'M') {
        guardarArchivos(null);
        guardarFicha(null);
        guardarErrores(null);
        guardarPagos(null);
        guardarAdhs(null);

        await axios
            .get(
                `${ip}api/werchow/maestro/titularm/${contrato}`
            )
            .then((res) => {
                let ficha = res.data[0][0];
                guardarFicha(ficha);

                traerPagos(ficha.CONTRATO);
                cantAdhM(ficha.CONTRATO)

                if (ficha === "undefined") {
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                }
                traerArchivos(ficha.CONTRATO);
                traerAdhs(ficha.CONTRATO);
                guardarEmpresa("M");
                toastr.success("Se busco al socio con exito", "ATENCION")
            })
            .catch((error) => {
                console.log(error);
                toastr.error("Ocurrio un error al buscar al socio", "ATENCION")
            });
    } else if (contratoRef.current.value === "") {
        const errores = "Debes Ingresar Un Numero De Contrato";
        guardarErrores(errores);
    }

}

export const cantAdh = async (contrato) => {

    await axios
        .get(`${ip}api/sepelio/servicio/cantadh/${contrato}`)
        .then((res) => {
            guardarCantAdh(res.data.adh);
        })
        .catch((error) => {
            console.log(error);
        });

}

export const cantAdhM = async (contrato) => {

    await axios
        .get(`${ip}api/sepelio/servicio/cantadhm/${contrato}`)
        .then((res) => {
            guardarCantAdh(res.data.adh);
        })
        .catch((error) => {
            console.log(error);
        });

}
