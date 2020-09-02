import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import jsCookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import FormEditarServicio from "../../../components/sepelio/servicios/FormEditarServicio";

const editar = () => {
    
 
    const [servicio, guardarServicio] = useState(null);

  let token = jsCookie.get("token");
  let router = useRouter();

  const traerServicio = async (id) => {
    axios
      .get(` http://190.231.32.232:5002/api/sepelio/servicio/impservicio/${id}`)
      .then((res) => {
        guardarServicio(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else {
      traerServicio(router.query.id);
    }
  }, []);

  return (
    <Layout>
      <FormEditarServicio servicio={servicio} /> 
    </Layout>
  );
};

export default editar;
