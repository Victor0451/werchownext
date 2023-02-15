import React, { useEffect, useState } from "react";
import Layout from "../../../../components/layout/Layout";
import jsCookie from "js-cookie";
import moment from "moment";
import axios from "axios";
import toastr from "toastr";
import Router from "next/router";
import { ip } from '../../../../config/config'
import FormReportes from "../../../../components/gestion/werchow/orden/FormReportes";

const Reportes = () => {

    let token = jsCookie.get("token");

    useEffect(() => {
        if (!token) {
            Router.push("/redirect");
        }

    }, []);

    return (
        <Layout>
            <FormReportes 
            
            />
        </Layout>
    )
}

export default Reportes