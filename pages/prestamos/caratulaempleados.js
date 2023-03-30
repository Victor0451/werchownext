import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReactToPrint from "react-to-print";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import JsCookie from "js-cookie";
import { ip } from '../../config/config'
import moment from "moment";

const CaratulaEmpleados = () => {
  let componentRef = React.createRef();

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const [prestamos, guardarPrestamos] = useState(null);
  const [empleado, guardarEmpleado] = useState(null);

  const prestamoPorId = async (id) => {
    await axios
      .get(`${ip}api/sgi/prestamos/prestamosempleadosporid/${id}`)
      .then((res) => {

        let prestamos = res.data;
        guardarPrestamos(prestamos);

        traerEmpleado(res.data.empleado)

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const traerEmpleado = async (emp) => {

    await axios.get(`${ip}api/sgi/prestamos/traerempleado/${emp}`)
      .then(res => {

        guardarEmpleado(res.data[0])

      })
      .catch((error) => {
        console.log(error);
      });


  }

  let token = JsCookie.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    } else if (token) {
      if (id) {
        prestamoPorId(id);
      }
    }
  }, []);

  const imprimir = () => {
    let contenido = document.getElementById("caratula").innerHTML;
    let contenidoOrg = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOrg;

    window.location.replace(`/prestamos/listadoprestamosempleados`);
  };

  if (!empleado) return <div>Cargando...</div>;

  return (
    <Layout>
      <div className="container">
        <div
          id="caratula"
          className=" border p-4"
          ref={(el) => (componentRef = el)}
        >
          <div className="jumbotron">
            <h1 className="mb-4 alert text-center text-uppercase">
              <strong>
                <u>Subsidio Por Contencion Familiar Para Empleados</u>
              </strong>
            </h1>
            <h2 className="border jumbotron mt-4 mb-4 p-4 col-md-12">
              <strong>
                <u>BENEFICIARIO</u>: {empleado.apellido}, {empleado.nombre}
              </strong>
            </h2>{" "}
            <div className=" h3 row mt-2 ">
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>FECHA DE SOLICITUD</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>{moment(prestamos.fecha_solicitud).format('DD/MM/YYYY')}</strong>
              </div>{" "}

            </div>
            <hr className="mt-4 mb-4 border-bottom border-dark" />
            <h2 className="mt-4 mb-4">
              <strong>
                <u>Detalles del Subsidio</u>
              </strong>
            </h2>
            <div className="h3  row mt-2 ">
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>SUBSIDIO</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>$ {prestamos.capital}</strong>
              </div>

              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>CUOTAS</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>{prestamos.plan_cuotas}</strong>
              </div>

              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>MONTO POR CUOTA</u>:
                </strong>
              </div>

              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>$ {prestamos.cuota_mensual}</strong>
              </div>

              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>CAPITAL A DEVOLVER</u>:
                </strong>
              </div>

              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>$ {prestamos.capital_dev}</strong>
              </div>

            </div>



          </div>
        </div>

        <div className="jumbotron container">
          <div className="mt-4 p-4 border">
            <h3 className="text-center mb-4 font-weight-bold">Opciones</h3>
            <div className="d-flex justify-content-center">
              {/* <ReactToPrint
                trigger={() => (
                  <button className="btn btn-primary">imprimir </button>
                )}
                content={() => componentRef}
              /> */}
              <button className="btn btn-primary" onClick={imprimir}>
                Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CaratulaEmpleados;
