import React, { useState, useEffect } from "react";
import Layout from "../../../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router from "next/router";
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ip } from "../../../../config/config";
import { registrarHistoria } from '../../../../utils/funciones'
import FormCodigoNoSocio from "../../../../components/gestion/werchow/servicios/FormCodigoNoSocio";

const CodigoNoSocio = () => {
    return (
        <Layout f={"nonav"}>

            <FormCodigoNoSocio />

        </Layout>
    )
}

export default CodigoNoSocio