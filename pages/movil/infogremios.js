import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import moment from "moment-timezone";
import axios from "axios";
import jsCookie from "js-cookie";
import toastr from "toastr";
import Router, { useRouter } from "next/router";
import { confirmAlert } from 'react-confirm-alert'; // Import
import { ip } from "../../config/config";
import { registrarHistoria } from '../../utils/funciones'
import FormInfoGremios from '../../components/movil/FormInfoGremios'

const infogremios = () => {
    return (
        <Layout f={"nonav"}>

            <FormInfoGremios

            />

        </Layout>
    )
}

export default infogremios