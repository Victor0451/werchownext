import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import axios from "axios";
import jsCookie from "js-cookie";
import Router, { useRouter } from "next/router";
import toastr from "toastr";
import FormSubirArchivo from "../../../../components/sepelio/legajovirtual/FormSubirArchivo";


const subirarchivos = () => {
    let token = jsCookie.get("token");

    const router = useRouter();

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }
    }, []);

    return (
        <Layout>
            <FormSubirArchivo contrato={router.query.id} />
        </Layout>
    );
};


export default subirarchivos
