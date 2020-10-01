import React, { useState } from "react";

import ReactTable from "react-table";
import matchSorter from "match-sorter";
import FormAcciones from "./FormAcciones";
import Notificacion from "./Notificacion";

import moment from "moment-timezone";
import axios from "axios";
import toastr from "toastr";

const ListadoCasos = ({ campana, operador, modal }) => {
  let fechaaccionRef = React.createRef();
  let fechaaccionnuevaRef = React.createRef();
  let obsRef = React.createRef();
  let nuevaaccionRef = React.createRef();
  let contratoRef = React.createRef();
  let idcasoRef = React.createRef();

  let casos = Object.values(campana);

  const [caso, guardarCaso] = useState({});
  const [accion, guardarAccion] = useState({});
  const [nuevaaccion, guardarNuevaAccion] = useState({});
  const [gestion, guardarGestion] = useState({});

  const selcaso = (index) => {
    campana;
    const caso = campana[index];
    guardarCaso(caso);

    getGestionCaso(caso.idcaso);
  };

  const handleChange = (value, flag) => {
    if (flag === "accion") {
      const accion = value.value;
      guardarAccion(accion);
    } else if (flag === "nuevaaccion") {
      const nuevaaccion = value.value;
      guardarNuevaAccion(nuevaaccion);
    }
  };

  const getGestionCaso = async (id) => {
    await axios
      .get(`http://190.231.32.232:5002/api/sgi/campanas/getgestioncaso/${id}`)
      .then((res) => {
        console.log(res);
        const gestion = res.data[0];
        guardarGestion(gestion);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cerrarCaso = async (id) => {
    await axios
      .put(`http://190.231.32.232:5002/api/sgi/campanas/cerrarcaso/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const gestionCaso = async (datos) => {
    await axios
      .post(`http://190.231.32.232:5002/api/sgi/campanas/gestioncaso`, datos)
      .then((res) => {
        console.log(res);
        toastr.success("Se registro la accion con exito", "ANTENCION");
      })
      .catch((error) => {
        console.log(error);
        toastr.error("Ocurrio un problema con el registro", "ANTENCION");
      });
  };

  const updateAccion = async (id) => {
    await axios
      .put(`http://190.231.32.232:5002/api/sgi/campanas/updateaccion/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const obtenerDatos = (e) => {
    e.preventDefault();

    let fecha = moment().format("YYYY-MM-DD");

    let fechanuevaaccion = "";

    const datos = {
      operador: operador,
      idcaso: idcasoRef.current.value,
      accion: accion,
      fechanuevaaccion,
      nuevaaccion,
      fechaaccion: fecha,
      observacion: obsRef.current.value,
      contrato: contratoRef.current.value,
    };

    if (datos.accion >= 1 && datos.accion <= 6) {
      datos.nuevaaccion = "VERIFICAR LOS DATOS Y LLAMAR DE NUEVO";
      datos.fechanuevaaccion = fecha;
    }
    if (datos.accion === 7) {
      datos.nuevaaccion = nuevaaccion;

      if (datos.nuevaaccion === 11) datos.nuevaaccion = "SE ENVIA COBRADOR";

      if (datos.nuevaaccion === 12) datos.nuevaaccion = "PASA POR OFICINA";

      if (datos.nuevaaccion === 16)
        datos.nuevaaccion = "PASA POR OFICINA Y PAGA CON DEBITO";

      if (datos.nuevaaccion === 17)
        datos.nuevaaccion = "PASA POR OFICINA Y PAGA CON CREDITO";

      datos.fechanuevaaccion = fechaaccionnuevaRef.current.value;
    }

    if (datos.accion === 8) {
      datos.nuevaaccion = "SOCIO DE NIEGA A PAGAR, SE CIERRA EL CASO";
      datos.fechanuevaaccion = fechaaccionnuevaRef.current.value;
      let id = datos.idcaso;
      cerrarCaso(id);
    }
    if (datos.accion === 9) {
      datos.nuevaaccion = "SOCIO ESTA AL DIA CON SUS PAGOS, SE CIERRA EL CASO";
      datos.fechanuevaaccion = fechaaccionnuevaRef.current.value;
      let id = datos.idcaso;
      cerrarCaso(id);
    }
    if (datos.accion === 10) {
      datos.nuevaaccion = "SOCIO SERA NOTIFICADO, SE CIERRA EL CASO";
      datos.fechanuevaaccion = fechaaccionnuevaRef.current.value;
      let id = datos.idcaso;
      cerrarCaso(id);
    }
    if (datos.accion === 13) {
      datos.nuevaaccion =
        "SOCIO PASARA AL ESTADO DE CARTERA ROJA, SE CIERRA EL CASO";
      datos.fechanuevaaccion = fecha;
      let id = datos.idcaso;
      cerrarCaso(id);
    }
    if (datos.accion === 14) {
      datos.nuevaaccion = "SOCIO FALLECIDO, SE CIERRA EL CASO";
      datos.fechanuevaaccion = fecha;
      let id = datos.idcaso;
      cerrarCaso(id);
    }
    if (datos.accion === 15) {
      datos.fechanuevaaccion = fecha;
      datos.nuevaaccion = "RECORDATORIO DE PAGO AL SOCIO QUE AUN ESTA AL DIA";

      let id = datos.idcaso;
      cerrarCaso(id);
    }
    if (datos.accion === 18) {
      datos.fechanuevaaccion = fecha;
      datos.nuevaaccion = "EL COMPROMISO DE PAGO SE CONCRETO CORRECTAMENTE";

      let id = datos.idcaso;
      cerrarCaso(id);
    }
    if (datos.accion === 19) {
      datos.fechanuevaaccion = fecha;
      datos.nuevaaccion = "EL INCUMPLIMIENTO EN EL COMPROMISO DE PAGO";

      let id = datos.idcaso;
      cerrarCaso(id);
    }

    gestionCaso(datos);

    let id = datos.idcaso;
    updateAccion(id);

    console.log(datos);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  let fechahoy = moment().format("YYYY-MM-DD");
  return (
    <div className="mt-4">
      <ReactTable
        data={casos}
        filterable
        defaultFilterMethod={(filter, row) => row[filter.id] === filter.value}
        columns={[
          {
            Header: "Cartera",
            columns: [
              {
                Header: "Contrato",
                id: "contrato",
                accessor: (d) => d.contrato,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["contrato"] }),
                filterAll: true,
                width: 80,
              },
              {
                Header: "Apellido",
                id: "apellido",
                accessor: (d) => d.apellido,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["apellido"] }),
                filterAll: true,
              },
              {
                Header: "Nombre",
                id: "nombre",
                accessor: (d) => d.nombre,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["nombre"] }),
                filterAll: true,
              },

              {
                Header: "DNI",
                id: "dni",
                accessor: (d) => d.dni,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["dni"] }),
                filterAll: true,
                width: 100,
              },
              {
                Header: "Calle",
                id: "calle",
                accessor: (d) => d.calle,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["calle"] }),
                filterAll: true,
              },
              {
                Header: "N°",
                id: "nro_calle",
                accessor: (d) => d.nro_calle,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["nro_calle"] }),
                filterAll: true,
              },
              {
                Header: "Barrio",
                id: "barrio",
                accessor: (d) => d.barrio,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["barrio"] }),
                filterAll: true,
              },
              // {
              //     Header: "Localidad",
              //     id: "localidad",
              //     accessor: d => d.localidad,
              //     filterMethod: (filter, rows) =>
              //         matchSorter(rows, filter.value, { keys: ["localidad"] }),
              //     filterAll: true
              // },
              {
                Header: "Cuota",
                id: "cuota",
                accessor: (d) => d.cuota,
                filterMethod: (filter, rows) =>
                  matchSorter(rows, filter.value, { keys: ["cuota"] }),
                filterAll: true,
              },
              // {
              //   Header: "Mes",
              //   id: "mes",
              //   accessor: (d) => d.mes,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, { keys: ["mes"] }),
              //   filterAll: true,
              // },
              // {
              //   Header: "Año",
              //   id: "ano",
              //   accessor: (d) => d.ano,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, { keys: ["ano"] }),
              //   filterAll: true,
              // },
              // {
              //   getProps: (state, rowInfo) => {
              //     if (rowInfo && rowInfo.row.fechanuevaaccion) {
              //       return {
              //         style: {
              //           background:
              //             rowInfo.row.fechanuevaaccion < fechahoy
              //               ? "red"
              //               : rowInfo.row.fechanuevaaccion > fechahoy
              //               ? "green"
              //               : rowInfo.row.fechanuevaaccion === fechahoy
              //               ? "yellow"
              //               : null,
              //         },
              //       };
              //     } else {
              //       return { hidden: true };
              //     }
              //   },

              //   Header: "Fecha Accion",
              //   id: "fechanuevaaccion",
              //   accessor: (d) => d.fechanuevaaccion,
              //   filterMethod: (filter, rows) =>
              //     matchSorter(rows, filter.value, {
              //       keys: ["fechanuevaaccion"],
              //     }),
              //   filterAll: true,
              // },

              {
                Header: "Acciones",

                Cell: (row) => (
                  <div>
                    {modal === "lgnoti" ? (
                      <a
                        href={"#"}
                        className="btn btn-warning"
                        data-toggle="modal"
                        data-target={`.bd-example-modal-xl${modal}`}
                        onClick={() => selcaso(row.index)}
                      >
                        Generar Notificacion
                      </a>
                    ) : (
                      <>
                        <a
                          href={"#"}
                          className="btn btn-primary btn-sm mr-1"
                          data-toggle="modal"
                          data-target={`.bd-example-modal-${modal}`}
                          onClick={() => selcaso(row.index)}
                        >
                          <i className="fa fa-book" aria-hidden="true"></i>
                        </a>
                        <a
                          href={"#"}
                          className="btn btn-warning btn-sm"
                          data-toggle="modal"
                          data-target={`.bd-example-modal-xl${modal}`}
                          onClick={() => selcaso(row.index)}
                        >
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                      </>
                    )}
                  </div>
                ),
              },
            ],
          },
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
      />

      <div
        className={`modal fade bd-example-modal-${modal}`}
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Registrar Accion
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <FormAcciones
                gestion={gestion}
                caso={caso}
                accion={accion}
                fechaaccionRef={fechaaccionRef}
                fechaaccionnuevaRef={fechaaccionnuevaRef}
                obsRef={obsRef}
                nuevaaccionRef={nuevaaccionRef}
                contratoRef={contratoRef}
                idcasoRef={idcasoRef}
                handleChange={handleChange}
                obtenerDatos={obtenerDatos}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={obtenerDatos}
                data-dismiss="modal"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade bd-example-modal-xl${modal}`}
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content p-2">
            <Notificacion caso={caso} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoCasos;
