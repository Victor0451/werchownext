import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ReactToPrint from "react-to-print";
import Layout from "../../components/layout/Layout";
import Router from "next/router";
import JsCookie from "js-cookie";
import { ip } from '../../config/config'
import moment from "moment";

const caratula = () => {
  let componentRef = React.createRef();

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const [prestamos, guardarPrestamos] = useState(null);
  const [ficha, guardarFicha] = useState(null);

  const prestamoPorId = async (id) => {
    await axios
      .get(`${ip}api/sgi/prestamos/prestamosporid/${id}`)
      .then((res) => {
        let prestamos = res.data;
        guardarPrestamos(prestamos);

        consultarFicha(prestamos.ptm_ficha);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const consultarFicha = async (contrato) => {
    await axios
      .get(
        `${ip}api/sgi/prestamos/consultarficha/${contrato}`
      )
      .then((res) => {
        let ficha = res.data;
        guardarFicha(ficha);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

    window.location.replace(`/prestamos/imprimircaratula`);
  };

  if (!ficha) return <div>Cargando...</div>;

  let porcentaje = Math.floor(prestamos.ptm_neto * 30) / 100;
  return (
    <Layout>
      <div className="container">
        <div
          id="caratula"
          className=" border p-4"
          ref={(el) => (componentRef = el)}
        >
          <div className="jumbotron">
            <h1 className="mt-4 mb-4 alert text-center text-uppercase">
              <strong>
                <u>Subsidio Por Contencion Familiar</u>
              </strong>
            </h1>
            <h2 className="border jumbotron mt-4 mb-4 p-4 col-md-12">
              <strong>
                <u>Beneficiario</u>: {ficha.APELLIDOS}, {ficha.NOMBRES}
              </strong>
            </h2>{" "}
            <div className=" h3 row mt-2 ">
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>DNI</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong> {ficha.NRO_DOC}</strong>
              </div>
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>LEGAJO</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong> {prestamos.ptm_legajo}</strong>
              </div>
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>FICHA</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong> {ficha.CONTRATO}</strong>
              </div>
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>ANTIGUIEDAD</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong> {prestamos.ptm_ant} AÑOS</strong>
              </div>
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>FECHA DE SOLICITUD</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>{moment(prestamos.ptm_fechasol).format('DD/MM/YYYY')}</strong>
              </div>{" "}
              <div className="col-md-4 mt-2 border">
                <strong>
                  <u>ZONA</u>:
                </strong>
              </div>
              {ficha.SUCURSAL === "W" ? (
                <div className="col-md-8 mt-2 border">
                  {" "}
                  <strong>CASA CENTRAL</strong>
                </div>
              ) : ficha.SUCURSAL === "P" ? (
                <div className="col-md-8 mt-2 border">
                  {" "}
                  <strong>SAN PEDRO</strong>
                </div>
              ) : ficha.SUCURSAL === "L" ? (
                <div className="col-md-8 mt-2 border">
                  {" "}
                  <strong>PALPALA</strong>
                </div>
              ) : ficha.SUCURSAL === "R" ? (
                <div className="col-md-8 mt-2 border">
                  {" "}
                  <strong>PERICO</strong>
                </div>
              ) : null}{" "}
              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>RENOVACION</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>{prestamos.ptm_renov}</strong>
              </div>
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
                <strong>$ {prestamos.ptm_prestamo}</strong>
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
                <strong>{prestamos.ptm_cuotas}</strong>
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
                <strong>$ {prestamos.ptm_valcuota}</strong>
              </div>

              <div className="col-md-4 mt-2 border">
                {" "}
                <strong>
                  {" "}
                  <u>SUELDO NETO</u>:
                </strong>
              </div>
              <div className="col-md-8 mt-2 border">
                {" "}
                <strong>$ {prestamos.ptm_neto}</strong>
              </div>
            </div>
            <hr className="mt-4 mb-4 border-bottom border-dark" />
            <h2 className="mt-4">
              <strong>
                <u>Observaciones</u>
              </strong>
            </h2>
            <div className=" h5 row ">
              <div className="col-md-12 mt-2">
                {porcentaje > prestamos.ptm_valcuota ? (
                  <div className="alert alert-success border-dark">
                    <strong>
                      <u>PREAPROBACION</u>
                    </strong>
                    : EL 30% DEL SUELDO NETO DEL AFILIADO SUPERA AL VALOR DEL
                    SUBSIDIO SOLICITADO{" "}
                  </div>
                ) : porcentaje < prestamos.ptm_valcuota ? (
                  <div className="alert alert-danger border-dark">
                    <strong>
                      <u>PREAPROBACION</u>
                    </strong>
                    : EL 30% DEL SUELDO NETO DEL AFILIADO NO SUPERA AL VALOR DEL
                    SUBSIDIO SOLICITADO{" "}
                  </div>
                ) : null}
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

export default caratula;
