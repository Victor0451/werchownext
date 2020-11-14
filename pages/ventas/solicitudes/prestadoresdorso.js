import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import Router from "next/router";
import { confirmAlert } from "react-confirm-alert";

const prestadores = () => {
  const imprimir = () => {
    let css = "@page :first{  size: A4 landscape; size: 287mm 210mm;}",
      head = document.body || document.getElementsById("soli")[0],
      style = document.createElement("style");

    style.type = "text/css";
    style.media = "print";

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);

    window.print();
  };

  let token = jsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      confirmAlert({
        title: "ATENCION",
        message: "HAZ CLICK EN LA SOLICITUD PARA IMPRIMIRLA",
        buttons: [
          {
            label: "Aceptar",
            // onClick: () => alert("Click Yes"),
          },
        ],
      });
    }
  }, []);

  return (
    <Layout>
      <div id="soli" className="mt-2">
        <img
          className="solic"
          src="/img/solicitudes/prestadores2.jpg"
          onClick={imprimir}
        />
      </div>
    </Layout>
  );
};

export default prestadores;
