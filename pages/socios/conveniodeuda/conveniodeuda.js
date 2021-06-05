import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router from "next/router";
import toastr from 'toastr'
import moment from 'moment'
import { confirmAlert } from "react-confirm-alert";
import FormConvenioDeuda from "../../../components/socios/conveniodeuda/FormConvenioDeuda";
import BuscarSocio from "../../../components/socios/conveniodeuda/BuscarSocio";
import {ip} from '../../../config/config'

const conveniodeuda = () => {

    let contratoRef = React.createRef();
    let saldoRef = React.createRef();
    let deudaRef = React.createRef();
    let cuotaRef = React.createRef();
    let vencimiento1Ref = React.createRef();
    let vencimiento2Ref = React.createRef();
    let importe1Ref = React.createRef();
    let importe2Ref = React.createRef();
    let bonificacionRef = React.createRef();

    const [empresa, guardarEmpresa] = useState(null);
    const [ficha, guardarFicha] = useState(null);
    const [nomoro, guardarNoMoro] = useState(null);
    const [errores, guardarErrores] = useState(null);


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
    }, []);


    const buscarTitular = async (e) => {
        e.preventDefault();

        guardarFicha(null);
        guardarErrores(null);
        guardarNoMoro(null);

        if (contratoRef.current.value !== "") {
            let contrato = contratoRef.current.value;
            console.log(contrato);

            await axios
                .get(
                    `${ip}api/sgi/socios/consultarficha/${contrato}`
                )
                .then((res) => {
                    let ficha = res.data;

                    guardarFicha(ficha);
                    guardarEmpresa("W");

                    if (res.DATA === null) {
                        const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                        guardarErrores(errores);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                });
        } else if (contratoRef.current.value === "") {
            const errores = "Debes Ingresar Un Numero De Contrato";
            guardarErrores(errores);
        }
    };

    const buscarTitularM = async (e) => {
        e.preventDefault();

        guardarFicha(null);
        guardarErrores(null);
        guardarNoMoro(null);

        if (contratoRef.current.value !== "") {
            let contrato = contratoRef.current.value;
            console.log(contrato);

            await axios
                .get(
                    `${ip}api/sgi/socios/consultarficham/${contrato}`
                )
                .then((res) => {
                    let ficha = res.data;

                    guardarFicha(ficha);
                    guardarEmpresa("M");
                    if (res.DATA === null) {
                        const errores =
                            "EL NUMERO DE FICHA NO ES MOROSO O ESTA DADA DE BAJA";
                        guardarErrores(errores);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    toastr.error(
                        "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA",
                        "ATENCION"
                    );
                    const errores = "EL NUMERO DE FICHA NO EXISTE O ESTA DADA DE BAJA";
                    guardarErrores(errores);
                });
        } else if (contratoRef.current.value === "") {
            const errores = "Debes Ingresar Un Numero De Contrato";
            guardarErrores(errores);
        }
    };

    const registrarConvenio = async () => {

        let usuario = jsCookie.get("usuario");

        let userData = JSON.parse(usuario);

        const convenio = {

            contrato: ficha.CONTRATO,
            apellido: ficha.APELLIDOS,
            nombre: ficha.NOMBRES,
            operador: userData.usuario,
            vigencia: moment().add(15, "days").format('YYYY-MM-DD'),
            fecha: moment().format('YYYY-MM-DD'),
            cuotas: cuotaRef.current.value,
            dni: ficha.NRO_DOC,
            empresa: empresa,
            idoperador: userData.id,
            vencimiento1: moment(vencimiento1Ref.current.value).format('YYYY-MM-DD'),
            vencimiento2: moment(vencimiento2Ref.current.value).format('YYYY-MM-DD'),
            importe1: importe1Ref.current.value,
            importe2: importe2Ref.current.value,
            deuda: deudaRef.current.value,
            bonificacion: bonificacionRef.current.value,
            saldo: saldoRef.current.value

        }


        if (empresa === "W") {
            convenio.empresa = "WERCHOW";
        } else if (empresa === "M") {
            convenio.empresa = "MUTUAL SAN VALENTIN";
        }

        axios.post(`${ip}api/sgi/socios/nuevoconvdeuda`, convenio)
            .then(res => {
                if (res.status === 200) {
                    toastr.success("El convenio se registro correctamente", "ATENCION")
                }
            })
            .catch(error => {
                console.log(error)
            })

        confirmAlert({
            title: "ATENCION",
            message: "¿Imprimir comprobante del convenio?",
            buttons: [
                {
                    label: 'Si',
                    onClick: () => {
                        Router.push(`/socios/conveniodeuda/imprimirconvenio`)

                        Router.push({
                            pathname: `/socios/conveniodeuda/imprimirconvenio`,
                            query: { id: convenio.contrato },
                        });

                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ],
        });

    }


    return (
        <Layout>
            <BuscarSocio buscarTitular={buscarTitular} buscarTitularM={buscarTitularM} contratoRef={contratoRef} errores={errores} nomoro={nomoro} />


            {ficha ? (
                <>
                    <div id="solicitud">
                        <FormConvenioDeuda
                            ficha={ficha}
                            saldoRef={saldoRef}
                            deudaRef={deudaRef}
                            cuotaRef={cuotaRef}
                            vencimiento1Ref={vencimiento1Ref}
                            vencimiento2Ref={vencimiento2Ref}
                            importe1Ref={importe1Ref}
                            importe2Ref={importe2Ref}
                            bonificacionRef={bonificacionRef}
                            registrarConvenio={registrarConvenio}
                        />
                    </div>

                    <div className="mb-4 mt-4 container  border border-dark alert alert-primary p-4">
                        <div className="row  d-flex justify-content-center">
                            <div className="col-md-4">
                                <button className="btn btn-block btn-primary" onClick={registrarConvenio}>Registrar</button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-block btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}


        </Layout>
    )
}

export default conveniodeuda

