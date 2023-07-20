import React, { useState, useEffect } from 'react'
import Layout from '../../../components/layout/Layout';
import jsCookie from 'js-cookie'
import axios from 'axios';
import SocioFicha from '../../../components/socios/ficha/SocioFicha';
import DiseñoCarnet from '../../../components/socios/carnet/DiseñoCarnet';
import { ip } from '../../../config/config'
import toastr from 'toastr';

const Emitir = () => {

    let contratoRef = React.createRef();
    let dniRef = React.createRef();
    let apellidoRef = React.createRef();

    const [adhs, guardarAdhs] = useState(null);
    const [ficha, guardarFicha] = useState(null);
    const [pagos, guardarPagos] = useState(null);
    const [flag, guardarFlag] = useState(null);
    const [archivos, guardarArchivos] = useState(null);
    const [empresa, guardarEmpresa] = useState(null);
    const [listsocio, guardarListSocios] = useState(null);
    const [errores, guardarErrores] = useState(null);

    const traerArchivos = async (contrato) => {
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

    const traerArchivosM = async (contrato) => {
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

    const traerPagos = async (contrato) => {
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

    const traerPagosM = async (contrato) => {
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

    const traerAdhs = async (contrato) => {
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

    const traerAdhsM = async (contrato) => {
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

    const buscarTitular = async (e) => {
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

    const buscarTitularM = async (e) => {
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

    const buscarTitularDni = async (e) => {
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
                    console.log(ficha);

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

    const buscarTitularDniM = async (e) => {
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
                    console.log(ficha);

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

    const listSociosM = async () => {
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

    const listSocios = async () => {
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

    const Seleccionar = async (contrato) => {
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

    const imprimir = (div) => {
        let contenido = document.getElementById(`${div}`).innerHTML;
        let contenidoOrg = document.body.innerHTML;

        document.body.innerHTML = contenido;

        window.print();

        document.body.innerHTML = contenidoOrg;

        window.location.reload();
    };



    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        } else {

        }
    }, []);

    return (
        <Layout>




            {
                ficha ? (
                    <>

                        <div id="carnet">
                            <DiseñoCarnet
                                ficha={ficha}
                                adhs={adhs}
                            />
                        </div>


                        <div className="container list border border-dark alert alert-primary mt-4">
                            <div className=" border border-dark p-4 border">
                                <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
                                <div className="row d-flex justify-content-center">
                                    <button className="btn btn-primary" onClick={() => imprimir("carnet")}>
                                        Imprimir
                                    </button>

                                    <a className='btn btn-danger ml-1' href='/socios/carnet/emitir'>
                                        Cancelar
                                    </a>
                                </div>
                            </div>
                        </div>


                    </>
                ) : (
                    <SocioFicha
                        ficha={ficha}
                        contratoRef={contratoRef}
                        dniRef={dniRef}
                        apellidoRef={apellidoRef}
                        buscarTitular={buscarTitular}
                        buscarTitularM={buscarTitularM}
                        buscarTitularDni={buscarTitularDni}
                        buscarTitularDniM={buscarTitularDniM}
                        listSocios={listSocios}
                        listSociosM={listSociosM}
                        errores={errores}
                        ficha={ficha}
                        pagos={pagos}
                        empresa={empresa}
                        archivos={archivos}
                        adhs={adhs}
                        listsocio={listsocio}
                        Seleccionar={Seleccionar}
                        titulo={"Generar Carnet"}
                    />
                )
            }



        </Layout>
    )
}

export default Emitir