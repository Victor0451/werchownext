import { ReactTableDefaults } from "react-table";

import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import ReactToPrint from "react-to-print";
import moment from "moment-timezone";
import toastr from "toastr";
import Router from "next/router";
import ResumenSucursales from "../../components/cobranza/ResumenSucursales";
import Online from "../../components/cobranza/Online";



const sucursales = () => {

    let componentRef = useRef();


    const [sindato, guardarSindato] = useState(null);
    const [cargando, guardarCargando] = useState(false);
    const [mutual, guardarMutual] = useState(false);
    const [werchow, guardarWerchow] = useState(false);
    const [mes, guardarMes] = useState(null);
    const [ano, guardarAno] = useState(null);
    const [sucursal, guardarSucursal] = useState(null);
    const [oficina, guardarOficina] = useState(null);
    const [cobrador, guardarCobrador] = useState(null);
    const [tarjeta, guardarTarjeta] = useState(null);
    const [banco, guardarBanco] = useState(null);
    const [policia, guardarPolicia] = useState(null);
    const [empresa, guardarEmpresa] = useState(null);


    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
    }, []);

    const handleChange = (value, flag) => {
        if (flag === "mes") {
            const mes = value.value;
            guardarMes(mes);
        } else if (flag === "ano") {
            const ano = value.value;
            guardarAno(ano);
        } else if (flag === "sucursal") {
            const sucursal = value.value;
            guardarSucursal(sucursal);
        }
    };

    const buscarNumeros = () => {

        guardarMutual(false)
        guardarWerchow(false)
        guardarOficina(null)
        guardarCobrador(null)
        guardarTarjeta(null)
        guardarBanco(null)
        guardarPolicia(null)
        guardarEmpresa(null)

        let month = moment().format("M");
        let year = moment().format("YYYY");

        if (mes === null || ano === null || sucursal === null) {
            toastr.warning("Debes seleccionas un mes y un año si o no", "ATENCION");
        } else if (mes > parseInt(month) && ano >= year) {
            guardarSindato(true);
        } else if (
            mes >= parseInt(month) ||
            (mes <= parseInt(month) && ano <= year)
        ) {
            guardarCargando(false);
            guardarSindato(false);
            guardarWerchow(true)
            guardarEmpresa('Werchow')


            if (sucursal === 1) {
                traerOficina(1)
                traerCobrador(1)
                traerTarjeta(1)
                traerBanco(1)
                traerPolicia(1)
            } else if (sucursal === 3) {
                traerOficina(3)
                traerCobrador(3)
                traerTarjeta(3)
                traerBanco(3)
                traerPolicia(3)
            } else if (sucursal === 5) {
                traerOficina(5)
                traerCobrador(5)
                traerTarjeta(5)
                traerBanco(5)
                traerPolicia(5)
            } else if (sucursal === 60) {
                traerOficina(60)
                traerCobrador(60)
                traerTarjeta(60)
                traerBanco(60)
                traerPolicia(60)
            }
        }

    }

    const buscarNumerosMutual = () => {

        guardarMutual(false)
        guardarWerchow(false)
        guardarOficina(null)
        guardarCobrador(null)
        guardarTarjeta(null)
        guardarBanco(null)
        guardarPolicia(null)
        guardarEmpresa(null)

        let month = moment().format("M");
        let year = moment().format("YYYY");

        if (mes === null || ano === null || sucursal === null) {
            toastr.warning("Debes seleccionas un mes y un año si o no", "ATENCION");
        } else if (mes > parseInt(month) && ano >= year) {
            guardarSindato(false);
        } else if (
            mes >= parseInt(month) ||
            (mes <= parseInt(month) && ano <= year)
        ) {

            guardarMutual(true)
            guardarCargando(false);
            guardarSindato(false);
            guardarEmpresa('Mutual')

            if (sucursal === 1) {
                traerOficinaM(1)
                traerCobradorM(1)
                traerTarjetaM(1)

            } else if (sucursal === 3) {
                traerOficinaM(3)
                traerCobradorM(3)
                traerTarjetaM(3)

            } else if (sucursal === 5) {
                traerOficinaM(5)
                traerCobradorM(5)
                traerTarjetaM(5)

            } else if (sucursal === 60) {
                traerOficinaM(60)
                traerCobradorM(60)
                traerTarjetaM(60)

            }
        }

    }

    const traerOficina = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/ofw`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/ofl`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/ofr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/ofp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const traerOficinaM = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/ofw`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/ofl`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/ofr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/ofp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarOficina(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const traerCobrador = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/cobW`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/cobl`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/cobr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/cobp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const traerCobradorM = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/cobW`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/cobl`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/cobr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/cobp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarCobrador(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const traerTarjeta = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/tjtw`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/tjtl`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/tjtr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/tjtp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const traerTarjetaM = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/tjtw`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/tjtl`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/tjtr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadm/tjtp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarTarjeta(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const traerBanco = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/banw`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarBanco(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/banl`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarBanco(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/banr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarBanco(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/banp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarBanco(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const traerPolicia = async (flag) => {

        if (flag === 1) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/polw`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarPolicia(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 3) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/poll`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarPolicia(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 5) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/polr`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarPolicia(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        } else if (flag === 60) {
            await axios.get(`http://190.231.32.232:5002/api/sgi/efectividadw/polp`,
                {
                    params: {
                        mes: mes,
                        ano: ano
                    }
                })
                .then(res => {
                    guardarPolicia(res.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }

    const calcularTotal = (arr, flag) => {
        let ret = 0

        if (flag === 'fichas') {

            for (let i = 0; i < arr.length; i++) {
                ret += arr[i].fichas
            }
            return ret

        } else if (flag === 'total') {
            for (let i = 0; i < arr.length; i++) {
                ret += arr[i].total
            }
            return ret

        } else if (flag === 'fichascob') {
            for (let i = 0; i < arr.length; i++) {
                ret += arr[i].fichascob
            }
            return ret

        } else if (flag === 'cobrado') {
            for (let i = 0; i < arr.length; i++) {
                ret += arr[i].cobrado
            }
            return ret

        } else if (flag === 'adelantado') {
            for (let i = 0; i < arr.length; i++) {
                ret += arr[i].adelantado
            }
            return ret

        }
    }

    const calcularEfectividad = (arr) => {

        let total = 0
        let cobrado = 0
        let adelantado = 0


        for (let i = 0; i < arr.length; i++) {
            total += arr[i].total
            cobrado += arr[i].cobrado
            adelantado += arr[i].adelantado
        }

        let efec = ((cobrado + adelantado) / (total + adelantado)) * 100

        return efec.toFixed(2)

    }

    const calcularEfecPersonal = (cobrado, total, adelantado) => {
        let efec = ((cobrado + adelantado) / (total + adelantado)) * 100

        return efec.toFixed(2)
    }

    const calcularTotalGeneral = (arr1, arr2, arr3, arr4, arr5, flag) => {

        let total1 = 0
        let total2 = 0
        let total3 = 0
        let total4 = 0
        let total5 = 0

        let ret = 0

        if (flag === 'fichas') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += arr1[i].fichas
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += arr2[i].fichas
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += arr3[i].fichas
            }
            for (let i = 0; i < arr4.length; i++) {
                total4 += arr4[i].fichas
            }
            for (let i = 0; i < arr5.length; i++) {
                total5 += arr5[i].fichas
            }

            ret = total1 + total2 + total3 + total4 + total5

            return ret

        } else if (flag === 'total') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += arr1[i].total
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += arr2[i].total
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += arr3[i].total
            }
            for (let i = 0; i < arr4.length; i++) {
                total4 += arr4[i].total
            }
            for (let i = 0; i < arr5.length; i++) {
                total5 += arr5[i].total
            }

            ret = total1 + total2 + total3 + total4 + total5

            return ret


        } else if (flag === 'fichascob') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += arr1[i].fichascob
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += arr2[i].fichascob
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += arr3[i].fichascob
            }
            for (let i = 0; i < arr4.length; i++) {
                total4 += arr4[i].fichascob
            }
            for (let i = 0; i < arr5.length; i++) {
                total5 += arr5[i].fichascob
            }

            ret = total1 + total2 + total3 + total4 + total5

            return ret

        } else if (flag === 'cobrado') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += arr1[i].cobrado
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += arr2[i].cobrado
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += arr3[i].cobrado
            }
            for (let i = 0; i < arr4.length; i++) {
                total4 += arr4[i].cobrado
            }
            for (let i = 0; i < arr5.length; i++) {
                total5 += arr5[i].cobrado
            }

            ret = total1 + total2 + total3 + total4 + total5

            return ret

        } else if (flag === 'adelantado') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += arr1[i].adelantado
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += arr2[i].adelantado
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += arr3[i].adelantado
            }
            for (let i = 0; i < arr4.length; i++) {
                total4 += arr4[i].adelantado
            }
            for (let i = 0; i < arr5.length; i++) {
                total5 += arr5[i].adelantado
            }

            ret = total1 + total2 + total3 + total4 + total5

            return ret

        }


    }

    const calcularTotalGeneralM = (arr1, arr2, arr3, flag) => {

        let total1 = 0
        let total2 = 0
        let total3 = 0


        let ret = 0

        if (flag === 'fichas') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += parseInt(arr1[i].fichas)
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += parseInt(arr2[i].fichas)
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += parseInt(arr3[i].fichas)
            }

            ret = total1 + total2 + total3

            return ret

        } else if (flag === 'total') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += parseInt(arr1[i].total)
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += parseInt(arr2[i].total)
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += parseInt(arr3[i].total)
            }

            ret = total1 + total2 + total3

            return ret


        } else if (flag === 'fichascob') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += parseInt(arr1[i].fichascob)
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += parseInt(arr2[i].fichascob)
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += parseInt(arr3[i].fichascob)
            }

            ret = total1 + total2 + total3

            return ret

        } else if (flag === 'cobrado') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += parseInt(arr1[i].cobrado)
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += parseInt(arr2[i].cobrado)
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += parseInt(arr3[i].cobrado)
            }

            ret = total1 + total2 + total3

            return ret

        } else if (flag === 'adelantado') {

            for (let i = 0; i < arr1.length; i++) {
                total1 += parseInt(arr1[i].adelantado)
            }
            for (let i = 0; i < arr2.length; i++) {
                total2 += parseInt(arr2[i].adelantado)
            }
            for (let i = 0; i < arr3.length; i++) {
                total3 += parseInt(arr3[i].adelantado)
            }

            ret = total1 + total2 + total3

            return ret

        }


    }

    const calcularEfectividadTotal = (arr1, arr2, arr3, arr4, arr5,) => {


        let total1 = 0
        let total2 = 0
        let total3 = 0
        let total4 = 0
        let total5 = 0

        let cobrado1 = 0
        let cobrado2 = 0
        let cobrado3 = 0
        let cobrado4 = 0
        let cobrado5 = 0

        let adelantado1 = 0
        let adelantado2 = 0
        let adelantado3 = 0
        let adelantado4 = 0
        let adelantado5 = 0

        let totalgral = 0
        let cobradogral = 0
        let adelantadogral = 0

        for (let i = 0; i < arr1.length; i++) {
            total1 += arr1[i].total
            cobrado1 += arr1[i].cobrado
            adelantado1 += arr1[i].adelantado
        }
        for (let i = 0; i < arr2.length; i++) {
            total2 += arr2[i].total
            cobrado2 += arr2[i].cobrado
            adelantado2 += arr2[i].adelantado
        }
        for (let i = 0; i < arr3.length; i++) {
            total3 += arr3[i].total
            cobrado3 += arr3[i].cobrado
            adelantado3 += arr3[i].adelantado
        }
        for (let i = 0; i < arr4.length; i++) {
            total4 += arr4[i].total
            cobrado4 += arr4[i].cobrado
            adelantado4 += arr4[i].adelantado
        }
        for (let i = 0; i < arr5.length; i++) {
            total5 += arr5[i].total
            cobrado5 += arr5[i].cobrado
            adelantado5 += arr5[i].adelantado
        }

        totalgral = total1 + total2 + total3 + total4 + total5
        cobradogral = cobrado1 + cobrado2 + cobrado3 + cobrado4 + cobrado5
        adelantadogral = adelantado1 + adelantado2 + adelantado3 + adelantado4 + adelantado5

        let efecgral = ((cobradogral + adelantadogral) / (totalgral + adelantadogral)) * 100

        return efecgral.toFixed(2)

    }

    const calcularEfectividadTotalM = (arr1, arr2, arr3) => {


        let total1 = 0
        let total2 = 0
        let total3 = 0

        let cobrado1 = 0
        let cobrado2 = 0
        let cobrado3 = 0

        let adelantado1 = 0
        let adelantado2 = 0
        let adelantado3 = 0

        let totalgral = 0
        let cobradogral = 0
        let adelantadogral = 0

        for (let i = 0; i < arr1.length; i++) {
            total1 += parseInt(arr1[i].total)
            cobrado1 += parseInt(arr1[i].cobrado)
            adelantado1 += parseInt(arr1[i].adelantado)
        }
        for (let i = 0; i < arr2.length; i++) {
            total2 += parseInt(arr2[i].total)
            cobrado2 += parseInt(arr2[i].cobrado)
            adelantado2 += parseInt(arr2[i].adelantado)
        }
        for (let i = 0; i < arr3.length; i++) {
            total3 += parseInt(arr3[i].total)
            cobrado3 += parseInt(arr3[i].cobrado)
            adelantado3 += parseInt(arr3[i].adelantado)
        }


        totalgral = total1 + total2 + total3
        cobradogral = cobrado1 + cobrado2 + cobrado3
        adelantadogral = adelantado1 + adelantado2 + adelantado3

        let efecgral = ((cobradogral + adelantadogral) / (totalgral + adelantadogral)) * 100

        return efecgral.toFixed(2)

    }

    return (
        <Layout>
            <ResumenSucursales handleChange={handleChange} buscarNumeros={buscarNumeros} buscarNumerosMutual={buscarNumerosMutual} />

            {sindato === null ? null : (
                <div className="container mt-4 mb-4 border border-dark p-2">
                    {sindato === true ? (
                        <div className="mt-4 container form-group text-center text-uppercase border border-dark alert alert-warning">
                            <strong>No hay datos generados aun. Intente mas tarde</strong>
                        </div>
                    ) : (
                            <>
                                <div className="print-efect p-4" ref={componentRef}>
                                    <h3 className="text-center">
                                        <strong>
                                            <u>
                                                Efectividad De Cobranza {
                                                    sucursal == 1 ? (<>Casa Central</>)
                                                        : sucursal == 3 ? (<>Palpala</>)
                                                            : sucursal == 5 ? (<>Perico</>)
                                                                : sucursal == 60 ? (<>San Pedro</>)
                                                                    : null
                                                } - {empresa} Periodo:{" "}
                                                {mes}/{ano}
                                            </u>
                                        </strong>
                                    </h3>


                                    <Online
                                        sucursal={sucursal}
                                        oficina={oficina}
                                        cobrador={cobrador}
                                        tarjeta={tarjeta}
                                        banco={banco}
                                        policia={policia}
                                        calcularTotal={calcularTotal}
                                        calcularEfectividad={calcularEfectividad}
                                        calcularEfecPersonal={calcularEfecPersonal}
                                        calcularTotalGeneral={calcularTotalGeneral}
                                        calcularTotalGeneralM={calcularTotalGeneralM}
                                        calcularEfectividadTotal={calcularEfectividadTotal}
                                        calcularEfectividadTotalM={calcularEfectividadTotalM}
                                        werchow={werchow}
                                        mutual={mutual}
                                    />

                                    <div className="container">
                                        <hr className="mt-4 mb-4" />


                                    </div>
                                </div>
                                <div className="alert alert-primary border border-dark p-4">
                                    <h3 className="text-center mb-4 font-weight-bold">
                                        <u>Opciones</u>
                                    </h3>
                                    <div className="row d-flex justify-content-center">
                                        <ReactToPrint
                                            trigger={() => (
                                                <a href="#" className="btn btn-primary">
                                                    imprimir{" "}
                                                </a>
                                            )}
                                            content={() => componentRef.current}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                </div>
            )}

        </Layout>
    )
}

export default sucursales
