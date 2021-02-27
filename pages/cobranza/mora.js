import React, { useState, useRef, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import jsCookie from "js-cookie";
import Resumen from "../../components/cobranza/Resumen";
import axios from "axios";
import ResumenWerchow from "../../components/cobranza/ResumenWerchow";
import ResumenMutual from "../../components/cobranza/ResumenMutual";
import ReactToPrint from "react-to-print";
import moment from "moment-timezone";
import toastr from "toastr";
import Router from "next/router";


const mora = () => {
    
    let token = jsCookie.get("token");

    useEffect(() => {
      if (!token) {
        Router.push("/redirect");
      }
    }, []);
    
    return (
        <Layout>
            
        </Layout>
    )
}

export default mora
