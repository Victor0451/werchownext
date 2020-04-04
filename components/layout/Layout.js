import React from "react";
import Link from "next/link";
import Navbar from "../layout/Navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="container mt-2">
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sandstone/bootstrap.min.css"
        ></link>
        <title>Werchow Prueba</title>
      </Head>

      <Navbar />

      <main>{props.children}</main>
    </div>
  );
};
export default Layout;
