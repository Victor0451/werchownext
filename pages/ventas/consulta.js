import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import ConsultaVentas from "../../components/ventas/ConsultaVentas";
import ListadoVentas from "../../components/ventas/ListadoVentas";
import ExportarVentas from "../../components/ventas/ExportarVentas";
import axios from "axios";
import Spinner from "../../components/layout/Spinner";

const consulta = () => {
  const [mes, guardarMes] = useState(null);
  const [ano, guardarAno] = useState(null);

  const [ventas, guardarVentas] = useState(null);
  const [errores, guardarErrores] = useState(null);
  const [spinner, guardarSpinner] = useState(null);

  const handleChange = (value, flag) => {
    if (flag === "mes") {
      const mes = value.value;
      guardarMes(mes);
    } else if (flag === "ano") {
      const ano = value.value;
      guardarAno(ano);
    }
  };

  const buscarVentas = async () => {
    guardarVentas(null);
    guardarSpinner(false);
    if (mes === null || ano === null) {
      guardarErrores("Debe ingresar un mes y un año");
    } else {
      guardarSpinner(true);
      await axios
        .get(`http://190.231.32.232:5002/api/ventas/consultas/consultaventas`, {
          params: {
            mes: mes,
            ano: ano,
          },
        })
        .then((res) => {
          guardarSpinner(false);
          const ventas = res.data[0];
          guardarVentas(ventas);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Layout>
      <ConsultaVentas
        handleChange={handleChange}
        errores={errores}
        ventas={ventas}
        buscarVentas={buscarVentas}
      />
      {spinner === false && ventas !== null ? (
        <>
          <ListadoVentas ventas={ventas} mes={mes} ano={ano} />

          <div className="container alert alert-primary mt-4">
            <div className="mt-4 p-4 border">
              <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
              <div className="row d-flex justify-content-center">
                <ExportarVentas padron={ventas}  />
              </div>
            </div>
          </div>
        </>
      ) : spinner === true ? (
        <Spinner />
      ) : null}
    </Layout>
  );
};

export default consulta;
