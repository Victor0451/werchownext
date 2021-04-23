import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/Layout";
import ListadoServicios from "../../../components/sepelio/servicios/ListadoServicio";
import jsCookie, { get } from "js-cookie";
import axios from "axios";
import PeriodoServicios from "../../../components/sepelio/servicios/PeriodoServicios";
import moment from "moment";
import { ip } from '../../../config/config'
import Link from 'next/link'
import Router from "next/router";

const listado = () => {
  let desdeRef = React.createRef();
  let hastaRef = React.createRef();

  const [listado, guardarListado] = useState(null);
  const [error, guardarError] = useState(null);
  const [desde, guardarDesde] = useState(null);
  const [hasta, guardarHasta] = useState(null);
  const [row, guardarRow] = useState(null)

  let token = jsCookie.get("token");

  const buscarServicios = async () => {
    guardarError(null);

    let desde = moment(desdeRef.current.value).format("YYYY-MM-DD");
    let hasta = moment(hastaRef.current.value).format("YYYY-MM-DD");
    if (desde === "" || hasta === "") {
      guardarError("Los campos desde y hasta no pueden estar vacios");
    } else if (desde > hasta) {
      guardarError(`La fecha "desde" no puede ser mayor a la fecha "hasta" `);
    } else {
      guardarDesde(desde);
      guardarHasta(hasta);
      await axios
        .get(
          `${ip}api/sepelio/servicio/listadoservicios`,
          {
            params: {
              desde: desde,
              hasta: hasta,
            },
          }
        )

        .then((res) => {
          const listado = res.data;
          guardarListado(listado);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const todoLosServicios = async () => {
    console.log("toy");
    await axios
      .get(`${ip}api/sepelio/servicio/todoslosservicios`)
      .then((res) => {
        guardarListado(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRow = (data) => {
    guardarRow(null)

    guardarRow(data)
  }

  useEffect(() => {
    if (!token) {
      Router.push("/redirect");
    }
  }, []);

  const push = (p1, p2, url) => {

    Router.push(
      {
        pathname: url,
        query: {
          id: p1,
          idservicio: p2
        },
      })



  }

  return (
    <Layout>
      {listado === null ? (
        <PeriodoServicios
          desdeRef={desdeRef}
          hastaRef={hastaRef}
          buscarServicios={buscarServicios}
          todoLosServicios={todoLosServicios}
          error={error}
        />
      ) : (
        <>
          <ListadoServicios
            listado={listado}
            desde={desde}
            hasta={hasta}
            datatoggle="modal"
            datatarget="#opciones"
            getRow={getRow}
          />

          {/* <!-- Modal --> */}
          <div className="modal fade" id="opciones" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Opciones</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {row ? (
                    <div className="p-4">
                      <div className=" border border-dark alert alert-primary p-4 row">
                        <div className="col-md-3">

                          <button
                            className="btn btn-block btn-primary mr-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Imprimir Solicitud"
                            data-dismiss="modal"
                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/impresion")}
                          >
                            <i className="fa fa-print" aria-hidden="true"> Imprimir</i>
                          </button>

                        </div>

                        <div className="col-md-3">

                          <button
                            className="btn btn-block btn-secondary border mr-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Editar Servicio"
                            data-dismiss="modal"
                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/editar")}
                          >
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            > Editar</i>
                          </button>

                        </div>


                        <div className="col-md-3">

                          <button
                            className="btn btn-block btn-warning  mr-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Legajo Virtual"
                            data-dismiss="modal"
                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/legajovirtual/legajo")}
                          >
                            <i
                              className="fa fa-folder-open"
                              aria-hidden="true"
                            > Legajo Virtual</i>
                          </button>

                        </div>
                        <div className="col-md-3">

                          <button
                            className="btn btn-block btn-success mr-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Subir Archivos"
                            data-dismiss="modal"
                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/legajovirtual/subirarchivos")}
                          >
                            <i className="fa fa-upload" aria-hidden="true"> Subir Archivos</i>
                          </button>

                        </div>


                        <div className="col-md-3 mt-4">

                          <button
                            className="btn btn-block btn-danger border mr-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Detalles Servicio"
                            data-dismiss="modal"
                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/detalles/nuevo")}
                          >

                            <i className="fa fa-sort-amount-desc" aria-hidden="true">
                              {""} Detalles del Servicio</i>
                          </button>

                        </div>


                        <div className="col-md-3 mt-4">

                          <button
                            className="btn btn-block btn-info mr-1"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Cargar Gastos"
                            data-dismiss="modal"
                            onClick={() => push(row.dni, row.idservicio, "/sepelio/servicios/gastos/gastos")}

                          >
                            <i className="fa fa-money" aria-hidden="true"> Cargar Gastos</i>
                          </button>

                        </div>
                      </div>
                    </div>
                  ) : null}

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>

                </div>
              </div>
            </div>
          </div>

        </>
      )}
    </Layout>
  );
};

export default listado;
